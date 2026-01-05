import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SanyyaLogo from "./SanyyaLogo";
import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToWaitlist = () => {
    const heroSection = document.querySelector('#hero-waitlist');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="fixed top-0 left-0 right-0 z-50 frosted-glass"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="group">
          <SanyyaLogo size="sm" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[{ label: "Architecture", href: "#solution" }, { label: "The Paradox", href: "#problem" }, { label: "ROI", href: "#roi" }].map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
          <Link 
            to="/blog" 
            className="relative text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Blog
          </Link>
          <Button 
            onClick={scrollToWaitlist}
            size="sm"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
