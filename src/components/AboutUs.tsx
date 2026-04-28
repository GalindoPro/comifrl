import { motion } from "framer-motion";
import { Users, Target, Scale, Award, Shield, CreditCard } from "lucide-react";
import misionImg from "../assets/images/mision.png";
import visionImg from "../assets/images/vision.png";
import { HomeIntro } from "./HomeIntro";
import { Advantages } from "./Advantages";

export function AboutUs() {
    return (
        <div className="flex flex-col">
            <HomeIntro />
            <Advantages />

            {/* Misión & Visión - Dark Section */}
            <section className="pt-4 pb-4 bg-brand-blue overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-mustard/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-4 rounded-xl relative flex items-center gap-4 shadow-2xl border border-gray-100 hover:border-brand-mustard/30 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard/20 p-2 rounded-xl border border-brand-mustard/30 shadow-lg">
                                <img
                                    src={misionImg}
                                    alt="Misión"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-black mb-1 text-brand-blue uppercase tracking-widest">Misión</h3>
                                <p className="text-brand-blue/80 leading-tight text-xs font-medium">
                                    Fomentar el ahorro, facilitar financiamiento productivo y contribuir al desarrollo socioeconómico con honestidad y responsabilidad.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-4 rounded-xl relative flex items-center gap-4 shadow-2xl border border-gray-100 hover:border-brand-mustard/30 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard/20 p-2 rounded-xl border border-brand-mustard/30 shadow-lg">
                                <img
                                    src={visionImg}
                                    alt="Visión"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-black mb-1 text-brand-blue uppercase tracking-widest">Visión</h3>
                                <p className="text-brand-blue/80 leading-tight text-xs font-medium">
                                    Ser la cooperativa líder en financiamiento rural, con equidad de género y servicios que promuevan el desarrollo integral.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gobierno y Principios - Dark Section */}
            <section className="pt-4 pb-4 bg-brand-blue overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                                <Award className="w-5 h-5 text-brand-mustard" />
                                Autoridades
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-lg">
                                    <Users className="w-4 h-4 text-brand-mustard flex-shrink-0" />
                                    <div className="text-brand-blue">
                                        <strong className="block text-sm font-bold">Asamblea General</strong>
                                        <span className="text-[9px] text-brand-mustard uppercase tracking-widest font-bold">Máxima autoridad</span>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3 p-3 bg-brand-mustard rounded-xl shadow-lg border border-brand-mustard">
                                    <Scale className="w-4 h-4 text-brand-blue flex-shrink-0" />
                                    <div className="text-brand-blue">
                                        <strong className="block text-sm font-black">Consejo de Administración</strong>
                                        <span className="text-[9px] uppercase tracking-widest font-black opacity-80">5 miembros</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-3">
                                <Target className="w-5 h-5 text-brand-mustard" />
                                Principios
                            </h3>
                            <div className="grid grid-cols-2 gap-2">
                                { [
                                    { title: "Responsabilidad", desc: "construye futuro", color: "bg-white", textColor: "text-brand-blue" },
                                    { title: "Honestidad", desc: "genera confianza", color: "bg-white", textColor: "text-brand-blue" },
                                    { title: "Igualdad", desc: "para todos", color: "bg-brand-mustard", textColor: "text-brand-blue" },
                                    { title: "Integridad", desc: "en cada acción", color: "bg-white", textColor: "text-brand-blue" }
                                ].map((val, idx) => (
                                    <div key={idx} className={`${val.color} p-2 rounded-xl shadow-xl flex flex-col items-center justify-center text-center`}>
                                        <span className={`font-black uppercase tracking-widest text-[10px] mb-0.5 ${val.textColor}`}>{val.title}</span>
                                        <span className={`text-[8px] font-bold uppercase tracking-tighter opacity-60 ${val.textColor}`}>{val.desc}</span>
                                    </div>
                                )) }
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Directivos 2025 */}
            <section className="pt-4 pb-12 bg-brand-blue overflow-hidden relative">
                <div className="absolute top-0 left-0 w-72 h-72 bg-brand-mustard/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-4"
                        >
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-1">
                                Cuerpo <span className="text-brand-mustard">Directivo 2025</span>
                            </h3>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Consejo de Administración */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="bg-brand-mustard px-4 py-2 flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-brand-blue flex-shrink-0" />
                                    <h4 className="text-brand-blue font-black uppercase tracking-wider text-[11px]">
                                        Consejo de Administración
                                    </h4>
                                </div>
                                <ul className="divide-y divide-brand-blue/5">
                                    {[
                                        { cargo: "Presidenta", nombre: "Santa Isabela López Raymundo" },
                                        { cargo: "Vicepresidente", nombre: "Juan Carlos Chel Matóm" },
                                        { cargo: "Secretario", nombre: "Tomas Cedillo de Paz" },
                                        { cargo: "Vocal I", nombre: "Eva Catarina De León Raymundo" },
                                        { cargo: "Vocal II", nombre: "Catarina Terraza Guzmán" },
                                    ].map((m, i) => (
                                        <li key={i} className="flex items-center gap-3 px-4 py-1.5">
                                            <Users className="w-3 h-3 text-brand-mustard flex-shrink-0" />
                                            <div className="flex items-center gap-2">
                                                <p className="text-[9px] font-black text-brand-mustard uppercase tracking-widest min-w-[80px]">
                                                    {m.cargo}
                                                </p>
                                                <p className="text-brand-blue font-bold text-xs">
                                                    {m.nombre}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Comité de Crédito */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="bg-brand-blue px-4 py-2 flex items-center gap-2">
                                    <CreditCard className="w-4 h-4 text-brand-mustard flex-shrink-0" />
                                    <h4 className="text-white font-black uppercase tracking-wider text-[11px]">
                                        Comité de Crédito
                                    </h4>
                                </div>
                                <ul className="divide-y divide-brand-blue/5">
                                    {[
                                        { cargo: "Presidenta", nombre: "María Santiago Ceto de Sánchez" },
                                        { cargo: "Secretaria", nombre: "Magdalena Ileana Ceto Raymundo" },
                                        { cargo: "Vocal", nombre: "Prof. Nicolas Pérez Guzaro" },
                                    ].map((m, i) => (
                                        <li key={i} className="flex items-center gap-3 px-4 py-1.5">
                                            <Users className="w-3 h-3 text-brand-mustard flex-shrink-0" />
                                            <div className="flex items-center gap-2">
                                                <p className="text-[9px] font-black text-brand-mustard uppercase tracking-widest min-w-[80px]">
                                                    {m.cargo}
                                                </p>
                                                <p className="text-brand-blue font-bold text-xs">
                                                    {m.nombre}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                {/* Trayectoria */}
                                <div className="px-4 py-3 bg-brand-blue/5 border-t border-brand-blue/10">
                                    <p className="text-brand-blue/80 text-[11px] leading-tight font-medium italic">
                                        "COMIF R.L. registra superávit en los últimos 7 años. En 2025, los activos crecieron un 26.88%."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
