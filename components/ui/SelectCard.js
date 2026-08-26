"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Check } from "lucide-react";

const DEFAULT_TONE = { badge: "border-gold-500 bg-gold-500", check: "text-ink" };

export default function SelectCard({
  label,
  description,
  selected,
  onClick,
  multi = false,
  disabled = false,
  tone,
  className,
}) {
  const activeTone = tone || DEFAULT_TONE;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      aria-disabled={disabled}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className={clsx(
        "group flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ease-out",
        selected
          ? "border-ink bg-ink text-ivory"
          : "border-ink/12 bg-ivory-deep/60 text-ink hover:border-ink/30 hover:bg-ivory-deep",
        disabled && "cursor-not-allowed opacity-40 hover:border-ink/12 hover:bg-ivory-deep/60",
        className
      )}
    >
      <span>
        <span className="font-display block text-base leading-snug font-medium sm:text-lg">
          {label}
        </span>
        {description && (
          <span
            className={clsx(
              "mt-0.5 block text-sm leading-snug",
              selected ? "text-ivory/65" : "text-ink-faint"
            )}
          >
            {description}
          </span>
        )}
      </span>

      <span
        className={clsx(
          "flex h-6 w-6 shrink-0 items-center justify-center border transition-all duration-200",
          multi ? "rounded-md" : "rounded-full",
          selected
            ? clsx(activeTone.badge, activeTone.check)
            : "border-ink/20 text-transparent group-hover:border-ink/40"
        )}
      >
        <Check size={14} strokeWidth={3} />
      </span>
    </motion.button>
  );
}
