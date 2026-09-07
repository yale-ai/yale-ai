import Link from "next/link";
import { LUMA_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="text-center pt-[clamp(0.4rem,1.4vh,1.2rem)]" aria-labelledby="hero-title">
      <span className="badge hero-badge max-w-full whitespace-normal sm:whitespace-nowrap">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-ink shadow-[0_0_0_3px_rgba(79,216,200,0.25)]" aria-hidden />
        <span className="font-semibold text-fg">Kickoff is Wednesday, Sep 9</span>
        <span className="text-faint" aria-hidden>·</span> sponsored by{" "}
        <span className="spacexai h-[0.7em] text-fg" role="img" aria-label="SpaceXAI" />
        <span className="text-faint" aria-hidden>·</span> a month of Cursor Pro+ for everyone, free credits, giveaways, more
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
        <span className="font-semibold text-fg">The people behind Cursor, Grok Bot, etc. are sponsoring our kickoff. And they want you there. Yes. You.</span>{" "}
        Frontier-lab tools, credits, and people are coming to campus. Project teams that ship, a fellowship, a research showcase, a direct line to the labs.{" "}
        <span className="font-semibold text-fg">All builders and people interested in AI are invited. All years.</span>
      </p>

      <div className="mt-[clamp(1rem,2.6vh,1.7rem)] flex flex-wrap items-center justify-center gap-3">
        <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="cta px-5 py-2.5 text-[0.78rem] md:text-[0.82rem]">
          RSVP for the kickoff <span aria-hidden>→</span>
        </Link>
        <Link href="/team" className="ghost px-4.5 py-2.5 text-[0.78rem] md:text-[0.82rem]">
          Meet the board
        </Link>
      </div>
      <p className="mono-aside mt-[clamp(0.6rem,1.6vh,1rem)]">built by Yalies who ship. no AI experience required.</p>
    </section>
  );
}
