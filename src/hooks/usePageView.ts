import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function usePageView() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname + (search || ""),
        page_title: document.title,
      });
    }
  }, [pathname, search]);
}
