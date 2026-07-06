"use client";

import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";

const logoNames = ["Cove", "Aster", "Earth", "Soft", "Kumo", "Signal"];

const advantageItems = [
  ["why.benefit.1.title", "why.benefit.1.body", "01"],
  ["why.benefit.2.title", "why.benefit.2.body", "02"],
  ["why.benefit.3.title", "why.benefit.3.body", "03"]
];

const compareRows = [
  ["why.compare.billing", "why.compare.agency.billing", "why.compare.freelance.billing", "why.compare.hinna.billing"],
  ["why.compare.speed", "why.compare.agency.speed", "why.compare.freelance.speed", "why.compare.hinna.speed"],
  ["why.compare.consistency", "why.compare.agency.consistency", "why.compare.freelance.consistency", "why.compare.hinna.consistency"],
  ["why.compare.support", "why.compare.agency.support", "why.compare.freelance.support", "why.compare.hinna.support"],
  ["why.compare.scope", "why.compare.agency.scope", "why.compare.freelance.scope", "why.compare.hinna.scope"],
  ["why.compare.expertise", "why.compare.agency.expertise", "why.compare.freelance.expertise", "why.compare.hinna.expertise"]
];

const differenceItems = [
  ["why.diff.1", "why.diff.1.body", "01"],
  ["why.diff.2", "why.diff.2.body", "02"],
  ["why.diff.3", "why.diff.3.body", "03"],
  ["why.diff.4", "why.diff.4.body", "04"],
  ["why.diff.5", "why.diff.5.body", "05"],
  ["why.diff.6", "why.diff.6.body", "06"]
];

const industries = [
  ["why.industry.1.title", "why.industry.1.body", "bg-plum"],
  ["why.industry.2.title", "why.industry.2.body", "bg-titleBlue"],
  ["why.industry.3.title", "why.industry.3.body", "bg-clay"],
  ["why.industry.4.title", "why.industry.4.body", "bg-ember"]
];

function VideoPlaceholder() {
  const { t } = useLanguage();

  return (
    <div className="relative aspect-video overflow-hidden bg-sunYellow shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8D44D_0%,#547ADD_55%,#19C7A1_100%)]" />
      <div className="absolute left-[12%] top-[16%] h-[66%] w-[24%] rounded-t-full bg-white/70" />
      <div className="absolute bottom-[18%] right-[12%] h-[48%] w-[34%] bg-white/55" />
      <div className="absolute bottom-0 left-0 right-0 flex h-10 items-center gap-3 bg-ink/78 px-4 text-white">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sunYellow text-[10px] text-titleBlue">
          {t("why.video.play")}
        </span>
        <div className="h-1 flex-1 bg-white/30">
          <div className="h-full w-1/3 bg-sunYellow" />
        </div>
        <span className="text-[10px] font-bold tracking-[0.18em]">00:42</span>
      </div>
      <p className="absolute right-5 top-5 text-xs font-black uppercase tracking-[0.2em] text-white">
        {t("why.video.placeholder")}
      </p>
    </div>
  );
}

function NumberIcon({ label }: { label: string }) {
  return (
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-titleBlue font-display text-lg font-black text-titleBlue">
      {label}
    </div>
  );
}

