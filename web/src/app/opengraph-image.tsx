import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yale AI Association";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Renders the banner's top half as a link preview: black ground, grey bloom, big wordmark, lime pills.
export default function Image() {
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
          fontFamily: "Helvetica, Arial, sans-serif",
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
          <div style={{ display: "flex", fontSize: 168, fontWeight: 800, letterSpacing: -8, lineHeight: 0.95 }}>Yale AI</div>
          <div style={{ display: "flex", fontSize: 40, color: "rgba(255,255,255,0.9)" }}>Association</div>
        </div>
        <div style={{ display: "flex", gap: 12, fontSize: 22 }}>
          <div style={{ display: "flex", background: "#d9e4a8", color: "#0b0b0b", borderRadius: 999, padding: "10px 22px", fontWeight: 700 }}>
            1 month free Cursor Pro+
          </div>
          <div style={{ display: "flex", border: "2px solid #d9e4a8", color: "#d9e4a8", borderRadius: 999, padding: "10px 22px" }}>
            project teams
          </div>
          <div style={{ display: "flex", border: "2px solid #d9e4a8", color: "#d9e4a8", borderRadius: 999, padding: "10px 22px" }}>
            fellowship
          </div>
          <div style={{ display: "flex", border: "2px solid #d9e4a8", color: "#d9e4a8", borderRadius: 999, padding: "10px 22px" }}>
            all majors welcome
          </div>
        </div>
      </div>
    ),
    size,
  );
}
