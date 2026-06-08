const textFields = [
  {
    label: "Name or nickname",
    jp: "\u304a\u540d\u524d or \u30cb\u30c3\u30af\u30cd\u30fc\u30e0",
    required: true
  },
  {
    label: "Email address",
    jp: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
    required: true,
    type: "email"
  },
  {
    label: "Business or project name",
    jp: "\u4e8b\u696d\u540d or \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d",
    required: true
  },
  { label: "Website address", jp: "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8" },
  {
    label: "Location",
    jp: "\u6240\u5728\u5730",
    required: true,
    placeholder: "Country / City"
  },
  {
    label: "Project deadline",
    jp: "\u3054\u5e0c\u671b\u306e\u516c\u958b\u6642\u671f",
    placeholder: "For example, do you have a launch date?"
  }
];

const longFields = [
  {
    label: "Tell me about your business or idea",
    jp: "\u4e8b\u696d\u3084\u30a2\u30a4\u30c7\u30a2\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044",
    placeholder: "What do you do? Who do you serve? What do you sell?"
  },
  {
    label: "What problem are you looking to overcome?",
    jp: "\u4eca\u3044\u3061\u3070\u3093\u6574\u7406\u3057\u305f\u3044\u8ab2\u984c\u306f\u4f55\u3067\u3059\u304b\uff1f",
    placeholder: "Tell me what is not making sense yet."
  },
  {
    label: "Anything else you would like to share?",
    jp: "\u305d\u306e\u4ed6\u5171\u6709\u3057\u305f\u3044\u3053\u3068\u306f\u3042\u308a\u307e\u3059\u304b\uff1f",
    placeholder: "Share links, notes, or context that would help."
  }
];

const services =
  "brand / UIUX / web / SNS ads / ecommerce banners / graphic design / packaging / exhibition";

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
            <p className="text-titleBlue">
              You can usually expect a reply within 2 business days.
            </p>
          </div>
        </div>

        <form className="mt-12 space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            {textFields.map((field) => (
              <label key={field.label} className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em]">
                  {field.label} / {field.jp}
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

          {longFields.map((field) => (
            <label key={field.label} className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em]">
                {field.label} / {field.jp}
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
          <a
            className="mt-2 block font-semibold hover:text-titleBlue"
            href="mailto:qimuxuexue@gmail.com"
          >
            qimuxuexue@gmail.com
          </a>
          <p className="mt-3 text-sm font-medium">{services}</p>
        </div>
      </section>
    </main>
  );
}
