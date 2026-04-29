import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Calculator, TrendingUp, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import hero1 from "../assets/images/tasa de interés anual.png";
import hero2 from "../assets/images/cuenta.png";
import hero3 from "../assets/images/punto de presencia.png";

const slides = [
    {
        id: 1,
        buttonText: "Hazte socio",
        link: "/afiliacion",
        image: hero1,
        btnClass: "bg-brand-mustard/20 border-brand-mustard/60 text-brand-mustard hover:bg-brand-mustard hover:text-white",
        shadowClass: "hover:shadow-brand-mustard/40",
        objectPosition: "center 65%",
        objectFit: "object-contain",
        scale: 1,
    },
    {
        id: 2,
        buttonText: "Nuestros servicios",
        link: "/servicios",
        image: hero2,
        btnClass: "bg-brand-mustard/20 border-brand-mustard/60 text-white hover:bg-brand-mustard hover:text-white",
        shadowClass: "hover:shadow-brand-mustard/40",
        objectPosition: "center 65%",
        objectFit: "object-contain",
        scale: 1,
    },
    {
        id: 3,
        buttonText: "Encuentra tu agencia",
        link: "/maps",
        image: hero3,
        btnClass: "bg-brand-mustard/20 border-brand-mustard/60 text-white hover:bg-brand-mustard hover:text-white",
        shadowClass: "hover:shadow-brand-mustard/40",
        objectPosition: "center 65%",
        objectFit: "object-contain",
        scale: 1,
    },
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    return (
        <div className="flex flex-col w-full bg-white">
            <div 
                className="group relative w-full overflow-hidden bg-white flex items-center justify-center h-[30vh] min-h-[250px] md:h-[45vh] md:min-h-[350px] lg:h-[60vh] lg:min-h-[500px] pt-12 md:pt-16" 
                id="inicio"
            >
                {/* Slides Background */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-x-0 bottom-0 top-12 md:top-16"
                    >
                        <img
                            src={slides[current].image}
                            alt="Hero Slide"
                            className={cn("w-full h-full", slides[current].objectFit)}
                            style={{
                                objectPosition: slides[current].objectPosition,
                                transform: `scale(${slides[current].scale})`,
                            }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Content Container */}
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-10 flex flex-col items-start pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                        key={`btn-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="pointer-events-auto"
                    >
                        <Link
                            to={slides[current].link}
                            className={cn(
                                "group/btn relative inline-flex items-center gap-2 backdrop-blur-sm border-2 px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[11px] md:text-sm font-bold transition-all duration-300 shadow-2xl hover:-translate-y-1 overflow-hidden",
                                slides[current].btnClass,
                                slides[current].shadowClass
                            )}
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
                        >
                            <span className="relative z-10">{slides[current].buttonText}</span>
                            <ChevronRight className="w-2.5 h-2.5 md:w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Navigation Arrows (Stacked on Right) */}
                <div className="absolute right-2 bottom-2 md:right-8 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-2 md:gap-4 z-30 pointer-events-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                    <button
                        onClick={prevSlide}
                        className="group/nav flex flex-col items-center text-white/50 hover:text-brand-mustard/90 transition-all duration-500"
                    >
                        <div className="bg-black/20 backdrop-blur-md p-1.5 md:p-3 rounded-xl md:rounded-2xl border border-white/10 hover:bg-black/30 hover:border-brand-mustard/50 transition-all duration-500 shadow-xl">
                            <ChevronLeft className="w-4 h-4 md:w-7 md:h-7 active:scale-90 transition-transform" />
                        </div>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="group/nav flex flex-col items-center text-white/50 hover:text-brand-mustard/90 transition-all duration-500"
                    >
                        <div className="bg-black/20 backdrop-blur-md p-1.5 md:p-3 rounded-xl md:rounded-2xl border border-white/10 hover:bg-black/30 hover:border-brand-mustard/50 transition-all duration-500 shadow-xl">
                            <ChevronRight className="w-4 h-4 md:w-7 md:h-7 active:scale-95 transition-transform" />
                        </div>
                    </button>
                </div>

                {/* Navigation Indicators */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 rounded-full transition-all duration-500 ${index === current ? "bg-brand-mustard w-12" : "bg-black/20 w-3 hover:bg-black/40"}`}
                            aria-label={`Ir a la diapositiva ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Quick Actions Zone */}
            <div className="bg-gray-50 border-t border-gray-100 py-6 lg:py-8 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
                        
                        {/* Quick Action 1: Loan */}
                        <Link 
                            to="/cotizar"
                            state={{ initialView: 'loan', fromHome: true }}
                            className="bg-white p-3 lg:p-4 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-brand-mustard/50 transition-all duration-300 group flex items-center justify-between cursor-pointer transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 lg:gap-4">
                                <div className="bg-brand-mustard w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-mustard/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                                    <Calculator className="w-5 h-5 lg:w-6 lg:h-6" />
                                </div>
                                <h3 className="text-sm lg:text-base font-black text-brand-blue uppercase tracking-tighter m-0">
                                    24% Anual
                                </h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-white font-black uppercase text-[9px] lg:text-[10px] tracking-widest bg-brand-mustard px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                                Generar Tabla
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Quick Action 2: Investment */}
                        <Link 
                            to="/cotizar"
                            state={{ initialView: 'investment', fromHome: true }}
                            className="bg-brand-blue p-3 lg:p-4 rounded-2xl shadow-sm hover:shadow-md border border-brand-blue hover:border-brand-mustard/50 transition-all duration-300 group flex items-center justify-between cursor-pointer transform hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-mustard/10 rounded-full blur-xl translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-mustard/20 transition-colors" />
                            <div className="flex items-center gap-3 lg:gap-4 relative z-10">
                                <div className="bg-brand-mustard w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-mustard/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                                    <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />
                                </div>
                                <h3 className="text-sm lg:text-base font-black text-white uppercase tracking-tighter m-0">
                                    14% de Interés
                                </h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-white font-black uppercase text-[9px] lg:text-[10px] tracking-widest bg-brand-mustard px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg shadow-sm group-hover:shadow-md transition-all relative z-10">
                                Calcular Rendimiento
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        {/* Quick Action 3: Agencies */}
                        <Link 
                            to="/maps"
                            className="bg-white p-3 lg:p-4 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 hover:border-brand-mustard/50 transition-all duration-300 group flex items-center justify-between cursor-pointer transform hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 lg:gap-4">
                                <div className="bg-brand-mustard w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-mustard/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6" />
                                </div>
                                <h3 className="text-sm lg:text-base font-black text-brand-blue uppercase tracking-tighter m-0">
                                    Nuestras Agencias
                                </h3>
                            </div>
                            <div className="flex items-center gap-1.5 text-white font-black uppercase text-[9px] lg:text-[10px] tracking-widest bg-brand-mustard px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                                Ver Ubicaciones
                                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
