"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const tones = {
  gold: "text-gold-300",
  terracotta: "text-terracotta-300",
  emerald: "text-emerald-500",
  purple: "text-purple-100",
};

export default function FeatureCard({ numeral, title, description, tone = "gold" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="h-full rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-7 backdrop-blur-sm"
    >
      <span className={clsx("font-display block text-3xl", tones[tone])}>{numeral}</span>
      <h3 className="mt-4 font-display text-lg font-medium text-ivory">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ivory/65">{description}</p>
    </motion.div>
  );
}
