import Image from "next/image";
import { CONNECTIONS } from "@/lib/site";
import AnimateIn from "@/components/AnimateIn";

/*
  The trip to the MIT-IBM Watson AI Lab, as proof that the connections are
  real, and the pipeline line under it. The lab's two parents get their own
  colours: MIT cardinal and IBM blue.
*/
export default function FieldTrips() {
  return (
    <section id="connections" className="scroll-mt-20" aria-labelledby="trips-title">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <AnimateIn>
          <div className="grid grid-cols-[1.35fr_1fr] gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image src="/photos/mit-ibm-1.jpg" alt="A talk in the MIT-IBM Watson AI Lab auditorium" fill sizes="(min-width: 1024px) 35vw, 60vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line">
              <Image src="/photos/mit-ibm-2.jpg" alt="Yale AI members outside the MIT-IBM Watson AI Lab in Boston" fill sizes="(min-width: 1024px) 25vw, 40vw" className="object-cover" />
            </div>
          </div>
          <p className="mono-aside mt-3">spring 2026 · MIT-IBM Watson AI Lab, Boston, MA</p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="pixel-caps text-[0.64rem]">Connections</p>
          <h2 id="trips-title" className="display mt-4 leading-[1.05] text-fg text-[clamp(1.9rem,4.2vw,3.1rem)]">
            Last spring we sat in the{" "}
            <span className="whitespace-nowrap font-semibold">
              <span className="mit">MIT</span>-<span className="ibm">IBM</span> Watson AI Lab.
            </span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted text-[clamp(0.92rem,1.5vw,1.02rem)]">
            A room of Yale students, a lab director at the front, and the kind of conversation you cannot get from a
            lecture hall. That is one trip. This year the kickoff is backed by SpaceXAI, the spring trip has SpaceX New
            York and Cursor on the shortlist, and we are building the pipeline out from there.
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
