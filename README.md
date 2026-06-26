# 🏦 COMIF, R.L. - Plataforma de Bienestar Financiero

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este proyecto es la plataforma digital oficial de **COMIF, R.L.**, una cooperativa dedicada a impulsar el desarrollo económico y comunitario en la región Ixil, Guatemala. Desarrollado con tecnologías modernas para ofrecer una experiencia de usuario fluida y profesional.

## ✨ Novedades y Actualizaciones Recientes

Se han incorporado diversas mejoras a la plataforma para ofrecer un servicio más completo y actualizado:

- **Requisitos de Afiliación 2025:** Se actualizaron los requisitos de afiliación e información de servicios para el año 2025.
- **Simulador de Préstamos Mejorado:** Se optimizó el manejo de las vistas de la calculadora de préstamos y se agregó un resumen claro con los totales a pagar.
- **Términos Hipotecarios y Órganos Directivos:** Se actualizaron las políticas de créditos hipotecarios y se incorporó información sobre la Comisión de Vigilancia en la sección de *Quiénes Somos*.
- **Mejoras de Interfaz (UI):** Se actualizó el texto y posicionamiento de imágenes en el carrusel principal (*Hero Carousel*), se actualizaron etiquetas en los simuladores y se reemplazaron archivos gráficos obsoletos.

## 🚀 Tecnologías Utilizadas

- **React 19**: Biblioteca principal para la interfaz de usuario.
- **TypeScript**: Para un desarrollo más robusto, escalable y seguro.
- **Vite**: Herramienta de construcción ultrarrápida y servidor de desarrollo ágil.
- **Tailwind CSS**: Framework de CSS utilitario para un diseño moderno, flexible y 100% *responsive*.
- **Framer Motion**: Integración de animaciones fluidas y atractivas.
- **Lucide React**: Colección de iconos elegantes y minimalistas.

## 🎨 Identidad de Marca y Diseño
El sitio ha sido optimizado siguiendo estrictos lineamientos visuales para garantizar profesionalismo y confianza:
- **Azul Primario**: `#0F0E47` (Azul Marino Profundo).
- **Acento Mostaza**: `#BF9903` (Color de contraste para botones, pines e iconos).
- **Blanco Puro**: Utilizado en tarjetas e información clave para máxima legibilidad.
- **Presencia Digital Estratégica**: Se han incorporado accesos directos elegantes al sitio web oficial (`comifrl.gt`) y correo corporativo (`info@comifrl.gt`) en los encabezados, pie de página y sección de Contacto.
- **Sin Lila/Morado**: Se ha realizado una limpieza global para mantener la fidelidad a la paleta oficial e institucional.

## 📱 Optimización de Experiencia de Usuario (One-Screen UI)
Todas las secciones han sido rediseñadas bajo la filosofía **"One-Screen"**, lo que significa:
- **Cero Scroll Innecesario**: Los márgenes y rellenos (paddings) se han reducido para que el contenido principal quepa en una sola pantalla, tanto en PC como en dispositivos móviles.
- **Simuladores Financieros Limpios**: El simulador de *Inversión a Plazo Fijo* se simplificó para enfocarse en el resumen directo de rendimiento (Interés Bruto, ISR, Líquido), removiendo tablas extensas y facilitando la toma de decisiones.
- **Carruseles Adaptativos**: Las imágenes de publicidad (ej. Cuentas Infanto-Juveniles) utilizan un sistema flexible para garantizar que el diseño nunca se recorte ni se distorsione, garantizando legibilidad óptima.
- **Header Compacto**: Menú de navegación reducido para priorizar el espacio del contenido de valor.

## 📍 Red de Agencias y Ubicaciones
- **Sedes Oficiales**: Agencia Nebaj (Central), Agencia Chajul y Agencia Acul.
- **WhatsApp Directo**: Cada agencia cuenta con un botón funcional que redirige de manera inmediata al número específico de la sede.
- **Mapas con Pines Fijos**: Los pines rojos son visibles por defecto. La información de contacto en dispositivos móviles ahora fluye **debajo del mapa**, garantizando una visibilidad total del área geográfica.

## 📂 Estructura de Ramas y Proyecto

Para mantener un flujo de trabajo organizado en **Vercel** y **GitHub**, utilizamos las siguientes ramas:
- **`main`**: Rama de producción. Todo código aprobado se despliega automáticamente en el sitio en vivo.
- **`development`**: Rama de desarrollo y pruebas (*Staging*). Se utiliza para probar nuevas funcionalidades antes de pasarlas a producción.

### Estructura de Directorios Principal
- `/src/components`: Componentes reutilizables (Headers, Footers, Quote, Agencies, etc.).
- `/src/pages`: Páginas y vistas principales.
- `/src/assets`: Recursos gráficos, imágenes y logos optimizados.

## 🛠️ Instalación y Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
3. **Construir el proyecto para producción:**
   ```bash
   npm run build
   ```

## 🌐 Despliegue en Vercel
El proyecto está configurado para desplegarse automáticamente a través de la plataforma Vercel. 

> [!NOTE]
> Si la rama `development` no aparece en tu panel de Vercel, asegúrate de que en la configuración del proyecto (**Settings > Git**) esté habilitada la opción para desplegar todas las ramas o habilita los **Preview Deployments** específicamente para la rama `development`.

---
<p align="center">
Desarrollado con ❤️ para <strong>COMIF, R.L.</strong><br>
<em>Optimizado para producción y verificado en dispositivos móviles.</em>
</p>
