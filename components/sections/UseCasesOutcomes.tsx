import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { useCasesOutcomes } from "@/content/use-cases";

export function UseCasesOutcomes() {
  return (
    <section
      id="use-case-outcomes"
      className="relative overflow-hidden bg-[#060816] py-24 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-[length:44px_44px] opacity-50" />
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/[0.07] blur-[160px]" />
        <div className="absolute -left-12 bottom-0 h-[360px] w-[360px] rounded-full bg-violet-500/[0.06] blur-[110px]" />
        <div className="absolute right-[8%] top-1/4 h-[320px] w-[320px] rounded-full bg-cyan-400/[0.05] blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={useCasesOutcomes.eyebrow}
          title={useCasesOutcomes.heading}
          sub={useCasesOutcomes.sub}
          align="center"
          maxWidth="max-w-3xl"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCasesOutcomes.items.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.03}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] p-5">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(to right,transparent,${item.color}80,transparent)`,
                  }}
                />

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                  style={{
                    background: `linear-gradient(135deg,${item.color},${item.color}bb)`,
                    boxShadow: `0 8px 18px ${item.color}24`,
                  }}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>

                <span
                  className="mt-5 inline-flex rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em]"
                  style={{ background: item.color + "16", color: item.color }}
                >
                  {item.context}
                </span>

                <h3 className="mt-4 text-[1.05rem] font-semibold leading-snug tracking-[-0.03em] text-frost">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.82rem] leading-relaxed text-white/58">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
