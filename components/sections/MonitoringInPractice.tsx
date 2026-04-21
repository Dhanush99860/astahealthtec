import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { monitoringInPractice } from "@/content/solutions";

export function MonitoringInPractice() {
  return (
    <section
      id="monitoring-in-practice"
      className="relative overflow-hidden bg-canvas py-24 md:py-32 dark:bg-[#060816]"
    >
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
        <div className="absolute inset-0 hidden dark:block bg-grid-fine bg-[length:44px_44px] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent dark:via-brand-400/25" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-white/[0.04]" />
        <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/[0.03] blur-[130px] dark:bg-violet-500/[0.05]" />
        <div className="absolute right-0 bottom-1/4 h-[350px] w-[350px] rounded-full bg-cyan-400/[0.02] blur-[110px] dark:bg-cyan-400/[0.04]" />
      </div>

      <Container className="relative">

        {/* ══ HEADER ══ */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {monitoringInPractice.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-h2 md:text-h2-lg font-semibold tracking-[-0.04em] text-balance text-ink dark:text-frost">
              {monitoringInPractice.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-body-lg text-pretty text-ink-muted dark:text-frost-muted">
              {monitoringInPractice.sub}
            </p>
          </Reveal>
        </div>

        {/* ══ SCENARIO CARDS ══ */}
        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {monitoringInPractice.scenarios.map((scenario) => (
              <div
                key={scenario.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 transition-shadow duration-300 hover:shadow-md dark:border-white/[0.07] dark:bg-white/[0.02] dark:hover:bg-white/[0.035]"
              >
                {/* Top accent line */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(to right,${scenario.color},${scenario.color}55,transparent)`,
                  }}
                />
                {/* Corner hover glow */}
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{ background: scenario.color + "18" }}
                />

                {/* Label pill */}
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em]"
                    style={{
                      background: scenario.color + "14",
                      color: scenario.color,
                    }}
                  >
                    {scenario.label}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(to right,${scenario.color}30,transparent)`,
                    }}
                  />
                </div>

                {/* Title + body */}
                <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.03em] text-ink dark:text-frost">
                  {scenario.title}
                </h3>
                <p className="mt-3 text-[0.82rem] leading-relaxed text-ink-muted dark:text-frost-subtle">
                  {scenario.body}
                </p>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 divide-x divide-slate-100 rounded-xl border border-slate-100 dark:divide-white/[0.06] dark:border-white/[0.06]">
                  {scenario.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1 px-3 py-3 text-center">
                      <span
                        className="font-mono text-[0.78rem] font-bold leading-none"
                        style={{ color: scenario.color }}
                      >
                        {m.value}
                      </span>
                      <span className="text-[0.65rem] leading-tight text-ink-muted dark:text-frost-subtle">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
