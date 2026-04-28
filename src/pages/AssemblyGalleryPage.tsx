import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Camera,
  Users,
  ChevronRight,
  Calendar,
  MapPin,
  CheckCircle2,
  BarChart2,
  Banknote,
  Home,
} from "lucide-react";
import { cn } from "../lib/utils";

// ─── Images ───────────────────────────────────────────────────────────────────
<<<<<<< HEAD
import asamblea1 from "../assets/images/assembly/1.png";
=======
import asamblea1 from "../assets/images/assembly/asamblea-1.png";
import asamblea2 from "../assets/images/assembly/asamblea-2.png";
import asamblea3 from "../assets/images/assembly/asamblea-3.png";
import asamblea4 from "../assets/images/assembly/asamblea-4.png";
import asamblea5 from "../assets/images/assembly/asamblea-5.png";
import asamblea6 from "../assets/images/assembly/asamblea-6.png";
import asamblea8 from "../assets/images/assembly/asamblea-4.png";
>>>>>>> feature/maps


const STATS = [
  {
    icon: Users,
    value: "500+",
    label: "Asociados presentes",
    color: "text-brand-mustard",
  },
  {
    icon: CheckCircle2,
    value: "13",
    label: "Puntos de agenda",
    color: "text-brand-mustard",
  },
  {
    icon: BarChart2,
    value: "2026",
    label: "Ejercicio fiscal",
    color: "text-brand-mustard",
  },
  {
    icon: Banknote,
    value: "8:00",
    label: "AM — hora de inicio",
    color: "text-brand-mustard",
  },
];

const AGENDA = [
  { titulo: "Bienvenida", responsable: "Presidenta del Consejo" },
  { titulo: "Comprobación de Quórum", responsable: "Comisión de Vigilancia" },
  { titulo: "Invocación", responsable: "Vocal II del Consejo" },
  { titulo: "Lectura y aprobación de agenda", responsable: "Secretario del Consejo" },
  { titulo: "Lectura del acta 2025", responsable: "Secretario del Consejo" },
  { titulo: "Presentación de informes 2025", responsable: "Presidenta, Vigilancia y Crédito" },
  { titulo: "Estados Financieros 2025", responsable: "Contadora General" },
  { titulo: "Aplicación de resultados 2025", responsable: "Presidenta del Consejo" },
  { titulo: "Dictamen contable 2025", responsable: "Comisión de Vigilancia" },
  { titulo: "Plan de Trabajo 2026", responsable: "Vocal I, Vigilancia y Crédito" },
  { titulo: "Presupuesto 2026", responsable: "Vicepresidente del Consejo" },
  { titulo: "Elección/confirmación de cuadros directivos", responsable: "" },
  { titulo: "Clausura y firma de acta", responsable: "" },
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

// ─── Component ────────────────────────────────────────────────────────────────
export function AssemblyGalleryPage() {

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

      
      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO SECTION                                                   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative h-[45vh] sm:h-[55vh] lg:h-[65vh] overflow-hidden"
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
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 max-w-6xl mx-auto left-0 right-0">
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
              className="inline-flex items-center gap-2 bg-brand-mustard/90 text-brand-blue px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg"
            >
              <Camera className="w-3 h-3" aria-hidden="true" />
              Galería Oficial · 2026
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
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
              className="text-white/75 text-sm sm:text-base leading-relaxed mb-7 max-w-xl"
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
                <div className="flex items-center gap-4 text-white/55 text-xs font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-mustard" aria-hidden="true" />
                    Abril 2026
                  </span>
                  <span className="w-px h-4 bg-white/20" aria-hidden="true" />
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-mustard" aria-hidden="true" />
                    Nebaj, Quiché
                  </span>
                  <span className="w-px h-4 bg-white/20 hidden sm:block" aria-hidden="true" />
                  <span className="hidden sm:flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brand-mustard" aria-hidden="true" />
                    500+ asociados
                  </span>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
<<<<<<< HEAD
=======
      {/* 2 + 3. FILTERS + GALLERY GRID                                     */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        id="galeria"
        ref={gallerySectionRef}
        className="bg-brand-blue py-10 sm:py-12 relative"
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
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 uppercase tracking-tighter">
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
            className="text-center text-white/30 text-xs font-black uppercase tracking-[0.2em] mb-10"
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

      {/* ══════════════════════════════════════════════════════════════════ */}
>>>>>>> feature/maps
      {/* 4. ASSEMBLY INFO SECTION                                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        className="bg-brand-blue py-14 sm:py-20 relative overflow-hidden"
        aria-label="Información sobre la asamblea"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-mustard/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">

          {/* ── Header ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-brand-mustard/20 text-brand-mustard text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border border-brand-mustard/30">
              Convocatoria 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Asamblea General Ordinaria Obligatoria 2026
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-white/60 text-sm mt-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-mustard flex-shrink-0" aria-hidden="true" />
                Sábado 21 de febrero de 2026 — 8:00 AM
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-mustard flex-shrink-0" aria-hidden="true" />
                "El Tonelon", Cantón Xolacul, Nebaj, Quiché
              </span>
            </div>
            <div className="h-0.5 w-20 bg-brand-mustard mx-auto rounded-full mt-5" />
          </motion.div>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
          >
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={i}
                custom={i * 0.08}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-xl"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-xl bg-brand-mustard/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-mustard" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-brand-mustard mb-0.5 tabular-nums">{value}</p>
                <p className="text-brand-blue/55 text-[10px] font-semibold uppercase tracking-wide leading-snug">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Agenda Timeline ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl mb-6"
          >
            <h3 className="text-brand-blue font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-mustard rounded-full flex-shrink-0" aria-hidden="true" />
              Agenda de la Asamblea
            </h3>
            <ol className="space-y-3" role="list">
              {AGENDA.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-mustard text-brand-blue text-xs font-black flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 border-b border-brand-blue/5 pb-2">
                    <p className="text-brand-blue font-semibold text-sm">{item.titulo}</p>
                    {item.responsable && (
                      <p className="text-brand-blue/45 text-xs font-medium">{item.responsable}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* ── Nota legal ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-mustard rounded-2xl p-5 shadow-xl"
            role="note"
          >
            <p className="text-brand-blue font-medium text-sm leading-relaxed">
              <span className="text-white font-black drop-shadow-sm">Art. 22 — </span>
              Las asambleas están legalmente constituidas cuando estén presentes por lo menos la
              mitad más uno del número total de asociados activos. De no completarse, se realizará
              el mismo día, una hora después, con los asociados presentes.
            </p>
          </motion.div>

        </div>
      </section>



    </>
  );
}
