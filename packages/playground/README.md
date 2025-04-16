# Playground - Demo de Web Components

Este es un entorno de prueba diseñado para demostrar el uso de los Web Components creados en el paquete `demo-lib`. Aquí podrás ver ejemplos prácticos de cómo integrar y utilizar los componentes en una aplicación web vanilla.

## Estructura del Proyecto

```
playground/
  ├── index.html             # Página principal de demostración
  └── style.css              # Estilos globales
```

## Uso

Para probar los componentes:

1. Primero, asegúrate de haber compilado la librería de componentes:

   ```bash
   # Desde la raíz del proyecto
   pnpm run build:demo-lib
   ```

2. Abre el archivo `index.html` en tu navegador para ver los componentes en acción.

## Importación de los Web Components

Los componentes se importan como módulos ES desde el archivo de distribución de `demo-lib`:

```html
<script type="module">
  import { CustomButtonCE as CustomButton } from "./../demo-lib/dist/vuejs-colombia-web-component-demo-lib.es.js";
</script>
```

Una vez importados, los componentes pueden ser utilizados directamente en el HTML:

```html
<custom-button background-color="bg-red-600" onclick="handleClick(event)">
  Mi botón personalizado
</custom-button>
```

## Ejemplos

El playground incluye ejemplos de:

- Uso básico de los componentes
- Manejo de eventos
- Personalización de estilos
- Interacción entre componentes

## Desarrollo

Para una experiencia de desarrollo más fluida, puedes utilizar un servidor local como Live Server o cualquier otro servidor HTTP estático.
