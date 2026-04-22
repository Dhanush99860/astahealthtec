import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutFoundingThesis } from "@/components/sections/AboutFoundingThesis";
import { AboutLeadership } from "@/components/sections/AboutLeadership";
import { AboutAdvisoryBoard } from "@/components/sections/AboutAdvisoryBoard";
import { AboutInstitutionalPedigree } from "@/components/sections/AboutInstitutionalPedigree";
import { AboutCTA } from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "About | ASTA",
  description:
    "Meet the team, advisors, and institutional backing behind ASTA's device-agnostic clinical intelligence platform for real hospital wards.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutFoundingThesis />
      <AboutLeadership />
      <AboutAdvisoryBoard />
      <AboutInstitutionalPedigree />
      <AboutCTA />
    </>
  );
}
