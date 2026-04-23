import { Hero } from "@/components/sections/Hero";
import { ClinicalAiInAction } from "@/components/sections/ClinicalAiInAction";
import { InstitutionalTrust } from "@/components/sections/InstitutionalTrust";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Capabilities } from "@/components/sections/Capabilities";
import { Outcomes } from "@/components/sections/Outcomes";
import { SecurityBand } from "@/components/sections/SecurityBand";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClinicalAiInAction />
      <InstitutionalTrust />
      <HowItWorks />
      <Capabilities />
      <Outcomes />
      <SecurityBand />
      <FinalCTA />
    </>
  );
}
