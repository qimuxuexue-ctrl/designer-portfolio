import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link className="group block" href={`/work/${project.slug}`}>
      <div
        className={`relative overflow-hidden bg-mist ${
          featured ? "aspect-[16/10]" : "aspect-[4/5]"
        }`}
      >
        <Image
          className="image-rise object-cover"
          src={project.image}
          alt={`${project.title} placeholder artwork`}
          fill
          sizes={featured ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
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
