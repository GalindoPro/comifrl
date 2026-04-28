import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

interface LocationMapProps {
  title: string;
  address: string;
  coordinates?: { lat: number; lng: number };
  description?: string;
  embedUrl?: string;
}

export const LocationMap = ({ 
  title, 
  address, 
  coordinates, 
  description,
  embedUrl
}: LocationMapProps) => {
  
  // Construir URL del mapa
  let mapUrl: string;
  
  if (embedUrl) {
    mapUrl = embedUrl;
  } else if (coordinates) {
    // Usar coordenadas exactas (más preciso)
    mapUrl = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=16&output=embed`;
  } else {
    // Usar dirección (Google lo interpreta)
    const encodedAddress = encodeURIComponent(address);
    mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  }

  // URL para abrir en Google Maps completo
  const openInGoogleMaps = () => {
    let url: string;
    if (coordinates) {
      url = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
    } else {
      url = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    }
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-mustard/30 transition-all duration-300 h-full flex flex-col"
    >
      {/* Título y descripción */}
      <div className="p-4 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={20} className="text-brand-mustard" />
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">{title}</h3>
        </div>
        {description && (
          <p className="text-white/60 text-sm mb-2">{description}</p>
        )}
        <p className="text-white/40 text-xs mt-1 font-medium">{address}</p>
      </div>

      {/* Mapa interactivo */}
      <div className="relative flex-grow min-h-[350px]">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '350px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa - ${title}`}
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Botón flotante para abrir en Google Maps */}
        <button
          onClick={openInGoogleMaps}
          className="absolute bottom-4 right-4 bg-brand-blue/90 backdrop-blur-sm hover:bg-brand-mustard text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 z-10"
          aria-label="Abrir en Google Maps"
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Google Maps</span>
            <ExternalLink size={18} />
          </div>
        </button>
      </div>
    </motion.div>
  );
};
