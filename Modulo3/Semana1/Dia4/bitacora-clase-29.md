# Bitácora – Clase 29
## Módulo 3 – Semana 1 – Día 4
**Tema:** Backend básico con Express y profundización en transparencia, rutas y documentación responsable

---

## ¿Qué hice en esta clase?

- Continué desde la rama `clase-28-pantalla-candidatos`.
- Creé la nueva rama de trabajo `clase-29-backend-json-basico`.
- Creé y organicé los archivos en el directorio de la clase (`Modulo3/Semana1/Dia4/`).
- Inicialicé un proyecto Node.js (`package.json`) e instalé **Express** como dependencia para crear el servidor web.
- Desarrollé el archivo `server.js` estableciendo un servidor Express básico que escucha en el puerto `3000`, sirve archivos estáticos del frontend y define dos endpoints clave:
  - `GET /api/candidatos`: Para consultar los perfiles almacenados.
  - `POST /api/candidatos`: Para registrar y persistir perfiles pedagógicos ficticios de manera segura.
- Implementé una base de datos local en formato JSON en `data/candidatos.json` para almacenar los datos recolectados académicamente sin exponer datos reales.
- Modifiqué `index.html` para incorporar un formulario de registro interactivo (`.formulario-candidato`) y una sección dinámica para listar perfiles guardados (`.lista-candidatos`).
- Diseñé interfaces más intuitivas y agradables en `styles.css` aplicando transiciones suaves en focus, estados activos de botones y efectos hover atractivos sobre las tarjetas guardadas.
- Conecté el frontend con el backend en `app.js` mediante la API de `fetch` y funciones asíncronas (`async/await`) para registrar candidatos y refrescar la lista de perfiles guardados en tiempo real sin recargar el navegador.
- Profundicé teórica y conceptualmente en la Ley 1712 de 2014, la lectura de documentos electorales complejos como el E14, la diferenciación clara de rutas de orientación/reporte y el uso de lenguaje claro y no acusatorio.

---

## Comandos que ejecuté

```powershell
# Crear y cambiar a la rama de la clase
git checkout clase-28-pantalla-candidatos
git pull origin clase-28-pantalla-candidatos
git checkout -b clase-29-backend-json-basico

# Crear estructura del proyecto en Dia4
mkdir Modulo3/Semana1/Dia4
cp Modulo3/Semana1/Dia3/index.html Modulo3/Semana1/Dia4/
cp Modulo3/Semana1/Dia3/styles.css Modulo3/Semana1/Dia4/
cp Modulo3/Semana1/Dia3/app.js Modulo3/Semana1/Dia4/

# Inicializar entorno npm e instalar Express
npm init -y
npm install express

# Crear base de datos local JSON
mkdir data
echo "[]" > data/candidatos.json

# Ejecutar y verificar servidor Express
node server.js

# Guardar cambios en Git
git status
git add .
git commit -m "Clase 29 backend json basico conectado al frontend"
git push -u origin clase-29-backend-json-basico
```

---

## Conceptos Aprendidos y Reflexión del Foro

### Pregunta del Foro:
*¿Por qué la transparencia necesita contexto, rutas claras y lenguaje responsable para no convertirse en desinformación o señalamiento?*

#### 1. Transparencia con Contexto (Ley 1712 de 2014)
La **Ley 1712 de 2014** (Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional) marca un hito en Colombia, pero esta clase me enseñó que la transparencia no finaliza con la simple publicación de la información pública. Para que sea verdaderamente útil para la ciudadanía, requiere **contexto**. Un dato aislado o un documento técnico expuesto sin explicaciones metodológicas, fecha, procedencia o limitaciones de interpretación puede prestarse a falsas inferencias. La verdadera transparencia no es solo "acceder", sino "comprender responsablemente".

