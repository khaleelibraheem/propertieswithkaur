import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function AboutPreview() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-[28px] border border-ink/10 bg-ivory-deep">
            <span className="font-display text-8xl font-medium text-gold-600">SK</span>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-gold-700 uppercase">
              About Properties with Kaur
            </p>
            <h2 className="font-display text-4xl leading-[1.1] font-medium tracking-tight text-ink sm:text-5xl">
              Real estate should feel personal.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Properties with Kaur communicates a different approach.
              Understand the person first. Then understand the property
              they need.
            </p>
            <blockquote className="mt-8 border-l-4 border-gold-500 pl-5 font-display text-2xl text-ink">
              &ldquo;If my clients grow, I grow.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-ink-faint">
              Simran Kaur, Founder, Properties with Kaur Real Estate L.L.C.
            </p>
            <Button href="/about" variant="outline" className="mt-7" icon>
              More about our approach
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
