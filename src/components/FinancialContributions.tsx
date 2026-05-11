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
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="pt-4 pb-4 bg-brand-blue relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-mustard/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
            <div className="container mx-auto px-4 space-y-4">
                <div className="text-center">
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase"
                    >
                        Tu aporte, <span className="text-brand-mustard">nuestra fuerza</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-3 gap-2 max-w-4xl mx-auto">
                    {[
                        { val: 100, label: "Aportación Interna", icon: <Wallet size={20} />, bg: "bg-brand-mustard" },
                        { val: 50, label: "Cuota de Ingreso", icon: <PiggyBank size={20} />, bg: "bg-white" },
                        { val: 25, label: "Infanto-Juvenil", icon: <Users size={20} />, bg: "bg-white" },
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 40, rotateX: 45 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: idx * 0.25, 
                                duration: 0.7,
                                ease: "easeOut"
                            }}
                            className={`${item.bg} p-3 rounded-xl shadow-xl flex flex-col items-center text-center`}
                        >
                            <div className="flex items-baseline gap-0.5">
                                <span className="text-[10px] font-black text-brand-blue/50">Q</span>
                                <span className="text-lg md:text-xl font-black text-brand-blue tracking-tighter">
                                    <Counter from={0} to={item.val} duration={2} />
                                </span>
                            </div>
                            <h4 className="text-[8px] font-black uppercase tracking-widest text-brand-blue/80">{item.label}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
