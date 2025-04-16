# Vue.js Colombia Web Component Demo

Este proyecto es una demostración de cómo crear y utilizar Web Components con Vue.js 3, TypeScript y Vite. El proyecto está estructurado como un monorepo usando pnpm workspaces, que contiene los siguientes paquetes:

- `demo-lib`: Una librería que contiene componentes Vue.js empaquetados como Web Components
- `playground`: Una aplicación de ejemplo que demuestra el uso de los Web Components

## Requisitos Previos

- Node.js (versión recomendada: >=18)
- pnpm (para gestión de paquetes)

## Instalación

```bash
pnpm install
```

## Desarrollo

Para desarrollar la librería de componentes:

```bash
pnpm run dev:demo-lib
```

## Compilación

Para compilar la librería de componentes:

```bash
pnpm run build:demo-lib
```

## Vista Previa

Para previsualizar la librería construida:

```bash
pnpm run preview:demo-lib
```

## Tecnologías Utilizadas

- Vue.js 3
- TypeScript
- Vite
- Tailwind CSS
- Custom Elements (Web Components)
