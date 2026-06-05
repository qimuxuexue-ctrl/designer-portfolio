"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const leftLinks = [
  { href: "/about", label: "About" },
  { href: "/about", label: "Services" },
  { href: "/work", label: "Work" }
];

const rightLinks = [
  { href: "/about", label: "Journal" },
  { href: "/contact", label: "Contact me" }
];

const mobileLinks = [...leftLinks, ...rightLinks];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto grid max-w-[1880px] grid-cols-[1fr_auto_1fr] items-center px-7 py-6 md:px-12 md:py-8">
        <nav className="hidden items-center gap-20 font-sans text-[11px] font-semibold uppercase tracking-[0.44em] text-titleBlue md:flex">
          {leftLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="transition hover:text-titleBlue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="justify-self-start font-sans text-[20px] font-normal uppercase tracking-[0.32em] text-titleBlue md:justify-self-center md:text-2xl"
          onClick={() => setOpen(false)}
        >
          Halo Form Studio
        </Link>

        <nav className="hidden items-center justify-end gap-12 font-sans text-[11px] font-semibold uppercase tracking-[0.44em] text-titleBlue md:flex">
          {rightLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="transition hover:text-titleBlue"
            >
              {link.label}
            </Link>
          ))}
          <span className="font-sans text-sm font-normal normal-case tracking-normal text-titleBlue">
            ig
          </span>
          <span className="font-serif text-2xl font-normal normal-case tracking-normal text-titleBlue">
            p
          </span>
        </nav>

        <button
          className="col-start-3 inline-flex h-9 w-9 justify-self-end flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-8 bg-titleBlue" />
          <span className="h-0.5 w-8 bg-titleBlue" />
        </button>
      </div>

      {open ? (
        <nav className="border-t border-ink/10 px-7 py-7 md:hidden">
          <div className="flex flex-col gap-4 font-sans text-2xl font-semibold uppercase text-titleBlue">
            {mobileLinks.map((link) => (
              <Link
                key={`${link.href}-${link.label}-mobile`}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-titleBlue"
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
