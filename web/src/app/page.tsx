import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import KickoffCard from "@/components/landing/KickoffCard";
import Programs from "@/components/landing/Programs";
import JoinForm from "@/components/landing/JoinForm";
import AnimateIn from "@/components/AnimateIn";

export default function Home() {
  return (
    <div className="bg-stage min-h-dvh text-white">
      <div className="dot-grid pointer-events-none fixed inset-0" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 py-5 md:px-8 md:py-6">
        <TopBar />
        <main className="flex flex-col gap-16 md:gap-24">
          <Hero />
          <AnimateIn>
            <KickoffCard />
          </AnimateIn>
          <Programs />
          <AnimateIn>
            <JoinForm />
          </AnimateIn>
        </main>
        <Footer />
      </div>
    </div>
  );
}
