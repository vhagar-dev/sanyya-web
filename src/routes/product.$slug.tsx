import { createFileRoute, redirect } from "@tanstack/react-router";

const hashBySlug: Record<string, string> = {
  quotes: "buy",
  requisitions: "buy",
  approvals: "buy",
  "purchase-orders": "order",
  receiving: "receive",
  inventory: "receive",
  invoices: "pay",
  "match-engine": "pay",
  vendors: "spend",
  dashboards: "spend",
  "sanyya-drive": "spend",
};

export const Route = createFileRoute("/product/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/product", hash: hashBySlug[params.slug] ?? "buy" });
  },
  component: () => null,
});
