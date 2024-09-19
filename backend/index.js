import fastify from "fastify";
import fastifyIO from "fastify-socket.io";
import redisClient from './redis.js'

const server = fastify({
  logger: true,
});

server.register(fastifyIO, {
  cors: {
    origin: "http://localhost:5173"
  }
});

server.get("/", (request, reply) => {
  server.io.emit("message", { message: `this is a message`, id: "server" });
  return reply.status(200).send("ok!");
});

server.post("/room/:name", (request, reply) => {
  const { roomName } = request.params
  try {
    server.io.join(roomName)
  } 
  catch (e) {
    console.error(e)
  } 
  finally {
    return reply.code(200).send({status: reply.statusCode, roomName})
  }
})

server.ready().then(() => {
  server.io.on("connection", (socket) => {

    socket.on("message", (data) => {
      if (redisClient.exists(data.room)) {
        redisClient.rPush(data.room, data.message)
      } else redisClient.set(data.room, [])
      socket.emit("message", data);
      socket.emit("message", {
        message: `resposta espelhada: ${data.message}`,
        id: "server",
      });
    });

    socket.on("room", (room) => {
      socket.join(room)
      socket.emit("room", room)
    });
  });
});

server.listen({ port: 3000 });

