"use client";

import { useId } from "react";
import clsx from "clsx";

export default function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  className,
  autoFocus,
}) {
  const id = useId();

  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        className={clsx(
          "w-full rounded-xl border bg-ivory-deep/40 px-4 py-3.5 text-base text-ink placeholder:text-ink-faint/70 transition-all duration-200 focus:bg-white focus:shadow-[0_0_0_4px_var(--color-gold-100)]",
          error ? "border-red-400" : "border-ink/12 focus:border-gold-500"
        )}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
