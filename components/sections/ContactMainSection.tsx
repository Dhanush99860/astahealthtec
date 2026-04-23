import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ContactInquiryForm } from "@/components/sections/ContactInquiryForm";
import { contactForm, contactMain } from "@/content/contact";

export function ContactMainSection() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-canvas pb-24 pt-8 md:pb-32 md:pt-10 dark:bg-[#060816]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,22,40,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(10,22,40,0.03) 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute inset-0 hidden bg-grid-fine bg-[length:44px_44px] opacity-55 dark:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent dark:via-brand-400/25" />
        <div className="absolute left-[10%] top-1/3 h-[320px] w-[320px] rounded-full bg-brand-500/[0.04] blur-[110px] dark:bg-brand-500/[0.06]" />
        <div className="absolute right-[8%] bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/[0.04] blur-[110px] dark:bg-cyan-400/[0.05]" />
      </div>

      <Container className="relative">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div className="space-y-5 xl:sticky xl:top-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#040810] p-6 md:p-7">
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute -left-14 top-0 h-44 w-44 rounded-full bg-brand-500/[0.12] blur-[90px]" />
                  <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-violet-500/[0.07] blur-[80px]" />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(to right,transparent,rgba(79,107,255,0.72),rgba(73,198,255,0.38),transparent)",
                  }}
                />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                    <Icon name="workflow" className="h-3 w-3 text-cyan-400" />
                    {contactMain.eyebrow}
                  </div>

                  <h2 className="mt-5 max-w-xl text-balance text-h2 font-semibold tracking-[-0.04em] text-frost">
                    {contactMain.heading}
                  </h2>
                  <p className="mt-4 max-w-xl text-body leading-relaxed text-frost-muted">
                    {contactMain.sub}
                  </p>

                  <div className="mt-6">
                    <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                      {contactMain.channelsTitle}
                    </div>
                    <div className="mt-3 grid gap-3">
                      {contactMain.channels.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-colors duration-200 hover:bg-white/[0.06]"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-300 ring-1 ring-white/10">
                            <Icon name={item.icon} className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/38">
                              {item.label}
                            </div>
                            <div className="mt-1 text-[1rem] font-semibold tracking-[-0.02em] text-frost transition-colors group-hover:text-cyan-200">
                              {item.value}
                            </div>
                            <p className="mt-1.5 text-[0.78rem] leading-relaxed text-white/56">
                              {item.note}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#16A34A_0%,#22C55E_55%,#34D399_100%)] p-5 text-white shadow-[0_24px_60px_-28px_rgba(22,163,74,0.55)]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                        <Icon name="message-circle" className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[1rem] font-semibold tracking-[-0.02em]">
                          {contactMain.whatsapp.title}
                        </h3>
                        <p className="mt-2 text-[0.82rem] leading-relaxed text-white/88">
                          {contactMain.whatsapp.body}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      {contactMain.whatsapp.bullets.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-[0.78rem] text-white/90">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-white" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <a
                      href={contactMain.whatsapp.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl bg-white px-4 text-[0.92rem] font-semibold text-[#0A1628] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {contactMain.whatsapp.ctaLabel}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(10,22,40,0.18)] dark:border-white/[0.08] dark:bg-[#040810] dark:shadow-none">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 dark:bg-white/[0.06] dark:text-cyan-300 dark:ring-white/[0.08]">
                    <Icon name="map-pin" className="h-4 w-4" />
                  </div>
                  <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink-subtle dark:text-white/30">
                    {contactMain.presence.eyebrow}
                  </div>
                </div>

                <h3 className="mt-4 text-[1.1rem] font-semibold tracking-[-0.03em] text-ink dark:text-frost">
                  {contactMain.presence.title}
                </h3>
                <p className="mt-3 text-[0.84rem] leading-relaxed text-ink-muted dark:text-frost-muted">
                  {contactMain.presence.body}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {contactMain.presence.stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/[0.08] dark:bg-white/[0.04]"
                    >
                      <div className="font-mono text-[1.4rem] font-bold tracking-[-0.04em] text-brand-600 dark:text-cyan-300">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[0.74rem] leading-snug text-ink-muted dark:text-frost-subtle">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3">
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-subtle dark:text-white/34">
                      States
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {contactMain.presence.states.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.74rem] font-medium text-ink-muted dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-frost-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-subtle dark:text-white/34">
                      Cities
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {contactMain.presence.cities.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.74rem] font-medium text-ink-muted dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-frost-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[0.76rem] leading-relaxed text-ink-subtle dark:text-frost-subtle">
                  {contactMain.presence.note}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_32px_90px_-42px_rgba(10,22,40,0.24)] md:p-7 dark:border-white/[0.08] dark:bg-[#040810] dark:shadow-none">
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-500/[0.07] blur-[95px] dark:bg-brand-500/[0.10]" />
                <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-cyan-400/[0.06] blur-[80px] dark:bg-cyan-400/[0.08]" />
              </div>
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right,transparent,rgba(79,107,255,0.72),rgba(124,92,255,0.4),transparent)",
                }}
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-cyan-300/80">
                  <Icon name="spark" className="h-3 w-3 text-brand-500 dark:text-cyan-400" />
                  {contactForm.eyebrow}
                </div>

                <h2 className="mt-5 max-w-2xl text-balance text-h2 font-semibold tracking-[-0.04em] text-ink md:text-h2-lg dark:text-frost">
                  {contactForm.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-body-lg leading-relaxed text-ink-muted dark:text-frost-muted">
                  {contactForm.sub}
                </p>

                <ContactInquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
