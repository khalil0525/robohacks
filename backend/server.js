const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const { socket } = require("./utils/socket");
const path = require("path");

const server = require("http").createServer(app);
socket.init(server);

const {
	youtubeTranscriberController,
} = require("./controller/youtube-transcriber");

const { youtubeTestController } = require("./controller/youtube-transcriber");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(cors());
app.use(express.json());

app.post("/api/transcribe", youtubeTranscriberController);
app.post("/test/transcribe", youtubeTestController);
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});
server.listen(port);
