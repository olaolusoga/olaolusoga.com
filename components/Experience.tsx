const roles = [
  {
    company: "Apex Technologies",
    title: "VP of Engineering",
    period: "2021 — Present",
    description:
      "Leading a 200+ person engineering org building next-generation financial infrastructure. Scaled platform to 50M+ daily active users, reduced infrastructure costs by 40%, and shipped the company's first AI-powered product suite.",
    highlights: ["50M+ DAU platform", "AI product suite launch", "$120M ARR growth"],
  },
  {
    company: "DataStream Inc.",
    title: "Head of Platform Engineering",
    period: "2018 — 2021",
    description:
      "Built the core data platform from the ground up, enabling real-time analytics at petabyte scale. Grew the team from 12 to 80 engineers. Instrumental in Series C fundraising with technical due diligence preparation.",
    highlights: ["Petabyte-scale platform", "Series C ($95M) support", "0→80 team growth"],
  },
  {
    company: "Stripe",
    title: "Senior Engineering Manager",
    period: "2015 — 2018",
    description:
      "Managed multiple product teams across payments infrastructure and developer tooling. Drove adoption of Stripe's API by 10,000+ new integrations per month and led the design of the Connect platform architecture.",
    highlights: ["10K+ monthly API integrations", "Connect architecture", "Global payments infra"],
  },
  {
    company: "Google",
    title: "Staff Software Engineer",
    period: "2010 — 2015",
    description:
      "Tech lead on Google Cloud Pub/Sub, one of the world's largest messaging systems. Designed and shipped features handling trillions of messages per month, and mentored a team of 15 engineers.",
    highlights: ["Trillions of msgs/month", "Cloud Pub/Sub tech lead", "15-person team mentor"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[#27272a]">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f4f4f5] mb-12">
          Where I&apos;ve worked
        </h2>

        <div className="space-y-0">
          {roles.map((role, i) => (
            <div
              key={i}
              className="group relative grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-8 border-t border-[#27272a] first:border-t-0"
            >
              <div className="md:pt-0.5">
                <p className="text-sm font-semibold text-[#f4f4f5]">{role.company}</p>
                <p className="text-xs text-[#71717a] mt-0.5">{role.period}</p>
              </div>

              <div>
                <p className="text-base font-semibold text-[#818cf8] mb-2">{role.title}</p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">
                  {role.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#1f1f23] border border-[#27272a] text-[#71717a]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
