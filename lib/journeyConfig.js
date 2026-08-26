// Central configuration for the Buy, Invest and Sell conversational journeys.
// Keeping every question here means the flow can be extended without
// touching the step-rendering components.

export const INTENT_STEP = {
  key: "intent",
  question: "What brings you here today?",
  helper: "Not sure yet? Let us guide you.",
  type: "single",
  options: [
    {
      value: "buy",
      label: "I want to buy",
      description: "For a home, lifestyle or future use.",
    },
    {
      value: "invest",
      label: "I want to invest",
      description: "For returns, appreciation or portfolio growth.",
    },
    {
      value: "sell",
      label: "I want to sell",
      description: "For valuation, market advice and the right exit strategy.",
    },
  ],
};

// Appended to every multiple-choice step so a client who isn't sure yet
// always has a way forward instead of being forced to guess.
const NOT_DECIDED_OPTION = { value: "not-decided", label: "Not decided yet" };

// Carries each journey's identity color (already used for its intent-screen
// icon) through the rest of that flow's UI chrome — progress bar and
// selected-card badge — so gold stays the universal action color while each
// path reads as visually distinct. Purple-600 is dark, so its badge needs a
// light checkmark instead of the ink used on the lighter terracotta/emerald.
export const JOURNEY_TONES = {
  buy: {
    fill: "bg-terracotta-500",
    text: "text-terracotta-700",
    badge: "border-terracotta-500 bg-terracotta-500",
    check: "text-ink",
  },
  invest: {
    fill: "bg-emerald-500",
    text: "text-emerald-700",
    badge: "border-emerald-500 bg-emerald-500",
    check: "text-ink",
  },
  sell: {
    fill: "bg-purple-600",
    text: "text-purple-700",
    badge: "border-purple-600 bg-purple-600",
    check: "text-ivory",
  },
};

const budgetOptions = [
  { value: "under-1m", label: "Under AED 1M" },
  { value: "1m-2m", label: "AED 1M to 2M" },
  { value: "2m-5m", label: "AED 2M to 5M" },
  { value: "5m-10m", label: "AED 5M to 10M" },
  { value: "10m-25m", label: "AED 10M to 25M" },
  { value: "25m-plus", label: "AED 25M+" },
  {
    value: "custom",
    label: "Enter my own budget",
    reveal: { key: "customBudget", placeholder: "e.g. AED 7,500,000" },
  },
  NOT_DECIDED_OPTION,
];

