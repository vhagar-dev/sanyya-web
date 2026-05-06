import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { NoiseOverlay } from "@/components/site/NoiseOverlay";
import { MobileStickyCTA } from "@/components/site/MobileStickyCTA";
import { BackToTop } from "@/components/site/BackToTop";
import { WaitlistDialog } from "@/components/site/WaitlistDialog";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NoiseOverlay />
      <Navbar />
      <main className="relative z-10 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
      <BackToTop />
      <WaitlistDialog />
    </div>
  );
}
