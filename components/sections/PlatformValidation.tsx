import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { platformValidation } from "@/content/platform";

export function PlatformValidation() {
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
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/[0.03] blur-[130px] dark:bg-violet-500/[0.05]" />
        <div className="absolute -left-20 bottom-1/4 h-[350px] w-[350px] rounded-full bg-brand-500/[0.02] blur-[110px] dark:bg-brand-500/[0.04]" />
      </div>

      <Container className="relative">

        {/* ══ HEADER ══ */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {platformValidation.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-h2 font-semibold tracking-[-0.04em] text-ink dark:text-frost md:text-h2-lg">
              {platformValidation.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-body-lg text-ink-muted dark:text-frost-muted">
              {platformValidation.sub}
            </p>
          </Reveal>
        </div>

        {/* ══ 6 METRIC TILES ══ */}
        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {platformValidation.metrics.map((metric) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810] p-7"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right,${metric.color}60,${metric.color}25,transparent)`,
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full blur-2xl"
                  style={{ background: metric.color + "14" }}
                />
                <div
                  className="font-mono text-[2.4rem] font-bold leading-none tracking-[-0.04em]"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                  {metric.label}
                </div>
                <p className="mt-2 text-[0.76rem] leading-relaxed text-white/40">{metric.note}</p>
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to right,transparent,${metric.color}45,transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* ══ FOOTER NOTE ══ */}
        <Reveal delay={0.2}>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.015] px-5 py-3.5">
            <div className="flex items-center gap-3 text-[0.78rem] text-ink-muted dark:text-frost-subtle">
              <span className="rounded-full border border-brand-400/20 bg-brand-400/[0.08] px-2.5 py-0.5 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-brand-300 dark:text-cyan-300">
                Benchmark
              </span>
              <span>{platformValidation.footer}</span>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
