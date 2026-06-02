type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionIntro({ eyebrow, title, body }: SectionIntroProps) {
  return (
    <div className="mb-10 grid gap-5 md:mb-14 md:grid-cols-[0.45fr_1fr]">
      <p className="text-sm uppercase tracking-[0.18em] text-ink/55">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl font-serif text-4xl leading-[0.95] md:text-6xl">
          {title}
        </h2>
        {body ? <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">{body}</p> : null}
      </div>
    </div>
  );
}
