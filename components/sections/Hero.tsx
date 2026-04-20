import { Icon } from "@/components/ui/Icon";
import { hero } from "@/content/home";
import { cn } from "@/lib/cn";

// ─── Data ─────────────────────────────────────────────────────────────────────
const VITALS = [
  { label: "Heart Rate",   value: "78",     unit: "bpm",  color: "#4F8CFF", spark: "ecg"  },
  { label: "SpO\u2082",    value: "97",     unit: "%",    color: "#28D7B5", spark: "sine" },
  { label: "Resp Rate",    value: "18",     unit: "/min", color: "#A78BFF", spark: "slow" },
  { label: "Blood Press.", value: "124/78", unit: "mmHg", color: "#49C6FF", spark: "bp"   },
];

const SPARK: Record<string, string> = {
  ecg:  "M0,8 L4,8 L5,6 L6,8 L9,8 L10,11 L11,1 L12,15 L13,8 L18,8 L28,8 L32,8 L33,6 L34,8 L37,8 L38,11 L39,1 L40,15 L41,8 L46,8 L56,8",
  sine: "M0,8 C7,3 14,13 21,8 C28,3 35,13 42,8 C49,3 56,13 56,8",
  slow: "M0,8 C16,4 38,12 56,8",
  bp:   "M0,11 L3,11 L4,4 L5,11 L10,11 L11,7 L12,11 L21,11 L22,4 L23,11 L32,11 L33,7 L34,11 L43,11 L44,4 L45,11 L54,11 L55,7 L56,11",
};

const ECG_PATH =
  "M0,15 L50,15 L57,12 L61,15 L69,15 L71,20 L73,2 L74.5,28 L76,15 L90,15" +
  " L168,15 L215,15 L222,12 L226,15 L234,15 L236,20 L238,2 L239.5,28 L241,15 L255,15" +
  " L333,15 L380,15 L387,12 L391,15 L399,15 L401,20 L403,2 L404.5,28 L406,15 L420,15" +
  " L498,15 L545,15 L552,12 L556,15 L564,15 L566,20 L568,2 L569.5,28 L571,15 L585,15" +
  " L663,15 L710,15 L717,12 L721,15 L729,15 L731,20 L733,2 L734.5,28 L736,15 L750,15 L800,15";

const STATUS_ITEMS = [
  { label: "24 patients monitored", color: "#28D7B5" },
  { label: "0 active escalations",  color: "#12B981" },
  { label: "Inference < 2s",        color: "#4F8CFF" },
  { label: "Active",                color: "#4F8CFF" },
];

