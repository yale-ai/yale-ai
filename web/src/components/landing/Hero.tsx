import Link from "next/link";
import { KICKOFF, LUMA_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="text-center pt-[clamp(0.4rem,1.4vh,1.2rem)]" aria-labelledby="hero-title">
      <h1
        id="hero-title"
        className="mt-[clamp(0.8rem,2vh,1.3rem)] leading-[1.04] text-fg text-[clamp(1.6rem,min(6.9vw,6.2vh),3.6rem)] whitespace-nowrap"
      >
        Build the <span className="font-semibold">future of AI</span> at Yale.
      </h1>

      <a
        href={KICKOFF.lumaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="badge hero-badge mt-[clamp(0.7rem,1.8vh,1.1rem)] max-w-full whitespace-normal text-balance leading-snug"
      >
        <span>
          Our kickoff was powered by{" "}
          <span className="spacexai h-[0.78em] align-middle -translate-y-[0.08em] text-fg" role="img" aria-label="SpaceXAI" />.{" "}
          <span className="font-semibold text-fg underline decoration-1 underline-offset-4">Learn more <span aria-hidden>→</span></span>
        </span>
      </a>

      <p className="mx-auto mt-[clamp(0.9rem,2.2vh,1.4rem)] max-w-3xl text-balance leading-relaxed text-fg text-[clamp(0.95rem,min(1.6vw,2vh),1.1rem)]">
        <span className="font-semibold">We&apos;re the hub for AI companies, research, networking, and learning at Yale, and we get you in the right rooms.</span>
      </p>

      <div className="mt-[clamp(1rem,2.6vh,1.7rem)] flex flex-wrap items-center justify-center gap-3">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta cta-wrap mx-4 px-7 py-4 text-[0.95rem] sm:mx-0 sm:px-9 md:text-[1.06rem]">
          <span>Sign up on Luma for our Perplexity &times; YaleAI event&nbsp;<span aria-hidden>→</span></span>
        </Link>
      </div>
      <p className="mono-aside mt-[clamp(0.6rem,1.6vh,1rem)]">made for all Yalies interested in AI. first-year or senior? come anyway!</p>
    </section>
  );
}
