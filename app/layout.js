import { Suspense } from "react";
import { Hanken_Grotesk, Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: "variable",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal"],
});

export const metadata = {
  metadataBase: new URL("https://propertieswithkaur.vercel.app"),
  title: "Properties with Kaur | Property With Purpose",
  description:
    "A private property advisory experience. Tell us what you're looking to achieve and we'll help you find the right property strategy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${bricolageGrotesque.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-hidden antialiased">
        <Suspense fallback={<div className="h-20" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
