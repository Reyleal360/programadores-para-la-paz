// app.js — Consumo de API con async/await
// Módulo 2, Semana 2, Día 1

const btnMensajes = document.getElementById("btnMensajes");
const btnCalendario = document.getElementById("btnCalendario");
const listaMensajes = document.getElementById("listaMensajes");
const listaCalendario = document.getElementById("listaCalendario");

// ── Función para cargar mensajes comunitarios ──
async function cargarMensajes() {
    try {
        listaMensajes.innerHTML = "<p>Cargando mensajes...</p>";
        const respuesta = await fetch("/api/mensajes");
        const mensajes = await respuesta.json();
        
        mostrarMensajes(mensajes);
    } catch (error) {
        console.error("Error:", error);
        listaMensajes.innerHTML = "<p>No se pudieron cargar los mensajes.</p>";
    }
}

// ── Función para cargar el calendario editorial ──
async function cargarCalendario() {
    try {
        listaCalendario.innerHTML = "<p>Cargando calendario...</p>";
        const respuesta = await fetch("/api/calendario");
        const calendario = await respuesta.json();
        
        mostrarCalendario(calendario);
    } catch (error) {
        console.error("Error:", error);
        listaCalendario.innerHTML = "<p>No se pudo cargar el calendario.</p>";
    }
}

// ── Funciones de Renderizado ──

function mostrarMensajes(mensajes) {
    listaMensajes.innerHTML = "";
    mensajes.forEach(m => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <div class="item-title">${m.autor}</div>
            <div class="item-meta">${m.fecha}</div>
            <div>${m.texto}</div>
        `;
        listaMensajes.appendChild(div);
    });
}

function mostrarCalendario(eventos) {
    listaCalendario.innerHTML = "";
    eventos.forEach(e => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <div class="item-title">Clase ${e.clase}: ${e.tema}</div>
            <div class="item-meta">${e.fecha}</div>
            <div>${e.descripcion}</div>
        `;
        listaCalendario.appendChild(div);
    });
}

// Event Listeners
btnMensajes.addEventListener("click", cargarMensajes);
btnCalendario.addEventListener("click", cargarCalendario);
