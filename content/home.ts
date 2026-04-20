import type {
  AuditEvent,
  Capability,
  ComplianceMetric,
  ComplianceProofItem,
  CTA,
  DemoBullet,
  DemoMetric,
  HospitalDeployment,
  HowStep,
  InstitutionalPartner,
  Outcome,
  SecurityMetric,
} from "@/lib/types";
import { ROUTES } from "@/lib/constants";

export const hero = {
  eyebrow: "Clinical AI · Ward Intelligence",
  headline: "Turn existing wards into",
  headlineAccent: "smart wards.",
  sub:
    "ASTA is device-agnostic clinical intelligence. Real-time vitals, structured observation, and intelligent alerts — built on the hospital infrastructure you already operate.",
  primaryCta: { label: "Request a demo", href: ROUTES.demo },
  secondaryCta: { label: "Explore platform", href: ROUTES.platform },
  microProof: [
    "No new monitors required",
    "Deploys on existing infrastructure",
    "Enterprise-ready architecture",
  ],
};

export const clinicalAiInAction: {
  eyebrow: string;
  heading: string;
  sub: string;
  mediaLabel: string;
  mediaTitle: string;
  mediaCaption: string;
  primaryCta: CTA;
  bullets: DemoBullet[];
  metrics: DemoMetric[];
} = {
  eyebrow: "Real-time clinical AI in action",
  heading: "See the bedside workflow, alert logic, and governance trail together.",
  sub:
    "ASTA works with the monitors your wards already run. Bedside signal is captured, structured, and routed — from first read to clinical action — without new hardware or disruption to care delivery.",
  mediaLabel: "Product walkthrough",
  mediaTitle: "Device-agnostic monitoring, structured vitals extraction, routed alerts.",
  mediaCaption:
    "Live product walkthrough — bedside monitoring, structured vitals extraction, and role-aware alert routing across an active ward deployment.",
  primaryCta: { label: "Request a walkthrough", href: ROUTES.demo },
  bullets: [
    {
      title: "Existing monitor feed",
      body: "Bedside signal is captured from the monitors your hospital already operates — no new devices, no hardware dependency, no vendor lock-in.",
    },
    {
      title: "Structured clinical signal",
      body: "ASTA converts raw monitor output into structured, machine-readable vitals — ready for trend analysis, deterioration logic, and escalation workflows.",
    },
    {
      title: "Alert routing in context",
      body: "Threshold-based alerts reach the right nurse, doctor, or operations lead with patient context attached — not just a number on a screen.",
    },
    {
      title: "Audit and governance trail",
      body: "Consent records, user actions, and legal audit entries are captured inside the same operational flow — no separate governance layer required.",
    },
  ],
  metrics: [
    { label: "Signal to interpretation", value: "<2s", note: "Real-time inference, ward-scale" },
    { label: "Monitor compatibility", value: "Device-agnostic", note: "Any brand, any layout" },
    { label: "Clinical routing", value: "Role-aware", note: "Right team, right threshold" },
  ],
};

export const institutionalTrust: {
  eyebrow: string;
  heading: string;
  sub: string;
  items: InstitutionalPartner[];
} = {
  eyebrow: "Institutional backing",
  heading: "Supported by national innovation programs and research institutions.",
  sub:
    "ASTA is backed by government-recognized innovation ecosystems and research institutions — grounding clinical product credibility in translational validation, not just product claims.",
  items: [
    {
      name: "AIC-SEED",
      descriptor: "Atal Incubation Centre - SEED",
      note: "Incubation and venture support for early-stage translational healthcare innovation.",
    },
    {
      name: "MeitY Startup Hub",
      descriptor: "Ministry of Electronics & IT, Government of India",
      note: "National government backing for technology ventures building public-impact solutions.",
    },
    {
      name: "IISER Pune",
      descriptor: "Indian Institute of Science Education and Research, Pune",
      note: "Research ecosystem support grounding clinical product development in scientific rigor.",
    },
    {
      name: "NIT Andhra Pradesh",
      descriptor: "National Institute of Technology, Andhra Pradesh",
      note: "Engineering and technical collaboration supporting product depth and field validation.",
    },
  ],
};

export const trust: {
  heading: string;
  sub: string;
  postures: string[];
} = {
  heading: "Trusted inside clinical environments",
  sub:
    "Clinical-grade deployment profiles and governance posture, built for real hospital operating environments.",
  postures: [
    "NDHM-ready posture",
    "Legal audit logs",
    "Role-based access",
    "Data residency options",
    "Encryption standards",
  ],
};

