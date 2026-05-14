// app.js — Clase 22: Tablero de mensajes y accesibilidad
// Uso de async/await para consumir la API y renderizado seguro de tarjetas.

const btnMensajes = document.getElementById("btnMensajes");
const btnCalendario = document.getElementById("btnCalendario");
const contenedorMensajes = document.getElementById("contenedorMensajes");
const listaCalendario = document.getElementById("listaCalendario");

// ── CARGAR MENSAJES (GET /api/mensajes) ──
async function cargarMensajes() {
    try {
        contenedorMensajes.innerHTML = "<p>Cargando vitrina comunitaria...</p>";
        
        const respuesta = await fetch("/api/mensajes");
        const mensajes = await respuesta.json();

        renderizarTablero(mensajes);
    } catch (error) {
        console.error("Error al cargar mensajes:", error);
        contenedorMensajes.innerHTML = "<p style='color: red;'>No se pudo cargar la información del tablero.</p>";
    }
}

// ── RENDERIZAR TABLERO (Minimización de datos y Legibilidad) ──
function renderizarTablero(mensajes) {
    contenedorMensajes.innerHTML = "";

    if (mensajes.length === 0) {
        contenedorMensajes.innerHTML = "<p>No hay mensajes publicados en este momento.</p>";
        return;
    }

    mensajes.forEach(m => {
        // Creamos el elemento tarjeta
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-mensaje";

        // MINIMIZACIÓN DE DATOS:
        // Mostramos solo: Autor, Fecha y Texto.
        // Omitimos IDs internos o datos sensibles de revisión.
        tarjeta.innerHTML = `
            <div class="mensaje-autor">${m.autor}</div>
            <div class="mensaje-fecha">${m.fecha}</div>
            <div class="mensaje-texto">${m.texto}</div>
        `;

        contenedorMensajes.appendChild(tarjeta);
    });
}

// ── CARGAR CALENDARIO (GET /api/calendario) ──
async function cargarCalendario() {
    try {
        listaCalendario.innerHTML = "<p>Cargando cronograma...</p>";
        
        const respuesta = await fetch("/api/calendario");
        const eventos = await respuesta.json();

        renderizarCalendario(eventos);
    } catch (error) {
        console.error("Error al cargar calendario:", error);
        listaCalendario.innerHTML = "<p>Error al obtener el calendario editorial.</p>";
    }
}

function renderizarCalendario(eventos) {
    listaCalendario.innerHTML = "";
    eventos.forEach(e => {
        const item = document.createElement("div");
        item.className = "item-calendario";
        item.innerHTML = `
            <span class="calendario-clase">Clase ${e.clase}:</span>
            <strong>${e.tema}</strong> — ${e.descripcion} 
            <br><small style="color: #64748b;">${e.fecha}</small>
        `;
        listaCalendario.appendChild(item);
    });
}

// Escuchadores de eventos
btnMensajes.addEventListener("click", cargarMensajes);
btnCalendario.addEventListener("click", cargarCalendario);
