import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = { title: "Platform" };

export default function PlatformPage() {
  return (
    <Container className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Platform"
        title="The intelligence layer behind ASTA."
        sub="Phase-2 page. Will expand the ASTA platform story beyond the homepage."
      />
    </Container>
  );
}
