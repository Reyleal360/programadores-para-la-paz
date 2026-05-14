// app.js — Lógica del cliente usando Promesas (.then / .catch)
// Día 5: Pruebas, Promesas y Trazabilidad

// Referencias a elementos del DOM
const btnEnviar = document.getElementById("btnEnviar")
const btnCargar = document.getElementById("btnCargar")
const listaPropuestas = document.getElementById("listaPropuestas")
const mensajeEstado = document.getElementById("mensajeEstado")
const inputTitulo = document.getElementById("titulo")
const inputMensaje = document.getElementById("mensaje")

// ── 1. CARGAR PROPUESTAS (GET) ──────────────────────────────────────────────
function cargarPropuestas() {
  listaPropuestas.innerHTML = "<p style='text-align:center;'>Cargando propuestas...</p>"

  // fetch devuelve una PROMESA
  fetch("/api/propuestas")
    .then((respuesta) => {
      // El primer .then procesa la respuesta del servidor
      if (!respuesta.ok) {
        throw new Error("Error en la respuesta del servidor")
      }
      return respuesta.json() // Esto también devuelve una promesa
    })
    .then((datos) => {
      // El segundo .then recibe los datos convertidos a JSON
      mostrarPropuestas(datos)
    })
    .catch((error) => {
      // .catch captura cualquier error en la cadena de promesas
      console.error("Fallo al cargar:", error)
      listaPropuestas.innerHTML = "<p class='error'>No se pudieron cargar las propuestas. Revisa la conexión con la API.</p>"
    })
}

// ── 2. ENVIAR PROPUESTA (POST) ──────────────────────────────────────────────
function enviarPropuesta() {
  const titulo = inputTitulo.value
  const mensaje = inputMensaje.value

  const nuevaPropuesta = {
    titulo: titulo,
    mensaje: mensaje
  }

  mostrarEstado("Enviando propuesta...", "info")

  // fetch con configuración para POST
  fetch("/api/propuestas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevaPropuesta) // Convierte objeto a texto JSON
  })
    .then((respuesta) => {
      // Convertir respuesta a JSON para leer el mensaje de confirmación o error
      return respuesta.json().then((datos) => {
        if (!respuesta.ok) {
          // Si el servidor respondió con error (400, 500, etc)
          throw new Error(datos.error || "Error al enviar")
        }
        return datos
      })
    })
    .then((resultado) => {
      mostrarEstado(resultado.confirmacion, "success")
      limpiarFormulario()
      cargarPropuestas() // Recargar la lista automáticamente
    })
    .catch((error) => {
      mostrarEstado("❌ " + error.message, "error")
    })
}

// ── FUNCIONES AUXILIARES ────────────────────────────────────────────────────

function mostrarPropuestas(propuestas) {
  if (propuestas.length === 0) {
    listaPropuestas.innerHTML = "<p style='text-align:center; color: #94a3b8;'>Aún no hay propuestas. ¡Sé el primero!</p>"
    return
  }

  listaPropuestas.innerHTML = ""
  
  // Recorrer el array y crear elementos HTML
  propuestas.reverse().forEach((p) => {
    const item = document.createElement("div")
    item.className = "propuesta-item"
    
    const fecha = new Date(p.fecha).toLocaleString()

    item.innerHTML = `
      <div class="propuesta-header">
        <span class="propuesta-titulo">${p.titulo}</span>
        <span class="propuesta-fecha">${fecha}</span>
      </div>
      <p class="propuesta-mensaje">${p.mensaje}</p>
    `
    listaPropuestas.appendChild(item)
  })
}

function mostrarEstado(texto, tipo) {
  mensajeEstado.textContent = texto
  mensajeEstado.className = ""
  mensajeEstado.style.display = "block"
  
  if (tipo === "error") mensajeEstado.classList.add("error")
  if (tipo === "success") mensajeEstado.classList.add("success")
  
  // Ocultar después de 5 segundos si es éxito
  if (tipo === "success") {
    setTimeout(() => {
      mensajeEstado.style.display = "none"
    }, 5000)
  }
}

function limpiarFormulario() {
  inputTitulo.value = ""
  inputMensaje.value = ""
}

// Asignar eventos
btnEnviar.addEventListener("click", enviarPropuesta)
btnCargar.addEventListener("click", cargarPropuestas)

// Cargar propuestas al iniciar
document.addEventListener("DOMContentLoaded", cargarPropuestas)
