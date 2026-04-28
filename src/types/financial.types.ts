export interface FinancialKPI {
    id: string;
    label: string;
    value: string;
    description: string;
    icon: string; // Icon name from lucide-react
}

export interface FinancialReport {
    id: string;
    title: string;
    year: number;
    description: string;
    downloadUrl: string;
    fileSize: string;
}

export interface FinancialData {
  totalIncome: number;
  totalExpenses: number;
  netResult: number;
  period: string;
  certifiedBy: string;
  registrationNumber: string;
  certificationDate: string;
  cooperativeName: string;
  nit: string;
  address: string;
}

export const financialData: FinancialData = {
  totalIncome: 100.00,
  totalExpenses: 76.37,
  netResult: 23.63,
  period: "01 de enero al 31 de diciembre de 2025",
  certifiedBy: "",
  registrationNumber: "10661061-9",
  certificationDate: "20 de enero de 2026",
  cooperativeName: "Cooperativa Integral de Ahorro y Crédito 'Maya Inversiones Futuras', R.L.",
  nit: "6270731-0",
  address: "Calle Principal Cantón Vipila, Nebaj Quiché"
};
