import { Check, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import OfferCta from "./OfferCta";
import Reveal from "../ui/Reveal";
import FounderMark from "../ui/FounderMark";
import { buildOfferEnquiryHref } from "@/lib/contact";
import { EXPERIENCE_HIGHLIGHTS, OFFER } from "@/lib/limitedOffer";

// Section 01 — establishes who is on the other end of the form before the
// offer is made. Kept to roughly one viewport so the lead form in section
// 02 is only a short scroll away.
export default function Expertise() {
  return (
    <section className="pt-10 pb-14 sm:pt-14 sm:pb-16">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
              Dubai real estate advisory
            </p>
            <h1 className="font-display mt-5 text-[2.6rem] leading-[1.05] font-medium tracking-tight text-ivory sm:text-5xl lg:text-[3.5rem]">
              Dubai real estate expertise you can trust.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              With extensive experience in Dubai&apos;s real estate market,
              Properties with Kaur helps buyers and investors identify the
              right opportunities based on their goals, budget and
              investment objectives.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {EXPERIENCE_HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-300">
                    <Check size={12} strokeWidth={2.6} />
                  </span>
                  <span className="text-sm leading-relaxed text-ivory/80">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <OfferCta variant="gold" size="lg" icon>
                Speak with a Dubai property expert
              </OfferCta>
              <Button
                href={buildOfferEnquiryHref(OFFER.project)}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                <MessageCircle size={16} strokeWidth={1.8} className="mr-2 inline-block align-[-2px]" />
                WhatsApp Simran
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-sm lg:mb-12">
            <div className="relative">
              <FounderMark priority />
              <div className="absolute -bottom-9 -left-4 max-w-[15rem] rounded-2xl border border-ivory/12 bg-ink/92 p-4 shadow-[0_20px_45px_-22px_rgba(0,0,0,0.9)] backdrop-blur-md sm:-left-8">
                <p className="text-xs leading-relaxed text-ivory/75">
                  Every enquiry is reviewed personally by Simran before
                  anyone hears back.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
