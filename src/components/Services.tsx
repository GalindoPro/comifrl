import { motion } from "framer-motion";
import { PiggyBank, Wallet, Home, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

const services = [
    {
        icon: <PiggyBank className="w-10 h-10" />,
        title: "Cuentas de Ahorro",
        subtitle: "Tu dinero seguro, creciendo contigo",
        description: "",
        benefits: [
            "Ahorro a Plazo Fijo: 14%",
            "Ahorro Programado: 10.5%",
            "Ahorro Corriente: 7%",
            "Ahorro Infanto-Infantil: 7%",
        ],
        color: "bg-brand-mustard text-brand-blue shadow-brand-mustard/20",
        iconColor: "text-brand-blue",
        buttonText: "Abrir cuenta",
        buttonColor: "bg-brand-blue hover:bg-brand-blue/80 text-white",
        delay: 0,
    },
    {
        icon: <Wallet className="w-10 h-10" />,
        title: "Crédito Fiduciario",
        subtitle: "Financiamiento flexible",
        description: "Apoyo inmediato para tus proyectos personales y familiares.",
        benefits: [
            "Atención inmediata",
            "Plazos flexibles hasta 60 meses",
            "Aprobación rápida",
            "Sin penalización por pago",
        ],
        color: "bg-white text-brand-blue border-b border-gray-100",
        iconColor: "text-brand-mustard",
        buttonText: "Solicitar crédito",
        buttonColor: "bg-brand-mustard hover:bg-brand-mustard/90 text-white",
        delay: 0.1,
    },
    {
        icon: <Home className="w-10 h-10" />,
        title: "Crédito Hipotecario",
        subtitle: "Tu casa, tu futuro",
        description: "Haz realidad el sueño de tu hogar con nuestro financiamiento.",
        benefits: [
            "Financiamiento hasta el 80%",
            "Plazos hasta 6-15 años mayor = Q.500,000.00",
            "Tasas competitivas",
            "Asesoría personalizada",
        ],
        color: "bg-white text-brand-blue border-b border-gray-100",
        iconColor: "text-brand-mustard",
        buttonText: "Solicitar crédito",
        buttonColor: "bg-brand-mustard hover:bg-brand-mustard/90 text-white",
        delay: 0.2,
    },
];

const tasas = [
    { producto: "Ahorro Programado", tasa: 10.5, crecimiento: "+12%" },
    { producto: "Ahorro Corriente", tasa: 7.0, crecimiento: "+9%" },
    { producto: "Ahorro Infanto-Infantil", tasa: 7.0, crecimiento: "+7%" },
    { producto: "Ahorro Plazo Fijo", tasa: 14.0, crecimiento: "+46%" },
];

const CustomTooltipTasas = ({
    active,
    payload,
    label,
}: {
    active?: boolean;
    payload?: { value: number; payload: any }[];
    label?: string;
}) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-brand-blue text-white px-3 py-2 rounded-lg shadow-xl text-xs font-bold border border-brand-mustard/40">
                <p className="mb-0.5 text-white/70">{label}</p>
                <div className="flex flex-col gap-0.5">
                    <p className="text-brand-mustard">Interés: {payload[0].value}% anual</p>
                    <p className="text-white">Crecimiento: <span className="text-green-400">{data.crecimiento}</span></p>
                </div>
            </div>
        );
    }
    return null;
};

