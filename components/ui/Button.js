"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

const MotionLink = motion.create(Link);

const variants = {
  gold: "bg-gold-500 text-ink hover:bg-gold-600 shadow-[0_10px_24px_-12px_rgba(216,161,58,0.6)]",
  dark: "bg-ink text-ivory hover:bg-ink/85 shadow-[0_10px_24px_-12px_rgba(21,19,15,0.45)]",
  outline: "border border-ivory/25 text-ivory hover:border-ivory/50 hover:bg-ivory/[0.06]",
  ghost: "text-ivory hover:text-gold-300",
};

const sizes = {
  sm: "text-xs px-4 py-2.5",
  md: "text-sm px-6 py-3.5",
  lg: "text-sm px-8 py-4",
};

// Motion weight matches the button's importance: the primary gold action
// gets a confident lift, secondary actions get a smaller nudge, and ghost
// links (no visible container) don't move at all — only their color does.
const motionByVariant = {
  gold: {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
  dark: {
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
  outline: {
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
  ghost: {},
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "dark",
  size = "md",
  icon = false,
  className,
  disabled,
  ...props
}) {
  const classes = clsx(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-wide transition-colors duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-40",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight
          size={15}
          strokeWidth={2.2}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const motionProps = motionByVariant[variant] || motionByVariant.outline;

  if (href) {
    return (
      <MotionLink href={href} className={classes} onClick={onClick} {...motionProps} {...props}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
