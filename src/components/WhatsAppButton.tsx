import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/50257481463"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 2
            }}
            className="fixed bottom-4 right-4 z-[60] bg-brand-blue text-white pl-3 pr-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.4)] border border-white/10 flex items-center gap-2 group backdrop-blur-sm"
            aria-label="WhatsApp"
        >
            <div className="relative">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full border border-white/20 animate-pulse" />
            </div>

            <span className="text-[11px] font-black uppercase tracking-widest">
                Chatea
            </span>
        </motion.a>
    );
}
