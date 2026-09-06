import Link from "next/link";
import { TEAM } from "@/lib/team";
import { SITE, SOCIALS } from "@/lib/site";

// Compact, one line on wide screens: board emails, then the small print.
export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 pb-1" style={{ gap: "clamp(0.5rem, 1.2vh, 0.9rem)" }}>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[clamp(0.7rem,1.4vh,0.8rem)] font-medium text-muted">
        {TEAM.map((m) => (
          <Link key={m.email} href={`mailto:${m.email}`} className="transition-colors hover:text-fg">
            {m.email}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[clamp(0.62rem,1.3vh,0.72rem)] text-faint">
        <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
        <Link href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">Instagram</Link>
        <Link href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">LinkedIn</Link>
        <Link href="/team" className="transition-colors hover:text-fg">Team</Link>
        <span>A registered student organization, independent of Yale University.</span>
      </div>
    </footer>
  );
}
