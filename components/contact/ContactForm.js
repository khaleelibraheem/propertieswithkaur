"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import Confetti from "../deco/Confetti";
import { buildContactWhatsappHref } from "@/lib/contact";

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
    // Opened synchronously inside this submit handler so it counts as a
    // user gesture and isn't blocked as a popup.
    window.open(buildContactWhatsappHref(values), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border border-gold-300/25 bg-gold-500/10 p-10 text-center"
      >
        <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
          <Confetti count={16} />
          <CheckCircle2 size={28} className="text-gold-300" strokeWidth={1.6} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium text-ivory">
          We&apos;ll be in touch shortly.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ivory/70">
          Thank you, {values.name.split(" ")[0]}. A member of the Properties
          with Kaur team will reach out to arrange your private
          consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-8 backdrop-blur-sm sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          dark
          label="Full name"
          value={values.name}
          onChange={set("name")}
          error={showErrors && !values.name.trim() ? "Required" : undefined}
        />
        <TextField
          dark
          label="Email"
          type="email"
          value={values.email}
          onChange={set("email")}
          error={showErrors && !values.email.trim() ? "Required" : undefined}
        />
        <TextField
          dark
          label="Mobile / WhatsApp"
          type="tel"
          value={values.phone}
          onChange={set("phone")}
          error={showErrors && !values.phone.trim() ? "Required" : undefined}
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-ivory/45">
          What would you like to discuss?
        </label>
        <textarea
          rows={4}
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          className="w-full rounded-xl border border-ivory/15 bg-ivory/[0.05] px-4 py-3.5 text-base text-ivory placeholder:text-ivory/35 transition-all focus:border-gold-300 focus:bg-ivory/[0.09] focus:shadow-[0_0_0_4px_rgba(216,161,58,0.18)]"
          placeholder="Tell us a little about what you're looking to achieve"
        />
      </div>

      <Button type="submit" variant="gold" size="lg" className="mt-7 w-full sm:w-auto" icon>
        Book a private consultation
      </Button>
    </form>
  );
}
