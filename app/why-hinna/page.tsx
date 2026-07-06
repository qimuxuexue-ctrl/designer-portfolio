"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

const logoNames = ["Cove", "Aster", "Earth", "Soft", "Kumo", "Signal"];

const advantageItems = [
  ["Design On-Demand", "Direct creative support when your idea needs shape"],
  ["10 - 15 hrs / week", "Steady output without hiring full-time"],
  ["No long-term commitment", "Project scopes stay flexible and clear"]
];

const compareRows = [
  ["Billing", "Large estimates", "Unpredictable rates", "Clear scope-based pricing"],
  ["Speed", "Long lead times", "Depends on availability", "Lean and responsive"],
  ["Consistency", "Many people involved", "One style, limited range", "One designer across touchpoints"],
  ["Support", "Formal layers", "Ad hoc replies", "Direct communication"],
  ["Scalability", "Big projects first", "Single tasks", "Systems plus small outputs"],
  ["Expertise", "Specialized teams", "Depends on person", "Brand, UIUX, web, ads, packaging"]
];

const differenceItems = [
  ["◎", "No Wasted Time", "Focused on making the message clearer"],
  ["◌", "Hyper Efficiency", "Small systems that speed up future work"],
  ["◇", "Consistency that Compounds", "The same visual logic grows over time"],
  ["□", "Creative Ops Mindset", "Feedback, files, and handoff stay organized"],
  ["△", "Multilingual Context", "CN / JP / EN communication without friction"],
  ["✦", "Cross-Touchpoint Design", "Screen, print, packaging, and exhibition"]
];

const industries = [
  ["Brand", "Identity and launch systems", "bg-plum"],
  ["UIUX", "Interfaces and product flows", "bg-titleBlue"],
  ["Commerce", "Banners and sales visuals", "bg-clay"],
  ["Packaging", "Objects, labels, and displays", "bg-ember"]
];

function BookingStrip() {
  return (
    <div className="overflow-hidden bg-ember py-2 text-white">
      <div className="flex w-max animate-[marquee_34s_linear_infinite] gap-8 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em]">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index}>MAKE THINGS MAKE SENSE ✦ WHY HINNA ✦ DESIGN SUPPORT</span>
        ))}
      </div>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="relative aspect-video overflow-hidden bg-sunYellow shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8D44D_0%,#547ADD_55%,#19C7A1_100%)]" />
      <div className="absolute left-[12%] top-[16%] h-[66%] w-[24%] rounded-t-full bg-white/70" />
      <div className="absolute bottom-[18%] right-[12%] h-[48%] w-[34%] bg-white/55" />
      <div className="absolute bottom-0 left-0 right-0 flex h-10 items-center gap-3 bg-ink/78 px-4 text-white">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sunYellow text-[10px] text-titleBlue">▶</span>
        <div className="h-1 flex-1 bg-white/30">
          <div className="h-full w-1/3 bg-sunYellow" />
        </div>
        <span className="text-[10px] font-bold tracking-[0.18em]">00:42</span>
      </div>
      <p className="absolute right-5 top-5 text-xs font-black uppercase tracking-[0.2em] text-white">
        Intro video placeholder
      </p>
    </div>
  );
}

function IconMark({ symbol }: { symbol: string }) {
  return (
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-titleBlue text-xl font-black text-titleBlue">
      {symbol}
    </div>
  );
}

