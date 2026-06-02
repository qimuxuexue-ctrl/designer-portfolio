import Image from "next/image";
import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/data/projects";

export default function Home() {
  const [featured, ...rest] = projects;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-ink/55">
              Independent design studio
            </p>
            <h1 className="font-serif text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
              Poised identities for considered brands.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink/65 md:pb-3">
            We create brand systems, packaging, and digital experiences with a calm,
            image-led rhythm and a clear sense of craft.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <ProjectCard project={featured} featured />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SectionIntro
          eyebrow="Recent projects"
          title="Selected work across identity, packaging, and digital."
          body="Placeholder case studies are ready for your images, credits, and finished project copy."
        />
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/work"
            className="inline-flex border border-ink px-6 py-3 text-sm uppercase tracking-[0.14em] transition hover:bg-ink hover:text-paper"
          >
            View all work
          </Link>
        </div>
      </section>

      <section className="bg-mist/45">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/studio-placeholder.svg"
              alt="Abstract studio placeholder"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-ink/55">
              Studio approach
            </p>
            <h2 className="font-serif text-5xl leading-none md:text-7xl">
              Quiet strategy, expressive craft.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/65">
              The site structure is built around spacious reveals, large project imagery,
              concise metadata, and a direct contact path.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
