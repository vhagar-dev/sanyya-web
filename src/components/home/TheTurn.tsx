import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";

const assumes = [
  "A procurement team",
  "A rollout project",
  "A configuration phase",
  "A six figure budget",
];

const youHave = ["Fifteen people who order things", "Two who approve", "No time", "A lab to run"];

export function TheTurn() {
  return (
    <section
      id="the-turn"
      className="relative overflow-hidden bg-[hsl(40_6%_10%)] py-24 md:pb-28 md:pt-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl text-left">
          <Reveal>
            <h2 className="font-display text-balance text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] tracking-[-0.03em] text-[hsl(41_33%_95%)]">
              You don't need a<br className="hidden sm:block" /> procurement department.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-[62ch] text-pretty text-lg leading-relaxed text-[hsl(41_33%_95%/0.6)] md:text-xl">
              Procurement software was built for companies that have one.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          {/* Mobile: two stacked lists */}
          <div className="mx-auto mt-10 max-w-md space-y-8 sm:hidden">
            <div>
              <p className="text-sm text-[hsl(41_33%_95%/0.4)]">What it assumes</p>
              <ul className="mt-3 space-y-2">
                {assumes.map((item) => (
                  <li key={item} className="text-xl font-light text-[hsl(41_33%_95%/0.45)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-[hsl(41_33%_95%/0.65)]">What you have</p>
              <ul className="mt-3 space-y-2">
                {youHave.map((item) => (
                  <li key={item} className="text-xl font-medium text-[hsl(41_33%_95%)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop: aligned two-column comparison */}
          <div className="mx-auto mt-12 hidden max-w-5xl grid-cols-2 gap-x-0 gap-y-3 sm:grid md:mt-14">
            <p className="text-sm text-[hsl(41_33%_95%/0.4)] sm:pr-10 sm:text-right">
              What it assumes
            </p>
            <p className="text-sm text-[hsl(41_33%_95%/0.65)] sm:border-l sm:border-[hsl(41_33%_95%/0.15)] sm:pl-10 sm:text-left">
              What you have
            </p>

            {assumes.map((item, i) => (
              <div key={item} className="contents">
                <div
                  className={cn(
                    "whitespace-nowrap text-xl font-light text-[hsl(41_33%_95%/0.45)] sm:pr-10 sm:text-right md:text-2xl",
                    i === 0 && "sm:mt-2",
                  )}
                >
                  {item}
                </div>
                <div
                  className={cn(
                    "whitespace-nowrap text-xl font-medium text-[hsl(41_33%_95%)] sm:border-l sm:border-[hsl(41_33%_95%/0.15)] sm:pl-10 sm:text-left md:text-2xl",
                    i === 0 && "sm:mt-2",
                  )}
                >
                  {youHave[i]}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-12 max-w-2xl text-balance text-center text-xl leading-relaxed text-[hsl(41_33%_95%/0.8)] md:mt-14 md:text-2xl">
            You need a record. What was asked for, who said yes, what showed up, and what it cost.
            Everything else is overhead you cannot afford yet.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
