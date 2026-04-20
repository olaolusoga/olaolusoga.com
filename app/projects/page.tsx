import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Ola Olusoga",
  description:
    "Selected projects and work across engineering leadership, platform architecture, and technology strategy.",
};

const projects = [
  {
    title: "Apex AI Suite",
    company: "Apex Technologies",
    year: "2023–2024",
    category: "Product",
    description:
      "Led the engineering vision and execution for Apex's first AI-powered product suite — including intelligent document processing, anomaly detection, and predictive cash flow modeling. Shipped to 2,000+ enterprise customers within 8 months of inception.",
    impact: [
      "8-month zero-to-launch timeline",
      "2,000+ enterprise customers",
      "30% reduction in manual processing time for users",
    ],
    tags: ["AI/ML", "Product Leadership", "Python", "GCP"],
  },
  {
    title: "Platform Re-architecture (0→50M DAU)",
    company: "Apex Technologies",
    year: "2021–2023",
    category: "Infrastructure",
    description:
      "Designed and oversaw the full re-architecture of Apex's core platform to support hypergrowth — from 2M to 50M daily active users in under 24 months. Introduced event-driven architecture, global CDN strategy, and multi-region active-active deployment.",
    impact: [
      "25x DAU growth in 24 months",
      "40% infrastructure cost reduction",
      "99.98% availability SLA achieved",
    ],
    tags: ["Architecture", "Distributed Systems", "Kubernetes", "AWS"],
  },
  {
    title: "DataStream Real-Time Analytics Platform",
    company: "DataStream Inc.",
    year: "2018–2021",
    category: "Platform",
    description:
      "Built DataStream's core data platform from the ground up — a petabyte-scale, real-time analytics engine handling 10M+ events per second. This platform became the primary technical differentiator for DataStream's Series C fundraising.",
    impact: [
      "10M+ events/second throughput",
      "Petabyte-scale storage layer",
      "Core asset in $95M Series C",
    ],
    tags: ["Data Engineering", "Kafka", "Flink", "Snowflake"],
  },
  {
    title: "Stripe Connect Architecture",
    company: "Stripe",
    year: "2016–2018",
    category: "Platform",
    description:
      "Co-designed the foundational architecture for Stripe Connect, enabling multi-party payment flows for marketplace platforms. Connect is now one of Stripe's core product lines, used by Shopify, Lyft, and thousands of other platforms.",
    impact: [
      "Core architecture still in production",
      "Enabled marketplace payment model",
      "Hundreds of millions in GMV facilitated",
    ],
    tags: ["Payments", "Ruby", "API Design", "Distributed Systems"],
  },
  {
    title: "Google Cloud Pub/Sub — Scale & Reliability",
    company: "Google",
    year: "2012–2015",
    category: "Infrastructure",
    description:
      "Tech lead for reliability and scale features on Google Cloud Pub/Sub. Designed the retry and dead-letter queue subsystem, overhauled throughput management, and shipped the ordering guarantee feature — all now standard features used by millions of developers.",
    impact: [
      "Trillions of messages/month",
      "Ordering guarantees feature shipped",
      "DLQ subsystem still in production",
    ],
    tags: ["Cloud Infrastructure", "Go", "C++", "Distributed Systems"],
  },
  {
    title: "Open-Source: EngMetrics",
    company: "Personal",
    year: "2022",
    category: "Open Source",
    description:
      "An open-source CLI and dashboard for engineering leaders to track team health metrics: cycle time, deployment frequency, change failure rate, and MTTR. Built to make DORA metrics actionable for teams without a dedicated platform engineering function.",
    impact: [
      "2,400+ GitHub stars",
      "Used by 150+ companies",
      "Featured in LeadDev newsletter",
    ],
    tags: ["TypeScript", "Next.js", "Open Source", "DORA Metrics"],
  },
];

const categoryColors: Record<string, string> = {
  Product: "text-purple-400 bg-purple-900/20 border-purple-800/40",
  Infrastructure: "text-blue-400 bg-blue-900/20 border-blue-800/40",
  Platform: "text-emerald-400 bg-emerald-900/20 border-emerald-800/40",
  "Open Source": "text-amber-400 bg-amber-900/20 border-amber-800/40",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
          Projects
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-4">
          Selected Work
        </h1>
        <p className="text-[#a1a1aa] max-w-xl">
          A selection of engineering and product initiatives I've led or been a core
          contributor to — from startup infrastructure to enterprise AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group p-6 rounded-xl border border-[#27272a] bg-[#18181b] hover:border-[#3f3f46] transition-all flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-base font-semibold text-[#f4f4f5] leading-snug mb-1">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#71717a]">{project.company}</span>
                  <span className="text-xs text-[#52525b]">·</span>
                  <span className="text-xs text-[#52525b]">{project.year}</span>
                </div>
              </div>
              <span
                className={`shrink-0 text-xs px-2.5 py-1 rounded-full border ${
                  categoryColors[project.category] ??
                  "text-[#818cf8] bg-indigo-900/20 border-indigo-800/40"
                }`}
              >
                {project.category}
              </span>
            </div>

            <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            <div className="space-y-2 mb-5">
              {project.impact.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[#6366f1] text-xs mt-0.5 shrink-0">✦</span>
                  <span className="text-xs text-[#71717a]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-[#1f1f23] border border-[#27272a] text-[#71717a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#27272a]">
        <p className="text-[#a1a1aa] mb-2">
          Interested in working together on something ambitious?
        </p>
        <Link
          href="/#contact"
          className="text-sm text-[#818cf8] hover:text-[#6366f1] transition-colors"
        >
          Let&apos;s talk →
        </Link>
      </div>
    </div>
  );
}
