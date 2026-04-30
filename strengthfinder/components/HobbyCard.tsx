import { Hobby } from "@/lib/types";

interface Props {
  hobby: Hobby & { matchScore?: number; maxScore?: number };
}

const categoryColor: Record<string, string> = {
  Physical: "#f59e0b",
  Creative: "#ec4899",
  Intellectual: "#8b5cf6",
  Social: "#3b82f6",
  Mindful: "#10b981",
};

export default function HobbyCard({ hobby }: Props) {
  const pct =
    hobby.matchScore !== undefined && hobby.maxScore
      ? Math.round((hobby.matchScore / hobby.maxScore) * 100)
      : null;

  const cColor = categoryColor[hobby.category] ?? "var(--text-muted)";

  return (
    <div className="card" style={{ padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <span style={{ fontSize: "1.75rem", lineHeight: 1 }}>{hobby.icon}</span>
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
              {hobby.name}
            </h3>
            {pct !== null && (
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--green)",
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
            {hobby.description}
          </p>

          <span
            className="badge"
            style={{
              marginTop: 10,
              background: `${cColor}15`,
              color: cColor,
              border: `1px solid ${cColor}30`,
            }}
          >
            {hobby.category}
          </span>

          {pct !== null && (
            <div style={{ marginTop: 10 }}>
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
                      "linear-gradient(90deg, var(--green), #34d399)",
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
