require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "App Comunitaria";
const APP_ENV = process.env.APP_ENV || "development";
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

app.use(express.json());

function existeTokenTelegram() {
  return Boolean(TELEGRAM_BOT_TOKEN);
}

app.get("/", (req, res) => {
  res.send(`
    <h1>${APP_NAME}</h1>
    <p>Aplicación activa.</p>
    <p>Clase 42 - Seguridad operativa aplicada</p>
  `);
});

app.get("/saludo", (req, res) => {
  res.json({
    mensaje: "Hola. La aplicación comunitaria está respondiendo correctamente."
  });
});

app.get("/estado", (req, res) => {
  res.json({
    estado: "activo",
    mensaje: "La aplicación está disponible"
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    programa: "Capacitación en Democracia y Tecnología",
    alias: "Programadores para la Paz",
    semana: 9,
    clase: 42,
    tema: "Seguridad operativa aplicada"
  });
});

app.get("/diagnostico", (req, res) => {
  res.json({
    entorno: APP_ENV,
    telegramConfigurado: existeTokenTelegram(),
    nota: "Esta ruta es de práctica. No muestra tokens ni credenciales."
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    mensaje: "Verifique la dirección consultada."
  });
});

app.listen(PORT, () => {
  console.log("Servidor iniciado correctamente");
  console.log(`Aplicación: ${APP_NAME}`);
  console.log(`Entorno: ${APP_ENV}`);
  console.log(`Puerto configurado: ${PORT}`);

  if (existeTokenTelegram()) {
    console.log("Telegram: token detectado, pero no se imprime por seguridad.");
  } else {
    console.warn("Telegram: token no configurado.");
  }
});
