"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const statKeys = [
  ["why.stats.1.number", "why.stats.1.label"],
  ["why.stats.2.number", "why.stats.2.label"],
  ["why.stats.3.number", "why.stats.3.label"]
];

const advantageKeys = ["why.advantage.1", "why.advantage.2", "why.advantage.3"];

const comparisonRows = [
  ["why.compare.billing", "why.compare.agency.billing", "why.compare.freelance.billing", "why.compare.hinna.billing"],
  ["why.compare.speed", "why.compare.agency.speed", "why.compare.freelance.speed", "why.compare.hinna.speed"],
  ["why.compare.consistency", "why.compare.agency.consistency", "why.compare.freelance.consistency", "why.compare.hinna.consistency"],
  ["why.compare.support", "why.compare.agency.support", "why.compare.freelance.support", "why.compare.hinna.support"],
  ["why.compare.scope", "why.compare.agency.scope", "why.compare.freelance.scope", "why.compare.hinna.scope"]
];

const differenceKeys = [
  "why.diff.1",
  "why.diff.2",
  "why.diff.3",
  "why.diff.4",
  "why.diff.5",
  "why.diff.6"
];

const workKeys = [
  ["why.work.1.number", "why.work.1.label"],
  ["why.work.2.number", "why.work.2.label"],
  ["why.work.3.number", "why.work.3.label"],
  ["why.work.4.number", "why.work.4.label"],
  ["why.work.5.number", "why.work.5.label"],
  ["why.work.6.number", "why.work.6.label"]
];

const processKeys = [
  ["why.process.1.title", "why.process.1.body"],
  ["why.process.2.title", "why.process.2.body"],
  ["why.process.3.title", "why.process.3.body"]
];

function PlaceholderPanel({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden border border-titleBlue/25 ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(60,99,200,0.12),rgba(248,212,77,0.28))]" />
      <div className="absolute left-5 top-5 text-[10px] font-black uppercase tracking-[0.24em] text-titleBlue">
        {label}
      </div>
      <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-sunYellow" />
      <div className="absolute bottom-12 left-8 h-24 w-16 rotate-[-12deg] bg-ember" />
      <div className="absolute right-20 top-20 h-16 w-24 bg-mint" />
    </div>
  );
}

