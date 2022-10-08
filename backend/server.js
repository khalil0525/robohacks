const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const { socket } = require("./utils/socket");
const server = require("http").createServer(app);
socket.init(server);
const io = socket.get();
let clientConnection = null;

app.use(cors());
app.use(express.json());

io.on("connection", (client) => {
  clientConnection = client;
  console.log("client connected");
  clientConnection.on("disconnect", () => {
    console.log("client disconnected");
  });
});

server.listen(port);
