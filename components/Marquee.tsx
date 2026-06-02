export function Marquee() {
  const text = "Now booking identity, packaging, and digital projects";

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-mist/50 py-3 text-xs uppercase tracking-[0.18em]">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>{text}</span>
        ))}
      </div>
    </div>
  );
}
