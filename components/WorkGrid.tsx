import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function WorkGrid() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
