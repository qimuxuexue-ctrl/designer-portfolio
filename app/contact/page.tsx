const textFields = [
  { label: "Your first name", required: true },
  { label: "Your last name", required: true },
  { label: "Email address", required: true, type: "email" },
  { label: "Name of your business", required: true },
  { label: "Your website address" },
  { label: "Your social media handles" },
  { label: "Location of your business", required: true, placeholder: "Country / City" },
  { label: "Project deadline and why?", placeholder: "For example, do you have a launch date?" }
];

const selectFields = [
  "How long have you been in business?",
  "Which services are you interested in?",
  "What is the goal for your branding?",
  "What are you prepared to invest in this project?"
];

const longFields = [
  {
    label: "Tell me a little about your business",
    placeholder: "What do you do? Who do you serve? What do you sell?"
  },
  {
    label: "What problem are you looking to overcome?",
    placeholder: "Tell me what is not making sense yet."
  },
  {
    label: "Anything else you would like to share?",
    placeholder: "Share links, notes, or context that would help."
  }
];

export const metadata = {
  title: "Hinna | Make things make sense"
};

function RequiredMark({ show }: { show?: boolean }) {
  return show ? <span className="text-ember">*</span> : null;
}

export default function ContactPage() {
  return (
    <main className="bg-white text-ink">
      <section className="flex min-h-[72vh] flex-col justify-end bg-titleBlue px-5 pb-20 pt-16 text-center md:min-h-[78vh] md:px-8 md:pb-28 md:pt-24">
        <div>
          <p className="mx-auto mb-8 max-w-3xl text-xs font-semibold uppercase tracking-[0.45em] text-white/80">
            Contact me
          </p>
          <h1 className="mx-auto max-w-6xl font-display text-[4rem] font-black uppercase leading-[0.82] text-sunYellow md:text-8xl lg:text-[8.5rem]">
            Let&apos;s make
            <br />
            your idea
            <br />
            make sense
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <h2 className="font-display text-4xl font-black leading-[0.95] text-titleBlue md:text-5xl">
            I&apos;d love to hear about your project.
          </h2>
          <div className="space-y-5 text-base font-medium leading-8">
            <p>
              Use this form to share the details of your brand, website, packaging,
              or studio project. The more context you include, the easier it is to
              understand what needs to make sense.
            </p>
            <p>
              If the project feels aligned, I&apos;ll follow up by email to arrange
              a discovery call and talk through scope, timing, and next steps.
            </p>
            <p className="text-titleBlue">You can usually expect a reply within 2 business days.</p>
          </div>
        </div>

        <div className="mt-12 rounded-none border border-sunYellow bg-sunYellow/20 px-5 py-4 text-sm font-semibold text-titleBlue">
          This form is currently a front-end mockup. Replace it with your preferred form
          service when you are ready to collect enquiries.
        </div>

        <form className="mt-8 space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            {textFields.map((field) => (
              <label key={field.label} className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em]">
                  {field.label}
                  <RequiredMark show={field.required} />
                </span>
                <input
                  className="h-11 w-full border border-ink bg-white px-3 text-sm outline-none transition focus:border-titleBlue focus:ring-2 focus:ring-bookingBlue/30"
                  placeholder={field.placeholder}
                  type={field.type ?? "text"}
                />
              </label>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {selectFields.map((label) => (
              <label key={label} className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em]">
                  {label}
                  <RequiredMark show />
                </span>
                <select className="h-11 w-full border border-ink bg-white px-3 text-sm outline-none transition focus:border-titleBlue focus:ring-2 focus:ring-bookingBlue/30">
                  <option>Select</option>
                  <option>Brand identity</option>
                  <option>Website design</option>
                  <option>Packaging design</option>
                  <option>Creative direction</option>
                </select>
              </label>
            ))}
          </div>

          {longFields.map((field) => (
            <label key={field.label} className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em]">
                {field.label}
              </span>
              <textarea
                className="min-h-32 w-full border border-ink bg-white px-3 py-3 text-sm outline-none transition focus:border-titleBlue focus:ring-2 focus:ring-bookingBlue/30"
                placeholder={field.placeholder}
              />
            </label>
          ))}

          <div className="flex justify-end">
            <button
              className="bg-sunYellow px-10 py-4 text-sm font-black text-titleBlue transition hover:bg-titleBlue hover:text-white"
              type="button"
            >
              Let&apos;s do this!
            </button>
          </div>
        </form>

        <div className="mt-20 border-t border-ink pt-10 text-center">
          <p className="font-display text-3xl font-black text-titleBlue">Hinna</p>
          <a className="mt-2 block font-semibold hover:text-titleBlue" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <p className="mt-3 text-sm font-medium">
            Brand, web, and packaging design for people building thoughtful things.
          </p>
          <div className="mt-6 flex justify-center gap-7 text-2xl">
            <span className="text-ember">ig</span>
            <span className="text-mint">p</span>
          </div>
        </div>
      </section>
    </main>
  );
}
