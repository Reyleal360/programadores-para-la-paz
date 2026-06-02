# Clase 34 - Integración de n8n mediante Webhook Pedagógico y Rutas de Protección
## Módulo 3 – Semana 2 – Día 4

**Tema:** Integración técnica del proyecto mediante Webhook en n8n Cloud y análisis jurídico/comunicativo de las rutas de protección para jóvenes beneficiarios.

---

## 1. Integración Técnica: Configuración del Webhook en n8n

En esta clase se conectó de forma práctica la plataforma web con la herramienta de automatización n8n a través de un trigger de tipo Webhook. 

### Pasos Técnicos Ejecutados en n8n Cloud:
1.  **Creación del Workflow:** Se creó un nuevo flujo denominado *"Clase 34 - Webhook alertas pedagógicas"*.
2.  **Configuración del Nodo Webhook:**
    *   **Método HTTP:** `POST` (adecuado para enviar datos estructurados en formato JSON desde nuestro cliente).
    *   **Path del Webhook:** `alerta-pedagogica`.
    *   **Authentication:** `None` (para fines prácticos pedagógicos en entorno controlado).
3.  **Captura de URL:** Se copió la **Test URL** provista por el entorno de desarrollo de n8n.
4.  **Escucha de Evento:** Se activó la opción *"Listen for test event"* para dejar el nodo en modo de recepción provisional.

