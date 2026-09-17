import Link from "next/link";
import { LUMA_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="text-center pt-[clamp(0.4rem,1.4vh,1.2rem)]" aria-labelledby="hero-title">
      <span className="badge hero-badge max-w-full whitespace-normal">
        <span className="flex flex-col items-center gap-0.5 text-center leading-snug">
          <span className="font-semibold text-fg">Perplexity is at Tsai CITY on Mon, Sep 21 @ 6:30pm</span>
          <span>guaranteed interviews for a few of you, a live coding competition, prizes, free food</span>
        </span>
      </span>

      <h1
        id="hero-title"
        className="mt-[clamp(0.8rem,2vh,1.3rem)] leading-[1.04] text-fg text-[clamp(1.6rem,min(6.9vw,6.2vh),3.6rem)] whitespace-nowrap"
      >
        Build the <span className="font-semibold">future of AI</span> at Yale.
        <span className="mt-[0.12em] block whitespace-normal text-muted text-[0.82em]">
          Now backed by <span className="spacexai h-[0.64em] align-middle -translate-y-[0.1em] text-fg" role="img" aria-label="SpaceXAI" />
        </span>
      </h1>

      <p className="mx-auto mt-[clamp(0.9rem,2.2vh,1.4rem)] max-w-3xl leading-relaxed text-muted text-[clamp(0.88rem,min(1.45vw,1.8vh),0.98rem)]">
        <span className="text-fg">Perplexity is coming to campus this Monday to recruit. <em className="font-semibold underline decoration-1 underline-offset-4">And they want you there. Yes. You.</em></span>{" "}
        <span className="font-semibold text-fg">We&apos;re the hub for AI companies, research, networking, and learning on campus, and we want you in.</span>
      </p>

      <div className="mt-[clamp(1rem,2.6vh,1.7rem)] flex flex-wrap items-center justify-center gap-3">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-9 py-4 text-[1rem] md:text-[1.06rem]">
          Sign up on Luma <span aria-hidden>→</span>
        </Link>
      </div>
      <p className="mx-auto mt-[clamp(0.9rem,2.2vh,1.4rem)] max-w-2xl leading-relaxed text-muted text-[clamp(0.88rem,min(1.45vw,1.8vh),0.98rem)]">
        Come to Tsai CITY this Monday at 6:30pm to meet Perplexity&apos;s recruiting team, hear about internships and new grad roles, and compete
        in a live coding competition where top performers interview for new grad roles. We&apos;re personally very excited, and whether you want to learn about AI for the first time or are a seasoned builder, there&apos;s a place for you Monday. :)
      </p>
      <p className="mono-aside mt-[clamp(0.6rem,1.6vh,1rem)]">made for all Yalies interested in AI. first-year or senior? come anyway!</p>
    </section>
  );
}
