import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Marquee />

      <section className="px-4 pb-24 pt-14 md:px-8 md:pb-40 md:pt-16">
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-6xl font-black uppercase leading-[0.78] tracking-[-0.05em] text-bubblegum md:-mb-12 md:text-[8.5rem] lg:text-[10rem]">
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
