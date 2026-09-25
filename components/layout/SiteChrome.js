"use client";

import { usePathname } from "next/navigation";

// Paid-traffic landing pages ship their own minimal header and footer. The
// site nav on those routes would only hand a visitor exits away from the
// lead form, so it is suppressed here rather than in each page.
const BARE_ROUTES = new Set(["/limited-time-offer"]);

export default function SiteChrome({ nav, footer, children }) {
  const pathname = usePathname();

  // Bare routes supply their own <main>, so the wrapper is skipped too and
  // their header isn't nested inside the page's main landmark.
  if (BARE_ROUTES.has(pathname)) return children;

  return (
    <>
      {nav}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
