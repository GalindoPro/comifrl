import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Navigation, Building2, Phone, ExternalLink } from "lucide-react";

const locations = [
  {
    id: "central",
    title: "Oficina Central",
    description: "Sede principal de COMIF R.L. en Nebaj",
    address: "Cantón Vipila, Nebaj, Quiché, Guatemala",
    coordinates: { lat: 15.4090833, lng: -91.1457222 },
    phone: "+502 5748 1463",
    zoom: 18,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.176449174542!2d-91.1457222!3d15.4090833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858b8b002c2fe7bb%3A0x42e9fca3eeb4af6f!2sComif%20R.L.%20Nebaj!5e0!3m2!1ses-419!2sgt!4v1713650000000!5m2!1ses-419!2sgt",
    externalUrl: "https://maps.app.goo.gl/SPhLrcjaFL6Y978h8"
  },
  {
    id: "chajul",
    title: "Agencia Chajul",
    description: "Servicios financieros en el corazón de Chajul",
    address: "Chajul, Quiché, Guatemala",
    coordinates: { lat: 15.4856671, lng: -91.0361975 },
    phone: "+502 3061 5489",
    zoom: 17,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.166241315518!2d-91.0361975!3d15.4856671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858b93006575575f%3A0x36c72b98bf17efea!2sComif%20R.L.!5e0!3m2!1ses-419!2sgt!4v1713650000000!5m2!1ses-419!2sgt",
    externalUrl: "https://maps.app.goo.gl/GHTEwFEgifNJYzeJ7"
  },
  {
    id: "acul",
    title: "Agencia Acul",
    description: "Cobertura comunitaria y cercanía en Aldea Acul",
    address: "Aldea Acul, Nebaj, Quiché, Guatemala",
    coordinates: { lat: 15.4058719, lng: -91.1900482 },
    phone: "+502 3037 1080",
    zoom: 17,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.356241315518!2d-91.1900482!3d15.4058719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858b8002a79dc5b:0xa03f74ed03ba962!2sComif%20R.L.%20Acul!5e0!3m2!1ses-419!2sgt!4v1713650000000!5m2!1ses-419!2sgt",
    externalUrl: "https://maps.app.goo.gl/rUHy6q2v9SWXUoQU9"
  }
];

