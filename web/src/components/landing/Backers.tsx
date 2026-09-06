export default function Backers() {
  return (
    <section aria-label="Sponsors" className="flex flex-col items-center gap-2 md:gap-3">
      <p className="font-medium text-muted text-[clamp(0.85rem,1.8vh,1.05rem)]">our kickoff is powered by</p>
      <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="backer" aria-label="SpaceXAI">
        <span className="spacexai block h-[clamp(1rem,2.4vh,1.35rem)] text-fg" role="img" aria-label="SpaceXAI" />
      </a>
    </section>
  );
}
