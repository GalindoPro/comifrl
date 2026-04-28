<<<<<<< HEAD
# COMIF R.L. - Sitio Web Oficial

Este es el repositorio oficial del sitio web de **COMIF R.L.**, desarrollado con tecnologías modernas para ofrecer una experiencia de usuario fluida y profesional.

## 🚀 Tecnologías Utilizadas

- **React 19**: Biblioteca principal para la interfaz de usuario.
- **TypeScript**: Para un desarrollo más robusto y seguro.
- **Vite**: Herramienta de construcción rápida y servidor de desarrollo.
- **Tailwind CSS**: Framework de CSS para un diseño moderno y responsive.
- **Framer Motion**: Para animaciones fluidas y atractivas.
- **Lucide React**: Set de iconos elegantes y minimalistas.

## 📂 Estructura de Ramas

Para mantener un flujo de trabajo organizado en **Vercel** y **GitHub**, utilizamos las siguientes ramas:

- **`main`**: Rama de producción. Todo lo que esté aquí se despliega automáticamente en el sitio en vivo.
- **`development`**: Rama de desarrollo y pruebas (Staging). Se utiliza para probar nuevas funcionalidades antes de pasarlas a producción.

## 🛠️ Instalación y Desarrollo

Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [url-del-repositorio]
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🌐 Despliegue en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel. 

> [!NOTE]
> Si la rama `development` no aparece en tu panel de Vercel, asegúrate de que en la configuración del proyecto (**Settings > Git**) esté habilitada la opción para desplegar todas las ramas o habilita los **Preview Deployments** para la rama `development` específicamente.

---

Desarrollado con ❤️ para COMIF R.L.
=======
# COMIF, R.L. - Plataforma de Bienestar Financiero

Este proyecto es la plataforma digital oficial de **COMIF, R.L.**, una cooperativa dedicada a impulsar el desarrollo económico y comunitario en la región Ixil, Guatemala.

## 🎨 Identidad de Marca y Diseño
El sitio ha sido optimizado siguiendo estrictos lineamientos visuales para garantizar profesionalismo y confianza:
- **Azul Primario**: `#0F0E47` (Azul Marino Profundo).
- **Acento Mostaza**: `#BF9903` (Color de contraste para botones, pines e iconos).
- **Blanco Puro**: Utilizado en tarjetas e información clave para máxima legibilidad.
- **Sin Lila/Morado**: Se ha realizado una limpieza global para eliminar cualquier rastro de tonos púrpuras o degradados que se alejen de la paleta oficial.

## 📱 Optimización de Experiencia de Usuario (One-Screen UI)
Todas las secciones han sido rediseñadas bajo la filosofía **"One-Screen"**, lo que significa:
- **Cero Scroll Innecesario**: Los márgenes y rellenos (paddings) se han reducido para que el contenido principal quepa en una sola pantalla (PC y móvil).
- **Tablas Compactas**: El simulador financiero usa micro-fuentes y diseño responsivo para mostrar proyecciones completas sin desplazamiento horizontal.
- **Header Compacto**: Menú de navegación reducido para priorizar el espacio del contenido.

## 📍 Red de Agencias y Ubicaciones
- **Sedes Oficiales**: Agencia Nebaj (Central), Agencia Chajul y Agencia Acul.
- **WhatsApp Directo**: Cada agencia cuenta con un botón funcional que redirige al número específico de la sede.
- **Mapas con Pines Fijos**: Los pines rojos son visibles por defecto. La información de contacto en móviles ahora fluye **debajo del mapa**, garantizando visibilidad total del área geográfica.

## 📂 Estructura del Proyecto
- `/src/components`: Componentes reutilizables (Headers, Footers, Quote, Agencies).
- `/src/pages`: Páginas principales (Home, Maps, assembly, Financials).
- `/src/assets`: Logos integrados y recursos gráficos optimizados.

---
**Estado Actual**: Optimizado para producción, alineado con marca y verificado en dispositivos móviles.
>>>>>>> feature/maps
