# Bitácora – Clase 32
## Módulo 3 – Semana 2 – Día 2

**Tema:** Tablero de resultados de votaciones y profundización sobre veedurías ciudadanas

---

## 1. ¿Qué hicimos en esta clase?
- Continuamos el desarrollo práctico a partir de la rama base `clase-31-auditoria-versionamiento`.
- Creamos la nueva rama de trabajo local y remota `clase-32-tablero-resultados` para implementar el tablero interactivo.
- Desarrollamos un nuevo archivo frontend llamado `tablero-resultados.html` en el subdirectorio de la clase `Modulo3/Semana2/Dia1/` que:
  - Consume dinámicamente y de forma asíncrona (`fetch`) los datos de candidatos (`GET /api/candidatos`) y votos registrados (`GET /api/votos`).
  - Agrupa y cuenta de manera precisa la cantidad de sufragios correspondientes a cada candidato registrado en el backend.
  - Calcula el total global de votos y el porcentaje obtenido por cada opción, redondeándolo matemáticamente de forma limpia.
  - Identifica el ganador pedagógico provisional que posee la mayor cantidad de votos.
  - Renderiza tarjetas dinámicas para cada candidato acompañadas de barras de progreso visuales adaptativas que representan de forma proporcional los porcentajes calculados.
- Editamos `styles.css` para incorporar las clases estructurales `.barra-resultado` y `.barra-porcentaje` usando la paleta cromática pedagógica del proyecto (fondo `#F9EEF3` y relleno corporativo `#8A1538`).
- Modificamos el enlace de resultados en `index.html` para direccionar adecuadamente el flujo de navegación de la aplicación hacia `tablero-resultados.html`.
- Profundizamos conceptualmente en el ejercicio del **control social** y el rol de las **veedurías ciudadanas** en Colombia desde la perspectiva comunicativa y jurídica.

---

## 2. Conceptos Aprendidos y Reflexión de la Clase

### Línea Comunicativa: Comunicación Responsable en Veedurías
El control social no debe basarse en rumores o especulaciones emocionales. Una veeduría ciudadana eficaz requiere de una **documentación responsable** y un **lenguaje claro**, diferenciando los siguientes tipos de declaraciones:
* **Observación:** Descripción objetiva y fáctica de una situación identificada (ej. *"A las 14:00 horas, el servidor de votación experimentó una latencia de 5 segundos"*).
* **Solicitud de información:** Petición formal a los encargados del proceso para aclarar un dato o procedimiento administrativo.
* **Recomendación:** Sugerencia sustentada de mejora sobre un proceso observado (ej. *"Se sugiere incorporar una pantalla de resultados dinámicos con barras visuales para facilitar el entendimiento de la comunidad"*).
* **Acusación:** Señalamiento directo de una conducta irregular o delictiva. **No es competencia de la veeduría formular acusaciones por intuición o sin soporte probatorio.** Cualquier hallazgo debe ser reportado con rigor a las autoridades competentes.

### Línea Jurídica: Fundamento Legal y Límites de las Veedurías
En Colombia, la participación ciudadana y el control social están amparados por un marco normativo robusto:
1. **Artículo 270 de la Constitución Política:** Consagra el derecho de los ciudadanos a participar de manera activa en la vigilancia de la gestión pública y los resultados de la administración.
2. **Ley 850 de 2003 (Ley de Veedurías Ciudadanas):** Define las veedurías ciudadanas como el mecanismo democrático de representación que permite a los ciudadanos vigilar, fiscalizar y hacer seguimiento a la gestión pública, la ejecución de contratos, programas o servicios públicos.
3. **Ley 1757 de 2015 (Estatuto de la Participación Ciudadana):** Promueve, protege y garantiza las modalidades de control social y el derecho a la participación.

**Límites jurídicos que regulan la actuación de las veedurías:**
* **No coadministración ni reemplazo de autoridades:** La veeduría vigila pero **no reemplaza a las autoridades públicas o electorales**. No tiene la facultad de revocar contratos, sancionar funcionarios o invalidar actas. Su función es documentar e informar a los organismos de control pertinentes (Personería, Contraloría, Procuraduría, CNE, Fiscalía, etc.).
* **Protección de datos personales e información reservada:** Toda veeduría debe respetar la privacidad de la ciudadanía y las leyes de **habeas data** (Ley 1581 de 2012), absteniéndose de difundir datos sensibles o información legalmente declarada bajo reserva.

---

## 3. Pregunta del Foro de Moodle

### *¿Por qué las veedurías ciudadanas son importantes para el control social y qué límites deben respetar para actuar de manera responsable?*

#### Participación Inicial Argumentada:
Las **veedurías ciudadanas** representan uno de los pilares más eficaces para la participación ciudadana y el **control social**, ya que empoderan de forma democrática a la comunidad para vigilar con rigor y transparencia la **gestión pública** y la correcta ejecución de los recursos comunes, asegurando que las instituciones respondan a las necesidades reales del territorio de conformidad con el **Artículo 270 de la Constitución Política** de Colombia.

No obstante, para actuar con plena legitimidad y responsabilidad social, estas organizaciones ciudadanas deben ceñirse rigurosamente a las funciones y competencias otorgadas por la **Ley 850 de 2003** y la **Ley 1757 de 2015**. Esto implica respetar dos límites sustanciales: en primer lugar, comprender que las veedurías **no reemplazan a las autoridades administrativas ni coadministran los proyectos**, por lo que su labor se limita a observar, recopilar evidencias y tramitar alertas formales sin entorpecer los procesos. En segundo lugar, deben aplicar principios de **documentación responsable** y emplear siempre un **lenguaje claro y no acusatorio**, fundamentando sus observaciones exclusivamente en datos verificados y evidencias objetivas para evitar caer en la difamación, las sospechas infundadas o la vulneración de la protección de datos personales.

---

## 4. Trazabilidad Técnica y Git

### Comandos ejecutados en consola:
```powershell
# 1. Asegurar la limpieza y cambiar a la rama base
git checkout clase-31-auditoria-versionamiento
git pull origin clase-31-auditoria-versionamiento

# 2. Crear y cambiar a la rama de trabajo de la Clase 32
git checkout -b clase-32-tablero-resultados

# 3. Crear el tablero de resultados interactivo
# (Se crea Modulo3/Semana2/Dia1/tablero-resultados.html)

# 4. Modificar styles.css para agregar las barras
# 5. Modificar index.html para actualizar el enlace

# 6. Probar el servidor web Node.js localmente
node server.js

# 7. Registrar cambios y hacer push de la rama
git status
git add .
git commit -m "Clase 32 tablero de resultados de votacion"
git push -u origin clase-32-tablero-resultados
```

### Lista de Verificación de Criterios:
- [x] Rama `clase-32-tablero-resultados` creada y activa.
- [x] Archivo `tablero-resultados.html` creado con lógica JavaScript de fetch asíncrono y cálculos numéricos.
- [x] Estilos para `.barra-resultado` y `.barra-porcentaje` agregados en `styles.css`.
- [x] Enlace de navegación actualizado en `index.html`.
- [x] Verificado el cálculo del total de votos en pantalla.
- [x] Verificado el cálculo de porcentajes dinámicos por cada perfil de participación.
- [x] Verificado el cálculo y destaque del ganador pedagógico provisional.
- [x] Redacción de reflexiones comunicativas y jurídicas y respuesta formal al foro de Moodle integrada en la bitácora.
