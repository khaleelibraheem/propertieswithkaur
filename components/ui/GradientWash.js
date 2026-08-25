import clsx from "clsx";

// Soft, blurred color-blob washes used behind hero/intro content. Kept low
// opacity and generously blurred so body text stays fully legible on top.
export default function GradientWash({ variant = "light", className }) {
  if (variant === "dark") {
    return (
      <div aria-hidden className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        <div className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-purple-600/35 blur-[110px]" />
        <div className="absolute top-1/4 -right-28 h-[28rem] w-[28rem] rounded-full bg-gold-500/20 blur-[110px]" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-terracotta-600/15 blur-[110px]" />
      </div>
    );
  }

  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-28 -right-20 h-[32rem] w-[32rem] rounded-full bg-gold-300/45 blur-[100px]" />
      <div className="absolute top-16 -left-24 h-[26rem] w-[26rem] rounded-full bg-purple-100/80 blur-[100px]" />
      <div className="absolute bottom-[-10rem] left-1/4 h-[24rem] w-[24rem] rounded-full bg-terracotta-100/70 blur-[100px]" />
    </div>
  );
}
