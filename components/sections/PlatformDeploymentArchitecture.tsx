import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { platformDeploymentArchitecture } from "@/content/platform";

export function PlatformDeploymentArchitecture() {
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
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[680px] -translate-x-1/2 rounded-full bg-brand-500/[0.03] blur-[150px] dark:bg-brand-500/[0.05]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
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
            <p className="mt-4 text-body-lg text-pretty text-ink-muted dark:text-frost-muted">
              {platformDeploymentArchitecture.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810] p-6 md:p-7">
            <div className="grid gap-4 xl:grid-cols-4">
              {platformDeploymentArchitecture.stages.map((stage) => (
                <div
                  key={stage.title}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(to right,transparent,${stage.color}60,${stage.colorTo}35,transparent)`,
                    }}
                  />
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                    style={{
                      background: `linear-gradient(135deg,${stage.color},${stage.colorTo})`,
                      boxShadow: `0 0 18px ${stage.color}25`,
                    }}
                  >
                    <Icon name={stage.icon} className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-4 text-[0.9rem] font-semibold tracking-[-0.02em] text-frost">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-[0.76rem] leading-relaxed text-white/44">{stage.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-3 text-[0.76rem] leading-relaxed text-white/52">
              {platformDeploymentArchitecture.footer}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {platformDeploymentArchitecture.principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/[0.07] dark:bg-white/[0.02]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-ink dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-frost">
                  <Icon name={principle.icon} className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-4 text-[0.9rem] font-semibold tracking-[-0.02em] text-ink dark:text-frost">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-ink-muted dark:text-frost-subtle">
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
