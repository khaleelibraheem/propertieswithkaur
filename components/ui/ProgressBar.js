"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ step, total }) {
  const percent = Math.round((step / total) * 100);

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.15em] text-ink-faint uppercase">
          Step {step} of {total}
        </span>
        <span className="text-xs font-semibold text-gold-700">{percent}%</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/8">
            <motion.div
              className="h-full rounded-full bg-gold-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: i < step ? 1 : 0 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
