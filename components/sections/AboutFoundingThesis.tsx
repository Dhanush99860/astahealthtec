import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { aboutFoundingThesis } from "@/content/about";

export function AboutFoundingThesis() {
  return (
    <section
      id="why-asta-exists"
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
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#040810]">
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-brand-500/[0.12] blur-[100px]" />
              <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-violet-500/[0.10] blur-[90px]" />
            </div>
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(79,107,255,0.72),rgba(73,198,255,0.45),transparent)",
              }}
            />

            <div className="relative grid gap-10 px-7 py-8 md:px-10 md:py-10 lg:grid-cols-[1.22fr_0.78fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                  <Icon name="stethoscope" className="h-3 w-3 text-cyan-400" />
                  {aboutFoundingThesis.eyebrow}
                </div>

                <h2 className="mt-6 max-w-3xl text-balance text-h2 font-semibold tracking-[-0.045em] text-frost md:text-h2-lg">
                  {aboutFoundingThesis.heading}
                </h2>
                <p className="mt-4 max-w-3xl text-body-lg leading-relaxed text-frost-muted">
                  {aboutFoundingThesis.sub}
                </p>

                <div className="mt-8 rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
                  <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                    Clinical reality
                  </div>
                  {aboutFoundingThesis.narrative.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-[0.92rem] leading-relaxed text-white/68">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="relative mt-5 overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-5 md:p-6">
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background:
                        "linear-gradient(to right,transparent,rgba(79,107,255,0.72),rgba(73,198,255,0.4),transparent)",
                    }}
                  />
                  <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                    ASTA response
                  </div>
                  <p className="mt-3 text-[1rem] leading-relaxed text-white/76 md:text-[1.04rem]">
                    {aboutFoundingThesis.response}
                  </p>
                </div>
              </div>

              <div>
                <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                  Ward pressures
                </div>

                <div className="mt-4 grid gap-3">
                  {aboutFoundingThesis.pressures.map((item, index) => (
                    <article
                      key={item.title}
                      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5"
                    >
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px"
                        style={{
                          background: `linear-gradient(to right,transparent,${item.color}80,${item.colorTo}45,transparent)`,
                        }}
                      />
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                          style={{
                            background: `linear-gradient(135deg,${item.color},${item.colorTo})`,
                            boxShadow: `0 8px 18px ${item.color}24`,
                          }}
                        >
                          <Icon name={item.icon} className="h-5 w-5" />
                        </div>
                        <span
                          className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em]"
                          style={{ color: item.color }}
                        >
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[1rem] font-semibold leading-snug tracking-[-0.03em] text-frost">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[0.8rem] leading-relaxed text-white/58">{item.body}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-4">
                  <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/30">
                    Design principles
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {aboutFoundingThesis.principles.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[0.72rem] font-medium text-white/68"
                      >
                        {item}
                      </span>
                    ))}
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
