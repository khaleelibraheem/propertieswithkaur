"use client";

import { Target, LineChart, Gem, Handshake } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import Reveal from "../ui/Reveal";

const FEATURES = [
  {
    icon: Target,
    tone: "terracotta",
    title: "Personal strategy",
    description: "Recommendations built around what you actually need, one client at a time.",
  },
  {
    icon: LineChart,
    tone: "emerald",
    title: "Market intelligence",
    description: "Understanding value beyond marketing material, so decisions hold up over time.",
  },
  {
    icon: Gem,
    tone: "gold",
    title: "Curated opportunities",
    description: "Fewer options, each one genuinely suited to what you're trying to achieve.",
  },
  {
    icon: Handshake,
    tone: "purple",
    title: "Long-term relationship",
    description: "Advice that continues well beyond a single transaction.",
  },
];

export default function WhyPWK() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Properties with Kaur"
            title="A different kind of advisory."
            accent="terracotta"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
