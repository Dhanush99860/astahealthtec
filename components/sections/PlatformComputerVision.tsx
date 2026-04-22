import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { platformVisionLayer } from "@/content/platform";

export function PlatformComputerVision() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 md:py-32 dark:bg-[#060816]">
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-white/[0.04]" />
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.03] blur-[130px] dark:bg-cyan-400/[0.05]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {platformVisionLayer.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-h2 font-semibold tracking-[-0.04em] text-ink dark:text-frost md:text-h2-lg">
              {platformVisionLayer.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-body-lg text-pretty text-ink-muted dark:text-frost-muted">
              {platformVisionLayer.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/12 bg-[#03070f] p-8 shadow-[0_0_0_1px_rgba(73,198,255,0.04)]">
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-8 top-0 h-44 w-44 rounded-full bg-brand-500/[0.12] blur-[80px]" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-[70px]" />
              </div>
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(to right,transparent,rgba(79,107,255,0.55),rgba(73,198,255,0.30),transparent)",
                }}
              />

              <div className="relative">
                <div className="space-y-5">
                  {platformVisionLayer.points.map((point) => (
                    <div key={point.title} className="border-b border-white/[0.05] pb-5 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(73,198,255,0.75)]" />
                        <div>
                          <h3 className="text-[0.94rem] font-semibold tracking-[-0.02em] text-frost">
                            {point.title}
                          </h3>
                          <p className="mt-1.5 text-[0.8rem] leading-relaxed text-white/48">
                            {point.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-3 text-[0.76rem] leading-relaxed text-white/52">
                  {platformVisionLayer.footer}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {platformVisionLayer.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810] p-5"
                  >
                    <div
                      aria-hidden
                      className="mb-4 h-px"
                      style={{
                        background: `linear-gradient(to right,${metric.color}60,transparent)`,
                      }}
                    />
                    <div
                      className="font-mono text-[1.6rem] font-bold leading-none tracking-[-0.04em]"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </div>
                    <div className="mt-2 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-white/64">
                      {metric.label}
                    </div>
                    <p className="mt-2 text-[0.74rem] leading-relaxed text-white/42">{metric.note}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810] p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/32">
                    Monitor-reading pipeline
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {platformVisionLayer.pipeline.map((step, index) => (
                    <div key={step.title} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/[0.06] font-mono text-[0.62rem] font-bold text-white/70">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-[0.86rem] font-semibold text-frost">{step.title}</h3>
                        <p className="mt-1 text-[0.76rem] leading-relaxed text-white/42">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
