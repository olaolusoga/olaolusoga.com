const talks = [
  {
    event: "QCon San Francisco",
    year: "2024",
    title: "AI-Augmented Engineering Teams: Patterns and Anti-Patterns",
    type: "Keynote",
  },
  {
    event: "LeadDev",
    year: "2023",
    title: "From IC to Executive: Staying Technical Without Coding Every Day",
    type: "Talk",
  },
  {
    event: "SREcon Americas",
    year: "2023",
    title: "Scaling Reliability: What 50M DAU Actually Teaches You",
    type: "Talk",
  },
  {
    event: "Fintech DevCon",
    year: "2022",
    title: "Building Compliance-First Engineering Culture in Fintech",
    type: "Panel",
  },
];

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 border-t border-[#27272a]">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
          Speaking
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f4f4f5] mb-4">
          On stage
        </h2>
        <p className="text-[#a1a1aa] max-w-xl mb-12">
          I speak at engineering and leadership conferences on topics ranging from
          AI-augmented teams to scaling culture. Available for keynotes, panels,
          and workshops.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {talks.map((talk, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-[#27272a] bg-[#18181b] hover:border-[#3f3f46] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-[#6366f1]">{talk.event}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#52525b]">{talk.type}</span>
                  <span className="text-xs text-[#52525b]">·</span>
                  <span className="text-xs text-[#52525b]">{talk.year}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#e4e4e7] leading-snug">{talk.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-xl border border-dashed border-[#3f3f46] bg-[#18181b]/50">
          <p className="text-sm font-medium text-[#f4f4f5] mb-1">
            Interested in having me speak?
          </p>
          <p className="text-xs text-[#71717a]">
            I&apos;m available for keynotes, fireside chats, and engineering leadership workshops.{" "}
            <a href="/#contact" className="text-[#818cf8] hover:underline">
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
