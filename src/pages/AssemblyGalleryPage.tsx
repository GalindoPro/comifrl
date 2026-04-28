import { useState, useRef, useCallback } from "react";
import { useGallery } from "../hooks/useGallery";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Users,
  ChevronRight,
  Calendar,
  MapPin,
  
  
  
  Eye,
  Heart,
  Home,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { cn } from "../lib/utils";
import { PhotoLightbox } from "../components/PhotoLightbox";
import type { LightboxPhoto } from "../components/PhotoLightbox";
import { GalleryCard } from "../components/GalleryCard";

// ─── Images ───────────────────────────────────────────────────────────────────
import asamblea1 from "../assets/images/assembly/asamblea-1.png";
import asamblea2 from "../assets/images/assembly/asamblea-2.png";
import asamblea3 from "../assets/images/assembly/asamblea-3.png";
import asamblea4 from "../assets/images/assembly/asamblea-4.png";
import asamblea5 from "../assets/images/assembly/asamblea-5.png";
import asamblea6 from "../assets/images/assembly/asamblea-6.png";
import asamblea8 from "../assets/images/assembly/asamblea-4.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type Category = "all" | "general" | "directiva" | "participacion" | "gerente";

interface AssemblyPhoto extends LightboxPhoto {
  category: Exclude<Category, "all">;
}

// ─── Static data ──────────────────────────────────────────────────────────────
const PHOTOS: AssemblyPhoto[] = [
  {
    id: 1,
    src: asamblea1,
    alt: "Vista panorámica del salón de la asamblea general con más de 500 asociados presentes",
    caption: "Vista panorámica — Gran convocatoria de asociados",
    category: "general",
  },
  {
    id: 2,
    src: asamblea2,
    alt: "Mesa directiva de COMIF R.L. durante la presentación del informe anual",
    caption: "Mesa directiva presentando el informe anual 2026",
    category: "directiva",
  },
  {
    id: 3,
    src: asamblea3,
    alt: "Asociados de la cooperativa participando activamente en la asamblea",
    caption: "Participación activa de los asociados",
    category: "participacion",
  },
  {
    id: 4,
    src: asamblea4,
    alt: "Asamblea general en pleno durante la lectura y votación de resoluciones",
    caption: "Asamblea en pleno durante la lectura de resoluciones",
    category: "general",
  },
  {
    id: 5,
    src: asamblea5,
    alt: "Asociados atentos a la presentación de resultados financieros 2026",
    caption: "Presentación de resultados financieros 2026",
    category: "participacion",
  },
  {
    id: 6,
    src: asamblea6,
    alt: "Mesa directiva completa ante los asociados al cierre de la asamblea",
    caption: "Mesa directiva al cierre de la asamblea",
    category: "directiva",
  },
  {
    id: 8,
    src: asamblea8,
    alt: "Gerente General de FEDERURAL durante la Asamblea General de COMIF R.L.",
    caption: "Gerente General de FEDERURAL",
    category: "gerente",
  },
];

const FILTERS: { id: Category; label: string; icon: React.ElementType }[] = [
  { id: "all", label: "Todas las fotos", icon: Camera },
  { id: "general", label: "Vista General", icon: Eye },
  { id: "directiva", label: "Mesa Directiva", icon: Users },
  { id: "participacion", label: "Participación", icon: Heart },
  { id: "gerente", label: "Gerente FEDERURAL", icon: Briefcase },
];




// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  }),
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const photoCard = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    transition: { duration: 0.22 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export function AssemblyGalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const gallerySectionRef = useRef<HTMLElement>(null);

  const filteredPhotos = activeFilter === "all"
    ? PHOTOS
    : PHOTOS.filter((p) => p.category === activeFilter);

  // useGallery receives the current filtered set so navigation inside
  // the lightbox stays within the visible photos.
  const gallery = useGallery(filteredPhotos);

  const handleFilterChange = useCallback((cat: Category) => {
    gallery.close();        // close lightbox before swapping the photo set
    setActiveFilter(cat);
  }, [gallery]);

  const scrollToGallery = () => {
    gallerySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── SEO / Document metadata (React 19) ─────────────────────────── */}
      <title>Asamblea General de Asociados 2026 | COMIF R.L.</title>
      <meta
        name="description"
        content="Galería fotográfica oficial de la Asamblea General Ordinaria de COMIF R.L. 2026. Más de 500 asociados reunidos en Nebaj, Quiché para aprobar resoluciones y proyectos estratégicos."
      />
      <meta
        name="keywords"
        content="asamblea general, COMIF, cooperativa Ixil, nebaj, Quiché, galería fotográfica, resoluciones 2026"
      />
      <meta property="og:title" content="Asamblea General COMIF R.L. 2026" />
      <meta
        property="og:description"
        content="Registro fotográfico de la Asamblea General Ordinaria 2026 de COMIF R.L."
      />
      <meta property="og:type" content="article" />

      {/* ── Skip navigation (WCAG 2.1 — 2.4.1) ──────────────────────────── */}
      <a
        href="#galeria"
        className={cn(
          "sr-only focus:not-sr-only",
          "focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100]",
          "focus:bg-brand-blue focus:text-white focus:px-5 focus:py-2.5",
          "focus:rounded-full focus:text-sm focus:font-bold focus:shadow-xl",
          "focus:outline-none focus:ring-2 focus:ring-brand-mustard",
        )}
      >
        Saltar a la galería
      </a>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO SECTION                                                   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden"
        aria-label="Portada de la Asamblea General 2026"
      >
        {/* Background image */}
        <img
          src={asamblea1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Solid overlays */}
        <div className="absolute inset-0 bg-brand-blue/80" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between pt-24 pb-6 px-6 sm:pt-32 sm:pb-10 sm:px-10 max-w-6xl mx-auto left-0 right-0">
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Ruta de navegación"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard rounded"
                >
                  <Home className="w-3 h-3" />
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-white/30" />
              </li>
              <li>
                <Link
                  to="/noticias"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-mustard rounded"
                >
                  Noticias
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-white/30" />
              </li>
              <li className="text-white/90" aria-current="page">
                Asamblea General 2026
              </li>
            </ol>
          </motion.nav>

          {/* Main hero content */}
          <div className="max-w-2xl">
            {/* Event badge */}
            <motion.div
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-1.5 bg-brand-mustard/90 text-brand-blue px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 shadow-lg"
            >
              <Camera className="w-2.5 h-2.5" aria-hidden="true" />
              Galería Oficial · 2026
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl font-black text-white leading-tight mb-2 uppercase tracking-tighter"
            >
              Asamblea General
              <span className="block text-brand-mustard">de Asociados 2026</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white/70 text-[10px] sm:text-xs leading-tight mb-4 max-w-lg font-medium"
            >
              Registro fotográfico de nuestra Asamblea General Ordinaria celebrada
              en Nebaj, Quiché. Más de 500 asociados reunidos para definir el
              rumbo institucional y aprobar las resoluciones del ejercicio 2026.
            </motion.p>

            {/* CTA + meta row */}
            <motion.div
              custom={0.58}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToGallery}
                className={cn(
                  "inline-flex items-center gap-2 bg-brand-mustard hover:bg-brand-mustard/85",
                  "text-brand-blue font-black px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest",
                  "transition-all duration-200 active:scale-95 shadow-lg shadow-brand-mustard/30",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                )}
              >
                Ver galería
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-3 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-brand-mustard" aria-hidden="true" />
                  Abril 2026
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-mustard" aria-hidden="true" />
                  Nebaj
                </span>
                <span className="hidden sm:flex items-center gap-1">
                  <Users className="w-3 h-3 text-brand-mustard" aria-hidden="true" />
                  500+ asociados
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 2 + 3. FILTERS + GALLERY GRID                                     */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        id="galeria"
        ref={gallerySectionRef}
        className="bg-brand-blue pt-18 pb-6 sm:pt-18 pb-6 relative"
        aria-label="Galería fotográfica"
      >
        <div className="container mx-auto px-4">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl sm:text-2xl font-black text-white mb-3 uppercase tracking-tighter">
              Galería <span className="text-brand-mustard">Fotográfica</span>
            </h2>
            <div className="h-1.5 w-20 bg-brand-mustard mx-auto rounded-full" />
          </motion.div>

          {/* ── Filter tabs ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            role="tablist"
            aria-label="Filtrar fotografías por categoría"
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            {FILTERS.map(({ id, label, icon: Icon }) => {
              const count =
                id === "all" ? PHOTOS.length : PHOTOS.filter((p) => p.category === id).length;
              const isActive = activeFilter === id;

              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="gallery-grid"
                  onClick={() => handleFilterChange(id)}
                  className={cn(
                    "relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest",
                    "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-brand-mustard focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue",
                    isActive
                      ? "bg-brand-mustard text-brand-blue shadow-glow active:scale-95"
                      : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white active:scale-95",
                  )}
                >
                  <Icon className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                  <span
                    className={cn(
                      "text-[9px] font-black w-5 h-5 rounded-lg flex items-center justify-center transition-colors",
                      isActive
                        ? "bg-brand-blue/20 text-brand-blue"
                        : "bg-white/10 text-white/40",
                    )}
                    aria-label={`${count} fotos`}
                  >
                    {count}
                  </span>

                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="filter-indicator"
                      className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-brand-mustard rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Live count for screen readers */}
          <p
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          >
            Mostrando {filteredPhotos.length} de {PHOTOS.length} fotografías
          </p>

          {/* Visible count */}
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/30 text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            Mostrando{" "}
            <span className="text-brand-mustard font-black">{filteredPhotos.length}</span>
            {" "}de {PHOTOS.length} fotografías
          </motion.p>

          {/* ── Photo grid ────────────────────────────────────────────── */}
          <div
            id="gallery-grid"
            role="tabpanel"
            aria-label={`Fotos de ${FILTERS.find((f) => f.id === activeFilter)?.label ?? "todas las categorías"}`}
          >
            <motion.div
              variants={staggerGrid}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo, idx) => (
                  <motion.div
                    key={photo.id}
                    layout
                    variants={photoCard}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={cn(
                      activeFilter === "all" && idx >= 4 && "xl:col-span-2",
                    )}
                  >
                    <GalleryCard
                      src={photo.src}
                      alt={photo.alt}
                      caption={photo.caption}
                      index={idx}
                      accent={idx % 2 === 0 ? "mustard" : "blue"}
                      icon="eye"
                      aspectRatio={
                        activeFilter === "all" && idx >= 4 ? "16/7" : "4/3"
                      }
                      className="w-full"
                      onClick={() => gallery.openAt(idx)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Click hint */}
          <p className="text-center text-white/20 text-[10px] font-black uppercase tracking-widest mt-12" aria-hidden="true">
            Haz clic en cualquier foto para verla en pantalla completa
          </p>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {gallery.isOpen && (
          <PhotoLightbox key="page-lightbox" {...gallery.lightboxProps} />
        )}
      </AnimatePresence>
    </>
  );
}
