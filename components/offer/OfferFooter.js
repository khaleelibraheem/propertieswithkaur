import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { EMAIL_ADDRESS, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, buildOfferEnquiryHref } from "@/lib/contact";
import { OFFER, OFFER_DISCLAIMER } from "@/lib/limitedOffer";

export default function OfferFooter() {
  return (
    <footer className="border-t border-ivory/10">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/logo-dark.png"
              alt="Properties with Kaur"
              width={917}
              height={461}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm text-ivory/55">
              Dubai, United Arab Emirates
            </p>
          </div>

          <ul className="space-y-2.5 text-sm text-ivory/70">
            <li>
              <a
                href={buildOfferEnquiryHref(OFFER.project)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-300"
              >
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={PHONE_HREF} className="transition-colors hover:text-gold-300">
                Call {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="transition-colors hover:text-gold-300">
                {EMAIL_ADDRESS}
              </a>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-gold-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ivory/40">
          {OFFER_DISCLAIMER}
        </p>
        <p className="mt-4 text-xs text-ivory/40">
          &copy; {new Date().getFullYear()} Properties with Kaur Real Estate
          L.L.C. Founded by Simran Kaur.
        </p>
      </Container>
    </footer>
  );
}
