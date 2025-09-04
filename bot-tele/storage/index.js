import { handleMessage } from "./handler/message.js";
import ai from "./fitur/ai/gemini.js";
import TelegramBot from "node-telegram-bot-api";
console.log("Bot started...");
const token = "8099406581:AAH2fEMnidQcfulmXiHbclaOsNf-HdCkI0k";
let isActive = true;
//let started = /Halo/;
//let chatId;
const danbot = new TelegramBot(token, { polling: true });

danbot.on("message", async (pesan) => {
  const chatId = pesan.chat.id;
  handleMessage(pesan, chatId, danbot);
  const userMessage = pesan.text;
  if (!userMessage) return;
  const reply = await ai(userMessage)
	danbot.sendMessage(chatId, reply);
});

console.log(TelegramBot);
