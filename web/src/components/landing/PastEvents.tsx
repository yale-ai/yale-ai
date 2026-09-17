import { PAST_EVENTS } from "@/lib/site";
import AnimateIn from "@/components/AnimateIn";

/*
  What has already happened this year, one compact glass card per event,
  driven by PAST_EVENTS in site.ts. Moving the spotlight event here when it is
  over is one new entry in that list.
*/
export default function PastEvents() {
  return (
    <section id="past-events" className="scroll-mt-20" aria-labelledby="past-events-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pixel-caps text-[0.92rem]">Already happened this year</p>
        <h2 id="past-events-title" className="display mt-4 leading-[1.05] text-fg text-[clamp(2rem,4.6vw,3.4rem)]">
          Past events
        </h2>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {PAST_EVENTS.map((e, i) => (
          <AnimateIn key={e.id} delay={Math.min(i * 0.05, 0.35)}>
            <li className="glass glass-hover flex h-full items-center gap-5 p-5 md:p-6">
              <img
                src={e.art}
                alt={e.artAlt}
                className={`h-20 w-20 shrink-0 object-contain md:h-24 md:w-24 ${e.artInvertsOnLight ? "past-art-invert" : ""}`}
              />
              <div className="flex min-w-0 flex-col gap-2">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-teal-ink">
                  {e.when} · {e.where}
                </span>
                <h3 className="text-[1.02rem] font-semibold leading-snug text-fg">{e.title}</h3>
                <p className="text-[0.86rem] leading-relaxed text-muted">{e.blurb}</p>
                {e.mark === "spacexai" && (
                  <span className="mt-1 inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-faint">
                    sponsored by <span className="spacexai h-[0.7rem] text-fg" role="img" aria-label="SpaceXAI" />
                  </span>
                )}
                {e.mark === "perplexity" && (
                  <span className="mt-1 inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-faint">
                    with <img src="/logos/perplexity-plate.png" alt="Perplexity" className="h-[1.2rem] w-auto rounded-[0.3rem]" />
                  </span>
                )}
              </div>
            </li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  );
}
