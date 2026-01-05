import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ArrowRight, FileText, Package, Receipt, CheckCircle2, Rocket, CheckCircle, FlaskConical } from "lucide-react";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Floating Orbs */}
      <div className="orb w-96 h-96 bg-blue-400/30 top-20 -left-48" />
      <div className="orb w-80 h-80 bg-violet-400/20 top-40 right-0" style={{ animationDelay: "-5s" }} />
      <div className="orb w-64 h-64 bg-cyan-400/20 bottom-20 left-1/4" style={{ animationDelay: "-10s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Launch Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200/50 text-sm text-emerald-700 font-medium shadow-sm">
              <Rocket className="w-4 h-4 text-emerald-500" />
              <span className="font-mono tabular-nums">Launching January 2026</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            Intelligent Financial
            <br />
            <span className="gradient-text-aurora">Reconciliation</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto text-balance leading-relaxed"
          >
            The first semantic <span className="gradient-text-aurora font-semibold">3-way match</span> engine for
            physical industries. We bridge the gap between your PO, Packing Slip, and Invoice using vector embeddings
          </motion.p>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 px-6 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-full focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all flex-1 shadow-lg"
                />
                <MagneticButton
                  type="submit"
                  className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all shine-effect flex items-center justify-center gap-2"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">You are on the list!</p>
                  <p className="text-sm text-slate-500">We will be in touch soon.</p>
                </div>
              </motion.div>
            )}

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                No credit card
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Founding pricing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                No-Touch Onboarding
              </span>
            </div>

            {/* Industry Targeting Chip */}
            <div className="mt-6 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm text-slate-500 transition-colors hover:bg-emerald-50 hover:border-emerald-100 hover:text-emerald-600">
                <FlaskConical className="w-4 h-4 text-emerald-500" />
                Built for Biotech and Hardware Startups
              </span>
            </div>

            {/* Integration Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100/80 backdrop-blur-sm border border-slate-200 text-sm text-slate-600 font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                No migration required. Works alongside your existing stack.
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

            <div className="glass-card p-8 float-up relative">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-sm text-slate-400 font-medium">3-Way Match Engine</span>
              </div>

              {/* Match Diagram */}
              <div className="flex items-center justify-center gap-4 md:gap-8">
                {/* PO */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex flex-col items-center gap-3 float-delayed-1"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 flex items-center justify-center shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                    <FileText className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">PO</span>
                </motion.div>

                {/* Connector Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="h-1 w-8 md:w-16 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full origin-left"
                />

                {/* Packing Slip */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col items-center gap-3 float-delayed-2"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200/50 flex items-center justify-center shadow-lg shadow-violet-500/10 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                    <Package className="w-8 h-8 md:w-10 md:h-10 text-violet-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">Slip</span>
                </motion.div>

                {/* Connector Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="h-1 w-8 md:w-16 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full origin-left"
                />

                {/* Invoice */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex flex-col items-center gap-3 float-delayed-3"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/50 flex items-center justify-center shadow-lg shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105">
                    <Receipt className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">Invoice</span>
                </motion.div>

                {/* Arrow to Verified */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="h-1 w-8 md:w-16 bg-emerald-500 rounded-full origin-left"
                />

                {/* Verified Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-500/40 pulse-soft">
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">Verified</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
