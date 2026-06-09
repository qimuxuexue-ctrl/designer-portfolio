"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SocialIconLinks } from "@/components/SocialIconLinks";

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
      <div className="mx-auto grid max-w-[1880px] grid-cols-[1fr_auto_1fr] items-center px-7 py-2 md:px-12 md:py-3">
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
            className="scale-150 object-contain"
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

      {open ? (
        <nav className="border-t border-ink/10 px-7 py-7 md:hidden">
          <div className="flex flex-col gap-4 font-sans text-2xl font-semibold uppercase text-ink">
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
