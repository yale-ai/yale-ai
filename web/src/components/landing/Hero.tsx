export default function Hero() {
  return (
    <section className="text-center" aria-labelledby="hero-title">
      <span className="badge reveal reveal-1 whitespace-nowrap text-[0.56rem] tracking-[0.18em] sm:text-[0.64rem] sm:tracking-[0.24em]">
        Yale Artificial Intelligence Association <span className="text-teal-ink" aria-hidden>·</span> 2026-27
      </span>
      <h1
        id="hero-title"
        className="reveal reveal-2 mt-[clamp(0.6rem,1.6vh,1.1rem)] font-bold leading-[0.96] tracking-[-0.035em] text-fg text-[clamp(2.4rem,min(6.4vw,8.4vh),5.2rem)]"
      >
        Where Yale builds <span className="teal-flow">with AI.</span>
      </h1>
      <p className="reveal reveal-3 mx-auto mt-[clamp(0.5rem,1.3vh,0.9rem)] max-w-3xl text-[clamp(0.95rem,min(1.7vw,2.1vh),1.2rem)] leading-snug text-muted">
        Project teams that ship, a fellowship with a real curriculum, a research showcase, hands-on workshops, and a direct line
        to the labs at the frontier. <span className="font-semibold text-fg">All majors. All years.</span>
      </p>
    </section>
  );
}
