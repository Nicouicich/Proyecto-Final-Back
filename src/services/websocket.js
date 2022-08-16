import http from 'http'
import { io } from 'socket.io'

export default function setWebSocket(server) {
  const myServer = io(server);

  myServer.on("connection", () => {
    console.log("Un cliente se conecto en el socket: ", socket.id);
  });
};
