import { motion } from "framer-motion";
import raizIxilImg from "../assets/images/raiz_ixil.png";

export function HomeIntro() {
    return (
        <section className="pt-24 md:pt-32 pb-4 bg-brand-blue relative overflow-hidden" id="historia">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="max-w-4xl mx-auto text-center mb-3">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tight"
                    >
                        Nebaj, <span className="text-brand-mustard">Donde nace la cooperativa</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs md:text-sm text-white/70 font-medium leading-tight max-w-3xl mx-auto"
                    >
                        Santa María Nebaj, "Na’b’a’" en idioma ixil, significa ‘lugar donde nace el agua’. Es un municipio cultural y económico clave del departamento de Quiché, donde nuestras raíces se entrelazan con la historia de un pueblo resiliente.
                    </motion.p>
                </div>

                {/* History Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-white rounded-xl p-3 md:p-4 shadow-2xl border border-gray-100 flex items-center gap-4 relative overflow-hidden"
                >
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mustard/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <div className="flex-shrink-0 bg-brand-mustard/10 p-2 rounded-xl border border-brand-mustard/30 group-hover:rotate-3 transition-transform duration-500 relative z-10">
                        <img
                            src={raizIxilImg}
                            alt="Raíces Ixiles"
                            className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        />
                    </div>
                    <div className="flex-1 relative z-10 text-left">
                        <h3 className="text-lg md:text-xl font-black text-brand-blue mb-0.5 leading-tight uppercase tracking-tighter">
                            Raíces Ixiles: <span className="text-brand-mustard">Origen de Confianza</span>
                        </h3>
                        <p className="text-brand-blue/80 leading-tight text-[11px] md:text-sm italic font-medium">
                            "Desde 2008, 28 visionarios locales dieron vida a COMIF, R.L., hoy referente de confianza en la región Ixil."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
