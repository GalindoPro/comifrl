import { motion } from "framer-motion";
import {
    DollarSign,
    Calendar,
    FileText,
    Download,
    CheckCircle,
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
        <section className="bg-brand-blue pt-4 pb-4 px-4" id="transparencia">
            <div className="container mx-auto max-w-5xl">

                {/* ── Header ───────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-4"
                >
                    <h1 className="text-2xl md:text-3xl font-black text-white mb-1 uppercase tracking-tighter">
                        Transparencia <span className="text-brand-mustard">Financiera</span>
                    </h1>
                    <p className="text-white/70 text-xs md:text-sm font-medium">
                        Compromiso y claridad con nuestros asociados.
                    </p>
                </motion.div>

                {/* ── KPI Cards ────────────────────────────────────────────── */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                        { label: "Ingresos", val: financialData.totalIncome, icon: <TrendingUp size={20} /> },
                        { label: "Egresos", val: financialData.totalExpenses, icon: <TrendingDown size={20} /> },
                        { label: "Superávit", val: financialData.netResult, icon: <DollarSign size={20} /> },
                    ].map((kpi, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-brand-mustard rounded-xl p-3 shadow-xl text-brand-blue"
                        >
                            <div className="flex items-center gap-2 mb-1 opacity-60">
                                {kpi.icon}
                                <span className="text-[8px] font-black uppercase tracking-widest">{kpi.label}</span>
                            </div>
                            <p className="text-sm md:text-lg font-black">{fmtBasic(kpi.val)}%</p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Period info ───────────────────────────────────────────── */}
                <div className="bg-brand-mustard/10 border border-brand-mustard/20 rounded-lg p-2 mb-3 flex justify-around text-white/60">
                    <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-brand-mustard" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{financialData.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CheckCircle size={12} className="text-brand-mustard" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">No. {financialData.registrationNumber}</span>
                    </div>
                </div>

                {/* ── Charts row 1 ─────────────────────────────────────────── */}
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                    {/* CarteraChart — Donut */}
                    <div className="bg-white rounded-xl p-3 shadow-2xl">
                        <h3 className="text-brand-blue font-black text-[9px] uppercase tracking-widest mb-2 border-b pb-1">
                            Cartera 2025
                        </h3>
                        <div className="relative h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={cartera} cx="50%" cy="50%" innerRadius={35} outerRadius={55} paddingAngle={2} dataKey="value">
                                        {cartera.map((entry, i) => <Cell key={`c-${i}`} fill={entry.color} />)}
                                    </Pie>
                                    <Tooltip content={<PieTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-[10px] font-black text-brand-blue">100%</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-1 mt-1">
                            {cartera.map((d, i) => (
                                <div key={i} className="flex items-center gap-1 text-[7px] font-black uppercase text-brand-blue/60">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: d.color }} />
                                    <span>{fmtPercent(d.value)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ResultadosChart — Bar */}
                    <div className="bg-white rounded-xl p-3 shadow-2xl">
                        <h3 className="text-brand-blue font-black text-[9px] uppercase tracking-widest mb-2 border-b pb-1">
                            Indicadores 2025
                        </h3>
                        <div className="h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={resultados}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
                                    <XAxis dataKey="concepto" tick={{ fontSize: 7, fontWeight: 900 }} axisLine={false} tickLine={false} />
                                    <YAxis hide />
                                    <Tooltip content={<BarTooltip />} />
                                    <Bar dataKey="monto" fill={C.mustard} radius={[3, 3, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* ── Documentos descargables ───────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-white font-black text-base uppercase tracking-tight mb-2 flex items-center gap-2">
                        <FileText size={16} className="text-brand-mustard" />
                        Documentos Oficiales
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                        {[
                            { title: "Admón. 2025", resp: "S. López", date: "30 ene 26" },
                            { title: "Crédito 2025", resp: "M. Santiago", date: "17 feb 26" },
                        ].map((doc, i) => (
                            <div key={i} className="bg-white rounded-xl p-3 shadow-xl border border-brand-mustard/20 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FileText size={16} className="text-brand-mustard" />
                                    <div>
                                        <p className="text-brand-blue font-black text-[10px] uppercase leading-tight">{doc.title}</p>
                                        <p className="text-brand-blue/50 text-[8px] font-bold uppercase">{doc.resp} · {doc.date}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleDownload(doc.title)} className="p-2 bg-brand-mustard rounded-lg text-white shadow-lg">
                                    <Download size={14} />
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
                    className="mt-6 pt-4 border-t border-white/10 text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-white/40 text-[10px]">
                        <FileText size={12} />
                        <span>Para información más detallada, consulte el documento oficial</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
