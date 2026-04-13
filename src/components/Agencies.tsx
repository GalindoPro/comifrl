import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, MessageCircle, Navigation, Building2, X, Phone, Clock } from "lucide-react";
import agenciaCentralImg from "../assets/images/AgenciaCentral.png";
import agenciaChajulImg from "../assets/images/AgenciaChajul.png";
import agenciaAculImg from "../assets/images/AgenciaAcul.png";

const agencies = [
    {
        id: "central",
        subtitle: "Sede Principal",
        name: "Agencia Central",
        address: "Cantón Vipila, Nebaj, Quiché, Guatemala",
        phone: "57481463",
        image: agenciaCentralImg,
        mapLink: "https://www.google.com/maps/place/15%C2%B024'32.7%22N+91%C2%B008'44.6%22W/@15.4090833,-91.1457222,17z/",
        mapEmbed: "https://maps.google.com/maps?q=15.4090833,-91.1457222&t=&z=17&ie=UTF8&iwloc=&output=embed",
        bg: "bg-white border hover:border-brand-mustard/30 transition-all",
        textColor: "text-brand-blue",
        iconBtnBg: "bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10",
        delay: 0,
        schedule: "Lun - Vie: 8:00 AM - 5:00 PM, Sáb: 8:00 AM - 12:00 PM"
    },
    {
        id: "chajul",
        subtitle: "Punto de Servicio",
        name: "Agencia Chajul",
        address: "Cantón Ilom, Chajul, Quiché, Guatemala",
        phone: "30615489",
        image: agenciaChajulImg,
        mapLink: "https://www.google.com/maps/place/15%C2%B029'08.6%22N+91%C2%B002'13.2%22W/@15.4857222,-91.037,17z/",
        mapEmbed: "https://maps.google.com/maps?q=15.4857222,-91.037&t=&z=15&ie=UTF8&iwloc=&output=embed",
        bg: "bg-white border hover:border-brand-mustard/30 transition-all",
        textColor: "text-brand-blue",
        iconBtnBg: "bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10",
        delay: 0.1,
        schedule: "Lun - Vie: 8:00 AM - 5:00 PM, Sáb: 8:00 AM - 12:00 PM"
    },
    {
        id: "acul",
        subtitle: "Punto de Servicio",
        name: "Agencia Acul",
        address: "Aldea Acul, Nebaj, Quiché, Guatemala",
        phone: "30371080",
        image: agenciaAculImg,
        mapLink: "https://www.google.com/maps/place/15%C2%B024'21.1%22N+91%C2%B011'15.0%22W/@15.4058522,-91.1875071,17z/",
        mapEmbed: "https://maps.google.com/maps?q=15.4058522,-91.1875071&t=&z=15&ie=UTF8&iwloc=&output=embed",
        bg: "bg-white border hover:border-brand-mustard/30 transition-all",
        textColor: "text-brand-blue",
        iconBtnBg: "bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10",
        delay: 0.2,
        schedule: "Lun - Vie: 8:00 AM - 5:00 PM, Sáb: 8:00 AM - 12:00 PM"
    }
];

