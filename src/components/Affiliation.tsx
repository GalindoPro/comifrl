import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Users, CheckCircle2, ArrowRight, UserPlus, Lightbulb } from "lucide-react";

export function Affiliation() {
    return (
        <div className="flex flex-col">
            <section className="pt-20 pb-8 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center mb-0 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block p-2.5 bg-brand-mustard/20 rounded-2xl mb-3"
                        >
                            <Users className="w-7 h-7 text-brand-mustard" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-tighter"
                        >
                            Únete a la <span className="text-brand-mustard">Familia</span> COMIF, R.L.
                        </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-white/70 font-medium"
                    >
                        Afiliarte es fácil: el primer paso hacia tu bienestar financiero y el desarrollo de tu comunidad.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="h-1 w-20 bg-brand-mustard mx-auto mt-6 rounded-full"
                    />
                </div>
                </div>
            </section>

            <section className="pt-18 pb-6 bg-brand-blue relative overflow-hidden flex-grow">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

                    {/* Requisitos de Afiliación */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative z-10 hover:border-brand-mustard/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-brand-mustard w-14 h-14 rounded-2xl flex items-center justify-center text-brand-blue shadow-lg shadow-brand-mustard/20">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tighter">Documentación necesaria</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Certificado de nacimiento y DPI del beneficiario (menores de edad)",
                                "DPI vigente (adultos)",
                                "Comprobante de domicilio reciente",
                                "Aporte inicial de Q100.00",
                                "Solicitud de afiliación llena"
                            ].map((req, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 bg-brand-blue/5 border border-brand-blue/5 rounded-2xl hover:bg-brand-blue/10 transition-all group">
                                    <div className="bg-brand-mustard w-6 h-6 rounded-full text-brand-blue flex items-center justify-center font-black text-[10px] mt-0.5 shadow-lg flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <span className="text-brand-blue/80 font-bold text-xs uppercase tracking-widest leading-relaxed">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Proceso y Beneficios Column */}
                    <div className="space-y-6">

                        {/* Proceso */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative z-10 hover:border-brand-mustard/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-brand-mustard w-14 h-14 rounded-2xl flex items-center justify-center text-brand-blue shadow-lg shadow-brand-mustard/20">
                                    <UserPlus className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tighter">Pasos Simples</h3>
                            </div>

                            <div className="relative">
                                {/* Connector Line */}
                                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-brand-mustard/20"></div>

                                <div className="space-y-8 relative">
                                    {[
                                        { title: "Contacta", desc: "WhatsApp o visita nuestras agencias" },
                                        { title: "Documenta", desc: "Entrega DPI, recibo de luz y formulario" },
                                        { title: "¡Listo!", desc: "Realiza tu aporte y recibe tu libreta" },
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-mustard text-brand-blue flex items-center justify-center font-black text-lg shadow-xl shadow-brand-mustard/10 z-10 flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <div className="pt-1">
                                                <h4 className="text-lg font-black text-brand-blue uppercase tracking-tighter mb-1">{step.title}</h4>
                                                <p className="text-brand-blue/50 text-xs font-bold uppercase tracking-widest">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Beneficios */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-mustard rounded-[2.5rem] p-8 text-brand-blue shadow-2xl shadow-brand-mustard/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-brand-blue/90 p-3 rounded-2xl text-white shadow-xl">
                                    <Lightbulb className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tighter">Beneficios de ser Socio</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    "Tasas preferenciales",
                                    "Asesoría personalizada",
                                    "Voz y voto en Asambleas",
                                    "Seguridad y respaldo"
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-brand-blue/5 p-3 rounded-xl border border-brand-blue/5">
                                        <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                                        <span className="text-[11px] font-black uppercase tracking-tighter opacity-80">{benefit}</span>
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
                    className="text-center mt-16"
                >
                    <Link
                        to="/maps"
                        className="inline-flex items-center gap-4 bg-brand-mustard text-brand-blue font-black py-4 px-10 rounded-[1.5rem] shadow-2xl hover:scale-105 hover:bg-brand-mustard/90 transition-all duration-300 text-sm uppercase tracking-widest"
                    >
                        Visitar una agencia
                        <ArrowRight className="w-5 h-5 text-brand-blue" />
                    </Link>
                </motion.div>

                </div>
            </section>
        </div>
    );
}
