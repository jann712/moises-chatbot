import fastify from "fastify";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fastifyCors from "@fastify/cors";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  maxOutputTokens: 200,
});

const server = fastify({
  logger: true,
});

server.register(fastifyCors, {
  origin: process.env.FRONTEND_URL,
});

server.post("/prompt", async (request, reply) => {
  const messages = request.body;

  const chat = model.startChat({
    history: messages,
  });


  const result = await chat.sendMessage(messages[messages.length -1].parts[0].text);

  console.log(result.response.text())
  return reply.status(200).send(result.response.text());
  
});

server.listen({ port: process.env.PORT || 3000, host: process.env.HOST || "localhost"});
