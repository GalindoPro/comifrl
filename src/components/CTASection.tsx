import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Building2 } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-16 bg-brand-blue relative overflow-hidden">
            {/* Artistic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #BF9903 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-mustard rounded-full blur-[140px] opacity-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-mustard rounded-full blur-[140px] opacity-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-brand-blue leading-tight uppercase tracking-tighter">
                                ¿Listo para <span className="text-brand-mustard">hacer crecer</span> tu futuro?
                            </h2>
                            <p className="text-base md:text-lg text-brand-blue/70 leading-relaxed font-medium">
                                Únete a los más de miles de asociados que confían en COMIF, R.L. para asegurar su estabilidad financiera.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-2 pt-2">
                                <Link
                                    to="/afiliacion"
                                    className="group bg-brand-mustard text-brand-blue px-4 py-2 rounded-lg font-black text-base flex items-center justify-center gap-2 hover:bg-brand-mustard/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-mustard/20"
                                >
                                    <UserPlus className="w-4 h-4" />
                                    Hazte Socio Ahora
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/maps"
                                    className="bg-brand-blue/5 text-brand-blue border border-brand-blue/10 px-6 py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-brand-blue/10 transition-all shadow-sm"
                                >
                                    <Building2 className="w-5 h-5 text-brand-mustard" />
                                    Visítanos
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 bg-gradient-to-br from-brand-mustard/40 to-brand-mustard/10 p-px rounded-[2rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                                <div className="bg-white rounded-[2rem] p-6 space-y-4 border border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-mustard rounded-xl flex items-center justify-center font-black text-brand-blue text-base shadow-lg">1</div>
                                        <p className="text-brand-blue font-black text-xs uppercase tracking-widest">Acércate a una agencia</p>
                                    </div>
                                    <div className="w-px h-6 bg-brand-mustard/30 ml-5" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-blue/5 rounded-xl flex items-center justify-center font-black text-brand-mustard text-base">2</div>
                                        <p className="text-brand-blue/70 font-bold text-xs uppercase">Presenta documentos</p>
                                    </div>
                                    <div className="w-px h-6 bg-brand-mustard/30 ml-5" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-brand-blue/5 rounded-xl flex items-center justify-center font-black text-brand-mustard text-base">3</div>
                                        <p className="text-brand-blue/70 font-bold text-xs uppercase tracking-tighter">¡Eres parte de COMIF!</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-mustard rounded-full blur-2xl opacity-40 animate-pulse" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
