import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import hero1 from "../assets/images/fondo web rl.png";
import hero2 from "../assets/images/fondo web.png";
import hero3 from "../assets/images/mapa-web.png";

const slides = [
    {
        id: 1,
        buttonText: "Hazte socio",
        link: "/afiliacion",
        image: hero1,
        btnClass: "bg-brand-mustard/20 border-brand-mustard/60 text-brand-mustard hover:bg-brand-mustard hover:text-white",
        shadowClass: "hover:shadow-brand-mustard/40",
        objectPosition: "center center",
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
        objectPosition: "center center",
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
        objectPosition: "center center",
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

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div 
            className="group relative w-full overflow-hidden bg-white flex items-center justify-center h-[30vh] min-h-[200px] md:h-[40vh] md:min-h-[300px] lg:h-[80vh] lg:min-h-[600px]" 
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
                    className="absolute inset-0"
                >
                    <img
                        src={`${slides[current].image}?v=${Date.now()}`}
                        alt="Hero Slide"
                        className={cn("w-full h-full", slides[current].objectFit)}
                        style={{
                            objectPosition: slides[current].objectPosition,
                            transform: `scale(${slides[current].scale})`,
                        }}
                    />
                    {/* Removed overlay to keep image pure and bright */}
                </motion.div>
            </AnimatePresence>

            {/* Content Container */}
            <div className="absolute bottom-12 md:bottom-20 left-0 right-0 z-10 flex flex-col items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* CTA Button */}
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
                            "group/btn relative inline-flex items-center gap-2 backdrop-blur-sm border-2 px-3 py-1.5 md:px-6 md:py-3 rounded-full text-[13px] md:text-lg font-bold transition-all duration-300 shadow-2xl hover:-translate-y-1 overflow-hidden",
                            slides[current].btnClass,
                            slides[current].shadowClass
                        )}
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
                    >
                        <span className="relative z-10">{slides[current].buttonText}</span>
                        <ChevronRight className="w-3 h-3 md:w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            {/* Left Box */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-brand-mustard/90 transition-all duration-500 z-30 pointer-events-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            >
                <div className="bg-white/5 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-mustard/50 transition-all duration-500">
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 active:scale-90 transition-transform" />
                </div>
            </button>

            {/* Right Box */}
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-brand-mustard/90 transition-all duration-500 z-30 pointer-events-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            >
                <div className="bg-white/5 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brand-mustard/50 transition-all duration-500">
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7 active:scale-95 transition-transform" />
                </div>
            </button>

            {/* Navigation Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 rounded-full transition-all duration-500 ${index === current ? "bg-white/5 w-12" : "bg-white/30 w-3 hover:bg-white/60"
                            }`}
                        aria-label={`Ir a la diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
