"use client";

import Reveal from "../ui/Reveal";

const CRITERIA = [
  {
    number: "01",
    title: "Strategic location",
    description: "Proximity to what actually drives demand rather than a map pin near a landmark.",
  },
  {
    number: "02",
    title: "Future infrastructure",
    description: "Documented, funded upgrades to an area. Speculation doesn't count.",
  },
  {
    number: "03",
    title: "Entry pricing advantage",
    description: "A price or payment structure that genuinely compares well against similar stock.",
  },
  {
    number: "04",
    title: "Developer and supply",
    description: "Track record, build quality, and how limited the comparable supply really is.",
  },
];

export default function Criteria() {
  return (
    <div className="mt-14 border-t border-ivory/10">
      {CRITERIA.map((criterion, i) => (
        <Reveal key={criterion.number} delay={i * 0.06}>
          <div className="flex flex-col gap-2 border-b border-ivory/10 py-7 sm:flex-row sm:items-baseline sm:gap-8">
            <span className="font-display shrink-0 text-2xl text-gold-300/70 sm:w-16">
              {criterion.number}
            </span>
            <div>
              <h3 className="font-display text-xl font-medium text-ivory">{criterion.title}</h3>
              <p className="mt-1.5 max-w-xl text-[0.95rem] leading-relaxed text-ivory/70">
                {criterion.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
