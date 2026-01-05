import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground hover:border-primary/30 hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:-translate-y-0.5",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "relative border border-[hsl(217_91%_60%/0.4)] bg-[hsl(217_91%_60%/0.05)] text-foreground hover:bg-[hsl(217_91%_60%/0.1)] hover:border-[hsl(217_91%_60%/0.6)] shadow-[0_0_15px_hsl(217_91%_60%/0.15)] hover:shadow-[0_0_25px_hsl(217_91%_60%/0.25),0_0_50px_hsl(258_90%_66%/0.15)] hover:-translate-y-1 transition-all duration-500",
        "glow-primary": "relative bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-[0_10px_40px_-10px_hsl(217_91%_60%/0.5),0_0_20px_hsl(217_91%_60%/0.2)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
        "glow-gradient": "relative bg-gradient-to-r from-[hsl(217_91%_60%)] to-[hsl(258_90%_66%)] text-white font-semibold shadow-lg shadow-[hsl(217_91%_60%/0.4)] hover:shadow-[0_10px_40px_-10px_hsl(217_91%_60%/0.6),0_0_30px_hsl(258_90%_66%/0.3)] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
