import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Wallet, PiggyBank, Users } from "lucide-react";

const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-10px" });

    useEffect(() => {
        const node = nodeRef.current;
        if (!node || !inView) return;

        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            },
            ease: "easeOut"
        });

        return () => controls.stop();
    }, [from, to, duration, inView]);

    return <span ref={nodeRef}>{from}</span>;
};

export function FinancialContributions() {
    return (
        <section className="py-16 bg-brand-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-mustard/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
            <div className="container mx-auto px-4 space-y-8">
                <div className="text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4"
                    >
                        Tu aporte, <span className="text-brand-mustard">nuestra fuerza</span>
                    </motion.h3>
                    <div className="h-1 w-20 bg-brand-mustard mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {[
                        { val: 100, label: "Aportación Externa", icon: <Wallet className="w-8 h-8 text-brand-blue" />, color: "text-brand-blue", bg: "bg-brand-mustard", labelColor: "text-brand-blue" },
                        { val: 50, label: "Cuota de Ingreso", icon: <PiggyBank className="w-8 h-8 text-brand-mustard" />, color: "text-brand-blue", bg: "bg-white border border-gray-100", labelColor: "text-brand-mustard" },
                        { val: 25, label: "Infanto-Juvenil", icon: <Users className="w-8 h-8 text-brand-mustard" />, color: "text-brand-blue", bg: "bg-white border border-gray-100", labelColor: "text-brand-mustard" },
                    ].map((item, idx) => (
                        <div key={idx} className={`${item.bg} p-6 rounded-3xl shadow-2xl hover:shadow-brand-mustard/10 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden z-10`}>
                            <div className="mb-3 bg-brand-mustard/10 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div className="flex flex-col items-center justify-center mb-1">
                                <span className={`text-lg font-black mb-[-2px] ${item.bg === 'bg-brand-mustard' ? 'text-brand-blue/60' : 'text-brand-blue/40'}`}>Q</span>
                                <span className={`text-4xl font-black ${item.color} tracking-tight`}>
                                    <Counter from={0} to={item.val} duration={2.5} />
                                </span>
                            </div>
                            <h4 className={`text-xs font-black uppercase tracking-widest ${item.labelColor}`}>{item.label}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
