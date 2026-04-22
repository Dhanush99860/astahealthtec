import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutAdvisoryBoard } from "@/content/about";
import { AboutPersonCard } from "@/components/sections/AboutPersonCard";

export function AboutAdvisoryBoard() {
  return (
    <section
      id="advisory-board"
      className="relative overflow-hidden bg-canvas py-24 md:py-32 dark:bg-[#060816]"
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-white/[0.05]" />
        <div className="absolute left-1/2 top-1/4 h-[540px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/[0.03] blur-[160px] dark:bg-brand-500/[0.06]" />
        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/[0.03] blur-[120px] dark:bg-violet-500/[0.05]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={aboutAdvisoryBoard.eyebrow}
          title={aboutAdvisoryBoard.heading}
          sub={aboutAdvisoryBoard.sub}
          align="center"
          maxWidth="max-w-3xl"
        />

        <Reveal delay={0.12}>
          <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-white/[0.08] bg-[#040810] px-5 py-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                  Why the advisory board matters
                </div>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/60">
                  {aboutAdvisoryBoard.supportNote}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {aboutAdvisoryBoard.lenses.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[0.72rem] font-medium text-white/68"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-6 max-w-6xl rounded-[32px] border border-white/[0.08] bg-[#040810] p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {aboutAdvisoryBoard.members.map((member, index) => (
                <Reveal key={member.name} delay={0.22 + index * 0.03}>
                  <AboutPersonCard
                    name={member.name}
                    initials={member.initials}
                    title={member.title}
                    badge={member.badge}
                    headline={member.headline}
                    body={member.body}
                    footerLabel="How they strengthen ASTA"
                    footerBody={member.contribution}
                    accent={member.accent}
                    accentTo={member.accentTo}
                    variant="expert"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
