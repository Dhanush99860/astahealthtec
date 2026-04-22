import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutInstitutionalPedigree } from "@/content/about";

export function AboutInstitutionalPedigree() {
  return (
    <section
      id="institutional-pedigree"
      className="relative overflow-hidden bg-[#060816] py-24 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-[length:44px_44px] opacity-50" />
        <div className="absolute left-[12%] top-1/3 h-[360px] w-[360px] rounded-full bg-violet-500/[0.08] blur-[120px]" />
        <div className="absolute right-[12%] bottom-1/4 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.06] blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={aboutInstitutionalPedigree.eyebrow}
          title={aboutInstitutionalPedigree.heading}
          sub={aboutInstitutionalPedigree.sub}
          align="center"
          maxWidth="max-w-3xl"
        />

        <Reveal delay={0.12}>
          <div className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#040810]">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(79,107,255,0.55),rgba(73,198,255,0.35),transparent)",
              }}
            />

            <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
              {aboutInstitutionalPedigree.partners.map((partner, index) => (
                <Reveal key={partner.name} delay={0.16 + index * 0.04}>
                  <article className="group relative h-full border-b border-white/[0.06] p-5 md:border-r md:[&:nth-child(2)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2)]:border-r xl:[&:nth-child(4)]:border-r-0">
                    <div
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-px"
                      style={{
                        background: `linear-gradient(to right,transparent,${partner.color}80,${partner.colorTo}50,transparent)`,
                      }}
                    />

                    <span
                      className="inline-flex rounded-full px-2.5 py-1 font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em]"
                      style={{ background: partner.color + "14", color: partner.color }}
                    >
                      {partner.badge}
                    </span>

                    <div className="mt-4 flex h-[76px] items-center justify-center rounded-2xl border border-white/[0.08] bg-white px-4 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.35)]">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={160}
                        height={64}
                        className="h-11 w-auto object-contain"
                        unoptimized
                      />
                    </div>

                    <h3 className="mt-4 text-[0.98rem] font-semibold leading-snug tracking-[-0.03em] text-frost">
                      {partner.name}
                    </h3>
                    <p className="mt-1.5 text-[0.74rem] leading-relaxed text-white/44">
                      {partner.descriptor}
                    </p>
                    <p className="mt-3 text-[0.78rem] leading-relaxed text-white/58">{partner.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="border-t border-white/[0.06] px-5 py-5 text-center">
              <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/30">
                What this signals to hospital buyers
              </div>
              <p className="mx-auto mt-2 max-w-3xl text-[0.88rem] leading-relaxed text-white/60">
                {aboutInstitutionalPedigree.footer}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
