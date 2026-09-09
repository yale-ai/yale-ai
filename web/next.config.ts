import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Short links printed on the kickoff deck (slides/ in this repo).
      { source: "/win", destination: "https://forms.gle/4LDrUb9xhVkJrjP49", permanent: false },
      { source: "/slack", destination: "https://join.slack.com/t/yale-ai/shared_invite/zt-495gi7v9z-0rO7~Oo1bvg4vVKkOgIMfw", permanent: false },
    ];
  },
};

export default nextConfig;
