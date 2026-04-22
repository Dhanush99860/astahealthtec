import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { useCasesLiveProof } from "@/content/use-cases";

const HOSPITAL_LOGOS: Record<string, string> = {
  "Southern Railway HQ Hospital": "/hospitals/southern-railway.jpg",
  "Karnataka ENT Hospital": "/hospitals/karnataka-ent.jpg",
  "Aksha Hospital": "/hospitals/aksha.png",
  "Seethapathy Clinic": "/hospitals/seethapathy.png",
  "K.S. Hospital": "/hospitals/ks.png",
  "Sugam Hospital": "/hospitals/sugam.png",
  "Anbu Hospital": "/hospitals/anbu.png",
};

const ACCENTS = [
  { from: "#4F6BFF", to: "#7C5CFF" },
  { from: "#28D7B5", to: "#49C6FF" },
  { from: "#7C5CFF", to: "#49C6FF" },
  { from: "#49C6FF", to: "#4F6BFF" },
  { from: "#4F6BFF", to: "#28D7B5" },
  { from: "#28D7B5", to: "#7C5CFF" },
  { from: "#7C5CFF", to: "#4F6BFF" },
] as const;

function hostname(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
}

export function UseCasesProof() {
  return (
    <section
      id="live-hospital-proof"
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
        <div className="absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-500/[0.03] blur-[120px] dark:bg-brand-500/[0.05]" />
        <div className="absolute right-0 bottom-1/4 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.02] blur-[110px] dark:bg-cyan-400/[0.04]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={useCasesLiveProof.eyebrow}
          title={useCasesLiveProof.heading}
          sub={useCasesLiveProof.sub}
          align="center"
          maxWidth="max-w-3xl"
        />

        <Reveal delay={0.12}>
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/[0.07]">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(to right,transparent,rgba(79,107,255,0.45),rgba(40,215,181,0.35),transparent)",
              }}
            />
            <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06] lg:grid-cols-4 lg:divide-y-0">
              {useCasesLiveProof.metrics.map((metric, index) => (
                <div key={metric.label} className="flex flex-col items-center gap-1 px-6 py-8 text-center">
                  <div
                    className="font-mono text-[2.2rem] font-bold leading-none tracking-[-0.05em]"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg,#4F6BFF,#7C5CFF)"
                          : index === 1
                            ? "linear-gradient(135deg,#28D7B5,#49C6FF)"
                            : index === 2
                              ? "linear-gradient(135deg,#49C6FF,#4F6BFF)"
                              : "linear-gradient(135deg,#7C5CFF,#28D7B5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {metric.value}
                  </div>
                  <p className="text-[0.74rem] font-medium text-ink-muted dark:text-frost-subtle">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {useCasesLiveProof.hospitals.map((hospital, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            const logoSrc = HOSPITAL_LOGOS[hospital.name];

            return (
              <Reveal key={hospital.name} delay={0.16 + index * 0.02}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(to right,transparent,${accent.from}80,${accent.to}50,transparent)`,
                    }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 dark:ring-white/10">
                        {logoSrc ? (
                          <Image
                            src={logoSrc}
                            alt={hospital.name}
                            width={38}
                            height={38}
                            className="h-9 w-9 object-contain"
                            unoptimized
                          />
                        ) : (
                          <div
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-[0.65rem] font-bold text-white"
                            style={{
                              background: `linear-gradient(135deg,${accent.from},${accent.to})`,
                            }}
                          >
                            {hospital.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[0.96rem] font-semibold tracking-[-0.02em] text-ink dark:text-frost">
                          {hospital.name}
                        </h3>
                        <div className="mt-1 flex items-center gap-1 text-[0.74rem] text-ink-muted dark:text-frost-subtle">
                          <Icon name="map-pin" className="h-3 w-3 flex-none" />
                          {hospital.city}, {hospital.state}
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      {hospital.status}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span
                      className="rounded-full px-2.5 py-1 text-[0.68rem] font-medium"
                      style={{ background: accent.from + "14", color: accent.from }}
                    >
                      {hospital.careContext}
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.68rem] text-ink-muted dark:text-frost-subtle">
                      {hospital.deploymentFit}
                    </span>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                    <div className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-subtle dark:text-white/28">
                      Deployment proof
                    </div>
                    <p className="mt-1.5 text-[0.78rem] leading-relaxed text-ink-muted dark:text-white/58">
                      {hospital.note}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2.5 text-[0.72rem]">
                    <span
                      className="rounded-full px-2.5 py-1 font-mono font-bold uppercase tracking-[0.14em]"
                      style={{ background: accent.from + "14", color: accent.from }}
                    >
                      Live since {hospital.liveSince}
                    </span>
                    <a
                      href={hospital.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-ink-muted transition-colors hover:text-ink dark:text-frost-subtle dark:hover:text-frost"
                    >
                      {hostname(hospital.website)}
                      <Icon name="arrow-right" className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.34}>
          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4">
            <p className="text-[0.78rem] leading-relaxed text-ink-muted dark:text-frost-subtle">
              {useCasesLiveProof.note}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
