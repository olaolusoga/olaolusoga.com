import { Strength } from "@/lib/types";
import { virtueColors, virtueLabels } from "@/lib/strengths";

interface Props {
  strength: Strength;
  score?: number;
  rank?: number;
  compact?: boolean;
}

export default function StrengthCard({ strength, score, rank, compact }: Props) {
  const color = virtueColors[strength.virtue];
  const pct = score !== undefined ? (score / 5) * 100 : null;

  return (
    <div
      className="card"
      style={{
        padding: compact ? "16px 20px" : "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {rank !== undefined && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--text-dim)",
          }}
        >
          #{rank}
        </div>
      )}

      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div
          style={{
            width: compact ? 36 : 44,
            height: compact ? 36 : 44,
            borderRadius: 10,
            background: `${color}18`,
            border: `1px solid ${color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: compact ? 12 : 14,
              height: compact ? 12 : 14,
              borderRadius: "50%",
              background: color,
              boxShadow: `0 0 8px ${color}80`,
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <h3
              style={{
                fontSize: compact ? "0.9375rem" : "1.0625rem",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.3,
              }}
            >
              {strength.name}
            </h3>
            <span
              className="badge"
              style={{
                background: `${color}15`,
                color,
                border: `1px solid ${color}30`,
              }}
            >
              {virtueLabels[strength.virtue]}
            </span>
          </div>

          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              marginTop: 2,
              fontStyle: "italic",
            }}
          >
            {strength.tagline}
          </p>

          {!compact && (
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                marginTop: 10,
                lineHeight: 1.65,
              }}
            >
              {strength.description}
            </p>
          )}

          {pct !== null && (
            <div style={{ marginTop: compact ? 8 : 14 }}>
              <div
                style={{
                  height: 4,
                  borderRadius: 2,
                  background: "var(--border)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                    borderRadius: 2,
                    transition: "width 0.6s ease",
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
