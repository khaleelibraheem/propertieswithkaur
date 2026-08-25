import { MessageCircle, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import GradientWash from "@/components/ui/GradientWash";

export const metadata = {
  title: "Contact | Properties with Kaur",
  description: "Book a private consultation with Properties with Kaur.",
};

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp", value: "Continue the conversation instantly", href: "https://wa.me/", tone: "bg-emerald-100 text-emerald-700" },
  { icon: Phone, label: "Call", value: "Speak with our advisory team directly", href: "tel:", tone: "bg-terracotta-100 text-terracotta-700" },
  { icon: Mail, label: "Email", value: "For detailed enquiries and documents", href: "mailto:hello@propertieswithkaur.com", tone: "bg-gold-100 text-gold-700" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <GradientWash />
      <Container className="relative">
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

          <Reveal delay={0.1} className="space-y-4">
            {CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-ivory-deep p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ink/25"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${channel.tone}`}>
                  <channel.icon size={19} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="font-display text-base font-medium text-ink">{channel.label}</p>
                  <p className="mt-1 text-sm text-ink-soft">{channel.value}</p>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
