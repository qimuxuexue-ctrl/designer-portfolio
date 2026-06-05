import Link from "next/link";

const messages = [
  "NOW TAKING BOOKINGS FOR 2026",
  "2026年のご依頼受付中",
  "2026设计预约开放中"
];

export function Marquee() {
  return (
    <Link
      href="/contact"
      className="block overflow-hidden bg-bookingBlue py-2 text-white transition brightness-100 hover:brightness-95"
      aria-label="Contact me"
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-serif text-base">
        {Array.from({ length: 8 }).map((_, groupIndex) =>
          messages.map((message) => (
            <span
              key={`${groupIndex}-${message}`}
              className="flex items-center gap-10"
            >
              {message}
              <span className="font-sans text-lg">*</span>
            </span>
          ))
        )}
      </div>
    </Link>
  );
}
