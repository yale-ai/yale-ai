// One place for the facts the site states.

export const SITE = {
  name: "Yale Artificial Intelligence Association",
  shortName: "Yale AI",
  url: "https://yale-ai.org",
  description:
    "Yale AI is the home for people who build with AI at Yale. Project teams, the Yale AI Fellowship, a research showcase, workshops, company trips, and a community of builders. All builders and people interested in AI are invited. All years.",
};

export const LUMA_URL = "https://luma.com/o5g51mh0";
export const CONTACT_EMAIL = "filippo.fonseca@yale.edu";

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

// The year, in order. Dates are what the board has set so far.
export const PROGRAMS: { when: string; title: string; blurb: string }[] = [
  {
    when: "Wed, Sep 9",
    title: "Kickoff, sponsored by SpaceXAI",
    blurb: "A month of Cursor Pro+ for everyone in the room, an exclusive Grok Bot demo, a competition for SpaceXAI credits, boba.",
  },
  {
    when: "Applications open at the kickoff",
    title: "Yale AI Fellowship",
    blurb: "A structured cohort with a curriculum run by the board. Finish it and you have something real to point to.",
  },
  {
    when: "Fall",
    title: "Project teams and demo day",
    blurb: "Small teams, paired with a professor or grad student, shipping one real thing. A poster-session demo day closes the term.",
  },
  {
    when: "Every other week",
    title: "Hands-on workshops",
    blurb: "Coding agents, AI-native workflows, mini hackathons. Build an agent that runs your classes.",
  },
  {
    when: "Nov 10",
    title: "Fireside chat with a climate-AI founder",
    blurb: "In partnership with SciCity. We lead the conversation, you bring the questions.",
  },
  {
    when: "Fall",
    title: "Research showcase",
    blurb: "Ten Yale labs, grad students presenting to undergrads. Last year a hundred people came.",
  },
  {
    when: "Spring",
    title: "Company trip",
    blurb: "A day inside top companies and AI labs in New York City and Boston. All paid for.",
  },
  {
    when: "May",
    title: "Yale AI Symposium",
    blurb: "Project teams get a stage in front of the whole Yale AI community.",
  },
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
