"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_URL,
  contactForm,
  resolveContactInquiryType,
  type ContactInquiryType,
} from "@/content/contact";

const labelClass = "text-[0.78rem] font-medium text-ink/80 dark:text-white/72";
const fieldClass =
  "mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[0.94rem] text-ink outline-none transition placeholder:text-ink-subtle focus:border-brand-300 focus:ring-4 focus:ring-brand-100/60 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-frost dark:placeholder:text-white/28 dark:focus:border-brand-400/45 dark:focus:ring-0";
const textareaClass =
  "mt-2 min-h-[148px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[0.94rem] text-ink outline-none transition placeholder:text-ink-subtle focus:border-brand-300 focus:ring-4 focus:ring-brand-100/60 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-frost dark:placeholder:text-white/28 dark:focus:border-brand-400/45 dark:focus:ring-0";

export function ContactInquiryForm() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [selectedInquiryType, setSelectedInquiryType] =
    useState<ContactInquiryType>("Other");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSelectedInquiryType(resolveContactInquiryType(params.get("intent") ?? undefined));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const workEmail = String(formData.get("workEmail") ?? "").trim();
    const institution = String(formData.get("institution") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subjectParts =
      selectedInquiryType === "Other"
        ? ["ASTA inquiry", institution || fullName]
        : ["ASTA inquiry", selectedInquiryType, institution || fullName];
    const subject = subjectParts.filter(Boolean).join(" | ");

    const detailLines = [
      selectedInquiryType !== "Other" ? `Inquiry type: ${selectedInquiryType}` : "",
      `Full name: ${fullName}`,
      `Work email: ${workEmail}`,
      `Hospital / institution: ${institution}`,
      phone ? `Phone / WhatsApp: ${phone}` : "",
    ].filter(Boolean);

    const body = [
      "Hello ASTA team,",
      "",
      "I would like to start a conversation with ASTA.",
      "",
      ...detailLines,
      "",
      "Message:",
      message,
      "",
      "Regards,",
      fullName,
    ].join("\n");

    setStatusMessage(`Opening your mail client with a drafted inquiry to ${CONTACT_EMAIL}.`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      {selectedInquiryType !== "Other" && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-[0.72rem] font-medium text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-cyan-300/80">
          <span className="text-ink-subtle dark:text-white/42">Routing focus:</span>
          <span className="font-semibold text-brand-700 dark:text-cyan-300">{selectedInquiryType}</span>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{contactForm.labels.fullName}</span>
          <input
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder={contactForm.placeholders.fullName}
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>{contactForm.labels.workEmail}</span>
          <input
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            placeholder={contactForm.placeholders.workEmail}
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>{contactForm.labels.institution}</span>
          <input
            name="institution"
            type="text"
            required
            autoComplete="organization"
            placeholder={contactForm.placeholders.institution}
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>{contactForm.labels.phone}</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={contactForm.placeholders.phone}
            className={fieldClass}
          />
        </label>

        <label className="block md:col-span-2">
          <span className={labelClass}>{contactForm.labels.message}</span>
          <textarea
            name="message"
            required
            placeholder={contactForm.placeholders.message}
            className={textareaClass}
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/[0.08] dark:bg-white/[0.03]">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 bg-transparent text-brand-500 accent-brand-500 dark:border-white/[0.20]"
        />
        <span className="text-[0.78rem] leading-relaxed text-ink-muted dark:text-white/60">
          {contactForm.consentLabel}
        </span>
      </label>

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="glow" size="lg" trailingIcon>
          {contactForm.submitLabel}
        </Button>

        <div className="flex flex-wrap items-center gap-4 text-[0.78rem]">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-ink-muted underline-offset-4 transition hover:text-ink hover:underline dark:text-frost-muted dark:hover:text-frost"
          >
            Email {CONTACT_EMAIL}
          </a>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-emerald-700 underline-offset-4 transition hover:text-emerald-600 hover:underline dark:text-emerald-300 dark:hover:text-emerald-200"
          >
            Continue on WhatsApp
          </a>
        </div>
      </div>

      <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-subtle dark:text-white/42">
        {contactForm.helper}
      </p>

      {statusMessage && (
        <p className="mt-3 text-[0.78rem] leading-relaxed text-brand-700 dark:text-cyan-300/80">
          {statusMessage}
        </p>
      )}
    </form>
  );
}
