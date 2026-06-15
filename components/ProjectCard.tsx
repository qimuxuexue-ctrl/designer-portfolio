"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

type ProjectCardProps = {
  project: Project;
  variant?: "grid" | "portfolio";
};

export function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  const { localizeProject } = useLanguage();
  const localizedProject = localizeProject(project);

  if (variant === "portfolio") {
    return (
      <Link className="group block" href={`/work/${localizedProject.slug}`}>
        <div className="relative aspect-[1.28] overflow-hidden bg-mist">
          <Image
            className="image-rise object-cover"
            src={localizedProject.image}
            alt={`${localizedProject.title} placeholder artwork`}
            fill
            sizes="(min-width: 768px) 38vw, 100vw"
          />
        </div>
        <div className="mt-5 grid items-start gap-4 md:grid-cols-[0.85fr_1fr] md:gap-8">
          <h3
            className="text-center font-display text-[clamp(2.55rem,12.2vw,3.35rem)] font-black uppercase leading-[0.92] md:text-left md:text-4xl lg:text-5xl"
            style={{ color: localizedProject.accent }}
          >
            {localizedProject.title}
          </h3>
          <p className="text-center text-base font-medium md:pt-3 md:text-left">
            {localizedProject.category}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link className="group block" href={`/work/${localizedProject.slug}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <Image
          className="image-rise object-cover"
          src={localizedProject.image}
          alt={`${localizedProject.title} placeholder artwork`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-5 border-t border-ink/15 pt-4">
        <div>
          <h3 className="text-2xl font-medium md:text-3xl">{localizedProject.title}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.14em] text-ink/55">
            {localizedProject.category}
          </p>
        </div>
        <span className="text-sm text-ink/55">{localizedProject.year}</span>
      </div>
    </Link>
  );
}
