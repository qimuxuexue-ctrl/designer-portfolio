"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const serviceKeys = [
  "services.scope.brand",
  "services.scope.uiux",
  "services.scope.web",
  "services.scope.h5",
  "services.scope.sns",
  "services.scope.banner",
  "services.scope.graphic",
  "services.scope.packaging",
  "services.scope.exhibition"
];

const workflowKeys = [
  "services.workflow.1",
  "services.workflow.2",
  "services.workflow.3",
  "services.workflow.4",
  "services.workflow.5"
];

const ruleKeys = [
  "services.rules.1",
  "services.rules.2",
  "services.rules.3",
  "services.rules.4"
];

const faqKeys = [
  ["services.faq.1.q", "services.faq.1.a"],
  ["services.faq.2.q", "services.faq.2.a"],
  ["services.faq.3.q", "services.faq.3.a"]
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="overflow-hidden bg-white text-ink">
      <section className="bg-titleBlue px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-sunYellow">
              {t("services.eyebrow")}
            </p>
            <h1 className="mt-8 max-w-[920px] font-display text-[clamp(4.1rem,12vw,11rem)] font-black uppercase leading-[0.78] text-sunYellow">
              {t("services.hero.1")}
              <br />
              {t("services.hero.2")}
            </h1>
          </div>
          <p className="max-w-xl text-base font-medium leading-8 text-white/82 md:pb-5 md:text-lg">
            {t("services.hero.body")}
          </p>
        </div>
      </section>

      <section className="bg-ink px-5 py-7 text-white md:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-wrap gap-x-8 gap-y-4">
          {serviceKeys.map((key) => (
            <span
              key={key}
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em]"
            >
              <span className="text-sunYellow">→</span>
              {t(key)}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 border-b border-ink/15 pb-10 md:grid-cols-[180px_1fr]">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-ember">
            {t("services.value.label")}
          </p>
          <h2 className="max-w-[920px] font-display text-[clamp(2.9rem,6vw,6.8rem)] font-black uppercase leading-[0.88] text-titleBlue">
            {t("services.value.title")}
          </h2>
        </div>

        <div className="grid gap-6 py-12 md:grid-cols-3 md:py-16">
          {["services.value.1", "services.value.2", "services.value.3"].map(
            (key, index) => (
              <article
                key={key}
                className="border border-titleBlue/25 bg-white p-6 md:min-h-52"
              >
                <p className="font-display text-5xl font-black text-sunYellow">
                  0{index + 1}
                </p>
                <p className="mt-8 text-lg font-bold leading-7 text-titleBlue">
                  {t(key)}
                </p>
              </article>
            )
          )}
        </div>
      </section>

      <section className="bg-bookingBlue px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-start">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-sunYellow">
              {t("services.workflow.label")}
            </p>
            <div>
              <h2 className="font-display text-[clamp(3rem,7vw,7.5rem)] font-black uppercase leading-[0.86] text-sunYellow">
                {t("services.workflow.title")}
              </h2>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/86">
                {t("services.workflow.body")}
              </p>
            </div>
          </div>

          <div className="mt-14 divide-y divide-white/30 border-y border-white/30">
            {workflowKeys.map((key, index) => (
              <div
                key={key}
                className="grid gap-4 py-7 md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <span className="font-display text-5xl font-black text-sunYellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-xl font-black uppercase tracking-[0.08em]">
                  {t(key)}
                </p>
                <span className="hidden text-3xl text-sunYellow md:block">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1220px] gap-10 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-24">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.34em] text-ember">
            {t("services.rules.label")}
          </p>
          <h2 className="mt-7 font-display text-[clamp(3.1rem,7vw,7rem)] font-black uppercase leading-[0.86] text-titleBlue">
            {t("services.rules.title")}
          </h2>
        </div>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {ruleKeys.map((key, index) => (
            <div key={key} className="grid gap-4 py-7 md:grid-cols-[90px_1fr]">
              <p className="text-sm font-black text-titleBlue">RULE {index + 1}</p>
              <p className="text-lg font-semibold leading-8">{t(key)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sunYellow px-5 py-16 text-titleBlue md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.34em]">
              {t("services.fit.label")}
            </p>
            <h2 className="mt-7 font-display text-[clamp(3rem,6.8vw,7rem)] font-black uppercase leading-[0.86]">
              {t("services.fit.title")}
            </h2>
          </div>
          <div className="grid gap-5">
            {["services.fit.1", "services.fit.2", "services.fit.3"].map((key) => (
              <p key={key} className="border border-titleBlue bg-white/40 p-5 text-lg font-bold leading-8">
                {t(key)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-[180px_1fr]">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-ember">
            {t("services.faq.label")}
          </p>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {faqKeys.map(([questionKey, answerKey]) => (
              <details key={questionKey} className="group py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-black text-titleBlue">
                  {t(questionKey)}
                  <span className="text-3xl transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-ink/72">
                  {t(answerKey)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1220px] bg-titleBlue p-8 text-white md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-sunYellow">
            {t("services.cta.label")}
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-3xl font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.86] text-sunYellow">
              {t("services.cta.title")}
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
