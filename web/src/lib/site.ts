// One place for the facts the site states.

export const SITE = {
  name: "Yale Artificial Intelligence Association",
  shortName: "YaleAI",
  url: "https://yale-ai.org",
  description:
    "YaleAI is the hub for AI companies, research, networking, and learning on campus. Next up: Perplexity is coming to Tsai CITY on Monday, September 21 from 6:30 to 9:00 PM to recruit, with a live coding competition, interviews for new grad roles, Perplexity Max subscriptions, and API credits up for grabs. All builders and people interested in AI are invited. All years.",
};

export const CONTACT_EMAIL = "yaleaiassociation@gmail.com";

export const SOCIALS = {
  instagram: "https://www.instagram.com/yale_ai/",
  linkedin: "https://www.linkedin.com/company/yale-ai-association/",
  x: "", // not launched yet
};

// The event in the spotlight on the landing page. When it has happened, add it
// to PAST_EVENTS below and put the next one here.
export const SPOTLIGHT = {
  label: "Recruiting event",
  title: "Perplexity recruiting night",
  dayLine: "Monday, September 21",
  timeLine: "6:30 to 9:00 PM",
  where: "Tsai CITY",
  partner: "Perplexity",
  partnerUrl: "https://www.perplexity.ai",
  lumaUrl: "https://luma.com/f7vu165w",
  // Sep 21 2026, 6:30 to 9:00 PM America/New_York (EDT, UTC-4)
  startUtc: "20260921T223000Z",
  endUtc: "20260922T010000Z",
  location: "Tsai Center for Innovative Thinking at Yale, New Haven, CT",
};

// The RSVP link the nav, the announce strip, and the hero point at: always the
// spotlight event's.
export const LUMA_URL = SPOTLIGHT.lumaUrl;

export function calendarUrl() {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `YaleAI x ${SPOTLIGHT.partner}: recruiting and live coding competition`,
    dates: `${SPOTLIGHT.startUtc}/${SPOTLIGHT.endUtc}`,
    location: SPOTLIGHT.location,
    details: `An hour with ${SPOTLIGHT.partner}'s recruiting team (internships and new grad roles), then a live coding competition. Top performers interview for new grad Member of Technical Staff roles. Prizes include ${SPOTLIGHT.partner} Max subscriptions and thousands of dollars in API credits. Free food and drinks. Spots are limited and registration is required.\n\nSign up on Luma: ${SPOTLIGHT.lumaUrl}\n\n${SITE.url}`,
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

// The kickoff, kept for the past-events section.
export const KICKOFF = {
  label: "Kickoff 2026-27",
  dayLine: "Wednesday, September 9",
  timeLine: "8:00 to 9:30 PM",
  where: "Tsai CITY, ground floor",
  sponsor: "SpaceXAI",
  lumaUrl: "https://luma.com/o5g51mh0",
  // Sep 9 2026, 8:00 to 9:30 PM America/New_York (EDT, UTC-4)
  startUtc: "20260910T000000Z",
  endUtc: "20260910T013000Z",
  location: "Tsai Center for Innovative Thinking at Yale, ground floor, New Haven, CT",
};

// Events that have happened, newest first. Each renders as a compact card in
// the "Past events" section. `art` is a picture in web/public; `artInvertsOnLight`
// is for white-on-transparent art like the Grok Bot. `mark` picks the partner
// logo drawn under the blurb.
export type PastEvent = {
  id: string;
  title: string;
  when: string;
  where: string;
  blurb: string;
  art: string;
  artAlt: string;
  artInvertsOnLight?: boolean;
  mark?: "spacexai" | "perplexity";
};

export const PAST_EVENTS: PastEvent[] = [
  {
    id: "kickoff-2026",
    title: `${KICKOFF.label}, sponsored by ${KICKOFF.sponsor}`,
    when: KICKOFF.dayLine,
    where: "Tsai CITY",
    blurb:
      "Everyone who came got a month of Cursor Pro, an exclusive Grok Bot demo, and a build competition for SpaceXAI credits. There was boba too.",
    art: "/bot.png",
    artAlt: "Grok Bot",
    artInvertsOnLight: true,
    mark: "spacexai",
  },
];

// The year, in order. Kept general on purpose; details land as they are set.
export const PROGRAMS: { when: string; title: string; blurb: string }[] = [
  { when: "Wed, Sep 9 (done)", title: "Kickoff, sponsored by SpaceXAI", blurb: "The night the year started. Perks, a demo, and the plan for everything below." },
  { when: "Mon, Sep 21", title: "Perplexity recruiting night", blurb: "An hour with the recruiting team, then a live coding competition. Top performers interview for new grad roles." },
  { when: "Opens at the kickoff", title: "YaleAI Fellowship", blurb: "A structured cohort with a curriculum. Finish it with something real to show." },
  { when: "Fall", title: "Project teams and demo day", blurb: "Small teams, real builds, and a demo day to close the term." },
  { when: "Every other week", title: "Hands-on learning workshops", blurb: "Agents, AI-native workflows, mini hackathons." },
  { when: "Fall", title: "Fireside chats", blurb: "Founders and researchers in conversation, in partnership with Tsai CITY." },
  { when: "Fall", title: "Research showcase", blurb: "Yale labs and grad students presenting their work to undergrads." },
  { when: "Spring", title: "Trips", blurb: "Top companies and AI labs in New York City and Boston. All paid for." },
  { when: "May", title: "YaleAI Symposium", blurb: "Project teams on stage in front of the whole community." },
];

// Who we already know, and who is in the pipeline.
export const CONNECTIONS = ["SpaceXAI", "Perplexity", "Cursor", "OpenAI", "MIT-IBM Watson AI Lab"];

export const PILLS = [
  "builders + community",
  "AI x medicine",
  "AI x finance",
  "kickoff challenge",
  "club trips",
  "portfolio projects",
  "connections to frontier AI companies",
  "fellowship",
  "research showcase",
];
