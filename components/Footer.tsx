import Link from "next/link";
import { SocialIconLinks } from "@/components/SocialIconLinks";

export function Footer() {
  return (
    <footer className="bg-bookingBlue text-center text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="font-display text-4xl font-black text-sunYellow md:text-5xl">
          Let&apos;s chat!
        </h2>
        <p className="mx-auto mt-9 max-w-2xl text-base font-medium leading-8 text-white md:text-lg">
          I&apos;d love to hear more about your brand and answer any questions you may
          have about my work.
        </p>
        <Link
          className="mx-auto mt-9 inline-flex min-w-64 justify-center bg-sunYellow px-12 py-4 text-xs font-black uppercase tracking-[0.55em] text-titleBlue transition hover:brightness-95"
          href="/contact"
        >
          Email me
        </Link>
        <div className="mt-12 text-base font-medium leading-7 text-white">
          <p>+1 400 403 077</p>
          <p>Based in Melbourne, Australia.</p>
          <p>Working with clients in Australia and globally.</p>
        </div>
        <div className="mt-7 flex justify-center gap-8 text-white">
          <SocialIconLinks colorClassName="text-white hover:text-sunYellow" />
        </div>
      </div>
    </footer>
  );
}
