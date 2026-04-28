import { Facebook, Building2, UserPlus, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MessengerIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.47715 2 2 6.13401 2 11.2381C2 14.1205 3.44853 16.6661 5.71963 18.2571V22.1381L9.26425 20.1884C10.1343 20.43 11.051 20.57 12 20.57C17.5228 20.57 22 16.436 22 11.3319C22 6.22778 17.5228 2.09375 12 2.09375V2ZM13.1118 14.2818L10.2526 11.2423L4.65961 14.2818L10.7412 7.82845L13.6288 10.868L19.3404 7.82845L13.1118 14.2818Z" />
    </svg>
);

export function Footer() {
    return (
        <footer className="relative bg-brand-blue text-gray-100 pt-2 pb-1" id="contacto">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-2 border-b border-white/10 pb-2 mt-1">
                    {/* Colon 1: Identidad */}
                    <div className="space-y-1">
                        <h4 className="text-lg md:text-xl font-black text-brand-mustard tracking-tighter uppercase">COMIF, R.L.</h4>
                        <p className="text-[10px] md:text-[11px] text-white/50 font-bold uppercase tracking-widest leading-relaxed max-w-xs">
                            Desde 2008, impulsando el bienestar financiero de nuestra comunidad con honestidad y transparencia.
                        </p>
                    </div>

                    {/* Colon 2: Contacto */}
                    <div className="space-y-2 md:space-y-3">
                        <h4 className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.2em]">Agencia Central</h4>
                        <div className="space-y-1 md:space-y-2">
                            <p className="flex items-start gap-3 text-[11px] md:text-xs text-white/80 font-medium">
                                <Building2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-mustard flex-shrink-0" />
                                Cantón Vipila, Nebaj, Quiché
                            </p>
                            <a href="mailto:comifrl@gmail.com" className="flex items-center gap-3 text-[11px] md:text-xs text-white/80 hover:text-brand-mustard transition-colors font-medium">
                                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-mustard" />
                                comifrl@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Colon 3: Acciones Rápidas */}
                    <div className="space-y-2 md:space-y-3">
                        <h4 className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.2em]">Acciones</h4>
                        <div className="flex flex-row md:flex-col gap-2">
                            <Link
                                to="/afiliacion"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-mustard text-brand-blue px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-brand-mustard/90 transition-all shadow-glow active:scale-95"
                            >
                                <UserPlus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                Hazte socio
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright and Social Media */}
                <div className="pb-1">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        {/* Social Media Icons */}
                        <div className="flex gap-2 order-1">
                            <motion.a
                                href="https://www.facebook.com/share/1CCDUELZy9/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 p-1.5 rounded-full hover:bg-brand-mustard transition-colors text-gray-100 shadow-sm border border-white/5"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="https://m.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 p-1.5 rounded-full hover:bg-brand-mustard transition-colors text-gray-100 shadow-sm border border-white/5"
                                aria-label="Messenger"
                            >
                                <MessengerIcon className="w-4 h-4" />
                            </motion.a>
                        </div>

                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-[10px] text-left order-2"
                        >
                            &copy; 2026 COMIF, R.L. Responsabilidad que construye futuro.
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
