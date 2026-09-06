import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import KickoffCard from "@/components/landing/KickoffCard";

/*
  One screen, no scroll on desktop: the page is a vertical stack pinned to the
  viewport height. Small screens fall back to a normal scrolling page.
*/
export default function Home() {
  return (
    <div className="bg-stage text-fg min-h-dvh stage-lock">
      <div className="pointer-events-none fixed inset-0 grid-overlay" aria-hidden />
      <div
        className="relative z-10 mx-auto flex h-full max-w-5xl flex-col px-5 py-4 md:px-8 md:py-[clamp(0.7rem,1.6vh,1.2rem)]"
        style={{ gap: "var(--gap)" }}
      >
        <TopBar />
        <main className="flex flex-1 flex-col justify-center lg:min-h-0" style={{ gap: "var(--gap)" }}>
          <Hero />
          <KickoffCard />
        </main>
        <div className="reveal reveal-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
