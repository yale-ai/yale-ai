import Image from "next/image";
import { CONNECTIONS } from "@/lib/site";
import AnimateIn from "@/components/AnimateIn";

/*
  Trips: proof that the connections are real. Last spring's visit to the
  MIT-IBM Watson AI Lab, with the two parents' marks under the photos in their
  own colours, and this year's plan for NYC and Boston.
*/
export default function FieldTrips() {
  return (
    <section id="trips" className="scroll-mt-20" aria-labelledby="trips-title">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <AnimateIn>
          <div className="grid grid-cols-[1.35fr_1fr] items-stretch gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image src="/photos/mit-ibm-1.jpg" alt="A talk in the MIT-IBM Watson AI Lab auditorium" fill sizes="(min-width: 1024px) 35vw, 60vw" className="object-cover" />
            </div>
            <div className="relative h-full min-h-0 overflow-hidden rounded-2xl border border-line">
              <Image src="/photos/mit-ibm-2.jpg" alt="Yale AI members outside the MIT-IBM Watson AI Lab in Boston" fill sizes="(min-width: 1024px) 25vw, 40vw" className="object-cover" />
            </div>
            <div className="relative col-span-2 aspect-[21/8] overflow-hidden rounded-2xl border border-line">
              <Image src="/photos/mit-ibm-3.jpg" alt="A panel on stage at the MIT-IBM Watson AI Lab" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-[50%_35%]" />
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-muted text-[0.9rem]">
            Check out one of our trips from last year, where a bunch of us went on an all-expenses-paid trip to the MIT-IBM
            Watson AI Lab in Boston :). We also met up with the Harvard Machine Intelligence Group, had a mixer, and walked
            around the tech hub that is Boston.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <img src="/logos/mit.svg" alt="MIT" className="h-10 w-auto" />
            <span className="h-10 w-px bg-line" aria-hidden />
            <img src="/logos/mit-ibm-watson-ai-lab.png" alt="MIT-IBM Watson AI Lab" className="lab-logo h-10 w-auto" />
            <span className="mono-aside ml-auto">spring 2026 · Boston, MA</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="pixel-caps text-[0.82rem]">Trips</p>
          <h2 id="trips-title" className="display mt-4 leading-[1.05] text-fg text-[clamp(1.9rem,4.2vw,3.1rem)]">
            We go where the work is. <span className="font-semibold">All paid for.</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted text-[clamp(0.92rem,1.5vw,1.02rem)]">
            We&apos;ll get you in the rooms that matter. This year we are working on trips to top companies and AI labs in <span className="font-semibold text-fg">New York City and Boston</span>. Travel, food, the
            lot: <span className="font-semibold text-fg">all paid for.</span>
          </p>
          <p className="mt-4 font-semibold leading-relaxed text-fg text-[clamp(0.95rem,1.55vw,1.05rem)]">
            We have numerous top companies in the pipeline to connect you with. Being in the room is the whole point.
          </p>
          <ul className="mt-6 flex flex-wrap items-center gap-2">
            {CONNECTIONS.map((c) =>
              c === "SpaceXAI" ? (
                <li key={c} className="pill inline-flex items-center gap-2">
                  <span className="spacexai h-[0.62rem] text-fg" role="img" aria-label="SpaceXAI" />
                </li>
              ) : (
                <li key={c} className="pill">{c}</li>
              ),
            )}
            <li className="pill border-dashed text-faint">more in the pipeline</li>
          </ul>
        </AnimateIn>
      </div>
    </section>
  );
}
