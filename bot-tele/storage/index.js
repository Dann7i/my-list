import TelegramBot from "node-telegram-bot-api";
console.log("Bot started...");
const token = "8099406581:AAH2fEMnidQcfulmXiHbclaOsNf-HdCkI0k";

const danbot = new TelegramBot(token, { polling: true });

danbot.on("message", (pesan) => {
  const chatId = pesan.chat.id;
  danbot.sendMessage(chatId, "Hello, I'm your bot!");
  console.log("Pesan diterima:", pesan.text);
});
