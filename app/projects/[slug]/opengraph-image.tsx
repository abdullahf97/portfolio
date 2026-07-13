import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INDUSTRY_COLORS: Record<string, string> = {
  Fintech: "#10b981",
  Hospitality: "#f59e0b",
  "Sports Booking": "#8b5cf6",
  Logistics: "#3b82f6",
  "E-commerce": "#ef4444",
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0f1c",
            color: "#e2e8f0",
            fontSize: "48px",
          }}
        >
          Project Not Found
        </div>
      ),
      { ...size }
    );
  }

  const accentColor = INDUSTRY_COLORS[project.industry] ?? "#3b82f6";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0f1c",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: accentColor,
          }}
        />

        {/* Industry badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 20px",
            background: `${accentColor}18`,
            border: `1px solid ${accentColor}40`,
            borderRadius: "9999px",
            marginBottom: "32px",
            alignSelf: "flex-start",
          }}
        >
          <span style={{ color: accentColor, fontSize: "20px", fontWeight: 600 }}>
            {project.industry}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#e2e8f0",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-1px",
          }}
        >
          {project.title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#64748b",
            marginBottom: "40px",
          }}
        >
          {project.subtitle}
        </div>

        {/* Metrics */}
        <div style={{ display: "flex", gap: "40px", marginTop: "auto" }}>
          {project.metrics.slice(0, 3).map((metric) => (
            <div
              key={metric.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{ fontSize: "36px", fontWeight: 700, color: accentColor }}
              >
                {metric.value}
              </span>
              <span style={{ fontSize: "16px", color: "#64748b", marginTop: "4px" }}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "60px",
            fontSize: "18px",
            color: "#334155",
          }}
        >
          Abdullah Farooq · abdullahfarooq.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
