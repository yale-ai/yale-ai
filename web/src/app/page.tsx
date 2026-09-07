import Link from "next/link";
import TopBar from "@/components/TopBar";
import AnnounceBar from "@/components/AnnounceBar";
import Hero from "@/components/landing/Hero";
import KickoffCard from "@/components/landing/KickoffCard";
import ThisYear from "@/components/landing/ThisYear";
import FieldTrips from "@/components/landing/FieldTrips";
import Constellation from "@/components/landing/Constellation";
import { TEAM } from "@/lib/team";
import { SITE, SOCIALS } from "@/lib/site";

/*
  First screen: the hero and the kickoff card, pinned to the viewport height on
  desktop in the shape of yalerover.com. Below it the page scrolls: the year in
  one glance, the connections, the footer.
*/
export default function Home() {
  return (
    <div className="bg-stage text-fg flex min-h-dvh flex-col">
      <div className="pointer-events-none fixed inset-0 grid-overlay" aria-hidden />
      <Constellation />
      <AnnounceBar />

      <div className="stage relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 py-4 md:px-8 md:py-[clamp(0.6rem,1.4vh,1.1rem)]" style={{ gap: "var(--gap)" }}>
        <TopBar />
        <main className="flex flex-1 flex-col lg:min-h-0" style={{ gap: "var(--gap)" }}>
          <div className="reveal reveal-1">
            <Hero />
          </div>
          <div className="flex w-full flex-1 items-center justify-center lg:min-h-0">
            <div className="reveal reveal-2 w-full max-w-4xl">
              <KickoffCard />
            </div>
          </div>
        </main>
        <a href="#this-year" className="reveal reveal-3 mx-auto mb-1 flex flex-col items-center gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-faint transition-colors hover:text-fg" aria-label="Scroll to this year">
          this year
          <span aria-hidden className="scroll-cue" />
        </a>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-10 pt-20 md:gap-32 md:px-8 md:pt-28">
        <ThisYear />
        <FieldTrips />

        <footer className="flex flex-col gap-3 border-t border-line pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[0.74rem] font-medium tracking-wide text-muted">
            {TEAM.map((m) => (
              <Link key={m.email} href={`mailto:${m.email}`} className="transition-colors hover:text-fg">
                {m.email}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[0.66rem] font-medium tracking-wide text-faint">
            <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
            <Link href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">Instagram</Link>
            <Link href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">LinkedIn</Link>
            <Link href="/team" className="transition-colors hover:text-fg">Team</Link>
            <span>We are a Registered Student Org (RSO) affiliated with Yale University.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
