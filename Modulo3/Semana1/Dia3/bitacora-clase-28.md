# Bitácora – Clase 28
## Módulo 3 – Semana 1 – Día 3
**Tema:** Pantalla de candidatos, perfiles responsables y clasificación básica de información

---

## ¿Qué hice en esta clase?

- Continué desde la rama `clase-27-estructura-visual-js`.
- Creé la nueva rama de trabajo `clase-28-pantalla-candidatos`.
- Creé y organicé los archivos en el directorio de la clase (`Modulo3/Semana1/Dia3/`).
- Agregué una sección visual de perfiles de participación ficticios (`index.html`) dentro de la etiqueta `<main>` de forma semántica y responsable.
- Diseñé tarjetas visuales atractivas con nombre ficticio, rol, propuesta y estado.
- Apliqué estilos CSS específicos para las tarjetas y el contenedor de perfiles en `styles.css`.
- Implementé la lógica de JavaScript en `app.js` utilizando `querySelectorAll`, `forEach`, y `addEventListener` para mostrar información adicional y advertencias de cada perfil al hacer clic en su botón correspondiente.
- Aseguré el cumplimiento de las normativas de protección de datos (no usar información ni fotos reales, no habilitar votaciones reales y mantener un enfoque pedagógico).
- Registré mi avance mediante Git ejecutando `git status`, `git add`, `git commit` y `git push`.

---

## Comandos que ejecuté

```bash
git checkout clase-27-estructura-visual-js
git pull origin clase-27-estructura-visual-js
git checkout -b clase-28-pantalla-candidatos
git status
git add .
git commit -m "Clase 28 pantalla de candidatos"
git push -u origin clase-28-pantalla-candidatos
```

---

## Conceptos aprendidos

### Presentación responsable de perfiles
En las plataformas digitales es fundamental resguardar la identidad y datos personales sensibles. En entornos de simulación académica, la información debe ser 100% ficticia y pedagógica, previniendo riesgos legales de difamación o infracción al derecho de la intimidad, la honra y el buen nombre.

### Protección de datos personales (Habas Data)
El derecho a la protección de datos en Colombia (Ley 1581 de 2012) implica que no podemos almacenar, mostrar ni procesar datos de contacto, cédulas, fotos u otra información privada de personas reales sin su consentimiento explícito previo e informado.

### Clasificación de Información
Distinguir la naturaleza de la información presentada es vital para la trazabilidad y transparencia:
- **Información pública:** Datos verificables de libre acceso.
- **Opinión:** Apreciaciones subjetivas que no representan verdades absolutas.
- **Propuesta:** Planes e intenciones constructivas expuestas sin promesas falsas o exageradas.
- **Evidencia:** Soportes fácticos y comprobables.

---

## Lista de verificación

- [x] Creé la rama `clase-28-pantalla-candidatos` a partir de `clase-27-estructura-visual-js`
- [x] Creé la sección de candidatos pedagógicos ficticios en `index.html`
- [x] Agregué una advertencia explícita indicando el carácter académico del ejercicio
- [x] Diseñé tarjetas en `styles.css` con diseño responsive utilizando grid de CSS
- [x] Utilicé JavaScript en `app.js` para capturar el perfil seleccionado mediante `data-perfil` y renderizar información detallada de forma dinámica
- [x] Validé que no existan datos personales reales ni funcionalidades de voto activo
- [x] Ejecuté los comandos de Git para guardar y subir los cambios a mi repositorio remoto
