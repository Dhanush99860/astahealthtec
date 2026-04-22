import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { contactForm, contactMain } from "@/content/contact";
import { ContactInquiryForm } from "@/components/sections/ContactInquiryForm";

export function ContactMainSection() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-canvas py-20 md:py-24 dark:bg-[#060816]"
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
        <div className="absolute inset-0 hidden bg-grid-fine bg-[length:44px_44px] opacity-60 dark:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent dark:via-brand-400/25" />
        <div className="absolute left-[10%] top-1/3 h-[300px] w-[300px] rounded-full bg-brand-500/[0.04] blur-[110px] dark:bg-brand-500/[0.06]" />
        <div className="absolute right-[8%] bottom-0 h-[280px] w-[280px] rounded-full bg-cyan-400/[0.04] blur-[100px] dark:bg-cyan-400/[0.05]" />
      </div>

      <Container className="relative">
        <div className="grid gap-6 xl:grid-cols-[0.84fr_1.16fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#040810] p-6 md:p-7">
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-14 top-0 h-40 w-40 rounded-full bg-brand-500/[0.12] blur-[90px]" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-violet-500/[0.08] blur-[80px]" />
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

                <h2 className="mt-5 max-w-xl text-balance text-h2 font-semibold tracking-[-0.04em] text-frost md:text-h2-lg">
                  {contactMain.heading}
                </h2>
                <p className="mt-4 max-w-xl text-body-lg leading-relaxed text-frost-muted">
                  {contactMain.sub}
                </p>

                <div className="mt-8 rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5">
                  <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                    {contactMain.panelTitle}
                  </div>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-white/62">
                    {contactMain.panelBody}
                  </p>

                  <div className="mt-5 grid gap-4">
                    {contactMain.helpItems.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-cyan-300 ring-1 ring-white/10">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-[0.96rem] font-semibold tracking-[-0.02em] text-frost">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[0.8rem] leading-relaxed text-white/58">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {contactMain.supportTags.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[0.72rem] font-medium text-white/66"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#040810] p-6 md:p-7">
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-500/[0.08] blur-[95px]" />
                <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-cyan-400/[0.06] blur-[80px]" />
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
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                  <Icon name="spark" className="h-3 w-3 text-cyan-400" />
                  {contactForm.eyebrow}
                </div>

                <h2 className="mt-5 max-w-2xl text-balance text-h2 font-semibold tracking-[-0.04em] text-frost md:text-h2-lg">
                  {contactForm.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-body-lg leading-relaxed text-frost-muted">
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
