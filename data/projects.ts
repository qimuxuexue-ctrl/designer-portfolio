export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  services: string[];
  image: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "quiet-form",
    title: "Quiet Form",
    category: "Brand Identity",
    year: "2026",
    summary:
      "A refined visual system for a small objects studio, balancing editorial restraint with tactile product storytelling.",
    services: ["Identity", "Art Direction", "Digital System"],
    image: "/images/project-quiet-form.svg",
    accent: "#4d5a43"
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    category: "Packaging",
    year: "2026",
    summary:
      "Packaging concepts for a botanical goods label with spacious layouts, modular labels, and warm material cues.",
    services: ["Packaging", "Naming", "Campaign Direction"],
    image: "/images/project-field-notes.svg",
    accent: "#a95f3f"
  },
  {
    slug: "northline",
    title: "Northline",
    category: "Website Design",
    year: "2025",
    summary:
      "A calm digital presence for an architecture practice, built around generous imagery and direct project navigation.",
    services: ["Website", "UX Design", "Creative Direction"],
    image: "/images/project-northline.svg",
    accent: "#313c55"
  },
  {
    slug: "soft-archive",
    title: "Soft Archive",
    category: "Editorial System",
    year: "2025",
    summary:
      "An image-led editorial framework for a cultural studio, designed for essays, releases, and seasonal collections.",
    services: ["Editorial", "Templates", "Design System"],
    image: "/images/project-soft-archive.svg",
    accent: "#826f5b"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
