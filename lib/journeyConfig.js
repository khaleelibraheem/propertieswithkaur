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
    fill: "bg-purple-600",
    text: "text-purple-700",
    badge: "border-purple-600 bg-purple-600",
    check: "text-ivory",
  },
  invest: {
    fill: "bg-purple-600",
    text: "text-purple-700",
    badge: "border-purple-600 bg-purple-600",
    check: "text-ivory",
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

export function getJourneySteps(type) {
  const journey = JOURNEYS[type];
  if (!journey) return [];
  return [...journey.steps, CONTACT_STEP];
}
