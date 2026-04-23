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
        value: 205,
        decimals: 0,
        suffix: " créditos",
        title: "Otorgados en 2025",
        subtitle: "Q.20,219,258.65 colocados",
        highlight: true,
    },
    {
        value: 26.88,
        decimals: 2,
        suffix: "%",
        title: "Crecimiento en activos",
        subtitle: "Q.8,115,604.35 vs 2024",
        highlight: false,
    },
    {
        value: 7,
        decimals: 0,
        suffix: " años",
        title: "Superávit consecutivo",
        subtitle: "Q.1,363,163.62 en 2025",
        highlight: true,
    },
    {
        value: 4.07,
        decimals: 2,
        suffix: "%",
        title: "Índice de mora 2025",
        subtitle: "Reducción del 7% vs año anterior",
        highlight: false,
    },
];

export function Stats2025() {
    return (
        <section className="py-12 bg-brand-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2"
                    >
                        Resultados <span className="text-brand-mustard">2025</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-brand-mustard mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`rounded-2xl p-5 shadow-xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300 ${
                                stat.highlight
                                    ? "bg-brand-mustard"
                                    : "bg-white border border-white/10"
                            }`}
                        >
                            <div
                                className={`text-2xl md:text-3xl font-black mb-1 leading-tight ${
                                    stat.highlight ? "text-brand-blue" : "text-brand-mustard"
                                }`}
                            >
                                <Counter to={stat.value} decimals={stat.decimals} />
                                <span className="text-base md:text-lg">{stat.suffix}</span>
                            </div>
                            <h4
                                className={`font-black uppercase tracking-tight text-[11px] mb-1 ${
                                    stat.highlight ? "text-brand-blue" : "text-brand-blue"
                                }`}
                            >
                                {stat.title}
                            </h4>
                            <p
                                className={`text-[10px] font-medium leading-relaxed ${
                                    stat.highlight ? "text-brand-blue/70" : "text-brand-blue/60"
                                }`}
                            >
                                {stat.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