export default function WhyHinnaPage() {
  const { t, localizeProject } = useLanguage();
  const featuredProjects = projects.slice(0, 6).map((project) => localizeProject(project));

  return (
    <main className="overflow-hidden bg-[#fbf7ef] text-ink">
      <BookingStrip />

      <section className="bg-titleBlue px-5 pb-10 pt-12 text-white md:px-8 md:pb-14 md:pt-16">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.72fr_1fr] md:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.34em] text-sunYellow">
              Why Hinna
            </p>
            <h1 className="mt-7 max-w-xl font-display text-[clamp(2.9rem,7.2vw,5.8rem)] font-black uppercase leading-[0.86] text-white">
              Design support should not slow you down.
            </h1>
            <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/82">
              See why a thoughtful brand needs a clear visual partner, and how to add design support without the cost and chaos of a full agency setup.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-sunYellow px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-titleBlue transition hover:bg-white"
              >
                Meet your new designer
              </Link>
              <Link
                href="/work"
                className="border border-white/40 px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] transition hover:border-sunYellow hover:text-sunYellow"
              >
                View selected work
              </Link>
            </div>
          </div>
          <VideoPlaceholder />
        </div>

        <div className="mx-auto mt-12 max-w-[1220px] text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/70">
            Proof-of-style placeholder logo wall
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
            {logoNames.map((name) => (
              <div key={name} className="flex h-14 items-center justify-center border border-white/20 text-lg font-black uppercase tracking-[0.08em] text-white">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 text-center md:px-8 md:py-20">
        <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
          The Fractional Advantage
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-ink/62">
          Most small teams do not need a full-time designer every day. But they do need consistent, reliable creative support when launches, visuals, and decisions start piling up.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-9 md:grid-cols-3">
          {advantageItems.map(([title, body], index) => (
            <article key={title} className="text-center">
              <IconMark symbol={["↗", "⏱", "✓"][index]} />
              <h3 className="mt-5 text-sm font-black text-titleBlue">{title}</h3>
              <p className="mt-2 text-xs font-semibold leading-6 text-ink/58">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <BookingStrip />

      <section className="px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
          Flexible Like Freelance. Reliable Like an Agency.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-7 text-ink/62">
          You do not have to choose between lightness and quality. The sweet spot is a clear process with direct communication.
        </p>
        <div className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-lg border border-ink/10 bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="px-6 py-5" />
                <th className="px-6 py-5 text-center font-serif text-lg">Agencies</th>
                <th className="px-6 py-5 text-center font-serif text-lg">Freelancers</th>
                <th className="bg-titleBlue px-6 py-5 text-center font-serif text-xl text-sunYellow">Hinna</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(([topic, agency, freelance, hinna]) => (
                <tr key={topic} className="border-b border-ink/10 last:border-b-0">
                  <th className="px-6 py-4 font-black">{topic}</th>
                  <td className="px-6 py-4 text-center text-ink/58">{agency}</td>
                  <td className="px-6 py-4 text-center text-ink/58">{freelance}</td>
                  <td className="bg-titleBlue px-6 py-4 text-center font-black text-white">{hinna}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
          Hinna Is Built For Useful Creative
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-ink/62">
          Not every project needs a giant campaign. Everyday design work is what keeps a brand moving: banners, packaging updates, UI screens, product visuals, launch pages, and sales materials.
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
              <p className="mt-3 font-display text-2xl font-black uppercase leading-none" style={{ color: project.accent }}>
                {project.title}
              </p>
              <p className="mt-1 text-xs font-semibold text-ink/60">{project.category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blush px-5 py-16 text-center md:px-8 md:py-24">
        <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
          The Hinna Difference
        </h2>
        <p className="mt-3 text-sm font-semibold text-ink/58">
          Smart, flexible, and built for brands that need things to make sense.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-x-10 gap-y-12 md:grid-cols-3">
          {differenceItems.map(([symbol, title, body]) => (
            <article key={title}>
              <IconMark symbol={symbol} />
              <h3 className="mt-5 text-sm font-black text-titleBlue">{title}</h3>
              <p className="mt-2 text-xs font-semibold leading-6 text-ink/58">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-titleBlue px-5 py-14 text-white md:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[0.85fr_1fr] md:items-center">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
              What can we create for you?
            </h2>
            <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-white/78">
              Try a focused creative request first: one page, one banner set, one packaging refresh, or one visual direction sprint.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex bg-sunYellow px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-titleBlue transition hover:bg-white"
            >
              Start a project
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
            <p className="font-display text-5xl font-black uppercase leading-[0.82]">
              Idea
              <br />
              Sorting
              <br />
              Kit
            </p>
            <div className="absolute bottom-6 left-6 right-6 h-20 bg-white/18" />
          </div>
          <div>
            <h2 className="font-serif text-4xl leading-tight text-ink">
              The Mini Encyclopedia of Making Things Make Sense
            </h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-ink/62">
              A placeholder lead magnet for future downloads: prompts, checklist, and creative request templates.
            </p>
            <div className="mt-6 max-w-sm space-y-3">
              <input className="h-11 w-full border border-ink bg-white px-3 text-sm" placeholder="Email address" />
              <button className="bg-ember px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white">
                Get your free copy
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 text-center md:px-8 md:pb-28">
        <h2 className="font-serif text-3xl text-ink">Industries we serve</h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-4">
          {industries.map(([title, body, color]) => (
            <article key={title}>
              <div className={`relative aspect-[3/4] overflow-hidden ${color}`}>
                <div className="absolute inset-0 bg-white/12" />
                <div className="absolute bottom-6 left-1/2 h-24 w-16 -translate-x-1/2 rounded-t-full bg-white/22" />
              </div>
              <h3 className="mt-4 font-serif text-lg">{title}</h3>
              <p className="text-xs font-semibold text-ink/56">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <BookingStrip />
    </main>
  );
}
