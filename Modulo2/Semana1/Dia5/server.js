const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const puerto = 3000
const rutaArchivo = path.join(__dirname, "data", "propuestas.json")

// Middleware: parsea JSON en el body de las solicitudes
app.use(express.json())

// Sirve los archivos estáticos de la carpeta public
app.use(express.static(path.join(__dirname, "public")))

// ── GET /api/propuestas ──────────────────────────────────────────────────────
// Devuelve la lista de propuestas guardadas en data/propuestas.json
app.get("/api/propuestas", (req, res) => {
  const contenido = fs.readFileSync(rutaArchivo, "utf-8")
  const propuestas = JSON.parse(contenido)
  res.json(propuestas)
})

// ── POST /api/propuestas ─────────────────────────────────────────────────────
// Recibe una nueva propuesta, valida campos y la guarda en el archivo JSON
app.post("/api/propuestas", (req, res) => {
  const { titulo, mensaje } = req.body

  // Validación: título requerido
  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({ error: "El título es obligatorio." })
  }

  // Validación: mensaje requerido
  if (!mensaje || mensaje.trim() === "") {
    return res.status(400).json({ error: "El mensaje es obligatorio." })
  }

  // Leer propuestas existentes
  const contenido = fs.readFileSync(rutaArchivo, "utf-8")
  const propuestas = JSON.parse(contenido)

  // Crear nueva propuesta con modelo de datos tipo message
  const nuevaPropuesta = {
    id: Date.now(),
    titulo: titulo.trim(),
    mensaje: mensaje.trim(),
    fecha: new Date().toISOString()
  }

  // Agregar y guardar
  propuestas.push(nuevaPropuesta)
  fs.writeFileSync(rutaArchivo, JSON.stringify(propuestas, null, 2), "utf-8")

  console.log("📩 Propuesta recibida y guardada:")
  console.log(nuevaPropuesta)

  res.status(201).json({ confirmacion: "Propuesta registrada exitosamente.", propuesta: nuevaPropuesta })
})

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada." })
})

app.listen(puerto, () => {
  console.log("🚀 API comunitaria activa en http://localhost:3000")
  console.log("Rutas disponibles:")
  console.log("  GET  /api/propuestas")
  console.log("  POST /api/propuestas")
})
