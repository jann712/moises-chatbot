import fastify from "fastify";
import fastifyIO from "fastify-socket.io";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fastifyCors from "@fastify/cors";
import 'dotenv/config'

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash", maxOutputTokens: 20})

const server = fastify({
  logger: true,
});

// server.register(fastifyIO, {
//   cors: {
//     origin: "http://localhost:5173",
    
//   },
// });

server.register(fastifyCors, {
  origin: "http://localhost:5173"
})

server.post(("/prompt"), async (request, reply) => {
  let { prompt } = request.body
  console.log(request.body)
  // prompt.concat(", explain briefly")
  
  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  return reply.status(200).send(text)
})

// server.ready().then(() => {
//   server.io.on("connection", (socket) => {
//     socket.on("message", (data) => {
//       // socket.emit("message", data);
//       socket.emit("message", [
//         data,
//         {
//           message: `resposta espelhada: ${data.message}`,
//           id: "server"
//         }
//       ]);
//     });

//     socket.on("room", (room) => {
//       socket.join(room);
//     });
//   });
// });

server.listen({ port: 3000 });