// ─── Floating mid-field monitoring nodes (desktop xl+) ────────────────────────
const FIELD_NODES = [
  { left: "21%", top: "28%",  label: "BED-04", value: "78 bpm",        color: "#4F8CFF" },
  { left: "22%", top: "62%",  label: "CAM-03", value: "18 \u2215 min", color: "#A78BFF" },
  { left: "65%", top: "28%",  label: "ZONE-A", value: "SpO\u2082 97%", color: "#28D7B5" },
  { left: "64%", top: "62%",  label: "BED-07", value: "124 \u2215 78", color: "#49C6FF" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section
      data-hero-root
      className="relative min-h-dvh overflow-hidden bg-night-deep"
      aria-label="Hero"
    >
      {/* ── BG glows ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[350px] -top-[150px] h-[1100px] w-[1100px] rounded-full bg-brand-500/[0.12] blur-[210px]" />
        <div className="absolute -right-[150px] top-[6%] h-[900px] w-[900px] rounded-full bg-violet-600/[0.09] blur-[190px]" />
        <div className="absolute left-[22%] bottom-[-6%] h-[800px] w-[800px] rounded-full bg-cyan-400/[0.06] blur-[190px]" />
        <div className="absolute left-1/2 top-[46%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.06] blur-[160px]" />
        <div className="absolute inset-0 bg-grid-fine bg-[length:52px_52px] opacity-100" />
        {/* Faint horizontal scan-line texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,rgba(255,255,255,0.9) 0px,rgba(255,255,255,0.9) 1px,transparent 1px,transparent 4px)",
          }}
        />
      </div>

      {/* ── Pulse rings ── */}
      <PulseRings />

      {/* ── Connector lines (desktop) ── */}
      <ConnectorLines />

      {/* ════ DESKTOP ════ */}
      <div className="pointer-events-none hidden lg:block">

        {/* Orb + AI pill + arcs */}
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-frost/45">
              AI active
            </span>
          </div>
          <div className="relative h-[480px] w-[480px]">
            <OrbArcs />
            <OrbCore />
          </div>
        </div>

        {/* Vitals — NW */}
        <div className="absolute left-[10%] top-[16%]">
          <DataChannel {...VITALS[0]} idx={0} align="right" />
        </div>
        {/* Vitals — NE */}
        <div className="absolute right-[10%] top-[16%]">
          <DataChannel {...VITALS[1]} idx={1} align="left" />
        </div>
        {/* Vitals — SW */}
        <div className="absolute left-[10%] top-[54%]">
          <DataChannel {...VITALS[2]} idx={2} align="right" />
        </div>
        {/* Vitals — SE */}
        <div className="absolute right-[10%] top-[54%]">
          <DataChannel {...VITALS[3]} idx={3} align="left" />
        </div>

        {/* Floating mid-field nodes (xl+ only) */}
        {FIELD_NODES.map((n) => (
          <div key={n.label} className="absolute hidden xl:block" style={{ left: n.left, top: n.top }}>
            <div
              className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 backdrop-blur-sm"
              style={{ boxShadow: `0 0 20px ${n.color}0a` }}
            >
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full flex-none"
                style={{ background: n.color, boxShadow: `0 0 5px ${n.color}` }}
              />
              <span
                className="font-mono text-[0.58rem] tracking-[0.10em]"
                style={{ color: `${n.color}88` }}
              >
                {n.label}
              </span>
              <span className="h-3 w-px bg-white/[0.10]" />
              <span
                className="font-mono text-[0.63rem] font-bold"
                style={{ color: n.color }}
              >
                {n.value}
              </span>
            </div>
            {/* Glow behind node */}
            <div
              className="pointer-events-none absolute inset-0 rounded-xl blur-md opacity-40"
              style={{ background: `${n.color}18` }}
            />
          </div>
        ))}
      </div>

      {/* ════ MOBILE ════ */}
      <div className="flex min-h-dvh flex-col items-center justify-center gap-8 px-6 pb-36 pt-16 lg:hidden">
        <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-frost/45">
            AI active
          </span>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-brand-500/[0.15] blur-[90px]" />
          <div className="relative h-[300px] w-[300px]">
            <OrbArcs mobile />
            <OrbCore />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-7">
          {VITALS.map((v, i) => (
            <DataChannel key={v.label} {...v} idx={i} align={i % 2 === 0 ? "right" : "left"} />
          ))}
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div aria-hidden className="pointer-events-none absolute bottom-[110px] left-1/2 -translate-x-1/2">
        <svg className="h-5 w-5 animate-bounce text-frost/20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 5 L10 13 M6.5 9.5 L10 13 L13.5 9.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── ECG strip ── */}
      <div className="pointer-events-none absolute bottom-[68px] left-0 right-0 h-[32px] overflow-hidden opacity-45">
        <ECGScrollStrip />
      </div>

      {/* ── Status chips ── */}
      <div className="pointer-events-none absolute bottom-[18px] left-1/2 z-10 -translate-x-1/2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
        {STATUS_ITEMS.map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-frost/55"
          >
            <span
              className="block h-1.5 w-1.5 rounded-full"
              style={{ background: item.color, boxShadow: `0 0 5px ${item.color}` }}
            />
            {item.label}
          </span>
        ))}
      </div>

      {/* ── Icon CTAs — bottom right ── */}
      <div className="absolute bottom-[18px] right-8 z-20 flex items-center gap-2">
        <a
          href={hero.primaryCta.href}
          aria-label={hero.primaryCta.label}
          className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.06] backdrop-blur-sm transition-all duration-200 hover:border-brand-400/40 hover:bg-brand-500/[0.14]"
        >
          <Icon name="spark" className="h-4 w-4 text-frost/55 transition-colors group-hover:text-brand-300" />
          <span className="pointer-events-none absolute bottom-10 right-0 whitespace-nowrap rounded-lg border border-white/[0.10] bg-[#060816]/95 px-2.5 py-1.5 text-[0.65rem] font-medium text-frost/80 opacity-0 shadow-xl backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100">
            {hero.primaryCta.label}
          </span>
        </a>
        <a
          href={hero.secondaryCta.href}
          aria-label={hero.secondaryCta.label}
          className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.06] backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-500/[0.08]"
        >
          <Icon name="arrow-right" className="h-4 w-4 text-frost/55 transition-colors group-hover:text-cyan-300" />
          <span className="pointer-events-none absolute bottom-10 right-0 whitespace-nowrap rounded-lg border border-white/[0.10] bg-[#060816]/95 px-2.5 py-1.5 text-[0.65rem] font-medium text-frost/80 opacity-0 shadow-xl backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100">
            {hero.secondaryCta.label}
          </span>
        </a>
      </div>

      {/* ── Fade to next section ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
        style={{ background: "linear-gradient(to bottom, transparent, #060816)" }}
      />
    </section>
  );
}

// ─── Expanding pulse rings ────────────────────────────────────────────────────
function PulseRings() {
  return (
    <div className="pointer-events-none hidden lg:block" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-[46%] h-[520px] w-[520px] rounded-full"
          style={{
            border: i % 2 === 0
              ? "1px solid rgba(79,107,255,0.28)"
              : "1px solid rgba(73,198,255,0.22)",
            animation: `ring-pulse 4.2s ${i * 1.05}s ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Connector lines: vitals → orb ───────────────────────────────────────────
function ConnectorLines() {
  const lines = [
    { id: "hl-0", x1: 19, y1: 20, x2: 46, y2: 43, color: "#4F8CFF" }, // HR NW
    { id: "hl-1", x1: 81, y1: 20, x2: 54, y2: 43, color: "#28D7B5" }, // SpO₂ NE
    { id: "hl-2", x1: 19, y1: 58, x2: 46, y2: 49, color: "#A78BFF" }, // RR SW
    { id: "hl-3", x1: 81, y1: 58, x2: 54, y2: 49, color: "#49C6FF" }, // BP SE
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        {lines.map((l) => (
          <linearGradient
            key={l.id} id={l.id}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor={l.color} stopOpacity="0.55" />
            <stop offset="70%"  stopColor={l.color} stopOpacity="0.06" />
            <stop offset="100%" stopColor={l.color} stopOpacity="0"    />
          </linearGradient>
        ))}
      </defs>
      {lines.map((l) => (
        <line
          key={l.id}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={`url(#${l.id})`}
          strokeWidth="0.22"
          strokeDasharray="1.2 1.5"
          style={{ animation: `conn-flow 5s ${lines.indexOf(l) * 1.25}s linear infinite` }}
        />
      ))}
    </svg>
  );
}

// ─── Colored arc segments around orb ─────────────────────────────────────────
function OrbArcs({ mobile = false }: { mobile?: boolean }) {
  const size  = mobile ? 300 : 480;
  const cx    = size / 2;
  const cy    = size / 2;
  const r     = size / 2 + 24; // just outside outer orbit ring

  function pt(deg: number) {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
  }

  function arcD(s: number, e: number) {
    const sp = pt(s), ep = pt(e);
    return `M ${sp.x.toFixed(1)} ${sp.y.toFixed(1)} A ${r} ${r} 0 0 1 ${ep.x.toFixed(1)} ${ep.y.toFixed(1)}`;
  }

  const arcs = [
    { s: -72, e: -22, color: "#4F8CFF", id: "oa-0" },  // HR  — NE
    { s: -158,e: -108,color: "#28D7B5", id: "oa-1" },  // SpO₂ — NW
    { s:  108, e: 158, color: "#A78BFF", id: "oa-2" },  // RR  — SW
    { s:  22,  e: 72,  color: "#49C6FF", id: "oa-3" },  // BP  — SE
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${size} ${size}`}
      style={{ overflow: "visible" }}
      aria-hidden
    >
      <defs>
        {arcs.map((a) => {
          const sp = pt(a.s), ep = pt(a.e);
          return (
            <linearGradient key={a.id} id={a.id}
              x1={sp.x} y1={sp.y} x2={ep.x} y2={ep.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%"   stopColor={a.color} stopOpacity="0"    />
              <stop offset="30%"  stopColor={a.color} stopOpacity="0.80" />
              <stop offset="70%"  stopColor={a.color} stopOpacity="0.80" />
              <stop offset="100%" stopColor={a.color} stopOpacity="0"    />
            </linearGradient>
          );
        })}
      </defs>

      {arcs.map((a) => (
        <g key={a.id}>
          {/* Main arc */}
          <path
            d={arcD(a.s, a.e)}
            stroke={`url(#${a.id})`}
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Soft glow duplicate, thicker + lower opacity */}
          <path
            d={arcD(a.s, a.e)}
            stroke={a.color}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeOpacity="0.10"
          />
          {/* Endpoint dots */}
          <circle cx={pt(a.s).x} cy={pt(a.s).y} r="2.5" fill={a.color} fillOpacity="0.55" />
          <circle cx={pt(a.e).x} cy={pt(a.e).y} r="2.5" fill={a.color} fillOpacity="0.55" />
          {/* Dot glow halos */}
          <circle cx={pt(a.s).x} cy={pt(a.s).y} r="5"   fill={a.color} fillOpacity="0.12" />
          <circle cx={pt(a.e).x} cy={pt(a.e).y} r="5"   fill={a.color} fillOpacity="0.12" />
        </g>
      ))}
    </svg>
  );
}

