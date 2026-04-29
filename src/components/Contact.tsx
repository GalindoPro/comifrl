import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Clock, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <div className="flex flex-col">
            <section className="pt-24 pb-1 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tighter"
                        >
                            Contác<span className="text-brand-mustard">tanos</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-xs text-white/60 font-medium"
                        >
                            Estamos listos para atenderte en nuestras agencias.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="pt-1 pb-4 bg-brand-blue text-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-2 max-w-4xl mx-auto">

                        {/* Líneas Oficiales */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 rounded-xl shadow-2xl border border-gray-100 flex flex-col relative z-10"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Phone className="w-3.5 h-3.5 text-brand-mustard" />
                                <h3 className="text-sm font-black text-brand-blue uppercase tracking-tighter">Líneas</h3>
                            </div>

                            <ul className="space-y-1 text-brand-blue">
                                {[
                                    { label: "Central", sub: "Nebaj-Quiché", tel: "5748-1463" },
                                    { label: "Chajul", sub: "Cantón Ilom", tel: "3061-5489" },
                                    { label: "Acul", sub: "Nebaj-Acul", tel: "3037-1080" },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center justify-between border-b border-gray-50 pb-1 last:border-0">
                                        <div className="flex flex-col">
                                            <span className="font-black text-[10px] uppercase leading-tight">{item.label}</span>
                                            <span className="text-[7px] font-bold text-brand-blue/30 uppercase tracking-widest">{item.sub}</span>
                                        </div>
                                        <a href={`tel:+502${item.tel.replace("-", "")}`} className="text-brand-mustard font-black text-[10px] tracking-tight">{item.tel}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Horario de Atención */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 rounded-xl shadow-2xl border border-gray-100 flex flex-col relative z-10"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-3.5 h-3.5 text-brand-mustard" />
                                <h3 className="text-sm font-black text-brand-blue uppercase tracking-tighter">Horario</h3>
                            </div>

                            <ul className="space-y-1 text-brand-blue">
                                <li className="flex items-center justify-between border-b border-gray-50 pb-1">
                                    <span className="font-black text-[9px] uppercase">Lunes a Viernes</span>
                                    <span className="text-[9px] font-black text-brand-blue/60">8:00 - 17:00</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-gray-50 pb-1">
                                    <span className="font-black text-[9px] uppercase">Sábado</span>
                                    <span className="text-[9px] font-black text-brand-blue/60">8:00 - 12:00</span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="font-black text-[9px] uppercase text-red-500">Domingo</span>
                                    <span className="text-[9px] font-black text-red-500 uppercase">Cerrado</span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Nuestras Agencias */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-brand-mustard p-3 rounded-xl shadow-2xl flex flex-col items-center text-center justify-center relative z-10"
                        >
                            <h3 className="text-sm font-black text-brand-blue mb-1 uppercase tracking-tighter">Ubicaciones</h3>
                            <Link
                                to="/maps"
                                className="inline-flex items-center gap-2 bg-brand-blue text-white font-black py-1.5 px-3 rounded-lg text-[9px] uppercase tracking-widest shadow-xl w-full justify-center"
                            >
                                Ver Mapa
                                <ArrowRight className="w-3 h-3 text-brand-mustard" />
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
