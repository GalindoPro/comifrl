import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Building2 } from "lucide-react";

export function CTASection() {
    return (
        <section className="pt-4 pb-4 bg-brand-blue relative overflow-hidden">
            {/* Artistic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #BF9903 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-mustard rounded-full blur-[140px] opacity-10" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-mustard rounded-full blur-[140px] opacity-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-2xl relative overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-4 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                        >
                            <h2 className="text-xl md:text-2xl font-black text-brand-blue leading-tight uppercase tracking-tighter">
                                ¿Listo para <span className="text-brand-mustard">crecer</span>?
                            </h2>
                            <p className="text-xs md:text-sm text-brand-blue/70 leading-tight font-medium">
                                Únete a los miles de asociados que confían en COMIF, R.L.
                            </p>

                            <div className="flex gap-2 pt-1">
                                <Link
                                    to="/afiliacion"
                                    className="group bg-brand-mustard text-brand-blue px-3 py-1.5 rounded-lg font-black text-xs flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg"
                                >
                                    Hazte Socio
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <Link
                                    to="/maps"
                                    className="bg-brand-blue/5 text-brand-blue border border-brand-blue/10 px-3 py-1.5 rounded-lg font-black text-xs flex items-center justify-center gap-2 hover:bg-brand-blue/10 transition-all"
                                >
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
                             <div className="relative z-10 bg-gradient-to-br from-brand-mustard/40 to-brand-mustard/10 p-px rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                                <div className="bg-white rounded-xl p-4 space-y-2 border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-brand-mustard rounded-lg flex items-center justify-center font-black text-brand-blue text-xs shadow-lg">1</div>
                                        <p className="text-brand-blue font-black text-[9px] uppercase tracking-widest">Agencia</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-brand-blue/5 rounded-lg flex items-center justify-center font-black text-brand-mustard text-xs">2</div>
                                        <p className="text-brand-blue/70 font-bold text-[9px] uppercase">Documentos</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-brand-blue/5 rounded-lg flex items-center justify-center font-black text-brand-mustard text-xs">3</div>
                                        <p className="text-brand-blue/70 font-bold text-[9px] uppercase tracking-tighter">¡Listo!</p>
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
