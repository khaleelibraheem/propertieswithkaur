import clsx from "clsx";

const accentColors = {
  gold: "text-gold-300",
  terracotta: "text-terracotta-300",
  emerald: "text-emerald-500",
  purple: "text-purple-100",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "gold",
  className,
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={clsx("mb-3 text-xs font-semibold tracking-[0.2em] uppercase", accentColors[accent])}>
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-display text-4xl leading-[1.08] font-medium tracking-tight text-ivory sm:text-5xl lg:text-[3.2rem]">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