export default function WhyHinnaPage() {
  const { t } = useLanguage();

  return (
    <main className="overflow-hidden bg-white text-ink">
      <section className="px-5 pb-12 pt-14 md:px-8 md:pb-20 md:pt-20">
        <div className="mx-auto grid max-w-[1260px] gap-10 md:grid-cols-[0.94fr_1.06fr] md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.42em] text-ember">
              {t("why.eyebrow")}
            </p>
            <h1 className="mt-8 max-w-[900px] font-display text-[clamp(3.7rem,10.5vw,10rem)] font-black uppercase leading-[0.78] text-titleBlue">
              {t("why.hero.1")}
              <br />
              {t("why.hero.2")}
            </h1>
            <p className="mt-8 max-w-xl text-base font-semibold leading-8 text-ink/70 md:text-lg">
              {t("why.hero.body")}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-sunYellow px-7 py-4 text-xs font-black uppercase tracking-[0.28em] text-titleBlue transition hover:bg-titleBlue hover:text-white"
              >
                {t("why.hero.cta")}
              </Link>
              <Link
                href="/work"
                className="border border-titleBlue px-7 py-4 text-xs font-black uppercase tracking-[0.28em] text-titleBlue transition hover:bg-titleBlue hover:text-white"
              >
                {t("why.hero.work")}
              </Link>
            </div>
          </div>

          <div className="grid min-h-[520px] grid-cols-5 grid-rows-5 gap-3">
            <PlaceholderPanel label="Brand" className="col-span-3 row-span-3 bg-sunYellow" />
            <PlaceholderPanel label="UIUX" className="col-span-2 row-span-2 bg-bookingBlue" />
            <PlaceholderPanel label="Ads" className="col-span-2 row-span-3 bg-mint" />
            <PlaceholderPanel label="Packaging" className="col-span-3 row-span-2 bg-ember" />
          </div>
        </div>
      </section>

      <section className="bg-titleBlue px-5 py-10 text-white md:px-8">
        <div className="mx-auto grid max-w-[1260px] gap-5 md:grid-cols-3">
          {statKeys.map(([numberKey, labelKey]) => (
            <div key={numberKey} className="border border-white/25 p-6">
              <p className="font-display text-5xl font-black text-sunYellow md:text-7xl">
                {t(numberKey)}
              </p>
              <p className="mt-3 text-sm font-black uppercase tracking-[0.18em]">
                {t(labelKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-ember">
              {t("why.advantage.label")}
            </p>
            <h2 className="mt-7 font-display text-[clamp(3rem,6.4vw,7rem)] font-black uppercase leading-[0.86] text-titleBlue">
              {t("why.advantage.title")}
            </h2>
          </div>
          <div className="grid gap-5">
            {advantageKeys.map((key, index) => (
              <article key={key} className="grid gap-5 border border-titleBlue/20 p-6 md:grid-cols-[90px_1fr]">
                <span className="font-display text-5xl font-black text-sunYellow">
                  0{index + 1}
                </span>
                <p className="text-xl font-black leading-8 text-titleBlue">
                  {t(key)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-[1260px]">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-sunYellow">
            {t("why.compare.label")}
          </p>
          <h2 className="mt-7 max-w-5xl font-display text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.84] text-white">
            {t("why.compare.title")}
          </h2>
          <div className="mt-12 overflow-x-auto">
            <table className="min-w-[840px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/25 text-xs font-black uppercase tracking-[0.24em] text-white/60">
                  <th className="py-5 pr-5">{t("why.compare.topic")}</th>
                  <th className="py-5 pr-5">{t("why.compare.agency")}</th>
                  <th className="py-5 pr-5">{t("why.compare.freelance")}</th>
                  <th className="bg-sunYellow px-5 py-5 text-titleBlue">{t("why.compare.hinna")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([topicKey, agencyKey, freelanceKey, hinnaKey]) => (
                  <tr key={topicKey} className="border-b border-white/15">
                    <th className="py-5 pr-5 text-sm font-black uppercase tracking-[0.18em] text-sunYellow">
                      {t(topicKey)}
                    </th>
                    <td className="py-5 pr-5 text-white/68">{t(agencyKey)}</td>
                    <td className="py-5 pr-5 text-white/68">{t(freelanceKey)}</td>
                    <td className="bg-sunYellow/95 px-5 py-5 font-black text-titleBlue">
                      {t(hinnaKey)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.34em] text-ember">
              {t("why.diff.label")}
            </p>
            <h2 className="mt-7 font-display text-[clamp(3rem,7vw,7.8rem)] font-black uppercase leading-[0.84] text-titleBlue">
              {t("why.diff.title")}
            </h2>
          </div>
          <p className="max-w-xl text-base font-semibold leading-8 text-ink/70">
            {t("why.diff.body")}
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {differenceKeys.map((key) => (
            <article key={key} className="min-h-44 bg-bookingBlue p-6 text-white">
              <p className="text-lg font-black leading-7">{t(key)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sunYellow px-5 py-16 text-titleBlue md:px-8 md:py-24">
        <div className="mx-auto max-w-[1260px]">
          <p className="text-xs font-black uppercase tracking-[0.34em]">
            {t("why.work.label")}
          </p>
          <h2 className="mt-7 max-w-5xl font-display text-[clamp(3rem,7vw,8rem)] font-black uppercase leading-[0.84]">
            {t("why.work.title")}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {workKeys.map(([numberKey, labelKey]) => (
              <div key={numberKey} className="bg-white/55 p-6">
                <p className="font-display text-5xl font-black">{t(numberKey)}</p>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.18em]">
                  {t(labelKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1260px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-display text-[clamp(3rem,7vw,7.8rem)] font-black uppercase leading-[0.84] text-titleBlue">
            {t("why.process.title")}
          </h2>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {processKeys.map(([titleKey, bodyKey], index) => (
              <article key={titleKey} className="grid gap-4 py-8 md:grid-cols-[90px_1fr]">
                <span className="font-display text-5xl font-black text-sunYellow">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-titleBlue">{t(titleKey)}</h3>
                  <p className="mt-3 max-w-2xl text-base font-medium leading-8 text-ink/70">
                    {t(bodyKey)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1260px] bg-titleBlue p-8 text-white md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-sunYellow">
            {t("why.cta.label")}
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-3xl font-display text-[clamp(3rem,7vw,7.5rem)] font-black uppercase leading-[0.84] text-sunYellow">
              {t("why.cta.title")}
            </h2>
            <Link
              href="/contact"
              className="inline-flex justify-center bg-sunYellow px-8 py-4 text-xs font-black uppercase tracking-[0.3em] text-titleBlue transition hover:bg-white"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
