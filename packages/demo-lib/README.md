# Demo Library - Web Components con Vue.js

Este paquete contiene una colección de componentes Vue.js que son empaquetados como Web Components (Custom Elements) utilizando Vite. Los componentes están diseñados para ser utilizados en cualquier aplicación web, independientemente del framework.

## Estructura del Proyecto

```
src/
  ├── components/     # Componentes Vue individuales
  ├── App.vue         # Componente principal para desarrollo
  ├── main.ts         # Punto de entrada para desarrollo
  └── wrapper.ts      # Configuración de Web Components
```

## Desarrollo Local

Para desarrollar los componentes localmente:

```bash
pnpm run dev
```

Esto iniciará un servidor de desarrollo que te permitirá ver los componentes en acción.

## Construcción

Para construir los componentes como Web Components:

```bash
pnpm run build
```

Esto generará los archivos de distribución en el directorio `dist/`.

## Uso

Una vez construidos, los Web Components pueden ser utilizados en cualquier aplicación web. Por ejemplo:

```html
<script src="path/to/demo-lib.js"></script>

<custom-button>Click me!</custom-button>
```

## Características

- Componentes Vue.js 3 con TypeScript
- Estilizado con Tailwind CSS
- Empaquetado como Web Components
- Soporte para eventos personalizados
- Estilos encapsulados
