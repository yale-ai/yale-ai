import Link from "next/link";
import { LUMA_URL, PILLS } from "@/lib/site";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-16" aria-labelledby="hero-title">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="pixel-caps text-[0.95rem] md:text-[1.05rem] leading-tight">
          Don&apos;t get
          <br />
          left behind.
        </p>
        <span className="pill pill-dark text-[0.8rem] md:text-[0.9rem]">
          Kickoff sponsored by <span className="font-mono tracking-[0.3em] uppercase text-white">SpaceX</span>
        </span>
      </div>

      <p className="mt-8 font-pixel text-[clamp(1.9rem,6.2vw,4.4rem)] font-medium leading-none tracking-[0.01em] text-white/95">
        Build the future at
      </p>
      <p className="mt-6 text-[clamp(1.4rem,3vw,2.2rem)] font-normal leading-none text-white/90">The</p>
      <h1 id="hero-title" className="mt-1 text-[clamp(4.2rem,14vw,10.5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
        Yale AI
      </h1>
      <p className="mt-3 text-[clamp(1.4rem,3vw,2.2rem)] font-normal leading-none text-white/90">Association</p>

      <p className="tracked-caps mt-8 text-[clamp(1.1rem,2.6vw,1.9rem)]">Kickoff 2026-27</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="pill pill-fill">1 month free Cursor Pro+ for everyone</span>
        <span className="pill pill-fill">win AI credits</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {PILLS.map((p) => (
          <span key={p} className="pill">{p}</span>
        ))}
        <span className="pill border-transparent px-1 text-white/60">...</span>
      </div>

      <p className="mt-10 max-w-2xl text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-white/80">
        Yale AI is the home for people who <span className="teal-flow font-semibold">build</span> with AI at Yale. Project teams that
        ship, a fellowship with a real curriculum, a research showcase, hands-on workshops, and a direct line to the
        companies at the frontier. <span className="font-semibold text-lime">All majors welcome.</span>
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-6 py-3 text-[0.85rem]">
          Apply to attend the kickoff <span aria-hidden>→</span>
        </Link>
        <Link href="#join" className="ghost px-5 py-3 text-[0.85rem]">
          Join the mailing list
        </Link>
      </div>
    </section>
  );
}
