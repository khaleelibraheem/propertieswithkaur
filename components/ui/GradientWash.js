import clsx from "clsx";

// Soft, blurred color-blob wash used behind hero/intro content, layered on
// top of the site-wide dark gradient for extra local depth. Kept low
// opacity and generously blurred so body text stays fully legible on top.
export default function GradientWash({ className }) {
  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-purple-600/35 blur-[110px]" />
      <div className="absolute top-1/4 -right-28 h-[28rem] w-[28rem] rounded-full bg-gold-500/20 blur-[110px]" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-terracotta-600/15 blur-[110px]" />
    </div>
  );
}
