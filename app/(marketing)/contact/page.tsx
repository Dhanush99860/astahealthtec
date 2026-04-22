import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactMainSection } from "@/components/sections/ContactMainSection";
import { ContactProofStrip } from "@/components/sections/ContactProofStrip";
import { ContactNextSteps } from "@/components/sections/ContactNextSteps";
import { ContactDetails } from "@/components/sections/ContactDetails";

export const metadata: Metadata = {
  title: "Contact | ASTA",
  description:
    "Start a hospital, teaching-institution, or partner conversation with ASTA around walkthroughs, deployment reviews, and institutional fit.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMainSection />
      <ContactProofStrip />
      <ContactNextSteps />
      <ContactDetails />
    </>
  );
}
