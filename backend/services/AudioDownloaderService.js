const { MediaDownloader } = require("../services/media-downloader");
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const { MediaConverter } = require("../services/media-converter");
const path = require("path");

const audioPreset = {
	quality: "highestaudio",
	filter: "audioonly",
};

class YtAudioDownloadService {
	async downloadAudio(videoUrl) {
		try {
			console.log("Starting audio download...");

			const youtubeDownloader = new MediaDownloader(ytdl);
			youtubeDownloader.setStream(videoUrl, audioPreset);
			const videoId = await youtubeDownloader.getVideoId(videoUrl);
			console.log("Video ID:", videoId);

			const audioConverter = new MediaConverter(ffmpeg);
			const stream = youtubeDownloader.getStream();
			const fileDestination = path.join(
				__dirname,
				"audio-files",
				`${videoId}.wav`
			);
			console.log("File destination:", fileDestination);

			await audioConverter.convertAudio(stream, "wav", fileDestination);

			console.log("Finished audio download.");
			return fileDestination;
		} catch (error) {
			console.error("Error during audio download:", error);
			throw error; // Rethrow the error to handle it at a higher level
		}
	}
}

exports.YtAudioDownloadService = YtAudioDownloadService;
