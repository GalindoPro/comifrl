import { motion } from "framer-motion";
import {
    DollarSign,
    Calendar,
    FileText,
    Download,
    CheckCircle,
    Building2,
    TrendingUp,
    TrendingDown,
} from "lucide-react";
import { financialData } from "../types/financial.types";
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// ── Color palette (brand only) ────────────────────────────────────────────────
const C = {
    mustard: "#BF9903",
    blue: "#0F1249",
    gold: "#E5C84A",
};

// ── Data ──────────────────────────────────────────────────────────────────────
const cartera = [
    { name: "Créditos recuperados", value: 41.09, color: C.mustard },
    { name: "Cartera vigente", value: 58.91, color: C.blue },
];

const resultados = [
    { concepto: "Superávit", monto: 3.58 },
    { concepto: "FEDERURAL", monto: 7.88 },
    { concepto: "Inversión PF", monto: 2.63 },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const fmtPercent = (v: number) => `${v.toFixed(2)}%`;

const fmtShort = (v: number) => `${v}%`;

const fmtBasic = (v: number) =>
    new Intl.NumberFormat("es-GT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(v);

// ── Custom tooltips ───────────────────────────────────────────────────────────
const PieTooltip = ({
    active,
    payload,
}: {
    active?: boolean;
    payload?: { name: string; value: number }[];
}) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-brand-blue text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-brand-mustard/30">
            <p className="font-bold text-brand-mustard mb-0.5">{payload[0].name}</p>
            <p>{fmtPercent(payload[0].value)}</p>
        </div>
    );
};

const BarTooltip = ({
    active,
    payload,
    label,
}: {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
}) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-brand-blue text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-brand-mustard/30">
            <p className="font-bold text-brand-mustard mb-0.5">{label}</p>
            <p>{fmtPercent(payload[0].value)}</p>
        </div>
    );
};