export const MapsPage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMapHovered, setIsMapHovered] = useState(false);

  const activeLoc = selectedId ? locations.find(l => l.id === selectedId) : null;

  // URL dinámica: Vista general ESTABLE de todo el país o vista detallada oficial
  const mapUrl = activeLoc 
    ? activeLoc.embedUrl
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860526.283151854!2d-90.5!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589050b9a322d75%3A0x2a72064147746416!2sGuatemala!5e0!3m2!1ses!2sgt!4v1713655529457!5m2!1ses!2sgt`;

  const externalUrl = activeLoc 
    ? activeLoc.externalUrl
    : `https://www.google.com/maps/search/Comif+R.L.+Guatemala`;

  return (
    <section className="min-h-screen bg-brand-blue pt-12 pb-24 overflow-hidden relative">
      {/* Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-mustard/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-brand-mustard/20 rounded-full border border-brand-mustard/30 mb-8"
          >
            <Globe className="w-4 h-4 text-brand-mustard animate-pulse" />
            <span className="text-[10px] font-black text-brand-mustard uppercase tracking-[0.3em]">
              Nuestra Presencia
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none"
          >
            Red de <span className="text-brand-mustard">Agencias</span>
          </motion.h1>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Selecciona una agencia para ver su ubicación exacta en el mapa de Guatemala.
          </p>
        </div>

        {/* Unified Map Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row h-[700px] lg:h-[650px]">
            
            {/* Sidebar / Labels */}
            <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-8 flex flex-col gap-4 overflow-y-auto bg-brand-blue/30 lg:bg-transparent">
              <div className="mb-4">
                <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-4">Nuestras Sedes</h2>
                <div className="space-y-3">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedId(loc.id)}
                      className={`w-full text-left p-5 rounded-3xl transition-all duration-500 flex items-center gap-5 group border ${selectedId === loc.id ? 'bg-brand-mustard text-brand-blue shadow-lg border-brand-mustard scale-[1.02]' : 'bg-white/5 text-white border-white/5 hover:bg-white/10 hover:border-white/10'}`}
                    >
                      <div className={`p-3 rounded-2xl transition-colors ${selectedId === loc.id ? 'bg-brand-blue/10' : 'bg-brand-mustard/20'}`}>
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <span className="block text-sm font-black uppercase tracking-widest mb-0.5">{loc.title}</span>
                        <span className="text-[10px] opacity-60 font-bold uppercase tracking-[0.2em]">{loc.id === 'central' ? 'Sede Central' : 'Punto de Servicio'}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Info Card (appears in sidebar on desktop) */}
              <AnimatePresence mode="wait">
                {activeLoc && (
                  <motion.div
                    key={activeLoc.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-auto hidden lg:block p-6 rounded-3xl bg-white/5 border border-white/10"
                  >
                    <h3 className="text-brand-mustard text-xl font-black mb-4 uppercase tracking-tighter">{activeLoc.title}</h3>
                    <div className="space-y-5">
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-brand-mustard/10 rounded-lg">
                          <Building2 className="w-4 h-4 text-brand-mustard flex-shrink-0" />
                        </div>
                        <p className="text-xs text-white/80 font-bold leading-relaxed">{activeLoc.address}</p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="p-2 bg-brand-mustard/10 rounded-lg">
                          <Phone className="w-4 h-4 text-brand-mustard" />
                        </div>
                        <p className="text-sm text-white font-black">{activeLoc.phone}</p>
                      </div>
                      <div className="pt-4">
                        <a 
                          href={activeLoc.externalUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full py-4 bg-brand-mustard text-brand-blue rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all shadow-glow-yellow"
                        >
                          <Navigation className="w-5 h-5" />
                          Ver en Google Maps
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Map Area */}
            <div className="flex-grow relative bg-white overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedId || 'general'}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  {/* General View Layer (Hover detection & Locked interaction) */}
                  {!selectedId && (
                    <div 
                      className="absolute inset-0 z-20 pointer-events-auto cursor-help" 
                      onMouseEnter={() => setIsMapHovered(true)}
                      onMouseLeave={() => setIsMapHovered(false)}
                    />
                  )}

                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Mapa Interactivo de Agencias"
                  />

                  {/* Hover-Triggered Group Labels (ONLY show on hover) */}
                  {!selectedId && (
                    <div className={`absolute inset-0 z-30 pointer-events-none transition-all duration-700 ${isMapHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110 blur-sm'}`}>
                      <div className="relative w-full h-full max-w-2xl mx-auto max-h-[500px]">
                        {locations.map((loc, index) => (
                          <motion.div
                            key={`google-hover-label-${loc.id}`}
                            style={{
                              left: loc.id === 'central' ? '38.5%' : loc.id === 'chajul' ? '40.2%' : '37.1%',
                              top: loc.id === 'central' ? '54.2%' : loc.id === 'chajul' ? '53.1%' : '54.2%',
                            }}
                            className="absolute -translate-x-1/2 -translate-y-full flex items-center gap-1 cursor-pointer pointer-events-auto group"
                            onClick={() => setSelectedId(loc.id)}
                          >
                            {/* Native Style Pin */}
                            <div className="relative">
                              <MapPin className="w-8 h-8 text-red-600 fill-red-600/20 drop-shadow-lg" />
                              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black/40 rounded-full blur-[1px]" />
                            </div>
                            
                            {/* Native Style Text Label */}
                            <div className="relative">
                              <span className="text-[10px] font-black text-gray-900 drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,1)] tracking-tight">
                                {loc.title}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hint Message */}
                  {!selectedId && !isMapHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-brand-blue/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-xs font-bold text-white/80 pointer-events-none"
                    >
                      Pasa el ratón por el mapa para ver las sedes
                    </motion.div>
                  )}

                  {/* Floating Action for Mobile when selected */}
                  <AnimatePresence>
                    {activeLoc && (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="absolute bottom-6 left-6 right-6 lg:hidden z-20 pointer-events-auto"
                      >
                        <div className="bg-brand-blue/95 backdrop-blur-2xl p-7 rounded-[2.5rem] border border-white/20 shadow-2xl">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-brand-mustard text-lg font-black uppercase tracking-tighter mb-1">{activeLoc.title}</h3>
                              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest leading-none">{activeLoc.address}</p>
                            </div>
                            <div className="p-3 bg-brand-mustard/20 rounded-2xl text-brand-mustard">
                              <MapPin className="w-5 h-5" />
                            </div>
                          </div>
                          <a 
                            href={activeLoc.externalUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-brand-mustard text-brand-blue rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-glow-yellow"
                          >
                            <Navigation className="w-5 h-5" />
                            Ir ahora con Google Maps
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* External Link Floating Button */}
                  <button
                    onClick={() => window.open(activeLoc?.externalUrl || externalUrl, '_blank')}
                    className="absolute top-6 right-6 bg-brand-blue/80 backdrop-blur-md p-4 rounded-3xl text-white border border-white/10 hover:bg-brand-mustard hover:text-brand-blue transition-all group shadow-2xl z-30 pointer-events-auto"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all max-w-0 group-hover:max-w-[200px] overflow-hidden whitespace-nowrap">Ver en Google Maps</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm font-medium flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-mustard animate-pulse" />
            Ubica la agencia más cercana y visítanos hoy mismo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
