# Guía de Inicio — Vite + Vanilla JS + TailwindCSS

Este proyecto sirve como **plantilla base** para desarrollar aplicaciones frontend usando 
**Vite**, **JavaScript Vanilla** y **TailwindCSS**, aplicando **patrones de modularidad** y 
**buenas prácticas** para mantener el código escalable y fácil de mantener.

## 1. Estructura de Carpetas Recomendada
```BASH
src/
│── style.css       # Archivos CSS/Tailwind extras
│── data/
│   └── data.json   # Datos en JSON para renderizar
│── main.js         # Punto de entrada de la app
│── js/
│   ├── state.js    # Estado global de la app
│   ├── dom.js      # Manipulación del DOM
│   └── events.js   # Gestión de eventos
```

## 2. Patrón de Modularidad
Separar la lógica en tres módulos clave:

### 2.1 `state.js` - Estado Global
Responsable de almacenar y gestionar el estado de la aplicación.

```JS
// src/js/state.js
export const state = {
  count: 0
}

export const increment = () => {
  state.count++
}

export const decrement = () => {
  state.count--
}
```

## 2.2 `dom.js` - Manipulación del DOM
Encargado de renderizar y actualizar la UI según el estado.

```JS
// src/js/dom.js
import { state } from "./state.js"

export const renderCount = () => {
  document.querySelector("#count").textContent = state.count
}
```

## 2.3 `events.js` - Gestión de Eventos
Contiene listeners y acciones que conectan la UI con el estado.

```JS
// src/js/events.js
import { increment, decrement } from "./state.js"
import { renderCount } from "./dom.js"

export const registerEvents = () => {
  const buttonIncrement = document.querySelector("#increment")
  buttonIncrement.addEventListener("click", () => {
    increment()
    renderCount()
  })

  const buttonDecrement = document.querySelector("#decrement")
  buttonDecrement.addEventListener("click", () => {
    decrement()
    renderCount()
  })
}
```

## 2.4 `main.js` - Entrada Principal
Se encarga de inicializar la app.

```JS
// src/main.js
import "../style.css"
import { renderCount } from "./dom.js"
import { registerEvents } from "./events.js"

const init = () => {
  renderCount()
  registerEvents()
}

init()
```

## 4. Buenas Prácticas
1. Modulariza el código
  - Evita archivos de más de 200–300 líneas.
  - Divide la lógica por responsabilidad.

2. Evita manipular el DOM directamente en los eventos
  - Usa funciones en `dom.js` para mantener consistencia.

3. Mantén el estado centralizado
  - Toda la UI debe derivar de `state.js`.
  
4. Usa clases de Tailwind en HTML
  - No mezcles estilos en JS salvo casos dinámicos.

5. Evita valores mágicos
  - Define constantes para valores fijos (`const MAX_ITEMS = 10`).

6. Usa la carpeta `data` para almacenar JSONs que no provienen de peticiones.
  - Es fácil de mantener.
  - Se le pueden agregar más elementos sin alterar el script que lo consuma.
  - Vite parsea automáticamente los JSONs, así, no hay necesidad de llamarlos por petición.

```JS
import data from "@data/data.json" // ["item 1", "item 2", "items 3",...]

data.forEach(item => {
  const li = document.createElement('li')
  li.textContent = item
  document.body.appendChild(li)
})
```

## 5. Comandos Útiles
```BASH
# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```