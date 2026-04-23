import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { contactHero } from "@/content/contact";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#060816] pb-14 pt-32 md:pb-16 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-[length:44px_44px] opacity-50" />
        <div className="absolute left-1/2 top-1/3 h-[560px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.11] blur-[170px]" />
        <div className="absolute right-[10%] top-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/[0.08] blur-[120px]" />
        <div className="absolute left-[12%] bottom-1/4 h-[260px] w-[260px] rounded-full bg-cyan-400/[0.06] blur-[100px]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 82% 64% at 50% 44%, transparent 24%, rgba(6,8,22,0.82) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.06] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
              <Icon name="spark" className="h-3 w-3 text-cyan-400" />
              {contactHero.eyebrow}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-h1 font-semibold leading-[1.06] tracking-[-0.045em] text-frost md:text-display">
              {contactHero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-3xl text-body-lg leading-relaxed text-frost-muted">
              {contactHero.sub}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={contactHero.primaryCta.href} variant="glow" size="xl" trailingIcon>
                {contactHero.primaryCta.label}
              </Button>
              <Button
                href={contactHero.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                variant="outline-white"
                size="xl"
              >
                {contactHero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
              {contactHero.microProof.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[0.68rem] font-medium text-frost/65"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
