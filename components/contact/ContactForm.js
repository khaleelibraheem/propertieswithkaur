"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import Confetti from "../deco/Confetti";

const initial = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [showErrors, setShowErrors] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key) => (val) => setValues((prev) => ({ ...prev, [key]: val }));

  const isValid = values.name.trim() && values.email.trim() && values.phone.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setShowErrors(true);
      return;
    }
    // In production this hands off to the CRM described in the blueprint.
    console.info("[PWK contact enquiry]", values);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-gold-300/60 bg-gold-100/40 p-10 text-center"
      >
        <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
          <Confetti count={16} />
          <CheckCircle2 size={28} className="text-ink" strokeWidth={1.6} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium text-ink">
          We&apos;ll be in touch shortly.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Thank you, {values.name.split(" ")[0]}. A member of the Properties
          with Kaur team will reach out to arrange your private
          consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full name"
          value={values.name}
          onChange={set("name")}
          error={showErrors && !values.name.trim() ? "Required" : undefined}
        />
        <TextField
          label="Email"
          type="email"
          value={values.email}
          onChange={set("email")}
          error={showErrors && !values.email.trim() ? "Required" : undefined}
        />
        <TextField
          label="Mobile / WhatsApp"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          error={showErrors && !values.phone.trim() ? "Required" : undefined}
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
          What would you like to discuss?
        </label>
        <textarea
          rows={4}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          className="w-full rounded-xl border border-ink/12 bg-ivory-deep/40 px-4 py-3.5 text-base text-ink placeholder:text-ink-faint/70 transition-all focus:border-gold-500 focus:bg-white focus:shadow-[0_0_0_4px_var(--color-gold-100)]"
          placeholder="Tell us a little about what you're looking to achieve"
        />
      </div>

      <Button type="submit" variant="gold" size="lg" className="mt-7 w-full sm:w-auto" icon>
        Book a private consultation
      </Button>
    </form>
  );
}
