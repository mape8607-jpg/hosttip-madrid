import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0C0C0E",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,165,90,0.25) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontSize: 88, fontWeight: 600, color: "#C9A55A" }}>Hosttip</span>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 4,
              color: "#8A8A96",
              textTransform: "uppercase",
              border: "1px solid #2A2A30",
              borderRadius: 999,
              padding: "6px 16px",
            }}
          >
            Madrid
          </span>
        </div>
        <div style={{ fontSize: 30, color: "#F2EFE8", marginTop: 22 }}>
          Pisos para estudiantes internacionales
        </div>
        <div style={{ fontSize: 22, color: "#52525C", marginTop: 10 }}>
          Almansa 55 · Eguilaz 3 · Princesa 8
        </div>
      </div>
    ),
    { ...size }
  );
}
