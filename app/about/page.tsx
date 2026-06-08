import Image from "next/image";
import Link from "next/link";

const services = [
  "brand",
  "UIUX",
  "web",
  "SNS ads",
  "ecommerce banners",
  "graphic design",
  "packaging",
  "exhibition"
];

const experience = [
  { role: "Brand systems", detail: "Visual direction, identity foundations, launch assets" },
  { role: "Digital design", detail: "Web pages, product flows, campaign surfaces" },
  { role: "Commercial graphics", detail: "Ads, banners, packaging, and event visuals" }
];

export const metadata = {
  title: "Hinna | Make things make sense"
};

export default function AboutPage() {
  return (
    <main className="bg-white text-ink">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pb-16 md:pt-24">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.45em] text-titleBlue">
          About Hinna
        </p>
        <h1 className="max-w-6xl font-display text-6xl font-black uppercase leading-[0.82] text-titleBlue md:text-8xl lg:text-[8.5rem]">
          Turning loose
          <br />
          ideas into
          <br />
          clear visuals
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-bookingBlue">
          <Image
            src="/images/about-statement.svg"
            alt="Abstract desk placeholder"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center border-y border-ink py-8 md:px-8">
          <p className="text-2xl font-semibold leading-10 text-titleBlue md:text-4xl md:leading-[1.15]">
            Good design is not just decoration. It is a way to make the next step
            easier to understand.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-ember">
            Make things make sense
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-titleBlue">
            About me
          </p>
          <h2 className="font-display text-4xl font-black uppercase leading-[0.95] text-titleBlue md:text-6xl">
            I help brands,
            <br />
            shops, and makers
            <br />
            organize their visual world.
          </h2>
        </div>
        <div className="space-y-6 text-base font-medium leading-8 md:text-lg">
          <p>
            Hinna is a design practice focused on clear, flexible visual systems for
            people building thoughtful products and services.
          </p>
          <p>
            The work moves across brand, UIUX, web, ads, packaging, ecommerce visuals,
            and exhibition graphics, with a focus on making each piece feel connected.
          </p>
          <p className="text-titleBlue">
            Based in Tokyo, working with clients globally.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-2 md:px-8 md:py-16">
        <div className="relative aspect-[4/5] overflow-hidden bg-sunYellow">
          <Image
            src="/images/about-portrait.svg"
            alt="Portrait placeholder"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-titleBlue">
            Approach
          </p>
          <h2 className="font-display text-5xl font-black uppercase leading-[0.9] text-titleBlue md:text-7xl">
            Clarity
            <br />
            before style
          </h2>
          <div className="mt-8 space-y-5 text-base font-medium leading-8">
            <p>
              Before choosing colors, type, or layouts, I look at what the design needs
              to explain, sell, support, or simplify.
            </p>
            <p>
              Then I build a visual direction that can stretch across touchpoints without
              losing the original idea.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-12 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <h2 className="mb-8 font-display text-4xl font-black uppercase text-titleBlue">
            Services
          </h2>
          <div className="grid gap-3">
            {services.map((service) => (
              <div
                key={service}
                className="border-t border-ink py-4 text-xl font-semibold"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-8 font-display text-4xl font-black uppercase text-titleBlue">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="border-t border-ink pt-5">
                <h3 className="text-2xl font-semibold text-titleBlue">{item.role}</h3>
                <p className="mt-2 leading-7">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-titleBlue px-5 py-16 text-center text-white md:px-8 md:py-24">
        <p className="mx-auto max-w-4xl font-display text-4xl font-black uppercase leading-[0.95] text-sunYellow md:text-6xl">
          When I&apos;m not designing, I&apos;m collecting references, testing small
          ideas, and looking for better ways to explain things visually.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 text-center md:px-8 md:py-24">
        <p className="font-display text-4xl font-black text-titleBlue md:text-5xl">
          Have an idea that needs shape?
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex bg-sunYellow px-10 py-4 text-sm font-black uppercase tracking-[0.32em] text-titleBlue transition hover:bg-titleBlue hover:text-white"
        >
          Contact me
        </Link>
      </section>
    </main>
  );
}
