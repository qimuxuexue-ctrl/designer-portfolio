import Link from "next/link";

const messages = [
  "NOW TAKING BOOKINGS FOR 2026",
  "2026\u5e74\u306e\u3054\u4f9d\u983c\u53d7\u4ed8\u4e2d",
  "2026\u8bbe\u8ba1\u9884\u7ea6\u5f00\u653e\u4e2d"
];

export function Marquee() {
  return (
    <Link
      href="/contact"
      className="flex h-11 w-full items-center overflow-hidden bg-bookingBlue text-white transition brightness-100 hover:brightness-95"
      aria-label="Contact me"
    >
      <div className="marquee-track flex h-full w-max items-center gap-10 whitespace-nowrap text-base font-medium">
        {Array.from({ length: 8 }).map((_, groupIndex) =>
          messages.map((message) => (
            <span
              key={`${groupIndex}-${message}`}
              className="inline-flex h-full items-center gap-10"
            >
              <span className="inline-flex items-center">{message}</span>
              <span className="marquee-separator font-sans text-base">
                *
              </span>
            </span>
          ))
        )}
      </div>
    </Link>
  );
}
