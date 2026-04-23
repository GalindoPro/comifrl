import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Calendar, ArrowRight, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <div className="flex flex-col">
            <section className="py-8 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block p-3 bg-brand-mustard/20 rounded-2xl mb-4"
                        >
                            <MessageCircle className="w-8 h-8 text-brand-mustard" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-5xl font-black text-white mb-3 uppercase tracking-tighter"
                        >
                            Contác<span className="text-brand-mustard">tanos</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-lg text-white/70 font-medium"
                        >
                            Estamos listos para atenderte. Comunícate con nuestras agencias o visítanos.
                        </motion.p>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="h-1 w-20 bg-brand-mustard mx-auto mt-6 rounded-full"
                        />
                    </div>
                </div>
            </section>

            <section className="py-6 bg-brand-blue text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

                        {/* Líneas Oficiales */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col relative z-10 transition-all duration-500 hover:border-brand-mustard/30 group"
                        >
                            <div className="bg-brand-mustard w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-blue shadow-lg shadow-brand-mustard/20">
                                <Phone className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black text-brand-blue mb-6 uppercase tracking-tighter">Líneas Oficiales</h3>

                            <ul className="space-y-6 flex-grow text-brand-blue">
                                <li className="flex flex-col gap-0 border-b border-gray-100 pb-4">
                                    <span className="font-bold text-lg">Agencia Central</span>
                                    <span className="text-xs font-bold text-brand-blue/40 mb-2 tracking-widest">Nebaj, Quiché</span>
                                    <a href="tel:+50257481463" className="text-brand-mustard font-black text-sm tracking-widest hover:translate-x-1 transition-transform inline-block w-fit">5748-1463</a>
                                </li>
                                <li className="flex flex-col gap-0 border-b border-gray-100 pb-4">
                                    <span className="font-bold text-lg">Agencia Chajul</span>
                                    <span className="text-xs font-bold text-brand-blue/40 mb-2 tracking-widest">Ilom, Chajul</span>
                                    <a href="tel:+50230615489" className="text-brand-mustard font-black text-sm tracking-widest hover:translate-x-1 transition-transform inline-block w-fit">3061-5489</a>
                                </li>
                                <li className="flex flex-col gap-0">
                                    <span className="font-bold text-lg">Agencia Acul</span>
                                    <span className="text-xs font-bold text-brand-blue/40 mb-2 tracking-widest">Aldea Acul, Nebaj</span>
                                    <a href="tel:+50230371080" className="text-brand-mustard font-black text-sm tracking-widest hover:translate-x-1 transition-transform inline-block w-fit">3037-1080</a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Horario de Atención */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col relative z-10 transition-all duration-500 hover:border-brand-mustard/30 group"
                        >
                            <div className="bg-brand-mustard w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-blue shadow-lg shadow-brand-mustard/20">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black text-brand-blue mb-6 uppercase tracking-tighter">Horario Laboral</h3>

                            <ul className="space-y-6 flex-grow text-brand-blue">
                                <li className="flex items-start gap-4 border-b border-gray-100 pb-5">
                                    <div className="bg-brand-blue/5 p-2 rounded-xl text-brand-mustard">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block font-black text-base uppercase tracking-tight">Lunes a Viernes</span>
                                        <span className="text-[13px] font-bold text-brand-blue/50 tracking-widest">8:00 AM - 5:00 PM</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 border-b border-gray-100 pb-5">
                                    <div className="bg-brand-blue/5 p-2 rounded-xl text-brand-mustard">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block font-black text-base uppercase tracking-tight">Sábado</span>
                                        <span className="text-[13px] font-bold text-brand-blue/50 tracking-widest">8:00 AM - 12:00 PM</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-red-500/10 p-2 rounded-xl text-red-500">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block font-black text-base uppercase tracking-tight text-red-500">Domingo</span>
                                        <span className="text-[13px] font-bold text-red-400 tracking-widest uppercase">Cerrado</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Nuestras Sedes */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-brand-mustard p-10 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center justify-center relative z-10 transition-all duration-500 hover:rotate-1"
                        >
                            <div className="bg-brand-blue/90 p-5 rounded-[1.5rem] mb-6 shadow-xl">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-black text-brand-blue mb-4 uppercase tracking-tighter">Nuestras Sedes</h3>
                            <p className="text-brand-blue/80 mb-10 text-base font-bold leading-relaxed px-4">
                                Ubica la agencia más cercana a ti para atención personalizada.
                            </p>
                            <Link
                                to="/agencias"
                                className="inline-flex items-center gap-3 bg-brand-blue text-white font-black py-4 px-8 rounded-2xl hover:bg-brand-blue/90 transition-all shadow-xl w-full justify-center text-sm uppercase tracking-widest"
                            >
                                Ver Ubicaciones
                                <ArrowRight className="w-5 h-5 text-brand-mustard" />
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
