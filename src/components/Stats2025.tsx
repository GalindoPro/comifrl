import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { Check } from "lucide-react";

const stats = [
    {
        value: 53,
        decimals: 0,
        suffix: "%",
        title: "Colocación de cartera",
        subtitle: "De la cartera total en 2025",
        highlight: true,
    },
    {
        value: 26.88,
        decimals: 2,
        suffix: "%",
        title: "Crecimiento en activos",
        subtitle: "Sólido incremento vs 2024",
        highlight: false,
    },
    {
        value: 100,
        decimals: 0,
        suffix: "%",
        title: "Rentabilidad positiva",
        subtitle: "Objetivo Alcanzado",
        isGoal: true,
        highlight: true,
    },
];

export function Stats2025() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-4 pb-4 bg-brand-blue relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-3">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase"
                    >
                        Resultados <span className="text-brand-mustard">2025</span>
                    </motion.h2>
                </div>
                <div className="grid grid-cols-3 gap-2 max-w-4xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: idx * 0.2, 
                                duration: 0.6,
                                ease: "backOut" 
                            }}
                            className={`rounded-xl p-3 shadow-xl flex flex-col items-center text-center transition-all relative overflow-hidden ${
                                stat.highlight
                                    ? "bg-brand-mustard"
                                    : "bg-white border border-white/10"
                            }`}
                        >
                            {(stat as any).isGoal ? (
                                <div className="relative flex items-center justify-center w-12 h-12 mb-1">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="20"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            fill="transparent"
                                            className="text-brand-blue/10"
                                        />
                                        <motion.circle
                                            cx="24"
                                            cy="24"
                                            r="20"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            fill="transparent"
                                            strokeDasharray="126"
                                            initial={{ strokeDashoffset: 126 }}
                                            whileInView={{ strokeDashoffset: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="text-brand-blue"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.5, type: "spring" }}
                                        >
                                            <Check className="w-5 h-5 text-brand-blue" strokeWidth={4} />
                                        </motion.div>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className={`text-xl md:text-2xl font-black mb-0.5 leading-tight ${
                                        stat.highlight ? "text-brand-blue" : "text-brand-mustard"
                                    }`}
                                >
                                    <Counter to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                                </div>
                            )}
                            <h4
                                className="font-black uppercase tracking-tight text-[9px] text-brand-blue"
                            >
                                {stat.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
