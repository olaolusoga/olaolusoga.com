export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#27272a]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-[#6366f1] font-medium mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f4f4f5] mb-4">
            Let&apos;s talk
          </h2>
          <p className="text-[#a1a1aa] mb-10 leading-relaxed">
            Whether you&apos;re looking for an engineering leader, a board advisor,
            a speaker, or just want to connect — I&apos;m always open to a
            good conversation.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: "Advisory",
                desc: "Technical due diligence, board advisory, startup mentorship",
              },
              {
                label: "Speaking",
                desc: "Keynotes, panels, and workshops on engineering leadership",
              },
              {
                label: "Opportunities",
                desc: "Executive roles, fractional CTO, consulting engagements",
              },
            ].map(({ label, desc }) => (
              <div
                key={label}
                className="p-4 rounded-xl border border-[#27272a] bg-[#18181b]"
              >
                <p className="text-sm font-semibold text-[#f4f4f5] mb-1">{label}</p>
                <p className="text-xs text-[#71717a] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <a
            href="mailto:ola@olaolusoga.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#6366f1] text-white font-medium text-sm hover:bg-[#5558e6] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            ola@olaolusoga.com
          </a>
        </div>
      </div>
    </section>
  );
}
