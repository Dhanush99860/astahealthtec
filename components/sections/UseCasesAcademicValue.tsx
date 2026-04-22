import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { teachingHospitalValue } from "@/content/use-cases";

export function UseCasesAcademicValue() {
  return (
    <section
      id="teaching-hospital-value"
      className="relative overflow-hidden bg-[#060816] py-24 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-[length:44px_44px] opacity-50" />
        <div className="absolute left-[12%] top-1/3 h-[360px] w-[360px] rounded-full bg-violet-500/[0.08] blur-[120px]" />
        <div className="absolute right-[12%] bottom-1/4 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.06] blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#040810]">
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-16 top-0 h-60 w-60 rounded-full bg-brand-500/[0.12] blur-[100px]" />
              <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-violet-500/[0.10] blur-[90px]" />
            </div>
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(79,107,255,0.72),rgba(73,198,255,0.45),transparent)",
              }}
            />

            <div className="relative grid gap-10 px-7 py-8 md:px-10 md:py-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                  <Icon name="layers" className="h-3 w-3 text-cyan-400" />
                  {teachingHospitalValue.eyebrow}
                </div>

                <h2 className="mt-6 max-w-2xl text-balance text-h2 font-semibold tracking-[-0.045em] text-frost md:text-h2-lg">
                  {teachingHospitalValue.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-body-lg leading-relaxed text-frost-muted">
                  {teachingHospitalValue.sub}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {teachingHospitalValue.audiences.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[0.72rem] font-medium text-white/68"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 md:p-5">
                  <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                    Value path
                  </div>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-white/58">
                    ASTA can start as live monitoring and then extend into protocol review,
                    academic training, publication workflows, and measurable patient-safety work.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {teachingHospitalValue.pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-px"
                      style={{
                        background: `linear-gradient(to right,transparent,${pillar.color}85,transparent)`,
                      }}
                    />
                    <span
                      className="inline-flex rounded-full px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                      style={{ background: pillar.color + "14", color: pillar.color }}
                    >
                      {pillar.stat}
                    </span>
                    <h3 className="mt-4 text-[1rem] font-semibold leading-snug tracking-[-0.03em] text-frost">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-[0.8rem] leading-relaxed text-white/58">
                      {pillar.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative border-t border-white/[0.06] px-7 py-6 md:px-10">
              <div className="grid gap-3 lg:grid-cols-4">
                {teachingHospitalValue.pathway.map((step) => (
                  <article key={step.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5">
                    <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/30">
                      {step.title}
                    </div>
                    <p className="mt-2 text-[0.76rem] leading-relaxed text-white/56">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
