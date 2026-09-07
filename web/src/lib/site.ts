// One place for the facts the site states.

export const SITE = {
  name: "Yale Artificial Intelligence Association",
  shortName: "Yale AI",
  url: "https://yale-ai.org",
  description:
    "Yale AI is the hub for AI companies, research, networking, and learning on campus. Kickoff Wednesday, September 9 at 8pm, Tsai CITY, sponsored by SpaceXAI: a month of Cursor Pro+ for everyone, free credits, giveaways, and more. All builders and people interested in AI are invited. All years.",
};

export const LUMA_URL = "https://luma.com/o5g51mh0";
export const CONTACT_EMAIL = "yaleaiassociation@gmail.com";

export const SOCIALS = {
  instagram: "https://www.instagram.com/yale_ai/",
  linkedin: "https://www.linkedin.com/company/yale-ai-association/",
  x: "", // not launched yet
};

export const KICKOFF = {
  label: "Kickoff 2026-27",
  dayLine: "Wednesday, September 9",
  timeLine: "8:00 to 9:30 PM",
  where: "Tsai CITY, ground floor",
  sponsor: "SpaceXAI",
  // Sep 9 2026, 8:00 to 9:30 PM America/New_York (EDT, UTC-4)
  startUtc: "20260910T000000Z",
  endUtc: "20260910T013000Z",
  location: "Tsai Center for Innovative Thinking at Yale, ground floor, New Haven, CT",
};

export function calendarUrl() {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: "Yale AI: Kickoff 2026-27",
    dates: `${KICKOFF.startUtc}/${KICKOFF.endUtc}`,
    location: KICKOFF.location,
    details: `Yale AI kickoff, sponsored by ${KICKOFF.sponsor}. A month of Cursor Pro+ for everyone who attends, AI credits to win, and what the club is doing this year.\n\nRSVP on Luma: ${LUMA_URL}\n\n${SITE.url}`,
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

// The year, in order. Kept general on purpose; details land as they are set.
export const PROGRAMS: { when: string; title: string; blurb: string }[] = [
  { when: "Wed, Sep 9", title: "Kickoff, sponsored by SpaceXAI", blurb: "The night the year starts. Perks, a demo, and the plan for everything below." },
  { when: "Opens at the kickoff", title: "Yale AI Fellowship", blurb: "A structured cohort with a curriculum. Finish it with something real to show." },
  { when: "Fall", title: "Project teams and demo day", blurb: "Small teams, real builds, and a demo day to close the term." },
  { when: "Every other week", title: "Hands-on learning workshops", blurb: "Agents, AI-native workflows, mini hackathons." },
  { when: "Fall", title: "Fireside chats", blurb: "Founders and researchers in conversation, in partnership with Tsai CITY." },
  { when: "Fall", title: "Research showcase", blurb: "Yale labs and grad students presenting their work to undergrads." },
  { when: "Spring", title: "Trips", blurb: "Top companies and AI labs in New York City and Boston. All paid for." },
  { when: "May", title: "Yale AI Symposium", blurb: "Project teams on stage in front of the whole community." },
];

// Who we already know, and who is in the pipeline.
export const CONNECTIONS = ["SpaceXAI", "Cursor", "OpenAI", "MIT-IBM Watson AI Lab"];

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
