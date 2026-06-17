# Clase 42 - Seguridad operativa aplicada

## Objetivo
Aplicar medidas básicas de seguridad operativa al proyecto iniciado en la Clase 41.

## Medidas aplicadas
- Revisión de `.gitignore`.
- Protección del archivo `.env`.
- Uso de variables de entorno.
- Reducción de información visible en `/estado`.
- Creación de ruta `/diagnostico` sin exposición de secretos.
- Checklist de seguridad mínima.

## Rutas revisadas
- `/`
- `/saludo`
- `/estado`
- `/api/info`
- `/diagnostico`

## Seguridad
El archivo `.env` no debe subirse a GitHub.
Los tokens no deben escribirse en `server.js`.
Las rutas públicas no deben mostrar credenciales.