export const JOURNEYS = {
  buy: {
    label: "Buy",
    intro: {
      eyebrow: "The buyer journey",
      title: "Let's find the right home for you.",
      description:
        "A few short questions so we understand what matters before we recommend anything.",
    },
    steps: [
      {
        key: "purpose",
        question: "Is this property mainly for you or as an investment?",
        type: "single",
        options: [
          { value: "myself", label: "For myself or my family" },
          { value: "investment", label: "For investment" },
          { value: "both", label: "A bit of both" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "propertyType",
        question: "What kind of home are you looking for?",
        type: "single",
        options: [
          { value: "apartment", label: "Apartment" },
          { value: "townhouse", label: "Townhouse" },
          { value: "villa", label: "Villa" },
          { value: "penthouse", label: "Penthouse" },
          { value: "exceptional", label: "Something exceptional" },
          { value: "open", label: "I'm open to recommendations" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "budget",
        question: "What budget feels comfortable for you?",
        type: "single",
        options: budgetOptions,
      },
      {
        key: "priorities",
        question: "What matters most in your next home?",
        helper: "Choose up to three.",
        type: "multi",
        maxSelect: 3,
        options: [
          { value: "location", label: "Location" },
          { value: "family-community", label: "Family community" },
          { value: "privacy", label: "Privacy" },
          { value: "space", label: "Space" },
          { value: "schools", label: "Schools nearby" },
          { value: "waterfront", label: "Waterfront" },
          { value: "beach", label: "Beach access" },
          { value: "golf", label: "Golf community" },
          { value: "finishes", label: "Luxury finishes" },
          { value: "future-value", label: "Strong future value" },
          { value: "work", label: "Close to work" },
          { value: "lifestyle", label: "Lifestyle and amenities" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "bedrooms",
        question: "How many bedrooms are you considering?",
        type: "single",
        options: [
          { value: "studio", label: "Studio" },
          { value: "1", label: "1 bedroom" },
          { value: "2", label: "2 bedrooms" },
          { value: "3", label: "3 bedrooms" },
          { value: "4", label: "4 bedrooms" },
          { value: "5plus", label: "5 or more" },
          { value: "flexible", label: "Flexible" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "timeline",
        question: "When would you ideally like to move?",
        type: "single",
        options: [
          { value: "now", label: "Immediately" },
          { value: "3m", label: "Within 3 months" },
          { value: "6m", label: "Within 6 months" },
          { value: "12m", label: "Within 12 months" },
          { value: "none", label: "No fixed timeline" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "purchaseMethod",
        question: "How are you planning to purchase?",
        type: "single",
        options: [
          { value: "cash", label: "Cash" },
          { value: "mortgage", label: "Mortgage" },
          { value: "payment-plan", label: "Developer payment plan" },
          { value: "combination", label: "Combination" },
          { value: "advice", label: "I would like advice" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "area",
        question: "Do you already have an area in mind?",
        type: "single",
        options: [
          {
            value: "yes",
            label: "Yes",
            reveal: { key: "areaDetail", placeholder: "Tell us the community or building" },
          },
          { value: "no", label: "No, recommend the right area for me" },
          NOT_DECIDED_OPTION,
        ],
      },
    ],
  },

  invest: {
    label: "Invest",
    intro: {
      eyebrow: "The investor journey",
      title: "Let's define the right strategy for you.",
      description:
        "We start with your financial objective, not with a list of properties.",
    },
    steps: [
      {
        key: "goal",
        question: "What do you want your property investment to achieve?",
        type: "single",
        options: [
          { value: "rental-income", label: "Rental income", description: "Consistent income" },
          { value: "capital-growth", label: "Capital growth", description: "Increase property value over time" },
          { value: "short-term", label: "Short-term opportunity", description: "Enter and exit strategically" },
          { value: "long-term-wealth", label: "Long-term wealth", description: "Build or expand a portfolio" },
          { value: "balanced", label: "Balanced returns", description: "Income and appreciation" },
          { value: "not-sure", label: "I'm not sure", description: "Recommend a strategy" },
        ],
      },
      {
        key: "amount",
        question: "What investment amount are you considering?",
        type: "single",
        options: budgetOptions.map((o) =>
          o.value === "custom" ? { ...o, label: "Enter exact budget" } : o
        ),
      },
      {
        key: "holdPeriod",
        question: "How long would you ideally like to keep the property?",
        type: "single",
        options: [
          { value: "under-2", label: "Less than 2 years" },
          { value: "2-3", label: "2 to 3 years" },
          { value: "3-5", label: "3 to 5 years" },
          { value: "5plus", label: "5+ years" },
          { value: "flexible", label: "I'm flexible" },
        ],
      },
      {
        key: "investStyle",
        question: "Which best describes the way you like to invest?",
        type: "single",
        options: [
          { value: "stability", label: "Stability first" },
          { value: "balanced", label: "Balanced" },
          { value: "growth", label: "Growth focused" },
          { value: "opportunity", label: "Opportunity focused" },
          { value: "advice", label: "I want advice" },
        ],
      },
      {
        key: "priorities",
        question: "What matters most to you?",
        helper: "Choose up to three.",
        type: "multi",
        maxSelect: 3,
        options: [
          { value: "roi", label: "Strong ROI" },
          { value: "yield", label: "Rental yield" },
          { value: "appreciation", label: "Capital appreciation" },
          { value: "entry-price", label: "Low entry price" },
          { value: "payment-plan", label: "Flexible payment plan" },
          { value: "developer", label: "Reputable developer" },
          { value: "location", label: "Prime location" },
          { value: "waterfront", label: "Waterfront" },
          { value: "branded", label: "Luxury or branded property" },
          { value: "growth-location", label: "High-growth location" },
          { value: "ready", label: "Ready property" },
          { value: "off-plan", label: "Off-plan opportunity" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "structure",
        question: "How would you prefer to structure the purchase?",
        type: "single",
        options: [
          { value: "cash", label: "Full cash" },
          { value: "payment-plan", label: "Payment plan" },
          { value: "mortgage", label: "Mortgage" },
          { value: "combination", label: "Combination" },
          { value: "advice", label: "I need advice" },
        ],
      },
      {
        key: "timing",
        question: "When are you realistically looking to invest?",
        type: "single",
        options: [
          { value: "now", label: "Now" },
          { value: "30d", label: "Within 30 days" },
          { value: "3m", label: "Within 3 months" },
          { value: "6m", label: "Within 6 months" },
          { value: "researching", label: "I'm currently researching" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "experience",
        question: "Is this your first property investment in Dubai?",
        type: "single",
        options: [
          { value: "first", label: "Yes" },
          { value: "own-dubai", label: "No, I already own property in Dubai" },
          { value: "own-international", label: "I own property internationally" },
          { value: "portfolio", label: "I have an existing portfolio" },
        ],
      },
    ],
  },

  sell: {
    label: "Sell",
    intro: {
      eyebrow: "The seller journey",
      title: "Let's understand your property first.",
      description:
        "A clear picture of your property helps us give you an honest read on the market.",
    },
    steps: [
      {
        key: "propertyType",
        question: "What type of property do you own?",
        type: "single",
        options: [
          { value: "apartment", label: "Apartment" },
          { value: "townhouse", label: "Townhouse" },
          { value: "villa", label: "Villa" },
          { value: "penthouse", label: "Penthouse" },
          { value: "land", label: "Land" },
          { value: "commercial", label: "Commercial" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "location",
        question: "Where is the property located?",
        type: "text",
        placeholder: "Community or building",
      },
      {
        key: "bedrooms",
        question: "How many bedrooms?",
        type: "single",
        options: [
          { value: "studio", label: "Studio" },
          { value: "1", label: "1 bedroom" },
          { value: "2", label: "2 bedrooms" },
          { value: "3", label: "3 bedrooms" },
          { value: "4", label: "4 bedrooms" },
          { value: "5plus", label: "5 or more" },
          NOT_DECIDED_OPTION,
        ],
      },
      {
        key: "size",
        question: "What is the approximate size?",
        type: "text",
        placeholder: "e.g. 1,450 sq. ft.",
      },
      {
        key: "occupancy",
        question: "Is the property currently:",
        type: "single",
        options: [
          { value: "vacant", label: "Vacant" },
          { value: "owner-occupied", label: "Owner occupied" },
          { value: "tenanted", label: "Tenanted" },
        ],
      },
      {
        key: "helpWith",
        question: "What would you like help with?",
        type: "single",
        options: [
          { value: "market-value", label: "Understanding today's market value" },
          { value: "asap", label: "Selling as soon as possible" },
          { value: "best-price", label: "Achieving the best possible price" },
          { value: "timing", label: "Deciding whether now is the right time to sell" },
          { value: "compare", label: "Comparing selling versus holding" },
          { value: "advice", label: "I need general advice" },
        ],
      },
      {
        key: "timeline",
        question: "How soon are you considering selling?",
        type: "single",
        options: [
          { value: "now", label: "Immediately" },
          { value: "1m", label: "Within 1 month" },
          { value: "3m", label: "Within 3 months" },
          { value: "6m", label: "Within 6 months" },
          { value: "exploring", label: "I'm only exploring" },
        ],
      },
    ],
  },
};

export const CONTACT_STEP = {
  key: "contact",
  type: "form",
  question: "Almost there.",
  description: "Where should we send your personalised property recommendations?",
  fields: [
    { key: "firstName", label: "First name", type: "text", required: true },
    { key: "lastName", label: "Last name", type: "text", required: true },
    { key: "mobile", label: "Mobile / WhatsApp", type: "tel", required: true },
    { key: "email", label: "Email", type: "email", required: true },
    { key: "country", label: "Country of residence", type: "text", required: true },
  ],
};

export const CONTACT_PREFERENCE_STEP = {
  key: "contactPreference",
  question: "How would you prefer us to contact you?",
  type: "single",
  options: [
    { value: "whatsapp", label: "WhatsApp" },
    { value: "call", label: "Call" },
    { value: "email", label: "Email" },
  ],
};

export function getJourneySteps(type) {
  const journey = JOURNEYS[type];
  if (!journey) return [];
  return [...journey.steps, CONTACT_PREFERENCE_STEP, CONTACT_STEP];
}
