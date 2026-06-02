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
    slug: "cove-naturals",
    title: "Cove Naturals",
    category: "Brand Identity",
    year: "2026",
    summary:
      "A bright product-led identity concept for a personal care label, built around clean packaging and warm campaign imagery.",
    services: ["Identity", "Art Direction", "Digital System"],
    image: "/images/project-cove-naturals.svg",
    accent: "#92165c"
  },
  {
    slug: "aster-beauty",
    title: "Aster Beauty",
    category: "Packaging",
    year: "2026",
    summary:
      "A crisp packaging system concept for beauty accessories, using a soft studio backdrop and a modular product family.",
    services: ["Packaging", "Naming", "Campaign Direction"],
    image: "/images/project-aster-beauty.svg",
    accent: "#92165c"
  },
  {
    slug: "earth-house",
    title: "Earth House",
    category: "Packaging Design",
    year: "2025",
    summary:
      "A domestic goods packaging concept photographed in a quiet kitchen scene with fresh produce and warm reflective surfaces.",
    services: ["Packaging", "Art Direction", "Photography Direction"],
    image: "/images/project-earth-house.svg",
    accent: "#d7a8c2"
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
