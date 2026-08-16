import { Section } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

const stops = [
  { size: "5 people", label: "Set up today" },
  { size: "40 people", label: "Approvals and budgets" },
  { size: "300 people", label: "Full controls and audit" },
];

export function Scale() {
  return (
    <Section size="default" className="bg-secondary/30">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <h2 className="text-balance font-display text-4xl sm:text-5xl md:text-6xl">
              And it still works when you are three hundred people.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Most teams solve this twice. A spreadsheet that breaks, then an implementation project
              they cannot afford yet. Sanyya starts light enough to set up today and turns on
              heavier controls as you grow, so there is nothing to migrate and no history to lose.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/20 via-brand/60 to-brand"
            />
            <ul className="space-y-10">
              {stops.map((s) => (
                <li key={s.size} className="relative pl-10">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-background bg-brand-gradient"
                  />
                  <div className="text-lg font-semibold tracking-tight text-foreground">
                    {s.size}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
