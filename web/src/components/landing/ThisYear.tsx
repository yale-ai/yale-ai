import { PROGRAMS } from "@/lib/site";
import AnimateIn from "@/components/AnimateIn";

export default function ThisYear() {
  return (
    <section id="this-year" className="scroll-mt-20" aria-labelledby="this-year-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pixel-caps text-[0.64rem]">This year, in one glance</p>
        <h2 id="this-year-title" className="display mt-4 leading-[1.05] text-fg text-[clamp(2rem,4.6vw,3.4rem)]">
          A club with <span className="font-semibold">real outputs</span>, not a mailing list.
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
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-teal-ink">{p.when}</span>
                {p.tag && <span className="pill px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.12em]">{p.tag}</span>}
              </div>
              <h3 className="text-[1.02rem] font-semibold leading-snug text-fg">{p.title}</h3>
              <p className="text-[0.86rem] leading-relaxed text-muted">{p.blurb}</p>
            </li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  );
}
