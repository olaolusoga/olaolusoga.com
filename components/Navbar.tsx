"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#27272a] bg-[#0a0a0f]/90 backdrop-blur-md">
      <nav className="mx-auto max-w-5xl px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-semibold text-sm tracking-wider text-[#f4f4f5] hover:text-[#818cf8] transition-colors"
        >
          OLA OLUSOGA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-[#818cf8]"
                  : "text-[#a1a1aa] hover:text-[#f4f4f5]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="text-sm px-4 py-1.5 rounded-full border border-[#6366f1] text-[#818cf8] hover:bg-[#6366f1] hover:text-white transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#a1a1aa] hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#27272a] bg-[#0a0a0f] px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm ${
                pathname === href ? "text-[#818cf8]" : "text-[#a1a1aa]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="text-sm text-[#818cf8] w-fit"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
