import Image from "next/image";
import Link from "next/link";

const resumeItems = [
  {
    title: "Brand, UIUX, web, packaging, and campaign design",
    meta: "Independent studio practice",
    year: "Now"
  },
  {
    title: "Visual systems for thoughtful products and services",
    meta: "Identity, digital, ecommerce, and launch materials",
    year: "2024"
  },
  {
    title: "Design direction across digital and physical touchpoints",
    meta: "Brand foundations, web pages, ads, exhibitions",
    year: "2023"
  },
  {
    title: "Ongoing research in clarity, rhythm, and useful beauty",
    meta: "References, systems, interface details, visual storytelling",
    year: "Always"
  }
];

export const metadata = {
  title: "Hinna | Make things make sense"
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-titleBlue">
      <section className="about-reveal mx-auto max-w-[1120px] px-5 pb-14 pt-12 md:min-h-[760px] md:px-8 md:pb-24 md:pt-20">
        <div className="relative mx-auto flex max-w-[820px] flex-col items-center">
          <h1 className="relative z-10 max-w-[760px] text-center font-display text-[clamp(3.4rem,9vw,8.2rem)] font-black leading-[0.82]">
            Turning loose
            <br />
            ideas into
            <br />
            clear systems
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
              Make
              <br />
              sense,
              <br />
              not
              <br />
              noise.
            </p>
          </div>

          <p className="mt-7 max-w-[420px] text-center text-sm font-medium leading-7 text-ink/70">
            A calm visual system gives people a place to land, a path to follow, and
            a reason to remember you.
          </p>
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] border-t border-titleBlue/20 px-5 py-14 md:grid-cols-[140px_1fr] md:px-8 md:py-24">
        <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-ember md:mb-0">
          Story
        </p>
        <h2 className="max-w-[780px] font-display text-[clamp(2.55rem,5.6vw,5.4rem)] font-black leading-[0.9]">
          I&apos;m Hinna, a designer focused on making brands, interfaces, and campaign
          visuals feel easier to understand, easier to use, and easier to trust.
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
          Approach
        </p>
        <div>
          <h2 className="max-w-[860px] font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.84]">
            Persistence
            <br />
            & motivation
          </h2>
          <div className="mt-10 grid gap-8 text-sm font-medium leading-7 text-ink/72 md:grid-cols-2 md:gap-14">
            <p>
              I start by listening for the part that is still tangled. The goal is not
              to decorate the idea, but to understand what the design needs to explain
              before it becomes visible.
            </p>
            <p>
              From there, I shape a visual direction that can move across brand, web,
              ads, packaging, ecommerce, and printed surfaces without losing its center.
            </p>
          </div>
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] border-y border-titleBlue/20 px-5 py-12 md:grid-cols-[140px_1fr] md:px-8 md:py-16">
        <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.34em] text-ember md:mb-0">
          Experience
        </p>
        <div className="divide-y divide-titleBlue/20">
          {resumeItems.map((item) => (
            <div
              key={item.title}
              className="grid gap-3 py-5 text-sm font-medium leading-6 text-ink/75 md:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="text-base font-semibold leading-6 text-titleBlue">
                  {item.title}
                </h3>
                <p>{item.meta}</p>
              </div>
              <p className="text-left text-xs font-semibold uppercase tracking-[0.22em] text-ember md:text-right">
                {item.year}
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
          When I&apos;m not designing, I&apos;m collecting references, comparing tiny
          layout decisions, testing visual rhythms, and saving ideas that help a brand
          feel less confusing.
        </p>
        <div className="self-end border-l-4 border-sunYellow bg-titleBlue px-7 py-8 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-sunYellow">
            Currently
          </p>
          <p className="mt-5 text-sm font-medium leading-7">
            Building visual systems for brand, UIUX, web, SNS ads, ecommerce banners,
            graphic design, packaging, and exhibition.
          </p>
        </div>
      </section>

      <section className="about-reveal mx-auto grid max-w-[1120px] border-t border-titleBlue/20 px-5 py-14 text-sm font-semibold text-ink/70 md:grid-cols-[140px_1fr_280px] md:px-8 md:py-20">
        <p className="mb-8 text-[10px] uppercase tracking-[0.34em] text-ember md:mb-0">
          Contact
        </p>
        <div>
          <h2 className="max-w-[560px] font-display text-[clamp(2.3rem,4.5vw,5rem)] font-black leading-[0.9] text-titleBlue">
            Have an idea that needs shape?
          </h2>
          <p className="mt-6 max-w-[520px] text-sm font-medium leading-7 text-ink/70">
            Tell me what you are making, what feels unclear, and where the design needs
            to work. I&apos;ll help turn it into something people can understand.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 md:mt-0 md:items-end md:self-end">
          <Link
            href="/contact"
            className="bg-sunYellow px-8 py-4 text-[10px] font-black uppercase tracking-[0.34em] text-titleBlue transition hover:bg-titleBlue hover:text-white"
          >
            Contact me
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
