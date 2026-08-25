import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import GradientWash from "@/components/ui/GradientWash";
import Criteria from "@/components/opportunities/Criteria";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Opportunities | Properties with Kaur",
  description: "How Properties with Kaur identifies opportunities worth a client's attention.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <GradientWash />
        <Container className="relative">
          <SectionHeading
            eyebrow="Curated opportunities"
            title="Opportunities worth looking at."
            description="We don't publish a live catalogue. When something is genuinely worth your attention, it comes to you through a conversation, tailored to your goals, not a listing feed. Here is what we actually weigh before we bring anything to a client."
            accent="terracotta"
          />

          <Criteria />

          <Reveal delay={0.2} className="mt-14 rounded-3xl border border-ink/10 bg-ivory-deep p-8 sm:p-10">
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
              Tell us what you&apos;re trying to achieve, and we&apos;ll match
              it against what&apos;s genuinely available, not just what
              happens to be listed this week.
            </p>
            <Button href="/journey" variant="gold" className="mt-6" icon>
              Start my property journey
            </Button>
          </Reveal>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
