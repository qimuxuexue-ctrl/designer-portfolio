export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  sector: string;
  context: string;
  challenge: string;
  conceptTitle: string;
  concept: string;
  outcome: string;
  quote: string;
  services: string[];
  image: string;
  gallery: string[];
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
    sector: "Personal care",
    context:
      "Cove Naturals is a growing personal care concept entering a crowded category where clarity, warmth, and shelf recognition all matter at once.",
    challenge:
      "The challenge was to create a system that could feel natural without becoming quiet, and expressive without losing the trust expected from an everyday care product.",
    conceptTitle: "Care that feels clear",
    concept:
      "The identity uses direct typography, generous color fields, and a simple product-first hierarchy. Every element is designed to make the range easy to understand while leaving room for a more playful campaign voice.",
    outcome:
      "The resulting system connects packaging, ecommerce, social content, and launch materials through one flexible visual language.",
    quote:
      "The work gave the product a stronger point of view while making the whole range easier to navigate.",
    services: ["Identity", "Art Direction", "Digital System"],
    image: "/images/project-cove-naturals.svg",
    gallery: [
      "/images/project-cove-naturals.svg",
      "/images/project-field-notes.svg",
      "/images/project-northline.svg",
      "/images/project-quiet-form.svg"
    ],
    accent: "#92165c"
  },
  {
    slug: "aster-beauty",
    title: "Aster Beauty",
    category: "Packaging",
    year: "2026",
    summary:
      "A crisp packaging system concept for beauty accessories, using a soft studio backdrop and a modular product family.",
    sector: "Beauty accessories",
    context:
      "Aster Beauty needed a packaging direction that could hold a broad and growing family of tools without turning the range into visual noise.",
    challenge:
      "The project had to balance product information, variant recognition, and a distinctive retail presence across many different pack sizes.",
    conceptTitle: "One system, many rituals",
    concept:
      "A modular frame, disciplined type hierarchy, and controlled color coding give every product its own identity while keeping the collection unmistakably connected.",
    outcome:
      "The system scales from compact accessories to larger kits and carries naturally into ecommerce imagery, campaign layouts, and retail communication.",
    quote:
      "A flexible foundation made the growing range feel considered rather than complicated.",
    services: ["Packaging", "Naming", "Campaign Direction"],
    image: "/images/project-aster-beauty.svg",
    gallery: [
      "/images/project-aster-beauty.svg",
      "/images/project-soft-archive.svg",
      "/images/project-field-notes.svg",
      "/images/project-northline.svg"
    ],
    accent: "#92165c"
  },
  {
    slug: "earth-house",
    title: "Earth House",
    category: "Packaging Design",
    year: "2025",
    summary:
      "A domestic goods packaging concept photographed in a quiet kitchen scene with fresh produce and warm reflective surfaces.",
    sector: "Home care",
    context:
      "Earth House is a home care concept built for people who want everyday products to feel useful, responsible, and pleasant to keep within reach.",
    challenge:
      "The design needed to communicate performance and environmental care without relying on the familiar visual language of either clinical cleaning or rustic sustainability.",
    conceptTitle: "Useful by nature",
    concept:
      "The direction pairs confident product cues with warm domestic photography, making the product feel effective enough for daily use and considered enough to belong in the home.",
    outcome:
      "A clear packaging and campaign system brings product, ingredients, and lifestyle together without overexplaining.",
    quote:
      "The final direction feels practical, warm, and easy to recognize in the moments that matter.",
    services: ["Packaging", "Art Direction", "Photography Direction"],
    image: "/images/project-earth-house.svg",
    gallery: [
      "/images/project-earth-house.svg",
      "/images/project-quiet-form.svg",
      "/images/project-northline.svg",
      "/images/project-field-notes.svg"
    ],
    accent: "#d7a8c2"
  },
  {
    slug: "soft-archive",
    title: "Soft Archive",
    category: "Editorial System",
    year: "2025",
    summary:
      "An image-led editorial framework for a cultural studio, designed for essays, releases, and seasonal collections.",
    sector: "Culture and editorial",
    context:
      "Soft Archive is an editorial concept for a cultural studio publishing essays, releases, references, and changing seasonal collections.",
    challenge:
      "The system needed enough character to feel authored while staying flexible around very different image formats and volumes of writing.",
    conceptTitle: "A framework for attention",
    concept:
      "A restrained grid and expressive scale shifts create a rhythm that can move between quiet reading, image-led stories, and concise announcements.",
    outcome:
      "The framework gives the studio a recognizable editorial voice without forcing every story into the same visual shape.",
    quote:
      "The system stays quiet when the content needs space and becomes expressive when the story asks for it.",
    services: ["Editorial", "Templates", "Design System"],
    image: "/images/project-soft-archive.svg",
    gallery: [
      "/images/project-soft-archive.svg",
      "/images/project-field-notes.svg",
      "/images/project-quiet-form.svg",
      "/images/project-northline.svg"
    ],
    accent: "#826f5b"
  },
  {
    slug: "kumo-market",
    title: "Kumo Market",
    category: "Ecommerce Banners",
    year: "2026",
    summary:
      "A modular ecommerce visual system for seasonal promotions, product drops, and storefront banners.",
    sector: "Ecommerce",
    context:
      "Kumo Market is a concept store that needs frequent campaign visuals without losing brand consistency from one promotion to the next.",
    challenge:
      "The work needed to support fast-moving sales moments while keeping product information, seasonal mood, and call-to-action hierarchy easy to scan.",
    conceptTitle: "Fast visuals, steady system",
    concept:
      "The design direction uses repeatable banner structures, bold product windows, and flexible color blocks so new campaigns can be produced quickly.",
    outcome:
      "The system gives the store a reliable visual toolkit for homepage banners, category modules, email headers, and social cuts.",
    quote:
      "A repeatable design system made daily promotional work feel organized instead of improvised.",
    services: ["Ecommerce", "Banner System", "Campaign Visuals"],
    image: "/images/project-field-notes.svg",
    gallery: [
      "/images/project-field-notes.svg",
      "/images/project-cove-naturals.svg",
      "/images/project-aster-beauty.svg",
      "/images/project-quiet-form.svg"
    ],
    accent: "#D65F38"
  },
  {
    slug: "signal-bento",
    title: "Signal Bento",
    category: "UIUX / H5",
    year: "2026",
    summary:
      "A compact mobile-first interface concept for a playful food ordering and launch campaign experience.",
    sector: "Food and digital",
    context:
      "Signal Bento is a fictional launch experience that connects a short campaign page with a simple mobile ordering flow.",
    challenge:
      "The challenge was to make the experience feel energetic while keeping the steps, product choices, and conversion path immediately understandable.",
    conceptTitle: "A quick path to appetite",
    concept:
      "The interface uses large touch targets, strong section rhythm, and a small set of repeatable product cards to keep the mobile journey direct.",
    outcome:
      "The result works as both a lightweight H5 campaign and a starter UI kit for later ordering screens.",
    quote:
      "The mobile flow feels bright and quick without asking the user to think too hard.",
    services: ["UIUX", "H5", "Campaign Page"],
    image: "/images/project-quiet-form.svg",
    gallery: [
      "/images/project-quiet-form.svg",
      "/images/project-soft-archive.svg",
      "/images/project-field-notes.svg",
      "/images/project-earth-house.svg"
    ],
    accent: "#19C7A1"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
