"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em]"
          onClick={() => setOpen(false)}
        >
          North Studio
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.14em] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-clay ${
                pathname.startsWith(link.href) ? "text-clay" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="inline-flex h-9 w-9 items-center justify-center border border-ink/25 text-xs uppercase md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "X" : "M"}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-ink/10 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-2xl font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-clay"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
