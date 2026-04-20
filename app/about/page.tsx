import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Ola Olusoga",
  description:
    "Technology executive with 20+ years building world-class engineering organizations across fintech, healthcare, and enterprise SaaS.",
};

const education = [
  {
    school: "Massachusetts Institute of Technology",
    degree: "M.S. Computer Science",
    year: "2004",
  },
  {
    school: "University of Lagos",
    degree: "B.Sc. Computer Science, First Class Honours",
    year: "2002",
  },
];

const values = [
  {
    title: "Clarity over cleverness",
    body: "The best engineering decisions are explainable. If you can't articulate why, keep thinking.",
  },
  {
    title: "Culture compounds",
    body: "A team with strong norms gets better every year. Invest in culture like infrastructure.",
  },
  {
    title: "Accountability without blame",
    body: "Systems fail; people learn. The goal is faster learning, not finding fault.",
  },
  {
    title: "Build the next generation",
    body: "The best measure of leadership is how many leaders you've developed.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f4f4f5] mb-6">
            Ola Olusoga
          </h1>

          <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
            <p>
              I'm a technology executive with over 20 years of experience building
              engineering organizations and products that scale. I've led engineering
              at companies ranging from Series A startups to publicly listed enterprises,
              always focused on one question: how do you build technology organizations
              that compound in value over time?
            </p>
            <p>
              Born in Lagos, I studied computer science at the University of Lagos before
              completing a master's degree at MIT. I started my career as a software
              engineer at a series of Bay Area startups before joining Google, where I
              spent five years as a staff engineer on Cloud infrastructure.
            </p>
            <p>
              Since leaving Google, I've served in executive roles across fintech,
              data infrastructure, and payments — most recently as VP of Engineering at
              Apex Technologies. I've also advised dozens of startups on engineering
              strategy, team building, and technical due diligence.
            </p>
            <p>
              I write and speak regularly on engineering leadership, AI in the
              enterprise, and what it actually takes to build high-performing technology
              organizations. When I'm not working, I'm usually reading, running, or
              trying to convince my kids that chess is cool.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Avatar placeholder */}
          <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a78bfa] flex items-center justify-center text-white font-bold text-6xl">
            O
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
              Education
            </p>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.school} className="flex gap-4">
                  <span className="text-xs text-[#52525b] mt-0.5 w-10 shrink-0">{e.year}</span>
                  <div>
                    <p className="text-sm font-medium text-[#f4f4f5]">{e.degree}</p>
                    <p className="text-xs text-[#71717a]">{e.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/olaolusoga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-full border border-[#27272a] text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-[#3f3f46] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/olaolusoga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-full border border-[#27272a] text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-[#3f3f46] transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://github.com/olaolusoga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-full border border-[#27272a] text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-[#3f3f46] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-[#27272a] pt-16">
        <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
          Principles
        </p>
        <h2 className="text-2xl font-bold text-[#f4f4f5] mb-8">
          What I believe
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-5 rounded-xl border border-[#27272a] bg-[#18181b]"
            >
              <p className="text-sm font-semibold text-[#f4f4f5] mb-2">{v.title}</p>
              <p className="text-sm text-[#71717a] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#27272a]">
        <p className="text-[#a1a1aa] mb-4">
          Interested in working together?
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6366f1] text-white text-sm font-medium hover:bg-[#5558e6] transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
