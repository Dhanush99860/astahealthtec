import type { Metadata } from "next";
import { UseCasesHero } from "@/components/sections/UseCasesHero";
import { UseCaseClusters } from "@/components/sections/UseCaseClusters";
import { UseCasesAcademicValue } from "@/components/sections/UseCasesAcademicValue";
import { UseCasesProof } from "@/components/sections/UseCasesProof";
import { UseCasesOutcomes } from "@/components/sections/UseCasesOutcomes";
import { UseCasesCTA } from "@/components/sections/UseCasesCTA";

export const metadata: Metadata = {
  title: "Use Cases | ASTA",
  description:
    "See where ASTA creates value across real hospital environments - from general wards and ICU/HCU oversight to peripheral centers, teaching hospitals, and specialized monitored settings.",
};

export default function UseCasesPage() {
  return (
    <>
      <UseCasesHero />
      <UseCaseClusters />
      <UseCasesAcademicValue />
      <UseCasesProof />
      <UseCasesOutcomes />
      <UseCasesCTA />
    </>
  );
}
