"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const services =
  "brand / UIUX / web / SNS ads / ecommerce banners / graphic design / packaging / exhibition";

function RequiredMark({ show }: { show?: boolean }) {
  return show ? <span className="text-ember">*</span> : null;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const textFields = [
    { labelKey: "form.name", required: true },
    { labelKey: "form.email", required: true, type: "email" },
    { labelKey: "form.business", required: true },
    { labelKey: "form.website" },
    {
      labelKey: "form.location",
      required: true,
      placeholderKey: "form.location.placeholder"
    },
    {
      labelKey: "form.deadline",
      placeholderKey: "form.deadline.placeholder"
    },
    {
      labelKey: "form.payment",
      placeholderKey: "form.payment.placeholder"
    },
    {
      labelKey: "form.timeline",
      placeholderKey: "form.timeline.placeholder"
    }
  ];
  const longFields = [
    {
      labelKey: "form.about",
      placeholderKey: "form.about.placeholder"
    },
    {
      labelKey: "form.problem",
      placeholderKey: "form.problem.placeholder"
    },
    {
      labelKey: "form.more",
      placeholderKey: "form.more.placeholder"
    }
  ];

  return (
    <main className="bg-white text-ink">
      <section className="flex min-h-[72vh] flex-col justify-end bg-titleBlue px-5 pb-20 pt-16 text-center md:min-h-[78vh] md:px-8 md:pb-28 md:pt-24">
        <div>
          <p className="mx-auto mb-8 max-w-3xl text-xs font-semibold uppercase tracking-[0.45em] text-white/80">
            {t("contact.label")}
          </p>
          <h1 className="mx-auto max-w-6xl font-display text-[clamp(2.7rem,14vw,4rem)] font-black uppercase leading-[0.82] text-sunYellow md:text-8xl lg:text-[8.5rem]">
            {t("contact.hero.1")}
            <br />
            {t("contact.hero.2")}
            <br />
            {t("contact.hero.3")}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <h2 className="font-display text-4xl font-black leading-[0.95] text-titleBlue md:text-5xl">
            {t("contact.intro")}
          </h2>
          <div className="space-y-5 text-base font-medium leading-8">
            <p>
              {t("contact.body.1")}
            </p>
            <p>
              {t("contact.body.2")}
            </p>
            <p className="text-titleBlue">
              {t("contact.reply")}
            </p>
          </div>
        </div>

        <form className="mt-12 space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            {textFields.map((field) => (
              <label key={field.labelKey} className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em]">
                  {t(field.labelKey)}
                  <RequiredMark show={field.required} />
                </span>
                <input
                  className="h-11 w-full border border-ink bg-white px-3 text-sm outline-none transition focus:border-titleBlue focus:ring-2 focus:ring-bookingBlue/30"
                  placeholder={
                    field.placeholderKey ? t(field.placeholderKey) : undefined
                  }
                  type={field.type ?? "text"}
                />
              </label>
            ))}
          </div>

          {longFields.map((field) => (
            <label key={field.labelKey} className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em]">
                {t(field.labelKey)}
              </span>
              <textarea
                className="min-h-32 w-full border border-ink bg-white px-3 py-3 text-sm outline-none transition focus:border-titleBlue focus:ring-2 focus:ring-bookingBlue/30"
                placeholder={t(field.placeholderKey)}
              />
            </label>
          ))}

          <div className="flex justify-end">
            <button
              className="bg-sunYellow px-10 py-4 text-sm font-black text-titleBlue transition hover:bg-titleBlue hover:text-white"
              type="button"
            >
              {t("contact.submit")}
            </button>
          </div>
        </form>

        <div className="mt-20 border-t border-ink pt-10 text-center">
          <div className="relative mx-auto h-16 w-40">
            <Image
              src="/images/hinna-logo.svg"
              alt="Hinna"
              fill
              className="object-contain"
            />
          </div>
          <a
            className="mt-2 block font-semibold hover:text-titleBlue"
            href="mailto:qimuxuexue@gmail.com"
          >
            qimuxuexue@gmail.com
          </a>
          <p className="mt-3 text-sm font-medium">{services}</p>
        </div>
      </section>
    </main>
  );
}
