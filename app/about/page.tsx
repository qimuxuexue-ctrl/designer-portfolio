import Image from "next/image";

export const metadata = {
  title: "About | North Studio Portfolio"
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-ink/55">
              About the studio
            </p>
            <h1 className="font-serif text-6xl leading-[0.9] md:text-8xl">
              Design systems with atmosphere and intent.
            </h1>
          </div>
          <p className="text-lg leading-8 text-ink/65">
            North Studio is a placeholder identity for your future portfolio. Use this
            page to introduce your practice, values, collaborators, and process.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist">
          <Image
            src="/images/studio-placeholder.svg"
            alt="Studio portrait placeholder"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid content-center gap-8">
          {["Strategy", "Identity", "Packaging", "Digital"].map((item) => (
            <div key={item} className="border-t border-ink/15 pt-5">
              <h2 className="text-3xl font-medium">{item}</h2>
              <p className="mt-3 max-w-xl leading-7 text-ink/65">
                Placeholder description for the studio&apos;s approach to {item.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
