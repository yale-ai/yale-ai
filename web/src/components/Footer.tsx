import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { InstagramIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { CONTACT_EMAIL, SITE, SOCIALS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 pb-8 md:mt-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Wordmark className="text-[1.6rem]" />
          <p className="pixel-caps mt-2 text-[0.62rem] tracking-[0.14em]">Kickoff powered by SpaceX</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/65">
          <Link href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            <MailIcon className="h-4 w-4" /> {CONTACT_EMAIL}
          </Link>
          <Link href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            <InstagramIcon className="h-4 w-4" /> Instagram
          </Link>
          <Link href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </Link>
          <Link href="/team" className="transition-colors hover:text-white">Team</Link>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.72rem] text-white/40">
        <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
        <span>A registered student organization at Yale University. Student-run and independent of the university.</span>
        <span className="font-mono">{SITE.url.replace("https://", "")}</span>
      </div>
    </footer>
  );
}
