import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Privacy Policy | Properties with Kaur",
  description:
    "How Properties with Kaur collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
            Properties with Kaur
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] font-medium tracking-tight text-ivory sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ivory/45">Last updated: 11 September 2026</p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-ivory/70">
            <p>
              Properties With Kaur respects your privacy and is committed to
              handling your personal information responsibly.
            </p>

            <p>
              When you contact us, submit an enquiry, complete a lead form, or
              communicate with us through our website, Facebook, Instagram,
              WhatsApp or other channels, we may collect information such as
              your name, email address, phone number and details relating to
              your property or investment requirements.
            </p>

            <p>
              We use this information to understand your requirements,
              communicate with you, provide relevant real-estate
              opportunities, arrange consultations or viewings, and offer
              property investment guidance based on the information you
              provide.
            </p>

            <p>
              We do not sell your personal information. Your information may
              only be shared where reasonably necessary to assist with your
              property enquiry, such as with relevant developers, property
              owners, service providers or business partners, and where
              appropriate with your knowledge or consent.
            </p>

            <p>
              Information submitted through Facebook or Instagram lead forms
              may also be processed by Meta in accordance with Meta&rsquo;s own
              privacy policies.
            </p>

            <p>
              We take reasonable measures to protect the personal information
              provided to us and retain it only for as long as reasonably
              necessary for our business, communication and legal
              requirements.
            </p>

            <p>
              You may contact us at any time to request access to, correction
              of, or deletion of personal information you have provided to
              us, subject to applicable requirements.
            </p>

            <div>
              <p className="font-semibold text-ivory">
                For privacy-related enquiries, please contact:
              </p>
              <p className="mt-3">Properties With Kaur</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:propertieswithkaur@gmail.com"
                  className="text-gold-300 hover:text-gold-200"
                >
                  propertieswithkaur@gmail.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://propertieswithkaur.com"
                  className="text-gold-300 hover:text-gold-200"
                >
                  propertieswithkaur.com
                </a>
              </p>
            </div>

            <p>
              We may update this Privacy Policy periodically. Any changes will
              be published on this page.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
