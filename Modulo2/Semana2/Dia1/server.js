const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()
const puerto = 3000

// Middleware para servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")))

// Ruta API: GET /api/mensajes
app.get("/api/mensajes", (req, res) => {
  const rutaMensajes = path.join(__dirname, "data", "mensajes.json")
  const contenido = fs.readFileSync(rutaMensajes, "utf-8")
  res.json(JSON.parse(contenido))
})

// Ruta API: GET /api/calendario
app.get("/api/calendario", (req, res) => {
  const rutaCalendario = path.join(__dirname, "data", "calendario-editorial.json")
  const contenido = fs.readFileSync(rutaCalendario, "utf-8")
  res.json(JSON.parse(contenido))
})

// Manejo de error 404
app.use((req, res) => {
  res.status(404).send("Lo sentimos, no encontramos lo que buscas.")
})

app.listen(puerto, () => {
  console.log("🚀 Mini-sitio comunitario corriendo en http://localhost:3000")
  console.log("Rutas de la API disponibles:")
  console.log(" - GET /api/mensajes")
  console.log(" - GET /api/calendario")
})
