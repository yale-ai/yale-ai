import LogoMark from "@/components/LogoMark";

/*
  The lockup: the graph-Y mark on the left, and a two-line stack on the right
  that matches its height. "Yale AI" on top, "An Undergraduate Association"
  under it, small and tracked.
*/
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.45em] whitespace-nowrap leading-none text-fg ${className}`}>
      <LogoMark className="h-[2em] w-[2em] shrink-0" />
      <span className="flex flex-col justify-between" style={{ height: "2em" }}>
        <span className="font-bold tracking-[-0.03em] text-[1.08em] leading-none">Yale AI</span>
        <span className="text-[0.44em] font-semibold uppercase tracking-[0.14em] leading-none text-muted">An Undergraduate Association</span>
      </span>
    </span>
  );
}
