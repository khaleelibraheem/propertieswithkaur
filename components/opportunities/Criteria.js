"use client";

import { MapPin, TrendingUp, Wallet, ShieldCheck } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";
import Reveal from "../ui/Reveal";

const CRITERIA = [
  {
    icon: MapPin,
    tone: "terracotta",
    title: "Strategic location",
    description: "Proximity to what actually drives demand, not just a map pin near a landmark.",
  },
  {
    icon: TrendingUp,
    tone: "emerald",
    title: "Future infrastructure",
    description: "Documented, funded upgrades to an area, not speculation dressed up as insight.",
  },
  {
    icon: Wallet,
    tone: "gold",
    title: "Entry pricing advantage",
    description: "A price or payment structure that genuinely compares well to similar stock.",
  },
  {
    icon: ShieldCheck,
    tone: "purple",
    title: "Developer and supply",
    description: "Track record, build quality and how limited the comparable supply really is.",
  },
];

export default function Criteria() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CRITERIA.map((criterion, i) => (
        <Reveal key={criterion.title} delay={i * 0.08}>
          <FeatureCard {...criterion} />
        </Reveal>
      ))}
    </div>
  );
}
