import { motion } from "framer-motion";

const testimonials = [
    {
        name: "María Xitumul",
        role: "Comerciante Local",
        content: "Gracias a COMIF logré ampliar mi negocio de artesanías. Su atención es humana y cercana.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    {
        name: "Juan Guzmán",
        role: "Agricultor",
        content: "El crédito agrícola de la cooperativa me permitió renovar mis herramientas. Son gente de confianza.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan"
    },
    {
        name: "Elena Bernal",
        role: "Emprendedora",
        content: "He ahorrado con ellos por años y siempre he sentido que mi capital está seguro. Recomendados al 100%.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
];

export function Testimonials() {
    return (
        <section className="pt-8 pb-4 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-2xl font-black text-brand-blue mb-1 uppercase tracking-tighter"
                    >
                        Nuestros <span className="text-brand-mustard">Testimonios</span>
                    </motion.h2>
                    <p className="text-gray-500 text-xs md:text-sm max-w-lg mx-auto leading-tight">
                        Voces de nuestra comunidad que crecen con COMIF, R.L.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2 max-w-4xl mx-auto">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-3 rounded-xl border border-gray-100 flex flex-col items-center text-center shadow-md"
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-10 h-10 rounded-full mb-2 border-2 border-brand-mustard/30 object-cover"
                            />
                            <div className="mb-1 flex-grow">
                                <p className="text-gray-600 italic text-[10px] leading-tight">
                                    "{t.content}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-black text-brand-blue text-[11px] leading-none mb-0.5">{t.name}</h4>
                                <span className="text-brand-mustard font-black text-[7px] uppercase tracking-widest">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
