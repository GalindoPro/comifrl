import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight, ChevronLeft, Percent, Table as TableIcon, RefreshCw } from "lucide-react";
import { cn } from "../lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

type CalculatorType = 'selection' | 'loan' | 'investment';

export function Quote() {
    const location = useLocation();
    const navigate = useNavigate();
    const [view, setView] = useState<CalculatorType>((location.state as any)?.initialView || 'selection');

    useEffect(() => {
        if ((location.state as any)?.initialView) {
            setView((location.state as any).initialView);
        }
    }, [location]);

    const handleBack = () => {
        if ((location.state as any)?.fromHome) {
            navigate('/');
        } else {
            setView('selection');
        }
    };

    return (
        <div className="flex flex-col">
            {/* Header Section */}
            <section className="pt-10 pb-4 md:pt-14 md:pb-6 bg-brand-blue relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-mustard/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4 text-center">
                    <motion.h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                        Simulador <span className="text-brand-mustard">Financiero</span>
                    </motion.h2>
                    <motion.p className="text-lg text-white/70 font-medium max-w-2xl mx-auto">
                        Simula tus proyectos con nuestras tasas competitivas y transparentes.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-mustard mx-auto mt-6 rounded-full"
                    />
                </div>
            </section>

            {/* Main Interactive Section */}
            <section className="pt-16 pb-4 md:pt-18 pb-6 bg-brand-blue relative overflow-hidden flex-grow">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                <div className="container mx-auto px-4">
                    <AnimatePresence mode="wait">
                        {view === 'selection' && (
                            <motion.div
                                key="selection"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                {/* Selection Grid */}
                                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {/* Card 1: Proyección de Pagos */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setView('loan')}
                                    className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 cursor-pointer group relative overflow-hidden hover:border-brand-mustard/50 transition-all duration-500"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all text-brand-blue">
                                        <TableIcon className="w-32 h-32" />
                                    </div>
                                    <div className="bg-brand-mustard w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-brand-blue shadow-lg shadow-brand-mustard/20">
                                        <Calculator className="w-9 h-9" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-brand-blue mb-4 uppercase tracking-tighter">
                                        Proyección de Pagos
                                    </h3>
                                    <p className="text-brand-blue/60 mb-6 text-base font-medium leading-relaxed italic">
                                        Simula un préstamo con tasa del 24% anual y genera tu tabla de amortización detallada.
                                    </p>
                                    <div className="flex items-center gap-3 text-brand-mustard font-black uppercase text-xs tracking-[0.2em]">
                                        Generar Tabla <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </motion.div>

                                {/* Card 2: Interés Plazo Fijo */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setView('investment')}
                                    className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 cursor-pointer group relative overflow-hidden hover:border-brand-mustard/50 transition-all duration-500"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all text-brand-blue">
                                        <TrendingUp className="w-32 h-32" />
                                    </div>
                                    <div className="bg-brand-mustard w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-brand-blue shadow-lg shadow-brand-mustard/20">
                                        <TrendingUp className="w-9 h-9" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-brand-blue mb-4 uppercase tracking-tighter">
                                        Inversión Plazo Fijo
                                    </h3>
                                    <p className="text-brand-blue/60 mb-6 text-base font-medium leading-relaxed italic">
                                        Calcula tu rendimiento con un 14% de interés anual garantizado para tu capital.
                                    </p>
                                    <div className="flex items-center gap-3 text-brand-mustard font-black uppercase text-xs tracking-[0.2em]">
                                        Calcular Rendimiento <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {view === 'loan' && (
                        <LoanCalculator onBack={handleBack} />
                    )}

                    {view === 'investment' && (
                        <InvestmentCalculator onBack={handleBack} />
                    )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}

function LoanCalculator({ onBack }: { onBack: () => void }) {
    const [amount, setAmount] = useState<number | ''>('');
    const [years, setYears] = useState<number | ''>('');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [isCalculated, setIsCalculated] = useState(false);

    // Fixed rate as requested
    const FIXED_RATE = 24;

    const handleCalculate = () => {
        if (amount && years) {
            setIsCalculated(true);
        }
    };

    const calculateAmortization = () => {
        if (!amount || !years) return [];

        const schedule = [];
        let balance = Number(amount);
        const totalPayments = Number(years) * 12;
        // Fixed capital payment rounded down to match typical spreadsheet logic
        const monthlyPrincipal = Math.floor((balance / totalPayments) * 100) / 100;
        const currentDate = new Date(startDate);

        schedule.push({
            no: 0,
            initDate: '',
            date: currentDate.toLocaleDateString('es-GT'),
            payment: 0,
            interest: 0,
            principal: 0,
            balance: balance,
            days: 0
        });

        for (let i = 1; i <= totalPayments; i++) {
            const prevDateStr = currentDate.toLocaleDateString('es-GT');
            const prevDate = new Date(currentDate);
            currentDate.setMonth(currentDate.getMonth() + 1);

            const diffTime = Math.abs(currentDate.getTime() - prevDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Formula: (Balance * Rate * Days) / 365
            const interest = Math.round((balance * (FIXED_RATE / 100) * diffDays) / 365 * 100) / 100;
            const principal = i === totalPayments ? balance : monthlyPrincipal;
            const payment = Math.round((principal + interest) * 100) / 100;

            const nextBalance = Math.round((balance - principal) * 100) / 100;

            schedule.push({
                no: i,
                initDate: prevDateStr,
                date: currentDate.toLocaleDateString('es-GT'),
                payment: payment,
                interest: interest,
                principal: principal,
                balance: Math.max(0, nextBalance),
                days: diffDays
            });
            balance = nextBalance;
        }
        return schedule;
    };

    const schedule = calculateAmortization();

    return (
        <motion.div
            key="loan"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-6xl mx-auto"
        >
            <button onClick={onBack} className="flex items-center gap-2 text-white font-bold mb-6 hover:translate-x-1 transition-transform uppercase text-xs bg-white/10 px-4 py-2 rounded-xl w-fit">
                <ChevronLeft className="w-4 h-4" /> Volver a selección
            </button>

            <div className="grid lg:grid-cols-4 gap-6">
                {/* Inputs Sidebar */}
                <div className="lg:col-span-1 space-y-2 md:space-y-4">
                    <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-4 md:mb-8 text-brand-blue border-b border-gray-100 pb-2 md:pb-4">
                            <h3 className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-mustard">Ingreso de Datos</h3>
                        </div>
                        <div className="space-y-3 md:space-y-6">
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1.5 tracking-widest">Fecha de Inicio</label>
                                <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setIsCalculated(false); }} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 font-bold text-brand-blue text-xs md:text-sm focus:ring-2 focus:ring-brand-mustard outline-none transition-all shadow-inner" />
                            </div>
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1.5 tracking-widest">Monto solicitado (Q)</label>
                                <input placeholder="50000" type="number" min="0" value={amount} onChange={(e) => { setAmount(e.target.value === '' ? '' : Math.max(0, Number(e.target.value))); setIsCalculated(false); }} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 font-bold text-brand-blue text-xs md:text-sm focus:ring-2 focus:ring-brand-mustard outline-none transition-all shadow-inner" />
                            </div>
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1.5 tracking-widest">Plazo del Crédito (Años)</label>
                                <input placeholder="1" type="number" min="0" value={years} onChange={(e) => { setYears(e.target.value === '' ? '' : Math.max(0, Number(e.target.value))); setIsCalculated(false); }} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 font-bold text-brand-blue text-xs md:text-sm focus:ring-2 focus:ring-brand-mustard outline-none transition-all shadow-inner" />
                            </div>
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black text-brand-blue/30 uppercase mb-1 tracking-widest">Tasa Anual (Fija)</label>
                                <div className="w-full bg-brand-blue/5 border border-brand-blue/10 rounded-xl p-2.5 md:p-4 font-black text-brand-blue text-xs md:text-sm flex items-center justify-between">
                                    <span>{FIXED_RATE}%</span>
                                    <Percent className="w-3 h-3 md:w-4 md:h-4 text-brand-mustard opacity-60" />
                                </div>
                            </div>
                            <div className="relative pt-1">
                                <label className="block text-[9px] md:text-[10px] font-black text-brand-blue/30 uppercase mb-1.5 tracking-widest text-nowrap">Cuotas Estimadas</label>
                                <div className="w-full bg-brand-mustard text-brand-blue rounded-xl p-3 md:p-4 font-black text-xs md:text-sm shadow-lg">
                                    {years ? Number(years) * 12 : 0} Cuotas Mensuales
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                disabled={!amount || !years}
                                className="w-full py-3 md:py-4 bg-brand-mustard text-white rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest shadow-lg hover:bg-brand-mustard/90 disabled:opacity-50 disabled:grayscale transition-all mt-4 md:mt-6 flex items-center justify-center gap-2"
                            >
                                <RefreshCw className={cn("w-3.5 h-3.5 md:w-4 md:h-4", isCalculated ? "animate-spin-once" : "")} />
                                Generar Proyección
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-3">
                    <AnimatePresence mode="wait">
                        {!isCalculated ? (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full min-h-[500px] bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center"
                                >
                                    <div className="bg-brand-mustard/10 w-24 h-24 rounded-full flex items-center justify-center mb-8">
                                        <TableIcon className="w-12 h-12 text-brand-blue/20" />
                                    </div>
                                    <h4 className="text-2xl font-black text-brand-blue mb-3 uppercase tracking-tighter leading-none">Tabla de Proyección</h4>
                                    <p className="text-brand-blue/40 text-sm max-w-sm leading-relaxed uppercase font-black text-[10px] tracking-[0.2em]">
                                        Ingresa el monto y el plazo deseado para generar tu plan de pagos personalizado.
                                    </p>
                                </motion.div>
                        ) : (
                            <motion.div
                                key="table"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-3"
                            >
                                {/* Summary Metrics */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                                    <div className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-gray-100">
                                        <p className="text-[8px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1 tracking-widest">Cuotas Totales</p>
                                        <p className="text-base md:text-2xl font-black text-brand-blue">{Number(years) * 12}</p>
                                    </div>
                                    <div className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-gray-100">
                                        <p className="text-[8px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1 tracking-widest">Cuota Capital</p>
                                        <p className="text-base md:text-2xl font-black text-brand-blue">Q {(Number(amount) / (Number(years) * 12)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                    <div className="bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-gray-100">
                                        <p className="text-[8px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1 tracking-widest">Interés Total</p>
                                        <p className="text-base md:text-2xl font-black text-red-500">Q {schedule.reduce((acc, row) => acc + row.interest, 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                    <div className="bg-brand-mustard p-3 md:p-6 rounded-xl md:rounded-2xl shadow-2xl shadow-brand-mustard/20">
                                        <p className="text-[8px] md:text-[10px] font-black text-brand-blue/60 uppercase mb-1 tracking-widest">Total Estimado</p>
                                        <p className="text-base md:text-2xl font-black text-brand-blue">Q {(Number(amount) + schedule.reduce((acc, row) => acc + row.interest, 0)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl md:rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
                                    <div className="px-4 py-3 md:px-8 md:py-6 bg-gray-50 text-brand-blue flex justify-between items-center border-b border-gray-100">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-mustard rounded-full animate-pulse shadow-glow" />
                                            <h3 className="font-black uppercase tracking-[0.2em] text-[9px] md:text-xs">Tabla de Proyección Detallada</h3>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto max-h-[70vh] overflow-y-auto custom-scrollbar">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="sticky top-0 bg-white z-20 border-b border-gray-200 shadow-sm">
                                                <tr>
                                                    <th className="px-3 py-2 md:px-4 md:py-3 text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Pago No.</th>
                                                    <th className="px-3 py-2 md:px-4 md:py-3 text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Fecha</th>
                                                    <th className="px-3 py-2 md:px-4 md:py-3 text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Pago Mensual</th>
                                                    <th className="px-3 py-2 md:px-4 md:py-3 text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Intereses</th>
                                                    <th className="px-3 py-2 md:px-4 md:py-3 text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Capital</th>
                                                    <th className="px-3 py-2 md:px-4 md:py-3 text-[9px] md:text-[10px] font-black text-brand-mustard uppercase text-center bg-brand-blue/5 border-l border-gray-100">Saldo Actual</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {schedule.map((row) => (
                                                    <tr key={row.no} className={cn("hover:bg-brand-blue/5 transition-all group border-b border-gray-100 last:border-0", row.no === 0 && "bg-brand-mustard/10")}>
                                                        <td className="px-1.5 py-1 md:px-4 md:py-2 text-[8px] md:text-[11px] font-bold text-brand-blue/40 text-center">{row.no}</td>
                                                        <td className="px-1.5 py-1 md:px-4 md:py-2 text-[8px] md:text-[11px] font-black text-brand-blue text-center">{row.date}</td>
                                                        <td className="px-1.5 py-1 md:px-4 md:py-2 text-[8px] md:text-[11px] font-black text-brand-blue text-center">
                                                            {row.no > 0 ? `Q ${row.payment.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                        </td>
                                                        <td className="px-1.5 py-1 md:px-4 md:py-2 text-[8px] md:text-[11px] font-bold text-red-500/80 text-center">
                                                            {row.no > 0 ? `- Q ${row.interest.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                        </td>
                                                        <td className="px-1.5 py-1 md:px-4 md:py-2 text-[8px] md:text-[11px] font-bold text-brand-blue/60 text-center">
                                                            {row.no > 0 ? `Q ${row.principal.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                        </td>
                                                        <td className="px-1.5 py-1 md:px-4 md:py-2 text-[9px] md:text-[12px] font-black text-brand-mustard text-center bg-brand-blue/5 border-l border-gray-100 group-hover:bg-brand-mustard/10 transition-colors">
                                                            Q {row.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

function InvestmentCalculator({ onBack }: { onBack: () => void }) {
    const [amount, setAmount] = useState<number | ''>('');
    const [months, setMonths] = useState<number | ''>('');
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
    const [isCalculated, setIsCalculated] = useState(false);

    const FIXED_RATE = 14;

    const handleCalculate = () => {
        if (amount && months) {
            setIsCalculated(true);
        }
    };

    const dueDate = new Date(startDate);
    if (months) dueDate.setMonth(dueDate.getMonth() + Number(months));

    const grossInterest = amount && months ? Number(amount) * (FIXED_RATE / 100) * (Number(months) / 12) : 0;
    const tax = grossInterest * 0.10;
    const netInterest = grossInterest - tax;

    return (
        <motion.div
            key="investment"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="max-w-6xl mx-auto"
        >
            <button onClick={onBack} className="flex items-center gap-2 text-white font-bold mb-6 hover:translate-x-1 transition-transform uppercase text-xs bg-white/10 px-4 py-2 rounded-xl w-fit">
                <ChevronLeft className="w-4 h-4" /> Volver a selección
            </button>

            <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 space-y-2 md:space-y-4">
                    <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-gray-100">
                        <h3 className="text-[9px] md:text-xs font-black text-brand-mustard mb-4 md:mb-8 uppercase tracking-[0.2em] border-b border-gray-100 pb-2 md:pb-4">Plan de Inversión</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1.5 tracking-widest">Capital (Q)</label>
                                <input placeholder="500000" type="number" min="0" value={amount} onChange={(e) => { setAmount(e.target.value === '' ? '' : Math.max(0, Number(e.target.value))); setIsCalculated(false); }} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 font-bold text-brand-blue text-xs md:text-sm focus:ring-2 focus:ring-brand-mustard outline-none transition-all shadow-inner" />
                            </div>
                            <div>
                                <label className="block text-[9px] md:text-[10px] font-black text-brand-blue/40 uppercase mb-1.5 tracking-widest">Plazo (Meses)</label>
                                <input placeholder="12" type="number" min="0" max="100" value={months} onChange={(e) => { setMonths(e.target.value === '' ? '' : Math.min(100, Math.max(0, Number(e.target.value)))); setIsCalculated(false); }} className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 font-bold text-brand-blue text-xs md:text-sm focus:ring-2 focus:ring-brand-mustard outline-none transition-all shadow-inner" />
                                <p className="text-[8px] text-brand-blue/30 mt-1 uppercase font-black italic">* Máximo 100 meses</p>
                            </div>
                            <div className="pt-1 md:pt-2">
                                <label className="block text-[9px] md:text-[10px] font-black text-white/30 uppercase mb-1.5 md:mb-3 tracking-widest">Tasa Anual Garantizada</label>
                                <div className="w-full bg-brand-mustard/10 border border-brand-mustard/30 rounded-xl p-3 md:p-4 font-black text-brand-mustard text-base md:text-lg flex items-center justify-between shadow-glow-sm">
                                    <span>{FIXED_RATE}%</span>
                                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 opacity-60" />
                                </div>
                            </div>

                            <button
                                onClick={handleCalculate}
                                disabled={!amount || !months}
                                className="w-full py-3 md:py-4 bg-brand-blue text-white rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest shadow-lg hover:bg-brand-blue/80 disabled:opacity-50 transition-all mt-3 md:mt-4 flex items-center justify-center gap-2"
                            >
                                <RefreshCw className={cn("w-3.5 h-3.5 md:w-4 md:h-4", isCalculated ? "animate-spin-once" : "")} />
                                Calcular Rendimiento
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <AnimatePresence mode="wait">
                        {!isCalculated ? (
                                <motion.div
                                    key="placeholder-inv"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center p-12 text-center"
                                >
                                    <div className="bg-brand-mustard/10 w-24 h-24 rounded-full flex items-center justify-center mb-8">
                                        <TrendingUp className="w-12 h-12 text-brand-blue/20" />
                                    </div>
                                    <h4 className="text-2xl font-black text-brand-blue mb-3 uppercase tracking-tighter leading-none">Proyección de Inversión</h4>
                                    <p className="text-brand-blue/40 text-sm max-w-sm leading-relaxed uppercase font-black text-[10px] tracking-[0.2em]">
                                        Define el capital y el tiempo para visualizar el crecimiento de tus ahorros con nuestra tasa preferencial.
                                    </p>
                                </motion.div>
                        ) : (
                            <motion.div
                                key="results-inv"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-brand-blue text-white p-6 rounded-3xl shadow-xl h-full relative overflow-hidden"
                            >
                                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                                <div className="absolute bottom-10 -left-10 w-32 h-32 bg-brand-mustard/5 rounded-full blur-2xl" />

                                <div className="relative z-10 space-y-4">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-mustard flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-brand-mustard rounded-full" />
                                        Rendimiento e Información
                                    </h3>
                                    
                                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
                                        <div className="bg-white/10 p-2 md:p-3 rounded-xl border border-white/5">
                                            <label className="block text-[7px] md:text-[8px] font-bold text-white/50 uppercase mb-0.5 tracking-widest">Apertura</label>
                                            <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setIsCalculated(false); }} className="bg-transparent border-none p-0 text-white font-black text-[10px] md:text-[11px] w-full focus:ring-0" />
                                        </div>
                                        <div className="bg-white/10 p-2 md:p-3 rounded-xl border border-white/5">
                                            <label className="block text-[7px] md:text-[8px] font-bold text-white/50 uppercase mb-0.5 tracking-widest">Vencimiento</label>
                                            <div className="text-brand-mustard font-black text-[10px] md:text-[11px]">{dueDate.toLocaleDateString()}</div>
                                        </div>
                                        <div className="bg-white/10 p-2 md:p-3 rounded-xl border border-white/5">
                                            <label className="block text-[7px] md:text-[8px] font-bold text-white/50 uppercase mb-0.5 tracking-widest">Int. Bruto</label>
                                            <div className="text-white font-black text-[10px] md:text-[11px]">Q {grossInterest.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                                        </div>
                                        <div className="bg-white/10 p-2 md:p-3 rounded-xl border border-white/5">
                                            <label className="block text-[7px] md:text-[8px] font-bold text-white/50 uppercase mb-0.5 tracking-widest">ISR (10%)</label>
                                            <div className="text-red-400 font-black text-[10px] md:text-[11px]">- Q {tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                                        </div>
                                        <div className="bg-white/10 p-2 md:p-3 rounded-xl border border-white/5">
                                            <label className="block text-[7px] md:text-[8px] font-bold text-white/50 uppercase mb-0.5 tracking-widest">Int. Líquido</label>
                                            <div className="text-brand-mustard font-black text-[10px] md:text-[11px]">Q {netInterest.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                                        </div>
                                    </div>

                                    {/* Detailed Investment Table */}
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                                        <div className="overflow-x-auto max-h-[300px] overflow-y-auto custom-scrollbar">
                                            <table className="w-full text-left border-collapse">
                                                <thead className="sticky top-0 bg-gray-50 z-20 border-b border-gray-100">
                                                    <tr>
                                                        <th className="px-3 py-2 text-[8px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Mes</th>
                                                        <th className="px-3 py-2 text-[8px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Fecha</th>
                                                        <th className="px-3 py-2 text-[8px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Interés Mensual</th>
                                                        <th className="px-3 py-2 text-[8px] font-black text-brand-blue/40 uppercase text-center tracking-widest">Interés Acum.</th>
                                                        <th className="px-3 py-2 text-[8px] font-black text-brand-mustard uppercase text-center bg-brand-blue/5 border-l border-gray-100">Capital</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Array.from({ length: Number(months) + 1 }).map((_, i) => {
                                                        const rowDate = new Date(startDate);
                                                        rowDate.setMonth(rowDate.getMonth() + i);
                                                        const monthlyInt = i === 0 ? 0 : (grossInterest / Number(months));
                                                        const accumInt = i === 0 ? 0 : (monthlyInt * i);
                                                        
                                                        return (
                                                            <tr key={i} className="hover:bg-brand-blue/5 transition-all group border-b border-gray-100 last:border-0">
                                                                <td className="px-3 py-1.5 text-[9px] font-bold text-brand-blue/40 text-center">{i}</td>
                                                                <td className="px-3 py-1.5 text-[9px] font-black text-brand-blue text-center">{rowDate.toLocaleDateString()}</td>
                                                                <td className="px-3 py-1.5 text-[9px] font-bold text-green-600 text-center">
                                                                    {i > 0 ? `Q ${monthlyInt.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                                </td>
                                                                <td className="px-3 py-1.5 text-[9px] font-medium text-brand-blue/60 text-center">
                                                                    {i > 0 ? `Q ${accumInt.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '--'}
                                                                </td>
                                                                <td className="px-3 py-1.5 text-[10px] font-black text-brand-mustard text-center bg-brand-blue/5 border-l border-gray-100">
                                                                    Q {Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
