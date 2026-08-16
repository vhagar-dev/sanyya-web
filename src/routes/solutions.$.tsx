import { createFileRoute, redirect } from "@tanstack/react-router";

const hashBySlug: Record<string, string> = {
  biotech: "buy",
  hardware: "order",
  operations: "receive",
  finance: "pay",
  procurement: "spend",
};

export const Route = createFileRoute("/solutions/$")({
  beforeLoad: ({ params }) => {
    const slug = (params._splat ?? "").split("/")[0] ?? "";
    throw redirect({ to: "/product", hash: hashBySlug[slug] ?? "buy" });
  },
  component: () => null,
});