export const howItWorks: {
  eyebrow: string;
  heading: string;
  sub: string;
  steps: HowStep[];
} = {
  eyebrow: "How it works",
  heading: "A continuous intelligence layer across every bed.",
  sub:
    "Five disciplined stages — from signal capture to clinical action — running continuously on the infrastructure hospitals already operate.",
  steps: [
    {
      step: "01",
      title: "Capture",
      body: "Read vitals from any existing bedside monitor — no brand lock-in, no new device per bed.",
      icon: "camera",
    },
    {
      step: "02",
      title: "Detect",
      body: "Computer vision extracts structured vitals in real time, adapting to monitor layouts, ambient light, and viewing angles.",
      icon: "eye",
    },
    {
      step: "03",
      title: "Interpret",
      body: "Vitals trends, deterioration signals, and physiological patterns are evaluated continuously against clinical thresholds.",
      icon: "cpu",
    },
    {
      step: "04",
      title: "Alert",
      body: "Context-aware alerts reach the right clinician at the right threshold — not alarm noise.",
      icon: "bell",
    },
    {
      step: "05",
      title: "Review",
      body: "Nursing and clinical leadership gain structured, ward-level visibility for handover, audit, and escalation decisions.",
      icon: "bar-chart",
    },
  ],
};

export const capabilities: {
  eyebrow: string;
  heading: string;
  sub: string;
  items: Capability[];
} = {
  eyebrow: "Platform capabilities",
  heading: "A productized monitoring platform — not a proof of concept.",
  sub:
    "Every module is built to operate inside real hospital workflows — reliable, observable, and operable by clinical staff without specialist IT support.",
  items: [
    {
      icon: "activity",
      title: "Real-time monitoring",
      body: "Continuous structured vitals across the ward, synchronized at clinical cadence — without a new device at every bed.",
    },
    {
      icon: "bell",
      title: "Intelligent alerts",
      body: "Context-aware, threshold-driven alerts designed to reduce alarm fatigue while surfacing the signals that demand attention.",
    },
    {
      icon: "dashboard",
      title: "Clinical visibility",
      body: "Unit-, bed-, and patient-level dashboards built for nursing and clinical leadership — not just the IT team.",
    },
    {
      icon: "shield",
      title: "Security & compliance",
      body: "NDHM-ready architecture, full audit trails, role-based access, and data governance aligned to enterprise clinical standards.",
    },
    {
      icon: "route",
      title: "Workflow compatibility",
      body: "HL7/FHIR-aligned integration with existing EMR, escalation protocols, and ward workflows — works alongside the systems hospitals already operate.",
    },
    {
      icon: "cloud",
      title: "Deployment flexibility",
      body: "On-prem, hybrid, or managed cloud — matched to the hospital's existing IT posture, residency requirements, and governance policy.",
    },
  ],
};

export const deployments: {
  eyebrow: string;
  heading: string;
  sub: string;
  items: HospitalDeployment[];
  publicNote: string;
} = {
  eyebrow: "Live hospital deployments",
  heading: "Live at named hospitals across Tamil Nadu and Karnataka.",
  sub:
    "Seven operational hospitals. Named, verified, and actively running ASTA across wards in Tamil Nadu and Karnataka.",
  publicNote:
    "Deployed in active partnership with clinical and technical teams at each site. Public website references included where available.",
  items: [
    {
      name: "Southern Railway HQ Hospital",
      city: "Chennai",
      state: "Tamil Nadu",
      status: "Live",
      liveSince: "2025",
      website: "https://srhqh.edu.in",
      note: "Continuous ward monitoring deployed in collaboration with hospital and railway medical leadership.",
    },
    {
      name: "Karnataka ENT Hospital",
      city: "Chitradurga",
      state: "Karnataka",
      status: "Live",
      liveSince: "2025",
      website: "https://kenthospitals.com",
      note: "Bedside monitoring adapted to ENT-focused clinical workflows and ward operating patterns.",
    },
    {
      name: "Aksha Hospital",
      city: "Bangalore",
      state: "Karnataka",
      status: "Live",
      liveSince: "2025",
      website: "https://akshahospital.in",
      note: "Active ward monitoring across clinical, nursing, and technical teams in a multi-ward environment.",
    },
    {
      name: "Seethapathy Clinic",
      city: "Chennai",
      state: "Tamil Nadu",
      status: "Live",
      liveSince: "2025",
      website: "https://seethapathyclinic.org",
      note: "Continuous observation and escalation readiness configured to clinic-specific care protocols.",
    },
    {
      name: "K.S. Hospital",
      city: "Kumbakonam",
      state: "Tamil Nadu",
      status: "Live",
      liveSince: "2025",
      website: "https://kshospital.co.in",
      note: "Bedside signal capture configured to existing monitor infrastructure and ward layout.",
    },
    {
      name: "Sugam Hospital",
      city: "Kumbakonam",
      state: "Tamil Nadu",
      status: "Live",
      liveSince: "2026",
      website: "https://jsdl.in",
      note: "Threshold-based alerting and structured vitals configured for operational continuity across active wards.",
    },
    {
      name: "Anbu Hospital",
      city: "Kumbakonam",
      state: "Tamil Nadu",
      status: "Live",
      liveSince: "2026",
      website: "https://anbuhospital.org",
      note: "ASTA deployed across an active care environment in partnership with hospital clinical and operations teams.",
    },
  ],
};

