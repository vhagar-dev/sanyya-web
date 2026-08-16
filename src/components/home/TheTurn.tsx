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
            <h2 className="font-display text-balance text-[22px] leading-[1.05] tracking-[-0.02em] text-[hsl(41_33%_95%)] md:text-[clamp(1.75rem,3.5vw,2.5rem)] md:tracking-[-0.03em]">
              You don't need a<br className="hidden md:block" /> procurement department.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-[62ch] text-pretty text-base leading-relaxed text-[hsl(41_33%_95%/0.6)] md:mt-6 md:text-xl">
              Procurement software was built for companies that have one.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          {/* Mobile: two stacked, opposed blocks */}
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 md:hidden">
            <div className="p-4 bg-[hsl(40_6%_8%)]">
              <p className="text-sm text-[hsl(41_33%_95%/0.5)]">What it assumes</p>
              <ul className="mt-3 space-y-[10px]">
                {assumes.map((item) => (
                  <li key={item} className="text-[15px] font-normal text-[hsl(41_33%_95%/0.55)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-l-2 border-[hsl(272_75%_72%)] bg-[hsl(40_6%_14%)] p-4">
              <p className="text-sm text-[hsl(41_33%_95%/0.5)]">What you have</p>
              <ul className="mt-3 space-y-[10px]">
                {youHave.map((item) => (
                  <li key={item} className="text-base font-semibold text-[hsl(41_33%_95%)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop: aligned two-column comparison */}
          <div className="mx-auto mt-12 hidden max-w-5xl grid-cols-2 gap-x-0 gap-y-3 md:grid md:mt-14">
            <p className="text-sm text-[hsl(41_33%_95%/0.4)] md:pr-10 md:text-right">
              What it assumes
            </p>
            <p className="text-sm text-[hsl(41_33%_95%/0.65)] md:border-l md:border-[hsl(41_33%_95%/0.15)] md:pl-10 md:text-left">
              What you have
            </p>

            {assumes.map((item, i) => (
              <div key={item} className="contents">
                <div
                  className={cn(
                    "whitespace-nowrap text-xl font-light text-[hsl(41_33%_95%/0.45)] md:pr-10 md:text-right lg:text-2xl",
                    i === 0 && "md:mt-2",
                  )}
                >
                  {item}
                </div>
                <div
                  className={cn(
                    "whitespace-nowrap text-xl font-medium text-[hsl(41_33%_95%)] md:border-l md:border-[hsl(41_33%_95%/0.15)] md:pl-10 md:text-left lg:text-2xl",
                    i === 0 && "md:mt-2",
                  )}
                >
                  {youHave[i]}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mx-auto mt-8 max-w-2xl text-left text-[15px] leading-[1.6] text-[hsl(41_33%_95%/0.8)] md:mt-14 md:text-2xl md:leading-relaxed">
            You need a record. What was asked for, who said yes, what showed up, and what it cost.
            Everything else is overhead you cannot afford yet.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
