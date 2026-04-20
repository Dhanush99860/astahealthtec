import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <Container className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Solutions"
        title="Smart-ward solutions for modern hospitals."
        sub="Phase-2 page. Reuses SectionHeading, Card, and section primitives from the homepage."
      />
    </Container>
  );
}
