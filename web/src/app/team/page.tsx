import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { GithubIcon, GlobeIcon, LinkedInIcon, MailIcon, XIcon } from "@/components/Icons";
import { TEAM, initials, type Member } from "@/lib/team";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: "The 2026-27 board of the Yale Artificial Intelligence Association.",
};

export default function TeamPage() {
  return (
    <div className="bg-stage min-h-dvh text-fg">
      <div className="grid-overlay pointer-events-none fixed inset-0" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 py-5 md:px-8 md:py-6">
        <TopBar />
        <main className="pb-10 pt-10 md:pt-16">
          <p className="pixel-caps text-[0.8rem] tracking-[0.14em]">The board, 2026-27</p>
          <h1 className="mt-3 text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            The people running <span className="teal-flow">Yale AI</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-muted">
            Seven students, a lot of majors, one thing in common: we would rather build the thing than read about it.
            Email any of us. We answer.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <AnimateIn key={m.slug} delay={Math.min(i * 0.05, 0.3)}>
                <MemberCard m={m} />
              </AnimateIn>
            ))}
          </ul>

          <section className="glass mt-12 p-6 md:p-8">
            <p className="pixel-caps text-[0.7rem] tracking-[0.14em]">Want to help run it?</p>
            <p className="mt-3 max-w-prose text-[0.98rem] leading-relaxed text-muted">
              We are looking for people to own marketing, workshops, and project teams this year. If that is you, write
              to <Link href={`mailto:${CONTACT_EMAIL}`} className="u-lime text-fg">{CONTACT_EMAIL}</Link>.
            </p>
          </section>
        </main>
        <div className="mt-16 border-t border-line pt-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function MemberCard({ m }: { m: Member }) {
  const meta = [m.classYear && `'${m.classYear.slice(2)}`, m.major].filter(Boolean).join(" · ");
  return (
    <li className="glass glass-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        {m.photo ? (
          <Image
            src={m.photo}
            alt={m.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(79,216,200,0.28),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(217,228,168,0.22),transparent_55%)]">
            <span className="font-pixel text-[3.6rem] font-medium text-fg">{initials(m.name)}</span>
          </div>
        )}
        <span className="pill pill-fill absolute left-3 top-3 px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.12em]">{m.role}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h2 className="text-[1.15rem] font-semibold leading-tight">{m.name}</h2>
        {meta && <p className="font-mono text-[0.72rem] text-teal-ink">{meta}</p>}
        {m.bio && <p className="text-[0.86rem] leading-relaxed text-muted">{m.bio}</p>}
        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3">
          <IconLink href={`mailto:${m.email}`} label={`Email ${m.name}`}>
            <MailIcon className="h-4 w-4" />
          </IconLink>
          {m.linkedin && (
            <IconLink href={m.linkedin} label={`${m.name} on LinkedIn`} external>
              <LinkedInIcon className="h-[0.85rem] w-[0.85rem]" />
            </IconLink>
          )}
          {m.website && (
            <IconLink href={m.website} label={`${m.name}'s website`} external>
              <GlobeIcon className="h-4 w-4" />
            </IconLink>
          )}
          {m.github && (
            <IconLink href={m.github} label={`${m.name} on GitHub`} external>
              <GithubIcon className="h-4 w-4" />
            </IconLink>
          )}
          {m.x && (
            <IconLink href={m.x} label={`${m.name} on X`} external>
              <XIcon className="h-[0.8rem] w-[0.8rem]" />
            </IconLink>
          )}
          <span className="ml-auto truncate text-[0.72rem] text-faint">{m.email}</span>
        </div>
      </div>
    </li>
  );
}

function IconLink({ href, label, external, children }: { href: string; label: string; external?: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-fg"
    >
      {children}
    </Link>
  );
}
