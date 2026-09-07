import Link from "next/link";
import { KICKOFF, LUMA_URL, calendarUrl } from "@/lib/site";
import JoinInline from "@/components/landing/JoinInline";

export default function KickoffCard() {
  return (
    <section
      id="kickoff"
      className="glass relative flex flex-col p-6 md:p-[clamp(1.4rem,3vh,2.1rem)]"
      style={{ gap: "clamp(0.8rem, 1.9vh, 1.2rem)" }}
      aria-labelledby="kickoff-title"
    >
      {/* Grok Bot, whole, floating at the card's right on wide screens. */}
      <img src="/bot.png" alt="" aria-hidden className="bot-float hidden lg:block" />

      <div className="relative lg:pr-[13.5rem]">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="pixel-caps text-[0.62rem]">Kickoff night. Free perks for everyone in the room.</span>
          <span className="inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-faint">
            powered by <span className="spacexai h-[0.66rem] text-fg" role="img" aria-label="SpaceXAI" />
          </span>
        </p>
        <h2 id="kickoff-title" className="mt-4 font-semibold leading-snug text-fg text-[clamp(1rem,2.1vh,1.25rem)]">
          Fancy a month of Cursor Pro+, an exclusive Grok Bot demo, a competition for SpaceXAI credits, and free boba?{" "}
          <span className="text-accent-ink">Yeah, we thought so.</span>
        </h2>
      </div>

      <div className="relative flex flex-wrap items-baseline gap-x-6 gap-y-2 font-bold leading-none lg:pr-[13.5rem]">
        <p className="text-fg text-[clamp(1.15rem,2.7vh,1.6rem)]">{KICKOFF.dayLine}</p>
        <p className="text-accent-ink text-[clamp(1.15rem,2.7vh,1.6rem)]">{KICKOFF.timeLine}</p>
        <p className="font-medium text-muted text-[clamp(0.9rem,1.9vh,1.05rem)]">{KICKOFF.where}</p>
      </div>

      <p className="relative leading-relaxed text-muted text-[clamp(0.85rem,1.75vh,0.95rem)] lg:pr-[13.5rem]">
        Limited capacity, filled from the RSVP list. Fellowship and project-team applications open in the room. No AI experience needed.
      </p>

      <div className="relative flex flex-wrap items-center gap-2.5 pt-0.5 lg:pr-[13.5rem]">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-5 py-2.5 text-[0.76rem] md:text-[0.8rem]">
          RSVP on Luma <span aria-hidden>→</span>
        </Link>
        <Link href={calendarUrl()} target="_blank" rel="noopener noreferrer" className="ghost px-4 py-2.5 text-[0.76rem] md:text-[0.8rem]">
          Add to calendar
        </Link>
        <div className="min-w-[15rem] flex-1 md:max-w-xs">
          <JoinInline compact />
        </div>
      </div>
    </section>
  );
}
