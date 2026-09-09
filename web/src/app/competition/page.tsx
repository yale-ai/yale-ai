import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { CONTACT_EMAIL } from "@/lib/site";

/*
  The kickoff build competition, "Rapid-fire Cursor". Everything on the deck's
  competition slides, in one place people can come back to, with the form.
  Short links: /win goes straight to the form, /competition is this page.
*/

const FORM_URL = "https://forms.gle/4LDrUb9xhVkJrjP49";
const REDEEM_URL = "https://cursor.com/redeem/event/yale-ai-association-fall-kickoff";
const DEADLINE_HUMAN = "Thursday, September 10, 11:59 PM";

export const metadata: Metadata = {
  title: "Rapid-fire Cursor: the kickoff competition",
  description:
    "How quickly can you build a useful app for Yale students? Build it in Cursor, put a screenshot in the README, submit the GitHub link by Thursday, September 10 at 11:59 PM. Three winners get three months of Cursor from SpaceXAI.",
};

const RULES = [
  {
    k: "The brief",
    t: "A useful app for Yale students",
    p: "Built in Cursor. Classes, clubs, dining, schedules, recruiting, research: anything you actually wish existed. Useful beats flashy.",
  },
  {
    k: "Proof",
    t: "A screenshot in the README",
    p: "Your project README must include a screenshot of you building it in Cursor. Solo or a team of up to three.",
  },
  {
    k: "Submit",
    t: "The GitHub link, by the deadline",
    p: `One form: your name, your Yale email, the public GitHub link, and one sentence on what it does. Due ${DEADLINE_HUMAN}.`,
  },
  {
    k: "Prizes",
    t: "Three winners, three months of Cursor each",
    p: "Courtesy of SpaceXAI. Judged on usefulness, craft, and speed. Winners hear from us by email within a few days.",
  },
];

const STEPS = [
  { n: "1", t: "Redeem Cursor Pro", p: "If you were at the kickoff and have not yet, use the room code. Pro is what unlocks Grok Bot.", href: REDEEM_URL, cta: "Redeem" },
  { n: "2", t: "Build", p: "Open Cursor, pick the one thing you wish existed at Yale, and ship a first version. Small and working beats big and half done." },
  { n: "3", t: "Submit", p: "Push it to a public GitHub repo with the Cursor screenshot in the README, then send us the link.", href: FORM_URL, cta: "Open the form" },
];

export default function CompetitionPage() {
  return (
    <div className="bg-stage min-h-dvh text-fg">
      <div className="grid-overlay pointer-events-none fixed inset-0" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 py-5 md:px-8 md:py-6">
        <TopBar />
        <main className="pb-10 pt-10 md:pt-16">
          <p className="pixel-caps text-[0.8rem] tracking-[0.14em]">Kickoff competition · YaleAI × SpaceXAI</p>
          <h1 className="mt-3 text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            Rapid-fire <span className="teal-flow">Cursor</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-[clamp(1.15rem,2.2vw,1.5rem)] font-medium leading-snug">
            How quickly can you build an app for Yale students?
          </p>
          <p className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-muted">
            It started at the kickoff on Wednesday, September 9 and closes <span className="text-fg">{DEADLINE_HUMAN}</span>.
            Build something useful in Cursor, on the month of Cursor Pro SpaceXAI gave the room, and send us the GitHub link.
            Three winners each get three months of Cursor from SpaceXAI.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href={FORM_URL} target="_blank" rel="noopener noreferrer" className="cta px-6 py-3 text-[0.95rem]">
              Submit your project <span aria-hidden>→</span>
            </Link>
            <Link href={REDEEM_URL} target="_blank" rel="noopener noreferrer" className="ghost px-5 py-3 text-[0.95rem]">
              Redeem Cursor Pro
            </Link>
            <span className="text-[0.8rem] font-medium tracking-wide text-faint">or go to yale-ai.org/win</span>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {RULES.map((r, i) => (
              <AnimateIn key={r.k} delay={Math.min(i * 0.05, 0.3)}>
                <li className="glass glass-hover flex h-full flex-col p-6">
                  <p className="pixel-caps text-[0.7rem] tracking-[0.14em]">{r.k}</p>
                  <h2 className="mt-2 text-[1.35rem] font-bold leading-tight tracking-[-0.02em]">{r.t}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{r.p}</p>
                </li>
              </AnimateIn>
            ))}
          </ul>

          <section className="mt-14">
            <p className="pixel-caps text-[0.8rem] tracking-[0.14em]">How it works</p>
            <ol className="mt-4 grid gap-4 md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="glass flex h-full flex-col p-6">
                  <span className="pill-fill inline-flex h-9 w-9 items-center justify-center rounded-full text-[0.9rem] font-bold">{s.n}</span>
                  <h3 className="mt-4 text-[1.15rem] font-bold tracking-[-0.02em]">{s.t}</h3>
                  <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{s.p}</p>
                  {s.href && (
                    <Link href={s.href} target="_blank" rel="noopener noreferrer" className="u-lime mt-4 self-start text-[0.9rem] font-semibold text-fg">
                      {s.cta} <span aria-hidden>→</span>
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section className="glass mt-12 p-6 md:p-8">
            <p className="pixel-caps text-[0.7rem] tracking-[0.14em]">The fine print</p>
            <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed text-muted">
              <li>Open to Yale students. Submit with your Yale email.</li>
              <li>One submission per person or team. Teams of up to three; list everyone on the form.</li>
              <li>The repository must be public and must include the Cursor screenshot in its README.</li>
              <li>Judged by the YaleAI board on usefulness to Yale students, craft, and how far you got in the time.</li>
              <li>Winners are contacted by email within a few days of the deadline. SpaceXAI applies the three months of Cursor to the winners&apos; accounts.</li>
              <li>
                Questions: <Link href={`mailto:${CONTACT_EMAIL}`} className="u-lime text-fg">{CONTACT_EMAIL}</Link>, or the YaleAI Slack at{" "}
                <Link href="/slack" className="u-lime text-fg">yale-ai.org/slack</Link>.
              </li>
            </ul>
          </section>
        </main>
        <div className="mt-16 border-t border-line pt-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
