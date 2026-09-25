import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import OfferCta from "./OfferCta";
import { buildOfferEnquiryHref } from "@/lib/contact";
import { OFFER } from "@/lib/limitedOffer";

// Deliberately not the site Navbar: this page runs on paid traffic, so the
// only two things in the header are the two ways to convert. The logo is a
// plain image rather than a link home for the same reason.
export default function OfferHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-ink/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between sm:h-20">
        <Image
          src="/logo-dark.png"
          alt="Properties with Kaur"
          width={917}
          height={461}
          priority
          className="h-10 w-auto sm:h-12"
        />

        <div className="flex items-center gap-3">
          <a
            href={buildOfferEnquiryHref(OFFER.project)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Properties with Kaur on WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 bg-ivory/[0.04] text-ivory transition-transform duration-200 hover:scale-105"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
          </a>
          <OfferCta variant="gold" size="sm">
            Get my offer
          </OfferCta>
        </div>
      </Container>
    </header>
  );
}
