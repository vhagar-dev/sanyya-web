import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { WhichVersion } from "@/components/home/WhichVersion";
import { TheTurn } from "@/components/home/TheTurn";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanyya, spend control that scales with you" },
      {
        name: "description",
        content:
          "Requests, approvals, orders, receiving, and invoices in one place, so any spend question is a lookup, not an investigation.",
      },
      { property: "og:title", content: "Sanyya, the system underneath how your team buys" },
      {
        property: "og:description",
        content:
          "Requests, approvals, orders, receiving, and invoices in one place, so any spend question is a lookup, not an investigation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <WhichVersion />
      <TheTurn />
      <ClosingCTA />
    </>
  );
}
