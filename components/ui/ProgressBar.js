"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ step, total }) {
  const percent = Math.min(100, Math.round((step / total) * 100));

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.15em] text-ink-faint uppercase">
          Step {step} of {total}
        </span>
        <span className="text-xs font-semibold text-ink-faint">{percent}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-ink/8">
        <motion.div
          className="h-full rounded-full bg-gold-500"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
