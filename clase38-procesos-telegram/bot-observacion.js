require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error("Falta TELEGRAM_BOT_TOKEN en el archivo .env");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("Bot en modo observacion. El proceso esta corriendo.");

bot.on("message", (msg) => {
  console.log("Mensaje recibido:", msg.text);
});
