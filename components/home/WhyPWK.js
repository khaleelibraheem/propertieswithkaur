import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import Reveal from "../ui/Reveal";

const FEATURES = [
  {
    numeral: "I",
    tone: "terracotta",
    title: "Personal strategy",
    description: "Recommendations built around what you actually need, one client at a time.",
  },
  {
    numeral: "II",
    tone: "emerald",
    title: "Market intelligence",
    description: "Understanding value beyond marketing material, so decisions hold up over time.",
  },
  {
    numeral: "III",
    tone: "gold",
    title: "Curated opportunities",
    description: "Fewer options, each one genuinely suited to what you're trying to achieve.",
  },
  {
    numeral: "IV",
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
