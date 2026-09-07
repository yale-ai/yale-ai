/*
  The mark: a Y drawn as a tiny graph. Three nodes joined at a centre, the
  shape of the letter and of the network the club is. Strokes follow the text
  colour; the centre node is lime, the outer nodes teal, so it reads on both
  themes and next to the SpaceXAI wordmark without borrowing its style.
*/
export default function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none">
        <path d="M16 14 L32 34" />
        <path d="M48 14 L32 34" />
        <path d="M32 34 V52" />
      </g>
      <circle cx="16" cy="14" r="6.5" fill="var(--teal-ink, #4fd8c8)" />
      <circle cx="48" cy="14" r="6.5" fill="var(--teal-ink, #4fd8c8)" />
      <circle cx="32" cy="52" r="6.5" fill="var(--teal-ink, #4fd8c8)" />
      <circle cx="32" cy="34" r="8" fill="var(--accent, #d9e4a8)" stroke="var(--background, #000)" strokeWidth="3" />
    </svg>
  );
}
