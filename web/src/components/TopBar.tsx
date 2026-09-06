"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "@/components/Wordmark";
import ThemeToggle from "@/components/ThemeToggle";
import { InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { LUMA_URL, SOCIALS } from "@/lib/site";

const iconBtn =
  "grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-fg";

export default function TopBar() {
  const pathname = usePathname();
  const onTeam = pathname.startsWith("/team");
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="group flex items-center gap-2.5" aria-label="Yale AI home">
        <Wordmark className="text-[1.4rem] md:text-[1.6rem] transition-transform duration-300 group-hover:-translate-y-px" />
      </Link>

      <nav className="flex items-center gap-1.5 md:gap-2">
        <Link
          href={onTeam ? "/" : "/team"}
          className="hidden sm:inline px-2.5 py-1.5 text-[0.86rem] font-medium tracking-wide text-muted transition-colors hover:text-fg"
        >
          {onTeam ? "Home" : "Team"}
        </Link>
        <Link href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Yale AI on Instagram" className={iconBtn}>
          <InstagramIcon className="h-[0.95rem] w-[0.95rem]" />
        </Link>
        <Link href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Yale AI on LinkedIn" className={iconBtn}>
          <LinkedInIcon className="h-[0.9rem] w-[0.9rem]" />
        </Link>
        <ThemeToggle />
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta ml-1 px-4 py-2 text-[0.72rem] md:text-[0.78rem]">
          Kickoff Sep 9 <span aria-hidden>→</span>
        </Link>
      </nav>
    </header>
  );
}
