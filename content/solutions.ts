import type { IconName } from "@/lib/types";
import { ROUTES } from "@/lib/constants";

export const solutionsHero = {
  eyebrow: "Clinical AI Platform",
  headline: "The complete clinical intelligence platform",
  headlineAccent: "for active wards.",
  sub: "ASTA is a productized clinical AI platform — three integrated modules covering monitor reading, physiological reasoning, and clinical escalation. Deployed across 10+ hospitals without a new monitor fleet.",
  primaryCta: { label: "Request a walkthrough", href: ROUTES.demo },
  secondaryCta: { label: "View live deployments", href: "/#deployments" },
  proofRow: [
    { value: "98%",  label: "CV model accuracy" },
    { value: "<2s",  label: "Signal to action" },
    { value: "15+",  label: "OEM brands" },
    { value: "10+",  label: "Hospital deployments" },
  ],
};

export const capabilitySuite: {
  eyebrow: string;
  heading: string;
  sub: string;
  modules: {
    icon: IconName;
    tag: string;
    title: string;
    body: string;
    bullets: string[];
    color: string;
    colorTo: string;
  }[];
  comingSoon: { label: string; note: string };
} = {
  eyebrow: "SAMD Capability Suite",
  heading: "Three productized AI modules. One clinical intelligence platform.",
  sub: "Each module is independently deployable and production-validated. Together they form a continuous pipeline from monitor reading to clinical escalation — running across every bed, on infrastructure the hospital already owns.",
  modules: [
    {
      icon: "camera",
      tag: "Module 01",
      title: "CV Monitor Reading",
      body: "Computer vision trained on 100M+ labeled monitor frames reads any OEM LCD display in real time. No API, no hardware tap, no hospital IT integration required. Structured vitals at 98% accuracy.",
      bullets: [
        "Any OEM brand — 15+ supported",
        "Any lighting condition, any ward",
        "98% extraction accuracy",
        "Zero hospital IT dependency",
      ],
      color: "#4F6BFF",
      colorTo: "#7C5CFF",
    },
    {
      icon: "cpu",
      tag: "Module 02",
      title: "Physiological Pattern Learning Model",
      body: "PPLM evaluates vital trajectories continuously — not single thresholds. It identifies deterioration signals, produces ranked clinical differentials, and attaches evidence links to every alert output.",
      bullets: [
        "Trajectory-based reasoning, not thresholds",
        "Ranked clinical differentials per alert",
        "Evidence links at every output",
        "Continuous per-bed evaluation",
      ],
      color: "#28D7B5",
      colorTo: "#49C6FF",
    },
    {
      icon: "bell",
      tag: "Module 03",
      title: "Clinical Escalation Engine",
      body: "Role-aware alert routing delivers physiological context, vital trajectory, and recommended next steps to the right clinician — not alarm noise. Every escalation is governance-logged in the same operational flow.",
      bullets: [
        "Role-aware routing to correct clinician",
        "Trajectory + context at escalation point",
        "Configurable per ward and protocol",
        "Full governance audit trail",
      ],
      color: "#7C5CFF",
      colorTo: "#4F6BFF",
    },
  ],
  comingSoon: {
    label: "SAMD classification pathway — regulatory submission in preparation",
    note: "ASTA is on a defined SAMD classification pathway. Regulatory submission documentation is in active preparation.",
  },
};

export const dashboardWalkthrough: {
  eyebrow: string;
  heading: string;
  sub: string;
  wardStats: { label: string; value: string; color: string }[];
  bedRows: {
    bed: string;
    hr: string;
    spo2: string;
    bp: string;
    status: "ok" | "warn" | "alert";
  }[];
  alertQueue: { time: string; bed: string; msg: string; priority: "high" | "medium" }[];
  auditEntries: { time: string; type: "ok" | "info"; msg: string }[];
} = {
  eyebrow: "Product Experience",
  heading: "What clinicians actually see.",
  sub: "A live ward dashboard across nursing, clinical leadership, and operations — every monitored bed in one view, with role-appropriate data and escalation context at every layer.",
  wardStats: [
    { label: "Beds monitored", value: "24",   color: "#4F6BFF" },
    { label: "Active alerts",  value: "3",    color: "#FBBF24" },
    { label: "Escalations",    value: "1",    color: "#EF4444" },
    { label: "Ward coverage",  value: "100%", color: "#28D7B5" },
  ],
  bedRows: [
    { bed: "B-01", hr: "76 bpm",  spo2: "98%", bp: "122/80", status: "ok"    },
    { bed: "B-02", hr: "91 bpm",  spo2: "94%", bp: "138/88", status: "warn"  },
    { bed: "B-03", hr: "68 bpm",  spo2: "99%", bp: "118/76", status: "ok"    },
    { bed: "B-04", hr: "108 bpm", spo2: "89%", bp: "142/92", status: "alert" },
    { bed: "B-05", hr: "72 bpm",  spo2: "97%", bp: "126/82", status: "ok"    },
    { bed: "B-06", hr: "83 bpm",  spo2: "96%", bp: "130/84", status: "ok"    },
  ],
  alertQueue: [
    { time: "09:44:12", bed: "B-04", msg: "SpO₂ 89% — threshold breach · PPLM: trajectory declining · Escalate", priority: "high"   },
    { time: "09:41:07", bed: "B-02", msg: "HR 91 bpm — 3-min upward trend · PPLM: monitor, no escalation",        priority: "medium" },
    { time: "09:38:55", bed: "B-07", msg: "BP 142/92 — above range · Trajectory: stable · Watchlist",             priority: "medium" },
  ],
  auditEntries: [
    { time: "09:44:18", type: "ok",   msg: "Alert routed → nurse-on-duty · B-04 · consent:verified · rbac:pass" },
    { time: "09:44:12", type: "info", msg: "PPLM escalation triggered · SpO₂ trajectory · B-04 · Ward 3"        },
    { time: "09:41:07", type: "info", msg: "HR threshold watch active · B-02 · no escalation at this time"      },
  ],
};

