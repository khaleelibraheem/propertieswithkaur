import clsx from "clsx";

const accentColors = {
  gold: "text-gold-700",
  terracotta: "text-terracotta-600",
  emerald: "text-emerald-600",
  purple: "text-purple-700",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
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
        <p
          className={clsx(
            "mb-3 text-xs font-semibold tracking-[0.2em] uppercase",
            tone === "dark" ? accentColors[accent] : "text-gold-300"
          )}
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          className={clsx(
            "font-display text-4xl leading-[1.08] font-medium tracking-tight sm:text-5xl lg:text-[3.2rem]",
            tone === "dark" ? "text-ink" : "text-ivory"
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={clsx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-soft" : "text-ivory/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
