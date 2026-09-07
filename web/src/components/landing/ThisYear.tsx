import { PROGRAMS } from "@/lib/site";
import AnimateIn from "@/components/AnimateIn";

export default function ThisYear() {
  return (
    <section id="this-year" className="scroll-mt-20" aria-labelledby="this-year-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pixel-caps text-[0.82rem]">This year, in one glance</p>
        <h2 id="this-year-title" className="display mt-4 leading-[1.05] text-fg text-[clamp(2rem,4.6vw,3.4rem)]">
          We&apos;re a club with <span className="font-semibold">real outputs</span>, not just a mailing list.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted text-[clamp(0.92rem,1.5vw,1.02rem)]">
          Everything below has a date, an owner on the board, and a way in. Applications for the fellowship and the project
          teams open at the kickoff, and the rest is open to anyone who shows up.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((p, i) => (
          <AnimateIn key={p.title} delay={Math.min(i * 0.05, 0.35)}>
            <li className="glass glass-hover flex h-full flex-col gap-3 p-5">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-teal-ink">{p.when}</span>
              <h3 className="text-[1.02rem] font-semibold leading-snug text-fg">{p.title}</h3>
              <p className="text-[0.86rem] leading-relaxed text-muted">{p.blurb}</p>
            </li>
          </AnimateIn>
        ))}
      </ul>
      <p className="mono-aside mt-8 text-center">More on our programs this year coming soon.</p>
    </section>
  );
}
