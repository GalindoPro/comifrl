import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, CheckCircle2, ArrowRight, UserPlus, Lightbulb } from "lucide-react";

export function Affiliation() {
    return (
        <div className="flex flex-col">
            <section className="pt-24 pb-2 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center mb-0 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tighter"
                        >
                            Únete a la <span className="text-brand-mustard">Familia</span> COMIF, R.L.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-xs text-white/60 font-medium leading-tight"
                        >
                            Afiliarte es el primer paso hacia tu bienestar financiero.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="pt-1 pb-4 bg-brand-blue relative overflow-hidden flex-grow">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-3 max-w-5xl mx-auto">

                    {/* Requisitos de Afiliación */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100 relative z-10 hover:border-brand-mustard/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-brand-mustard w-10 h-10 rounded-xl flex items-center justify-center text-brand-blue shadow-lg shadow-brand-mustard/20">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-black text-brand-blue uppercase tracking-tighter">Documentos</h3>
                        </div>

                        <ul className="space-y-1.5">
                            {[
                                "DPI vigente (adultos)",
                                "Certificado nacimiento y DPI (menores)",
                                "Recibo de luz reciente",
                                "Aporte inicial de Q100.00",
                                "Solicitud completa"
                            ].map((req, i) => (
                                <li key={i} className="flex items-center gap-3 p-2 bg-brand-blue/5 border border-brand-blue/5 rounded-lg hover:bg-brand-blue/10 transition-all group">
                                    <div className="bg-brand-mustard w-5 h-5 rounded-full text-brand-blue flex items-center justify-center font-black text-[9px] shadow-lg flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="text-brand-blue/80 font-bold text-[10px] uppercase tracking-widest leading-tight">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Proceso y Beneficios Column */}
                    <div className="space-y-3">

                        {/* Proceso */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 rounded-xl shadow-2xl border border-gray-100 relative z-10"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <UserPlus className="w-4 h-4 text-brand-mustard" />
                                <h3 className="text-sm font-black text-brand-blue uppercase tracking-tighter">Pasos Simples</h3>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { title: "Contacta", desc: "WhatsApp o visita agencias" },
                                    { title: "Documenta", desc: "DPI, recibo y formulario" },
                                    { title: "¡Listo!", desc: "Aporte y recibe libreta" },
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center text-center">
                                        <div className="w-6 h-6 rounded-lg bg-brand-mustard text-brand-blue flex items-center justify-center font-black text-[10px] shadow-lg mb-1">
                                            {i + 1}
                                        </div>
                                        <h4 className="text-[9px] font-black text-brand-blue uppercase leading-tight">{step.title}</h4>
                                        <p className="text-brand-blue/40 text-[7px] font-bold uppercase tracking-widest">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Beneficios */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-mustard rounded-xl p-3 text-brand-blue shadow-2xl"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-4 h-4" />
                                <h3 className="text-sm font-black uppercase tracking-tighter">Beneficios</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-1">
                                {[
                                    "Tasas preferenciales",
                                    "Asesoría directa",
                                    "Voz y voto",
                                    "Respaldo total"
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-1 bg-brand-blue/5 p-1 rounded-lg">
                                        <CheckCircle2 className="w-2.5 h-2.5 text-brand-blue" />
                                        <span className="text-[8px] font-black uppercase tracking-tighter opacity-80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-4"
                >
                    <Link
                        to="/maps"
                        className="inline-flex items-center gap-2 bg-brand-mustard text-brand-blue font-black py-2 px-6 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 text-[10px] uppercase tracking-widest"
                    >
                        Visitar una agencia
                        <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
                    </Link>
                </motion.div>

                </div>
            </section>
        </div>
    );
}
