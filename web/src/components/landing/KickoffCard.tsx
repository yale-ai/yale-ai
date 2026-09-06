import Link from "next/link";
import { KICKOFF, LUMA_URL, calendarUrl } from "@/lib/site";
import JoinInline from "@/components/landing/JoinInline";

export default function KickoffCard() {
  return (
    <section
      id="kickoff"
      className="glass relative flex flex-col p-5 md:p-[clamp(1.2rem,2.6vh,1.8rem)]"
      style={{ gap: "clamp(0.5rem, 1.4vh, 0.9rem)" }}
      aria-labelledby="kickoff-title"
    >
      {/* Grok Bot, whole, floating at the card's right on wide screens. */}
      <img src="/bot.png" alt="" aria-hidden className="bot-float hidden lg:block" />

      <div className="relative lg:pr-[15rem]">
        <p className="pixel-caps text-[0.68rem]">Kickoff night. Free perks for everyone in the room.</p>
        <h2 id="kickoff-title" className="mt-1.5 font-semibold leading-tight text-fg text-[clamp(1.05rem,2.3vh,1.4rem)]">
          Fancy a month of Cursor Pro+, an exclusive Grok Bot demo, a competition for SpaceXAI credits, and free boba?{" "}
          <span className="text-accent-ink">Yeah, we thought so.</span>
        </h2>
      </div>

      <div className="relative flex flex-wrap items-baseline gap-x-6 gap-y-1 font-extrabold leading-none lg:pr-[15rem]">
        <p className="text-fg text-[clamp(1.25rem,3vh,1.85rem)]">{KICKOFF.dayLine}</p>
        <p className="text-accent-ink text-[clamp(1.25rem,3vh,1.85rem)]">{KICKOFF.timeLine}</p>
        <p className="font-medium text-muted text-[clamp(0.95rem,2.1vh,1.2rem)]">{KICKOFF.where}</p>
      </div>

      <p className="relative font-medium leading-snug text-muted text-[clamp(0.9rem,1.9vh,1.05rem)] lg:pr-[15rem]">
        Capacity is limited and we are filling it from the RSVP list. Applications for the fellowship and the project teams open
        in the room. No AI experience needed.
      </p>

      <div className="relative flex flex-wrap items-center gap-2.5 pt-0.5 lg:pr-[15rem]">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-5 py-2.5 text-xs md:text-[0.76rem] uppercase tracking-[0.08em]">
          RSVP on Luma <span aria-hidden>→</span>
        </Link>
        <Link href={calendarUrl()} target="_blank" rel="noopener noreferrer" className="ghost px-4 py-2.5 text-xs md:text-[0.76rem]">
          Add to calendar
        </Link>
        <div className="min-w-[15rem] flex-1 md:max-w-xs">
          <JoinInline compact />
        </div>
      </div>
    </section>
  );
}
