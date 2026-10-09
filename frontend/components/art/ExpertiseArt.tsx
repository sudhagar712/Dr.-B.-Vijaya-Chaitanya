import { Vessels } from "./Vessels";

type ArtProps = { uid: string; className?: string };

const svgProps = {
  viewBox: "0 0 300 330",
  preserveAspectRatio: "xMidYMid slice" as const,
  "aria-hidden": true,
  focusable: false,
};

/* ------------------------------------------------------------------ */
/*  1 · Complex coronary interventions — stent inside a glowing artery */
/* ------------------------------------------------------------------ */
export function CoronaryArt({ uid, className }: ArtProps) {
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2a0d0f" />
          <stop offset="0.6" stopColor="#13090f" />
          <stop offset="1" stopColor="#07080d" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="52%" cy="40%" r="55%">
          <stop offset="0" stopColor="#ff7a3c" stopOpacity="0.85" />
          <stop offset="0.45" stopColor="#c8321a" stopOpacity="0.35" />
          <stop offset="1" stopColor="#c8321a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-tube`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f4f8" stopOpacity="0.15" />
          <stop offset="0.35" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.7" stopColor="#8d92a3" stopOpacity="0.35" />
          <stop offset="1" stopColor="#1b1d27" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id={`${uid}-art`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8f5a" />
          <stop offset="0.5" stopColor="#b02a1a" />
          <stop offset="1" stopColor="#4a0f10" />
        </linearGradient>
        <pattern id={`${uid}-mesh`} width="13" height="13" patternUnits="userSpaceOnUse">
          <path d="M0 0L13 13M13 0L0 13" stroke="#f1f1f6" strokeWidth="1.1" fill="none" />
        </pattern>
        <filter id={`${uid}-b`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect width="300" height="330" fill={`url(#${uid}-bg)`} />
      <rect width="300" height="330" fill={`url(#${uid}-glow)`} />

      <Vessels
        uid={`${uid}-v`}
        seed={5}
        core="#ff6a3a"
        glow="#ff3a14"
        glowOpacity={0.5}
        coreOpacity={0.75}
        roots={[
          { x: 0, y: 250, angle: -0.5, len: 70, width: 5, depth: 4, spread: 0.55 },
          { x: 0, y: 70, angle: 0.3, len: 60, width: 4, depth: 4, spread: 0.55 },
          { x: 300, y: 300, angle: -2.6, len: 60, width: 4, depth: 4, spread: 0.55 },
        ]}
      />

      {/* artery wall */}
      <g fill="none" strokeLinecap="round">
        <path d="M-30 262C70 208 150 150 340 56" stroke="#3c0c0e" strokeWidth="64" opacity="0.9" />
        <path d="M-30 262C70 208 150 150 340 56" stroke={`url(#${uid}-art)`} strokeWidth="50" opacity="0.8" />
        <path d="M-30 262C70 208 150 150 340 56" stroke="#ff9d6e" strokeWidth="8" opacity="0.45" filter={`url(#${uid}-b)`} />
        <path d="M-30 130C60 150 190 190 340 232" stroke="#4d0f12" strokeWidth="38" opacity="0.8" />
        <path d="M-30 130C60 150 190 190 340 232" stroke={`url(#${uid}-art)`} strokeWidth="28" opacity="0.55" />
      </g>

      {/* stent */}
      <g transform="rotate(-27 150 150)">
        <rect x="16" y="112" width="268" height="60" rx="30" fill="#05060a" opacity="0.5" />
        <rect x="16" y="112" width="268" height="60" rx="30" fill={`url(#${uid}-tube)`} opacity="0.55" />
        <rect x="16" y="112" width="268" height="60" rx="30" fill={`url(#${uid}-mesh)`} />
        <rect x="16" y="112" width="268" height="60" rx="30" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.4" />
        <ellipse cx="46" cy="142" rx="10" ry="29" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.2" />
      </g>
      <circle cx="170" cy="118" r="26" fill="#ffb27a" opacity="0.55" filter={`url(#${uid}-b)`} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  2 · Structural heart — TAVI valve frame on a dark stand            */
/* ------------------------------------------------------------------ */
export function StructuralArt({ uid, className }: ArtProps) {
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f2530" />
          <stop offset="1" stopColor="#090b10" />
        </linearGradient>
        <radialGradient id={`${uid}-warm`} cx="88%" cy="40%" r="55%">
          <stop offset="0" stopColor="#d9c3a2" stopOpacity="0.55" />
          <stop offset="1" stopColor="#d9c3a2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-secondary`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6b4e24" />
          <stop offset="0.45" stopColor="#f0cf8a" />
          <stop offset="1" stopColor="#7a5a2c" />
        </linearGradient>
        <linearGradient id={`${uid}-fabric`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#b9b8b4" />
          <stop offset="0.35" stopColor="#ffffff" />
          <stop offset="0.7" stopColor="#e6e3dc" />
          <stop offset="1" stopColor="#9d9a93" />
        </linearGradient>
        <linearGradient id={`${uid}-base`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#05060a" />
          <stop offset="0.3" stopColor="#2a2f3b" />
          <stop offset="0.6" stopColor="#0a0c12" />
          <stop offset="1" stopColor="#14171f" />
        </linearGradient>
        <pattern id={`${uid}-mesh`} width="15" height="15" patternUnits="userSpaceOnUse">
          <path d="M0 0L15 15M15 0L0 15" stroke={`url(#${uid}-secondary)`} strokeWidth="1.8" fill="none" />
        </pattern>
        <filter id={`${uid}-b`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="300" height="330" fill={`url(#${uid}-bg)`} />
      <rect width="300" height="330" fill={`url(#${uid}-warm)`} />
      <ellipse cx="262" cy="150" rx="26" ry="120" fill="#d7bf99" opacity="0.28" filter={`url(#${uid}-b)`} />

      {/* stand */}
      <path d="M52 224v34c0 15 43 27 98 27s98-12 98-27v-34Z" fill={`url(#${uid}-base)`} />
      <ellipse cx="150" cy="224" rx="98" ry="25" fill="#171b24" />
      <ellipse cx="150" cy="224" rx="98" ry="25" fill="none" stroke="#6b7283" strokeOpacity="0.55" strokeWidth="1.4" />
      <ellipse cx="150" cy="222" rx="70" ry="16" fill="#080a0f" />

      {/* valve */}
      <ellipse cx="150" cy="226" rx="64" ry="14" fill="#000" opacity="0.5" filter={`url(#${uid}-b)`} />
      <path
        d="M86 74C94 108 100 134 98 154C96 180 90 202 86 220C100 232 200 232 214 220C210 202 204 180 202 154C200 134 206 108 214 74Z"
        fill={`url(#${uid}-fabric)`}
      />
      <path d="M118 90v128M138 94v132M162 94v132M182 90v128" stroke="#8c8a84" strokeOpacity="0.35" strokeWidth="1" />
      <path
        d="M86 74C94 108 100 134 98 154C96 180 90 202 86 220C100 232 200 232 214 220C210 202 204 180 202 154C200 134 206 108 214 74Z"
        fill={`url(#${uid}-mesh)`}
      />
      <path
        d="M86 74C94 108 100 134 98 154C96 180 90 202 86 220M214 74C206 108 200 134 202 154C204 180 210 202 214 220"
        fill="none"
        stroke={`url(#${uid}-secondary)`}
        strokeWidth="3"
      />
      <ellipse cx="150" cy="74" rx="64" ry="15" fill="#d8d5cd" />
      <ellipse cx="150" cy="74" rx="64" ry="15" fill="none" stroke={`url(#${uid}-secondary)`} strokeWidth="3" />
      <path d="M96 76C110 98 130 98 150 80C170 98 190 98 204 76" fill="none" stroke="#6f6c65" strokeOpacity="0.55" strokeWidth="1.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  3 · Advanced cardiac imaging — angiogram style grayscale tree      */
/* ------------------------------------------------------------------ */
export function ImagingArt({ uid, className }: ArtProps) {
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b3f46" />
          <stop offset="0.5" stopColor="#1c1e23" />
          <stop offset="1" stopColor="#08090c" />
        </linearGradient>
        <radialGradient id={`${uid}-lung`} cx="35%" cy="30%" r="70%">
          <stop offset="0" stopColor="#9aa0a8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#9aa0a8" stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-b`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      <rect width="300" height="330" fill={`url(#${uid}-bg)`} />
      <ellipse cx="86" cy="110" rx="130" ry="140" fill={`url(#${uid}-lung)`} />
      <path
        d="M20 40C60 0 150 20 190 90C225 150 210 230 150 280C110 310 40 290 20 220Z"
        fill="#aab0b8"
        opacity="0.12"
        filter={`url(#${uid}-b)`}
      />
      <Vessels
        uid={`${uid}-v`}
        seed={21}
        core="#e9ecf0"
        glow="#b8c0cc"
        glowOpacity={0.35}
        coreOpacity={0.62}
        blur={2}
        roots={[
          { x: 8, y: 20, angle: 0.75, len: 62, width: 5.6, depth: 5, spread: 0.7, bend: 0.7 },
          { x: 30, y: 0, angle: 1.1, len: 58, width: 4.6, depth: 5, spread: 0.7, bend: 0.7 },
          { x: 0, y: 110, angle: 0.25, len: 60, width: 4.2, depth: 5, spread: 0.7, bend: 0.7 },
          { x: 70, y: 0, angle: 1.45, len: 52, width: 3.6, depth: 5, spread: 0.7, bend: 0.7 },
        ]}
      />
      <g stroke="#ffffff" strokeOpacity="0.12" fill="none">
        <circle cx="236" cy="70" r="40" />
        <circle cx="236" cy="70" r="26" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  4 · Peripheral vascular — glowing vessels through the legs         */
/* ------------------------------------------------------------------ */
export function PeripheralArt({ uid, className }: ArtProps) {
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10151f" />
          <stop offset="1" stopColor="#05070b" />
        </linearGradient>
        <linearGradient id={`${uid}-leg`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7e92ad" stopOpacity="0.05" />
          <stop offset="0.5" stopColor="#9db0c9" stopOpacity="0.42" />
          <stop offset="1" stopColor="#7e92ad" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id={`${uid}-red`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff9a6a" />
          <stop offset="0.5" stopColor="#ff4a22" />
          <stop offset="1" stopColor="#a31a10" />
        </linearGradient>
        <filter id={`${uid}-b`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <rect width="300" height="330" fill={`url(#${uid}-bg)`} />

      {/* ghost legs */}
      <path d="M52-10C120-10 160 40 150 120C142 190 118 240 128 340H40C46 250 30 180 24 110C18 40 28-10 52-10Z" fill={`url(#${uid}-leg)`} />
      <path d="M190-10C250-10 290 30 292 110C294 180 262 240 270 340H170C176 250 160 200 160 130C160 60 150-10 190-10Z" fill={`url(#${uid}-leg)`} opacity="0.8" />

      {/* arteries */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g filter={`url(#${uid}-b)`} opacity="0.75">
          <path d="M78-10C100 60 120 110 98 180C84 224 100 280 92 340" stroke="#ff3d14" strokeWidth="20" />
          <path d="M226-10C240 60 214 120 222 190C228 240 214 290 228 340" stroke="#ff3d14" strokeWidth="18" />
        </g>
        <path d="M78-10C100 60 120 110 98 180C84 224 100 280 92 340" stroke="#4f0c0a" strokeWidth="16" />
        <path d="M78-10C100 60 120 110 98 180C84 224 100 280 92 340" stroke={`url(#${uid}-red)`} strokeWidth="9" />
        <path d="M78-10C100 60 120 110 98 180C84 224 100 280 92 340" stroke="#ffd2b0" strokeWidth="1.6" opacity="0.6" />
        <path d="M226-10C240 60 214 120 222 190C228 240 214 290 228 340" stroke="#4f0c0a" strokeWidth="15" />
        <path d="M226-10C240 60 214 120 222 190C228 240 214 290 228 340" stroke={`url(#${uid}-red)`} strokeWidth="8" />
        <path d="M226-10C240 60 214 120 222 190C228 240 214 290 228 340" stroke="#ffd2b0" strokeWidth="1.6" opacity="0.6" />
        <path d="M54 30C70 80 60 130 76 190C84 230 70 280 66 340" stroke="#d63a20" strokeWidth="3" opacity="0.8" />
        <path d="M250 40C268 90 252 150 262 200C268 250 258 300 262 340" stroke="#d63a20" strokeWidth="3" opacity="0.8" />
      </g>
      <Vessels
        uid={`${uid}-v`}
        seed={9}
        core="#ff7a4a"
        glow="#ff3a14"
        glowOpacity={0.35}
        coreOpacity={0.7}
        blur={2}
        roots={[
          { x: 110, y: 120, angle: 0.3, len: 28, width: 1.8, depth: 3, spread: 0.6 },
          { x: 100, y: 214, angle: -0.5, len: 26, width: 1.6, depth: 3, spread: 0.6 },
          { x: 216, y: 110, angle: 2.8, len: 28, width: 1.8, depth: 3, spread: 0.6 },
          { x: 224, y: 230, angle: 0.4, len: 26, width: 1.6, depth: 3, spread: 0.6 },
        ]}
      />
    </svg>
  );
}

export const EXPERTISE_ART = {
  coronary: CoronaryArt,
  structural: StructuralArt,
  imaging: ImagingArt,
  peripheral: PeripheralArt,
} as const;
