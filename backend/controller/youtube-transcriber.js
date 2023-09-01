const {
	YtAudioDownloadService,
} = require("../services/AudioDownloaderService");
const speechSdk = require("microsoft-cognitiveservices-speech-sdk");

const { Transcribe } = require("../services/Transcribe");
const { socket } = require("../utils/socket");
const { TextSummary } = require("../services/text-summary");
const { TextToxicity } = require("../services/text-toxicity");
const toxicity = require("@tensorflow-models/toxicity");
const cohere = require("cohere-ai");
require("dotenv").config();
const io = socket.get();
let client = null;
const { createClient } = require("redis");
const redis = createClient(process.env.REDIS_TLS_URL);
redis.connect();

const loadingStates = [
	"Video is being downloaded",
	"Video is being transcribed",
	"Transcript is being filtered for harmful content",
	"A summary is being generated",
];

redis.on("error", (err) => console.log("Redis Client Error", err));

io.on("connection", (socket) => {
	client = socket;
	console.log("client connected");
	client.on("disconnect", () => {
		console.log("client disconnected");
	});
});

function youtubeTranscriberController(req, res) {
	const dummyResponse = {
		summary: "This is a summary",
		sentences: [
			{ sentence: "sentence1", toxicity: true },
			{ sentence: "sentence2", toxicity: false },
		],
	};

	res.json(dummyResponse);
}

async function youtubeTestController(req, res) {
	try {
		const videoUrl = req.body.url;
		console.log(videoUrl);
		const cache = await redis.get(videoUrl);
		if (cache) {
			console.log("found in cache");
			res.json(JSON.parse(cache));
		} else {
			const audioDownloader = new YtAudioDownloadService();
			const fileDestination = await audioDownloader.downloadAudio(videoUrl);
			if (client) {
				client.emit("loading", JSON.stringify({ message: loadingStates[1] }));
			}
			const youtubeTranscriber = new Transcribe(speechSdk);
			const transcript = await youtubeTranscriber.convertSpeechIntoText(
				fileDestination
			);
			const transcriptFormatted = transcript.trim().replaceAll("\n", "");
			if (client) {
				client.emit("loading", JSON.stringify({ message: loadingStates[2] }));
			}

			let sentences = transcriptFormatted.split(".");
			const tensorflow = new TextToxicity(toxicity);
			const toxicityScores = await tensorflow.detectToxicity(0.5, sentences);

			if (client) {
				client.emit("loading", JSON.stringify({ message: loadingStates[3] }));
			}

			const summaryModel = new TextSummary(cohere);
			const summary = await summaryModel.generate(transcriptFormatted);
			const data = {
				summary: summary.trim().replaceAll("\n", ""),
				sentences: toxicityScores,
			};
			await redis.set(videoUrl, JSON.stringify(data));
			res.json(data);
		}
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
}

exports.youtubeTranscriberController = youtubeTranscriberController;
exports.youtubeTestController = youtubeTestController;
