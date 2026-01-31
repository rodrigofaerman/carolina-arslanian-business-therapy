import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mentoria Mental Fitness - Carolina Arslanian";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            width: 120,
            height: 4,
            background: "#fbbf24",
            marginBottom: 40,
          }}
        />

        {/* Title */}
        <h1
          style={{
            color: "#f8fafc",
            fontSize: 56,
            fontFamily: "serif",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Mentoria Mental Fitness
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#fbbf24",
            fontSize: 28,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          90 dias para líderes C-Level dominarem alta performance
        </p>

        {/* Author */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: 24,
          }}
        >
          Carolina Arslanian
        </p>

        {/* Badge */}
        <div
          style={{
            background: "rgba(251, 191, 36, 0.1)",
            border: "1px solid #fbbf24",
            borderRadius: 8,
            padding: "12px 24px",
            marginTop: 40,
            display: "flex",
          }}
        >
          <span style={{ color: "#fbbf24", fontSize: 20 }}>
            Turma Março 2026 • ROI 5-6x em 90 dias
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
