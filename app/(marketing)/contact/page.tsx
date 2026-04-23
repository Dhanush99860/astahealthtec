import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactMainSection } from "@/components/sections/ContactMainSection";

export const metadata: Metadata = {
  title: "Contact | ASTA",
  description:
    "Contact ASTA through a streamlined landing page centered on a simple inquiry form, WhatsApp chat, and essential deployment contact details.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMainSection />
    </>
  );
}
