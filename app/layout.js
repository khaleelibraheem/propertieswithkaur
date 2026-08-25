import { Suspense } from "react";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata = {
  title: "Properties with Kaur | Property With Purpose",
  description:
    "A private property advisory experience. Tell us what you're looking to achieve and we'll help you find the right property strategy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrument.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-hidden antialiased">
        <Suspense fallback={<div className="h-20" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
