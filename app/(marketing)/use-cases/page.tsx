import type { Metadata } from "next";
import { UseCasesHero } from "@/components/sections/UseCasesHero";
import { UseCaseClusters } from "@/components/sections/UseCaseClusters";
import { UseCasesAcademicValue } from "@/components/sections/UseCasesAcademicValue";
import { UseCasesOutcomes } from "@/components/sections/UseCasesOutcomes";
import { UseCasesCTA } from "@/components/sections/UseCasesCTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Use Cases",
  description:
    "See where ASTA creates value across real hospital environments - from general wards and ICU/HCU oversight to peripheral centers, teaching hospitals, and specialized monitored settings.",
  path: "/use-cases",
  keywords: [
    "hospital AI use cases",
    "smart wards",
    "ICU monitoring",
    "teaching hospital AI",
  ],
});

export default function UseCasesPage() {
  return (
    <>
      <UseCasesHero />
      <UseCaseClusters />
      <UseCasesAcademicValue />
      <UseCasesOutcomes />
      <UseCasesCTA />
    </>
  );
}
