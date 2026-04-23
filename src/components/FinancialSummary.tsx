import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  FileText, 
  Download,
  CheckCircle,
  Building2
} from "lucide-react";
import { financialData } from "../types/financial.types";

export const FinancialSummary = () => {
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("es-GT", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const handleDownloadPDF = () => {
    // Simular descarga - cuando tengas el PDF real, reemplazar con:
    // window.open('/estados-financieros-2025.pdf', '_blank');
    alert("📄 El documento oficial en PDF estará disponible próximamente.\n\nPuede solicitarlo en nuestras oficinas.");
  };

  return (
    <section className="min-h-[85vh] bg-brand-blue py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Building2 size={40} className="mx-auto text-brand-mustard mb-3" />
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-3">
            Transparencia
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Transparencia y compromiso con nuestros asociados
          </p>
          <div className="w-20 h-1 bg-brand-mustard mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Tarjetas de KPIs */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <TrendingUp className="text-green-400" size={28} />
              </div>
              <span className="text-xs text-white/40">2025</span>
            </div>
            <p className="text-sm text-white/60 mb-1">Ingresos Totales</p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              Q {formatCurrency(financialData.totalIncome)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-red-400/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <TrendingDown className="text-red-400" size={28} />
              </div>
              <span className="text-xs text-white/40">2025</span>
            </div>
            <p className="text-sm text-white/60 mb-1">Egresos Totales</p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              Q {formatCurrency(financialData.totalExpenses)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-brand-mustard/10 backdrop-blur-sm rounded-2xl p-6 border border-brand-mustard/30 hover:border-brand-mustard/60 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-brand-mustard/20 rounded-lg">
                <DollarSign className="text-brand-mustard" size={28} />
              </div>
              <span className="text-xs text-white/40">Utilidad</span>
            </div>
            <p className="text-sm text-white/60 mb-1">Resultado del Ejercicio</p>
            <p className="text-2xl md:text-3xl font-bold text-brand-mustard">
              Q {formatCurrency(financialData.netResult)}
            </p>
          </motion.div>
        </div>

        {/* Información detallada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <Calendar size={22} className="text-brand-mustard mt-0.5" />
              <div>
                <h3 className="text-white font-semibold mb-1">Período</h3>
                <p className="text-white/70 text-sm">{financialData.period}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={22} className="text-brand-mustard mt-0.5" />
              <div>
                <h3 className="text-white font-semibold mb-1">Certificación</h3>
                {financialData.certifiedBy && (
                  <p className="text-white/70 text-sm">{financialData.certifiedBy}</p>
                )}
                <p className="text-white/40 text-xs mt-1">
                  Registro No. {financialData.registrationNumber}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Botón de descarga */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-3 bg-brand-mustard hover:bg-brand-mustard/80 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Descargar Estados Financieros (PDF)
          </button>
          <p className="text-white/40 text-xs mt-4">
            Documento oficial certificado por Perito Contador
          </p>
        </motion.div>

        {/* Nota de transparencia */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
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
