import { Check } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import Countdown from "./Countdown";
import LeadForm from "./LeadForm";
import { OFFER, OFFER_HIGHLIGHTS } from "@/lib/limitedOffer";

// What the enquiry actually buys the visitor — the reason to hand over a
// phone number rather than keep scrolling.
const INCLUDED = [
  "The current price list for the units still available",
  "The full payment plan, fees and reservation terms",
  "Floor plans and a shortlist matched to your budget",
];

// Section 02 — the visual centre of the page and its only conversion
// point. Everything above it exists to make this band credible; everything
// below it exists to send the visitor back up to it.
export default function OfferSection() {
  return (
    <section id="offer" className="scroll-mt-24">
      <Container>
        <Reveal y={28}>
          <div className="relative overflow-hidden rounded-[28px] border border-gold-300/30 bg-gradient-to-b from-gold-500/[0.14] via-purple-800/30 to-ivory/[0.03] p-6 shadow-[0_0_90px_-30px_rgba(216,161,58,0.45)] sm:rounded-[36px] sm:p-10 lg:p-14">
            <div className="grain" />

            <div className="relative">
              <div className="flex items-center justify-center gap-4">
                <span aria-hidden="true" className="h-px w-8 bg-gold-300/40 sm:w-16" />
                <p className="text-center text-[0.65rem] font-semibold tracking-[0.2em] text-gold-300 uppercase sm:text-xs">
                  Limited-time Dubai property offer
                </p>
                <span aria-hidden="true" className="h-px w-8 bg-gold-300/40 sm:w-16" />
              </div>

              <h2 className="font-display mx-auto mt-5 max-w-2xl text-center text-[2rem] leading-[1.1] font-medium tracking-tight text-ivory sm:text-[2.75rem]">
                Secure this exclusive property opportunity.
              </h2>

              {OFFER.offerEndsAt && <Countdown endsAt={OFFER.offerEndsAt} />}

              <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
                <div>
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {OFFER_HIGHLIGHTS.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-ivory/10 bg-ink/35 p-5 backdrop-blur-sm"
                      >
                        <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-ivory/45 uppercase">
                          {item.label}
                        </dt>
                        <dd className="font-display mt-2 text-xl leading-tight font-medium text-gold-300 sm:text-2xl">
                          {item.value}
                        </dd>
                        <dd className="mt-1.5 text-xs leading-relaxed text-ivory/55">
                          {item.note}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 text-base leading-relaxed text-ivory/75">
                    Limited availability. Submit your details to receive the
                    current price, payment plan and availability.
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          strokeWidth={2.4}
                          className="mt-0.5 shrink-0 text-gold-300"
                        />
                        <span className="text-sm leading-relaxed text-ivory/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-gold-300/20 bg-ink/35 px-5 py-4 backdrop-blur-sm">
                    <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-gold-300" />
                    <p className="text-sm font-medium text-gold-100">
                      Limited units available
                    </p>
                    <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-ivory/25 sm:block" />
                    <p className="text-sm text-ivory/60">
                      Current offer subject to availability
                    </p>
                  </div>
                </div>

                <LeadForm />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
