"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

const MotionLink = motion.create(Link);

const variants = {
  gold: "bg-gold-500 text-ink hover:bg-gold-600 shadow-[0_10px_24px_-12px_rgba(216,161,58,0.6)]",
  dark: "bg-ink text-ivory hover:bg-ink/85 shadow-[0_10px_24px_-12px_rgba(21,19,15,0.45)]",
  outline: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  ghost: "text-ink hover:text-gold-700",
};

const sizes = {
  sm: "text-xs px-4 py-2.5",
  md: "text-sm px-6 py-3.5",
  lg: "text-sm px-8 py-4",
};

const motionProps = {
  whileHover: { scale: 1.025, y: -1 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 420, damping: 26 },
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
