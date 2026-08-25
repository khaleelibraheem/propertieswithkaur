import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import GradientWash from "../ui/GradientWash";

export default function FinalCTA({
  title = "What's the right property strategy for you?",
  description = "Answer a few short questions and our team will review your goals, budget and timeline before recommending anything.",
  primaryLabel = "Start my property journey",
  primaryHref = "/journey",
  secondaryLabel = "Book a private consultation",
  secondaryHref = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <GradientWash variant="dark" />
      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl leading-[1.15] font-medium tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ivory/65">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="gold" size="lg" icon>
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button
                href={secondaryHref}
                variant="outline"
                size="lg"
                className="!border-ivory/25 !text-ivory hover:!bg-ivory/5"
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
