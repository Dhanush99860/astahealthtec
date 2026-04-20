import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="py-24 md:py-32">
      <SectionHeading
        eyebrow="About"
        title="A serious healthcare technology company."
        sub="Phase-2 page."
      />
    </Container>
  );
}
