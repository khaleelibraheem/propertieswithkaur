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
