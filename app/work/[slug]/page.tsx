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
  const project = getProject(params.slug);

  return {
    title: project ? `${project.title} | North Studio Portfolio` : "Project"
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <Link
          href="/work"
          className="mb-10 inline-flex text-sm uppercase tracking-[0.14em] text-ink/55 transition hover:text-clay"
        >
          Back to work
        </Link>
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-ink/55">
              {project.category} / {project.year}
            </p>
            <h1 className="font-serif text-6xl leading-[0.9] md:text-8xl">
              {project.title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ink/65">{project.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="relative aspect-[16/10] overflow-hidden bg-mist">
          <Image
            src={project.image}
            alt={`${project.title} placeholder artwork`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-[0.45fr_1fr] md:px-8 md:pb-24">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-ink/55">Services</p>
          <ul className="mt-5 space-y-2 text-lg">
            {project.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-8 text-2xl leading-10 text-ink/75">
          <p>
            This placeholder case study section is designed for a short narrative,
            visual decisions, and project outcomes. Replace it with your own project
            story when the final assets are ready.
          </p>
          <p>
            The detail page keeps the flow simple: title, metadata, large image,
            services, and a clear next action.
          </p>
        </div>
      </section>
    </main>
  );
}
