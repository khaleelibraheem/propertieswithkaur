"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import clsx from "clsx";
import OfferCta from "./OfferCta";
import { buildOfferEnquiryHref } from "@/lib/contact";
import { OFFER } from "@/lib/limitedOffer";

// Mobile only. On desktop the sticky header already keeps both actions on
// screen, and a second fixed bar there would just eat the viewport.
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={clsx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ivory/12 bg-ink/92 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 ease-out lg:hidden",
        show ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div className="flex items-center gap-3">
        <a
          href={buildOfferEnquiryHref(OFFER.project)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Properties with Kaur on WhatsApp"
          tabIndex={show ? 0 : -1}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white"
        >
          <MessageCircle size={20} strokeWidth={2} />
        </a>
        <OfferCta
          variant="gold"
          size="md"
          icon
          tabIndex={show ? 0 : -1}
          className="flex-1"
        >
          Get my offer
        </OfferCta>
      </div>
    </div>
  );
}
