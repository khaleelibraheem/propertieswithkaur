"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import Container from "../ui/Container";
import Button from "../ui/Button";
import GradientWash from "../ui/GradientWash";

const PILL_LINKS = [
  { href: "/", type: "home", label: "Home" },
  { href: "/journey?type=buy", type: "buy", label: "Buy" },
  { href: "/journey?type=invest", type: "invest", label: "Invest" },
  { href: "/journey?type=sell", type: "sell", label: "Sell" },
];

// Shown in the full-screen menu only below the lg breakpoint, where the
// pill nav (which already covers these) is hidden.
const PRIMARY_LINKS = [
  { href: "/", type: "home", label: "Home" },
  { href: "/journey?type=buy", type: "buy", label: "Buy" },
  { href: "/journey?type=invest", type: "invest", label: "Invest" },
  { href: "/journey?type=sell", type: "sell", label: "Sell" },
];

// Always shown in the full-screen menu, at every breakpoint.
const MORE_LINKS = [
  { href: "/opportunities", label: "Opportunities" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

function useActiveType(pathname, searchParams) {
  if (pathname === "/") return "home";
  if (pathname === "/journey") return searchParams.get("type");
  if (pathname === "/buy") return "buy";
  if (pathname === "/invest") return "invest";
  if (pathname === "/sell") return "sell";
  return null;
}

function PillNav({ activeType }) {
  return (
    <nav className="hidden items-center gap-1 rounded-full bg-ink p-1.5 lg:flex">
      {PILL_LINKS.map((link) => {
        const active = activeType === link.type;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative px-4 py-2 text-sm font-medium"
          >
            {active && (
              <motion.span
                layoutId="pill-nav-active"
                className="absolute inset-0 rounded-full bg-ivory"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={clsx(
                "relative z-10",
                active ? "text-ink" : "text-ivory/70",
              )}
            >
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

function FullMenu({ open, onClose, activeType }) {
  const [washReady, setWashReady] = useState(false);

  return (
    <AnimatePresence onExitComplete={() => setWashReady(false)}>
      {open && (
        <motion.div
          initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={() => {
            if (open) setWashReady(true);
          }}
          className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-ink text-ivory"
        >
          {washReady && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <GradientWash variant="dark" />
            </motion.div>
          )}
          <Container className="relative flex h-20 shrink-0 items-center justify-between">
            <Image
              src="/logo-dark.png"
              alt="Properties with Kaur"
              width={933}
              height={636}
              className="h-11 w-auto"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory"
            >
              <X size={20} />
            </button>
          </Container>

          <div className="flex-1 overflow-y-auto">
            <div className="flex min-h-full flex-col justify-center px-6 py-10 sm:px-8 lg:px-12">
              <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
                <nav>
                  {PRIMARY_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      className="border-b border-ivory/10 lg:hidden"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center justify-between py-3 sm:py-4"
                      >
                        <span
                          className={clsx(
                            "font-display text-3xl font-medium tracking-tight transition-colors sm:text-4xl lg:text-5xl",
                            activeType === link.type
                              ? "text-gold-300"
                              : "text-ivory group-hover:text-gold-300",
                          )}
                        >
                          {link.label}
                        </span>
                        <ArrowUpRight
                          size={24}
                          className="shrink-0 text-ivory/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-300"
                        />
                      </Link>
                    </motion.div>
                  ))}
                  {MORE_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      className="border-b border-ivory/10"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + (PRIMARY_LINKS.length + i) * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center justify-between py-3 sm:py-4"
                      >
                        <span className="font-display text-3xl font-medium tracking-tight text-ivory transition-colors group-hover:text-gold-300 sm:text-4xl lg:text-5xl">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          size={24}
                          className="shrink-0 text-ivory/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-300"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="relative hidden overflow-hidden rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-10 lg:block"
                >
                  <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    Our philosophy
                  </p>
                  <p className="mt-5 font-display text-2xl leading-snug text-ivory">
                    &ldquo;If my clients grow, I grow.&rdquo;
                  </p>
                  <p className="mt-3 text-sm text-ivory/50">
                    Simran Kaur, Founder, Properties with Kaur
                  </p>
                  <Button
                    href="/journey"
                    variant="gold"
                    className="mt-8"
                    onClick={onClose}
                    icon
                  >
                    Start my property journey
                  </Button>
                </motion.div>
              </div>

              <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ivory/60">
                  <a href="https://wa.me/" className="hover:text-ivory">
                    WhatsApp
                  </a>
                  <a
                    href="mailto:hello@propertieswithkaur.com"
                    className="hover:text-ivory"
                  >
                    Email
                  </a>
                  <span>Dubai, United Arab Emirates</span>
                </div>
                <Button
                  href="/journey"
                  variant="gold"
                  size="md"
                  onClick={onClose}
                  className="lg:hidden"
                >
                  Start my property journey
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const activeType = useActiveType(pathname, searchParams);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "border-ink/8 bg-ivory/95 backdrop-blur-sm"
            : "border-transparent bg-ivory",
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Properties with Kaur"
              width={933}
              height={636}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <PillNav activeType={activeType} />

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/"
              aria-label="Message us on WhatsApp"
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-ink text-ivory transition-transform duration-200 hover:scale-105 sm:flex"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
            </a>
            <div className="hidden sm:inline-flex">
              <Button href="/contact" variant="outline" size="sm">
                Contact
              </Button>
            </div>
            <div className="hidden lg:inline-flex">
              <Button href="/journey" variant="gold" size="sm">
                Find what&apos;s right for me
              </Button>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </div>
        </Container>
      </header>

      <FullMenu
        open={open}
        onClose={() => setOpen(false)}
        activeType={activeType}
      />
    </>
  );
}
