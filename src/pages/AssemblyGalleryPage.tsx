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
import asamblea1 from "../assets/images/assembly/1.png";


const STATS = [
  {
    icon: Users,
    value: "500+",
    label: "Asociados presentes",
    color: "text-brand-mustard",
  },
  {
    icon: CheckCircle2,
    value: "8",
    label: "Resoluciones aprobadas",
    color: "text-yellow-400",
  },
  {
    icon: BarChart2,
    value: "3",
    label: "Nuevos proyectos",
    color: "text-brand-mustard",
  },
  {
    icon: Banknote,
    value: "Q1.2M",
    label: "Capital social",
    color: "text-yellow-400",
  },
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
        className="relative h-[62vh] sm:h-[68vh] lg:h-[75vh] overflow-hidden"
        aria-label="Portada de la Asamblea General 2026"
      >
        {/* Background image */}
        <img
          src={asamblea1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/65 to-brand-blue/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 via-transparent to-transparent" />

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

        {/* Bottom fade-into-dark */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-blue to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 4. ASSEMBLY INFO SECTION                                          */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section
        className="bg-brand-blue py-14 sm:py-20 relative overflow-hidden"
        aria-label="Información sobre la asamblea"
      >
        {/* Decorative shapes */}
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-brand-mustard/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-72 h-72 bg-brand-mustard/6 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-brand-mustard/20 text-brand-mustard text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border border-brand-mustard/30">
              Datos de la Sesión
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Asamblea General Ordinaria 2026
            </h2>
            <div className="h-0.5 w-20 bg-brand-mustard mx-auto rounded-full" />
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          >
            {STATS.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={i}
                custom={i * 0.08}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-50 transition-colors duration-200 shadow-xl"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/5 flex items-center justify-center">
                    <Icon className={cn("w-5 h-5", color === "text-brand-mustard" ? "text-brand-mustard" : "text-brand-blue")} aria-hidden="true" />
                  </div>
                </div>
                <p className={cn("text-3xl font-bold mb-1 tabular-nums", color === "text-brand-mustard" ? "text-brand-mustard" : "text-brand-blue")}>
                  {value}
                </p>
                <p className="text-brand-blue/55 text-xs font-medium uppercase tracking-wide leading-snug">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Detail cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* About the assembly */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-xl"
            >
              <h3 className="text-brand-blue font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand-mustard rounded-full flex-shrink-0" aria-hidden="true" />
                Sobre la Asamblea
              </h3>
              <ul className="space-y-3" role="list">
                {[
                  "Convocatoria ordinaria conforme estatutos vigentes",
                  "Quórum alcanzado con +500 asociados presentes",
                  "Presentación de memoria anual y estados financieros",
                  "Elección de nuevos miembros del Consejo de Administración",
                  "Aprobación del presupuesto y plan operativo 2025",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-blue/70 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 text-brand-mustard flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Event details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-7 shadow-xl"
            >
              <h3 className="text-brand-blue font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-brand-mustard rounded-full flex-shrink-0" aria-hidden="true" />
                Detalles del Evento
              </h3>
              <dl className="space-y-4">
                {[
                  { label: "Fecha", value: "Abril 2026" },
                  { label: "Lugar", value: "Salón Municipal, Nebaj, Quiché" },
                  { label: "Tipo de sesión", value: "Asamblea General Ordinaria" },
                  { label: "Duración", value: "Jornada completa" },
                  { label: "Resoluciones aprobadas", value: "8 resoluciones" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-4">
                    <dt className="text-brand-blue/45 text-xs uppercase tracking-wide font-semibold flex-shrink-0">
                      {label}
                    </dt>
                    <dd className="text-brand-blue/85 text-sm font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>



    </>
  );
}
