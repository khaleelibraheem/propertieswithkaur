import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import GradientWash from "@/components/ui/GradientWash";
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
        <GradientWash />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-[28px] border border-ink/10 bg-ivory-deep">
              <span className="font-display text-8xl font-medium text-gold-600">SK</span>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-700 uppercase">
                About Properties with Kaur
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.1] font-medium tracking-tight text-ink sm:text-5xl">
                Real estate should feel personal.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
                Properties with Kaur communicates a different approach.
                Understand the person first. Then understand the property
                they need. Not which project happens to be launching this
                week, but what genuinely fits a client&apos;s goals,
                timeline and lifestyle.
              </p>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
                Every enquiry begins with a conversation, not a listing.
                That is what keeps the advice honest, and the relationship
                worth returning to.
              </p>

              <blockquote className="mt-8 border-l-4 border-gold-500 pl-5 font-display text-2xl text-ink">
                &ldquo;If my clients grow, I grow.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-ink-faint">
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
      <FinalCTA />
    </>
  );
}
