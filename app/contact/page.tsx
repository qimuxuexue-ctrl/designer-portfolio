export const metadata = {
  title: "Contact | North Studio Portfolio"
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_0.75fr]">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.18em] text-ink/55">
            Contact
          </p>
          <h1 className="font-serif text-6xl leading-[0.9] md:text-8xl">
            Tell us what you are building.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/65">
            This page is ready for your preferred contact method. For now, use the
            placeholder email and project details list below.
          </p>
        </div>
        <div className="border-t border-ink/15 pt-6 md:mt-24">
          <a className="text-3xl transition hover:text-clay" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <dl className="mt-10 space-y-6 text-sm uppercase tracking-[0.14em]">
            <div className="flex justify-between gap-6 border-t border-ink/10 pt-4">
              <dt className="text-ink/50">Location</dt>
              <dd>Available globally</dd>
            </div>
            <div className="flex justify-between gap-6 border-t border-ink/10 pt-4">
              <dt className="text-ink/50">Focus</dt>
              <dd>Brand / Web / Packaging</dd>
            </div>
            <div className="flex justify-between gap-6 border-t border-ink/10 pt-4">
              <dt className="text-ink/50">Bookings</dt>
              <dd>Open for 2026</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
