import { motion } from "framer-motion";

const communityHighlights = [
    {
        title: "Apoyo a la Producción Local",
        description: "Impulsamos a los pequeños productores conectándolos con mercados justos y financiamiento a medida.",
        tags: ["Agricultura", "Comercio"],
        imagePlaceholder: "bg-brand-mustard/10", // Placeholder color
    },
    {
        title: "Educación y Futuro",
        description: "Celebramos el talento de nuestros jóvenes con becas y programas de formación técnica.",
        tags: ["Jóvenes", "Educación"],
        imagePlaceholder: "bg-brand-blue/10",
    },
    {
        title: "Tradición y Cultura",
        description: "Preservamos nuestras raíces apoyando las festividades y artes de nuestra comunidad.",
        tags: ["Cultura", "Arte"],
        imagePlaceholder: "bg-brand-mustard/20",
    },
];

export function CommunitySection() {
    return (
        <section className="pt-8 pb-4 bg-gradient-to-tr from-white to-yellow-50/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl font-black text-brand-blue mb-1 uppercase tracking-tighter"
                    >
                        Compromiso <span className="text-brand-mustard">Social</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xs md:text-sm text-gray-500 max-w-lg mx-auto leading-tight"
                    >
                        Impulsando el bienestar compartido a través de nuestras raíces.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                    {communityHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-3 border border-gray-50"
                        >
                            <div className={`h-32 w-full rounded-lg overflow-hidden mb-3 ${item.imagePlaceholder} flex items-center justify-center text-[10px] text-gray-400 font-bold uppercase`}>
                                <span>{item.title}</span>
                            </div>

                            <div className="space-y-1">
                                <div className="flex gap-1 mb-1">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-[8px] font-black text-brand-mustard bg-brand-mustard/10 px-2 py-0.5 rounded-full uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xs font-black text-brand-blue leading-tight uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[10px] text-gray-600 leading-tight">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
