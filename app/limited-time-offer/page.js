import OfferHeader from "@/components/offer/OfferHeader";
import Expertise from "@/components/offer/Expertise";
import OfferSection from "@/components/offer/OfferSection";
import ProjectDetails from "@/components/offer/ProjectDetails";
import WhyKaur from "@/components/offer/WhyKaur";
import OfferFooter from "@/components/offer/OfferFooter";
import StickyCta from "@/components/offer/StickyCta";

export const metadata = {
  title: "Limited-Time Dubai Property Offer | Properties with Kaur",
  description:
    "Secure an exclusive Dubai property opportunity. Request the current price, payment plan and availability from Properties with Kaur.",
  alternates: { canonical: "/limited-time-offer" },
  openGraph: {
    title: "Limited-Time Dubai Property Offer | Properties with Kaur",
    description:
      "Request the current price, payment plan and availability on this Dubai release.",
    url: "/limited-time-offer",
    type: "website",
  },
};

export default function LimitedTimeOfferPage() {
  return (
    <>
      <OfferHeader />
      {/* Bottom padding clears the mobile sticky CTA bar, which is hidden
          from lg upwards where the sticky header already covers it. */}
      <main className="flex-1 pb-20 lg:pb-0">
        <Expertise />
        <OfferSection />
        <ProjectDetails />
        <WhyKaur />
      </main>
      <OfferFooter />
      <StickyCta />
    </>
  );
}
