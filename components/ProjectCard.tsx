import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  variant?: "grid" | "portfolio";
};

export function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  if (variant === "portfolio") {
    return (
      <Link className="group block" href={`/work/${project.slug}`}>
        <div className="relative aspect-[1.28] overflow-hidden bg-mist">
          <Image
            className="image-rise object-cover"
            src={project.image}
            alt={`${project.title} placeholder artwork`}
            fill
            sizes="(min-width: 768px) 38vw, 100vw"
          />
        </div>
        <div className="mt-5 grid items-start gap-4 md:grid-cols-[0.85fr_1fr] md:gap-8">
          <h3
            className="text-center text-4xl font-black uppercase leading-[0.92] tracking-[-0.03em] md:text-left md:text-4xl lg:text-5xl"
            style={{ color: project.accent }}
          >
            {project.title}
          </h3>
          <p className="text-center text-base font-medium md:pt-3 md:text-left">
            {project.category}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link className="group block" href={`/work/${project.slug}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <Image
          className="image-rise object-cover"
          src={project.image}
          alt={`${project.title} placeholder artwork`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-5 border-t border-ink/15 pt-4">
        <div>
          <h3 className="text-2xl font-medium md:text-3xl">{project.title}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.14em] text-ink/55">
            {project.category}
          </p>
        </div>
        <span className="text-sm text-ink/55">{project.year}</span>
      </div>
    </Link>
  );
}
