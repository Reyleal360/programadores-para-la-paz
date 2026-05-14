// app.js — Lógica del cliente usando fetch
// Este archivo hace solicitudes al servidor Express usando fetch

// ── 1. GET /api/campania ─────────────────────────────────────────────────────
async function consultarCampania() {
  const respuestaCampania = document.getElementById("respuestaCampania")
  respuestaCampania.textContent = "Consultando al servidor…"

  try {
    const respuesta = await fetch("/api/campania")
    const texto = await respuesta.text()
    respuestaCampania.textContent = texto
  } catch (error) {
    respuestaCampania.textContent = "❌ Error al consultar la campaña: " + error.message
  }
}

// ── 2. GET /api/avisos ───────────────────────────────────────────────────────
async function consultarAvisos() {
  const respuestaAvisos = document.getElementById("respuestaAvisos")
  respuestaAvisos.textContent = "Consultando al servidor…"

  try {
    const respuesta = await fetch("/api/avisos")
    const texto = await respuesta.text()
    respuestaAvisos.textContent = texto
  } catch (error) {
    respuestaAvisos.textContent = "❌ Error al consultar los avisos: " + error.message
  }
}

// ── 3. POST /api/propuestas ──────────────────────────────────────────────────
async function enviarPropuesta() {
  const campoPropuesta = document.getElementById("campoPropuesta")
  const respuestaEnvio = document.getElementById("respuestaEnvio")

  const textoPropuesta = campoPropuesta.value.trim()

  if (!textoPropuesta) {
    respuestaEnvio.textContent = "⚠️ Escribe una propuesta antes de enviar."
    return
  }

  respuestaEnvio.textContent = "Enviando propuesta al servidor…"

  try {
    const respuesta = await fetch("/api/propuestas", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      },
      body: textoPropuesta
    })

    const texto = await respuesta.text()
    respuestaEnvio.textContent = texto
  } catch (error) {
    respuestaEnvio.textContent = "❌ Error al enviar la propuesta: " + error.message
  }
}
