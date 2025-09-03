import { handleMessage } from "./handler/message.js";
import TelegramBot from "node-telegram-bot-api";
console.log("Bot started...");
const token = "8099406581:AAH2fEMnidQcfulmXiHbclaOsNf-HdCkI0k";
//let started = /Halo/;
//let chatId;
const danbot = new TelegramBot(token, { polling: true });

danbot.on("message", (pesan) => {
  const chatId = pesan.chat.id;
  console.log("Pesan diterima:", pesan.text);
  handleMessage(pesan, chatId, danbot);
});

console.log(TelegramBot);
