"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import {
  contactForm,
  CONTACT_EMAIL,
  resolveContactInquiryType,
  type ContactInquiryType,
} from "@/content/contact";

const labelClass = "text-[0.78rem] font-medium text-white/72";
const fieldClass =
  "mt-2 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-[0.94rem] text-frost outline-none transition placeholder:text-white/28 focus:border-brand-400/45 focus:bg-white/[0.05]";
const textareaClass =
  "mt-2 min-h-[148px] w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-[0.94rem] text-frost outline-none transition placeholder:text-white/28 focus:border-brand-400/45 focus:bg-white/[0.05]";

export function ContactInquiryForm() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [selectedInquiryType, setSelectedInquiryType] =
    useState<ContactInquiryType>("Product walkthrough");

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
    const roleDepartment = String(formData.get("roleDepartment") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const cityState = String(formData.get("cityState") ?? "").trim();
    const inquiryType = String(formData.get("inquiryType") ?? selectedInquiryType).trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = ["ASTA inquiry", inquiryType, institution || fullName].filter(Boolean).join(" | ");

    const detailLines = [
      `Inquiry type: ${inquiryType}`,
      `Full name: ${fullName}`,
      `Work email: ${workEmail}`,
      `Hospital / institution: ${institution}`,
      roleDepartment ? `Role / department: ${roleDepartment}` : "",
      phone ? `Phone number: ${phone}` : "",
      cityState ? `City / state: ${cityState}` : "",
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

    setStatusMessage(`Opening your mail client with a drafted message to ${CONTACT_EMAIL}.`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Full name</span>
          <input
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Work email</span>
          <input
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            placeholder="name@hospital.org"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Hospital / institution</span>
          <input
            name="institution"
            type="text"
            required
            autoComplete="organization"
            placeholder="Hospital or institution name"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Role / department</span>
          <input
            name="roleDepartment"
            type="text"
            placeholder="Clinical lead, nursing, admin, research, digital health"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Phone number</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>City / state</span>
          <input
            name="cityState"
            type="text"
            autoComplete="address-level2"
            placeholder="Optional"
            className={fieldClass}
          />
        </label>

        <label className="block md:col-span-2">
          <span className={labelClass}>Inquiry type</span>
          <select
            name="inquiryType"
            required
            value={selectedInquiryType}
            onChange={(event) => setSelectedInquiryType(event.target.value as ContactInquiryType)}
            className={fieldClass}
          >
            {contactForm.inquiryTypes.map((item) => (
              <option key={item} value={item} className="bg-[#040810] text-frost">
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className={labelClass}>Message</span>
          <textarea
            name="message"
            required
            placeholder="Share the monitored setting, what you want to review, and any deployment or institutional context that matters."
            className={textareaClass}
          />
        </label>
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-white/[0.20] bg-transparent text-brand-500 accent-brand-500"
        />
        <span className="text-[0.78rem] leading-relaxed text-white/60">{contactForm.consentLabel}</span>
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="glow" size="lg" trailingIcon>
          {contactForm.submitLabel}
        </Button>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[0.78rem] text-white/48 underline-offset-4 transition hover:text-white/72 hover:underline"
        >
          Email {CONTACT_EMAIL} directly
        </a>
      </div>

      <p className="mt-4 text-[0.75rem] leading-relaxed text-white/42">{contactForm.helper}</p>

      {statusMessage && (
        <p className="mt-3 text-[0.78rem] leading-relaxed text-cyan-300/80">{statusMessage}</p>
      )}
    </form>
  );
}
