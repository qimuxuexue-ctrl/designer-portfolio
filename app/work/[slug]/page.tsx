import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  return {
    title: "Hinna | Make things make sense"
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="overflow-hidden bg-white text-ink">
      <section className="project-reveal mx-auto max-w-[1440px] px-5 pb-10 pt-12 md:px-8 md:pb-16 md:pt-20">
        <Link
          href="/work"
          className="mb-12 inline-flex text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/55 transition hover:text-titleBlue"
        >
          Back to work
        </Link>
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div className="min-w-0">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
              {project.category} / {project.year}
            </p>
            <h1
              className="max-w-[950px] break-words font-display text-[clamp(3.6rem,10vw,9.5rem)] font-black uppercase leading-[0.78]"
              style={{ color: project.accent }}
            >
              {project.title}
            </h1>
          </div>
          <p className="max-w-xl text-base font-medium leading-8 text-ink/70 md:pb-2 md:text-lg">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="project-reveal mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist md:aspect-[16/9]">
          <Image
            src={project.image}
            alt={`${project.title} placeholder artwork`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <section className="project-reveal mx-auto grid max-w-[1180px] gap-12 px-5 py-20 md:grid-cols-[0.75fr_1.25fr] md:px-8 md:py-32">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
            Project details
          </p>
          <dl className="mt-7 space-y-7 text-sm leading-6">
            <div>
              <dt className="font-semibold uppercase tracking-[0.18em] text-ink/45">
                Sector
              </dt>
              <dd className="mt-1">{project.sector}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-[0.18em] text-ink/45">
                Scope
              </dt>
              <dd className="mt-2">
                <ul className="space-y-1">
                  {project.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
            Market context
          </p>
          <p className="mt-7 max-w-3xl text-2xl font-semibold leading-[1.25] md:text-4xl">
            {project.context}
          </p>
        </div>
      </section>

      <section className="project-reveal mx-auto max-w-[1180px] px-5 pb-20 md:px-8 md:pb-32">
        <div className="grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-[0.75fr_1.25fr]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
            The challenge
          </p>
          <p className="max-w-3xl text-lg font-medium leading-8 text-ink/72 md:text-2xl md:leading-10">
            {project.challenge}
          </p>
        </div>
      </section>

      <section className="project-reveal grid gap-3 px-3 md:grid-cols-2">
        {project.gallery.slice(0, 2).map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative aspect-[4/5] overflow-hidden bg-mist md:aspect-square"
          >
            <Image
              src={image}
              alt={`${project.title} visual study ${index + 1}`}
              fill
              className="object-cover transition duration-700 hover:scale-[1.02]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ))}
      </section>

      <section className="project-reveal mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-36">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
          The idea
        </p>
        <h2
          className="mt-8 max-w-[1080px] font-display text-[clamp(3.2rem,8vw,8rem)] font-black uppercase leading-[0.82]"
          style={{ color: project.accent }}
        >
          {project.conceptTitle}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="text-lg font-medium leading-8 text-ink/72 md:text-xl md:leading-9">
            {project.concept}
          </p>
          <p className="text-lg font-medium leading-8 text-ink/72 md:text-xl md:leading-9">
            {project.outcome}
          </p>
        </div>
      </section>

      <section className="project-reveal mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist md:aspect-[16/10]">
          <Image
            src={project.gallery[2]}
            alt={`${project.title} full-width application`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section
        className="project-reveal my-20 px-5 py-20 text-center text-white md:my-32 md:px-8 md:py-32"
        style={{ backgroundColor: project.accent }}
      >
        <blockquote className="mx-auto max-w-5xl font-display text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.95]">
          “{project.quote}”
        </blockquote>
      </section>

      <section className="project-reveal mx-auto grid max-w-[1440px] gap-3 px-3 md:grid-cols-[1.25fr_0.75fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist md:aspect-[4/3]">
          <Image
            src={project.gallery[3]}
            alt={`${project.title} final application`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 65vw, 100vw"
          />
        </div>
        <div className="flex min-h-[360px] flex-col justify-between bg-sunYellow p-7 text-titleBlue md:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em]">
            Outcome
          </p>
          <p className="font-display text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-[0.86]">
            One clear idea,
            <br />
            built to move.
          </p>
        </div>
      </section>

      <section className="project-reveal mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-8 border-y border-ink/20 py-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
              Start a project
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.88] text-titleBlue">
              Have an idea that needs to make sense?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center bg-sunYellow px-8 py-4 text-[11px] font-black uppercase tracking-[0.28em] text-titleBlue transition hover:bg-titleBlue hover:text-white"
          >
            Contact me
          </Link>
        </div>
      </section>

      <section className="project-reveal border-t border-ink/15 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
            More selected work
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group mt-8 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/50">
                Next project
              </p>
              <h2
                className="mt-4 font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.84] transition group-hover:opacity-70"
                style={{ color: nextProject.accent }}
              >
                {nextProject.title}
              </h2>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-mist">
              <Image
                src={nextProject.image}
                alt={`${nextProject.title} project preview`}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
