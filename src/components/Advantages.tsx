import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const advantages = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="#BF9903" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "SEGURIDAD",
        description: "Responsabilidad que construye futuro. Respaldo institucional garantizado para tu tranquilidad.",
        color: "bg-white border-gray-100",
        textColor: "text-brand-blue",
        iconContainer: "bg-brand-mustard/10 border-brand-mustard/20",
        iconColor: "text-brand-mustard",
        accent: "bg-brand-mustard"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 16V8M12 8L8 12M12 8L16 12" stroke="#0F1249" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "TASAS COMPETITIVAS",
        description: "Rendimiento superior en tus ahorros y condiciones justas en todos tus créditos.",
        color: "bg-brand-mustard",
        textColor: "text-brand-blue",
        iconContainer: "bg-white/30 border-white/50",
        iconColor: "text-brand-blue",
        accent: "bg-white"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H12M17 20V19C17 19.0666 17 19.1332 17 19.2M12 20H7L3 24V6C3 4.89543 3.89543 4 5 4H12M12 20V14M12 14V4M12 14C12 14 12 12 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16C15.9334 16 15.8668 16 15.8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="12" r="3" stroke="#BF9903" strokeWidth="2" />
                <path d="M8 12C8 12 9 13 10 13C11 13 12 12 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "ATENCIÓN PERSONALIZADA",
        description: "Honestidad que genera confianza. Asesores expertos siempre dispuestos a guiarte.",
        color: "bg-white border-gray-100",
        textColor: "text-brand-blue",
        iconContainer: "bg-brand-mustard/10 border-brand-mustard/20",
        iconColor: "text-brand-mustard",
        accent: "bg-brand-mustard"
    },
];

export function Advantages() {
    return (
        <section className="pt-4 pb-4 bg-brand-blue relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter"
                    >
                        Nuestra <span className="text-brand-mustard">Ventaja</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-16 bg-brand-mustard mx-auto mt-1 rounded-full"
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative group h-full"
                        >
                            <div className={cn("rounded-xl p-3 md:p-4 shadow-xl border flex flex-col h-full transition-all duration-500 group-hover:-translate-y-2", item.color, item.textColor)}>
                                {/* Icon with decorative bg */}
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={cn("relative p-1.5 rounded-lg border", item.iconContainer, item.iconColor)}>
                                        <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-base font-black uppercase tracking-tight leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="flex-grow">
                                    <p className="opacity-90 leading-tight text-[11px] md:text-xs font-medium">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className={cn("mt-3 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full", item.accent)} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
