import Link from "next/link";
import { LUMA_URL } from "@/lib/site";

/*
  Slim strip above everything. The Yale Y is set in YaleNew Bold on a
  Yale-blue disc, as on yalerover.com. The link points at the kickoff RSVP.
*/
export default function AnnounceBar() {
  return (
    <div className="announce">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center">
        <span className="yale-y" aria-hidden>Y</span>
        <p className="announce-text">
          We&apos;re the home for people who build with AI at Yale. All builders and people interested in AI are invited. All years.{" "}
          <span className="block sm:inline">Will you join us?</span>{" "}
          <Link href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="group">
            <span className="whitespace-nowrap text-teal-ink underline decoration-teal-ink/60 decoration-1 underline-offset-[3px] transition-colors group-hover:text-fg group-hover:decoration-fg">
              RSVP for the kickoff <span aria-hidden>→</span>
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
