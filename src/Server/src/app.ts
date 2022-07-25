import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "config";
import { Game } from "./Interfaces/Game";
const app = express();
const httpServer = createServer(app);

// setup the socket Server using the http express server
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const x: Game = { key: "2", value: "hem" };

x.key;
io.on("connection", (socket) => {
  // ...
  console.log("user has connected");

  socket.on("message", (msg) => {
    console.log("message revived: " + msg);
  });
});

console.log("hello world");
httpServer.listen(3000, () => console.log("start listening"));