export default function WhyHinnaPage() {
  const { t, localizeProject } = useLanguage();
  const featuredProjects = projects.slice(0, 6).map((project) => localizeProject(project));

  return (
    <main className="overflow-hidden bg-[#fbf7ef] text-ink">
      <Marquee />

      <section className="bg-titleBlue px-5 pb-10 pt-12 text-white md:px-8 md:pb-14 md:pt-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.72fr_1fr] md:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.34em] text-sunYellow">
              {t("why.eyebrow")}
            </p>
            <h1 className="mt-7 max-w-xl font-display text-[clamp(2.9rem,7.2vw,5.8rem)] font-black uppercase leading-[0.86] text-white">
              {t("why.hero.title")}
            </h1>
            <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/82">
              {t("why.hero.body")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-sunYellow px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-titleBlue transition hover:bg-white"
              >
                {t("why.hero.cta")}
              </Link>
              <Link
                href="/work"
                className="border border-white/40 px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] transition hover:border-sunYellow hover:text-sunYellow"
              >
                {t("why.hero.work")}
              </Link>
            </div>
          </div>
          <VideoPlaceholder />
        </div>

        <div className="mx-auto mt-12 max-w-[1220px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/70">
            {t("why.logoWall")}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
            {logoNames.map((name) => (
              <div
                key={name}
                className="flex h-14 items-center justify-center border border-white/20 text-lg font-black uppercase tracking-[0.08em] text-white"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center md:px-8 md:py-20">
        <h2 className="font-display text-3xl font-black uppercase leading-tight text-titleBlue md:text-4xl">
          {t("why.fractional.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-ink/62">
          {t("why.fractional.body")}
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-9 md:grid-cols-3">
          {advantageItems.map(([titleKey, bodyKey, number]) => (
            <article key={titleKey} className="text-center">
              <NumberIcon label={number} />
              <h3 className="mt-5 text-sm font-black text-titleBlue">{t(titleKey)}</h3>
              <p className="mt-2 text-xs font-semibold leading-6 text-ink/58">{t(bodyKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-display text-3xl font-black uppercase leading-tight text-titleBlue md:text-4xl">
          {t("why.compare.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-7 text-ink/62">
          {t("why.compare.body")}
        </p>
        <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-lg border border-ink/10 bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="px-6 py-5" />
                <th className="px-6 py-5 text-center font-sans text-sm font-black uppercase tracking-[0.16em]">
                  {t("why.compare.agency")}
                </th>
                <th className="px-6 py-5 text-center font-sans text-sm font-black uppercase tracking-[0.16em]">
                  {t("why.compare.freelance")}
                </th>
                <th className="bg-titleBlue px-6 py-5 text-center font-sans text-base font-black uppercase tracking-[0.16em] text-sunYellow">
                  {t("why.compare.hinna")}
                </th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(([topicKey, agencyKey, freelanceKey, hinnaKey]) => (
                <tr key={topicKey} className="border-b border-ink/10 last:border-b-0">
                  <th className="px-6 py-4 font-black">{t(topicKey)}</th>
                  <td className="px-6 py-4 text-center text-ink/58">{t(agencyKey)}</td>
                  <td className="px-6 py-4 text-center text-ink/58">{t(freelanceKey)}</td>
                  <td className="bg-titleBlue px-6 py-4 text-center font-black text-white">
                    {t(hinnaKey)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-display text-3xl font-black uppercase leading-tight text-titleBlue md:text-4xl">
          {t("why.useful.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-ink/62">
          {t("why.useful.body")}
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-x-5 gap-y-10 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
              <div className="relative aspect-[1.22] overflow-hidden bg-white">
                <Image
                  src={project.image}
                  alt={`${project.title} placeholder`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <p
                className="mt-3 font-display text-2xl font-black uppercase leading-none"
                style={{ color: project.accent }}
              >
                {project.title}
              </p>
              <p className="mt-1 text-xs font-semibold text-ink/60">{project.category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blush px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-display text-3xl font-black uppercase leading-tight text-titleBlue md:text-4xl">
          {t("why.diff.title")}
        </h2>
        <p className="mt-3 text-sm font-semibold text-ink/58">{t("why.diff.body")}</p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-x-10 gap-y-12 md:grid-cols-3">
          {differenceItems.map(([titleKey, bodyKey, number]) => (
            <article key={titleKey}>
              <NumberIcon label={number} />
              <h3 className="mt-5 text-sm font-black text-titleBlue">{t(titleKey)}</h3>
              <p className="mt-2 text-xs font-semibold leading-6 text-ink/58">{t(bodyKey)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-titleBlue px-5 py-14 text-white md:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.85fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              {t("why.create.title")}
            </h2>
            <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-white/78">
              {t("why.create.body")}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex bg-sunYellow px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-titleBlue transition hover:bg-white"
            >
              {t("why.create.cta")}
            </Link>
          </div>
          <div className="relative aspect-[16/7] overflow-hidden bg-bookingBlue">
            <div className="absolute bottom-0 right-8 h-[72%] w-[28%] rounded-t-full bg-sunYellow" />
            <div className="absolute bottom-8 left-10 h-[46%] w-[22%] bg-mint" />
            <div className="absolute left-[46%] top-8 h-20 w-20 rounded-full bg-ember" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] rotate-[-5deg] bg-titleBlue p-6 text-sunYellow shadow-xl">
            <p className="whitespace-pre-line font-display text-5xl font-black uppercase leading-[0.82]">
              {t("why.lead.cover")}
            </p>
            <div className="absolute bottom-6 left-6 right-6 h-20 bg-white/18" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-tight text-titleBlue">
              {t("why.lead.title")}
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-ink/62">
              {t("why.lead.body")}
            </p>
            <div className="mt-6 max-w-sm space-y-3">
              <input
                className="h-11 w-full border border-ink bg-white px-3 text-sm"
                placeholder={t("why.lead.email")}
              />
              <button className="bg-ember px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white">
                {t("why.lead.button")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 text-center md:px-8 md:pb-28">
        <h2 className="font-display text-3xl font-black uppercase text-titleBlue">
          {t("why.industries.title")}
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-4">
          {industries.map(([titleKey, bodyKey, color]) => (
            <article key={titleKey}>
              <div className={`relative aspect-[3/4] overflow-hidden ${color}`}>
                <div className="absolute inset-0 bg-white/12" />
                <div className="absolute bottom-6 left-1/2 h-24 w-16 -translate-x-1/2 rounded-t-full bg-white/22" />
              </div>
              <h3 className="mt-4 text-lg font-black text-titleBlue">{t(titleKey)}</h3>
              <p className="text-xs font-semibold text-ink/56">{t(bodyKey)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
