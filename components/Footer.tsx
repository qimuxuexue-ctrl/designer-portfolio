import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:py-16">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-paper/60">
            Available for select collaborations
          </p>
          <h2 className="max-w-3xl font-serif text-5xl leading-none md:text-7xl">
            Let&apos;s shape a thoughtful visual world.
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-10 text-sm">
          <div className="space-y-3">
            <Link className="block transition hover:text-clay" href="/contact">
              Contact the studio
            </Link>
            <a className="block transition hover:text-clay" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <p className="text-paper/60">Working with clients globally.</p>
          </div>
          <p className="text-paper/50">© 2026 North Studio. Original portfolio template.</p>
        </div>
      </div>
    </footer>
  );
}
