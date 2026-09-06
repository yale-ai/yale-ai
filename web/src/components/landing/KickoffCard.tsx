import Link from "next/link";
import { KICKOFF, LUMA_URL, calendarUrl } from "@/lib/site";

export default function KickoffCard() {
  return (
    <section id="kickoff" className="card scroll-mt-24 p-6 md:p-10" aria-labelledby="kickoff-title">
      <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
        <div>
          <p className="pixel-caps text-[0.7rem] tracking-[0.14em]">Limited capacity. Apply to attend.</p>
          <h2 id="kickoff-title" className="mt-3 text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Want free Cursor and Grok credits, a month of Cursor Pro+, and to hear what Yale AI has going on this year?
          </h2>
          <p className="mt-3 text-lg italic text-white/70">Yeah, we thought so.</p>
          <p className="mt-5 max-w-prose text-[0.98rem] leading-relaxed text-white/75">
            Our kickoff is sponsored by {KICKOFF.sponsor}. Everyone who comes gets a month of Cursor Pro+, we give away AI
            credits on the spot, and we lay out exactly how to get involved: the fellowship, the project teams, and the
            calendar for the year. Food included. No AI experience needed.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6">
          <div className="leading-none">
            <p className="text-[clamp(1.35rem,2.1vw,1.7rem)] font-bold italic text-blue">{KICKOFF.dayLine}</p>
            <p className="mt-2 text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold text-white">{KICKOFF.timeLine}</p>
            <p className="mt-2 text-[clamp(1.1rem,1.9vw,1.4rem)] font-medium text-white/85">@ {KICKOFF.where}</p>
            <p className="mt-4 text-sm font-semibold text-lime">All majors welcome.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-5 py-2.5 text-[0.8rem]">
              RSVP on Luma <span aria-hidden>→</span>
            </Link>
            <Link href={calendarUrl()} target="_blank" rel="noopener noreferrer" className="ghost px-4 py-2.5 text-[0.8rem]">
              Add to calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
