"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { loadUserData } from "@/lib/storage";
import {
  computeTopStrengths,
  getCareerMatches,
  getHobbyMatches,
  encodeResults,
  decodeResults,
} from "@/lib/scoring";
import { getStrengthById } from "@/lib/strengths";
import { AssessmentResult, StrengthId } from "@/lib/types";
import StrengthCard from "@/components/StrengthCard";
import CareerCard from "@/components/CareerCard";
import HobbyCard from "@/components/HobbyCard";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const encoded = searchParams.get("r");
    if (encoded) {
      const decoded = decodeResults(encoded);
      if (decoded) {
        setResult(decoded);
        setLoading(false);
        return;
      }
    }

    const data = loadUserData();
    if (data.currentAssessment) {
      setResult(data.currentAssessment);
    }
    setLoading(false);
  }, [searchParams]);

  function handleShare() {
    if (!result) return;
    const encoded = encodeResults(result);
    const url = `${window.location.origin}/results?r=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "120px 24px", color: "var(--text-muted)" }}>
        Loading results…
      </div>
    );
  }

  if (!result) {
    return (
      <div style={{ textAlign: "center", padding: "120px 24px" }}>
        <p style={{ color: "var(--text-muted)", marginBottom: 24 }}>
          No results found. Take the assessment to see your strength profile.
        </p>
        <Link href="/assess" className="btn-primary">
          Take the Assessment →
        </Link>
      </div>
    );
  }

  const topStrengthIds = computeTopStrengths(result.scores, 5);
  const careerMatches = getCareerMatches(result.scores, 8);
  const hobbyMatches = getHobbyMatches(result.scores, 8);
  const completedDate = new Date(result.completedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 100px" }}>
      {/* Header */}
      <div style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
        <div>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: 8 }}>
            Assessed on {completedDate}
          </p>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Your Strength Profile
          </h1>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn-ghost" onClick={handleShare}>
            {copied ? "✓ Copied!" : "Share Results"}
          </button>
          <Link href="/checkin" className="btn-ghost">
            Check-in →
          </Link>
        </div>
      </div>

      {/* Top 5 Strengths */}
      <section style={{ marginBottom: 64 }}>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: 6,
            letterSpacing: "-0.01em",
          }}
        >
          Your Top 5 Strengths
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 24 }}>
          These are the qualities that come most naturally to you.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {topStrengthIds.map((id, i) => {
            const s = getStrengthById(id);
            if (!s) return null;
            return (
              <StrengthCard
                key={id}
                strength={s}
                score={result.scores[id]}
                rank={i + 1}
              />
            );
          })}
        </div>
      </section>

      {/* All Strengths Overview */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6, letterSpacing: "-0.01em" }}>
          Full Strength Snapshot
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 24 }}>
          How all 24 strengths scored across your assessment.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 10,
          }}
        >
          {(Object.entries(result.scores) as [StrengthId, number][])
            .sort(([, a], [, b]) => b - a)
            .map(([id, score]) => {
              const s = getStrengthById(id);
              if (!s) return null;
              return (
                <StrengthCard key={id} strength={s} score={score} compact />
              );
            })}
        </div>
      </section>

      {/* Career Matches */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6, letterSpacing: "-0.01em" }}>
          Career Matches
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 24 }}>
          Ranked by how well each career aligns with your strength profile.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {careerMatches.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* Hobby Matches */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6, letterSpacing: "-0.01em" }}>
          Hobby Matches
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: 24 }}>
          Activities and pursuits that play to your strengths.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {hobbyMatches.map((hobby) => (
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </div>
      </section>

      {/* Check-in CTA */}
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 16,
        }}
      >
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 10 }}>
          Come back in 30 days
        </h3>
        <p style={{ color: "var(--text-muted)", marginBottom: 24, fontSize: "0.9rem" }}>
          Strengths evolve. Check in monthly to track your growth and see how
          your profile shifts over time.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/checkin" className="btn-primary">
            Set Up Check-ins →
          </Link>
          <Link href="/explore" className="btn-ghost">
            Explore All Careers
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", padding: "120px 24px", color: "var(--text-muted)" }}>
          Loading…
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
