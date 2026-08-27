import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Insights | Properties with Kaur",
  description: "Market intelligence and advisory perspective from Properties with Kaur.",
};

const FEATURED = {
  tag: "Market",
  title: "Reading the market beyond the headline number",
  description:
    "Average price growth rarely tells the whole story. What actually moves value is usually specific to a building, a floor, or a single planning decision a few streets over. We're writing up the framework we actually use to separate signal from noise.",
};

const SECONDARY = [
  {
    tag: "Location",
    title: "Choosing a community for the next decade",
    description:
      "Weighing infrastructure timelines, supply pipeline and lifestyle fit against today's asking prices.",
  },
  {
    tag: "Finance",
    title: "Structuring a purchase properly",
    description:
      "The real trade-offs between cash, financing and developer payment plans, matched to strategy.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Written from inside the work."
              description="Longer-form advisory pieces are still being written. Here's what's currently on the desk."
              accent="emerald"
            />
          </div>

          <Reveal className="mt-14 border-t border-ivory/10 pt-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-500 uppercase">
              {FEATURED.tag}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl leading-snug font-medium text-ivory sm:text-3xl">
              {FEATURED.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ivory/70">
              {FEATURED.description}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 border-t border-ivory/10 pt-10 sm:grid-cols-2">
            {SECONDARY.map((topic, i) => (
              <Reveal key={topic.title} delay={i * 0.08}>
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-500 uppercase">
                  {topic.tag}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium text-ivory">{topic.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{topic.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA
        title="Have a question an article won't answer yet?"
        description="Skip the wait and ask directly. Most of what ends up written here started as something a client asked first."
        primaryLabel="Ask us directly"
        primaryHref="/contact"
        secondaryLabel="Start my property journey"
        secondaryHref="/journey"
      />
    </>
  );
}
