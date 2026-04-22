import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { platformReasoningLayer } from "@/content/platform";

const PILLAR_NUMS = ["01", "02", "03", "04"];

export function PlatformReasoningLayer() {
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
        <div className="absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/[0.03] blur-[130px] dark:bg-violet-500/[0.05]" />
        <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-500/[0.02] blur-[110px] dark:bg-brand-500/[0.04]" />
      </div>

      <Container className="relative">

        {/* ══ HEADER ══ */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {platformReasoningLayer.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-h2 font-semibold tracking-[-0.04em] text-ink dark:text-frost md:text-h2-lg">
              {platformReasoningLayer.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-body-lg text-ink-muted dark:text-frost-muted">
              {platformReasoningLayer.sub}
            </p>
          </Reveal>
        </div>

        {/* ══ MAIN GRID ══ */}
        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left — 4 pillar cards 2×2 */}
            <div className="grid gap-4 sm:grid-cols-2">
              {platformReasoningLayer.pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810] p-7"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(to right,${pillar.color}55,${pillar.color}20,transparent)`,
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl"
                    style={{ background: pillar.color + "14" }}
                  />
                  <span
                    className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg font-mono text-[0.7rem] font-bold"
                    style={{ background: pillar.color + "14", color: pillar.color }}
                  >
                    {PILLAR_NUMS[i]}
                  </span>
                  <h3 className="text-[1rem] font-semibold tracking-[-0.02em] text-frost">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/48">{pillar.body}</p>
                </div>
              ))}
            </div>

            {/* Right — comparison panel */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810] p-7">
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-8 top-0 h-44 w-44 rounded-full bg-brand-500/[0.10] blur-[80px]" />
                <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-violet-500/[0.06] blur-[70px]" />
              </div>
              <div className="relative">
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/32">
                    Why this changes the output
                  </span>
                </div>
                <div className="space-y-3">
                  {platformReasoningLayer.comparisons.map((row) => (
                    <div
                      key={row.label}
                      className={`rounded-xl border px-5 py-4 ${
                        row.highlight
                          ? "border-brand-400/25 bg-brand-500/[0.12]"
                          : "border-white/[0.06] bg-white/[0.03]"
                      }`}
                    >
                      <div
                        className={`text-[0.82rem] font-semibold tracking-[-0.01em] ${
                          row.highlight ? "text-brand-300" : "text-white/58"
                        }`}
                      >
                        {row.label}
                      </div>
                      <p
                        className={`mt-2 text-[0.78rem] leading-relaxed ${
                          row.highlight ? "text-white/65" : "text-white/40"
                        }`}
                      >
                        {row.body}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-3 text-[0.76rem] leading-relaxed text-white/52">
                  {platformReasoningLayer.footer}
                </div>
              </div>
            </div>

          </div>
        </Reveal>

      </Container>
    </section>
  );
}