export const interopGovernance: {
  eyebrow: string;
  heading: string;
  sub: string;
  items: { icon: IconName; title: string; body: string; badge: string; color: string }[];
} = {
  eyebrow: "Interoperability & Governance",
  heading: "Enterprise-grade from deployment day one.",
  sub: "ASTA is designed for regulated clinical environments — HL7/FHIR-aligned, NDHM-ready, with full audit posture and hospital-controlled data governance from first deployment.",
  items: [
    {
      icon: "route",
      title: "HL7/FHIR aligned",
      body: "Vital outputs are HL7/FHIR-aligned for EMR and downstream connectivity. Monitor reading requires no hospital IT integration — EMR connection is additive, not prerequisite.",
      badge: "Supported",
      color: "#4F6BFF",
    },
    {
      icon: "shield",
      title: "NDHM-ready posture",
      body: "Architecture built to NDHM/ABDM standards for national health data interoperability — ready for ABHA-linked patient record flows when hospital systems support them.",
      badge: "Ready",
      color: "#28D7B5",
    },
    {
      icon: "lock",
      title: "Role-based access control",
      body: "Access enforced at every layer. Nurse, clinician, clinical leadership, and operations have role-defined data views — no over-privileged access paths at any tier.",
      badge: "Enforced",
      color: "#7C5CFF",
    },
    {
      icon: "check",
      title: "Full legal audit trail",
      body: "Every access event, clinical interaction, and data operation is logged — tamper-evident, immutable, and available for legal review, governance reporting, and compliance audit.",
      badge: "Complete",
      color: "#49C6FF",
    },
    {
      icon: "server",
      title: "Hospital-controlled data residency",
      body: "Data residency, retention policy, and access control are hospital-defined. On-prem, hybrid, or managed cloud — ASTA operates inside the hospital's IT governance posture.",
      badge: "Institution-controlled",
      color: "#28D7B5",
    },
    {
      icon: "eye",
      title: "No patient imagery",
      body: "Camera faces the monitor display — not the patient. No patient biometrics, no facial data, no imagery captured or transmitted. Standard monitoring consent applies throughout.",
      badge: "Verified",
      color: "#4F6BFF",
    },
  ],
};

export const monitoringInPractice: {
  eyebrow: string;
  heading: string;
  sub: string;
  scenarios: {
    label: string;
    title: string;
    body: string;
    metrics: { label: string; value: string }[];
    color: string;
  }[];
} = {
  eyebrow: "Monitoring in Practice",
  heading: "How ASTA operates across your ward types.",
  sub: "ASTA adapts to the clinical demands and patient acuity of each ward type — same monitor-reading and physiological reasoning engine, configured for each deployment.",
  scenarios: [
    {
      label: "ICU",
      title: "Intensive care: continuous vigilance at every bed.",
      body: "Continuous vital extraction and physiological trajectory monitoring across all ICU beds — surfacing deterioration signals before threshold breaches, with escalation routing direct to the attending team.",
      metrics: [
        { label: "Monitoring cadence", value: "Continuous" },
        { label: "Signal latency",     value: "<2s" },
        { label: "Alert routing",      value: "Attending + nurse" },
      ],
      color: "#4F6BFF",
    },
    {
      label: "General Ward",
      title: "General ward: broad coverage without staffing overhead.",
      body: "ASTA monitors every bedside monitor continuously — allowing nursing teams to maintain observational coverage across more beds without increasing rounds frequency or adding equipment.",
      metrics: [
        { label: "Beds per ward",   value: "Up to 30+" },
        { label: "Coverage",        value: "100% monitored" },
        { label: "Alert routing",   value: "Role-aware" },
      ],
      color: "#28D7B5",
    },
    {
      label: "Post-Op",
      title: "Post-operative: early deterioration, structured response.",
      body: "Post-op patients face a high-risk observation window. ASTA's trajectory-based reasoning catches gradual deterioration early — before single-threshold alerts fire — with clinical context already attached.",
      metrics: [
        { label: "Deterioration detection", value: "Trajectory-based" },
        { label: "Escalation context",      value: "PPLM-linked" },
        { label: "Audit capture",           value: "Automatic" },
      ],
      color: "#7C5CFF",
    },
    {
      label: "High-Dependency",
      title: "High-dependency: structured oversight for complex patients.",
      body: "HDU patients require structured monitoring and documented escalation paths. ASTA provides continuous observation, PPLM-driven reasoning, and a full governance trail — compliant with HDU oversight requirements.",
      metrics: [
        { label: "Vital parameters",  value: "HR, SpO₂, BP, RR" },
        { label: "PPLM reasoning",    value: "Per-bed continuous" },
        { label: "Governance trail",  value: "Full audit capture" },
      ],
      color: "#49C6FF",
    },
  ],
};

export const solutionsCta = {
  eyebrow: "Deploy ASTA in your hospital",
  heading: "See ASTA running on your ward monitors.",
  sub: "A focused 30-minute session with our clinical and engineering team — covering monitor compatibility, ward workflow fit, and deployment requirements for your unit.",
  primaryCta:   { label: "Request a walkthrough", href: ROUTES.demo },
  secondaryCta: { label: "Talk to our team",       href: ROUTES.contact },
};