export const outcomes: {
  eyebrow: string;
  heading: string;
  sub: string;
  items: Outcome[];
} = {
  eyebrow: "Deployment model & buyer outcomes",
  heading: "A practical operating model for hospitals, not a demo-stage AI promise.",
  sub:
    "ASTA delivers structured value across the full hospital buying committee — from operations and clinical leadership to IT governance.",
  items: [
    {
      icon: "server",
      audience: "Operating model",
      title: "No CAPEX. Predictable OPEX.",
      body: "Runs on the monitors and infrastructure hospitals already own. No hardware refresh program, no device fleet to procure — a delivery model procurement teams can forecast, with ASTA's clinical and technical team guiding implementation from day one.",
      metric: "Zero CAPEX retrofit",
      proof: "Guided rollout — implementation support included",
    },
    {
      icon: "heart-pulse",
      audience: "Clinical safety",
      title: "Smart monitoring without clinical disruption",
      body: "ASTA fits around existing bedside workflows — improving signal continuity and deterioration visibility without forcing disruptive device changeover or retraining programs.",
      metric: "24/7 signal continuity",
      proof: "No vendor lock-in assumption",
    },
    {
      icon: "stethoscope",
      audience: "Escalation",
      title: "Alerts that reach the right people",
      body: "Threshold-driven routing delivers the right clinical context to the right nurse, doctor, or operations lead — instead of broadcasting undifferentiated alarm noise.",
      metric: "Role-aware routing",
      proof: "Context attached at escalation",
    },
    {
      icon: "lock",
      audience: "Governance",
      title: "Your data. Your control.",
      body: "Patient data, access policy, residency, retention, and audit posture remain aligned with hospital governance — under institutional ownership, not vendor-defined defaults.",
      metric: "100% auditable trail",
      proof: "Hospital-controlled deployment posture",
    },
  ],
};

export const security: {
  eyebrow: string;
  heading: string;
  sub: string;
  quickMetrics: SecurityMetric[];
  scorecard: ComplianceMetric[];
  proofItems: ComplianceProofItem[];
  auditEvents: AuditEvent[];
} = {
  eyebrow: "Security & enterprise readiness",
  heading: "Built for hospital compliance, auditability, and institutional control.",
  sub:
    "Designed for regulated clinical environments — NDHM-ready posture, HL7/FHIR-aligned interoperability, full patient consent lifecycle tracking, legal audit logs, encryption standards, and deployment models that remain under hospital control.",
  quickMetrics: [
    { val: "NDHM", label: "Ready posture", color: "#4F6BFF" },
    { val: "RBAC", label: "Role-based access", color: "#28D7B5" },
    { val: "E2E", label: "Encryption standards", color: "#7C5CFF" },
  ],
  scorecard: [
    { label: "Consent tracking", score: 100, color: "#28D7B5" },
    { label: "Legal audit logs", score: 100, color: "#4F6BFF" },
    { label: "NDHM posture", score: 96, color: "#49C6FF" },
    { label: "Data residency", score: 94, color: "#7C5CFF" },
    { label: "HL7/FHIR interoperability", score: 88, color: "#4F6BFF" },
  ],
  proofItems: [
    {
      icon: "lock",
      title: "Encryption standards",
      body: "All patient data is encrypted in transit and at rest, meeting the controls required for hospital governance and regulated clinical deployment.",
    },
    {
      icon: "shield",
      title: "Consent tracking & NDHM readiness",
      body: "Full patient consent lifecycle tracking and NDHM-aligned posture — supporting hospitals operating under India's digital health compliance framework.",
    },
    {
      icon: "check",
      title: "Legal audit logs",
      body: "Every access event, clinical interaction, and data operation is logged for legal review, internal governance, and institutional compliance reporting.",
    },
    {
      icon: "server",
      title: "Interoperability & controlled deployment",
      body: "HL7/FHIR-aligned connectivity with existing hospital systems and EMR. On-prem, hybrid, or managed cloud — each model maintains role-based access, data residency alignment, and hospital-owned operating policy.",
    },
  ],
  auditEvents: [
    { time: "09:42:17", type: "ok", msg: "Role:nurse accessed ward4 vitals · consent:verified · policy:pass" },
    { time: "09:41:55", type: "ok", msg: "Legal audit export triggered · actor:ops-lead · reason:review" },
    { time: "09:40:03", type: "info", msg: "Session token refreshed · user:dr_sharma · residency:india" },
    { time: "09:38:11", type: "ok", msg: "PHI query logged · access:authorized · control:rbac" },
    { time: "09:37:44", type: "info", msg: "Encryption health check · ndhm-profile:ready · status:pass" },
  ],
};

export const finalCta = {
  eyebrow: "Talk to the team",
  heading: "See ASTA running on wards like yours.",
  sub:
    "A focused 30-minute walkthrough with our clinical and engineering leads — scoped to your unit, your existing monitors, and your deployment requirements.",
  primaryCta: { label: "Request a demo", href: ROUTES.demo },
  secondaryCta: { label: "Talk to our team", href: ROUTES.contact },
};
