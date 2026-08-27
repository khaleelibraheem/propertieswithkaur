"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import GradientWash from "../ui/GradientWash";

const HEADLINE_LINES = [
  { text: "Your property" },
  { text: "journey starts" },
  { text: "with ", highlight: "you." },
];

const PATHS = [
  { href: "/journey?type=buy", label: "Buy" },
  { href: "/journey?type=invest", label: "Invest" },
  { href: "/journey?type=sell", label: "Sell" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientWash variant="dark" />
      <Container className="relative pt-12 sm:pt-16">

        <h1 className="font-display -ml-1 text-[2.7rem] leading-[1.02] font-semibold tracking-tight text-ivory sm:text-[4.6rem] lg:text-[6.1rem] xl:text-[6.9rem]">
          {HEADLINE_LINES.map((line, i) => (
            <motion.span
              key={line.text}
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              {line.text}
              {line.highlight && (
                <span className="text-gold-300">{line.highlight}</span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between"
        >
          <div>
            <p className="max-w-sm text-base leading-relaxed text-ivory/70">
              Tell us what you&apos;re looking to achieve, and we&apos;ll help
              you find the right property strategy.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {PATHS.map((path) => (
                <Button key={path.href} href={path.href} variant="outline" size="lg" className="w-full sm:w-[230px]">
                  {path.label}
                </Button>
              ))}
            </div>
          </div>
          <Button href="/journey" variant="gold" size="lg" icon className="w-full self-stretch sm:w-auto sm:self-start">
            Start my property journey
          </Button>
        </motion.div>
      </Container>

      <Container className="relative mt-10 sm:mt-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video w-full overflow-hidden rounded-[28px]"
        >
          <Image
            src="/images/hero-map.jpg"
            alt="Illustrated map of key Properties with Kaur destinations across Abu Dhabi, Dubai and Ras Al Khaimah"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />

          <div className="absolute top-5 left-5 hidden max-w-[230px] items-start gap-3 rounded-2xl bg-ivory/95 p-4 shadow-lg sm:top-7 sm:left-7 sm:flex">
            <Lightbulb size={17} strokeWidth={1.7} className="mt-0.5 shrink-0 text-gold-600" />
            <p className="text-xs leading-relaxed font-medium text-ink">
              Dedicated to understanding you first, then finding the right
              property strategy.
            </p>
          </div>

          <Link
            href="/journey"
            aria-label="Start my property journey"
            className="absolute right-5 bottom-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-ivory shadow-lg transition-transform duration-200 hover:scale-105 sm:right-7 sm:bottom-7 sm:h-20 sm:w-20"
          >
            <ArrowUpRight size={24} />
          </Link>
        </motion.div>

        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-ivory/95 p-4 shadow-lg sm:hidden">
          <Lightbulb size={17} strokeWidth={1.7} className="mt-0.5 shrink-0 text-gold-600" />
          <p className="text-xs leading-relaxed font-medium text-ink">
            Dedicated to understanding you first, then finding the right
            property strategy.
          </p>
        </div>
      </Container>
    </section>
  );
}
