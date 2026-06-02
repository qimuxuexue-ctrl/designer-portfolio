import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Marquee />

      <section className="px-4 pb-24 pt-14 md:px-8 md:pb-40 md:pt-16">
        <h1 className="mx-auto mb-8 max-w-5xl text-center font-display text-[4.4rem] font-black uppercase leading-[0.78] text-bubblegum md:mb-1 md:text-[7.8rem] lg:text-[9rem]">
          Recent
          <br />
          Projects
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
