"use client";

import { motion } from "framer-motion";
import { Home, TrendingUp, KeyRound } from "lucide-react";
import { INTENT_STEP } from "@/lib/journeyConfig";

const ICONS = { buy: Home, invest: TrendingUp, sell: KeyRound };
const TONES = {
  buy: "bg-terracotta-100 text-terracotta-700",
  invest: "bg-emerald-100 text-emerald-700",
  sell: "bg-purple-100 text-purple-800",
};

export default function IntentScreen({ onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="text-xs font-semibold tracking-[0.25em] text-gold-700 uppercase">
        Your property journey starts with you
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight font-medium tracking-tight text-ink sm:text-5xl">
        {INTENT_STEP.question}
      </h1>

      <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
        {INTENT_STEP.options.map((option, i) => {
          const Icon = ICONS[option.value];
          return (
            <motion.button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="group flex flex-col gap-4 rounded-3xl border border-ink/10 bg-white p-6 text-left transition-colors duration-200 hover:border-ink/25"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-full ${TONES[option.value]}`}>
                <Icon size={20} strokeWidth={1.7} />
              </span>
              <span>
                <span className="block font-display text-lg font-medium text-ink">
                  {option.label}
                </span>
                <span className="mt-1 block text-sm text-ink-faint">
                  {option.description}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-ink-faint">{INTENT_STEP.helper}</p>
    </motion.div>
  );
}
