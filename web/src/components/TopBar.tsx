"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "@/components/Wordmark";
import { InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { LUMA_URL, SOCIALS } from "@/lib/site";

const NAV = [
  { href: "/#kickoff", label: "Kickoff" },
  { href: "/#programs", label: "This year" },
  { href: "/team", label: "Team" },
  { href: "/#join", label: "Join" },
];

export default function TopBar() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="group flex items-center gap-2.5" aria-label="Yale AI home">
        <Wordmark className="text-[1.45rem] md:text-[1.7rem] transition-transform duration-300 group-hover:-translate-y-px" />
        <span className="hidden sm:inline pixel-caps text-[0.6rem] tracking-[0.12em] text-teal/80 translate-y-[1px]">association</span>
      </Link>

      <nav className="flex items-center gap-1.5 md:gap-2">
        {NAV.map((n) => {
          const active = n.href === "/team" && pathname.startsWith("/team");
          return (
            <Link
              key={n.href}
              href={n.href}
              className={`hidden md:inline px-2.5 py-1.5 text-[0.86rem] font-medium tracking-wide transition-colors ${
                active ? "text-lime" : "text-white/60 hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          );
        })}
        <Link
          href={SOCIALS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yale AI on Instagram"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:border-white/30 hover:text-white"
        >
          <InstagramIcon className="h-[0.95rem] w-[0.95rem]" />
        </Link>
        <Link
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yale AI on LinkedIn"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition-colors hover:border-white/30 hover:text-white"
        >
          <LinkedInIcon className="h-[0.9rem] w-[0.9rem]" />
        </Link>
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta ml-1 px-4 py-2 text-[0.72rem] md:text-[0.78rem]">
          Kickoff Sep 9 <span aria-hidden>→</span>
        </Link>
      </nav>
    </header>
  );
}