export function Agencies() {
    const [selectedAgency, setSelectedAgency] = useState<typeof agencies[0] | null>(null);
    const [viewMode, setViewMode] = useState<'image' | 'map'>('image');

    const handleSelectAgency = (agency: typeof agencies[0]) => {
        setSelectedAgency(agency);
        setViewMode('image');
    };

    return (
        <div className="flex flex-col">
            <section id="agencias" className="py-16 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block p-3 bg-brand-mustard/20 rounded-2xl mb-4"
                    >
                        <MapPin className="w-8 h-8 text-brand-mustard" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
                    >
                        Nuestra <span className="text-brand-mustard">Presencia</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-white/70 font-medium"
                    >
                        Estamos cerca de ti para brindarte el respaldo financiero que mereces.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="h-1 w-20 bg-brand-mustard mx-auto mt-6 rounded-full"
                    />
                </div>
                </div>
            </section>

            {/* Agencies Grid */}
            <section className="py-12 bg-brand-blue text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {agencies.map((agency) => (
                        <motion.div
                            key={agency.id}
                            layoutId={agency.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: agency.delay }}
                            onClick={() => handleSelectAgency(agency)}
                            className={`${agency.bg} rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            {/* Image Container */}
                            <div className="relative h-52 md:h-60 bg-black/5 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium p-4 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <Building2 className="w-8 h-8 opacity-30" />
                                        <span className="text-xs">{agency.name}</span>
                                    </div>
                                </div>
                                <motion.img
                                    src={agency.image}
                                    alt={agency.name}
                                    className="relative w-full h-full object-contain p-2 z-20"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />

                                {/* Badge */}
                                <div className="absolute top-3 left-3 z-30 bg-brand-mustard px-4 py-1 rounded-full text-[10px] font-black text-brand-blue shadow-lg uppercase tracking-[0.1em]">
                                    {agency.subtitle}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="p-4 flex-grow flex flex-col">
                                <h3 className={`text-lg font-bold mb-0.5 uppercase tracking-tight ${agency.textColor}`}>{agency.name}</h3>
                                <p className={`text-xs mb-3 line-clamp-2 font-medium leading-relaxed ${agency.textColor === 'text-white' ? 'text-white/80' : 'text-brand-blue/60'}`}>
                                    {agency.address}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mt-auto">
                                    <a
                                        href={`https://wa.me/502${agency.phone}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[11px] font-black transition-all hover:scale-105 active:scale-95 shadow-lg ${agency.iconBtnBg}`}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </a>
                                    <a
                                        href={agency.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[11px] font-black transition-all hover:scale-105 active:scale-95 shadow-lg ${agency.iconBtnBg}`}
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Maps
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for "Se muestra todo" */}
                <AnimatePresence>
                    {selectedAgency && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedAgency(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />

                            <motion.div
                                layoutId={selectedAgency.id}
                                className={`${selectedAgency.bg} w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row`}
                            >
                                <button
                                    onClick={() => setSelectedAgency(null)}
                                    className="absolute top-4 right-4 z-[110] p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Modal Media (Map or Image) */}
                                <div className="w-full md:w-3/5 bg-black/5 flex flex-col p-4">
                                    {/* Tabs */}
                                    <div className="flex gap-2 mb-4 bg-brand-blue/5 p-1.5 rounded-2xl w-fit self-center border border-brand-blue/10 shadow-sm">
                                        <button
                                            onClick={() => setViewMode('image')}
                                            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${viewMode === 'image' ? 'bg-brand-mustard text-brand-blue shadow-glow' : 'text-brand-blue/40 hover:text-brand-blue'}`}
                                        >
                                            Fotografía
                                        </button>
                                        <button
                                            onClick={() => setViewMode('map')}
                                            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${viewMode === 'map' ? 'bg-brand-mustard text-brand-blue shadow-glow' : 'text-brand-blue/40 hover:text-brand-blue'}`}
                                        >
                                            Mapa Interactivo
                                        </button>
                                    </div>

                                    {/* Animation Area */}
                                    <div className="flex-grow relative h-64 sm:h-80 md:h-full min-h-[350px] md:min-h-[500px] rounded-2xl overflow-hidden bg-black/5 flex items-center justify-center">
                                        <AnimatePresence mode="wait">
                                            {viewMode === 'image' ? (
                                                <motion.img
                                                    key="img"
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.3 }}
                                                    src={selectedAgency.image}
                                                    alt={selectedAgency.name}
                                                    className="w-full h-full object-contain rounded-xl"
                                                />
                                            ) : (
                                                <motion.div
                                                    key="map"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="w-full h-full"
                                                >
                                                    <iframe
                                                        src={selectedAgency.mapEmbed}
                                                        width="100%"
                                                        height="100%"
                                                        style={{ border: 0 }}
                                                        allowFullScreen={true}
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <div className="w-full md:w-2/5 p-8 flex flex-col">
                                    <span className="text-brand-mustard font-bold tracking-widest uppercase text-sm mb-2">
                                        {selectedAgency.subtitle}
                                    </span>
                                    <h3 className={`text-3xl font-bold mb-6 ${selectedAgency.textColor}`}>
                                        {selectedAgency.name}
                                    </h3>

                                    <div className="space-y-6 flex-grow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-brand-blue/5 p-2 rounded-lg text-brand-mustard">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${selectedAgency.textColor}`}>Ubicación</h4>
                                                <p className={selectedAgency.textColor === 'text-white' ? 'text-white/70' : 'text-brand-blue/70'}>
                                                    {selectedAgency.address}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-brand-mustard/20 p-3 rounded-xl text-brand-mustard border border-brand-mustard/20">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${selectedAgency.textColor === 'text-white' ? 'text-white/40' : 'text-brand-blue/40'}`}>Teléfono</h4>
                                                <p className={`font-bold ${selectedAgency.textColor}`}>
                                                    +502 {selectedAgency.phone}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-brand-blue/5 p-2 rounded-lg text-brand-mustard">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className={`font-bold ${selectedAgency.textColor}`}>Horario</h4>
                                                <p className={selectedAgency.textColor === 'text-white' ? 'text-white/70' : 'text-brand-blue/70'}>
                                                    {selectedAgency.schedule}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <a
                                            href={`https://wa.me/502${selectedAgency.phone}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 ${selectedAgency.iconBtnBg}`}
                                        >
                                            <MessageCircle className="w-6 h-6" />
                                            WhatsApp
                                        </a>
                                        <a
                                            href={selectedAgency.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 ${selectedAgency.iconBtnBg}`}
                                        >
                                            <Navigation className="w-6 h-6" />
                                            Maps
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}
