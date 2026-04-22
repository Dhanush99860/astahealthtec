import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutLeadership } from "@/content/about";
import { AboutPersonCard } from "@/components/sections/AboutPersonCard";

export function AboutLeadership() {
  const featuredMembers = aboutLeadership.members.slice(0, 2);
  const supportingMembers = aboutLeadership.members.slice(2);

  return (
    <section
      id="leadership-team"
      className="relative overflow-hidden bg-[#060816] py-24 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-[length:44px_44px] opacity-50" />
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/[0.07] blur-[160px]" />
        <div className="absolute -left-12 bottom-0 h-[360px] w-[360px] rounded-full bg-violet-500/[0.06] blur-[110px]" />
        <div className="absolute right-[8%] top-1/4 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.05] blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={aboutLeadership.eyebrow}
          title={aboutLeadership.heading}
          sub={aboutLeadership.sub}
          align="center"
          maxWidth="max-w-3xl"
        />

        <Reveal delay={0.12}>
          <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-white/[0.08] bg-[#040810] px-5 py-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                  Founding coverage
                </div>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/60">
                  {aboutLeadership.framing}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {aboutLeadership.pillars.map((item) => (
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

        <div className="mt-8 rounded-[32px] border border-white/[0.08] bg-[#040810]/40 p-4 md:p-5">
          <div className="grid gap-4">
            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              {featuredMembers.map((member, index) => (
                <Reveal key={member.name} delay={0.16 + index * 0.04}>
                  <AboutPersonCard
                    name={member.name}
                    initials={member.initials}
                    title={member.title}
                    badge={member.badge}
                    headline={member.headline}
                    body={member.body}
                    footerLabel="What they bring to ASTA"
                    footerBody={member.contribution}
                    accent={member.accent}
                    accentTo={member.accentTo}
                    variant="feature"
                  />
                </Reveal>
              ))}
            </div>

            <div className="grid gap-4 border-t border-white/[0.06] pt-4 lg:grid-cols-[0.92fr_1.08fr]">
              {supportingMembers.map((member, index) => (
                <Reveal key={member.name} delay={0.24 + index * 0.04}>
                  <AboutPersonCard
                    name={member.name}
                    initials={member.initials}
                    title={member.title}
                    badge={member.badge}
                    headline={member.headline}
                    body={member.body}
                    footerLabel="What they bring to ASTA"
                    footerBody={member.contribution}
                    accent={member.accent}
                    accentTo={member.accentTo}
                    variant="support"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
