import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/olaolusoga" },
  { label: "Twitter / X", href: "https://twitter.com/olaolusoga" },
  { label: "GitHub", href: "https://github.com/olaolusoga" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0f]">
      <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-sm text-[#f4f4f5]">Ola Olusoga</p>
          <p className="text-xs text-[#71717a] mt-1">Technology Executive · Engineering Leader</p>
        </div>

        <div className="flex items-center gap-6">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#71717a] hover:text-[#818cf8] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="text-xs text-[#52525b]">© {year} Ola Olusoga. All rights reserved.</p>
      </div>
    </footer>
  );
}
