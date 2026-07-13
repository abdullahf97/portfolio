import { ImageResponse } from "next/og";

export const alt = "Abdullah Farooq — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0f1c",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Accent grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Availability badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "9999px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "9999px",
              background: "#22c55e",
            }}
          />
          <span style={{ color: "#94a3b8", fontSize: "18px" }}>
            Open to Remote Opportunities
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#e2e8f0",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-2px",
          }}
        >
          Abdullah Farooq
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#3b82f6",
            marginBottom: "24px",
          }}
        >
          Software Engineer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#64748b",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          Multi-portal architecture · React · TypeScript · Node.js
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
          }}
        >
          {[
            { value: "10+", label: "Apps Shipped" },
            { value: "5", label: "Ecosystems" },
            { value: "3+", label: "Years" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <span style={{ fontSize: "36px", fontWeight: 700, color: "#3b82f6" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "16px", color: "#64748b", marginTop: "4px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
