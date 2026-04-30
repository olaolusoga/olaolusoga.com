import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Take the Assessment",
    body: "Answer 24 questions in about 3 minutes. Each one is designed to surface a distinct character strength — no trick questions, no wrong answers.",
  },
  {
    number: "02",
    title: "See Your Strength Profile",
    body: "Discover your top 5 strengths from 24 VIA character strengths — a research-backed framework used by millions worldwide to understand what they're built for.",
  },
  {
    number: "03",
    title: "Explore Your Matches",
    body: "Your strengths map directly to careers and hobbies ranked by fit. Understand not just what you could do — but what you'll actually thrive in.",
  },
  {
    number: "04",
    title: "Check Back & Track Growth",
    body: "Life changes. Reassess every 30 days and watch your strength profile shift over time. Use it as a compass, not a verdict.",
  },
];

const audiences = [
  {
    icon: "🔀",
    title: "People in Transition",
    body: "Whether you're leaving a job, rethinking your career, or just feeling stuck — Flourish gives you a data point that's always been true: who you actually are.",
  },
  {
    icon: "🎓",
    title: "Students & Explorers",
    body: "Not sure what to pursue? Start with your strengths. Flourish helps you move from \"I don't know\" to \"here's what makes sense\" — grounded in who you are, not just what sounds good.",
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 99,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            marginBottom: 32,
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          <span style={{ color: "var(--accent-light)" }}>✦</span>
          Based on the VIA Character Strengths framework
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
            background:
              "linear-gradient(160deg, var(--text) 40%, var(--text-muted) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Discover what you're built for
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--text-muted)",
            lineHeight: 1.75,
            maxWidth: 540,
            margin: "0 auto 40px",
          }}
        >
          Flourish maps your character strengths to the careers and hobbies
          where you'll actually thrive — not just what sounds good, but what
          fits who you are.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/assess" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 28px" }}>
            Take the Assessment →
          </Link>
          <Link href="/explore" className="btn-ghost" style={{ fontSize: "1rem", padding: "14px 28px" }}>
            Explore Careers
          </Link>
        </div>

        <p style={{ marginTop: 20, fontSize: "0.8125rem", color: "var(--text-dim)" }}>
          3 minutes · 24 questions · No account required
        </p>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", margin: "0 24px" }} />

      {/* How it works */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          How it works
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 48 }}>
          A simple process. A clear outcome.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {steps.map((step) => (
            <div key={step.number} className="card" style={{ padding: "28px 24px" }}>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  marginBottom: 12,
                  fontFamily: "monospace",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)", margin: "0 24px" }} />

      {/* Who it's for */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          Who it's for
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: 48 }}>
          Flourish is built for moments of transition and exploration.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {audiences.map((a) => (
            <div
              key={a.title}
              className="card"
              style={{
                padding: "32px 28px",
                background:
                  "linear-gradient(145deg, var(--surface) 0%, var(--surface-2) 100%)",
              }}
            >
              <span style={{ fontSize: "2rem" }}>{a.icon}</span>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  margin: "14px 0 10px",
                  lineHeight: 1.3,
                }}
              >
                {a.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "0 24px 100px" }}>
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
            padding: "60px 40px",
            borderRadius: 20,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              left: "50%",
              transform: "translateX(-50%)",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "var(--accent-glow)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 14,
              position: "relative",
            }}
          >
            Ready to find your direction?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              marginBottom: 28,
              fontSize: "1rem",
              position: "relative",
            }}
          >
            Take the 3-minute assessment. Strengths-based, research-backed, and completely free.
          </p>
          <Link
            href="/assess"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "14px 28px", position: "relative" }}
          >
            Start Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
