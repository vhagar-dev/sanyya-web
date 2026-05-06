import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 1200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "hidden md:grid fixed bottom-6 right-6 z-40 h-11 w-11 place-items-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-all duration-300 hover:border-foreground/30 hover:-translate-y-0.5",
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
      )}
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
