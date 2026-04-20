import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = { title: "Use Cases" };

export default function UseCasesPage() {
  return (
    <Container className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Use cases"
        title="Where ASTA creates clinical value."
        sub="Phase-2 page."
      />
    </Container>
  );
}
