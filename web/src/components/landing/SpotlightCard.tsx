import Link from "next/link";
import { SPOTLIGHT, calendarUrl } from "@/lib/site";

/*
  The event in the spotlight: the Perplexity recruiting night. Same shape as
  the kickoff card it replaces (kicker row, headline, facts line, one
  paragraph, two buttons) with the torus from the event artwork floating at
  the card's right on wide screens.
*/
export default function SpotlightCard() {
  return (
    <section
      id="spotlight"
      className="glass relative flex flex-col p-6 md:px-[clamp(1.6rem,3.2vw,2.4rem)] md:py-[clamp(1.3rem,2.8vh,1.8rem)]"
      style={{ gap: "clamp(0.7rem, 1.7vh, 1.05rem)" }}
      aria-labelledby="spotlight-title"
    >
      {/* The torus, floating at the card's right on wide screens. */}
      <img src="/events/torus.jpg" alt="" aria-hidden className="torus-float hidden lg:block" />

      {/* Kicker row: what this is, and who we are hosting. */}
      <div className="relative flex flex-wrap items-center gap-x-4 gap-y-2 lg:pr-[14.5rem]">
        <span className="pixel-caps text-[0.78rem]">{SPOTLIGHT.label}</span>
        <span className="hidden h-3 w-px bg-line sm:block" aria-hidden />
        <span className="inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-faint">
          with{" "}
          <a href={SPOTLIGHT.partnerUrl} target="_blank" rel="noopener noreferrer" className="partner-plate" aria-label={SPOTLIGHT.partner}>
            <img src="/logos/perplexity-plate.png" alt={SPOTLIGHT.partner} width={210} height={64} className="h-[1.4rem] w-auto" />
          </a>
        </span>
      </div>

      <h2 id="spotlight-title" className="display relative leading-[1.1] text-fg text-[clamp(1.5rem,3.4vh,2.1rem)] lg:pr-[14.5rem]">
        {SPOTLIGHT.partner} is coming to Yale <span className="italic text-teal-ink">this Monday.</span>
      </h2>

      <p className="relative leading-[1.4] text-muted text-[clamp(0.95rem,1.95vh,1.12rem)] lg:pr-[14.5rem]">
        And they want to <strong className="font-semibold text-fg">recruit you on Monday evening</strong> (a few of you will get{" "}
        <strong className="font-semibold text-fg">guaranteed interviews</strong>). Really.
      </p>

      {/* One line: day, time, place. */}
      <div className="relative flex flex-wrap items-baseline gap-x-3 gap-y-1 lg:pr-[14.5rem]">
        <span className="font-bold leading-none text-fg text-[clamp(1.15rem,2.7vh,1.6rem)]">{SPOTLIGHT.dayLine}</span>
        <span className="text-faint" aria-hidden>·</span>
        <span className="font-bold leading-none text-accent-ink text-[clamp(1.15rem,2.7vh,1.6rem)]">{SPOTLIGHT.timeLine}</span>
        <span className="text-faint" aria-hidden>·</span>
        <span className="font-medium text-muted text-[clamp(0.9rem,1.9vh,1.05rem)]">{SPOTLIGHT.where}</span>
      </div>

      <p className="relative max-w-xl leading-relaxed text-muted text-[clamp(0.85rem,1.75vh,0.95rem)] lg:pr-[14.5rem]">
        <span className="font-semibold text-fg">We start with an hour with {SPOTLIGHT.partner}&apos;s recruiting team</span> (internships and new grad
        roles, ask them anything), then {SPOTLIGHT.partner} hosts a live coding competition. Top performers interview for new grad Member of
        Technical Staff roles, and prizes include {SPOTLIGHT.partner} Max subscriptions and thousands of dollars in API credits. There&apos;s free
        food and drinks, spots are limited, and you need to RSVP.
      </p>

      <div className="relative flex flex-wrap items-center gap-3 lg:pr-[14.5rem]">
        <Link href={SPOTLIGHT.lumaUrl} target="_blank" rel="noopener noreferrer" className="cta px-5 py-2.5 text-[0.76rem] md:text-[0.8rem]">
          Sign up on Luma <span aria-hidden>→</span>
        </Link>
        <Link href={calendarUrl()} target="_blank" rel="noopener noreferrer" className="ghost px-4 py-2.5 text-[0.76rem] md:text-[0.8rem]">
          Add to calendar
        </Link>
      </div>
    </section>
  );
}
