"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/about", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "Journal" },
  { href: "/contact", label: "Work with me" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto grid max-w-[1880px] grid-cols-[1fr_auto_1fr] items-center px-7 py-6 md:px-12 md:py-8">
        <nav className="hidden items-center gap-20 text-[11px] font-black uppercase tracking-[0.42em] md:flex">
          {links.slice(0, 3).map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className={`transition hover:text-plum ${
                pathname.startsWith(link.href) ? "text-plum" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/"
          className="justify-self-start text-[20px] font-medium uppercase tracking-[0.18em] md:justify-self-center md:text-2xl"
          onClick={() => setOpen(false)}
        >
          Halo Form Studio
        </Link>
        <nav className="hidden items-center justify-end gap-12 text-[11px] font-black uppercase tracking-[0.42em] md:flex">
          {links.slice(3).map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className={`transition hover:text-clay ${
                pathname.startsWith(link.href) ? "text-clay" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="text-xl tracking-normal text-plum">◎</span>
          <span className="font-serif text-2xl normal-case tracking-normal text-plum">p</span>
        </nav>
        <button
          className="col-start-3 inline-flex h-9 w-9 justify-self-end flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-8 bg-plum" />
          <span className="h-0.5 w-8 bg-plum" />
        </button>
      </div>
      {open ? (
        <nav className="border-t border-ink/10 px-7 py-7 md:hidden">
          <div className="flex flex-col gap-4 text-2xl font-extrabold uppercase text-plum">
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}-mobile`}
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
