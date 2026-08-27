import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import GradientWash from "@/components/ui/GradientWash";
import FounderMark from "@/components/ui/FounderMark";
import WhyPWK from "@/components/home/WhyPWK";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "About | Properties with Kaur",
  description: "Understand the person first. Then understand the property they need.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <GradientWash variant="dark" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="mx-auto w-full max-w-sm">
              <FounderMark />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
                About Properties with Kaur
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.1] font-medium tracking-tight text-ivory sm:text-5xl">
                Real estate should feel personal.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/70">
                Properties with Kaur was built around a simple idea: get to
                know the person before recommending a property. That
                usually means a longer first conversation than clients
                expect, and fewer options presented once it&apos;s over.
              </p>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-ivory/70">
                Every enquiry is reviewed personally by the founder before
                anyone hears back. It keeps the advice accountable to one
                person, and the relationship worth returning to.
              </p>

              <blockquote className="mt-8 border-l-4 border-gold-500 pl-5 font-display text-2xl text-ivory">
                &ldquo;If my clients grow, I grow.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-ivory/45">
                Simran Kaur, Founder, Properties with Kaur Real Estate L.L.C.
              </p>

              <Button href="/journey" variant="gold" className="mt-7" icon>
                Start my property journey
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <WhyPWK />
      <FinalCTA
        title="Want to talk it through with Simran directly?"
        description="No call centre, no handoff to whoever's free. Every conversation starts with the person whose name is on the door."
        primaryLabel="Book a private consultation"
        primaryHref="/contact"
        secondaryLabel="Start my property journey"
        secondaryHref="/journey"
      />
    </>
  );
}
