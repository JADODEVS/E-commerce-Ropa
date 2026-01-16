# 👕 E-Commerce de Ropa - Tienda Online Moderna

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Private-red?style=flat-square)

Plataforma de comercio electrónico moderna y escalable desarrollada con Next.js 15 y React 19, implementando las mejores prácticas de desarrollo web moderno, internacionalización y diseño responsive.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Equipo de Desarrollo](#-equipo-de-desarrollo)
- [Licencia](#-licencia)

## 📖 Descripción del Proyecto

Este proyecto es una aplicación web de e-commerce especializada en venta de ropa, desarrollada como proyecto académico por estudiantes de noveno semestre de Ingeniería de Sistemas de la Universidad Tecnológica de Pereira (UTP). La aplicación demuestra competencias en desarrollo frontend moderno, manejo de estado, internacionalización y diseño de interfaces de usuario.

### 🎯 Objetivos del Proyecto

- Implementar una tienda online completa con Next.js y React
- Desarrollar una interfaz de usuario moderna y responsive
- Aplicar prácticas de desarrollo profesional y trabajo en equipo
- Demostrar conocimientos en tecnologías web actuales

## ✨ Características Principales

### 🌍 Internacionalización (i18n)
- **Soporte multiidioma**: Español, Inglés y Francés
- Implementación con `next-intl` para gestión de traducciones
- Cambio de idioma dinámico sin recargar la página
- Rutas localizadas automáticamente

### 🛍️ Funcionalidades de E-Commerce
- **Catálogo de productos** con filtros avanzados
- **Sistema de favoritos** para guardar productos
- **Carrito de compras** funcional
- **Detalle de productos** con información completa
- **Productos destacados** y más vendidos de la semana
- **Secciones promocionales** dinámicas

### 🎨 Diseño y UX
- **Diseño responsive** con Tailwind CSS 4
- **Interfaz moderna** y atractiva
- **Navegación intuitiva** con menú y top bar
- **Componentes reutilizables** y modulares
- **Animaciones y transiciones** suaves

### 🔐 Autenticación de Usuarios
- Sistema de **Login** y **Sign Up**
- Páginas dedicadas para gestión de usuarios
- Componentes de formularios optimizados

## 🛠️ Tecnologías Utilizadas

### Frontend Core
- **[Next.js 15.2.4](https://nextjs.org/)** - Framework React con App Router
- **[React 19.0.0](https://react.dev/)** - Biblioteca JavaScript para interfaces de usuario
- **[React DOM 19.0.0](https://react.dev/)** - Renderizado de componentes

### Estilos y Diseño
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **PostCSS** - Procesador de CSS

### Internacionalización
- **[next-intl 4.1.0](https://next-intl-docs.vercel.app/)** - Biblioteca de internacionalización para Next.js

### Herramientas de Desarrollo
- **[ESLint 9](https://eslint.org/)** - Linter para mantener código limpio
- **Turbopack** - Empaquetador ultra-rápido de Next.js

## 🏗️ Arquitectura del Proyecto

El proyecto sigue la arquitectura **App Router** de Next.js 15, con una estructura modular y organizada:

```
frontend-ecommerce/
│
├── src/
│   ├── app/
│   │   └── [locale]/              # Rutas dinámicas por idioma
│   │       ├── components/        # Componentes React organizados por funcionalidad
│   │       │   ├── general/       # Componentes generales (Card, Footer, Menu, TopBar)
│   │       │   ├── login/         # Componentes de autenticación
│   │       │   ├── main-page/     # Componentes de página principal
│   │       │   ├── shop/          # Componentes de tienda (Catalog, Filters)
│   │       │   └── sign-up/       # Componentes de registro
│   │       ├── about-us/          # Página Acerca de Nosotros
│   │       ├── cart/              # Página del Carrito
│   │       ├── login/             # Página de Login
│   │       ├── shop-page/         # Página de Tienda
│   │       ├── sign-up/           # Página de Registro
│   │       ├── layout.js          # Layout principal con internacionalización
│   │       ├── page.js            # Página de inicio
│   │       └── globals.css        # Estilos globales
│   │
│   ├── i18n/                      # Configuración de internacionalización
│   │   ├── navigation.js          # Navegación localizada
│   │   ├── request.js             # Manejo de solicitudes i18n
│   │   └── routing.js             # Configuración de rutas multiidioma
│   │
│   └── middleware.js              # Middleware para detección de idioma
│
├── messages/                      # Archivos de traducción
│   ├── en.json                    # Traducciones en inglés
│   ├── es.json                    # Traducciones en español
│   └── fr.json                    # Traducciones en francés
│
└── public/                        # Recursos estáticos (imágenes, iconos)
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** 18.0 o superior
- **npm**, **yarn**, **pnpm** o **bun** como gestor de paquetes

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd E-commerce-Ropa
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

4. **Abrir en el navegador**
   
   Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Turbopack
- `npm run build` - Genera el build de producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint para revisar el código

## 📁 Estructura del Proyecto

### Componentes Principales

#### 🏠 Página Principal (`page.js`)
- **PromoSection**: Sección de promociones destacadas
- **FeaturedProducts**: Productos destacados del catálogo
- **PromoSecondSection**: Segunda sección promocional
- **WeeklyTopSelling**: Productos más vendidos de la semana

#### 🛒 Componentes de Tienda
- **Catalog**: Catálogo completo con sistema de paginación
- **Filter_1 / Filter_2**: Filtros avanzados por categoría, precio, talla, etc.
- **Card**: Tarjeta de producto reutilizable con funcionalidad de favoritos
- **DetailsCard**: Vista detallada de productos

#### 📐 Componentes Generales
- **Menu**: Navegación principal del sitio
- **TopBar**: Barra superior con selector de idioma y acciones rápidas
- **Footer**: Pie de página con información de contacto

## 🎯 Funcionalidades

### Catálogo de Productos
- Visualización de productos en grilla responsive
- Filtros por categoría, precio, talla, color y material
- Sistema de "Mostrar más" para cargar productos adicionales
- Información detallada: nombre, precio, descripción, tallas disponibles

### Sistema de Favoritos
- Marcar/desmarcar productos como favoritos
- Estado persistente durante la sesión
- Indicador visual en las tarjetas de producto

### Internacionalización
- Cambio automático de idioma según preferencias del navegador
- Rutas URL localizadas (ej: `/en/shop`, `/es/tienda`, `/fr/boutique`)
- Contenido traducido: textos, botones, mensajes

### Carrito de Compras
- Agregar productos al carrito
- Vista del carrito con resumen de compra
- Gestión de cantidades

## 📸 Capturas de Pantalla

_[En este espacio se pueden agregar capturas de pantalla de la aplicación cuando estén disponibles]_

## 👥 Equipo de Desarrollo

Este proyecto fue desarrollado por estudiantes de **noveno semestre de Ingeniería de Sistemas** de la **Universidad Tecnológica de Pereira (UTP)**, Pereira, Colombia.

### Desarrolladores

| Nombre | Rol | GitHub |
|--------|-----|--------|
| **Juan David Álvarez Mejía** | Full Stack Developer | [@juandavid-username] |
| **Daniel Andrés Ortiz Solano** | Full Stack Developer | [@daniel-username] |

### Institución Académica
- **Universidad**: Universidad Tecnológica de Pereira (UTP)
- **Facultad**: Ingeniería de Sistemas
- **Semestre**: Noveno
- **Ubicación**: Pereira, Risaralda, Colombia

## 🔮 Roadmap / Próximas Características

- [ ] Integración con API backend real
- [ ] Sistema de pagos (Stripe, PayPal)
- [ ] Panel de administración
- [ ] Base de datos para persistencia
- [ ] Sistema de reseñas y calificaciones
- [ ] Notificaciones en tiempo real
- [ ] Optimización de imágenes con Next.js Image
- [ ] Testing unitario y de integración
- [ ] Deploy en producción (Vercel)

## 📚 Recursos de Aprendizaje

Este proyecto utiliza tecnologías modernas. Para aprender más:

- [Documentación de Next.js](https://nextjs.org/docs) - Features y API de Next.js
- [Tutorial interactivo de Next.js](https://nextjs.org/learn)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Guía de next-intl](https://next-intl-docs.vercel.app/)

## 🚀 Deploy

### Despliegue en Vercel

La forma más sencilla de desplegar esta aplicación es usar [Vercel](https://vercel.com/), la plataforma de los creadores de Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Consulta la [documentación de deployment de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## 📄 Licencia

Este proyecto es privado y fue desarrollado con fines académicos.

---

⭐ **Desarrollado con pasión por estudiantes de la UTP** 🎓

_Proyecto académico - Ingeniería de Sistemas - Universidad Tecnológica de Pereira - 2026_
