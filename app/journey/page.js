import { Suspense } from "react";
import JourneyClient from "./JourneyClient";

export const metadata = {
  title: "Your Property Journey | Properties with Kaur",
  description:
    "Tell us what you're looking to achieve and we'll help you find the right property strategy.",
};

export default function JourneyPage() {
  return (
    <Suspense fallback={<div className="min-h-[calc(100vh-5rem)]" />}>
      <JourneyClient />
    </Suspense>
  );
}
