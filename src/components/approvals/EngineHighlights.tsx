import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { Lock, Camera, GitCompareArrows, ScrollText, Search, RotateCw } from "lucide-react";

const items = [
  {
    icon: Lock,
    title: "One Engine, Zero Loopholes",
    body: "Every approval action flows through a single decision engine. There's no back door, no workaround, no way to bypass the process. If it happened, it was logged.",
  },
  {
    icon: Camera,
    title: "Workflows Pinned at Routing",
    body: "When a request enters an approval workflow, the rules are locked in. If an admin changes the workflow later, in-flight requests keep running under the original version. Audit-grade reproducibility.",
  },
  {
    icon: GitCompareArrows,
    title: "Full Parity Testing",
    body: "Our routing logic is independently verified, the same rules produce the same result every time. We test for consistency automatically so you never get a surprise routing decision.",
  },
  {
    icon: ScrollText,
    title: "Append-Only Decision Log",
    body: "Every approval, rejection, and re-route is permanently recorded, never edited, never deleted. When an auditor asks \"who approved this and when,\" the answer is instant.",
  },
  {
    icon: Search,
    title: "Routing Breadcrumbs",
    body: "Every request carries a record of why it took the path it did, which rule matched, which conditions were met. One click to see the full routing logic behind any decision.",
  },
  {
    icon: RotateCw,
    title: "Cycle Prevention",
    body: "Sanyya blocks circular approval loops before they happen, both when you're building the workflow and at runtime. If a re-route would create a loop, the system catches it and flags it for an admin.",
  },
];

export function EngineHighlights() {
  return (
    <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <StaggerItem key={it.title}>
          <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-lg">
            <div className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">
              <it.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground sm:text-lg">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
