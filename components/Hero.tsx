import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse, #6366f1 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#18181b] px-4 py-1.5 text-xs text-[#818cf8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
            Technology Executive · VP Engineering · Board Advisor
          </div>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-[#f4f4f5] leading-[1.05]">
            Ola{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a78bfa]">
              Olusoga
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl">
            I build world-class engineering organizations and products that scale.
            20+ years turning complex technical challenges into business breakthroughs —
            from zero-to-one startups to Fortune 500 transformations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-[#6366f1] text-white text-sm font-medium hover:bg-[#5558e6] transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-full border border-[#27272a] text-[#a1a1aa] text-sm font-medium hover:border-[#3f3f46] hover:text-[#f4f4f5] transition-colors"
            >
              Read the Blog
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-[#27272a] grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: "20+", label: "Years in Tech" },
              { value: "$2B+", label: "Value Created" },
              { value: "500+", label: "Engineers Led" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-[#f4f4f5]">{value}</p>
                <p className="text-xs text-[#71717a] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
