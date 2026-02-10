import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const LOOPS_FORM_ID = "cml42iqn59zzx0i1zmn0qdhzg";

interface WaitlistFormProps {
  variant?: "default" | "compact" | "inline";
  className?: string;
}

const WaitlistForm = ({ variant = "default", className = "" }: WaitlistFormProps) => {
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
      const formBody = `userGroup=Waitlist&mailingLists=&email=${encodeURIComponent(email)}`;
      
      const response = await fetch(
        `https://app.loops.so/api/newsletter-form/${LOOPS_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center justify-center gap-3 ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-foreground text-sm">You're on the list!</p>
          <p className="text-xs text-muted-foreground">We'll be in touch soon.</p>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row sm:gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="h-12 sm:h-11 px-4 bg-secondary/80 backdrop-blur-sm border-border text-foreground placeholder:text-muted-foreground rounded-full focus:bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all sm:flex-1 text-base sm:text-sm disabled:opacity-50 w-full"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="h-12 sm:h-11 px-6 rounded-full bg-gradient-to-r from-glow-magenta to-glow-pink text-white font-semibold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all shine-effect flex items-center justify-center gap-2 text-base sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap w-full sm:w-auto"
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
        </button>
        {error && (
          <p className="text-red-400 text-xs mt-1 w-full text-center sm:absolute sm:bottom-0 sm:left-0 sm:right-0">{error}</p>
        )}
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${className}`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="h-12 px-5 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-full focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all sm:flex-1 text-base sm:text-sm disabled:opacity-50 w-full"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="h-12 px-7 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-base sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap w-full sm:w-auto"
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
          </button>
        </div>
        {error && (
          <p className="text-red-400 text-xs text-center">{error}</p>
        )}
      </form>
    );
  }

  // Default variant
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 sm:flex-row max-w-md mx-auto ${className}`}>
      <Input
        type="email"
        placeholder="Enter your work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading}
        className="h-12 md:h-14 px-4 md:px-6 bg-secondary/80 backdrop-blur-sm border-border text-foreground placeholder:text-muted-foreground rounded-full focus:bg-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all sm:flex-1 shadow-lg text-base sm:text-sm md:text-base disabled:opacity-50 w-full"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="h-12 md:h-14 px-6 md:px-8 rounded-full bg-gradient-to-r from-glow-magenta to-glow-pink text-white font-semibold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all shine-effect flex items-center justify-center gap-2 text-base sm:text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
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
      </button>
      {error && (
        <p className="text-red-400 text-sm mt-2 w-full text-center">{error}</p>
      )}
    </form>
  );
};

export default WaitlistForm;
