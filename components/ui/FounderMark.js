import Image from "next/image";

export default function FounderMark({ className }) {
  return (
    <div
      className={`relative flex aspect-[4/5] w-full items-end overflow-hidden rounded-[28px] bg-purple-950 ${className || ""}`}
    >
      <Image
        src="/images/founder-placeholder.jpg"
        alt="Simran Kaur, Founder of Properties with Kaur"
        fill
        sizes="(min-width: 1024px) 400px, 100vw"
        className="object-cover"
      />
      <div className="grain" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-ink/15 to-transparent" />
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-purple-700/25 via-transparent to-gold-500/10" />
      <p className="relative z-10 mb-8 w-full text-center text-xs font-semibold tracking-[0.2em] text-ivory/80 uppercase">
        Simran Kaur &middot; Founder
      </p>
    </div>
  );
}
