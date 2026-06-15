"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const resumeItems = [
  {
    titleKey: "about.resume.1.title",
    metaKey: "about.resume.1.meta",
    yearKey: "about.resume.1.year"
  },
  {
    titleKey: "about.resume.2.title",
    metaKey: "about.resume.2.meta",
    year: "2024"
  },
  {
    titleKey: "about.resume.3.title",
    metaKey: "about.resume.3.meta",
    year: "2023"
  },
  {
    titleKey: "about.resume.4.title",
    metaKey: "about.resume.4.meta",
    yearKey: "about.resume.4.year"
  }
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="overflow-hidden bg-white text-titleBlue">
      <section className="about-reveal mx-auto max-w-[1120px] px-5 pb-14 pt-12 md:min-h-[760px] md:px-8 md:pb-24 md:pt-20">
        <div className="relative mx-auto flex max-w-[820px] flex-col items-center">
          <h1 className="relative z-10 max-w-[760px] text-center font-display text-[clamp(3.4rem,9vw,8.2rem)] font-black leading-[0.82]">
            {t("about.hero.1")}
            <br />
            {t("about.hero.2")}
            <br />
            {t("about.hero.3")}
          </h1>

          <div className="about-float relative -mt-5 aspect-[4/5] w-[76%] max-w-[390px] overflow-hidden bg-sunYellow shadow-[0_18px_50px_rgba(60,99,200,0.18)] md:-mt-10">
            <Image
              src="/images/about-statement.svg"
              alt="Studio mood placeholder"
              fill
              priority
              className="object-cover"
            />
            <p className="absolute inset-x-5 top-5 font-display text-[clamp(2.8rem,7vw,5rem)] font-black leading-[0.82] text-white">
              {t("about.overlay.1")}
              <br />
              {t("about.overlay.2")}
              <br />
              {t("about.overlay.3")}
              <br />
              {t("about.overlay.4")}
            </p>
          </div>

          <p className="mt-7 max-w-[420px] text-center text-sm font-medium leading-7 text-ink/70">
            {t("about.intro")}
          </p>
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] border-t border-titleBlue/20 px-5 py-14 md:grid-cols-[140px_1fr] md:px-8 md:py-24">
        <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-ember md:mb-0">
          {t("about.story.label")}
        </p>
        <h2 className="max-w-[780px] font-display text-[clamp(2.55rem,5.6vw,5.4rem)] font-black leading-[0.9]">
          {t("about.story")}
        </h2>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] gap-6 px-5 py-8 md:grid-cols-[0.9fr_1.25fr] md:items-end md:gap-10 md:px-8 md:py-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-bookingBlue md:translate-y-20">
          <Image
            src="/images/about-portrait.svg"
            alt="Portrait placeholder"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <Image
            src="/images/project-soft-archive.svg"
            alt="Reference object placeholder"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] gap-10 px-5 py-16 md:grid-cols-[140px_1fr] md:px-8 md:py-28">
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-ember">
          {t("about.approach.label")}
        </p>
        <div>
          <h2 className="max-w-[860px] font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.84]">
            {t("about.approach.title")}
          </h2>
          <div className="mt-10 grid gap-8 text-sm font-medium leading-7 text-ink/72 md:grid-cols-2 md:gap-14">
            <p>
              {t("about.approach.1")}
            </p>
            <p>
              {t("about.approach.2")}
            </p>
          </div>
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] border-y border-titleBlue/20 px-5 py-12 md:grid-cols-[140px_1fr] md:px-8 md:py-16">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.34em] text-ember md:mb-0">
          {t("about.experience")}
        </p>
        <div className="divide-y divide-titleBlue/20">
          {resumeItems.map((item) => (
            <div
              key={item.titleKey}
              className="grid gap-3 py-5 text-sm font-medium leading-6 text-ink/75 md:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="text-base font-semibold leading-6 text-titleBlue">
                  {t(item.titleKey)}
                </h3>
                <p>{t(item.metaKey)}</p>
              </div>
              <p className="text-left text-xs font-semibold uppercase tracking-[0.22em] text-ember md:text-right">
                {item.yearKey ? t(item.yearKey) : item.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] gap-4 px-5 py-16 md:grid-cols-[1.1fr_0.85fr] md:px-8 md:py-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-mint md:max-w-[500px]">
          <Image
            src="/images/project-northline.svg"
            alt="Digital work placeholder"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-sunYellow md:mt-14">
          <Image
            src="/images/project-earth-house.svg"
            alt="Object study placeholder"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] gap-10 px-5 pb-20 md:grid-cols-[1fr_320px] md:px-8 md:pb-28">
        <p className="max-w-[900px] font-display text-[clamp(2.5rem,5.4vw,5.8rem)] font-black leading-[0.9]">
          {t("about.personal")}
        </p>
        <div className="self-end border-l-4 border-sunYellow bg-titleBlue px-7 py-8 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-sunYellow">
            {t("about.currently")}
          </p>
          <p className="mt-5 text-sm font-medium leading-7">
            {t("about.currently.body")}
          </p>
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] border-t border-titleBlue/20 px-5 py-14 text-sm font-semibold text-ink/70 md:grid-cols-[140px_1fr_280px] md:px-8 md:py-20">
        <p className="mb-8 text-[10px] uppercase tracking-[0.34em] text-ember md:mb-0">
          {t("about.contact")}
        </p>
        <div>
          <h2 className="max-w-[560px] font-display text-[clamp(2.3rem,4.5vw,5rem)] font-black leading-[0.9] text-titleBlue">
            {t("about.contact.title")}
          </h2>
          <p className="mt-6 max-w-[520px] text-sm font-medium leading-7 text-ink/70">
            {t("about.contact.body")}
          </p>
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 md:mt-0 md:items-end md:self-end">
          <Link
            href="/contact"
            className="bg-sunYellow px-8 py-4 text-[10px] font-black uppercase tracking-[0.34em] text-titleBlue transition hover:bg-titleBlue hover:text-white"
          >
            {t("nav.contact")}
          </Link>
          <Link
            className="text-[11px] uppercase tracking-[0.24em] text-titleBlue transition hover:text-ember"
            href="mailto:qimuxuexue@gmail.com"
          >
            qimuxuexue@gmail.com
          </Link>
        </div>
      </section>
    </main>
  );
}
