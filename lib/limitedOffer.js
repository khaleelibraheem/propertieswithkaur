// Single source of truth for the /limited-time-offer paid-traffic landing
// page. Every fact that changes between campaigns lives here — the section
// components read from this file and never hard-code a property detail, so
// launching the next project is a one-file edit.
//
// TODO: replace every value marked PLACEHOLDER with the real, verified
// project data before pointing ad spend at this page.

export const OFFER = {
  // ——— Identity ———
  project: "[Project Name]", // PLACEHOLDER
  developer: "[Developer]", // PLACEHOLDER
  location: "[Community], Dubai", // PLACEHOLDER
  propertyType: "Apartments & Penthouses", // PLACEHOLDER

  // ——— Headline commercial terms ———
  startingPrice: "AED 1,850,000", // PLACEHOLDER
  paymentPlan: "60/40", // PLACEHOLDER
  handover: "Q4 2027", // PLACEHOLDER
  bedrooms: "1 – 3", // PLACEHOLDER
  areaFrom: "782", // PLACEHOLDER — sq. ft. from

  // Drives the countdown above the lead form. ISO 8601 with the Gulf
  // offset (+04:00) so the deadline is read in Dubai time wherever the
  // visitor happens to be. Set to null to hide the countdown entirely and
  // run the offer on the availability line alone.
  offerEndsAt: "2026-10-31T23:59:00+04:00", // PLACEHOLDER

  // Drop the developer's render into /public/images/ and point this at it
  // (e.g. "/images/offer-hero.jpg"). While it is null the project section
  // falls back to the generated skyline artwork, so the page never ships
  // with a broken image or an empty frame.
  heroImage: null, // PLACEHOLDER
  heroImageAlt: "", // Describe the render for screen readers once set
};

// The four tiles that carry the offer. Kept separate from OFFER so the
// wording of a tile can change without touching the underlying data.
export const OFFER_HIGHLIGHTS = [
  { label: "Starting from", value: OFFER.startingPrice, note: "Current launch pricing" },
  { label: "Payment plan", value: OFFER.paymentPlan, note: "Split across construction & handover" },
  { label: "Residences", value: `${OFFER.bedrooms} bedroom`, note: `From ${OFFER.areaFrom} sq. ft.` },
  { label: "Location", value: "Prime Dubai", note: OFFER.location },
];

// Section 03 — the specification table. Order is deliberate: what it is,
// who is building it, where it sits, then the money and the dates.
export const PROJECT_OVERVIEW = [
  { label: "Project", value: OFFER.project },
  { label: "Developer", value: OFFER.developer },
  { label: "Location", value: OFFER.location },
  { label: "Property type", value: OFFER.propertyType },
  { label: "Starting price", value: OFFER.startingPrice },
  { label: "Handover", value: OFFER.handover },
  { label: "Payment plan", value: OFFER.paymentPlan },
];

export const PROJECT_FEATURES = [
  {
    icon: "MapPin",
    title: "Prime Dubai location",
    description: "Positioned in an established community with proven rental demand.",
  },
  {
    icon: "Waves",
    title: "Resort-style amenities",
    description: "Pools, wellness and landscaped podium space designed for daily use.",
  },
  {
    icon: "Building2",
    title: "Premium residences",
    description: "Considered layouts and handover-ready finishes across every unit type.",
  },
  {
    icon: "Trees",
    title: "Lifestyle-focused community",
    description: "Retail, dining and open space within the development itself.",
  },
  {
    icon: "Route",
    title: "Excellent connectivity",
    description: "Direct access to Dubai's main arterial roads and transport links.",
  },
  {
    icon: "TrendingUp",
    title: "Investment opportunity",
    description: "Payment structure and entry pricing suited to yield and capital growth.",
  },
];

// TODO: replace with the actual verified drive times for the selected
// project — do not ship the placeholder minutes to a live campaign.
export const NEARBY = [
  { place: "Downtown Dubai", minutes: "15" }, // PLACEHOLDER
  { place: "Dubai International Airport", minutes: "20" }, // PLACEHOLDER
  { place: "Dubai Marina", minutes: "25" }, // PLACEHOLDER
  { place: "Burj Khalifa", minutes: "15" }, // PLACEHOLDER
];

// Section 01 — the credibility proof points.
export const EXPERIENCE_HIGHLIGHTS = [
  "Dubai real estate specialist",
  "Expertise across Dubai's key communities",
  "Personalised property & investment guidance",
  "End-to-end support from enquiry to completion",
];

// Section 04 — why work with Properties with Kaur.
export const VALUE_PROPS = [
  {
    numeral: "I",
    tone: "terracotta",
    title: "Personalised advice",
    description: "Property recommendations built around your individual requirements, not a stock list.",
  },
  {
    numeral: "II",
    tone: "emerald",
    title: "Dubai market knowledge",
    description: "Local understanding of communities, pricing and where the real opportunities sit.",
  },
  {
    numeral: "III",
    tone: "gold",
    title: "Curated opportunities",
    description: "Access to properties selected around your objectives, budget and timeline.",
  },
  {
    numeral: "IV",
    tone: "purple",
    title: "End-to-end support",
    description: "Guidance through every stage of the buying and investment process.",
  },
];

// Shown in the footer. Off-plan pricing and availability move constantly,
// so the page says so rather than implying the numbers above are fixed.
export const OFFER_DISCLAIMER =
  "Prices, payment plans, unit availability and handover dates are set by the developer and are subject to change without notice. All details are indicative and must be confirmed in writing before any reservation.";
