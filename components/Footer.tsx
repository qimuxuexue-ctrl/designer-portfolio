"use client";

import Link from "next/link";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full overflow-hidden bg-bookingBlue text-center text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="font-display text-4xl font-black text-sunYellow md:text-5xl">
          {t("footer.title")}
        </h2>
        <p className="mx-auto mt-9 max-w-2xl text-base font-medium leading-8 text-white md:text-lg">
          {t("footer.body")}
        </p>
        <Link
          className="mx-auto mt-9 inline-flex w-full max-w-64 justify-center bg-sunYellow px-8 py-4 text-xs font-black uppercase tracking-[0.45em] text-titleBlue transition hover:brightness-95 md:px-12 md:tracking-[0.55em]"
          href="/contact"
        >
          {t("footer.email")}
        </Link>
        <div className="mt-12 text-base font-medium leading-7 text-white">
          <a className="transition hover:text-sunYellow" href="mailto:qimuxuexue@gmail.com">
            qimuxuexue@gmail.com
          </a>
          <p>{t("footer.base")}</p>
          <p>{t("footer.global")}</p>
        </div>
        <div className="mt-7 flex justify-center gap-8 text-white">
          <SocialIconLinks colorClassName="text-white hover:text-sunYellow" />
        </div>
      </div>
    </footer>
  );
}
