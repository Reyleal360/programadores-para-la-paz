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

// =============================================
// Conexión Frontend-Backend (Clase 29)
// =============================================
const btnGuardarCandidato = document.getElementById("btnGuardarCandidato");
const mensajeGuardado = document.getElementById("mensajeGuardado");
const contenedorCandidatosGuardados = document.getElementById("contenedorCandidatosGuardados");

async function cargarCandidatosGuardados() {
  try {
    const respuesta = await fetch("/api/candidatos");
    const candidatos = await respuesta.json();

    contenedorCandidatosGuardados.innerHTML = "";

    if (candidatos.length === 0) {
      contenedorCandidatosGuardados.innerHTML = "<p>No hay perfiles registrados aún.</p>";
      return;
    }

    candidatos.forEach(function (candidato) {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta-guardada");

      tarjeta.innerHTML = `
        <h3>${candidato.nombre}</h3>
        <p><strong>Rol:</strong> ${candidato.rol}</p>
        <p><strong>Propuesta:</strong> ${candidato.propuesta}</p>
        <p><strong>Estado:</strong> ${candidato.estado}</p>
      `;

      contenedorCandidatosGuardados.appendChild(tarjeta);
    });
  } catch (error) {
    console.error("Error al cargar candidatos:", error);
    contenedorCandidatosGuardados.innerHTML = "<p>Error al cargar los perfiles pedagógicos.</p>";
  }
}

if (btnGuardarCandidato) {
  btnGuardarCandidato.addEventListener("click", async function () {
    const nombreInput = document.getElementById("nombreCandidato");
    const rolInput = document.getElementById("rolCandidato");
    const propuestaInput = document.getElementById("propuestaCandidato");

    const nombre = nombreInput.value.trim();
    const rol = rolInput.value.trim();
    const propuesta = propuestaInput.value.trim();

    if (!nombre || !rol || !propuesta) {
      mensajeGuardado.textContent = "Completa nombre, rol y propuesta.";
      mensajeGuardado.style.color = "#C2185B";
      return;
    }

    const nuevoPerfil = {
      nombre: nombre,
      rol: rol,
      propuesta: propuesta
    };

    try {
      const respuesta = await fetch("/api/candidatos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoPerfil)
      });

      const resultado = await respuesta.json();
      mensajeGuardado.textContent = resultado.mensaje;
      mensajeGuardado.style.color = "#2E7D32"; // Green color for successful save

      nombreInput.value = "";
      rolInput.value = "";
      propuestaInput.value = "";

      // Clear successful message after 3 seconds
      setTimeout(() => {
        mensajeGuardado.textContent = "";
      }, 3000);

      cargarCandidatosGuardados();
    } catch (error) {
      console.error("Error al guardar candidato:", error);
      mensajeGuardado.textContent = "Error al intentar guardar el perfil pedagógico.";
      mensajeGuardado.style.color = "#C2185B";
    }
  });
}

// Carga inicial
cargarCandidatosGuardados();

