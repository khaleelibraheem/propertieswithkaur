import { MessageCircle, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Contact | Properties with Kaur",
  description: "Book a private consultation with Properties with Kaur.",
};

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp", value: "Fastest way to reach us, usually within the hour", href: "https://wa.me/" },
  { icon: Phone, label: "Call", value: "Direct line to the advisory team", href: "tel:" },
  { icon: Mail, label: "Email", value: "Best for documents and longer questions", href: "mailto:hello@propertieswithkaur.com" },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Book a private consultation."
          description="Share a few details and our team will follow up to understand your goals, budget and timeline before recommending anything."
          accent="terracotta"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-ink/10 bg-ivory-deep p-2">
            {CHANNELS.map((channel, i) => (
              <a
                key={channel.label}
                href={channel.href}
                className={`group flex items-center gap-4 rounded-2xl px-5 py-5 transition-colors duration-200 hover:bg-white ${
                  i > 0 ? "border-t border-ink/8" : ""
                }`}
              >
                <channel.icon size={20} strokeWidth={1.6} className="shrink-0 text-gold-700" />
                <div className="flex-1">
                  <p className="font-display text-base font-medium text-ink">{channel.label}</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{channel.value}</p>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
