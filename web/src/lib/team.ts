// The 2026-27 board. Photos live in public/team/<slug>.jpg; a missing photo
// falls back to initials on the team page. An empty role hides the badge.

export type Member = {
  slug: string;
  name: string;
  role: string;
  email: string;
  classYear?: string;
  major?: string;
  bio?: string;
  linkedin?: string;
  website?: string;
  github?: string;
  x?: string;
  photo?: string;
};

export const TEAM: Member[] = [
  {
    slug: "aryan",
    name: "Aryan Agarwal",
    role: "Co-President",
    email: "aryan.agarwal@yale.edu",
    classYear: "2027",
    major: "Cognitive Science",
    bio: "Undergraduate researcher in the Turk-Browne lab at the Wu Tsai Institute. Debates for Yale on the APDA circuit.",
    linkedin: "https://www.linkedin.com/in/aryan-agarwal-5299a3208/",
    photo: "/team/aryan.jpg",
  },
  {
    slug: "addison",
    name: "Addison Shea",
    role: "Co-President",
    email: "addison.shea@yale.edu",
    classYear: "2029",
    major: "Physics + Energy Studies",
    bio: "Regeneron Science Talent Search finalist for spatial-statistics research on Arctic whale migration. Former NASA Langley intern. Writes for Yale Scientific.",
    linkedin: "https://www.linkedin.com/in/addison-shea-ba2468311/",
    photo: "/team/addison.jpg",
  },
  {
    slug: "filippo",
    name: "Filippo Fonseca",
    role: "Head of Development",
    email: "filippo.fonseca@yale.edu",
    classYear: "2028",
    major: "Mechanical Engineering + EECS",
    bio: "Roboticist and builder. Works on soft burrowing robots at the Faboratory and a bioreactor at the Integrative Cardiac Biomechanics Lab. Also leads Yale Undergraduate Robotics.",
    linkedin: "https://www.linkedin.com/in/filippo-fonseca/",
    website: "https://www.filippofonseca.com/",
    github: "https://github.com/filippo-fonseca",
    x: "https://x.com/FilippoFonseca",
    photo: "/team/filippo.jpg",
  },
  {
    slug: "hari",
    name: "Hari Viswanathan",
    role: "Head of Events",
    email: "hari.viswanathan@yale.edu",
  },
  {
    slug: "hanson",
    name: "Hanson Qin",
    role: "Treasurer",
    email: "hanson.qin@yale.edu",
    classYear: "2028",
    major: "Mathematics + Computer Science",
    bio: "Software engineer at the Yale Cancer Center's Blenman Innovation Group and founding engineer at a sports-analytics startup.",
    linkedin: "https://www.linkedin.com/in/hanson-q/",
    website: "https://hansonqin.com/",
    github: "https://github.com/hansonq888",
    photo: "/team/hanson.jpg",
  },
  {
    slug: "henry",
    name: "Henry Ng",
    role: "Head of Sponsorships",
    email: "henry.ng@yale.edu",
    bio: "Quantum computing and quant finance. Part of the team that won first place in the Alice & Bob challenge at MIT's iQuHack 2026.",
    linkedin: "https://www.linkedin.com/in/henrywn/",
  },
  {
    slug: "david",
    name: "David Antwi",
    role: "Projects Director",
    email: "david.antwi@yale.edu",
    major: "EECS",
    bio: "Researches wearable sensing for soft robotics at the Faboratory. Led a team to second place at the Google x Yale SOM Build with AI hackathon.",
    linkedin: "https://www.linkedin.com/in/david-antwi-b17727205/",
    photo: "/team/david.jpg",
  },
];

export function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
