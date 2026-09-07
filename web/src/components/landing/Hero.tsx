import Link from "next/link";
import { LUMA_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="text-center pt-[clamp(0.4rem,1.4vh,1.2rem)]" aria-labelledby="hero-title">
      <span className="badge hero-badge max-w-full whitespace-normal">
        <span className="flex flex-col items-center gap-0.5 text-center leading-snug">
          <span className="font-semibold text-fg">Kickoff is Wed, Sep 9 @ 8pm, Tsai CITY</span>
          <span>a month of Cursor Pro+ for everyone, free credits, giveaways, more</span>
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
        <span className="text-fg">The people behind Cursor, Grok Bot, etc. are sponsoring our kickoff. <em className="font-semibold underline decoration-1 underline-offset-4">And they want you there. Yes. You.</em></span>{" "}
        <span className="font-semibold text-fg">We&apos;re the hub for AI companies, research, networking, and learning on campus, and we want you in.</span>{" "}
        Come to our kickoff Wednesday at 8pm (Tsai CITY) and you&apos;ll get 1 month of Cursor Pro+ free, a shot at more credits, exclusive demos
        from SpaceXAI, and a first look at the projects, trips, and fellowships Yale AI is running this year. Seriously :).
      </p>

      <div className="mt-[clamp(1rem,2.6vh,1.7rem)] flex flex-wrap items-center justify-center gap-3">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-9 py-4 text-[1rem] md:text-[1.06rem]">
          RSVP for the kickoff <span aria-hidden>→</span>
        </Link>
      </div>
      <p className="mono-aside mt-[clamp(0.6rem,1.6vh,1rem)]">made for all Yalies interested in AI. first-year or senior? come anyway!</p>
    </section>
  );
}
