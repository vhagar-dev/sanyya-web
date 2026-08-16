import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionBadge } from "@/components/site/ui";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Sanyya, spend control that scales with you" },
      {
        name: "description",
        content: "Notes on procurement, biotech operations, and AI from the Sanyya team.",
      },
      { property: "og:title", content: "Blog | Sanyya" },
      { property: "og:description", content: "Notes on procurement, biotech operations, and AI." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Section size="loose" className="pt-32 md:pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <SectionBadge>Blog</SectionBadge>
        <h1 className="mt-6 text-balance font-display text-5xl sm:text-6xl md:text-7xl">
          Stories from the <span className="text-foreground">lab ops</span> floor
        </h1>
        <p className="mt-5 text-base text-muted-foreground md:text-lg">
          Posts coming soon, operator-written deep dives into procurement, OCR, and the workflows
          that actually move your physical spend.
        </p>
      </div>
    </Section>
  );
}