// ─── Glass orb ────────────────────────────────────────────────────────────────
function OrbCore() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-[8%]  rounded-full bg-brand-500/[0.28] blur-[60px]" />
      <div className="absolute inset-[22%] rounded-full bg-violet-500/[0.22] blur-[44px]" />
      <div className="absolute inset-[37%] rounded-full bg-cyan-400/[0.26] blur-[30px]" />

      {/* 3D perspective ring — Saturn style */}
      <div style={{ perspective: "700px" }} className="pointer-events-none absolute inset-0 rounded-full">
        <div
          className="absolute inset-[-22px] rounded-full"
          style={{
            border: "1.5px solid rgba(73,198,255,0.28)",
            transform: "rotateX(72deg)",
            boxShadow: "0 0 18px rgba(73,198,255,0.12)",
          }}
        />
      </div>

      {/* Outer dashed orbit */}
      <div
        className="absolute inset-[-14px] animate-orb-cw rounded-full"
        style={{ border: "1px dashed rgba(79,107,255,0.30)" }}
      />

      {/* Second outer orbit — slow CCW */}
      <div
        className="absolute inset-[-28px] animate-orb-ccw-slow rounded-full opacity-35"
        style={{ border: "1px dashed rgba(40,215,181,0.40)" }}
      />

      {/* Orbital dot — cyan, fast */}
      <div className="absolute inset-[-5px] animate-orb-cw rounded-full">
        <span
          className="absolute left-1/2 top-0.5 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400"
          style={{ boxShadow: "0 0 14px rgba(73,198,255,0.95), 0 0 30px rgba(73,198,255,0.50)" }}
        />
      </div>

      {/* Orbital dot — teal, slow CCW */}
      <div className="absolute inset-0 animate-orb-ccw-slow rounded-full">
        <span
          className="absolute bottom-4 right-3 h-2.5 w-2.5 rounded-full bg-teal-400"
          style={{ boxShadow: "0 0 12px rgba(40,215,181,0.90), 0 0 24px rgba(40,215,181,0.40)" }}
        />
      </div>

      {/* Glass sphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 33% 28%, rgba(255,255,255,0.30) 0%, rgba(79,107,255,0.08) 28%, rgba(5,9,22,0.93) 70%)",
          boxShadow:
            "0 0 100px rgba(79,107,255,0.35), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 0 80px rgba(79,107,255,0.09)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div className="absolute inset-[16px] rounded-full" style={{ border: "1px solid rgba(255,255,255,0.08)" }} />
        <div className="absolute inset-[38px] rounded-full" style={{ border: "1px solid rgba(73,198,255,0.18)" }} />

        {/* Radar scan */}
        <div
          className="absolute inset-[8px] animate-scan-sweep rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(73,198,255,0.22) 22deg, transparent 44deg)",
          }}
        />

        {/* Vertical crosshair */}
        <div
          className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(79,107,255,0.45), transparent)" }}
        />

        {/* ── Cardinal monitoring nodes on inner ring ── */}
        <span className="absolute left-1/2 top-[38px] h-2 w-2 -translate-x-1/2 animate-pulse rounded-full bg-[#4F8CFF]"
          style={{ boxShadow: "0 0 8px #4F8CFF, 0 0 16px #4F8CFF55" }} />
        <span className="absolute right-[38px] top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-[#28D7B5]"
          style={{ boxShadow: "0 0 8px #28D7B5, 0 0 16px #28D7B555", animationDelay: "0.5s" }} />
        <span className="absolute bottom-[38px] left-1/2 h-2 w-2 -translate-x-1/2 animate-pulse rounded-full bg-[#A78BFF]"
          style={{ boxShadow: "0 0 8px #A78BFF, 0 0 16px #A78BFF55", animationDelay: "1s" }} />
        <span className="absolute left-[38px] top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-[#49C6FF]"
          style={{ boxShadow: "0 0 8px #49C6FF, 0 0 16px #49C6FF55", animationDelay: "1.5s" }} />

        {/* ── Live ECG trace — runs through orb center ── */}
        <div
          className="absolute inset-x-[13%] top-1/2 h-[24px] -translate-y-1/2 overflow-hidden"
          style={{ opacity: 0.55 }}
        >
          <div className="flex h-full" style={{ width: "200%", animation: "ecg-scroll 4.5s linear infinite" }}>
            {[0, 1].map((k) => (
              <svg
                key={k}
                viewBox="0 0 240 24"
                preserveAspectRatio="none"
                style={{ width: "50%", height: "100%", flexShrink: 0 }}
                aria-hidden
              >
                <defs>
                  <linearGradient id={`ob-ecg-${k}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="#49C6FF" stopOpacity="0"   />
                    <stop offset="12%"  stopColor="#49C6FF" stopOpacity="1"   />
                    <stop offset="88%"  stopColor="#4F8CFF" stopOpacity="1"   />
                    <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0"   />
                  </linearGradient>
                </defs>
                <path
                  d="M0,12 L38,12 L44,9 L48,12 L56,12 L59,17 L61,3 L63,21 L65,12 L78,12 L118,12 L124,9 L128,12 L136,12 L139,17 L141,3 L143,21 L145,12 L158,12 L198,12 L204,9 L208,12 L216,12 L219,17 L221,3 L223,21 L225,12 L240,12"
                  stroke={`url(#ob-ecg-${k})`}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* ── Core glow ── */}
        <div
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ boxShadow: "0 0 40px rgba(255,255,255,0.28), 0 0 80px rgba(79,107,255,0.30)" }}
        />

        {/* ── Medical cross at center ── */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg className="h-[18px] w-[18px]" viewBox="0 0 18 18" fill="none" aria-hidden>
            <rect x="6"   y="0.5" width="6" height="17" rx="2.5" fill="white" fillOpacity="0.90" />
            <rect x="0.5" y="6"   width="17" height="6" rx="2.5" fill="white" fillOpacity="0.90" />
          </svg>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ boxShadow: "0 0 22px rgba(255,255,255,0.9), 0 0 40px rgba(79,107,255,0.40)", borderRadius: "50%" }}
          />
        </div>
      </div>

      {/* Orbital dot — brand, CCW */}
      <div className="absolute inset-0 animate-orb-ccw rounded-full">
        <span
          className="absolute bottom-6 right-5 h-2 w-2 rounded-full bg-brand-400"
          style={{ boxShadow: "0 0 10px rgba(79,107,255,0.95), 0 0 20px rgba(79,107,255,0.50)" }}
        />
      </div>
    </div>
  );
}

