import { LineChart, MapPinned, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GradientWash from "@/components/ui/GradientWash";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Insights | Properties with Kaur",
  description: "Market intelligence and advisory perspective from Properties with Kaur.",
};

const TOPICS = [
  {
    icon: LineChart,
    tone: "emerald",
    title: "Reading the market beyond the headline number",
    description:
      "Why average price growth rarely tells the whole story, and what actually moves value in a specific building or community.",
  },
  {
    icon: MapPinned,
    tone: "terracotta",
    title: "Choosing a community for the next decade",
    description:
      "A framework for weighing infrastructure timelines, supply pipeline and lifestyle fit against today's asking prices.",
  },
  {
    icon: Wallet,
    tone: "gold",
    title: "Payment plans, mortgages and structuring a purchase",
    description:
      "The trade-offs between cash, financing and developer payment plans, and how to match structure to strategy.",
  },
];

const tones = {
  gold: "bg-gold-100 text-gold-700",
  terracotta: "bg-terracotta-100 text-terracotta-700",
  emerald: "bg-emerald-100 text-emerald-700",
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <GradientWash />
        <Container className="relative">
          <SectionHeading
            eyebrow="Insights"
            title="Perspective, not headlines."
            description="Longer-form advisory pieces from the Properties with Kaur team are on the way. In the meantime, here is what we're currently thinking about."
            accent="emerald"
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((topic, i) => (
              <Reveal key={topic.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-7">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tones[topic.tone]}`}>
                    <topic.icon size={20} strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium text-ink">{topic.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {topic.description}
                  </p>
                  <span className="mt-6 w-fit rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold tracking-wide text-purple-800 uppercase">
                    In progress
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
