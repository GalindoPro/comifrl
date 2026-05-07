import { motion } from "framer-motion";
import { MapPin, Users, Banknote, CheckCircle2, Building,  TrendingUp } from "lucide-react";
import aculImg from "../assets/images/acul.jpg";
import agenciaAculImg from "../assets/images/agencia_acul.jpg";
import { FinancialSummary } from "./FinancialSummary";
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
        categoria: "Alianza Estratégica",
        fecha: "Enero 2026",
        titulo: "ALIANZA COOPERATIVA PARA EL FUTURO",
        resumen:
            "La unión entre COMIF R.L. y FEDERURAL garantiza que los recursos de los socios se administren con responsabilidad y visión de largo plazo.",
        icon: <Users className="w-4 h-4 text-brand-mustard" />,
        chart: (
            <div className="mt-3">
                <p className="text-[10px] font-bold text-brand-blue/50 uppercase tracking-wider mb-1 text-center">
                    Ejes de la alianza
                </p>
                <ResponsiveContainer width="100%" height={80}>
                    <PieChart>
                        <Pie
                            data={[
                                { name: "Gestión Cooperativa", value: 33.3 },
                                { name: "Inversión Segura", value: 33.3 },
                                { name: "Desarrollo Comunitario", value: 33.3 },
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
                            <Cell fill="#434892" />
                        </Pie>
                        <Tooltip
                            formatter={(v) =>
                                typeof v === "number"
                                    ? `Equilibrio`
                                    : String(v)
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[8px] font-black text-brand-blue/60 -mt-1">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />GESTIÓN
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-brand-mustard inline-block" />INVERSIÓN
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#434892] inline-block" />DESARROLLO
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
            <section className="pt-24 pb-3 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="text-center mb-0">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl font-black text-white mb-1 uppercase tracking-tighter"
                        >
                            Noticias <span className="text-brand-mustard">Destacadas</span>
                        </motion.h2>
                    </div>
                </div>
            </section>

            {/* ── Noticias 2025 ──────────────────────────────────────────── */}
            <section className="pt-4 pb-4 bg-brand-blue relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4">
                            {news2025.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                                    className="bg-white rounded-xl shadow-xl p-4 flex flex-col border border-gray-100 hover:border-brand-mustard/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <div className="bg-brand-mustard/10 p-1 rounded-lg">
                                            {item.icon}
                                        </div>
                                        <span className="text-[9px] font-black text-brand-mustard uppercase tracking-widest">
                                            {item.categoria}
                                        </span>
                                        <span className="ml-auto text-[8px] text-brand-blue/40 font-bold">
                                            {item.fecha}
                                        </span>
                                    </div>
                                    <h4 className="text-brand-blue font-black text-xs leading-snug mb-1 uppercase tracking-tight">
                                        {item.titulo}
                                    </h4>
                                    <p className="text-brand-blue/70 text-[10px] leading-tight font-medium flex-grow line-clamp-2">
                                        {item.resumen}
                                    </p>
                                    <div className="mt-2">
                                        {item.chart}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Story: San Juan Acul */}
            <section className="pt-10 pb-4 bg-brand-blue relative overflow-hidden">
                <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-4 border border-gray-100 relative z-10">
                    <div className="grid lg:grid-cols-2">

                        {/* Content Side */}
                        <div className="p-5 flex flex-col justify-center">
                             <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xl font-black text-brand-blue mb-3 leading-tight uppercase tracking-tighter"
                            >
                                COMIF, R.L. en <span className="text-brand-mustard">San Juan Acul</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-brand-blue/70 mb-3 text-xs font-medium leading-tight"
                            >
                                Acercamos servicios financieros a comunidades rurales. "Los residentes ahora gestionan remesas y servicios básicos sin viajar a la cabecera municipal."
                            </motion.p>

                            <div className="space-y-1.5">
                                {[
                                    { icon: <Users className="w-3.5 h-3.5 text-brand-mustard" />, text: "Asesoría directa" },
                                    { icon: <MapPin className="w-3.5 h-3.5 text-brand-mustard" />, text: "Servicios cercanos" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <div className="bg-brand-mustard/20 p-1.5 rounded-lg">{item.icon}</div>
                                        <span className="font-black text-brand-blue/80 text-[9px] uppercase tracking-widest">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Images Side */}
                        <div className="grid grid-cols-2 h-40 md:h-full">
                            <img src={aculImg} className="w-full h-full object-cover" />
                            <img src={agenciaAculImg} className="w-full h-full object-cover" />
                        </div>

                    </div>
                </div>
                </div>
            </section>

            {/* Hitos Institucionales */}
            <section className="pt-4 pb-4 bg-brand-blue relative overflow-hidden">
                <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-4">
                        <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tighter">Hitos <span className="text-brand-mustard">Institucionales</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Agente BI Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-5 rounded-xl shadow-2xl border border-gray-100 hover:border-brand-mustard/50 transition-all duration-500"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-brand-mustard w-10 h-10 rounded-xl flex items-center justify-center text-brand-blue shadow-lg shadow-brand-mustard/20">
                                    <Building className="w-5 h-5" />
                                </div>
                                <h4 className="text-lg font-black text-brand-blue uppercase tracking-tighter">Agente BI</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                                {[
                                    "Remesas", "Ahorros", "Luz", "Teléfonos", "Retiros", "Transferencias"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-brand-blue/80">
                                        <CheckCircle2 className="w-3 h-3 text-brand-mustard flex-shrink-0" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Support Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-mustard p-5 rounded-xl shadow-2xl flex flex-col justify-between"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-brand-blue/90 p-2 rounded-lg text-white shadow-xl">
                                    <Banknote className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-black text-brand-blue uppercase tracking-tighter">Apoyo Social</h4>
                            </div>
                            <div className="text-center p-4 bg-brand-blue/5 rounded-xl border border-brand-blue/5 mb-3">
                                <span className="text-xl font-black text-brand-blue">Q1,000</span>
                                <p className="text-brand-blue/70 font-black text-[9px] uppercase tracking-widest">Gasto Funerario</p>
                            </div>
                            <p className="text-brand-blue font-bold text-[9px] text-center uppercase leading-tight opacity-80">
                                Solidaridad con cada asociado en momentos difíciles.
                            </p>
                        </motion.div>
                    </div>
                </div>
                </div>
            </section>

            {/* Financial Transparency Integrated */}
            <FinancialSummary />
        </div>
    );
}
