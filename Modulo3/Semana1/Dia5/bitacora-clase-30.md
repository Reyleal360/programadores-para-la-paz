# Bitácora – Clase 30
## Módulo 3 – Semana 1 – Día 5
**Tema:** Votación pedagógica con candidatos cargados desde JSON y profundización sobre testigos electorales

---

## ¿Qué hice en esta clase?

- Continué desde la rama `clase-29-backend-json-basico`.
- Creé la nueva rama de trabajo `clase-30-votacion-pedagogica`.
- Creé y organicé los archivos en el directorio cronológico de la clase (`Modulo3/Semana1/Dia5/`).
- Copié todos los archivos base del Día 4 e instalé las dependencias de **Express** locales para mantener el aislamiento del entorno.
- Creé la base de datos física para la votación en `data/votos.json`, inicializada como un array vacío `[]`.
- Modifiqué `server.js` en el backend para:
  - Definir la ruta física de votos e integrar las funciones auxiliares `leerVotos()` y `guardarVotos()`.
  - Crear el endpoint `GET /api/votos` para consultar el listado histórico de sufragios pedagógicos registrados.
  - Crear el endpoint `POST /api/votos` con validación estricta de campos obligatorios y un filtro clave para evitar el **voto duplicado**: revisa si la identificación ficticia del votante ya existe en el array antes de registrar un nuevo elemento con marca de tiempo ISO y un ID único generado con `Date.now()`.
- Desarrollé una pantalla web de votación responsiva y semántica llamada `votar.html` que:
  - Carga dinámicamente el listado de candidatos registrados en el backend mediante un fetch asíncrono a `GET /api/candidatos`.
  - Construye dinámicamente las opciones del selector de candidatos (`<select>`) y renderiza tarjetas visuales informativas con las propuestas de cada perfil pedagógico.
  - Permite rellenar una identificación académica ficticia (por ejemplo, `EST001`) y enviar el voto de forma asíncrona (`POST /api/votos`) sin recargas de página, mostrando mensajes de confirmación de color verde o alertas de color rojo en caso de error o intento de duplicación.
  - Habilita una sección interactiva para listar todos los votos registrados con formato de fecha legible en tiempo real mediante el botón "Cargar votos".
- Modifiqué `index.html` para incorporar una nueva sección visual de navegación hacia la jornada de votación pedagógica y actualicé los textos del footer reflejando el Día 5.
- Mejoró la apariencia visual de la aplicación en `styles.css` diseñando bordes adaptados y efectos de foco/sombra en los elementos select, agregando espaciados fluidos, animaciones táctiles activas y adaptando los menús de enlaces para un flujo bidireccional.
- Profundicé de forma crítica en los fundamentos comunicativos y jurídicos que regulan a los **testigos electorales** en Colombia.

---

## Comandos que ejecuté

```powershell
# Crear y cambiar a la nueva rama
git checkout clase-29-backend-json-basico
git pull origin clase-29-backend-json-basico
git checkout -b clase-30-votacion-pedagogica

# Copiar estructura del día anterior e inicializar
mkdir Modulo3/Semana1/Dia5
mkdir Modulo3/Semana1/Dia5/data
cp Modulo3/Semana1/Dia4/*.html Modulo3/Semana1/Dia5/
cp Modulo3/Semana1/Dia4/*.css Modulo3/Semana1/Dia5/
cp Modulo3/Semana1/Dia4/*.js Modulo3/Semana1/Dia5/
cp Modulo3/Semana1/Dia4/package.json Modulo3/Semana1/Dia5/
cp Modulo3/Semana1/Dia4/data/candidatos.json Modulo3/Semana1/Dia5/data/

# Instalar Express en el directorio actual
npm install

# Crear base de datos para votos
echo "[]" > data/votos.json

# Ejecutar el servidor para pruebas locales
node server.js

# Confirmación y push en Git
git status
git add .
git commit -m "Clase 30 votacion pedagogica con candidatos dinamicos"
git push -u origin clase-30-votacion-pedagogica
```

---

## Conceptos Aprendidos y Reflexión del Foro

### Pregunta del Foro:
*¿Por qué los testigos electorales son importantes para la transparencia y qué límites deben respetar durante una jornada electoral?*

#### 1. Rol Fundamental e Importancia de los Testigos Electorales
Los **testigos electorales** constituyen una figura de veeduría civil e institucional indispensable para salvaguardar las garantías democráticas durante los comicios electorales. Su presencia en las mesas de votación y comisiones de **escrutinio** ayuda a generar confianza y **transparencia** tanto en la ciudadanía como en las organizaciones políticas postulantes. La vigilancia directa que ejercen disminuye la susceptibilidad a errores logísticos y asegura que las dinámicas del sufragio correspondan fielmente con las normativas vigentes.

