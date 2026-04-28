import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({
    to,
    decimals = 0,
    duration = 2,
}: {
    to: number;
    decimals?: number;
    duration?: number;
}) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-10px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;
        const controls = animate(0, to, {
            duration,
            onUpdate(value) {
                node.textContent = value.toFixed(decimals);
            },
            ease: "easeOut",
        });
        return () => controls.stop();
    }, [to, decimals, duration, inView]);

    return <span ref={nodeRef}>0</span>;
};

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
        subtitle: "7 años de superávit continuo",
        highlight: true,
    },

];

export function Stats2025() {
    return (
        <section className="pt-4 pb-4 bg-brand-blue relative overflow-hidden">
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
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                            className={`rounded-xl p-3 shadow-xl flex flex-col items-center text-center transition-all ${
                                stat.highlight
                                    ? "bg-brand-mustard"
                                    : "bg-white border border-white/10"
                            }`}
                        >
                            <div
                                className={`text-xl md:text-2xl font-black mb-0.5 leading-tight ${
                                    stat.highlight ? "text-brand-blue" : "text-brand-mustard"
                                }`}
                            >
                                <Counter to={stat.value} decimals={stat.decimals} />
                                <span className="text-sm">{stat.suffix}</span>
                            </div>
                            <h4
                                className="font-black uppercase tracking-tight text-[9px] text-brand-blue"
                            >
                                {stat.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
