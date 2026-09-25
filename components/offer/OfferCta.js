"use client";

import Button from "../ui/Button";

// Every CTA on this page has exactly one job: land the visitor on the lead
// form. The scroll is driven here rather than left to the router's hash
// handling so it behaves identically from the sticky header, the hero and
// the closing panel — and so a visitor who asks for reduced motion gets a
// jump instead of a 3,000px glide, which the global smooth scroll-behavior
// would otherwise force on them.
export default function OfferCta({ children, ...props }) {
  const scrollToOffer = (e) => {
    const target = document.getElementById("offer");
    if (!target) return; // Nothing to scroll to: let the hash link do its thing.

    e.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
    window.history.replaceState(null, "", "#offer");
  };

  return (
    <Button href="#offer" onClick={scrollToOffer} {...props}>
      {children}
    </Button>
  );
}
