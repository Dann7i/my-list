import TelegramBot from "node-telegram-bot-api";

const token = "8099406581:AAH2fEMnidQcfulmXiHbclaOsNf-HdCkI0k";

const bot = new TelegramBot(token, { polling: true });
console.log(bot);
