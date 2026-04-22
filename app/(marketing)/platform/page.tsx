import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/PlatformHero";
import { PlatformIntelligenceStack } from "@/components/sections/PlatformIntelligenceStack";
import { PlatformSignalFlow } from "@/components/sections/PlatformSignalFlow";
import { PlatformComputerVision } from "@/components/sections/PlatformComputerVision";
import { PlatformReasoningLayer } from "@/components/sections/PlatformReasoningLayer";
import { PlatformDeploymentArchitecture } from "@/components/sections/PlatformDeploymentArchitecture";
import { PlatformValidation } from "@/components/sections/PlatformValidation";
import { PlatformCTA } from "@/components/sections/PlatformCTA";

export const metadata: Metadata = {
  title: "Platform | ASTA",
  description:
    "ASTA is a device-agnostic clinical intelligence stack for monitor reading, physiological reasoning, and evidence-linked clinical output.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <PlatformIntelligenceStack />
      <PlatformSignalFlow />
      <PlatformComputerVision />
      <PlatformReasoningLayer />
      <PlatformDeploymentArchitecture />
      <PlatformValidation />
      <PlatformCTA />
    </>
  );
}
