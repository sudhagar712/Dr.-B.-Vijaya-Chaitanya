import { Vessels } from "./Vessels";

/**
 * Anatomical-style glowing heart (decorative).
 * `light` sits on the cream hero, `dark` on the navy approach band.
 */
const BODY =
  "M196 122C150 100 96 128 84 186C70 250 100 320 140 372C168 408 186 436 190 462C200 472 214 464 226 448C300 396 356 322 354 232C352 160 304 108 246 112C226 114 210 118 196 122Z";

const GROOVE = "M208 126C196 200 188 300 192 456";

const palette = {
  light: {
    lv: ["#7f93bb", "#aab9d6", "#dde4f0"],
    rv: ["#9eb0d0", "#c4cfe3", "#e8edf5"],
    bodyOpacity: 0.78,
    vessel: ["#d3dbeb", "#aebbd4"],
    vesselOpacity: 0.9,
    rim: "#ffffff",
    core: "#ff7b47",
    glow: "#ff5326",
    hot: "#fff0cf",
    centerGlow: 0.92,
    shade: "#475b86",
  },
  dark: {
    lv: ["#5c7ba3", "#2b4263", "#101c31"],
    rv: ["#6a89b2", "#34507a", "#13213a"],
    bodyOpacity: 0.86,
    vessel: ["#6f8fb8", "#2f4a70"],
    vesselOpacity: 0.92,
    rim: "#c4d8f4",
    core: "#ff9158",
    glow: "#ff3d12",
    hot: "#fff0cf",
    centerGlow: 1,
    shade: "#050b16",
  },
} as const;

function Artery({ d, w, core, glow, blur }: { d: string; w: number; core: string; glow: string; blur: string }) {
  return (
    <g fill="none" strokeLinecap="round">
      <path d={d} stroke={glow} strokeWidth={w * 3.4} opacity="0.5" filter={`url(#${blur})`} />
      <path d={d} stroke={core} strokeWidth={w} opacity="0.98" />
      <path d={d} stroke="#fff3da" strokeWidth={w * 0.35} opacity="0.7" />
    </g>
  );
}

