"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/content/nav";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useTheme } from "@/components/providers/ThemeProvider";

const HEADER_STYLES = `
  @keyframes hdr-scan {
    0%   { transform: translateX(-100%); opacity: 0; }
    10%  { opacity: 1; }
    80%  { opacity: 1; }
    100% { transform: translateX(220%); opacity: 0; }
  }
  @keyframes hdr-ring-pulse {
    0%,100% { opacity: 0.45; transform: scale(1); }
    50%      { opacity: 0.9;  transform: scale(1.18); }
  }
  @keyframes hdr-node-blink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.3; }
  }
`;

export function Header() {
  const [overHero, setOverHero] = useState(true);
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const syncHeaderSurface = () => {
      const hero = document.querySelector<HTMLElement>("[data-hero-root]");
      if (!hero) {
        setOverHero(false);
        return;
      }

      const headerHeight = window.innerWidth >= 768 ? 80 : 72;
      const { bottom } = hero.getBoundingClientRect();
      setOverHero(bottom > headerHeight + 24);
    };

    syncHeaderSurface();
    window.addEventListener("scroll", syncHeaderSurface, { passive: true });
    window.addEventListener("resize", syncHeaderSurface);
    return () => {
      window.removeEventListener("scroll", syncHeaderSurface);
      window.removeEventListener("resize", syncHeaderSurface);
    };
  }, []);

  // Keep hero chrome dark for contrast, but only add a solid surface after the hero.
  const chromeDark = overHero || isDark;
  const transparentHeader = overHero;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HEADER_STYLES }} />
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          transparentHeader
            ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-0"
            : isDark
              ? "border-b border-white/[0.06] bg-[rgba(7,10,24,0.88)] backdrop-blur-md shadow-[0_10px_28px_-16px_rgba(4,8,24,0.55)]"
              : "border-b border-black/[0.06] bg-white/[0.94] backdrop-blur-sm shadow-[0_4px_24px_-8px_rgba(10,22,40,0.10)]"
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-[1px] overflow-hidden transition-opacity duration-500",
            transparentHeader ? "opacity-0" : "opacity-100"
          )}
        >
          <div
            className="absolute inset-y-0 w-1/2"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(79,107,255,0.7) 40%, rgba(73,198,255,0.8) 60%, transparent)",
              animation: "hdr-scan 7s ease-in-out 1s infinite",
            }}
          />
        </div>

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500",
            "bg-gradient-to-r from-transparent via-brand-500/30 to-transparent",
            transparentHeader ? "opacity-0" : "opacity-100"
          )}
        />

        <Container className="relative">
          <div className="grid h-[72px] md:h-[80px] grid-cols-[1fr_auto_1fr] items-center">
            <Link
              href={ROUTES.home}
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md"
              aria-label="ASTA home"
            >
              <Logo isDark={chromeDark} />
            </Link>

            <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
              {primaryNav.map((item) => (
                <NavLink key={item.href} href={item.href} isDark={chromeDark}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-2">
              <ThemeToggle isDark={isDark} onToggle={toggle} chromeDark={chromeDark} />

              <div className="hidden md:flex items-center gap-2 ml-1">
                <Button
                  href={ROUTES.contact}
                  variant={chromeDark ? "ghost-white" : "ghost"}
                  size="sm"
                >
                  Contact
                </Button>
                <Button href={ROUTES.demo} variant="primary" size="sm" trailingIcon>
                  Request demo
                </Button>
              </div>

              <button
                className={cn(
                  "md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  chromeDark
                    ? "text-frost-subtle hover:text-frost hover:bg-white/[0.08]"
                    : "text-ink-muted hover:text-ink hover:bg-ink/[0.06]"
                )}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <HamburgerIcon open={open} />
              </button>
            </div>
          </div>
        </Container>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "border-t backdrop-blur-sm",
              chromeDark ? "border-white/[0.06] bg-[rgba(6,8,22,0.96)]" : "border-line bg-white/[0.97]"
            )}
          >
            <Container className="py-4">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-3 rounded-lg text-label transition-colors duration-200",
                      chromeDark
                        ? "text-frost-muted hover:text-frost hover:bg-white/[0.06]"
                        : "text-ink-muted hover:text-ink hover:bg-ink/[0.05]"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className={cn("mt-3 flex gap-2 pt-3 border-t", chromeDark ? "border-white/[0.06]" : "border-line")}>
                <Button href={ROUTES.contact} variant={chromeDark ? "outline-white" : "secondary"} size="sm" className="flex-1">
                  Contact
                </Button>
                <Button href={ROUTES.demo} variant="primary" size="sm" className="flex-1" trailingIcon>
                  Request demo
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </>
  );
}