### Desarrollo del Frontend en el Proyecto:
Se implementó la pantalla de interfaz de usuario [alerta-n8n.html](file:///d:/programadores-para-la-paz/Modulo3/Semana2/Dia1/alerta-n8n.html) en la cual:
*   El usuario selecciona un tipo de alerta pedagógica ficticia (*Orientación*, *Convivencia*, *Protección* o *Seguimiento de veeduría*).
*   Se capturan los campos de texto correspondientes a la descripción y al responsable ficticio de la alerta.
*   Al presionar el botón de envío, una función asíncrona (`fetch`) transmite un objeto JSON conteniendo el tipo, la descripción, el responsable, el origen y la marca de tiempo (timestamp) hacia la URL de n8n.

### Datos de Prueba Utilizados:
```json
{
  "tipo": "Seguimiento de veeduría juvenil",
  "descripcion": "Se solicita revisión pedagógica de una observación realizada por una veeduría juvenil ficticia.",
  "responsable": "Equipo académico",
  "origen": "Proyecto pedagógico Programadores para la Paz",
  "fecha": "2026-06-02T22:30:00.000Z"
}
```

---

## 2. Línea Comunicativa y Jurídica: Rutas de Protección para Jóvenes

Desde los componentes de comunicaciones y jurídico, se profundizó en la necesidad de estructurar de manera responsable los mecanismos de reporte cuando se ejerce control social en espacios juveniles. Se enfatizó en la protección del menor de edad, el derecho a la confidencialidad y el uso de canales adecuados.

### Matriz de Rutas de Protección y Convivencia en Colombia

Cuando un equipo de veeduría juvenil detecta una situación que afecta a la comunidad o a un joven beneficiario, debe activar la ruta adecuada según la naturaleza del caso:

| Ruta | Ámbito de Aplicación | Entidades Competentes | Canales y Herramientas |
| :--- | :--- | :--- | :--- |
| **Ruta Policiva y de Convivencia** | Comportamientos que afectan la convivencia pacífica, ruidos, conflictos entre vecinos o afectación al espacio público. | Inspecciones de Policía, Comandos de Policía Local, Alcaldías. | Código Nacional de Seguridad y Convivencia Ciudadana (Ley 1801). |
| **Ruta Penal** | Hechos que revisten características de delito (robos, agresiones físicas graves, amenazas, fraude). | Fiscalía General de la Nación, salas de recepción de denuncias. | Plataforma virtual ADenunciar (Policía y Fiscalía). |
| **Ruta de Protección Familiar y de Menores** | Situaciones de violencia intrafamiliar, maltrato o vulneración de derechos de niños, niñas y adolescentes. | Instituto Colombiano de Bienestar Familiar (ICBF), Comisarías de Familia. | **Línea 141 del ICBF** (gratuita nacional para reportes de protección). |
| **Ruta de Derechos Fundamentales** | Garantía, defensa y protección de derechos constitucionales y debido proceso frente a abusos institucionales. | Personería Municipal, Defensoría del Pueblo. | Solicitudes formales de tutela, quejas administrativas y acompañamiento en derechos humanos. |
| **Ruta de Emergencias** | Situación de peligro inminente para la vida, salud o integridad física de las personas. | Policía Nacional, Cuerpo de Bomberos, Defensa Civil. | **Línea de Emergencias Nacional 123**. |

> [!WARNING]
> **Principio de Confidencialidad y Reserva:** Las veedurías ciudadanas y los líderes comunitarios deben abstenerse de publicar fotos, nombres o datos personales sensibles de menores de edad o jóvenes vulnerables. Divulgar sospechas en redes sociales o canales abiertos sin agotar la debida reserva legal entorpece las investigaciones, daña reputaciones y vulnera los derechos consagrados en la Ley de Infancia y Adolescencia (Ley 1098 de 2006).

---

## 3. Pregunta del Foro de Moodle

### *¿Por qué es importante diferenciar entre orientación, querella policiva, denuncia penal y emergencia cuando se busca proteger a jóvenes beneficiarios?*

#### Participación Inicial Argumentada (Mínimo 3 líneas):
> Es indispensable diferenciar estas rutas para garantizar una **protección de jóvenes** efectiva y oportuna, asegurando que cada problemática sea atendida por el canal legal y administrativo idóneo de acuerdo con su gravedad. Por ejemplo, una situación de peligro inminente requiere llamar inmediatamente a la **Policía** o a la línea de emergencia 123, mientras que un conflicto intrafamiliar exige la intervención del **ICBF** o de la **Comisaría de Familia**, y un presunto delito debe ser tramitado ante la **Fiscalía**. Confundir estos mecanismos o no respetar la **confidencialidad** puede retrasar el auxilio a las víctimas, entorpecer los procesos legales mediante falsas alarmas y revictimizar a los jóvenes beneficiarios exponiendo de forma irresponsable su identidad en redes o canales no oficiales.

#### Simulación de Respuestas a Compañeros:

*   **Réplica al Compañero 1 (Enfoque en Rutas Específicas e ICBF/Comisaría):**
    > Hola compañero/a, comparto plenamente tu postura. Como mencionas, no todas las problemáticas comunitarias pueden catalogarse de la misma forma. Es crucial entender que cuando están de por medio derechos de menores, la **Comisaría de Familia** y el **ICBF** poseen rutas con marcos de reserva especiales para proteger la identidad de los adolescentes. Hacer una denuncia penal por un conflicto que requiere mediación familiar podría generar un desgaste innecesario en el aparato judicial, además de no solucionar el problema de fondo del joven beneficiario.

*   **Réplica al Compañero 2 (Enfoque en Integración Tecnológica con Webhook y Alertas):**
    > Excelente aporte, compañero/a. Adicionalmente a lo que mencionas, la tecnología nos ayuda a estructurar estas diferencias. Al diseñar herramientas informáticas, podemos utilizar automatizaciones con **n8n** y **Webhooks** para clasificar la **alerta pedagógica** en diferentes flujos de trabajo (*workflows*) internos de forma automatizada. Así, una alerta marcada como "emergencia" puede derivar en una notificación inmediata a los canales de apoyo del proyecto, mientras que una solicitud de "orientación" se canaliza de forma confidencial hacia el equipo sicosocial, evitando errores humanos de filtración.

---

## 4. Trazabilidad Técnica y Git

### Comandos ejecutados en consola:
```powershell
# 1. Preparar la rama clase-34-webhook-n8n-alertas
git checkout clase-33-introduccion-n8n
git pull origin clase-33-introduccion-n8n
git checkout -b clase-34-webhook-n8n-alertas

# 2. Crear el archivo de alerta frontend
# (Se crea Modulo3/Semana2/Dia1/alerta-n8n.html)

# 3. Incorporar los estilos específicos en styles.css
# 4. Actualizar enlaces en tablero-resultados.html e index.html

# 5. Registrar y publicar los cambios en Git
git status
git add Modulo3/Semana2/
git commit -m "Clase 34 integra webhook de n8n para alertas pedagogicas"
git push -u origin clase-34-webhook-n8n-alertas
```

### Lista de Control de Revisión Técnica:
- [x] Rama de trabajo `clase-34-webhook-n8n-alertas` creada y activada.
- [x] Archivo `alerta-n8n.html` desarrollado en el directorio correcto de la app (`Modulo3/Semana2/Dia1`).
- [x] Lógica de `fetch` asíncrona mediante `POST` configurada en `alerta-n8n.html` apuntando a la dirección del webhook.
- [x] Estilos para etiquetas, controles de formulario (`input`, `textarea`, `select`) y contenedor `#mensajeAlerta` agregados en `styles.css`.
- [x] Botones de navegación y flujo de retorno al tablero integrados en `index.html` y `tablero-resultados.html`.
- [x] Redacción de reflexiones jurídicas e institucionales completadas en la bitácora (`nota-clase-34-webhook.md`).
