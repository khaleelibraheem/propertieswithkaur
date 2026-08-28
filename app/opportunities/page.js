import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Criteria from "@/components/opportunities/Criteria";

export const metadata = {
  title: "Opportunities | Properties with Kaur",
  description: "How Properties with Kaur identifies opportunities worth a client's attention.",
};

export default function OpportunitiesPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Curated opportunities"
          title="Opportunities worth looking at."
          description="There's no live catalogue to browse. Something reaches you only after it's been checked against your actual goals, in a conversation. Here is what actually gets weighed before anything is brought to a client."
          accent="terracotta"
        />

        <Criteria />

        <Reveal delay={0.2} className="mt-14 rounded-3xl border border-ivory/10 bg-ivory/[0.04] p-8 backdrop-blur-sm sm:p-10">
          <p className="max-w-2xl text-lg leading-relaxed text-ivory/70">
            Have something specific in mind already? Tell us about it and
            we&apos;ll give you a straight answer on whether it holds up.
          </p>
          <Button href="/journey" variant="gold" className="mt-6" icon>
            Start my property journey
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
