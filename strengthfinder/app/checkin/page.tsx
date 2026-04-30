"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadUserData, daysSince, clearUserData } from "@/lib/storage";
import { computeTopStrengths, computeGrowth } from "@/lib/scoring";
import { getStrengthById, virtueColors } from "@/lib/strengths";
import { UserData } from "@/lib/types";

const CHECK_IN_INTERVAL = 30;

export default function CheckInPage() {
  const [data, setData] = useState<UserData | null>(null);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    setData(loadUserData());
  }, []);

  function handleReset() {
    clearUserData();
    setData({ currentAssessment: null, checkIns: [] });
    setShowReset(false);
  }

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "120px 24px", color: "var(--text-muted)" }}>
        Loading…
      </div>
    );
  }

  if (!data.currentAssessment) {
    return (
      <div style={{ textAlign: "center", padding: "120px 24px" }}>
        <span style={{ fontSize: "2.5rem" }}>📊</span>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: "20px 0 12px",
          }}
        >
          No assessment yet
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: 28 }}>
          Take the assessment first to start tracking your growth.
        </p>
        <Link href="/assess" className="btn-primary">
          Take the Assessment →
        </Link>
      </div>
    );
  }

  const { currentAssessment, checkIns } = data;
  const days = daysSince(currentAssessment.completedAt);
  const daysUntilNext = Math.max(0, CHECK_IN_INTERVAL - days);
  const readyToReassess = days >= CHECK_IN_INTERVAL;

  const topStrengthIds = computeTopStrengths(currentAssessment.scores, 5);

  const prevAssessment = checkIns.length > 0 ? checkIns[checkIns.length - 1] : null;
  const growth = prevAssessment
    ? computeGrowth(prevAssessment.scores, currentAssessment.scores)
    : null;

  const assessedDate = new Date(currentAssessment.completedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px 100px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 10,
          }}
        >
          Your Progress
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Last assessed on {assessedDate} — {days} day{days !== 1 ? "s" : ""} ago
        </p>
      </div>

      {/* Status card */}
      <div
        className="card"
        style={{
          padding: "28px 32px",
          marginBottom: 40,
          borderColor: readyToReassess ? "var(--accent)" : "var(--border)",
          background: readyToReassess ? "var(--accent-glow)" : "var(--surface)",
        }}
      >
        {readyToReassess ? (
          <>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
              ✨ Time to reassess
            </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 20, fontSize: "0.9rem" }}>
              It's been {days} days since your last assessment. Retaking it lets you
              track how your strengths have shifted over time.
            </p>
            <Link href="/assess" className="btn-primary">
              Retake Assessment →
            </Link>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 8 }}>
              Come back in {daysUntilNext} day{daysUntilNext !== 1 ? "s" : ""}
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 16 }}>
              We recommend reassessing every 30 days to track meaningful growth. In the
              meantime, explore careers and hobbies matched to your current profile.
            </p>
            <div
              style={{
                height: 6,
                background: "var(--border)",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${(days / CHECK_IN_INTERVAL) * 100}%`,
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent-light))",
                  borderRadius: 3,
                  transition: "width 0.6s ease",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--text-dim)",
                marginTop: 8,
              }}
            >
              {days} / {CHECK_IN_INTERVAL} days
            </p>
          </>
        )}
      </div>

      {/* Current top strengths */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6, letterSpacing: "-0.01em" }}>
          Your Current Top 5
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 20 }}>
          {growth
            ? "Compared to your previous assessment — see how you've shifted."
            : "Your strengths from your most recent assessment."}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {topStrengthIds.map((id, i) => {
            const s = getStrengthById(id);
            if (!s) return null;
            const score = currentAssessment.scores[id];
            const delta = growth ? growth[id] : null;
            const color = virtueColors[s.virtue];

            return (
              <div key={id} className="card" style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: `${color}18`,
                      border: `1px solid ${color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                      }}
                    >
                      <span style={{ fontWeight: 700, fontSize: "0.9375rem" }}>{s.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {delta !== null && delta !== 0 && (
                          <span
                            style={{
                              fontSize: "0.8125rem",
                              fontWeight: 700,
                              color: delta > 0 ? "var(--green)" : "#ef4444",
                            }}
                          >
                            {delta > 0 ? `+${delta}` : delta}
                          </span>
                        )}
                        <span
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color,
                          }}
                        >
                          {score}/5
                        </span>
                      </div>
                    </div>

                    <div style={{ marginTop: 6, height: 3, background: "var(--border)", borderRadius: 2, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${(score / 5) * 100}%`,
                          background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* History */}
      {checkIns.length > 0 && (
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6, letterSpacing: "-0.01em" }}>
            Assessment History
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 20 }}>
            {checkIns.length} previous assessment{checkIns.length !== 1 ? "s" : ""} saved.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[...checkIns].reverse().map((ci, i) => {
              const top3 = computeTopStrengths(ci.scores, 3);
              const date = new Date(ci.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div
                  key={i}
                  className="card"
                  style={{ padding: "16px 20px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                      {date}
                    </span>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {top3.map((id) => {
                        const s = getStrengthById(id);
                        if (!s) return null;
                        const color = virtueColors[s.virtue];
                        return (
                          <span
                            key={id}
                            className="badge"
                            style={{
                              background: `${color}15`,
                              color,
                              border: `1px solid ${color}30`,
                            }}
                          >
                            {s.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Actions */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/results" className="btn-primary">
          View Full Results →
        </Link>
        <Link href="/explore" className="btn-ghost">
          Explore Careers
        </Link>
        <button
          className="btn-ghost"
          onClick={() => setShowReset(!showReset)}
          style={{ color: "var(--text-dim)", borderColor: "var(--border)" }}
        >
          Reset Data
        </button>
      </div>

      {showReset && (
        <div
          style={{
            marginTop: 16,
            padding: "16px 20px",
            background: "var(--surface)",
            border: "1px solid #ef444430",
            borderRadius: 10,
            fontSize: "0.875rem",
          }}
        >
          <p style={{ color: "var(--text-muted)", marginBottom: 12 }}>
            This will permanently delete all your assessment data and history. This cannot be undone.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={handleReset}
              style={{
                background: "#ef4444",
                color: "#fff",
                border: "none",
                borderRadius: 7,
                padding: "8px 16px",
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Yes, Delete Everything
            </button>
            <button className="btn-ghost" onClick={() => setShowReset(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
