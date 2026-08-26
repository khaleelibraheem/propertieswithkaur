import Image from "next/image";

export default function FounderMark({ className }) {
  return (
    <div
      className={`relative flex aspect-[4/5] w-full items-end overflow-hidden rounded-[28px] bg-ink ${className || ""}`}
    >
      <Image
        src="/images/founder-placeholder.jpg"
        alt="Simran Kaur, Founder of Properties with Kaur"
        fill
        sizes="(min-width: 1024px) 400px, 100vw"
        className="object-cover"
      />
      <div className="grain" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
      <p className="relative z-10 mb-8 w-full text-center text-xs font-semibold tracking-[0.2em] text-ivory/80 uppercase">
        Simran Kaur &middot; Founder
      </p>
    </div>
  );
}
