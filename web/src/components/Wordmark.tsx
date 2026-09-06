// The wordmark: "Yale AI" in Poppins Bold with a teal dot.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 whitespace-nowrap font-bold tracking-[-0.03em] leading-none text-fg ${className}`}>
      <span>Yale AI</span>
      <span aria-hidden className="inline-block h-[0.28em] w-[0.28em] rounded-full bg-teal-ink translate-y-[-0.05em]" />
    </span>
  );
}
