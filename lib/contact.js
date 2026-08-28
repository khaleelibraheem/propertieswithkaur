// Single source of truth for the site's contact numbers.
export const WHATSAPP_NUMBER = "971563626269";
export const PHONE_NUMBER = "+971563626269";

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_HREF = `tel:${PHONE_NUMBER}`;

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
