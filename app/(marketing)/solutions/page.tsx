import type { Metadata } from "next";
import { SolutionsHero } from "@/components/sections/SolutionsHero";
import { CapabilitySuite } from "@/components/sections/CapabilitySuite";
import { DashboardWalkthrough } from "@/components/sections/DashboardWalkthrough";
import { InteropGovernance } from "@/components/sections/InteropGovernance";
import { MonitoringInPractice } from "@/components/sections/MonitoringInPractice";
import { SolutionsCTA } from "@/components/sections/SolutionsCTA";

export const metadata: Metadata = {
  title: "Solutions · ASTA",
  description:
    "ASTA is a productized clinical AI platform — CV monitor reading, physiological reasoning, and clinical escalation. Deployed across 10+ hospitals without a new monitor fleet.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <CapabilitySuite />
      <DashboardWalkthrough />
      <InteropGovernance />
      <MonitoringInPractice />
      <SolutionsCTA />
    </>
  );
}
