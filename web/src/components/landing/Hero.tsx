import Link from "next/link";
import { LUMA_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="text-center pt-1 lg:pt-0" aria-labelledby="hero-title">
      <span className="badge hero-badge max-w-full whitespace-nowrap">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-ink shadow-[0_0_0_3px_rgba(79,216,200,0.25)]" aria-hidden />
        Kickoff Sep 9 <span className="text-faint" aria-hidden>·</span> sponsored by{" "}
        <span className="spacexai h-[0.62em] text-fg" role="img" aria-label="SpaceXAI" />
      </span>

      <h1
        id="hero-title"
        className="mt-[clamp(0.45rem,1.2vh,0.9rem)] font-bold leading-[1] tracking-[-0.04em] text-fg text-[clamp(2rem,min(5.2vw,6.4vh),3.7rem)]"
      >
        Build the future of <span className="teal-flow">AI</span> at Yale.
        <span className="mt-[0.08em] block font-medium text-muted text-[0.8em]">
          Now backed by <span className="spacexai h-[0.72em] translate-y-[0.04em] text-fg" role="img" aria-label="SpaceXAI" />
        </span>
      </h1>

      <p className="mx-auto mt-[clamp(0.45rem,1.2vh,0.85rem)] max-w-3xl leading-snug text-muted text-[clamp(0.9rem,min(1.6vw,1.95vh),1.08rem)]">
        The people behind Grok are sponsoring our kickoff: <span className="font-semibold text-fg">frontier-lab tools, credits, and people</span> are
        coming to campus, and every Yale student who wants in gets a seat. Project teams that ship, a fellowship, a research showcase, and a
        direct line to the labs. <span className="font-semibold text-fg whitespace-nowrap">All majors. All years.</span>
      </p>

      <div className="mt-[clamp(0.5rem,1.4vh,0.9rem)] flex flex-wrap items-center justify-center gap-2.5">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-6 py-3 text-xs md:text-[0.78rem] uppercase tracking-[0.08em]">
          RSVP for the kickoff <span aria-hidden>→</span>
        </Link>
        <Link href="/team" className="ghost px-5 py-3 text-xs md:text-[0.78rem]">
          Meet the board
        </Link>
      </div>
    </section>
  );
}
