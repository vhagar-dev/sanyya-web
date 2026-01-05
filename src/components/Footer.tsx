import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SanyyaLogo from "./SanyyaLogo";

const Footer = () => (
  <footer className="py-16 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200 relative overflow-hidden">
    {/* Subtle gradient orb */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-100/30 to-transparent rounded-full blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4 flex flex-col items-center"
      >
        <SanyyaLogo size="lg" />
        <p className="text-slate-500 text-sm">© 2025 Sanyya Systems. Architecting Intelligent Finance.</p>
        <div className="flex items-center justify-center gap-6 pt-4">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
              {link}
            </a>
          ))}
          <Link to="/pricing" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            Pricing
          </Link>
          <Link to="/security" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            Security
          </Link>
          <a
            href="https://www.linkedin.com/company/sanyya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
