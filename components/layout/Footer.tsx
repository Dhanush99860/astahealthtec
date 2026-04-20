import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { footerNav } from "@/content/nav";
import { BRAND, ROUTES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface dark:border-line-dark dark:bg-night-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200/60 to-transparent dark:via-brand-400/30" />
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-brand-500/[0.03] blur-[100px] dark:bg-brand-500/[0.05]" />
        <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-cyan-400/[0.03] blur-[90px] dark:bg-cyan-400/[0.04]" />
        <div className="absolute inset-0 bg-grid-light bg-[length:52px_52px] opacity-30 dark:bg-grid-fine dark:opacity-60" />
      </div>

      <Container className="relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href={ROUTES.home} className="inline-flex items-center gap-2.5 group" aria-label="ASTA home">
              <div className="relative rounded-[16px] bg-white px-3 py-2 shadow-[0_10px_30px_-18px_rgba(10,22,40,0.35)] ring-1 ring-black/[0.04] transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-transparent dark:px-0 dark:py-0 dark:shadow-none dark:ring-0">
                <Image
                  src="/logo/logo-asta.png"
                  alt="ASTA Health Tech"
                  width={1280}
                  height={723}
                  className="h-auto w-[142px] md:w-[156px] dark:brightness-0 dark:invert"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-body text-ink-muted dark:text-frost-muted">
              {BRAND.full} builds device-agnostic clinical AI - turning existing hospital wards
              into smart wards.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3 py-1.5 text-[0.72rem] font-medium text-ink-muted dark:border-line-dark dark:bg-white/[0.04] dark:text-frost-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Platform live - 24/7 uptime maintained
            </div>

            <p className="mt-5 text-label text-ink-subtle dark:text-frost-subtle">
              Enterprise inquiries:{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="text-ink-muted underline-offset-2 transition-colors hover:text-ink hover:underline dark:text-frost-muted dark:hover:text-frost"
              >
                {BRAND.email}
              </a>
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <div className="text-eyebrow uppercase tracking-widest text-ink-subtle dark:text-frost-subtle">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-label text-ink-muted transition-colors hover:text-ink dark:text-frost-muted dark:hover:text-frost"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 dark:border-line-dark sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-subtle dark:text-frost-subtle">
            © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-2">
            {["HIPAA-aware", "SOC 2 roadmap", "On-prem ready", "Device-agnostic"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-canvas/80 px-2.5 py-1 text-[0.65rem] font-medium text-ink-subtle dark:border-line-dark dark:bg-white/[0.03] dark:text-frost-subtle"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
