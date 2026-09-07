import LogoMark from "@/components/LogoMark";

// The lockup: the graph-Y mark and "Yale AI" in the body sans, heavy and tight.
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.38em] whitespace-nowrap font-bold tracking-[-0.03em] leading-none text-fg ${className}`}>
      <LogoMark className="h-[1.15em] w-[1.15em] shrink-0" />
      <span>Yale AI</span>
    </span>
  );
}
