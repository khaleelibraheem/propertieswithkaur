"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const tones = {
  gold: "bg-gold-100 text-gold-700",
  terracotta: "bg-terracotta-100 text-terracotta-700",
  emerald: "bg-emerald-100 text-emerald-700",
  purple: "bg-purple-100 text-purple-800",
};

export default function FeatureCard({ icon: Icon, title, description, tone = "gold" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="h-full rounded-3xl border border-ink/8 bg-white p-7"
    >
      <span
        className={clsx(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-full",
          tones[tone]
        )}
      >
        <Icon size={21} strokeWidth={1.6} />
      </span>
      <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
        {description}
      </p>
    </motion.div>
  );
}
