"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Home, TrendingUp, KeyRound, Lightbulb } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import GradientWash from "../ui/GradientWash";

const HEADLINE_LINES = ["Your property", "journey starts", "with you."];

const PATHS = [
  { href: "/buy", icon: Home, label: "Buy" },
  { href: "/invest", icon: TrendingUp, label: "Invest" },
  { href: "/sell", icon: KeyRound, label: "Sell" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientWash />
      <Container className="relative pt-12 sm:pt-16">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.25em] text-ink-faint uppercase"
        >
          Properties with Kaur
        </motion.p>

        <h1 className="font-display -ml-1 text-[2.7rem] leading-[1.02] font-semibold tracking-tight text-ink sm:text-[4.6rem] lg:text-[6.1rem] xl:text-[6.9rem]">
          {HEADLINE_LINES.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="max-w-sm text-base leading-relaxed text-ink-soft">
              Tell us what you&apos;re looking to achieve, and we&apos;ll help
              you find the right property strategy.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm">
              {PATHS.map((path, i) => (
                <span key={path.href} className="flex items-center gap-3">
                  {i > 0 && <span className="text-ink-faint/50">&middot;</span>}
                  <Link
                    href={path.href}
                    className="font-medium text-ink underline decoration-ink/20 decoration-1 underline-offset-4 transition-colors hover:decoration-gold-500"
                  >
                    {path.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <Button href="/journey" variant="gold" size="lg" icon>
            Start my property journey
          </Button>
        </motion.div>
      </Container>

      <Container className="relative mt-10 sm:mt-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[420px] w-full overflow-hidden rounded-[28px] sm:h-[480px] lg:h-[600px]"
        >
          <Image
            src="/images/hero-villa.jpg"
            alt="A modern villa exterior, representative of the calibre of homes Properties with Kaur advises on"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />

          <div className="absolute top-5 left-5 flex max-w-[230px] items-start gap-3 rounded-2xl bg-ivory/95 p-4 shadow-lg sm:top-7 sm:left-7">
            <Lightbulb size={17} strokeWidth={1.7} className="mt-0.5 shrink-0 text-gold-600" />
            <p className="text-xs leading-relaxed font-medium text-ink">
              Dedicated to understanding you first, then finding the right
              property strategy.
            </p>
          </div>

          <div className="absolute bottom-5 left-5 rounded-2xl bg-ivory/95 p-4 shadow-lg sm:bottom-7 sm:left-7">
            <p className="text-[0.65rem] font-semibold tracking-wide text-ink-faint uppercase">
              Start with
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              {PATHS.map((path) => (
                <Link
                  key={path.href}
                  href={path.href}
                  aria-label={`I want to ${path.label.toLowerCase()}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-ivory transition-transform duration-200 hover:scale-110"
                >
                  <path.icon size={15} strokeWidth={1.8} />
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/journey"
            aria-label="Start my property journey"
            className="absolute right-5 bottom-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-ivory shadow-lg transition-transform duration-200 hover:scale-105 sm:right-7 sm:bottom-7 sm:h-20 sm:w-20"
          >
            <ArrowUpRight size={24} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
