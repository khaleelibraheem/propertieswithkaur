import Image from "next/image";

export default function FounderMark({ className }) {
  return (
    <div
      className={`relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[28px] bg-ink ${className || ""}`}
    >
      <div className="grain" />
      <Image
        src="/mark.png"
        alt=""
        width={223}
        height={219}
        className="h-28 w-28 opacity-90 sm:h-36 sm:w-36"
      />
      <p className="absolute bottom-8 text-xs font-semibold tracking-[0.2em] text-ivory/50 uppercase">
        Simran Kaur &middot; Founder
      </p>
    </div>
  );
}
