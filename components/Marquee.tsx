export function Marquee() {
  const text = "Now taking bookings for 2026";

  return (
    <div className="overflow-hidden bg-bubblegum py-2 text-plum">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-serif text-base uppercase">
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="flex items-center gap-10">
            {text}
            <span className="font-sans text-lg">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
