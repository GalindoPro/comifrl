import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, Phone, ExternalLink, MessageCircle } from "lucide-react";

const locations = [
  {
    id: "central",
    title: "Nebaj",
    subtitle: "Agencia Central",
    description: "Agencia principal de COMIF R.L. en Nebaj",
    address: "Nebaj, Quiché",
    coordinates: { lat: 15.4090833, lng: -91.1457222 },
    phone: "+502 5748 1463",
    whatsapp: "50257481463",
    zoom: 18,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.176449174542!2d-91.1457222!3d15.4090833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858b8b002c2fe7bb%3A0x42e9fca3eeb4af6f!2sComif%20R.L.%20Nebaj!5e0!3m2!1ses-419!2sgt!4v1713650000000!5m2!1ses-419!2sgt",
    externalUrl: "https://maps.app.goo.gl/SPhLrcjaFL6Y978h8"
  },
  {
    id: "chajul",
    title: "Chajul",
    subtitle: "Agencia Chajul",
    description: "Servicios financieros en el corazón de Chajul",
    address: "Cantón Ilom, Chajul",
    coordinates: { lat: 15.4856671, lng: -91.0361975 },
    phone: "+502 3061 5489",
    whatsapp: "50230615489",
    zoom: 17,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.166241315518!2d-91.0361975!3d15.4856671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858b93006575575f%3A0x36c72b98bf17efea!2sComif%20R.L.!5e0!3m2!1ses-419!2sgt!4v1713650000000!5m2!1ses-419!2sgt",
    externalUrl: "https://maps.app.goo.gl/GHTEwFEgifNJYzeJ7"
  },
  {
    id: "acul",
    title: "Acul",
    subtitle: "Agencia Acul",
    description: "Cobertura comunitaria y cercanía en Aldea Acul",
    address: "Acul, Nebaj",
    coordinates: { lat: 15.4058719, lng: -91.1900482 },
    phone: "+502 3037 1080",
    whatsapp: "50230371080",
    zoom: 17,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.356241315518!2d-91.1900482!3d15.4058719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858b8002a79dc5b:0xa03f74ed03ba962!2sComif%20R.L.%20Acul!5e0!3m2!1ses-419!2sgt!4v1713650000000!5m2!1ses-419!2sgt",
    externalUrl: "https://maps.app.goo.gl/rUHy6q2v9SWXUoQU9"
  }
];