export function Services() {
    return (
        <div className="flex flex-col">
            <section id="servicios" className="pt-24 md:pt-32 pb-4 bg-brand-blue overflow-hidden relative">
                <div className="absolute top-0 left-0 w-80 h-80 bg-brand-mustard/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-4 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tighter"
                        >
                            Nuestros <span className="text-brand-mustard">Servicios</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-sm md:text-base text-white/70 font-medium"
                        >
                            Soluciones financieras para tu familia y comunidad.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pt-4 pb-4 bg-brand-blue relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: service.delay, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                            >
                                {/* Card Header */}
                                <div
                                    className={`p-3 ${service.color} transition-colors duration-300 relative overflow-hidden flex items-center gap-3`}
                                >
                                    <div
                                        className={`p-2 bg-white/20 backdrop-blur-md rounded-lg shadow-lg ${service.iconColor} border border-white/20`}
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-base font-bold leading-tight">{service.title}</h3>
                                        {service.subtitle && (
                                            <p className="text-[10px] font-medium opacity-90">{service.subtitle}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-3 md:p-4 flex-grow flex flex-col bg-white">
                                    {service.description && (
                                        <p className="text-brand-blue/80 mb-3 text-[11px] md:text-xs font-semibold leading-tight">
                                            {service.description}
                                        </p>
                                    )}
                                    <ul className="space-y-1.5 mb-4 flex-grow">
                                        {service.benefits.map((benefit, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-brand-blue/90 w-full"
                                            >
                                                <CheckCircle2
                                                    className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${service.iconColor}`}
                                                />
                                                <div className="flex justify-between items-start w-full gap-2">
                                                    <span className="text-[11px] font-bold tracking-tight leading-tight">
                                                        {benefit.includes(":") ? benefit.split(":")[0] + ":" : benefit}
                                                    </span>
                                                    {benefit.includes(":") && (
                                                        <span className="text-[11px] font-black text-brand-mustard whitespace-nowrap">
                                                            {benefit.split(":")[1].trim()}
                                                        </span>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="https://wa.me/50257481463"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full py-2 rounded-lg font-black flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-lg text-[10px] uppercase tracking-widest ${service.buttonColor}`}
                                    >
                                        {service.buttonText}
                                        <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tasas Chart Section */}
            <section className="pt-4 pb-4 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-brand-mustard/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-3"
                        >
                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-1">
                                Tasas de{" "}
                                <span className="text-brand-mustard">Interés 2025</span>
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-xl p-3 md:p-4 shadow-2xl"
                        >
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart
                                    layout="vertical"
                                    data={tasas}
                                    margin={{ top: 4, right: 40, left: 10, bottom: 4 }}
                                >
                                    <defs>
                                        <linearGradient
                                            id="tasaGradient"
                                            x1="0"
                                            y1="0"
                                            x2="1"
                                            y2="0"
                                        >
                                            <stop offset="0%" stopColor="#0F1249" />
                                            <stop offset="100%" stopColor="#BF9903" />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#0F124910"
                                        horizontal={false}
                                    />
                                    <XAxis
                                        type="number"
                                        domain={[0, 30]}
                                        ticks={[0, 8, 16, 24, 30]}
                                        tickFormatter={(v) => `${v}%`}
                                        tick={{
                                            fill: "#0F124980",
                                            fontSize: 11,
                                            fontWeight: 600,
                                        }}
                                        axisLine={{ stroke: "#0F124920" }}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        type="category"
                                        dataKey="producto"
                                        width={140}
                                        tick={{
                                            fill: "#0F1249",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            textAnchor: "start",
                                        }}
                                        dx={-135}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip content={<CustomTooltipTasas />} />
                                    <Bar
                                        dataKey="tasa"
                                        radius={[0, 6, 6, 0]}
                                        fill="url(#tasaGradient)"
                                    >
                                        {tasas.map((_, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill="url(#tasaGradient)"
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </motion.div>

                        {/* Growth Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-2 justify-center mt-3"
                        >
                            <div className="flex items-center gap-2 bg-white shadow-xl px-3 py-1.5 rounded-lg border border-gray-100">
                                <TrendingUp className="w-3 h-3 text-brand-mustard flex-shrink-0" />
                                <span className="text-brand-blue font-bold text-[10px]">
                                    Depósito a Plazo Fijo creció{" "}
                                    <span className="text-brand-mustard font-black">+46%</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-2 bg-white shadow-xl px-3 py-1.5 rounded-lg border border-gray-100">
                                <TrendingUp className="w-3 h-3 text-brand-mustard flex-shrink-0" />
                                <span className="text-brand-blue font-bold text-[10px]">
                                    Ahorro Corriente creció{" "}
                                    <span className="text-brand-mustard font-black">+9%</span>
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
