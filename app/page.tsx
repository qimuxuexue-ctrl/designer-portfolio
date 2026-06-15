"use client";

import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Marquee />

      <section className="flex flex-col gap-0 overflow-hidden px-4 pb-24 pt-14 md:px-8 md:pb-40 md:pt-16">
        <h1 className="mx-auto mb-0 max-w-[calc(100vw-1.5rem)] text-center font-display text-[clamp(3.25rem,14.6vw,3.9rem)] font-black uppercase leading-[0.76] text-titleBlue md:max-w-5xl md:text-[7.35rem] md:leading-[0.72] lg:text-[8.55rem]">
          {t("home.recent")}
          <br />
          {t("home.projects")}
        </h1>

        <div className="mx-auto grid max-w-[1040px] gap-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.slug}
              className={index === 2 ? "md:col-start-1 md:mt-7" : undefined}
            >
              <ProjectCard project={project} variant="portfolio" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