#### 2. Lectura Crítica de Documentos (El E14)
El formulario electoral **E14** es un ejemplo perfecto de esta necesidad de lectura responsable. Una enmendadura, tachón o una aparente diferencia aritmética en el conteo rápido de mesas no equivale automáticamente a un "fraude". Existen etapas legales de escrutinio donde los delegados de las comisiones escrutadoras revisan y corrigen inconsistencias basándose en los pliegos originales. Presentar un E14 tachado en redes sociales como prueba absoluta de fraude sin comprender las dinámicas institucionales previas constituye desinformación. Es necesario diferenciar un **dato aislado** de una **evidencia estructurada** y una **interpretación subjetiva** de una **acusación infundada**.

#### 3. Escalera de Documentación Responsable y Lenguaje Claro
Cuidar el lenguaje al reportar observaciones no es solo un asunto estético, sino una protección de derechos (como el derecho a la honra, al buen nombre y al debido proceso de terceros). La documentación responsable implica seguir pasos lógicos:
1. **Observar:** Identificar un elemento atípico.
2. **Describir:** Exponer objetivamente lo visto sin adjetivos exagerados (por ejemplo, usar *"Se observa una posible inconsistencia aritmética"* en lugar de *"Esto prueba un fraude descarado"*).
3. **Contextualizar:** Indicar la fuente, fecha, mesa y municipio.
4. **Verificar y Remitir:** Canalizar por la ruta legal correspondiente en lugar de realizar escarnio público.

#### 4. Rutas de Control Diferenciadas por Competencia
La participación ciudadana efectiva exige no saturar los sistemas con quejas inadecuadas y saber elegir el canal apropiado según la situación:
- **MOE (Misión de Observación Electoral):** Ruta de observación no gubernamental, pedagogía ciudadana y sistematización de alertas para cultura democrática. No sanciona ni investiga penalmente.
- **Personería Municipal/Distrital:** Canal territorial cercano para proteger los derechos fundamentales frente a barreras de acceso, amenazas o vulneraciones directas.
- **CNE (Consejo Nacional Electoral):** Autoridad electoral administrativa para temas de publicidad extemporánea, financiación de campañas o dudas de índole administrativa electoral.
- **Fiscalía General de la Nación:** Ruta penal reservada única y estrictamente para denunciar presuntos delitos electorales tipificados en el Código Penal, respaldados por evidencias sólidas y no por simples rumores o sospechas emocionales.
- **URIEL (Unidad de Recepción Inmediata para la Transparencia Electoral):** Canal interinstitucional oficial para reportar posibles irregularidades electorales con información clara y soportes mínimos verificables.

#### 5. Trazabilidad Tecnológica Responsable
En la dimensión técnica, aprender a conectar el **Frontend** con el **Backend** usando `fetch` y almacenar información simulada en archivos **JSON** me demostró el valor de la trazabilidad. No obstante, como programadores responsables, debemos entender que nuestro software no es neutro: la arquitectura de almacenamiento de datos debe garantizar la protección de datos personales, evitar la difusión de sospechas sin verificar y no simular un canal de denuncias reales que confunda a los ciudadanos o suplante la competencia de las autoridades colombianas.

---

## Lista de verificación

- [x] Creé la rama `clase-29-backend-json-basico` y el directorio `Modulo3/Semana1/Dia4/`
- [x] Inicialicé npm e instalé Express localmente en el directorio de la clase
- [x] Creé el archivo de base de datos `data/candidatos.json` inicializado como array vacío
- [x] Desarrollar el archivo de servidor `server.js` con soporte para métodos GET y POST `/api/candidatos`
- [x] Adapté `index.html` con el formulario semántico de registro y el contenedor de tarjetas guardadas
- [x] Diseñé una interfaz visual fluida en `styles.css` con estilos refinados de focus y hover
- [x] Conecté el frontend en `app.js` usando `fetch()` con control de errores y actualizaciones asíncronas
- [x] Comprobé localmente que los perfiles se guardan de forma persistente y el archivo JSON se actualiza
- [x] Escribí la bitácora conceptual y técnica respondiendo detalladamente a las preguntas pedagógicas
