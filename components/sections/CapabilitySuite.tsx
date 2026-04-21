import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { capabilitySuite } from "@/content/solutions";

export function CapabilitySuite() {
  return (
    <section
      id="capability-suite"
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-cyan-400/10" />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/[0.03] blur-[150px] dark:bg-brand-500/[0.06]" />
        <div className="absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/[0.03] blur-[120px] dark:bg-violet-500/[0.05]" />
      </div>

      <Container className="relative">

        {/* ══ HEADER ══ */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {capabilitySuite.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-h2 md:text-h2-lg font-semibold tracking-[-0.04em] text-balance text-ink dark:text-frost">
              {capabilitySuite.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-body-lg text-pretty text-ink-muted dark:text-frost-muted">
              {capabilitySuite.sub}
            </p>
          </Reveal>
        </div>

        {/* ══ MODULE CARDS ══ */}
        <Reveal delay={0.14}>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {capabilitySuite.modules.map((mod) => (
              <div
                key={mod.tag}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#040810]"
              >
                {/* Internal glow */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="absolute -left-10 -top-10 h-40 w-40 rounded-full blur-[80px]"
                    style={{ background: mod.color + "18" }}
                  />
                  <div
                    className="absolute right-0 bottom-0 h-32 w-32 rounded-full blur-[70px]"
                    style={{ background: mod.colorTo + "10" }}
                  />
                </div>
                {/* Top shine */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right,transparent,${mod.color}60,${mod.colorTo}40,transparent)`,
                  }}
                />

                <div className="relative flex flex-col gap-5 p-7">
                  {/* Tag + icon */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 flex-none items-center justify-center rounded-xl text-white"
                      style={{
                        background: `linear-gradient(135deg,${mod.color},${mod.colorTo})`,
                        boxShadow: `0 4px 16px ${mod.color}35`,
                      }}
                    >
                      <Icon name={mod.icon} className="h-5 w-5" />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                      style={{ background: mod.color + "14", color: mod.color }}
                    >
                      {mod.tag}
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-2 py-0.5 font-mono text-[8px] font-bold text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      Live
                    </span>
                  </div>

                  {/* Title + body */}
                  <div>
                    <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.03em] text-frost">
                      {mod.title}
                    </h3>
                    <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/50">
                      {mod.body}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span
                          className="mt-1 flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full"
                          style={{ background: mod.color + "20" }}
                        >
                          <span
                            className="h-1 w-1 rounded-full"
                            style={{ background: mod.color }}
                          />
                        </span>
                        <span className="text-[0.78rem] leading-relaxed text-white/45">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(to right,transparent,${mod.color}50,${mod.colorTo}35,transparent)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ══ COMING SOON BANNER ══ */}
        <Reveal delay={0.20}>
          <div className="relative mt-4 overflow-hidden rounded-xl border border-dashed border-white/[0.10] bg-white/[0.02] px-6 py-4 dark:border-white/[0.08]">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <span className="flex-none rounded-full border border-amber-500/25 bg-amber-500/[0.10] px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-amber-400">
                Regulatory
              </span>
              <span className="text-[0.82rem] text-ink-muted dark:text-frost-subtle">
                {capabilitySuite.comingSoon.label}
              </span>
              <span className="hidden sm:block sm:ml-auto text-[0.72rem] text-ink-muted/60 dark:text-white/25">
                {capabilitySuite.comingSoon.note}
              </span>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
