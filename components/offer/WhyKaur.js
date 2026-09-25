import { MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import Button from "../ui/Button";
import OfferCta from "./OfferCta";
import Reveal from "../ui/Reveal";
import { buildOfferEnquiryHref } from "@/lib/contact";
import { OFFER, VALUE_PROPS } from "@/lib/limitedOffer";

// Section 04 — the last word on why the enquiry is worth making, closing
// on a CTA that sends the visitor back up to the form.
export default function WhyKaur() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Properties with Kaur"
            title="More than a property. It's your investment journey."
            accent="terracotta"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop, i) => (
            <Reveal key={prop.title} delay={i * 0.08}>
              <FeatureCard {...prop} />
            </Reveal>
          ))}
        </div>

        <Reveal y={28} className="mt-16">
          <div className="relative overflow-hidden rounded-[28px] border border-ivory/12 bg-gradient-to-br from-purple-800/40 via-purple-950/30 to-gold-500/10 p-8 text-center sm:rounded-[36px] sm:p-14">
            <div className="grain" />
            <div className="relative mx-auto max-w-2xl">
              <h3 className="font-display text-3xl leading-[1.12] font-medium tracking-tight text-ivory sm:text-[2.75rem]">
                Ready to explore this opportunity?
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">
                Speak directly with Properties with Kaur and get the latest
                availability, pricing and payment plan.
              </p>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <OfferCta variant="gold" size="lg" icon>
                  Get the current offer
                </OfferCta>
                <Button
                  href={buildOfferEnquiryHref(OFFER.project)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <MessageCircle size={16} strokeWidth={1.8} className="mr-2 inline-block align-[-2px]" />
                  Message on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
