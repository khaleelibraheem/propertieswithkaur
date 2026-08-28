// Single source of truth for the site's contact details.
export const WHATSAPP_NUMBER = "971586308811";
export const PHONE_NUMBER = "+971586308811";
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