// ── Component ─────────────────────────────────────────────────────────────────
export const FinancialSummary = () => {
    const handleDownload = (docName: string) => {
        alert(`📄 "${docName}" estará disponible próximamente.\n\nPuede solicitarlo en nuestras oficinas.`);
    };

    return (
        <section className="min-h-screen bg-brand-blue pt-18 pb-6 px-4">
            <div className="container mx-auto max-w-5xl">

                {/* ── Header ───────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <Building2 size={40} className="mx-auto text-brand-mustard mb-3" />
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Transparencia
                    </h1>
                    <p className="text-white/70 text-base max-w-2xl mx-auto">
                        Transparencia y compromiso con nuestros asociados
                    </p>
                    <div className="w-20 h-1 bg-brand-mustard mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* ── KPI Cards ────────────────────────────────────────────── */}
                <div className="grid gap-6 md:grid-cols-3 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="bg-brand-mustard rounded-2xl p-6 shadow-xl transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg">
                                <TrendingUp className="text-brand-blue" size={28} />
                            </div>
                            <span className="text-xs text-brand-blue/60 font-bold">2025</span>
                        </div>
                        <p className="text-sm text-brand-blue/80 font-bold mb-1">Ingresos Totales</p>
                        <p className="text-2xl md:text-3xl font-black text-brand-blue">
                            {fmtBasic(financialData.totalIncome)}%
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-brand-mustard rounded-2xl p-6 shadow-xl transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg">
                                <TrendingDown className="text-brand-blue" size={28} />
                            </div>
                            <span className="text-xs text-brand-blue/60 font-bold">2025</span>
                        </div>
                        <p className="text-sm text-brand-blue/80 font-bold mb-1">Egresos Totales</p>
                        <p className="text-2xl md:text-3xl font-black text-brand-blue">
                            {fmtBasic(financialData.totalExpenses)}%
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-brand-mustard rounded-2xl p-6 shadow-xl transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg">
                                <DollarSign className="text-brand-blue" size={28} />
                            </div>
                            <span className="text-xs text-brand-blue/60 font-bold">Superávit</span>
                        </div>
                        <p className="text-sm text-brand-blue/80 font-bold mb-1">Resultado del Ejercicio</p>
                        <p className="text-2xl md:text-3xl font-black text-brand-blue">
                            {fmtBasic(financialData.netResult)}%
                        </p>
                    </motion.div>
                </div>

                {/* ── Period info ───────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    className="bg-brand-mustard rounded-2xl p-6 shadow-xl mb-6"
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start gap-3">
                            <Calendar size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="text-brand-blue font-black mb-0.5 text-sm">Período</h3>
                                <p className="text-brand-blue/80 font-medium text-sm">{financialData.period}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="text-brand-blue font-black mb-0.5 text-sm">Registro</h3>
                                <p className="text-brand-blue/80 font-medium text-xs">No. {financialData.registrationNumber}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Charts row 1 ─────────────────────────────────────────── */}
                <div className="flex justify-center mb-6">

                    {/* CarteraChart — Donut */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-2xl"
                    >
                        <h3 className="text-brand-blue font-black text-base uppercase tracking-tight mb-4">
                            Cartera de Crédito 2025
                        </h3>
                        <div className="relative">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={cartera}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={55}
                                        outerRadius={80}
                                        paddingAngle={3}
                                        dataKey="value"
                                    >
                                        {cartera.map((entry, i) => (
                                            <Cell key={`c-${i}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip content={<PieTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                            {/* Center label */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-[10px] font-bold text-brand-blue/50 uppercase tracking-wider">Total</span>
                                <span className="text-sm font-black text-brand-blue leading-tight">100%</span>
                            </div>
                        </div>
                        {/* Legend */}
                        <ul className="mt-3 space-y-1.5">
                            {cartera.map((d, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-brand-blue/80">
                                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: d.color }} />
                                    <span className="font-medium">{d.name}</span>
                                    <span className="ml-auto font-black text-brand-blue">{fmtPercent(d.value)}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-[10px] text-brand-blue/40 mt-2 text-right font-semibold">
                            Total: 100%
                        </p>
                    </motion.div>
                </div>

                {/* ── ResultadosChart — Bar ─────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-2xl mb-6"
                >
                    <h3 className="text-brand-blue font-black text-base uppercase tracking-tight mb-4">
                        Indicadores Financieros 2025
                    </h3>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={resultados} margin={{ top: 4, right: 10, left: 10, bottom: 4 }}>
                            <defs>
                                <linearGradient id="barVertGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor={C.mustard} />
                                    <stop offset="100%" stopColor={C.blue} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#0F124910" vertical={false} />
                            <XAxis
                                dataKey="concepto"
                                tick={{ fill: "#0F1249", fontSize: 11, fontWeight: 700 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis
                                tickFormatter={fmtShort}
                                tick={{ fill: "#0F124980", fontSize: 10 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip content={<BarTooltip />} />
                            <Bar dataKey="monto" fill="url(#barVertGrad)" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* ── Documentos descargables ───────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-white font-black text-lg uppercase tracking-tight mb-4 flex items-center gap-2">
                        <FileText size={20} className="text-brand-mustard" />
                        Documentos Oficiales
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Informe Consejo de Administración 2025",
                                responsible: "Santa Isabela López Raymundo de Ramírez",
                                date: "30 de enero de 2026",
                            },
                            {
                                title: "Informe Comité de Crédito 2025",
                                responsible: "María Santiago Ceto de Sánchez",
                                date: "17 de febrero de 2026",
                            },
                        ].map((doc, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-5 shadow-xl hover:shadow-2xl border-brand-mustard/20 transition-all flex flex-col gap-3 border"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-brand-mustard/10 rounded-lg flex-shrink-0 mt-0.5">
                                        <FileText size={18} className="text-brand-mustard" />
                                    </div>
                                    <div>
                                        <p className="text-brand-blue font-bold text-sm leading-snug">{doc.title}</p>
                                        <p className="text-brand-blue/60 text-xs mt-1 font-medium">{doc.responsible}</p>
                                        <p className="text-brand-mustard font-bold text-[10px] mt-0.5 uppercase tracking-wider">{doc.date}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDownload(doc.title)}
                                    className="w-full flex items-center justify-center gap-2 bg-brand-mustard hover:bg-brand-mustard/80 text-white font-bold py-2.5 rounded-xl text-sm transition-all active:scale-95 shadow-lg"
                                >
                                    <Download size={15} />
                                    Descargar PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Footer note ───────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 pt-8 border-t border-white/10 text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                        <FileText size={14} />
                        <span>Para información más detallada, consulte el documento oficial</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
