"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SocialIconLinks } from "@/components/SocialIconLinks";

const homeLink = { href: "/", label: "Home" };

const leftLinks = [
  { href: "/about", label: "About" },
  { href: "/about", label: "Services" },
  { href: "/work", label: "Work" }
];

const rightLinks = [
  { href: "/about", label: "Journal" },
  { href: "/contact", label: "Contact me" }
];

const mobileLinks = [homeLink, ...leftLinks, ...rightLinks];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto grid max-w-[1880px] grid-cols-[1fr_auto_1fr] items-center px-7 py-3 md:px-12 md:py-4">
        <nav className="hidden items-center gap-20 font-sans text-[11px] font-semibold uppercase tracking-[0.44em] text-ink md:flex">
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
          className="relative h-12 w-64 justify-self-start transition hover:opacity-80 md:h-12 md:w-80 md:justify-self-center"
          onClick={() => setOpen(false)}
          aria-label="Hinna home"
        >
          <Image
            src="/images/hinna-logo.svg"
            alt="Hinna"
            fill
            priority
            className="scale-[2.25] object-contain"
          />
        </Link>

        <nav className="hidden items-center justify-end gap-12 font-sans text-[11px] font-semibold uppercase tracking-[0.44em] text-ink md:flex">
          {rightLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="transition hover:text-titleBlue"
            >
              {link.label}
            </Link>
          ))}
          <SocialIconLinks
            colorClassName="text-titleBlue hover:text-titleBlue"
            gapClassName="gap-5"
            instagramClassName="h-7 w-7"
            mailClassName="h-6 w-6"
          />
        </nav>

        <button
          className="group col-start-3 inline-flex h-9 w-9 justify-self-end flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-8 bg-ink transition group-hover:bg-titleBlue" />
          <span className="h-0.5 w-8 bg-ink transition group-hover:bg-titleBlue" />
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-[60] flex flex-col bg-titleBlue px-8 py-8 text-white transition duration-500 ease-out md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
        aria-hidden={!open}
      >
        <button
          className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        >
          <span className="absolute h-0.5 w-8 rotate-45 bg-white" />
          <span className="absolute h-0.5 w-8 -rotate-45 bg-white" />
        </button>

        <div className="flex flex-1 flex-col items-center justify-center gap-9 font-sans text-sm font-semibold uppercase tracking-[0.32em]">
          {mobileLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}-mobile`}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition hover:text-sunYellow"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-center pb-8">
          <SocialIconLinks
            colorClassName="text-white hover:text-sunYellow"
            gapClassName="gap-8"
            instagramClassName="h-7 w-7"
            mailClassName="h-7 w-7"
          />
        </div>
      </nav>
    </header>
  );
}
