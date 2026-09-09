import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YaleAI Association";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Poppins from Google Fonts, fetched at render time (an old UA gets the TTF, which Satori needs).
async function poppins(weight: 400 | 800) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=Poppins:wght@${weight}`, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0" },
  }).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
  if (!url) return null;
  return fetch(url).then((r) => r.arrayBuffer());
}

// Renders the banner's top half as a link preview: black ground, grey bloom, big wordmark, lime pills.
export default async function Image() {
  const [regular, bold] = await Promise.all([poppins(400), poppins(800)]);
  const fonts = [
    regular && { name: "Poppins", data: regular, weight: 400 as const, style: "normal" as const },
    bold && { name: "Poppins", data: bold, weight: 800 as const, style: "normal" as const },
  ].filter((f): f is NonNullable<typeof f> => Boolean(f));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0b0b0b",
          backgroundImage: "radial-gradient(circle at 92% 0%, rgba(120,120,120,0.45), transparent 45%)",
          color: "#fff",
          fontFamily: "Poppins, Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#4fd8c8", letterSpacing: 2, fontWeight: 700 }}>DON&apos;T GET LEFT BEHIND.</div>
          <div
            style={{
              display: "flex",
              border: "2px solid #d9e4a8",
              borderRadius: 999,
              padding: "10px 24px",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Kickoff sponsored by SpaceX
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, color: "rgba(255,255,255,0.9)" }}>Build the future at the</div>
          <div style={{ display: "flex", fontSize: 168, fontWeight: 800, letterSpacing: -8, lineHeight: 0.95 }}>YaleAI</div>
          <div style={{ display: "flex", fontSize: 40, color: "rgba(255,255,255,0.9)" }}>Association</div>
        </div>
        <div style={{ display: "flex", gap: 12, fontSize: 22 }}>
          <div style={{ display: "flex", background: "#d9e4a8", color: "#0b0b0b", borderRadius: 999, padding: "10px 22px", fontWeight: 700 }}>
            1 month free Cursor Pro
          </div>
          <div style={{ display: "flex", border: "2px solid #d9e4a8", color: "#d9e4a8", borderRadius: 999, padding: "10px 22px" }}>
            project teams
          </div>
          <div style={{ display: "flex", border: "2px solid #d9e4a8", color: "#d9e4a8", borderRadius: 999, padding: "10px 22px" }}>
            fellowship
          </div>
          <div style={{ display: "flex", border: "2px solid #d9e4a8", color: "#d9e4a8", borderRadius: 999, padding: "10px 22px" }}>
            all years welcome
          </div>
        </div>
      </div>
    ),
    fonts.length ? { ...size, fonts } : size,
  );
}
