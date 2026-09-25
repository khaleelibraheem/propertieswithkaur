"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, MessageCircle } from "lucide-react";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import Confetti from "../deco/Confetti";
import { buildOfferWhatsappHref } from "@/lib/contact";
import { OFFER } from "@/lib/limitedOffer";

const initial = { name: "", phone: "", email: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please enter your name";

  // Dubai enquiries arrive in every dialling format imaginable, so the
  // only test worth applying is whether there are enough digits to call
  // the person back.
  const digits = values.phone.replace(/\D/g, "");
  if (!digits) errors.phone = "Please enter your phone number";
  else if (digits.length < 7) errors.phone = "That number looks too short";

  if (!values.email.trim()) errors.email = "Please enter your email";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please check your email address";

  return errors;
}

export default function LeadForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sentHref, setSentHref] = useState(null);

  const set = (key) => (val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    // Clear a field's error the moment the visitor starts fixing it —
    // errors that linger while you type read as the form arguing back.
    if (submitted) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setErrors({});

    const href = buildOfferWhatsappHref(values, OFFER.project);
    // Opened synchronously inside the submit handler so it still counts as
    // a user gesture and isn't swallowed by the popup blocker.
    window.open(href, "_blank", "noopener,noreferrer");
    setSentHref(href);
  };

  if (sentHref) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-gold-300/30 bg-gold-500/10 p-8 text-center backdrop-blur-sm sm:p-10"
      >
        <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
          <Confetti count={16} />
          <CheckCircle2 size={30} className="text-gold-300" strokeWidth={1.6} />
        </div>
        <h3 className="font-display mt-5 text-2xl font-medium text-ivory">
          Thank you, {values.name.trim().split(" ")[0]}.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ivory/70">
          Your request is on its way. Simran will come back to you with the
          current price, payment plan and remaining availability.
        </p>
        <a
          href={sentHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-300 underline-offset-4 hover:underline"
        >
          <MessageCircle size={16} strokeWidth={1.8} />
          WhatsApp didn&apos;t open? Tap here
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-ivory/15 bg-ivory/[0.06] p-6 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:p-8"
    >
      <h3 className="font-display text-2xl leading-snug font-medium text-ivory">
        Get your personalised property options
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ivory/60">
        Three details, one reply — with the current price, payment plan and
        what&apos;s still available.
      </p>

      <div className="mt-6 grid gap-4">
        <TextField
          dark
          label="Full name"
          name="name"
          autoComplete="name"
          placeholder="Your full name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
        />
        <TextField
          dark
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+971 50 000 0000"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
        />
        <TextField
          dark
          label="Email address"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
      </div>

      <Button type="submit" variant="gold" size="lg" icon className="mt-6 w-full">
        Get my offer
      </Button>

      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-ivory/45">
        <Lock size={13} strokeWidth={1.8} className="mt-0.5 shrink-0" />
        Your details are confidential and will only be used to contact you
        regarding this property.
      </p>
    </form>
  );
}
