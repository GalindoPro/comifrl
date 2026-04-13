import { motion } from "framer-motion";
import raizIxilImg from "../assets/images/raiz_ixil.png";

export function HomeIntro() {
    return (
        <section className="py-12 bg-brand-blue relative overflow-hidden" id="historia">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="max-w-4xl mx-auto text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight"
                    >
                        Cooperativa Maya <span className="text-brand-mustard font-black italic">Inversiones Futuras</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-mustard mx-auto mb-2 rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/70 font-medium leading-relaxed"
                    >
                        Con más de 18 años de trayectoria, COMIF, R.L. impulsa el desarrollo económico y comunitario en Nebaj, Quiché.
                    </motion.p>
                </div>

                {/* History Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
                >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mustard/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <div className="flex-shrink-0 bg-brand-mustard/10 p-3 rounded-2xl border border-brand-mustard/30 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                        <img
                            src={raizIxilImg}
                            alt="Raíces Ixiles"
                            className="w-20 h-20 md:w-24 md:h-24 object-contain"
                        />
                    </div>
                    <div className="flex-1 relative z-10 text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-black text-brand-blue mb-3 leading-tight uppercase tracking-tighter">
                            Raíces Ixiles y <span className="text-brand-mustard">Origen Institucional</span>
                        </h3>
                        <p className="text-brand-blue/80 leading-relaxed text-sm md:text-lg italic font-medium">
                            "Desde <span className="text-brand-mustard font-black not-italic border-b-2 border-brand-mustard/40">2008</span>, 28 visionarios locales dieron vida a <span className="text-brand-mustard font-black not-italic underline underline-offset-4 decoration-brand-blue/20">COMIF, R.L.</span>, hoy referente de <span className="text-brand-blue font-black not-italic uppercase tracking-wider">confianza</span> en la región Ixil."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
