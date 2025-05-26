````markdown
# 🎭 Copa West de Improvisación - Landing Page

¡Bienvenido al repositorio de la landing page oficial de la Copa West de Improvisación 2025! Este proyecto está diseñado para promocionar el emocionante torneo de improvisación teatral que se celebra en Mendoza, Argentina.

## 🚀 Cómo Ponerlo en Marcha

Sigue estos pasos para tener el proyecto corriendo en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18.x o superior recomendada)
- **npm** (viene con Node.js)

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/copa-west.git](https://github.com/tu-usuario/copa-west.git) # Reemplaza 'tu-usuario' con el tuyo
    cd copa-west
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

### Estructura del Proyecto

El proyecto sigue una estructura típica de Next.js con el directorio `src/`:
````

copa-west/
├── public/  
│ └── assets/ \# Imágenes del proyecto
├── src/
│ ├── app/ \# Rutas y layouts de la aplicación
│ │ ├── layout.tsx \# Layout principal (HTML, carga de fuentes y CSS global)
│ │ └── page.tsx \# Página principal (carga los componentes de la landing)
│ ├── components/ \# Componentes reutilizables de la UI
│ │ ├── About.tsx
│ │ ├── Contact.tsx
│ │ ├── Dates.tsx
│ │ ├── Gallery.tsx
│ │ ├── Hero.tsx
│ │ ├── Location.tsx
│ │ └── Social.tsx
│ └── styles/ \# Archivos CSS globales
│ └── globals.css \# Hoja de estilos principal de Tailwind CSS
├── next.config.js \# Configuración de Next.js
├── postcss.config.js \# Configuración de PostCSS (para Tailwind)
├── tailwind.config.ts \# Configuración de Tailwind CSS (colores, fuentes, etc.)
├── tsconfig.json \# Configuración de TypeScript
└── package.json \# Dependencias y scripts del proyecto

````

### Ejecución en Modo Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
````

Una vez que el servidor esté listo, abre tu navegador y visita:

[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

La aplicación se recargará automáticamente cada vez que realices cambios en el código fuente.

### Build para Producción

Para construir la aplicación para despliegue en producción:

```bash
npm run build
```

Esto generará una versión optimizada de tu aplicación en la carpeta `.next/`.

### Iniciar en Modo Producción

Para iniciar la aplicación compilada en modo producción (después de `npm run build`):

```bash
npm run start
```

### Linting

Para ejecutar el linter y encontrar problemas de estilo o errores de código:

```bash
npm run lint
```

## 🎨 Personalización y Estilos

Los estilos se gestionan con [Tailwind CSS](https://tailwindcss.com/).

- **Colores y Fuentes:** Puedes personalizar los colores y las familias de fuentes en `tailwind.config.ts`.
- **Estilos Globales:** Las directivas de Tailwind y estilos base se encuentran en `src/styles/globals.css`.
- **Clases de Utilidad:** Aplica clases de utilidad de Tailwind directamente en tus componentes JSX para estilizar.

```

```
