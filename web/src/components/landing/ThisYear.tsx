import { PROGRAMS } from "@/lib/site";
import AnimateIn from "@/components/AnimateIn";

export default function ThisYear() {
  return (
    <section id="this-year" className="scroll-mt-20" aria-labelledby="this-year-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="pixel-caps text-[0.92rem]">What we are doing this year</p>
        <h2 id="this-year-title" className="display mt-4 leading-[1.05] text-fg text-[clamp(2rem,4.6vw,3.4rem)]">
          We&apos;re a club with <span className="font-semibold">real outputs</span>, not just a mailing list.
        </h2>
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
