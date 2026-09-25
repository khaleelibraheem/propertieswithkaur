// Single source of truth for the site's contact details.
export const WHATSAPP_NUMBER = "971586308811";
export const PHONE_NUMBER = "+971586308811";
// Same number, spaced for display — a tel: href can't carry the spaces.
export const PHONE_DISPLAY = "+971 58 630 8811";
export const EMAIL_ADDRESS = "Propertieswithkaur@gmail.com";

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_HREF = `tel:${PHONE_NUMBER}`;
export const EMAIL_HREF = `mailto:${EMAIL_ADDRESS}`;

// Builds the message sent to the founder over WhatsApp when the general
// contact form (not the journey funnel) is submitted.
export function buildContactWhatsappMessage({ name, email, phone, message }) {
  const lines = [
    "📩 *New Contact Enquiry — Properties with Kaur*",
    "",
    `👤 ${name}`,
    `📧 ${email}`,
    `📱 ${phone}`,
  ];
  if (message?.trim()) {
    lines.push("", "*What they'd like to discuss*", message.trim());
  }
  return lines.join("\n");
}

export function buildContactWhatsappHref(values) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(buildContactWhatsappMessage(values))}`;
}

// Builds the message sent to the founder when the limited-time offer lead
// form is submitted. The project name is passed in rather than imported so
// this file stays the contact-details module and doesn't take on a
// dependency on campaign content.
export function buildOfferWhatsappMessage({ name, phone, email }, project) {
  return [
    "🏙️ *New Limited-Time Offer Lead — Properties with Kaur*",
    "",
    `👤 ${name}`,
    `📱 ${phone}`,
    `📧 ${email}`,
    "",
    `🏠 Enquiring about: ${project}`,
    "Requested: current price, payment plan and availability.",
  ].join("\n");
}

export function buildOfferWhatsappHref(values, project) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(buildOfferWhatsappMessage(values, project))}`;
}

// Deep link used by the page's "talk to us now" actions, so a visitor who
// skips the form still lands in a conversation with context attached.
export function buildOfferEnquiryHref(project) {
  const text = `Hi Simran, I'd like the current price, payment plan and availability for ${project}.`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
}
