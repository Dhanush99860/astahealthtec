import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { dashboardWalkthrough } from "@/content/solutions";

const STATUS_COLOR = {
  ok: { dot: "#28D7B5", label: "OK", bg: "bg-emerald-500/10 text-emerald-400" },
  warn: { dot: "#FBBF24", label: "WATCH", bg: "bg-amber-500/10 text-amber-400" },
  alert: { dot: "#EF4444", label: "ALERT", bg: "bg-red-500/10 text-red-400" },
} as const;

export function DashboardWalkthrough() {
  const { wardStats, bedRows, alertQueue, auditEntries } = dashboardWalkthrough;

  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-canvas py-24 md:py-32 dark:bg-[#060816]"
    >
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
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.03] blur-[150px] dark:bg-cyan-400/[0.05]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-cyan-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-cyan-400" />
              {dashboardWalkthrough.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-h2 font-semibold tracking-[-0.04em] text-ink dark:text-frost md:text-h2-lg">
              {dashboardWalkthrough.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-body-lg text-pretty text-ink-muted dark:text-frost-muted">
              {dashboardWalkthrough.sub}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-brand-400/[0.10] bg-[#040810] shadow-[0_28px_90px_rgba(3,7,18,0.42)]">
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-brand-500/[0.10] blur-[90px]" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-teal-400/[0.07] blur-[80px]" />
              <div className="absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-violet-500/[0.05] blur-[70px]" />
            </div>

            <div
              aria-hidden
              className="absolute inset-x-[5%] top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(79,107,255,0.45),rgba(73,198,255,0.24),transparent)",
              }}
            />

            <div className="relative flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="mx-3 h-4 w-px bg-white/[0.10]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                  ASTA - Ward Command View - Ward 3 - Nursing / Clinical / Ops
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.10] px-2.5 py-1 font-mono text-[9px] font-bold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                LIVE
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-white/[0.05] border-b border-white/[0.05] sm:grid-cols-4">
              {wardStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-4 text-center">
                  <span
                    className="font-mono text-[1.35rem] font-bold leading-none"
                    style={{
                      background: `linear-gradient(135deg,${stat.color},${stat.color}bb)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[0.68rem] text-white/35">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.9fr_3.1fr]">
              <div className="relative border-b border-white/[0.05] lg:border-b-0 lg:border-r">
                <div className="border-b border-white/[0.04] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.20em] text-white/30">
                      Live bed view - 6 of 24 shown
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-[48px_1fr_1fr_1fr_52px] gap-1 border-b border-white/[0.04] px-5 py-2">
                  {["Bed", "HR", "SpO2", "BP", "Status"].map((heading) => (
                    <span
                      key={heading}
                      className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/20"
                    >
                      {heading}
                    </span>
                  ))}
                </div>

                <div className="font-mono">
                  {bedRows.map((row) => {
                    const status = STATUS_COLOR[row.status];

                    return (
                      <div
                        key={row.bed}
                        className="grid grid-cols-[48px_1fr_1fr_1fr_52px] items-center gap-1 border-b border-white/[0.03] px-5 py-2.5 transition-colors hover:bg-white/[0.025]"
                      >
                        <span className="text-[10px] font-bold text-white/60">{row.bed}</span>
                        <span className="text-[10px] text-white/50">{row.hr}</span>
                        <span className="text-[10px] text-white/50">{row.spo2}</span>
                        <span className="text-[10px] text-white/50">{row.bp}</span>
                        <span
                          className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[8px] font-bold ${status.bg}`}
                        >
                          <span className="h-1 w-1 rounded-full" style={{ background: status.dot }} />
                          {status.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="px-5 py-3 font-mono text-[8px] text-white/20">
                  18 additional beds - continuous monitoring active
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex-1 border-b border-white/[0.05]">
                  <div className="border-b border-white/[0.04] px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.20em] text-white/30">
                          Clinical escalation queue
                        </span>
                      </div>
                      <span className="rounded-full border border-amber-500/25 bg-amber-500/[0.10] px-2 py-0.5 font-mono text-[8px] font-bold text-amber-400">
                        3 active
                      </span>
                    </div>
                  </div>

                  <div className="space-y-0 font-mono">
                    {alertQueue.map((alert) => (
                      <div
                        key={alert.time + alert.bed}
                        className="flex items-start gap-3 border-b border-white/[0.03] px-5 py-3 transition-colors hover:bg-white/[0.02]"
                      >
                        <span className="w-14 flex-none text-right text-[9px] text-white/22">
                          {alert.time}
                        </span>
                        <span
                          className={`flex-none rounded px-1.5 py-0.5 text-[8px] font-bold uppercase ${
                            alert.priority === "high"
                              ? "bg-red-500/15 text-red-400"
                              : "bg-amber-500/12 text-amber-400"
                          }`}
                        >
                          {alert.priority === "high" ? "HIGH" : "MED"}
                        </span>
                        <span className="w-10 flex-none rounded bg-white/[0.06] px-1.5 py-0.5 text-center text-[9px] font-bold text-white/50">
                          {alert.bed}
                        </span>
                        <span className="min-w-0 flex-1 text-[10px] leading-5 text-white/45">
                          {alert.msg}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="border-b border-white/[0.04] px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.20em] text-white/30">
                        Governance audit trail
                      </span>
                    </div>
                  </div>

                  <div className="space-y-0 font-mono">
                    {auditEntries.map((entry) => (
                      <div
                        key={entry.time + entry.msg}
                        className="flex items-start gap-3 px-5 py-2.5 transition-colors hover:bg-white/[0.02]"
                      >
                        <span className="w-14 flex-none text-right text-[9px] text-white/22">
                          {entry.time}
                        </span>
                        <span
                          className={`flex-none rounded px-1.5 py-0.5 text-[8px] font-bold uppercase ${
                            entry.type === "ok"
                              ? "bg-emerald-500/15 text-emerald-400"
                              : "bg-brand-500/15 text-brand-400"
                          }`}
                        >
                          {entry.type === "ok" ? "OK" : "INF"}
                        </span>
                        <span className="min-w-0 flex-1 text-[10px] leading-5 text-white/40">
                          {entry.msg}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/[0.04] px-5 py-3 font-mono text-[8px] text-white/18">
                    tamper-evident - immutable - hospital-controlled retention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
