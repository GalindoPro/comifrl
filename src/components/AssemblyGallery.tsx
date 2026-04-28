import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Users,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";
import { cn } from "../lib/utils";
import { PhotoLightbox } from "./PhotoLightbox";
import type { LightboxPhoto } from "./PhotoLightbox";
import { GalleryCard } from "./GalleryCard";
import { useGallery } from "../hooks/useGallery";

// ─── Images ────────────────────────────────────────────────────────────────
// Coloca tus 6 fotos en:  src/assets/images/assembly/
// con los nombres:        asamblea-1.png … asamblea-6.png
import asamblea1 from "../assets/images/assembly/asamblea-1.png";
import asamblea2 from "../assets/images/assembly/asamblea-2.png";
import asamblea3 from "../assets/images/assembly/asamblea-3.png";
import asamblea4 from "../assets/images/assembly/asamblea-4.png";
import asamblea5 from "../assets/images/assembly/asamblea-5.png";
import asamblea6 from "../assets/images/assembly/asamblea-6.png";

// ─── Data ──────────────────────────────────────────────────────────────────
const galleryPhotos: LightboxPhoto[] = [
  {
    id: 1,
    src: asamblea1,
    alt: "Vista panorámica de la asamblea general",
    caption: "Vista panorámica — gran convocatoria de asociados",
  },
  {
    id: 2,
    src: asamblea2,
    alt: "Mesa directiva durante la asamblea",
    caption: "Mesa directiva presentando el informe anual",
  },
  {
    id: 3,
    src: asamblea3,
    alt: "Participación activa de los asociados",
    caption: "Participación activa de los asociados",
  },
  {
    id: 4,
    src: asamblea4,
    alt: "Asamblea en pleno",
    caption: "Asamblea en pleno durante la lectura de resoluciones",
  },
  {
    id: 5,
    src: asamblea5,
    alt: "Presentación de resultados financieros",
    caption: "Presentación de resultados financieros 2024",
  },
  {
    id: 6,
    src: asamblea6,
    alt: "Cierre de la asamblea",
    caption: "Presentación ante la asamblea de asociados",
  },
];

// ─── Grid animation variants ───────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ─── Component ─────────────────────────────────────────────────────────────
export function AssemblyGallery() {
  const gallery = useGallery(galleryPhotos);

  return (
    <div className="flex flex-col">
      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-2 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl font-black text-brand-blue mb-1 uppercase tracking-tighter"
            >
              Asamblea <span className="text-brand-mustard">General 2026</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-500 text-[10px] md:text-xs max-w-lg mx-auto leading-tight"
            >
              Registro fotográfico de nuestra comunidad tomando decisiones en beneficio de todos.
            </motion.p>

            {/* Meta info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="flex items-center justify-center gap-3 mt-2"
            >
              {[
                { icon: <MapPin className="w-2.5 h-2.5 text-brand-mustard" />, label: "Nebaj, Quiché" },
                { icon: <Users className="w-2.5 h-2.5 text-brand-mustard" />, label: "+500 Asociados" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-brand-blue/60 text-[9px] font-bold uppercase tracking-widest"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ────────────────────────────────────────────────── */}
      <section className="pt-2 pb-2 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2"
          >
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                className={cn(index >= 4 && "xl:col-span-2")}
              >
                <GalleryCard
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.caption}
                  index={index}
                  accent={index % 2 === 0 ? "mustard" : "green"}
                  aspectRatio={index >= 4 ? "16/7" : "4/3"}
                  className="w-full"
                  onClick={() => gallery.openAt(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER / CTA ────────────────────────────────────────────────── */}
      <section className="pt-3 pb-3 bg-brand-blue relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-base md:text-lg font-black mb-2 leading-tight uppercase tracking-tighter"
          >
            Únete a nuestra <span className="text-brand-mustard">comunidad</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            <button className="inline-flex items-center gap-2 bg-brand-mustard text-brand-blue font-black px-3 py-1 rounded-lg text-[9px] uppercase tracking-widest shadow-lg">
              Detalles
              <ChevronRight className="w-3 h-3" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white font-black px-3 py-1 rounded-lg text-[9px] uppercase tracking-widest border border-white/20">
              Afiliarse
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX (delegated to PhotoLightbox) ───────────────────────── */}
      <AnimatePresence>
        {gallery.isOpen && (
          <PhotoLightbox
            key="assembly-lightbox"
            {...gallery.lightboxProps}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
