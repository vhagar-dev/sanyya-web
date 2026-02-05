import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SanyyaLogo from "./SanyyaLogo";

const Footer = () => (
  <footer className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/50 border-t border-border relative overflow-hidden">
    {/* Subtle gradient orb with magenta/pink */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4 flex flex-col items-center"
      >
        <SanyyaLogo size="lg" />
        <p className="text-muted-foreground text-sm">© 2026 Sanyya Systems, LLC. Architecting Autonomous Commerce.</p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
