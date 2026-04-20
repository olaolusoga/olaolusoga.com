const skills = [
  "Engineering Leadership",
  "Platform Architecture",
  "M&A Technical Due Diligence",
  "Product Strategy",
  "Team Building & Culture",
  "AI / ML Systems",
  "Cloud Infrastructure",
  "Technical Fundraising",
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#27272a]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#f4f4f5] leading-tight mb-6">
              Engineering leader with a bias for scale
            </h2>
            <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
              <p>
                I've spent two decades at the intersection of technology strategy and
                execution. Starting as a software engineer and growing into executive
                roles, I've built and scaled engineering organizations across fintech,
                healthcare, and enterprise SaaS — taking products from prototype to
                hundreds of millions of users.
              </p>
              <p>
                My superpower is translating business ambition into engineering
                reality. I believe great engineering culture is a competitive moat,
                and I've proven it at every stage — seed-funded startup to NASDAQ-listed
                company.
              </p>
              <p>
                Outside of work I advise early-stage founders, write about engineering
                leadership, and speak at conferences on building diverse, high-performing
                technology teams.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
              Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-[#27272a] bg-[#18181b] text-xs text-[#a1a1aa]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-xl border border-[#27272a] bg-[#18181b]">
              <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
                Currently
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-[#6366f1] text-lg mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-[#f4f4f5]">VP of Engineering</p>
                    <p className="text-xs text-[#71717a]">Apex Technologies · San Francisco</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#6366f1] text-lg mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-[#f4f4f5]">Board Advisor</p>
                    <p className="text-xs text-[#71717a]">3 early-stage startups</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#6366f1] text-lg mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-[#f4f4f5]">Writing & Speaking</p>
                    <p className="text-xs text-[#71717a]">Engineering leadership & AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
