// One place for the facts the site states.

export const SITE = {
  name: "Yale Artificial Intelligence Association",
  shortName: "Yale AI",
  url: "https://yale-ai.org",
  description:
    "Yale AI is the home for people who build with AI at Yale. Project teams, the Yale AI Fellowship, a research showcase, workshops, company trips, and a community of builders. All majors welcome.",
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
  sponsor: "SpaceX",
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

// What the club is doing this year, in the order the banner lists them.
export const PROGRAMS: { title: string; blurb: string; tag?: string }[] = [
  {
    title: "Project teams",
    blurb: "Small teams that ship a real AI project over the semester, paired with a professor or grad student, ending in a demo day.",
    tag: "apply",
  },
  {
    title: "Yale AI Fellowship",
    blurb: "A structured, application-based program with a curriculum run by the board. Finish it and you have something to show for it.",
    tag: "apply",
  },
  {
    title: "Research showcase",
    blurb: "Labs across Yale present their AI work to undergrads. Last year: ten labs, a hundred people in the room.",
  },
  {
    title: "Workshops",
    blurb: "Biweekly, hands-on. Coding agents, AI-native workflows, mini hackathons like building an agent to run your classes.",
  },
  {
    title: "Fireside chats",
    blurb: "Founders and researchers in conversation. First up this fall: a climate-AI founder, in November.",
  },
  {
    title: "Company trips",
    blurb: "A spring visit to a frontier AI company. Meet the people building the thing.",
  },
  {
    title: "AI x medicine, AI x finance",
    blurb: "Verticals for people who want to apply AI to a field, not just study it.",
  },
  {
    title: "Yale AI Symposium",
    blurb: "May. Project teams get a stage in front of the whole community.",
  },
];

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
