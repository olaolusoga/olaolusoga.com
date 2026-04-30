import { Career } from "@/lib/types";

interface Props {
  career: Career & { matchScore?: number; maxScore?: number };
}

const growthColor: Record<string, string> = {
  "Very High": "#10b981",
  High: "#22d3ee",
  Moderate: "#f59e0b",
  Stable: "#8888a8",
  Variable: "#a78bfa",
  Growing: "#34d399",
  Evolving: "#f59e0b",
  Changing: "#f59e0b",
};

export default function CareerCard({ career }: Props) {
  const pct =
    career.matchScore !== undefined && career.maxScore
      ? Math.round((career.matchScore / career.maxScore) * 100)
      : null;

  const gColor = growthColor[career.growth] ?? "var(--text-muted)";

  return (
    <div className="card" style={{ padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{career.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.3,
              }}
            >
              {career.title}
            </h3>
            {pct !== null && (
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  whiteSpace: "nowrap",
                }}
              >
                {pct}% match
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              marginTop: 6,
              lineHeight: 1.6,
            }}
          >
            {career.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              💰 {career.salary}
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: gColor,
              }}
            >
              ↑ {career.growth} growth
            </span>
          </div>

          {pct !== null && (
            <div style={{ marginTop: 12 }}>
              <div
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: "var(--border)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${pct}%`,
                    background:
                      "linear-gradient(90deg, var(--accent), var(--accent-light))",
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