#### 2. Fundamento Legal y Funciones Clave (Ley Estatutaria 1475 de 2011)
Jurídicamente, el rol del testigo electoral no responde al libre albedrío, sino que está tipificado bajo la **Ley Estatutaria 1475 de 2011** en el marco normativo colombiano. Esta ley otorga a los partidos, movimientos políticos y grupos significativos de ciudadanos el derecho a postular ciudadanos autorizados para vigilar las etapas del proceso. Sus funciones esenciales son:
- **Vigilar** las votaciones y cerciorarse de que las urnas estén vacías al iniciar y debidamente selladas al finalizar.
- **Vigilar el escrutinio de mesa** y corroborar que el conteo de votos coincida con los reportes numéricos.
- **Formular reclamaciones por escrito** cuando se presenten situaciones irregulares contempladas en la ley.
- **Solicitar la intervención de las autoridades** si se observa alguna alteración del orden o posible conducta que afecte las garantías democráticas.
- **Documentar de forma responsable** situaciones relevantes como evidencia de soporte.

#### 3. Diferenciación de Acciones y Límites Estrictos
Es vital comprender la diferencia sustancial entre vigilar de forma proactiva e **interferir** de forma indebida. El testigo electoral posee competencias de veeduría, mas **no tiene autoridad coactiva o ejecutiva** dentro del proceso.

* **Observar y Documentar:** Consiste en verificar visualmente que los procedimientos se realicen conforme a la guía oficial y registrar hechos concretos con lenguaje claro (fecha, hora, mesa, suceso detallado sin adjetivos emocionales).
* **Reportar y Reclamar:** Acudir a la ruta debida y presentar el recurso formal ante los jurados o las comisiones de escrutinio pertinentes.
* **Interferir (Acción prohibida):** Entorpecer la labor del jurado de mesa, intentar direccionar el sufragio de los votantes, o alterar la organización física del recinto.

**Límites jurídicos que el testigo electoral debe respetar rigurosamente:**
1. **No dirige la mesa ni reemplaza al jurado:** El jurado de votación es la máxima autoridad pública transitoria de la mesa; el testigo solo observa sus actos.
2. **No decide sobre la validez de los votos:** Aunque puede formular reclamaciones u observaciones, no tiene facultad para determinar si un voto es válido, nulo o en blanco.
3. **No manipula el material electoral:** Bajo ninguna circunstancia el testigo puede tocar las tarjetas electorales, las actas E14, ni los bolígrafos de conteo.
4. **No intimida ni interroga a los votantes:** Debe permanecer al margen de la interacción del votante con la urna para resguardar la intimidad y libertad del sufragio.
5. **No publica acusaciones sin fundamento:** Basarse en simples sospechas para declarar "fraude" en redes sociales debilita la confianza colectiva y alimenta la desinformación; se debe esperar la decisión de las autoridades competentes.
6. **No reemplaza la investigación penal:** Si se detecta un presunto delito, el testigo documenta y reporta a la Fiscalía o URIEL, quienes son los entes con capacidad de investigación.

#### 4. Conexión de Conceptos con la Programación Responsable
Al desarrollar la pantalla de **votación pedagógica** con conexión asíncrona a un backend en Express y persistencia de votos en archivos **JSON**, aprendemos a construir sistemas con **trazabilidad**. Al igual que los testigos electorales actúan en la realidad para asegurar la pulcritud de los datos, el software debe incorporar validaciones robustas (como la detección de identificación duplicada en `server.js`) para evitar que registros erróneos o repetidos alteren el resultado, respetando la **protección de derechos** digitales y demostrando que la seguridad y el rigor lógico previenen el caos en la recolección comunitaria.

---

## Lista de verificación

- [x] Creé la rama de trabajo `clase-30-votacion-pedagogica` y el directorio `Modulo3/Semana1/Dia5/`
- [x] Copié los archivos base e instalé las dependencias de npm correspondientes en el directorio del Día 5
- [x] Creé la base de datos vacía `data/votos.json` para almacenar los sufragios pedagógicos
- [x] Implementé en `server.js` las funciones `leerVotos` y `guardarVotos` e integré las rutas API GET y POST
- [x] Desarrollé las validaciones de backend para impedir el registro de identificación repetida
- [x] Diseñé y creé la pantalla de votación semántica y responsiva `votar.html`
- [x] Programé las peticiones asíncronas con `fetch` en `votar.html` para cargar candidatos del servidor y registrar votos
- [x] Integré la consulta asíncrona de votos recibidos en pantalla con formateo legible de fechas
- [x] Añadí el enlace de navegación y la sección de llamada a votar en `index.html` y actualicé el footer
- [x] Refiné los estilos visuales en `styles.css` dotando de interactividad fluida al formulario de votación
- [x] Escribí la bitácora técnica e incorporé la reflexión conceptual exigida para el foro de Moodle
