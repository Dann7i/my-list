import TelegramBot from "node-telegram-bot-api";
console.log("Bot started...");
const token = "8099406581:AAH2fEMnidQcfulmXiHbclaOsNf-HdCkI0k";
let started = /Halo/;
let chatId;
const danbot = new TelegramBot(token, { polling: true });
danbot.on("message", (pesan) => {
  pesan.chat.id;
  console.log("Pesan diterima:", pesan.text);
});
danbot.onText(started, (pesan) => {
  danbot.sendMessage(pesan.chat.id, "Halo! Ada yang bisa saya bantu?");
});
