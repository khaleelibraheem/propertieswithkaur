"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Confetti from "../deco/Confetti";

export default function StepFinal({ firstName, summaryLine, whatsappHref, onRestart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-xl text-center"
    >
      <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
        <Confetti />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500"
        >
          <Sparkles size={24} className="text-ink" strokeWidth={1.7} />
        </motion.div>
      </div>

      <h1 className="mt-7 font-display text-3xl leading-tight font-medium tracking-tight text-ink sm:text-4xl">
        We&apos;ve got a clearer picture of what you&apos;re looking for.
      </h1>

      <p className="mt-5 text-base leading-relaxed text-ink-soft">
        {firstName ? `Thank you, ${firstName}. ` : ""}Our team will review
        your goals, budget and timeline before recommending anything. That
        way, your conversation starts with opportunities that actually make
        sense for you.
      </p>

      {summaryLine && (
        <p className="mt-6 rounded-2xl border border-gold-300/60 bg-gold-100/40 px-5 py-4 text-sm text-ink-soft">
          {summaryLine}
        </p>
      )}

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="/contact" variant="gold" size="lg" icon>
          Book a private consultation
        </Button>
        <Button
          href={whatsappHref}
          variant="outline"
          size="lg"
          className="!border-ink/15 !text-ink hover:!border-ink/40 hover:!bg-ink/[0.03]"
        >
          Continue on WhatsApp
        </Button>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 text-sm text-ink-faint underline underline-offset-4 hover:text-ink"
      >
        Start a new journey
      </button>
    </motion.div>
  );
}
