"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const tones = {
  gold: "text-gold-600",
  terracotta: "text-terracotta-600",
  emerald: "text-emerald-600",
  purple: "text-purple-700",
};

export default function FeatureCard({ numeral, title, description, tone = "gold" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="h-full rounded-3xl border border-ink/8 bg-white p-7"
    >
      <span className={clsx("font-display block text-3xl", tones[tone])}>{numeral}</span>
      <h3 className="mt-4 font-display text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
    </motion.div>
  );
}
