import { SignupButton } from "./SignupDialog";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-muted-foreground">
              Spend control that scales with you.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Link to="/product" className="-my-2 py-2 hover:text-foreground">
              Product
            </Link>
            <Link to="/why-sanyya" className="-my-2 py-2 hover:text-foreground">
              Why Sanyya
            </Link>
            <SignupButton variant="link" className="-my-2 py-2 hover:text-foreground">
              Contact
            </SignupButton>
          </nav>
        </div>
        <div className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 Sanyya Systems, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
