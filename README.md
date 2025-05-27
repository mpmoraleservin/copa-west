```markdown
# Copa West de Impro - Landing Page 🏆

¡Bienvenido/a al repositorio de la landing page oficial de la Copa West de Improvisación! Este proyecto ha sido creado para promocionar el torneo de improvisación más picante de Mendoza, Argentina.

## Descripción

Esta es una landing page moderna y dinámica desarrollada con Next.js y Tailwind CSS, diseñada para proporcionar toda la información esencial sobre la Copa West: qué es, quiénes participan, los jugadores destacados, galería de fotos, y cómo llegar al evento.

El torneo se celebra todos los viernes de junio en el Teatro Tajamar, Mendoza. ¡Cuarenta improvisadores, UNA COPA!

**✨ https://copa-west.vercel.app/**

---

## Funcionalidades Principales

* **Hero Impactante:** Presentación principal del evento.
* **Acerca de la Copa:** Explicación detallada del torneo.
* **Equipos Participantes:** Cinta con scroll infinito de los logos de los equipos.
* **Jugadores Destacados:** Sección para conocer a las figuras clave, con scroll horizontal.
* **Galería de Fotos:** Muestra los mejores momentos, con un modal para ampliar imágenes.
* **Ubicación y Horarios:** Mapa interactivo integrado y detalles del evento (Teatro Tajamar, Mendoza).
* **Diseño Responsivo:** Adaptable a diferentes tamaños de pantalla (móvil, tablet, desktop).
* **Animaciones Sutiles:** Para una experiencia de usuario más dinámica y atractiva.
* **Navegación Fluida:** Header fijo y enlaces a las diferentes secciones.

---

## Tech Stack 🛠️

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Componentes:** [React](https://reactjs.org/)
* **Linting:** [ESLint](https://eslint.org/)
* **Animaciones:** CSS (Keyframes, Transitions) y clases de utilidad de Tailwind.

---

## 🚀 Empezando / Correr Localmente

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clona el Repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/copa-west.git](https://github.com/TU_USUARIO/copa-west.git)
    cd copa-west
    ```
    *(Reemplaza `TU_USUARIO/copa-west.git` con la URL de tu repositorio)*

2.  **Instala las Dependencias:**
    Usando npm:
    ```bash
    npm install
    ```
    O usando yarn:
    ```bash
    yarn install
    ```

3.  **Corre el Servidor de Desarrollo:**
    Usando npm:
    ```bash
    npm run dev
    ```
    O usando yarn:
    ```bash
    yarn dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

---

## 📁 Estructura del Proyecto (Simplificada)

```
copa-west/
├── public/                # Archivos estáticos (imágenes, fuentes)
│   └── assets/
│       ├── characters/
│       ├── fonts/
│       ├── gallery/
│       └── logos-equipos/
├── src/
│   ├── app/               # Rutas principales (layout.tsx, page.tsx)
│   ├── components/        # Componentes reutilizables de React (Header, Footer, Hero, etc.)
│   └── styles/            # Estilos globales (globals.css)
├── .eslintrc.mjs          # Configuración de ESLint
├── .gitignore             # Archivos y carpetas ignorados por Git
├── next.config.js         # Configuración de Next.js
├── package.json           # Dependencias y scripts del proyecto
├── tailwind.config.ts     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # ¡Este archivo!
```

---

## 🌐 Despliegue

Este proyecto está configurado para un despliegue óptimo en **[Vercel](https://vercel.com)**, la plataforma de los creadores de Next.js. Simplemente conecta tu repositorio de GitHub a Vercel para despliegues automáticos y continuos.

---

## 🎨 Paleta de Colores y Fuentes

* **Colores Principales:**
    * `deepNavy`: Azul oscuro principal
    * `classicOrange`: Naranja vibrante de acento
    * `softPink`: Rosa suave para fondos alternos
    * `bluePurple`: Azul/Púrpura para algunos textos o fondos
* **Fuentes:**
    * `font-heading`: "Outright" (para títulos)
    * `font-body`: Fuente sans-serif estándar (para el cuerpo del texto)

```
