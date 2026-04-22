import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { useCaseClusters } from "@/content/use-cases";
import { cn } from "@/lib/cn";

export function UseCaseClusters() {
  return (
    <section
      id="use-case-clusters"
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
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent dark:via-white/[0.05]" />
        <div className="absolute left-1/2 top-1/4 h-[540px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/[0.03] blur-[160px] dark:bg-brand-500/[0.06]" />
        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/[0.03] blur-[120px] dark:bg-violet-500/[0.05]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={useCaseClusters.eyebrow}
          title={useCaseClusters.heading}
          sub={useCaseClusters.sub}
          align="center"
          maxWidth="max-w-3xl"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {useCaseClusters.clusters.map((cluster, clusterIndex) => (
            <Reveal
              key={cluster.title}
              delay={0.08 + clusterIndex * 0.04}
              className={cn(cluster.layout === "wide" ? "lg:col-span-12" : "lg:col-span-6")}
            >
              <article className="group relative h-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#040810]">
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="absolute -left-16 top-0 h-48 w-48 rounded-full blur-[90px]"
                    style={{ background: cluster.color + "1E" }}
                  />
                  <div
                    className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-[80px]"
                    style={{ background: cluster.colorTo + "18" }}
                  />
                </div>
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right,transparent,${cluster.color}80,${cluster.colorTo}55,transparent)`,
                  }}
                />

                <div className="relative flex h-full flex-col p-7 md:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <div
                          className="flex h-11 w-11 flex-none items-center justify-center rounded-xl text-white"
                          style={{
                            background: `linear-gradient(135deg,${cluster.color},${cluster.colorTo})`,
                            boxShadow: `0 8px 20px ${cluster.color}24`,
                          }}
                        >
                          <Icon name={cluster.icon} className="h-5 w-5" />
                        </div>
                        <span
                          className="rounded-full px-2.5 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                          style={{ background: cluster.color + "14", color: cluster.color }}
                        >
                          {cluster.label}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[1.4rem] font-semibold leading-tight tracking-[-0.04em] text-frost md:text-[1.6rem]">
                        {cluster.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-white/55">
                        {cluster.sub}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-left lg:max-w-[17rem]">
                      <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                        Operational value
                      </div>
                      <p className="mt-2 text-[0.78rem] leading-relaxed text-white/55">
                        {cluster.footer}
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "mt-8 grid gap-3",
                      cluster.layout === "wide" ? "lg:grid-cols-3" : "md:grid-cols-2",
                    )}
                  >
                    {cluster.cases.map((item) => (
                      <article
                        key={item.title}
                        className={cn(
                          "relative flex h-full flex-col rounded-2xl border p-5",
                          item.priority === "secondary"
                            ? "border-white/[0.05] bg-white/[0.02]"
                            : "border-white/[0.07] bg-white/[0.03]",
                        )}
                      >
                        {item.priority === "secondary" ? (
                          <span
                            className="inline-flex w-fit rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em]"
                            style={{ background: cluster.color + "12", color: cluster.color }}
                          >
                            Expansion path
                          </span>
                        ) : null}

                        <h3
                          className={cn(
                            "text-[1rem] font-semibold leading-snug tracking-[-0.03em]",
                            item.priority === "secondary" ? "mt-3 text-white/82" : "text-frost",
                          )}
                        >
                          {item.title}
                        </h3>

                        <div className="mt-4 space-y-3">
                          <div className="grid gap-1.5 border-b border-white/[0.05] pb-3">
                            <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/28">
                              Context
                            </div>
                            <p className="text-[0.78rem] leading-relaxed text-white/64">{item.context}</p>
                          </div>

                          <div className="grid gap-1.5 border-b border-white/[0.05] pb-3">
                            <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/28">
                              Operational pressure
                            </div>
                            <p className="text-[0.78rem] leading-relaxed text-white/52">{item.pressure}</p>
                          </div>

                          <div className="grid gap-1.5">
                            <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/28">
                              ASTA fit
                            </div>
                            <p className="text-[0.78rem] leading-relaxed text-white/58">{item.fit}</p>
                          </div>
                        </div>

                        <div
                          className="mt-4 rounded-xl border px-4 py-3"
                          style={{
                            borderColor: item.priority === "secondary" ? cluster.color + "18" : cluster.color + "22",
                            background:
                              item.priority === "secondary"
                                ? `linear-gradient(180deg,${cluster.color}0D,transparent)`
                                : `linear-gradient(180deg,${cluster.color}12,transparent)`,
                          }}
                        >
                          <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/28">
                            Outcome
                          </div>
                          <p className="mt-1.5 text-[0.78rem] leading-relaxed text-white/64">{item.outcome}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
