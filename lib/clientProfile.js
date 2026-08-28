import { JOURNEYS } from "./journeyConfig";

const article = (word) => (/^[aeiou]/i.test(word || "") ? "an" : "a");
const Article = (word) => (article(word) === "an" ? "An" : "A");

// Turns the raw answer map into a short, natural recap the client sees on
// the final screen. Never exposes internal lead-scoring language.
export function buildSummaryLine(type, answers) {
  const journey = JOURNEYS[type];
  if (!journey) return "";

  const findLabel = (stepKey, value) => {
    const step = journey.steps.find((s) => s.key === stepKey);
    const option = step?.options?.find((o) => o.value === value);
    return option?.label;
  };

  if (type === "buy") {
    const bits = [
      findLabel("propertyType", answers.propertyType),
      answers.budget && (findLabel("budget", answers.budget) || answers.customBudget),
      findLabel("timeline", answers.timeline)?.toLowerCase(),
    ].filter(Boolean);
    return bits.length
      ? `Looking for ${article(bits[0])} ${bits.join(", ")}.`
      : "We've noted what you're looking for in your next home.";
  }

  if (type === "invest") {
    const bits = [
      findLabel("goal", answers.goal)?.toLowerCase(),
      answers.amount && (findLabel("amount", answers.amount) || answers.customBudget),
      findLabel("holdPeriod", answers.holdPeriod)?.toLowerCase(),
    ].filter(Boolean);
    return bits.length
      ? `Focused on ${bits.join(", ")}.`
      : "We've noted your investment objectives.";
  }

  if (type === "sell") {
    const bits = [
      findLabel("propertyType", answers.propertyType)?.toLowerCase(),
      answers.location,
      findLabel("helpWith", answers.helpWith)?.toLowerCase(),
    ].filter(Boolean);
    return bits.length
      ? `${Article(bits[0])} ${bits.join(", ")}.`
      : "We've noted the details of your property.";
  }

  return "";
}

// Keycap digit emoji (1-9), built from escapes since the combining
// variation-selector glyph is easy to lose when typed literally.
const NUMBER_EMOJI = Array.from(
  { length: 9 },
  (_, i) => `${i + 1}\u{FE0F}\u{20E3}`
);

const CONTACT_PREFERENCE_LABELS = {
  whatsapp: "WhatsApp",
  call: "Call",
  email: "Email",
};

function formatStepAnswer(step, answers) {
  if (step.type === "single") {
    const value = answers[step.key];
    const option = step.options?.find((o) => o.value === value);
    if (!option) return null;
    const revealValue = option.reveal && answers[option.reveal.key]?.trim();
    return revealValue ? `${option.label} (${revealValue})` : option.label;
  }
  if (step.type === "multi") {
    const values = answers[step.key] || [];
    if (!values.length) return null;
    return values
      .map((v) => step.options?.find((o) => o.value === v)?.label || v)
      .join(", ");
  }
  if (step.type === "text") {
    return answers[step.key]?.trim() || null;
  }
  return null;
}

// Builds the full question-by-question recap sent to the founder over
// WhatsApp once a client completes a journey — every answer they gave,
// laid out so it reads clearly on a phone screen.
export function buildWhatsappMessage(type, answers) {
  const journey = JOURNEYS[type];
  if (!journey) return "";

  const name = [answers.firstName, answers.lastName].filter(Boolean).join(" ");
  const preference = CONTACT_PREFERENCE_LABELS[answers.contactPreference];

  const lines = [`🏡 *New ${journey.label} Enquiry — Properties with Kaur*`, ""];

  lines.push("*Client details*");
  if (name) lines.push(`👤 ${name}`);
  if (answers.mobile) lines.push(`📱 ${answers.mobile}`);
  if (answers.email) lines.push(`📧 ${answers.email}`);
  if (answers.country) lines.push(`🌍 ${answers.country}`);
  if (preference) lines.push(`💬 Prefers: ${preference}`);

  const qa = journey.steps
    .map((step, i) => {
      const answer = formatStepAnswer(step, answers);
      if (!answer) return null;
      const marker = NUMBER_EMOJI[i] || `${i + 1}.`;
      return `${marker} ${step.question}\n→ ${answer}`;
    })
    .filter(Boolean);

  if (qa.length) {
    lines.push("", `*${journey.label} journey answers*`, "", qa.join("\n\n"));
  }

  return lines.join("\n");
}

// Mirrors the internal CRM-facing summary described in the blueprint.
// Rendered to no one in the UI — this is what would ship to the backend.
export function buildInternalProfile(type, answers, contact) {
  const journey = JOURNEYS[type];
  const findLabel = (stepKey, value) => {
    const step = journey?.steps.find((s) => s.key === stepKey);
    return step?.options?.find((o) => o.value === value)?.label ?? value;
  };

  const base = {
    client: [contact?.firstName, contact?.lastName].filter(Boolean).join(" "),
    purpose: journey?.label,
    contactPreference: answers.contactPreference,
  };

  if (type === "buy") {
    return {
      ...base,
      budget: answers.customBudget || findLabel("budget", answers.budget),
      propertyType: findLabel("propertyType", answers.propertyType),
      priorities: answers.priorities,
      timeline: findLabel("timeline", answers.timeline),
      purchaseMethod: findLabel("purchaseMethod", answers.purchaseMethod),
      areaPreference: answers.areaDetail || findLabel("area", answers.area),
    };
  }

  if (type === "invest") {
    return {
      ...base,
      budget: answers.customBudget || findLabel("amount", answers.amount),
      primaryGoal: findLabel("goal", answers.goal),
      investmentStyle: findLabel("investStyle", answers.investStyle),
      holdingPeriod: findLabel("holdPeriod", answers.holdPeriod),
      paymentPreference: findLabel("structure", answers.structure),
      timing: findLabel("timing", answers.timing),
      dubaiInvestorStatus: findLabel("experience", answers.experience),
      priorities: answers.priorities,
    };
  }

  if (type === "sell") {
    return {
      ...base,
      propertyType: findLabel("propertyType", answers.propertyType),
      location: answers.location,
      bedrooms: findLabel("bedrooms", answers.bedrooms),
      size: answers.size,
      occupancy: findLabel("occupancy", answers.occupancy),
      helpWith: findLabel("helpWith", answers.helpWith),
      timeline: findLabel("timeline", answers.timeline),
    };
  }

  return base;
}
