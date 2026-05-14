const express = require("express")
const path = require("path")

const app = express()
const puerto = 3000

// Middleware para leer texto plano en el body del POST
app.use(express.text())

// Sirve los archivos estáticos de la carpeta public (index.html, app.js)
app.use(express.static(path.join(__dirname, "public")))

// GET /api/campania - consulta el mensaje de campaña
app.get("/api/campania", (req, res) => {
  res.send("Campaña activa: 'Plataformas participativas para una democracia digital más fuerte y cercana a la comunidad'.")
})

// GET /api/avisos - consulta el aviso comunitario
app.get("/api/avisos", (req, res) => {
  res.send("Aviso comunitario: Verifica siempre las fuentes antes de compartir información. La verdad fortalece la convivencia.")
})

// POST /api/propuestas - recibe una propuesta comunitaria
app.post("/api/propuestas", (req, res) => {
  const propuesta = req.body

  console.log("📩 Propuesta recibida desde la página:")
  console.log(propuesta)

  res.send("✅ Propuesta registrada en la plataforma comunitaria: \"" + propuesta + "\". ¡Gracias por participar!")
})

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada. Revisa la dirección solicitada.")
})

app.listen(puerto, () => {
  console.log("🚀 Servidor Express activo en http://localhost:3000")
  console.log("Rutas disponibles:")
  console.log("  GET  /api/campania")
  console.log("  GET  /api/avisos")
  console.log("  POST /api/propuestas")
})
