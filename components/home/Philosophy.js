import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
              Our philosophy
            </p>
            <h2 className="font-display text-4xl leading-[1.1] font-medium tracking-tight text-ivory sm:text-5xl lg:text-[3.2rem]">
              We don&apos;t start with properties.
              <br />
              We start with you.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end">
            <p className="text-lg leading-relaxed text-ivory/65">
              Your goals, timeline, lifestyle and financial expectations
              determine what makes sense, not whichever project happens to
              be launching this week. Every recommendation begins with a
              conversation, not a catalogue.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
