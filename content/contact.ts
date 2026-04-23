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
const CONTACT_PHONE_RAW = "918779404951";
export const CONTACT_PHONE_DISPLAY = "+91 87794 04951";
export const CONTACT_PHONE_LINK = `tel:+${CONTACT_PHONE_RAW}`;
export const CONTACT_WHATSAPP_URL =
  `https://wa.me/${CONTACT_PHONE_RAW}?text=` +
  encodeURIComponent("Hello ASTA team, I would like to discuss a hospital or deployment inquiry.");

export const contactInquiryTypes = [
  "Product walkthrough",
  "Deployment review",
  "Teaching hospital / research",
  "Partnership",
  "Other",
] as const;

export type ContactInquiryType = (typeof contactInquiryTypes)[number];

const liveHospitalCount = deployments.items.length;
const liveStates = Array.from(new Set(deployments.items.map((deployment) => deployment.state))).sort(
  (a, b) => a.localeCompare(b),
);
const liveCities = Array.from(new Set(deployments.items.map((deployment) => deployment.city))).sort(
  (a, b) => a.localeCompare(b),
);

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
      return "Other";
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
  eyebrow: "Contact ASTA",
  headline: "Send one clear inquiry. Reach the right ASTA conversation fast.",
  sub:
    "This contact page is intentionally simple: the form is the main action, WhatsApp is available for faster follow-up, and the essential contact and location details stay visible without extra clutter.",
  primaryCta: { label: "Send an inquiry", href: "#contact-form" },
  secondaryCta: { label: "Chat on WhatsApp", href: CONTACT_WHATSAPP_URL },
  microProof: [
    `${liveHospitalCount} named live hospital deployments`,
    "WhatsApp and email contact options",
    "Built for hospitals, academic teams, and partners",
  ],
};

export const contactMain: {
  eyebrow: string;
  heading: string;
  sub: string;
  channelsTitle: string;
  channels: {
    icon: IconName;
    label: string;
    value: string;
    href: string;
    note: string;
  }[];
  whatsapp: {
    title: string;
    body: string;
    bullets: string[];
    ctaLabel: string;
    href: string;
  };
  presence: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
    states: string[];
    cities: string[];
    note: string;
  };
} = {
  eyebrow: "Direct contact",
  heading: "The form is the main path. The rest stays focused and useful.",
  sub:
    "Use the form for demos, deployment reviews, academic conversations, or partnerships. If you want faster back-and-forth, the WhatsApp line is available from the same panel.",
  channelsTitle: "Reach ASTA directly",
  channels: [
    {
      icon: "mail",
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      note: "Best for structured introductions, product walkthrough requests, and institutional outreach.",
    },
    {
      icon: "phone",
      label: "Phone / WhatsApp",
      value: CONTACT_PHONE_DISPLAY,
      href: CONTACT_PHONE_LINK,
      note: "Call directly or save the number for quick WhatsApp coordination with the ASTA team.",
    },
  ],
  whatsapp: {
    title: "Need a faster response?",
    body:
      "Use WhatsApp for quick scheduling, deployment follow-up, and back-and-forth questions after your first inquiry.",
    bullets: [
      "Demo scheduling and follow-up",
      "Hospital deployment discussions",
      "Partnership and institutional coordination",
    ],
    ctaLabel: "Open WhatsApp chat",
    href: CONTACT_WHATSAPP_URL,
  },
  presence: {
    eyebrow: "Location and live footprint",
    title: "ASTA is already active across real hospital environments.",
    body:
      "Use the contact page for central outreach, but note that ASTA's live footprint already spans named hospital deployments across multiple cities in Tamil Nadu and Karnataka.",
    stats: [
      { value: String(liveHospitalCount), label: "Named live hospitals" },
      { value: String(liveStates.length), label: "States represented" },
    ],
    states: liveStates,
    cities: liveCities,
    note: "Current public footprint: Chennai, Bangalore, Chitradurga, and Kumbakonam.",
  },
};

export const contactForm = {
  eyebrow: "Inquiry form",
  heading: "Keep the form simple. Send the essentials.",
  sub:
    "Name, work email, institution, phone or WhatsApp number, and a short message are enough. The form drafts an email to ASTA with your details prefilled.",
  labels: {
    fullName: "Full name",
    workEmail: "Work email",
    institution: "Hospital / institution",
    phone: "Phone or WhatsApp number",
    message: "What would you like to discuss?",
  },
  placeholders: {
    fullName: "Your full name",
    workEmail: "name@hospital.org",
    institution: "Hospital, institution, or organization",
    phone: "Optional",
    message:
      "Tell us about your ward, monitored environment, deployment goal, or the question you want to discuss.",
  },
  consentLabel:
    "I consent to ASTA using these details to respond to this inquiry and coordinate the next conversation.",
  helper:
    "If your mail client does not open, send the same details directly by email or continue the conversation on WhatsApp.",
  submitLabel: "Draft inquiry email",
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
