import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

const COLUMNS = [
  {
    title: "Journey",
    links: [
      { href: "/buy", label: "Buy" },
      { href: "/invest", label: "Invest" },
      { href: "/sell", label: "Sell" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/opportunities", label: "Opportunities" },
      { href: "/about", label: "About" },
      { href: "/insights", label: "Insights" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-dark.png"
              alt="Properties with Kaur"
              width={933}
              height={636}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Real estate should feel personal. We understand the person
              first, then the property they need.
            </p>
            <Button href="/journey" variant="gold" size="sm" className="mt-6">
              Start my property journey
            </Button>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-[0.2em] text-ivory/40 uppercase">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/75 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-ivory/40 uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              <li>
                <Link href="/contact" className="hover:text-gold-300">
                  Book a private consultation
                </Link>
              </li>
              <li>
                <a href="https://wa.me/" className="hover:text-gold-300">
                  Continue on WhatsApp
                </a>
              </li>
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-300/80 uppercase">
            Property with purpose &middot; Advice with strategy &middot;
            Properties with Kaur
          </p>
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} Properties with Kaur Real Estate L.L.C.
            Founded by Simran Kaur.
          </p>
        </div>
      </Container>
    </footer>
  );
}
