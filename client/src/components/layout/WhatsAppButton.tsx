import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/351919977198"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar via WhatsApp"
      data-testid="button-whatsapp-floating"
    >
      <SiWhatsapp className="h-7 w-7" />
      <motion.span
        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ delay: 1.5, duration: 0.3 }}
      />
    </motion.a>
  );
}
