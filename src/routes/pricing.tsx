import { createFileRoute, redirect } from "@tanstack/react-router";

// The standalone pricing page was retired in the site refresh. Keep the URL
// alive so existing inbound links and search results land somewhere useful.
export const Route = createFileRoute("/pricing")({
  beforeLoad: () => {
    throw redirect({ to: "/product", hash: "buy" });
  },
  component: () => null,
});
