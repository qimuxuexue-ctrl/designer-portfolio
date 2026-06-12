"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type TransitionEvent } from "react";
import type { Project } from "@/data/projects";

type RelatedProjectsCarouselProps = {
  projects: Project[];
  currentSlug: string;
};

export function RelatedProjectsCarousel({
  projects,
  currentSlug
}: RelatedProjectsCarouselProps) {
  const relatedProjects = useMemo(() => {
    const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
    const ordered = [
      ...projects.slice(currentIndex + 1),
      ...projects.slice(0, currentIndex)
    ];

    return ordered.filter((project) => project.slug !== currentSlug);
  }, [currentSlug, projects]);

  const slides =
    relatedProjects.length > 0
      ? [...relatedProjects, relatedProjects[0]]
      : relatedProjects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  if (relatedProjects.length === 0) {
    return null;
  }

  function showNextProject() {
    if (isMoving) {
      return;
    }

    setTransitionEnabled(true);
    setIsMoving(true);
    setActiveIndex((index) => index + 1);
  }

  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    if (activeIndex === relatedProjects.length) {
      setTransitionEnabled(false);
      setActiveIndex(0);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsMoving(false);
        });
      });
      return;
    }

    setIsMoving(false);
  }

  return (
    <section className="project-reveal overflow-hidden border-t border-ink/15 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex items-center justify-between gap-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-titleBlue">
            More selected work
          </p>
          <p className="text-[11px] font-semibold tabular-nums tracking-[0.2em] text-ink/45">
            {String((activeIndex % relatedProjects.length) + 1).padStart(2, "0")} /{" "}
            {String(relatedProjects.length).padStart(2, "0")}
          </p>
        </div>

        <div className="relative mt-8">
          <div className="overflow-hidden">
            <div
              className={`flex ${transitionEnabled ? "transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" : ""}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((project, index) => (
                <Link
                  key={`${project.slug}-${index}`}
                  href={`/work/${project.slug}`}
                  className="group grid w-full shrink-0 gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/50">
                      View project
                    </p>
                    <h2
                      className="mt-4 break-words font-display text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.84] transition group-hover:opacity-70"
                      style={{ color: project.accent }}
                    >
                      {project.title}
                    </h2>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
                      {project.category} / {project.year}
                    </p>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.02]"
                      sizes="(min-width: 768px) 55vw, 100vw"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={showNextProject}
            disabled={isMoving}
            aria-label="Show next project"
            className="absolute right-3 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center bg-titleBlue text-white shadow-lg transition hover:bg-sunYellow hover:text-titleBlue disabled:cursor-default md:right-5 md:h-20 md:w-20"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-none stroke-current md:h-9 md:w-9"
            >
              <path
                d="m9 5 7 7-7 7"
                strokeWidth="1.8"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
