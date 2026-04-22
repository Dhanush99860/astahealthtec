import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { platformStack } from "@/content/platform";

export function PlatformIntelligenceStack() {
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-cyan-400/10" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/[0.03] blur-[150px] dark:bg-brand-500/[0.06]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {platformStack.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-h2 font-semibold tracking-[-0.04em] text-ink dark:text-frost md:text-h2-lg">
              {platformStack.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-body-lg text-pretty text-ink-muted dark:text-frost-muted">
              {platformStack.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {platformStack.layers.map((layer, index) => (
              <div
                key={layer.tag}
                className={`group relative overflow-hidden rounded-2xl border ${
                  index === 0
                    ? "border-cyan-400/12 bg-[#050914] shadow-[0_0_0_1px_rgba(73,198,255,0.04)]"
                    : "border-white/[0.07] bg-[#040810]"
                }`}
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="absolute -left-10 -top-10 h-40 w-40 rounded-full blur-[80px]"
                    style={{ background: layer.color + "18" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 h-32 w-32 rounded-full blur-[70px]"
                    style={{ background: layer.colorTo + "10" }}
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right,transparent,${layer.color}60,${layer.colorTo}40,transparent)`,
                  }}
                />

                <div className="relative flex flex-col gap-5 p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <div
                      className="flex h-11 w-11 flex-none items-center justify-center rounded-xl text-white"
                      style={{
                        background: `linear-gradient(135deg,${layer.color},${layer.colorTo})`,
                        boxShadow: `0 4px ${index === 0 ? "20px" : "16px"} ${layer.color}35`,
                      }}
                    >
                      <Icon name={layer.icon} className="h-5 w-5" />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                      style={{ background: layer.color + "14", color: layer.color }}
                    >
                      {layer.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[1.06rem] font-semibold leading-snug tracking-[-0.03em] text-frost">
                      {layer.title}
                    </h3>
                    <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/50">
                      {layer.body}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {layer.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          className="mt-1 flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full"
                          style={{ background: layer.color + "20" }}
                        >
                          <span className="h-1 w-1 rounded-full" style={{ background: layer.color }} />
                        </span>
                        <span className="text-[0.78rem] leading-relaxed text-white/45">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mt-5 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.015] px-5 py-3.5 dark:border-white/[0.06]">
            <div className="flex items-center gap-3 text-[0.78rem] text-ink-muted dark:text-frost-subtle">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-2.5 py-0.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-cyan-300">
                Clinical loop
              </span>
              <span>{platformStack.footer}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
