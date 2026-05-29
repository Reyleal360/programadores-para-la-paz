// =============================================
// app.js – Plataforma Juvenil de Participación
// Clase 28: Pantalla de Candidatos y Perfiles Responsables
// =============================================

// Selección de elementos del DOM de la Clase 27
const botonMensaje = document.getElementById("btnMensaje");
const mensajeClase = document.getElementById("mensajeClase");

// Evento: mostrar mensaje al hacer clic en el botón (Clase 27)
if (botonMensaje) {
  botonMensaje.addEventListener("click", function () {
    mensajeClase.textContent =
      "Clase 27: avanzamos en la estructura del proyecto conectando HTML, CSS y JavaScript.";
  });
}

// Selección de elementos del DOM de la Clase 28
const botonesPerfil = document.querySelectorAll(".btnPerfil");
const detallePerfil = document.getElementById("detallePerfil");

botonesPerfil.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const perfil = boton.getAttribute("data-perfil");

    detallePerfil.innerHTML = `
      <h3>Información del perfil</h3>
      <p><strong>Perfil seleccionado:</strong> ${perfil}</p>
      <p>
        Este perfil es ficticio y se utiliza únicamente como parte de una práctica académica
        para aprender a construir interfaces de participación ciudadana.
      </p>
      <p>
        No corresponde a una candidatura real, no permite votar y no debe usar datos personales reales.
      </p>
    `;
  });
});
