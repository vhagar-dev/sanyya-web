import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ArrowRight, Rocket, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import CombinedMatchVisual from "./CombinedMatchVisual";

const LOOPS_FORM_ID = import.meta.env.VITE_LOOPS_FORM_ID || "";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Launch Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-sm text-fuchsia-300 font-medium">
              <Rocket className="w-4 h-4 text-fuchsia-400" />
              <span className="font-mono tabular-nums">Now Accepting Design Partners</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            Intelligent Financial
            <br />
            <motion.span 
              className="gradient-text-aurora inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Reconciliation
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed px-2"
          >
            Semantic <span className="gradient-text-aurora font-semibold">3-way match</span> engine for
            physical industries. We bridge the gap between your PO, Packing Slip, and Invoice using vector embeddings
          </motion.p>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="h-12 md:h-14 px-4 md:px-6 bg-secondary/80 backdrop-blur-sm border-border text-foreground placeholder:text-muted-foreground rounded-full focus:bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all flex-1 shadow-lg text-sm md:text-base disabled:opacity-50"
                />
                <MagneticButton
                  type="submit"
                  disabled={isLoading}
                  className="h-12 md:h-14 px-6 md:px-8 rounded-full bg-gradient-to-r from-glow-magenta to-glow-pink text-white font-semibold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all shine-effect flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
                {error && (
                  <p className="text-red-400 text-sm mt-2 w-full text-center">{error}</p>
                )}
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">You are on the list!</p>
                  <p className="text-sm text-muted-foreground">We will be in touch soon.</p>
                </div>
              </motion.div>
            )}

            {/* Integration Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 md:mt-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-border text-xs md:text-sm text-muted-foreground font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                No migration required. Works alongside your existing stack.
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-20 max-w-4xl mx-auto px-2"
        >
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-fuchsia-500/15 via-pink-500/15 to-emerald-500/15 rounded-2xl md:rounded-3xl blur-2xl" />

            <div className="glass-card p-4 sm:p-6 md:p-8 relative">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 md:ml-4 text-xs md:text-sm text-muted-foreground font-medium">AI Match Engine</span>
              </div>

              <CombinedMatchVisual />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