export const MapsPage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeLoc = selectedId ? locations.find(l => l.id === selectedId) : null;

  // URL dinámica: Vista general ESTABLE de todo el país o vista detallada oficial
  const mapUrl = activeLoc 
    ? activeLoc.embedUrl
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860526.283151854!2d-90.5!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589050b9a322d75%3A0x2a72064147746416!2sGuatemala!5e0!3m2!1ses!2sgt!4v1713655529457!5m2!1ses!2sgt`;

  const externalUrl = activeLoc 
    ? activeLoc.externalUrl
    : `https://www.google.com/maps/search/Comif+R.L.+Guatemala`;

  return (
    <section id="agencias" className="pt-18 pb-6 bg-brand-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-2.5 bg-brand-mustard/20 rounded-2xl mb-3"
          >
            <MapPin className="w-7 h-7 text-brand-mustard" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-tighter"
          >
            Nuestra <span className="text-brand-mustard">Presencia</span>
          </motion.h2>
          <p className="text-white/70 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Selecciona una agencia para ver su ubicación exacta en el mapa de Guatemala.
          </p>
        </div>

        {/* Unified Map Interface */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-2xl flex flex-col lg:flex-row h-auto lg:h-[550px]">
            
            {/* Sidebar / Labels */}
            <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-100 p-6 md:p-8 flex flex-col gap-4 overflow-y-auto bg-gray-50 lg:bg-white">
              <div className="mb-2">
                <h2 className="text-[10px] font-black text-brand-blue/40 uppercase tracking-[0.2em] mb-2">Nuestras Agencias</h2>
                <div className="space-y-1.5 px-0.5">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedId(loc.id)}
                      className={`w-full text-left p-3.5 rounded-2xl transition-all duration-500 flex items-center gap-4 group border ${selectedId === loc.id ? 'bg-brand-mustard text-brand-blue shadow-lg border-brand-mustard scale-[1.02]' : 'bg-gray-50 text-brand-blue border-gray-100 hover:bg-brand-blue/5 hover:border-brand-blue/10'}`}
                    >
                      <div className={`p-2 rounded-xl transition-colors ${selectedId === loc.id ? 'bg-brand-blue/10' : 'bg-brand-mustard/20'}`}>
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <span className="block text-[11px] font-black uppercase tracking-widest mb-0.5">{loc.title}</span>
                        <span className="text-[9px] opacity-60 font-bold uppercase tracking-[0.1em]">{loc.subtitle}</span>
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mt-auto hidden lg:block p-4 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <h3 className="text-brand-mustard text-base font-black mb-3 uppercase tracking-tighter">{activeLoc.title}</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start">
                        <div className="p-1.5 bg-brand-mustard/10 rounded-lg">
                          <Building2 className="w-3.5 h-3.5 text-brand-mustard flex-shrink-0" />
                        </div>
                        <p className="text-[10px] text-brand-blue/80 font-bold leading-tight">{activeLoc.address}</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="p-1.5 bg-brand-mustard/10 rounded-lg">
                          <Phone className="w-3.5 h-3.5 text-brand-mustard" />
                        </div>
                        <p className="text-xs text-brand-blue font-black">{activeLoc.phone}</p>
                      </div>
                      <div className="pt-2">
                        <a 
                          href={`https://wa.me/${activeLoc.whatsapp}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.1em] hover:brightness-110 active:scale-95 transition-all shadow-lg"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp {activeLoc.title}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Map Area */}
            <div className="flex-grow h-[450px] lg:h-full relative bg-white overflow-hidden border-t lg:border-t-0 lg:border-l border-gray-100">
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

                  {/* Group Labels (Always visible or pins) */}
                  {!selectedId && (
                    <div className={`absolute inset-0 z-30 pointer-events-none transition-all duration-700 opacity-100 scale-100`}>
                      <div className="relative w-full h-full max-w-2xl mx-auto max-h-[500px]">
                        {locations.map((loc) => (
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
                              <MapPin className="w-8 h-8 text-red-600 fill-red-600 drop-shadow-lg scale-110 hover:scale-125 transition-transform" />
                              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black/40 rounded-full blur-[1px]" />
                            </div>
                            
                            {/* Native Style Text Label */}
                            <div className="relative">
                              <span className="text-[10px] font-black text-gray-900 drop-shadow-[0_1.5px_1.5px_rgba(255,255,255,1)] tracking-tight bg-white/80 px-2 py-0.5 rounded-full border border-gray-100">
                                {loc.title}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hint Message */}
                  {!selectedId && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-brand-blue/10 text-xs font-bold text-brand-blue pointer-events-none shadow-xl"
                    >
                      Selecciona una agencia para más detalles
                    </motion.div>
                  )}

                  {/* Floating Action for Mobile when selected */}
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

          {/* New Mobile Info Section - Flows below the map container */}
          <AnimatePresence>
            {activeLoc && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pointer-events-auto"
              >
                <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-grow">
                      <h3 className="text-brand-mustard text-xl font-black uppercase tracking-tighter leading-none">{activeLoc.title}</h3>
                      <p className="text-brand-blue/60 text-xs font-bold uppercase tracking-tight mt-2">{activeLoc.address}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <Phone className="w-3.5 h-3.5 text-brand-mustard" />
                        <span className="text-brand-blue font-black text-sm">{activeLoc.phone}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-brand-mustard/10 rounded-2xl text-brand-mustard ml-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <a 
                    href={`https://wa.me/${activeLoc.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp {activeLoc.title}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
    </section>
  );
};
