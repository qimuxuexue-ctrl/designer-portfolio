"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { LanguageSwitcher, useLanguage } from "@/components/LanguageProvider";

const leftLinks = [
  { href: "/about", labelKey: "nav.about" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/work", labelKey: "nav.work" }
];

const rightLinks = [
  { href: "/about", labelKey: "nav.journal" },
  { href: "/contact", labelKey: "nav.contact" }
];

const mobileLinks = [
  { href: "/", labelKey: "nav.home" },
  ...leftLinks,
  ...rightLinks
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { language, t } = useLanguage();
  const desktopTracking =
    language === "en" ? "tracking-[0.44em]" : "tracking-[0.18em]";
  const mobileTracking =
    language === "en" ? "tracking-[0.32em]" : "tracking-[0.14em]";

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto grid max-w-[1880px] grid-cols-[1fr_auto_1fr] items-center px-7 py-3 md:px-12 md:py-4">
        <nav
          className={`hidden items-center gap-14 font-sans text-[11px] font-semibold uppercase text-ink lg:flex ${desktopTracking}`}
        >
          {leftLinks.map((link) => (
            <Link
              key={`${link.href}-${link.labelKey}`}
              href={link.href}
              className="transition hover:text-titleBlue"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="relative z-10 h-12 w-44 justify-self-start transition hover:opacity-80 lg:h-12 lg:w-80 lg:justify-self-center"
          onClick={() => setOpen(false)}
          aria-label="Hinna home"
        >
          <Image
            src="/images/hinna-logo.svg"
            alt="Hinna"
            fill
            priority
            className="pointer-events-none scale-[2.25] object-contain"
          />
        </Link>

        <nav
          className={`hidden items-center justify-end gap-8 font-sans text-[11px] font-semibold uppercase text-ink lg:flex ${desktopTracking}`}
        >
          {rightLinks.map((link) => (
            <Link
              key={`${link.href}-${link.labelKey}`}
              href={link.href}
              className="transition hover:text-titleBlue"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <LanguageSwitcher />
          <SocialIconLinks
            colorClassName="text-titleBlue hover:text-titleBlue"
            gapClassName="gap-5"
            instagramClassName="h-7 w-7"
            mailClassName="h-6 w-6"
          />
        </nav>

        <button
          className="group relative z-20 col-start-3 inline-flex h-9 w-9 justify-self-end flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-0.5 w-8 bg-ink transition group-hover:bg-titleBlue" />
          <span className="h-0.5 w-8 bg-ink transition group-hover:bg-titleBlue" />
        </button>
      </div>

      <nav
        className={`fixed inset-0 z-[100] flex flex-col bg-titleBlue px-8 py-8 text-white transition duration-500 ease-out lg:hidden ${
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

        <div
          className={`flex flex-1 flex-col items-center justify-center gap-9 font-sans text-sm font-semibold uppercase ${mobileTracking}`}
        >
          {mobileLinks.map((link) => (
            <Link
              key={`${link.href}-${link.labelKey}-mobile`}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition hover:text-sunYellow"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 pb-8">
          <LanguageSwitcher inverse />
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
