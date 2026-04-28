import { motion } from "framer-motion";
import { MapPin, Users, Heart, Banknote, CheckCircle2, Building, TrendingDown, TrendingUp } from "lucide-react";
import aculImg from "../assets/images/acul.jpg";
import agenciaAculImg from "../assets/images/agencia_acul.jpg";
import {
    BarChart,
    Bar,
    XAxis,
    Cell,
    PieChart,
    Pie,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

// ── Mini-chart tooltip ────────────────────────────────────────────────────────
const MiniTooltip = ({
    active,
    payload,
    label,
    suffix = "",
}: {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
    suffix?: string;
}) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-brand-blue text-white text-[10px] px-2 py-1 rounded shadow-lg border border-brand-mustard/30">
            <span className="font-bold text-brand-mustard">{label}: </span>
            {payload[0].value}{suffix}
        </div>
    );
};

// ── News 2025 cards data ──────────────────────────────────────────────────────
const news2025 = [
    {
        categoria: "Gestión financiera",
        fecha: "Enero 2026",
        titulo: "COMIF redujo su índice de mora al 4.07% en 2025",
        resumen:
            "El equipo de crédito y gerencia trabajó en conjunto para reducir la morosidad en un 7% respecto al año anterior.",
        icon: <TrendingDown className="w-4 h-4 text-brand-mustard" />,
        chart: (
            <div className="mt-3">
                <p className="text-[10px] font-bold text-brand-blue/50 uppercase tracking-wider mb-1">
                    Mora comparativa
                </p>
                <ResponsiveContainer width="100%" height={80}>
                    <BarChart
                        data={[
                            { año: "2024", mora: 11.07 },
                            { año: "2025", mora: 4.07 },
                        ]}
                        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                    >
                        <XAxis dataKey="año" tick={{ fill: "#0F1249", fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<MiniTooltip suffix="%" />} />
                        <Bar dataKey="mora" radius={[4, 4, 0, 0]}>
                            <Cell fill="#0F1249" />
                            <Cell fill="#BF9903" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        ),
    },
    {
        categoria: "Créditos",
        fecha: "Enero 2026",
        titulo: "Expansión del 53% en colocación de cartera",
        resumen:
            "El Comité de Crédito aprobó nuevos créditos hipotecarios y fiduciarios durante 2025, fortaleciendo el acceso al financiamiento.",
        icon: <Banknote className="w-4 h-4 text-brand-mustard" />,
        chart: (
            <div className="mt-3">
                <p className="text-[10px] font-bold text-brand-blue/50 uppercase tracking-wider mb-1">
                    Colocación vs total cartera
                </p>
                <div className="w-full bg-brand-blue/10 rounded-full h-3 mb-1.5">
                    <div
                        className="bg-brand-mustard h-3 rounded-full transition-all duration-700"
                        style={{ width: "53%" }}
                    />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-brand-blue/60">
                    <span className="text-brand-mustard">53% colocados</span>
                    <span>del total de cartera</span>
                </div>
            </div>
        ),
    },
    {
        categoria: "Resultados anuales",
        fecha: "Enero 2026",
        titulo: "Activos de COMIF crecen 26.88% en 2025",
        resumen:
            "La cooperativa cerró 2025 con un sólido crecimiento de activos, consolidando 7 años consecutivos de superávit financiero.",
        icon: <TrendingUp className="w-4 h-4 text-brand-mustard" />,
        chart: (
            <div className="mt-3">
                <p className="text-[10px] font-bold text-brand-blue/50 uppercase tracking-wider mb-1">
                    Crecimiento de activos
                </p>
                <ResponsiveContainer width="100%" height={80}>
                    <BarChart
                        data={[
                            { año: "2024", valor: 100 },
                            { año: "2025", valor: 126.88 },
                        ]}
                        margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                    >
                        <XAxis dataKey="año" tick={{ fill: "#0F1249", fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<MiniTooltip suffix="%" />} />
                        <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
                            <Cell fill="#0F1249" />
                            <Cell fill="#BF9903" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        ),
    },
    {
        categoria: "Financiamiento",
        fecha: "Diciembre 2025",
        titulo: "Gestión estratégica de fondos con FEDERURAL",
        resumen:
            "El Consejo diversificó las captaciones destinando el 75% a gestión con FEDERURAL R.L. y el 25% a inversiones a Plazo Fijo.",
        icon: <Building className="w-4 h-4 text-brand-mustard" />,
        chart: (
            <div className="mt-3">
                <p className="text-[10px] font-bold text-brand-blue/50 uppercase tracking-wider mb-1">
                    Distribución de fondos
                </p>
                <ResponsiveContainer width="100%" height={80}>
                    <PieChart>
                        <Pie
                            data={[
                                { name: "FEDERURAL", value: 75 },
                                { name: "Plazo Fijo", value: 25 },
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={22}
                            outerRadius={36}
                            paddingAngle={4}
                            dataKey="value"
                        >
                            <Cell fill="#0F1249" />
                            <Cell fill="#BF9903" />
                        </Pie>
                        <Tooltip
                            formatter={(v) =>
                                typeof v === "number"
                                    ? `${v}%`
                                    : String(v)
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 text-[10px] font-bold text-brand-blue/60 -mt-1">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />FEDERURAL
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-brand-mustard inline-block" />Plazo Fijo
                    </span>
                </div>
            </div>
        ),
    },
];

export function News() {
    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="py-10 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center mb-0">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-5xl font-black text-white mb-3 uppercase tracking-tighter"
                        >
                            Noticias <span className="text-brand-mustard">Destacadas</span>
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="h-1 w-20 bg-brand-mustard mx-auto rounded-full"
                        />
                    </div>
                </div>
            </section>

            {/* ── Noticias 2025 ──────────────────────────────────────────── */}
            <section className="py-10 bg-brand-blue relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                                Resultados <span className="text-brand-mustard">2025</span>
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {news2025.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                                    className="bg-white rounded-2xl shadow-xl p-5 flex flex-col border border-gray-100 hover:border-brand-mustard/30 transition-all hover:-translate-y-1 duration-300"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="bg-brand-mustard/10 p-1.5 rounded-lg border border-brand-mustard/20">
                                            {item.icon}
                                        </div>
                                        <span className="text-[10px] font-black text-brand-mustard uppercase tracking-widest">
                                            {item.categoria}
                                        </span>
                                        <span className="ml-auto text-[10px] text-brand-blue/40 font-semibold">
                                            {item.fecha}
                                        </span>
                                    </div>
                                    <h4 className="text-brand-blue font-black text-sm leading-snug mb-2 uppercase tracking-tight">
                                        {item.titulo}
                                    </h4>
                                    <p className="text-brand-blue/70 text-xs leading-relaxed font-medium flex-grow">
                                        {item.resumen}
                                    </p>
                                    {item.chart}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Story: San Juan Acul */}
            <section className="py-8 bg-brand-blue relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-mustard/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden mb-8 border border-gray-100 relative z-10">
                    <div className="grid lg:grid-cols-2">

                        {/* Content Side */}
                        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-brand-mustard font-bold tracking-wider uppercase mb-2 text-xs"
                            >
                                Transformando Realidades
                            </motion.span>
                             <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-black text-brand-blue mb-6 leading-[1.1] uppercase tracking-tighter"
                            >
                                COMIF, R.L. impulsa el <span className="text-brand-mustard">desarrollo</span> en San Juan Acul
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-brand-blue/70 mb-6 text-base font-medium"
                            >
                                COMIF, R.L. lleva servicios financieros a comunidades sin acceso bancario formal, acercando soluciones y confianza.
                            </motion.p>

                            <motion.blockquote
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="border-l-4 border-brand-mustard pl-6 italic text-brand-blue/90 bg-brand-blue/5 py-5 rounded-r-2xl mb-8 text-base font-medium"
                            >
                                "Los residentes ahora gestionan remesas y servicios básicos sin viajar a la cabecera municipal."
                            </motion.blockquote>

                            <div className="space-y-3">
                                {[
                                    { icon: <Users className="w-4 h-4 text-brand-mustard" />, text: "Asesoría personalizada" },
                                    { icon: <MapPin className="w-4 h-4 text-brand-mustard" />, text: "Servicios financieros cercanos" },
                                    { icon: <Heart className="w-4 h-4 text-brand-mustard" />, text: "Confianza con nuestros asociados" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (index * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="bg-brand-mustard/20 p-2 rounded-xl border border-brand-mustard/20 shadow-lg">{item.icon}</div>
                                        <span className="font-black text-brand-blue/80 text-xs uppercase tracking-widest">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Images Side */}
                        <div className="grid grid-rows-2 h-[400px] md:h-[500px] lg:h-auto">
                            <div className="relative bg-gray-200 overflow-hidden group">
                                <img
                                    src={aculImg}
                                    alt="Comunidad San Juan Acul"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="relative bg-gray-300 overflow-hidden group">
                                <img
                                    src={agenciaAculImg}
                                    alt="Agencia COMIF en Acul"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>

            {/* Hitos Institucionales */}
            <section className="py-10 bg-brand-blue relative overflow-hidden">
                <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Hitos <span className="text-brand-mustard">Institucionales</span></h3>
                        <p className="text-brand-mustard uppercase tracking-[0.3em] font-black text-[10px] opacity-80">Logros 2023 – 2026</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Agente BI Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 hover:border-brand-mustard/50 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-brand-mustard w-14 h-14 rounded-2xl flex items-center justify-center text-brand-blue shadow-lg shadow-brand-mustard/20">
                                    <Building className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black text-brand-blue uppercase tracking-tighter">Agente BI</h4>
                            </div>
                            <ul className="space-y-2">
                                {[
                                    "Pago de remesas",
                                    "Captación de ahorros",
                                    "Servicios de luz",
                                    "Pagos de convenios",
                                    "Pago de teléfonos",
                                    "Pago de transferencias",
                                    "Retiros monetarios",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-blue/80">
                                        <CheckCircle2 className="w-4 h-4 text-brand-mustard flex-shrink-0" />
                                        <span className="text-[12px] font-bold uppercase tracking-widest">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Social Support Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-mustard p-8 rounded-[2rem] shadow-2xl shadow-brand-mustard/20 flex flex-col justify-between"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-brand-blue/90 p-3 rounded-2xl text-white shadow-xl">
                                    <Banknote className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black text-brand-blue uppercase tracking-tighter">Apoyo Social</h4>
                            </div>
                            <div className="flex-grow flex flex-col justify-center text-center p-8 bg-brand-blue/5 rounded-3xl border border-brand-blue/5 mb-6">
                                <span className="text-5xl font-black text-brand-blue mb-2">Q1,000</span>
                                <p className="text-brand-blue/70 font-black text-xs uppercase tracking-[0.2em]">Beneficio por fallecimiento</p>
                            </div>
                            <p className="text-brand-blue font-bold text-xs text-center uppercase leading-relaxed opacity-80 px-4">
                                Apoyo solidario entregado a la familia de cada asociado en momentos difíciles.
                            </p>
                        </motion.div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}
