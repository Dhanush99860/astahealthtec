import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { platformValidation } from "@/content/platform";

export function PlatformValidation() {
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
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/[0.03] blur-[130px] dark:bg-violet-500/[0.05]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
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
            <p className="mt-4 text-body-lg text-pretty text-ink-muted dark:text-frost-muted">
              {platformValidation.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {platformValidation.metrics.map((metric) => (
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
                  className="font-mono text-[1.65rem] font-bold leading-none tracking-[-0.04em]"
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
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810]">
            <div className="border-b border-white/[0.06] px-6 py-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/32">
                Technical evaluation summary
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06] text-left">
                    <th className="px-6 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                      Dimension
                    </th>
                    <th className="px-6 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                      Public proof
                    </th>
                    <th className="px-6 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                      Why it matters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {platformValidation.rows.map((row) => (
                    <tr key={row.dimension} className="border-b border-white/[0.04] last:border-b-0">
                      <td className="px-6 py-4 text-[0.82rem] font-semibold text-frost">{row.dimension}</td>
                      <td className="px-6 py-4 text-[0.78rem] leading-relaxed text-white/48">{row.proof}</td>
                      <td className="px-6 py-4 text-[0.78rem] leading-relaxed text-white/42">
                        {row.implication}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-white/[0.06] px-6 py-4 text-[0.76rem] leading-relaxed text-white/42">
              {platformValidation.footer}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
