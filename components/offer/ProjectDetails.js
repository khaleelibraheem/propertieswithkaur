import Image from "next/image";
import { Building2, Clock, MapPin, Route, TrendingUp, Trees, Waves } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import SkylineArt from "./SkylineArt";
import { NEARBY, OFFER, PROJECT_FEATURES, PROJECT_OVERVIEW } from "@/lib/limitedOffer";

const ICONS = { MapPin, Waves, Building2, Trees, Route, TrendingUp };

// Section 03 — the detail a serious buyer scrolls down to check before
// they hand over a phone number.
export default function ProjectDetails() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The property"
            title="Discover your next property in Dubai."
            description="Full specification, pricing and payment terms — every figure confirmed in writing before you commit to anything."
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <Reveal className="relative overflow-hidden rounded-[28px] border border-ivory/10">
            <div className="relative aspect-[4/3] w-full">
              {OFFER.heroImage ? (
                <Image
                  src={OFFER.heroImage}
                  alt={OFFER.heroImageAlt || `${OFFER.project}, ${OFFER.location}`}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              ) : (
                <SkylineArt idPrefix="project" className="absolute inset-0 h-full w-full" />
              )}
              <div className="grain" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                  {OFFER.developer}
                </p>
                <p className="font-display mt-2 text-2xl font-medium text-ivory sm:text-3xl">
                  {OFFER.project}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ivory/65">
                  <MapPin size={14} strokeWidth={1.8} className="shrink-0" />
                  {OFFER.location}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-ivory/10 overflow-hidden rounded-3xl border border-ivory/10 bg-ivory/[0.04] backdrop-blur-sm">
              {PROJECT_OVERVIEW.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 px-6 py-4 sm:px-7"
                >
                  <dt className="text-[0.65rem] font-semibold tracking-[0.15em] text-ivory/45 uppercase">
                    {row.label}
                  </dt>
                  <dd className="font-display text-right text-base text-ivory sm:text-lg">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            return (
              <Reveal key={feature.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-6 backdrop-blur-sm">
                  <Icon size={20} strokeWidth={1.6} className="text-gold-300" />
                  <h3 className="font-display mt-4 text-lg font-medium text-ivory">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-ivory/45 uppercase">
            <Clock size={14} strokeWidth={1.8} />
            Drive times from the development
          </p>
          <div className="mt-5 grid gap-px overflow-hidden rounded-3xl border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {NEARBY.map((item) => (
              <div key={item.place} className="bg-ink/70 px-6 py-5 backdrop-blur-sm">
                <p className="font-display text-2xl font-medium text-gold-300">
                  {item.minutes}
                  <span className="ml-1 text-sm font-normal text-ivory/50">mins</span>
                </p>
                <p className="mt-1 text-sm text-ivory/70">{item.place}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
