import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "./ui";
import { cn } from "@/lib/utils";

export function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur transition-transform duration-300",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <GradientButton href="#book-demo" className="w-full">
        Book a Demo <ArrowRight className="size-4" />
      </GradientButton>
    </div>
  );
}
