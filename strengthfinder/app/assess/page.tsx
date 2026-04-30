"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { strengths, virtueColors, virtueLabels } from "@/lib/strengths";
import { saveAssessment, loadUserData } from "@/lib/storage";
import { StrengthId, AssessmentResult } from "@/lib/types";

const SCALE = [
  { value: 1, label: "Rarely" },
  { value: 2, label: "Sometimes" },
  { value: 3, label: "Often" },
  { value: 4, label: "Usually" },
  { value: 5, label: "Always" },
];

export default function AssessPage() {
  const router = useRouter();
  const [step, setStep] = useState<"intro" | "quiz" | "done">("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Partial<Record<StrengthId, number>>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [hasExisting, setHasExisting] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const data = loadUserData();
    setHasExisting(data.currentAssessment !== null);
  }, []);

  const current = strengths[currentIndex];
  const progress = ((currentIndex + (selected !== null ? 1 : 0)) / strengths.length) * 100;
  const isLast = currentIndex === strengths.length - 1;
  const color = virtueColors[current.virtue];
  const answeredCount = Object.keys(scores).length + (selected !== null ? 1 : 0);

  function handleSelect(value: number) {
    if (animating) return;
    setSelected(value);

    if (!isLast) {
      setAnimating(true);
      setTimeout(() => {
        setScores((prev) => ({ ...prev, [current.id]: value }));
        setCurrentIndex((i) => i + 1);
        setSelected(null);
        setAnimating(false);
      }, 320);
    }
  }

  function handleBack() {
    if (currentIndex === 0) return;
    const prevId = strengths[currentIndex - 1].id;
    const prevScore = scores[prevId];
    const newScores = { ...scores };
    delete newScores[prevId];
    setScores(newScores);
    setCurrentIndex((i) => i - 1);
    setSelected(prevScore ?? null);
  }

  function handleFinish() {
    if (selected === null) return;
    const finalScores = {
      ...scores,
      [current.id]: selected,
    } as Record<StrengthId, number>;

    const result: AssessmentResult = {
      scores: finalScores,
      completedAt: new Date().toISOString(),
      version: 1,
    };

    saveAssessment(result);
    router.push("/results");
  }

  if (step === "intro") {
    return (
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "3rem" }}>🌱</span>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: "20px 0 16px",
          }}
        >
          {hasExisting ? "Retake the Assessment" : "Discover Your Strengths"}
        </h1>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1rem",
            lineHeight: 1.75,
            marginBottom: 16,
          }}
        >
          You'll answer 24 questions — one for each character strength. For each
          one, rate how true the statement is for you on a scale from{" "}
          <strong style={{ color: "var(--text)" }}>Rarely</strong> to{" "}
          <strong style={{ color: "var(--text)" }}>Always</strong>.
        </p>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          There are no right answers. Answer quickly and go with your gut —
          your first instinct is usually the most accurate.
        </p>

        {hasExisting && (
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "14px 20px",
              marginBottom: 28,
              fontSize: "0.875rem",
              color: "var(--text-muted)",
            }}
          >
            ⚠️ Retaking will archive your current results and start fresh. Your
            history is preserved.
          </div>
        )}

        <button
          className="btn-primary"
          style={{ fontSize: "1rem", padding: "14px 32px" }}
          onClick={() => setStep("quiz")}
        >
          {hasExisting ? "Retake →" : "Start Assessment →"}
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 24px 80px" }}>
      {/* Progress */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          <span>
            Question {currentIndex + 1} of {strengths.length}
          </span>
          <span>{answeredCount} answered</span>
        </div>
        <div
          style={{
            height: 4,
            background: "var(--border)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: `linear-gradient(90deg, var(--accent), var(--accent-light))`,
              borderRadius: 2,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      {/* Virtue label */}
      <div style={{ marginBottom: 12 }}>
        <span
          className="badge"
          style={{
            background: `${color}15`,
            color,
            border: `1px solid ${color}30`,
          }}
        >
          {virtueLabels[current.virtue]}
        </span>
      </div>

      {/* Question card */}
      <div
        className="card"
        style={{
          padding: "36px 32px",
          marginBottom: 32,
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.35,
            marginBottom: 16,
          }}
        >
          {current.name}
        </h2>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-muted)",
            fontStyle: "italic",
            marginBottom: 20,
          }}
        >
          {current.tagline}
        </p>
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.65,
            color: "var(--text)",
          }}
        >
          "{current.question}"
        </p>
      </div>

      {/* Rating scale */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10,
          marginBottom: 32,
        }}
      >
        {SCALE.map((s) => {
          const isActive = selected === s.value;
          return (
            <button
              key={s.value}
              onClick={() => handleSelect(s.value)}
              disabled={animating}
              style={{
                padding: "14px 8px",
                borderRadius: 10,
                border: isActive
                  ? `2px solid ${color}`
                  : "2px solid var(--border)",
                background: isActive ? `${color}18` : "var(--surface)",
                color: isActive ? color : "var(--text-muted)",
                cursor: animating ? "default" : "pointer",
                transition: "all 0.15s",
                fontSize: "0.8125rem",
                fontWeight: isActive ? 700 : 500,
                textAlign: "center",
                lineHeight: 1.3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: isActive ? color : "var(--text-dim)",
                }}
              >
                {s.value}
              </span>
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Scale labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 40,
          fontSize: "0.75rem",
          color: "var(--text-dim)",
        }}
      >
        <span>Not like me</span>
        <span>Exactly like me</span>
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
          className="btn-ghost"
          onClick={handleBack}
          disabled={currentIndex === 0}
          style={{
            opacity: currentIndex === 0 ? 0.4 : 1,
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
          }}
        >
          ← Back
        </button>

        {isLast && (
          <button
            className="btn-primary"
            onClick={handleFinish}
            disabled={selected === null}
            style={{
              opacity: selected === null ? 0.5 : 1,
              cursor: selected === null ? "not-allowed" : "pointer",
            }}
          >
            See My Results →
          </button>
        )}
      </div>
    </div>
  );
}
