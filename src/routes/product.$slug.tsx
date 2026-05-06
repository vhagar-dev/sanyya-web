import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionBadge, GradientButton, GradientGlow } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { modules } from "@/data/site";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const m = modules.find((x) => x.slug === params.slug);
    const title = m ? `${m.name} | Sanyya` : "Product | Sanyya";
    const desc = m?.long ?? "Sanyya procurement module.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProductPlaceholder,
});

function ProductPlaceholder() {
  const { slug } = Route.useParams();
  const m = modules.find((x) => x.slug === slug);
  if (!m) {
    return (
      <Section size="loose">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Module not found</h1>
          <p className="mt-3 text-muted-foreground">Try one of our existing modules.</p>
          <div className="mt-6">
            <Link to="/" className="text-[hsl(217_91%_38%)] hover:underline">← Back home</Link>
          </div>
        </div>
      </Section>
    );
  }
  return (
    <section className="relative overflow-hidden bg-background pt-32 md:pt-40 pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <GradientGlow size="xl" className="-top-32 left-1/2 -translate-x-1/2 mesh-drift opacity-20" />
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionBadge>{m.name}</SectionBadge>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 grid mx-auto size-16 place-items-center rounded-2xl border border-border bg-card/60">
              <m.icon className={`size-7 ${m.iconColor}`} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {m.name}, <span className="text-brand-gradient">coming soon</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              {m.long} A dedicated page is on the way. In the meantime, see Sanyya end-to-end.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <GradientButton href="#book-demo" size="lg" className="w-full sm:w-auto">
                Book a Demo <ArrowRight className="size-4" />
              </GradientButton>
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                ← Back to overview
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
