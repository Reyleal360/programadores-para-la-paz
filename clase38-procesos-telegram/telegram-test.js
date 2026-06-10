require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!token || !chatId) {
  console.error("Faltan TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID en el archivo .env");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: false });

async function enviarMensaje() {
  try {
    await bot.sendMessage(
      chatId,
      "Clase 38: prueba inicial de Telegram desde Node.js realizada correctamente."
    );

    console.log("Mensaje enviado correctamente a Telegram.");
  } catch (error) {
    console.error("Error al enviar mensaje:", error.message);
  }
}

enviarMensaje();
