import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page not found | Properties with Kaur",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center py-20">
      <Container size="narrow" className="text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
          404
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[1.1] font-medium tracking-tight text-ivory sm:text-5xl">
          This page didn&apos;t make the cut.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ivory/70">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
          Let&apos;s get you back to somewhere useful.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="gold" icon>
            Back to home
          </Button>
          <Button href="/journey" variant="outline">
            Start my property journey
          </Button>
        </div>
      </Container>
    </section>
  );
}
