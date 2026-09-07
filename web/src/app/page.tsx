import Link from "next/link";
import TopBar from "@/components/TopBar";
import AnnounceBar from "@/components/AnnounceBar";
import Hero from "@/components/landing/Hero";
import KickoffCard from "@/components/landing/KickoffCard";
import Backers from "@/components/landing/Backers";
import Constellation from "@/components/landing/Constellation";
import { TEAM } from "@/lib/team";
import { SITE, SOCIALS } from "@/lib/site";

/*
  One screen, no scroll on desktop: the page is a vertical stack pinned to the
  viewport height, in the same shape as yalerover.com. Small screens fall back
  to a normal scrolling page.
*/
export default function Home() {
  return (
    <div className="bg-stage text-fg min-h-dvh stage-lock flex flex-col">
      <div className="pointer-events-none fixed inset-0 grid-overlay" aria-hidden />
      <Constellation />
      <AnnounceBar />

      <div
        className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-5 py-4 md:px-8 md:py-[clamp(0.6rem,1.4vh,1.1rem)]"
        style={{ gap: "var(--gap)" }}
      >
        <TopBar />

        <main className="flex flex-1 flex-col lg:min-h-0" style={{ gap: "var(--gap)" }}>
          <div className="reveal reveal-1">
            <Hero />
          </div>
          <div className="mobile-backers lg:hidden">
            <Backers />
          </div>
          <div className="flex w-full flex-1 items-center justify-center lg:min-h-0">
            <div className="reveal reveal-2 w-full max-w-4xl">
              <KickoffCard />
            </div>
          </div>
        </main>

        <footer className="reveal reveal-3 flex flex-col pb-1" style={{ gap: "clamp(0.55rem, 1.4vh, 0.9rem)" }}>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-medium tracking-wide text-muted text-[clamp(0.6rem,1.25vh,0.66rem)]">
            {TEAM.map((m) => (
              <Link key={m.email} href={`mailto:${m.email}`} className="transition-colors hover:text-fg">
                {m.email}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-semibold tracking-wide text-faint text-[clamp(0.6rem,1.3vh,0.7rem)]">
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
