import { PROGRAMS } from "@/lib/site";
import AnimateIn from "@/components/AnimateIn";

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-24" aria-labelledby="programs-title">
      <p className="pixel-caps text-[0.7rem] tracking-[0.14em]">This year</p>
      <h2 id="programs-title" className="mt-3 text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-[1.02] tracking-[-0.03em]">
        Concrete things to join, not vague promises.
      </h2>
      <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-white/70">
        Everything below has a date, an owner on the board, and a way to sign up. The full calendar and applications go
        live at the kickoff.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((p, i) => (
          <AnimateIn key={p.title} delay={Math.min(i * 0.05, 0.3)}>
            <li className="card card-hover flex h-full flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[0.68rem] text-teal">{String(i + 1).padStart(2, "0")}</span>
                {p.tag && <span className="pill px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.12em]">{p.tag}</span>}
              </div>
              <h3 className="text-[1.05rem] font-semibold leading-snug">{p.title}</h3>
              <p className="text-[0.86rem] leading-relaxed text-white/65">{p.blurb}</p>
            </li>
          </AnimateIn>
        ))}
      </ul>
    </section>
  );
}
