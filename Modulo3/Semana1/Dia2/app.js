// =============================================
// app.js – Plataforma Juvenil de Participación
// Clase 27: Interacción inicial con JavaScript
// =============================================

// Selección de elementos del DOM
const botonMensaje = document.getElementById("btnMensaje");
const mensajeClase = document.getElementById("mensajeClase");

// Evento: mostrar mensaje al hacer clic en el botón
botonMensaje.addEventListener("click", function () {
  mensajeClase.textContent =
    "Clase 27: avanzamos en la estructura del proyecto conectando HTML, CSS y JavaScript.";
});
