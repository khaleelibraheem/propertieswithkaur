import { WHATSAPP_BASE_URL } from "@/lib/contact";

export default function WhatsAppShortcut() {
  return (
    <a
      href={WHATSAPP_BASE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.3-.02-.46.13-.6.13-.13.29-.34.44-.51.15-.17.2-.3.29-.5.1-.19.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.36-.02-.56-.02s-.5.07-.77.36c-.26.3-1 .98-1 2.4s1.03 2.78 1.18 2.97c.14.2 2.03 3.1 4.91 4.35.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
        <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.87.51 3.62 1.4 5.12L2 22l4.99-1.31A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2zm0 18.13c-1.7 0-3.28-.5-4.61-1.36l-.33-.2-3.05.8.82-2.97-.22-.34a8.1 8.1 0 0 1-1.25-4.31c0-4.5 3.66-8.15 8.16-8.15 4.49 0 8.15 3.65 8.15 8.15 0 4.5-3.66 8.15-8.15 8.15z" />
      </svg>
    </a>
  );
}
