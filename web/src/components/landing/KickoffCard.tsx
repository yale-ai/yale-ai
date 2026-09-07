import Link from "next/link";
import { KICKOFF, LUMA_URL, calendarUrl } from "@/lib/site";

export default function KickoffCard() {
  return (
    <section
      id="kickoff"
      className="glass relative flex flex-col p-6 md:px-[clamp(1.6rem,3.2vw,2.4rem)] md:py-[clamp(1.3rem,2.8vh,1.8rem)]"
      style={{ gap: "clamp(0.8rem, 1.9vh, 1.15rem)" }}
      aria-labelledby="kickoff-title"
    >
      {/* Grok Bot, whole, floating at the card's right on wide screens. */}
      <img src="/bot.png" alt="" aria-hidden className="bot-float hidden lg:block" />

      {/* Kicker row: what this is, and who powers it. */}
      <div className="relative flex flex-wrap items-center gap-x-4 gap-y-2 lg:pr-[13.5rem]">
        <span className="pixel-caps text-[0.78rem]">Our kickoff night with free perks for everyone in the room.</span>
        <span className="hidden h-3 w-px bg-line sm:block" aria-hidden />
        <span className="inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-faint">
          powered by <span className="spacexai h-[0.74rem] text-fg" role="img" aria-label="SpaceXAI" />
        </span>
      </div>

      <h2 id="kickoff-title" className="relative font-normal leading-[1.35] text-fg text-[clamp(1rem,2.1vh,1.25rem)] lg:pr-[13.5rem]">
        Fancy <strong>a month of Cursor Pro+</strong>, <strong>an exclusive Grok Bot demo</strong>, <strong>a competition for SpaceXAI credits</strong>, and <strong>free boba</strong>?{" "}
        <span className="font-semibold text-accent-ink">Yeah, we thought so.</span>
      </h2>

      {/* One line: day, time, place. */}
      <div className="relative flex flex-wrap items-baseline gap-x-3 gap-y-1 lg:pr-[13.5rem]">
        <span className="font-bold leading-none text-fg text-[clamp(1.15rem,2.7vh,1.6rem)]">{KICKOFF.dayLine}</span>
        <span className="text-faint" aria-hidden>·</span>
        <span className="font-bold leading-none text-accent-ink text-[clamp(1.15rem,2.7vh,1.6rem)]">{KICKOFF.timeLine}</span>
        <span className="text-faint" aria-hidden>·</span>
        <span className="font-medium text-muted text-[clamp(0.9rem,1.9vh,1.05rem)]">{KICKOFF.where}</span>
      </div>

      <p className="relative max-w-xl leading-relaxed text-muted text-[clamp(0.85rem,1.75vh,0.95rem)] lg:pr-[13.5rem]">
        <span className="font-semibold text-fg">There&apos;s a quick build competition during the kickoff too</span> (for the chance to win more SpaceXAI credits). We have limited capacity, so RSVP as soon as possible. We&apos;ll also explain our fellowships, learning resources, and opportunities to join project teams this year.
      </p>

      <div className="relative flex flex-wrap items-center gap-3 lg:pr-[13.5rem]">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-5 py-2.5 text-[0.76rem] md:text-[0.8rem]">
          RSVP for the kickoff <span aria-hidden>→</span>
        </Link>
        <Link href={calendarUrl()} target="_blank" rel="noopener noreferrer" className="ghost px-4 py-2.5 text-[0.76rem] md:text-[0.8rem]">
          Add to calendar
        </Link>
      </div>

    </section>
  );
}