// ─── Data channel ─────────────────────────────────────────────────────────────
interface DataChannelProps {
  label: string; value: string; unit: string;
  color: string; spark: string; idx: number;
  align?: "left" | "right"; className?: string;
}

function DataChannel({ label, value, unit, color, spark, idx, align = "left", className }: DataChannelProps) {
  const gid     = `dc-${idx}`;
  const isRight = align === "right";
  return (
    <div className={cn("pointer-events-none select-none", className)}>
      <div
        className="h-[2px] w-[48px] rounded-full"
        style={{
          background: `linear-gradient(${isRight ? "to left" : "to right"}, ${color}, transparent)`,
          marginLeft: isRight ? "auto" : 0,
        }}
      />
      <div className={cn("mt-3", isRight && "text-right")}>
        <div className={cn("flex items-center gap-1.5", isRight && "flex-row-reverse justify-start")}>
          <span className="block h-1.5 w-1.5 flex-none rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]" style={{ color: `${color}CC` }}>
            {label}
          </span>
        </div>
        <div className={cn("mt-1.5 flex items-baseline gap-1.5", isRight && "justify-end")}>
          <span className="text-[2.1rem] font-semibold leading-none tracking-[-0.04em]" style={{ color }}>
            {value}
          </span>
          {unit && (
            <span className="text-[0.7rem] font-medium" style={{ color: "rgba(240,244,255,0.50)" }}>
              {unit}
            </span>
          )}
        </div>
        <div className={cn("mt-2.5 h-[14px] w-[68px]", isRight && "ml-auto")}>
          <svg viewBox="0 0 56 16" className="h-full w-full" aria-hidden preserveAspectRatio="none">
            <defs>
              <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor={color} stopOpacity="0.05" />
                <stop offset="30%"  stopColor={color} stopOpacity="0.65" />
                <stop offset="100%" stopColor={color} stopOpacity="1.00" />
              </linearGradient>
            </defs>
            <path d={SPARK[spark] ?? SPARK.sine} stroke={`url(#${gid})`} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── ECG scroll strip ─────────────────────────────────────────────────────────
function ECGScrollStrip() {
  return (
    <div className="flex h-full" style={{ width: "200%", animation: "waveform-scroll 5s linear infinite" }}>
      {[0, 1].map((i) => (
        <svg key={i} viewBox="0 0 800 30" preserveAspectRatio="none" style={{ width: "50%", height: "100%", flexShrink: 0 }} aria-hidden>
          <defs>
            <linearGradient id={`ecg-sg-${i}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#4F6BFF" stopOpacity="0.0" />
              <stop offset="12%"  stopColor="#4F6BFF" stopOpacity="0.9" />
              <stop offset="45%"  stopColor="#28D7B5" stopOpacity="0.9" />
              <stop offset="82%"  stopColor="#49C6FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#49C6FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d={ECG_PATH} stroke={`url(#ecg-sg-${i})`} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}
