import Link from "next/link";
import { KICKOFF, LUMA_URL, calendarUrl } from "@/lib/site";
import JoinInline from "@/components/landing/JoinInline";

const PERKS = ["1 month of Cursor Pro+ for everyone", "AI credits to win", "Food", "No AI experience needed"];

const THIS_YEAR = [
  "Project teams",
  "Yale AI Fellowship",
  "Research showcase",
  "Biweekly workshops",
  "Fireside chats",
  "Spring company trip",
];

export default function KickoffCard() {
  return (
    <section
      className="glass reveal reveal-4 grid gap-6 p-6 md:grid-cols-[1.15fr_1fr] md:gap-10 md:p-[clamp(1.4rem,3vh,2.2rem)]"
      aria-labelledby="kickoff-title"
    >
      <div className="flex flex-col" style={{ gap: "clamp(0.6rem, 1.5vh, 1rem)" }}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="pixel-caps text-[0.66rem]">Kickoff</p>
          <span className="inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.16em] text-faint">
            sponsored by <span className="spacexai h-[0.72rem] text-fg" role="img" aria-label="SpaceXAI" />
          </span>
        </div>
        <h2 id="kickoff-title" className="font-semibold leading-tight text-fg text-[clamp(1.25rem,2.8vh,1.8rem)]">
          Come Wednesday. Hear the plan for the year, leave with a month of Cursor Pro+.
        </h2>
        <div className="leading-none">
          <p className="font-bold italic text-blue-ink text-[clamp(1.35rem,3.4vh,2rem)]">{KICKOFF.dayLine}</p>
          <p className="mt-1.5 font-semibold text-fg text-[clamp(1.1rem,2.6vh,1.5rem)]">{KICKOFF.timeLine}</p>
          <p className="mt-1.5 text-muted text-[clamp(0.95rem,2vh,1.15rem)]">{KICKOFF.where}</p>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {PERKS.map((p, i) => (
            <li key={p} className={`pill ${i === 0 ? "pill-fill" : ""}`}>{p}</li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
          <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-6 py-3 text-xs md:text-[0.8rem]">
            Apply to attend <span aria-hidden>→</span>
          </Link>
          <Link href={calendarUrl()} target="_blank" rel="noopener noreferrer" className="ghost px-5 py-3 text-xs md:text-[0.8rem]">
            Add to calendar
          </Link>
        </div>
        <p className="text-[0.74rem] text-faint">Limited capacity. RSVP on Luma to attend.</p>
      </div>

      <div className="flex flex-col justify-between border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0" style={{ gap: "clamp(0.8rem, 2vh, 1.4rem)" }}>
        <div>
          <p className="pixel-caps text-[0.66rem]">This year</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[clamp(0.86rem,1.8vh,1rem)] text-fg">
            {THIS_YEAR.map((t, i) => (
              <li key={t} className="flex items-baseline gap-2">
                <span className="font-mono text-[0.66rem] text-teal-ink">{String(i + 1).padStart(2, "0")}</span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[0.8rem] leading-snug text-muted">
            Applications for the fellowship and the project teams open at the kickoff.
          </p>
        </div>
        <JoinInline />
      </div>
    </section>
  );
}
