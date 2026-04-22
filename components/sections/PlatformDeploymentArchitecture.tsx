import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { platformDeploymentArchitecture } from "@/content/platform";

export function PlatformDeploymentArchitecture() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 md:py-32 dark:bg-[#060816]">
      {/* ── BG ── */}
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
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[680px] -translate-x-1/2 rounded-full bg-brand-500/[0.03] blur-[150px] dark:bg-brand-500/[0.05]" />
      </div>

      <Container className="relative">

        {/* ══ HEADER ══ */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {platformDeploymentArchitecture.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-h2 font-semibold tracking-[-0.04em] text-ink dark:text-frost md:text-h2-lg">
              {platformDeploymentArchitecture.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-body-lg text-ink-muted dark:text-frost-muted">
              {platformDeploymentArchitecture.sub}
            </p>
          </Reveal>
        </div>

        {/* ══ STAGE CARDS ══ */}
        <Reveal delay={0.14}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810] p-6 md:p-8">
            {/* Glow blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-12 top-0 h-52 w-52 rounded-full bg-brand-500/[0.08] blur-[90px]" />
              <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-teal-400/[0.05] blur-[80px]" />
            </div>
            {/* Top shine */}
            <div
              aria-hidden
              className="absolute inset-x-[5%] top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(79,107,255,0.40),rgba(40,215,181,0.25),transparent)",
              }}
            />

            <div className="relative grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {platformDeploymentArchitecture.stages.map((stage) => (
                <div
                  key={stage.title}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(to right,transparent,${stage.color}60,${stage.colorTo}35,transparent)`,
                    }}
                  />
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{
                      background: `linear-gradient(135deg,${stage.color},${stage.colorTo})`,
                      boxShadow: `0 0 22px ${stage.color}28`,
                    }}
                  >
                    <Icon name={stage.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-[0.96rem] font-semibold tracking-[-0.02em] text-frost">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-[0.78rem] leading-relaxed text-white/45">{stage.body}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-5 py-3.5 text-[0.76rem] leading-relaxed text-white/50">
              {platformDeploymentArchitecture.footer}
            </div>
          </div>
        </Reveal>

        {/* ══ PRINCIPLE CARDS ══ */}
        <Reveal delay={0.2}>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {platformDeploymentArchitecture.principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-7 dark:border-white/[0.07] dark:bg-white/[0.02]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-ink dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-frost">
                  <Icon name={principle.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[0.96rem] font-semibold tracking-[-0.02em] text-ink dark:text-frost">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-[0.80rem] leading-relaxed text-ink-muted dark:text-frost-subtle">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
