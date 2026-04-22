import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { platformVisionLayer } from "@/content/platform";

function CVPanel() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#040810] px-7 py-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-8 top-0 h-48 w-48 rounded-full bg-brand-500/[0.10] blur-[70px]" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-teal-400/[0.07] blur-[60px]" />
      </div>

      {/* Panel label */}
      <div className="relative mb-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
          ASTA · CV Monitor Reading
        </span>
      </div>

      {/* Monitor visual */}
      <div className="relative mx-auto mb-5 w-full" style={{ maxWidth: 340 }}>
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#030712]">
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]" />
            <span className="ml-2 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-white/25">PATIENT MONITOR</span>
            <span className="ml-auto flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-1.5 py-0.5 font-mono text-[0.46rem] font-bold text-emerald-400">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
              READING
            </span>
          </div>
          <div className="p-4">
            <svg viewBox="0 0 220 96" width="100%" className="block">
              <rect x="0" y="0" width="110" height="96" rx="3" fill="#040f1e" />
              {/* ECG waveform */}
              <polyline
                points="5,48 17,48 20,32 24,58 28,48 41,48 44,32 48,58 52,48 68,48 71,32 75,58 79,48 105,48"
                fill="none" stroke="#4F6BFF" strokeWidth="1.3" strokeOpacity="0.9"
              />
              {/* SpO2 curve */}
              <path
                d="M5,72 C14,67 24,77 34,72 C44,67 54,77 64,72 C74,67 84,77 94,72 C101,69 105,71 105,72"
                fill="none" stroke="#28D7B5" strokeWidth="1.1" strokeOpacity="0.78"
              />
              <line x1="0" y1="48" x2="110" y2="48" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.05" />
              <line x1="0" y1="72" x2="110" y2="72" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.05" />
              <circle cx="9" cy="9" r="3" fill="#28D7B5" opacity="0.9" />
              <text x="16" y="12" fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.28" letterSpacing="1">LIVE</text>
              <line x1="112" y1="0" x2="112" y2="96" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.06" />
              {/* HR */}
              <text x="119" y="26" fontSize="15" fontFamily="monospace" fontWeight="bold" fill="#4F6BFF" opacity="0.92">72</text>
              <text x="117" y="34" fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.30">HR  bpm</text>
              {/* SpO2 */}
              <text x="170" y="26" fontSize="15" fontFamily="monospace" fontWeight="bold" fill="#28D7B5" opacity="0.90">98</text>
              <text x="165" y="34" fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.30">SpO₂  %</text>
              {/* BP */}
              <text x="115" y="65" fontSize="12" fontFamily="monospace" fontWeight="bold" fill="#49C6FF" opacity="0.88">120/80</text>
              <text x="117" y="73" fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.30">BP  mmHg</text>
              {/* RR */}
              <text x="176" y="65" fontSize="15" fontFamily="monospace" fontWeight="bold" fill="#7C5CFF" opacity="0.88">16</text>
              <text x="170" y="73" fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.30">RR  /min</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Pipeline steps */}
      <div className="relative mb-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px flex-1 bg-white/[0.05]" />
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/22">Reading pipeline</span>
          <span className="h-px flex-1 bg-white/[0.05]" />
        </div>
        <div className="space-y-3">
          {platformVisionLayer.pipeline.map((step, i) => (
            <div key={step.title} className="flex items-start gap-3">
              <span
                className="flex h-5 w-5 flex-none items-center justify-center rounded-md font-mono text-[0.56rem] font-bold"
                style={{ background: "#4F6BFF14", color: "#4F6BFF" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <span className="text-[0.82rem] font-semibold text-frost">{step.title} · </span>
                <span className="text-[0.73rem] text-white/38">{step.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics 2×2 */}
      <div className="relative mt-auto grid grid-cols-2 gap-2.5">
        {platformVisionLayer.metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
            <div className="font-mono text-[1.1rem] font-bold leading-none" style={{ color: m.color }}>
              {m.value}
            </div>
            <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/42">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PlatformComputerVision() {
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
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.03] blur-[130px] dark:bg-cyan-400/[0.05]" />
      </div>

      <Container className="relative">

        {/* ══ HEADER ══ */}
        <div className="mx-auto max-w-2xl text-center">
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
            <p className="mt-4 text-pretty text-body-lg text-ink-muted dark:text-frost-muted">
              {platformVisionLayer.sub}
            </p>
          </Reveal>
        </div>

        {/* ══ FEATURED SPLIT ══ */}
        <Reveal delay={0.14}>
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-brand-400/[0.14]">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 z-10 h-px"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(79,107,255,0.65),rgba(73,198,255,0.45),transparent)",
              }}
            />
            <div className="grid lg:grid-cols-2">

              {/* Left — numbered points */}
              <div className="flex flex-col justify-center bg-white p-8 dark:bg-white/[0.02] lg:p-10">
                <div className="divide-y divide-slate-100/80 dark:divide-white/[0.05]">
                  {platformVisionLayer.points.map((point, i) => (
                    <div key={point.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                      <span
                        className="flex h-8 w-8 flex-none items-center justify-center rounded-lg font-mono text-[0.68rem] font-bold"
                        style={{ background: "#4F6BFF14", color: "#4F6BFF" }}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-[0.96rem] font-semibold tracking-[-0.02em] text-ink dark:text-frost">
                          {point.title}
                        </h3>
                        <p className="mt-1.5 text-[0.80rem] leading-relaxed text-ink-muted dark:text-frost-subtle">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-slate-100/80 pt-5 text-[0.76rem] leading-relaxed text-ink-muted dark:border-white/[0.05] dark:text-frost-subtle">
                  {platformVisionLayer.footer}
                </p>
              </div>

              {/* Right — CV pipeline visual */}
              <CVPanel />
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