function Logo({ isDark }: { isDark: boolean }) {
  return (
    <div className="flex items-center">
      <div className="relative flex-none transition-all duration-300">
        <Image
          src="/logo/logo-asta.png"
          alt="ASTA Health Tech"
          width={1280}
          height={723}
          priority
          className={cn(
            "h-auto w-[120px] md:w-[132px]",
            isDark
              ? "brightness-0 invert drop-shadow-[0_2px_12px_rgba(255,255,255,0.14)]"
              : "drop-shadow-[0_1px_1px_rgba(14,21,37,0.08)]"
          )}
        />
      </div>
    </div>
  );
}

function NavLink({ href, children, isDark }: { href: string; children: ReactNode; isDark: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2.5 rounded-md overflow-hidden",
        "text-[0.875rem] font-medium tracking-[-0.01em]",
        "transition-colors duration-200 group",
        isDark
          ? "text-frost/75 hover:text-frost hover:bg-white/[0.07]"
          : "text-ink/65 hover:text-ink hover:bg-ink/[0.05]"
      )}
    >
      {children}
      <span
        aria-hidden
        className="absolute bottom-[6px] left-0 right-0 mx-auto h-[1.5px] rounded-full bg-brand-500 w-[calc(100%-2rem)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
      />
    </Link>
  );
}

function LiveChip({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={cn(
        "hidden lg:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mr-1",
        "text-[0.72rem] font-semibold tracking-[0.08em] uppercase",
        "transition-colors duration-200",
        isDark
          ? "bg-emerald-500/[0.10] text-emerald-400/80 ring-1 ring-emerald-500/20"
          : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-none"
        style={{ animation: "hdr-node-blink 1.8s ease-in-out infinite" }}
        aria-hidden
      />
      hospital-ready
    </div>
  );
}

function ThemeToggle({
  isDark,
  onToggle,
  chromeDark,
}: {
  isDark: boolean;
  onToggle: () => void;
  chromeDark: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full overflow-hidden",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
        chromeDark
          ? "bg-white/[0.07] hover:bg-white/[0.14] ring-1 ring-white/10 text-frost-muted hover:text-frost"
          : "bg-ink/[0.06] hover:bg-ink/[0.11] ring-1 ring-ink/[0.08] text-ink-muted hover:text-ink"
      )}
    >
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-90 pointer-events-none"
        )}
        aria-hidden
      >
        <SunIcon />
      </span>
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isDark ? "opacity-0 scale-75 -rotate-90 pointer-events-none" : "opacity-100 scale-100 rotate-0"
        )}
        aria-hidden
      >
        <MoonIcon />
      </span>
    </button>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {open ? <path d="M4 4l12 12M4 16L16 4" /> : <path d="M2.5 6.5h15M2.5 10h15M2.5 13.5h15" />}
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4.1 4.1l1.42 1.42M14.48 14.48l1.42 1.42M4.1 15.9l1.42-1.42M14.48 5.52l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 11.5A7 7 0 0 1 8.5 3.5 7.5 7.5 0 1 0 16.5 11.5z" />
    </svg>
  );
}
