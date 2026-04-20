import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="py-24 md:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Talk to the ASTA team."
        sub="Phase-2 page with a clinically-credible form."
      />
    </Container>
  );
}