export function Heart({
  uid,
  variant = "light",
  className = "",
  beat = true,
}: {
  uid: string;
  variant?: "light" | "dark";
  className?: string;
  beat?: boolean;
}) {
  const p = palette[variant];
  const blur = `${uid}-glowblur`;

  const tube = (d: string, w: number) => (
    <g fill="none" strokeLinecap="round">
      <path d={d} stroke={`url(#${uid}-tube)`} strokeWidth={w} />
      <path d={d} stroke="#ffffff" strokeOpacity={variant === "light" ? 0.5 : 0.22} strokeWidth={w * 0.22} transform="translate(-1.5 -1.5)" />
    </g>
  );

  return (
    <svg
      viewBox="0 -40 400 510"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${uid}-lv`} cx="38%" cy="36%" r="78%">
          <stop offset="0" stopColor={p.lv[0]} />
          <stop offset="0.55" stopColor={p.lv[1]} />
          <stop offset="1" stopColor={p.lv[2]} />
        </radialGradient>
        <radialGradient id={`${uid}-rv`} cx="30%" cy="34%" r="80%">
          <stop offset="0" stopColor={p.rv[0]} />
          <stop offset="0.55" stopColor={p.rv[1]} />
          <stop offset="1" stopColor={p.rv[2]} />
        </radialGradient>
        <linearGradient id={`${uid}-tube`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.vessel[0]} />
          <stop offset="1" stopColor={p.vessel[1]} />
        </linearGradient>
        <linearGradient id={`${uid}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.rim} stopOpacity="0.95" />
          <stop offset="0.45" stopColor={p.rim} stopOpacity="0.12" />
          <stop offset="1" stopColor={p.rim} stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id={`${uid}-center`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={p.hot} stopOpacity="1" />
          <stop offset="0.14" stopColor={p.core} stopOpacity="0.95" />
          <stop offset="0.5" stopColor={p.glow} stopOpacity="0.38" />
          <stop offset="1" stopColor={p.glow} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor={p.shade} stopOpacity="0" />
          <stop offset="1" stopColor={p.shade} stopOpacity="0.38" />
        </linearGradient>
        <filter id={`${uid}-organic`} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="2" seed="4" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="9" />
        </filter>
        <filter id={`${uid}-soft`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
        <filter id={blur} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.6" />
        </filter>
        <clipPath id={`${uid}-clip`}>
          <path d={BODY} />
        </clipPath>
      </defs>

      <g className={beat ? "anim-heartbeat" : undefined}>
        {/* great vessels + appendages (behind the ventricles) */}
        <g filter={`url(#${uid}-organic)`} opacity={p.vesselOpacity}>
          {tube("M232 176C228 112 236 60 282 50C322 42 346 76 340 128", 38)}
          {tube("M262 56C258 36 262 18 258 -2", 16)}
          {tube("M292 48C296 30 304 14 312 -4", 14)}
          {tube("M322 54C338 42 354 36 372 40", 13)}
          {tube("M190 180C176 134 168 100 150 78", 32)}
          {tube("M150 80C128 68 100 72 78 92", 21)}
          {tube("M150 78C140 52 120 30 94 20", 17)}
          {tube("M118 178C106 134 102 92 112 46", 27)}
          <path d="M130 196C84 182 62 130 94 104C124 82 162 112 166 154C168 176 154 196 130 196Z" fill={`url(#${uid}-tube)`} />
          <path d="M296 176C334 144 386 158 386 204C386 238 350 250 320 228Z" fill={`url(#${uid}-tube)`} />
        </g>

        {/* ventricles */}
        <g filter={`url(#${uid}-organic)`}>
          <path d={BODY} fill={`url(#${uid}-rv)`} opacity={p.bodyOpacity} />
          <path
            d="M208 126C196 200 188 300 192 456C214 468 224 458 228 446C302 394 358 320 355 230C353 160 306 108 246 112C228 114 214 118 208 126Z"
            fill={`url(#${uid}-lv)`}
            opacity={p.bodyOpacity}
          />
          <path d={BODY} fill={`url(#${uid}-shade)`} />
          <path d={BODY} fill="none" stroke={`url(#${uid}-rim)`} strokeWidth="2.2" />
          <path d={GROOVE} fill="none" stroke={p.rim} strokeOpacity="0.22" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* glow + coronary network, clipped to the muscle */}
        <g clipPath={`url(#${uid}-clip)`}>
          <ellipse cx="204" cy="244" rx="150" ry="168" fill={`url(#${uid}-center)`} opacity={p.centerGlow} className="anim-glow" />

          <Artery d="M208 128C198 210 190 300 193 446" w={3.2} core={p.core} glow={p.glow} blur={blur} />
          <Artery d="M206 130C250 130 318 150 348 216" w={2.5} core={p.core} glow={p.glow} blur={blur} />
          <Artery d="M204 130C160 130 104 156 88 216" w={2.5} core={p.core} glow={p.glow} blur={blur} />

          <Vessels
            uid={`${uid}-n`}
            seed={31}
            core={p.core}
            glow={p.glow}
            blur={2.2}
            glowOpacity={0.45}
            coreScale={0.85}
            roots={[
              { x: 203, y: 168, angle: 0.28, len: 48, width: 1.9, depth: 4, spread: 0.7 },
              { x: 198, y: 214, angle: 2.9, len: 46, width: 1.9, depth: 4, spread: 0.7 },
              { x: 196, y: 252, angle: 0.22, len: 50, width: 1.9, depth: 4, spread: 0.7 },
              { x: 194, y: 292, angle: 2.95, len: 46, width: 1.8, depth: 4, spread: 0.7 },
              { x: 193, y: 332, angle: 0.3, len: 46, width: 1.7, depth: 4, spread: 0.7 },
              { x: 192, y: 372, angle: 2.85, len: 40, width: 1.6, depth: 4, spread: 0.7 },
              { x: 192, y: 410, angle: 0.4, len: 36, width: 1.5, depth: 3, spread: 0.7 },
              { x: 292, y: 142, angle: 1.35, len: 52, width: 1.9, depth: 4, spread: 0.7 },
              { x: 330, y: 184, angle: 1.15, len: 50, width: 1.8, depth: 4, spread: 0.7 },
              { x: 250, y: 134, angle: 1.55, len: 46, width: 1.7, depth: 4, spread: 0.7 },
              { x: 134, y: 140, angle: 1.7, len: 52, width: 1.9, depth: 4, spread: 0.7 },
              { x: 100, y: 190, angle: 1.9, len: 50, width: 1.8, depth: 4, spread: 0.7 },
              { x: 164, y: 134, angle: 1.45, len: 46, width: 1.7, depth: 4, spread: 0.7 },
            ]}
          />

          <ellipse
            cx="138"
            cy="190"
            rx="44"
            ry="22"
            transform="rotate(-38 138 190)"
            fill="#ffffff"
            opacity={variant === "light" ? 0.6 : 0.22}
            filter={`url(#${uid}-soft)`}
          />
        </g>
      </g>
    </svg>
  );
}
