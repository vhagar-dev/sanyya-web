import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Rocket } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const LOOPS_FORM_ID = "cml42iqn59zzx0i1zmn0qdhzg";

const openListeners = new Set<() => void>();

export function openWaitlistDialog() {
  openListeners.forEach((fn) => fn());
}

export function WaitlistDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fn = () => setOpen(true);
    openListeners.add(fn);
    return () => {
      openListeners.delete(fn);
    };
  }, []);

  // Intercept clicks on any <a href="#book-demo"> across the app and open the dialog instead.
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href !== "#book-demo") return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

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
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        },
      );
      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      // Reset state shortly after close so the success/error doesn't flash on reopen
      setTimeout(() => {
        setSubmitted(false);
        setError("");
        setEmail("");
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[hsl(217_91%_57%/0.35)] bg-[hsl(217_91%_57%/0.1)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[hsl(217_91%_38%)]">
            <Rocket className="size-3.5" />
            Book a Demo
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            See Sanyya in action
          </DialogTitle>
          <DialogDescription>
            Drop your work email and we'll be in touch to set up a walkthrough.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex items-start gap-3 rounded-xl border border-[hsl(160_84%_50%/0.4)] bg-[hsl(160_84%_50%/0.08)] p-4">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[hsl(160_84%_40%)]" />
            <div>
              <p className="font-semibold text-foreground">You're on the list.</p>
              <p className="text-sm text-muted-foreground">
                We'll reach out shortly to schedule your demo.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 space-y-3">
            <Input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              autoFocus
              className="h-12"
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              className={cn(
                "shine relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full font-medium text-white",
                "bg-brand-gradient shadow-[0_8px_30px_-8px_hsl(217_91%_57%/0.6)] transition-all duration-300",
                "md:hover:-translate-y-0.5 md:hover:shadow-[0_14px_40px_-10px_hsl(258_90%_55%/0.7)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
              )}
            >
              {isLoading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Request Demo <ArrowRight className="size-4" />
                </>
              )}
            </button>
            {error && (
              <p className="text-center text-sm text-destructive">{error}</p>
            )}
            <p className="text-center text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
