import { motion } from "framer-motion";
import { Users, Target, Scale, Award } from "lucide-react";
import corazonIxilImg from "../assets/images/corazon_ixil.png";
import raizIxilImg from "../assets/images/raiz_ixil.png";
import misionImg from "../assets/images/mision.png";
import visionImg from "../assets/images/vision.png";

export function AboutUs() {
    return (
        <div className="flex flex-col">
            <section id="nosotros" className="py-10 bg-brand-blue overflow-hidden relative">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col-reverse md:flex-row items-center gap-10"
                        >
                            <div className="flex-1">
                                <h3 className="text-lg md:text-3xl font-black text-brand-blue mb-4 text-center md:text-left uppercase tracking-tighter leading-tight">Nebaj, <span className="text-brand-mustard">Donde Nace la Cooperativa</span></h3>
                                <p className="text-brand-blue/80 leading-relaxed text-sm md:text-base text-center md:text-left font-medium">
                                    Santa María Nebaj, "Na’b’a’" en idioma ixil, significa ‘lugar donde nace el agua’. Es un municipio cultural y económico clave del departamento de Quiché, donde nuestras raíces se entrelazan con la historia de un pueblo resiliente.
                                </p>
                            </div>
                            <div className="flex-shrink-0 bg-brand-mustard/10 p-3 rounded-2xl border border-brand-mustard/20 shadow-lg">
                                <img
                                    src={corazonIxilImg}
                                    alt="Nebaj, Corazón Ixil"
                                    className="w-32 h-32 md:w-44 md:h-44 object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Raíces ixiles y origen institucional - Light Contrast Section */}
            <section className="py-8 bg-brand-blue overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 shadow-2xl relative z-10"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard p-4 rounded-3xl shadow-2xl shadow-brand-mustard/20 ring-4 ring-brand-mustard/20">
                                <img
                                    src={raizIxilImg}
                                    alt="Raíces Ixiles"
                                    className="w-32 h-32 md:w-44 md:h-44 object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-3xl font-black text-brand-blue mb-4 text-center md:text-left uppercase tracking-tighter">Ixil, <span className="text-brand-mustard">Origen de Confianza</span></h3>
                                <p className="text-brand-blue/80 leading-relaxed text-base md:text-lg text-center md:text-left italic font-medium">
                                    "Desde <span className="text-brand-mustard font-black">2008</span>, 28 visionarios locales dieron vida a <span className="font-black not-italic text-brand-mustard underline decoration-brand-blue/20 underline-offset-4">COMIF, R.L.</span>, hoy referente de confianza en la región Ixil."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Misión & Visión - Dark Section */}
            <section className="py-10 bg-brand-blue overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-mustard/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2rem] relative flex flex-col md:flex-row items-center gap-6 shadow-2xl border border-gray-100 hover:border-brand-mustard/30 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard/20 p-4 rounded-2xl border border-brand-mustard/30 shadow-lg">
                                <img
                                    src={misionImg}
                                    alt="Misión"
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-3 text-brand-blue uppercase tracking-widest">Misión</h3>
                                <p className="text-brand-blue/80 leading-relaxed text-base font-medium">
                                    Fomentar el ahorro, facilitar financiamiento productivo y contribuir al desarrollo socioeconómico con honestidad y responsabilidad.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-[2rem] relative flex flex-col md:flex-row items-center gap-6 shadow-2xl border border-gray-100 hover:border-brand-mustard/30 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 bg-brand-mustard/20 p-4 rounded-2xl border border-brand-mustard/30 shadow-lg">
                                <img
                                    src={visionImg}
                                    alt="Visión"
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-3 text-brand-blue uppercase tracking-widest">Visión</h3>
                                <p className="text-brand-blue/80 leading-relaxed text-base font-medium">
                                    Ser la cooperativa líder en financiamiento rural, con equidad de género y servicios que promuevan el desarrollo integral.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gobierno y Principios - Dark Section */}
            <section className="py-8 bg-brand-blue overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                <Award className="w-8 h-8 text-brand-mustard" />
                                Autoridades y Estructura
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-lg">
                                    <Users className="w-5 h-5 text-brand-mustard mt-1 flex-shrink-0" />
                                    <div className="text-brand-blue">
                                        <strong className="block text-lg font-bold">Asamblea General</strong>
                                        <span className="text-xs text-brand-mustard uppercase tracking-widest font-bold">Máxima autoridad</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-5 bg-brand-mustard rounded-2xl shadow-lg border border-brand-mustard">
                                    <Scale className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                    <div className="text-brand-blue">
                                        <strong className="block text-lg font-black">Consejo de Administración</strong>
                                        <span className="text-xs uppercase tracking-widest font-black opacity-80">5 miembros electos</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                                <Target className="w-8 h-8 text-brand-mustard" />
                                Principios
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                { [
                                    { title: "Responsabilidad", desc: "construye futuro", color: "bg-white border border-gray-100", textColor: "text-brand-blue", accent: "text-brand-mustard" },
                                    { title: "Honestidad", desc: "genera confianza", color: "bg-white border border-gray-100", textColor: "text-brand-blue", accent: "text-brand-mustard" },
                                    { title: "Igualdad", desc: "para todos", color: "bg-brand-mustard shadow-brand-mustard/20", textColor: "text-brand-blue", accent: "text-brand-blue/70" },
                                    { title: "Integridad", desc: "en cada acción", color: "bg-white border border-gray-100", textColor: "text-brand-blue", accent: "text-brand-mustard" }
                                ].map((val, idx) => (
                                    <div key={idx} className={`${val.color} p-6 rounded-[1.5rem] shadow-xl flex flex-col items-center justify-center text-center transition-all hover:-translate-y-2 duration-300`}>
                                        <span className={`font-black uppercase tracking-widest text-sm md:text-base mb-1 ${val.textColor}`}>{val.title}</span>
                                        <span className={`text-[10px] md:text-xs font-bold uppercase tracking-tighter opacity-60 ${val.textColor}`}>{val.desc}</span>
                                    </div>
                                )) }
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
