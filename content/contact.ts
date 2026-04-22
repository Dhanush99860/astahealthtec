import type { CTA, IconName } from "@/lib/types";
import { deployments } from "@/content/home";

type ContactProofItem = {
  value: string;
  label: string;
};

type ContactHelpItem = {
  icon: IconName;
  title: string;
  body: string;
};

type ContactStep = {
  step: string;
  title: string;
  body: string;
};

type ContactChannel = {
  icon: IconName;
  title: string;
  body: string;
  email: string;
};

export const CONTACT_EMAIL = "info@astahealthtech.com";

export const contactInquiryTypes = [
  "Product walkthrough",
  "Deployment review",
  "Teaching hospital / research",
  "Partnership",
  "Other",
] as const;

export type ContactInquiryType = (typeof contactInquiryTypes)[number];

const liveHospitalCount = deployments.items.length;

export function resolveContactInquiryType(intent?: string): ContactInquiryType {
  switch (intent) {
    case "demo":
      return "Product walkthrough";
    case "deployment":
      return "Deployment review";
    case "academic":
      return "Teaching hospital / research";
    case "partner":
      return "Partnership";
    default:
      return "Product walkthrough";
  }
}

export const contactHero: {
  eyebrow: string;
  headline: string;
  sub: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  microProof: string[];
} = {
  eyebrow: "Hospital, academic, and partner outreach",
  headline: "Talk to ASTA about your hospital setting.",
  sub:
    "Request a walkthrough, deployment review, or institutional conversation. ASTA works on existing hospital infrastructure, and the discussion can cover product fit, deployment fit, teaching-hospital relevance, and partner scope.",
  primaryCta: { label: "Start your inquiry", href: "#contact-form" },
  secondaryCta: { label: "Email ASTA directly", href: `mailto:${CONTACT_EMAIL}` },
  microProof: [
    "Existing monitor infrastructure, not a new monitor fleet",
    "For hospitals, teaching institutions, and serious partners",
    "One contact point routed by inquiry type",
  ],
};

export const contactMain: {
  eyebrow: string;
  heading: string;
  sub: string;
  panelTitle: string;
  panelBody: string;
  helpItems: ContactHelpItem[];
  supportTags: string[];
} = {
  eyebrow: "Structured outreach",
  heading: "Start with the context ASTA needs to review.",
  sub:
    "Use this page when you want a serious conversation about ward fit, deployment posture, teaching-hospital relevance, or institutional partnership. ASTA can route the discussion faster when the hospital or institutional context is clear from the start.",
  panelTitle: "What we can help with",
  panelBody:
    "The first conversation is designed to clarify whether ASTA fits your monitored environment, operational model, and institutional goals before any deeper review.",
  helpItems: [
    {
      icon: "dashboard",
      title: "Product walkthrough",
      body:
        "Review the monitoring experience, clinical surfaces, and operating model for wards already running bedside monitors.",
    },
    {
      icon: "hospital",
      title: "Deployment review",
      body:
        "Discuss existing infrastructure, ward mix, escalation pathways, rollout posture, and what a practical deployment path looks like.",
    },
    {
      icon: "layers",
      title: "Teaching hospital or research conversation",
      body:
        "Explore clinical education, protocol review, research, validation, and publication-oriented relevance for academic institutions.",
    },
    {
      icon: "compass",
      title: "Partnership or institutional inquiry",
      body:
        "Start conversations around collaboration, program design, channel alignment, or institution-facing partnership scope.",
    },
  ],
  supportTags: [
    "Dedicated clinical partner approach",
    "Device-agnostic deployment model",
    "NDHM-aligned and data-sovereign posture",
    "Practical rollout on existing infrastructure",
  ],
};

export const contactForm = {
  eyebrow: "Inquiry form",
  heading: "Share enough detail for ASTA to route the right conversation.",
  sub:
    "Submitting this form drafts an email to ASTA with your details prefilled, so hospitals, academic teams, and partners can send a structured inquiry without waiting on a separate portal.",
  inquiryTypes: contactInquiryTypes,
  consentLabel:
    "I consent to ASTA using these details to respond to this inquiry and coordinate the next conversation.",
  helper:
    "If your mail client does not open, send the same details directly to info@astahealthtech.com.",
  submitLabel: "Draft ASTA inquiry",
};

export const contactProofStrip: {
  eyebrow: string;
  title: string;
  note: string;
  items: ContactProofItem[];
} = {
  eyebrow: "Public proof points",
  title: "A serious contact page still needs concrete proof.",
  note:
    "These are the public-safe signals ASTA can stand behind before a hospital or institution enters a deeper review.",
  items: [
    { value: String(liveHospitalCount), label: "Named live hospital deployments" },
    { value: "15+", label: "OEM monitor brands supported" },
    { value: "98%", label: "Computer-vision accuracy" },
    { value: "0", label: "New monitor fleet required" },
    { value: "4", label: "Institutional anchors" },
  ],
};

export const contactNextSteps: {
  eyebrow: string;
  heading: string;
  sub: string;
  steps: ContactStep[];
} = {
  eyebrow: "What happens next",
  heading: "A clear path from first outreach to deployment review.",
  sub:
    "ASTA keeps the first response operational. The goal is to understand the setting, assess fit, and decide whether a deeper product and deployment conversation makes sense.",
  steps: [
    {
      step: "01",
      title: "ASTA reviews your context",
      body:
        "The team reviews the monitored environment, institution type, and inquiry theme so the conversation starts in the right lane.",
    },
    {
      step: "02",
      title: "Initial fit conversation",
      body:
        "A first discussion clarifies ward type, current monitoring setup, operational goals, and whether ASTA fits the setting.",
    },
    {
      step: "03",
      title: "Product or platform walkthrough",
      body:
        "If there is alignment, ASTA walks through the product, workflow surfaces, and relevant use patterns for your environment.",
    },
    {
      step: "04",
      title: "Deployment review and next steps",
      body:
        "The team outlines the deployment posture, rollout considerations, and the next actions required for a more formal review.",
    },
  ],
};

export const contactDetails: {
  eyebrow: string;
  heading: string;
  sub: string;
  primaryEmail: string;
  channels: ContactChannel[];
} = {
  eyebrow: "Direct contact details",
  heading: "Prefer direct email instead of the form?",
  sub:
    "ASTA routes serious hospital, academic, and partner outreach through one contact point. Use the same address whether you are evaluating a walkthrough, deployment fit, research relevance, or partnership scope.",
  primaryEmail: CONTACT_EMAIL,
  channels: [
    {
      icon: "hospital",
      title: "Hospital deployment conversations",
      body:
        "For ward fit, product walkthroughs, rollout questions, and monitored-environment deployment reviews.",
      email: CONTACT_EMAIL,
    },
    {
      icon: "layers",
      title: "Academic and teaching institution outreach",
      body:
        "For teaching-hospital, research, validation, protocol, and institution-led innovation conversations.",
      email: CONTACT_EMAIL,
    },
    {
      icon: "compass",
      title: "Partnership and institutional conversations",
      body:
        "For collaboration, channel, program, and broader institution-facing partnership discussions.",
      email: CONTACT_EMAIL,
    },
  ],
};
