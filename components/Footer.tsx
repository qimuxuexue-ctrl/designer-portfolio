import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blush text-center text-ink">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="text-4xl font-black tracking-[-0.02em] text-plum md:text-5xl">
          Let&apos;s chat!
        </h2>
        <p className="mx-auto mt-9 max-w-2xl text-base font-medium leading-8 md:text-lg">
          I&apos;d love to hear more about your brand and answer any questions you may
          have about my work.
        </p>
        <Link
          className="mx-auto mt-9 inline-flex min-w-64 justify-center bg-plum px-12 py-4 text-xs font-black uppercase tracking-[0.55em] text-bubblegum transition hover:bg-ink"
          href="/contact"
        >
          Email me
        </Link>
        <div className="mt-12 text-base font-medium leading-7">
          <p>+1 400 403 077</p>
          <p>Based in Melbourne, Australia.</p>
          <p>Working with clients in Australia and globally.</p>
        </div>
        <div className="mt-7 flex justify-center gap-8 text-4xl">
          <span>◎</span>
          <span className="font-serif">p</span>
        </div>
      </div>
    </footer>
  );
}
