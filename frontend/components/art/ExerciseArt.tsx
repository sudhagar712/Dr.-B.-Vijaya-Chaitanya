/**
 * Flat vector scenes for the "Recommended Exercises" cards (palette-matched, resolution independent).
 * To use real photography instead, pass an `image` to the card — see HeartHealth.tsx.
 */

type ArtProps = { uid: string; className?: string };

const NAVY = "#102a43";
const PRIMARY = "#175486";
const TEAL = "#409f9d";
const AQUA = "#8dd3ce";
const SKIN = "#e8b698";
const HAIR = "#1b2a3c";

const svgProps = {
  viewBox: "0 0 320 200",
  preserveAspectRatio: "xMidYMid slice" as const,
  "aria-hidden": true,
  focusable: false,
};

const limb = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Head({ x, y, tilt = 0 }: { x: number; y: number; tilt?: number }) {
  return (
    <g transform={`rotate(${tilt} ${x} ${y})`}>
      <circle cx={x} cy={y} r="12" fill={SKIN} />
      <path d={`M${x - 12.5} ${y - 1}A12.5 12.5 0 0 1 ${x + 12.5} ${y - 2}Q${x + 6} ${y - 9} ${x - 2} ${y - 7}Q${x - 9} ${y - 6} ${x - 12.5} ${y - 1}Z`} fill={HAIR} />
    </g>
  );
}

/* ------------------------------ Walking (park) ------------------------------ */
export function WalkingArt({ uid, className }: ArtProps) {
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dff1ef" />
          <stop offset="1" stopColor="#f6fbfb" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#${uid}-sky)`} />
      <circle cx="262" cy="46" r="26" fill="#fff" opacity="0.9" />
      <circle cx="262" cy="46" r="14" fill={AQUA} opacity="0.55" />
      <path d="M0 140C50 116 100 132 160 120S270 112 320 130V200H0Z" fill="#bfe4df" />
      <path d="M0 158C70 140 130 152 200 142S290 140 320 150V200H0Z" fill="#9ed3cc" />
      {/* trees */}
      <g>
        <rect x="46" y="112" width="5" height="34" rx="2" fill="#2f6f73" />
        <circle cx="48" cy="100" r="25" fill={TEAL} opacity="0.85" />
        <circle cx="36" cy="112" r="15" fill="#2f8c8a" opacity="0.8" />
        <rect x="262" y="104" width="5" height="40" rx="2" fill="#2f6f73" />
        <circle cx="264" cy="90" r="30" fill="#2f8c8a" opacity="0.85" />
        <circle cx="282" cy="104" r="16" fill={TEAL} opacity="0.8" />
      </g>
      {/* path */}
      <path d="M96 200C120 176 150 166 200 164L320 164V200Z" fill="#e9f3f1" />
      {/* walker */}
      <ellipse cx="160" cy="170" rx="40" ry="4.5" fill={NAVY} opacity="0.14" />
      <g {...limb}>
        <path d="M162 112L146 140L128 164" stroke={NAVY} strokeWidth="10" opacity="0.85" />
        <path d="M164 72L148 94L146 112" stroke={SKIN} strokeWidth="7" />
        <path d="M162 112L178 138L188 164" stroke={NAVY} strokeWidth="10" />
        <path d="M164 68L162 112" stroke={TEAL} strokeWidth="23" />
        <path d="M165 72L181 90L188 108" stroke={SKIN} strokeWidth="7" />
      </g>
      <ellipse cx="126" cy="166" rx="9" ry="4" fill={PRIMARY} />
      <ellipse cx="192" cy="166" rx="9" ry="4" fill={PRIMARY} />
      <Head x={166} y={48} tilt={4} />
    </svg>
  );
}

/* ------------------------------ Cycling (studio) ------------------------------ */
export function CyclingArt({ uid, className }: ArtProps) {
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6f4f4" />
          <stop offset="1" stopColor="#f7fbfc" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#${uid}-bg)`} />
      {/* window */}
      <g opacity="0.9">
        <rect x="196" y="22" width="92" height="104" rx="6" fill="#cfe9ec" />
        <path d="M242 22V126M196 74H288" stroke="#fff" strokeWidth="3" />
        <path d="M206 112c16-26 36-32 52-18s20 20 30 22" fill="none" stroke={AQUA} strokeWidth="3" opacity="0.7" />
      </g>
      <rect y="168" width="320" height="32" fill="#cfe3e6" />
      <ellipse cx="166" cy="170" rx="82" ry="5" fill={NAVY} opacity="0.12" />
      {/* bike */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="116" cy="146" r="27" stroke={NAVY} strokeWidth="4" />
        <circle cx="216" cy="146" r="27" stroke={NAVY} strokeWidth="4" />
        <circle cx="116" cy="146" r="3" fill={NAVY} />
        <circle cx="216" cy="146" r="3" fill={NAVY} />
        <path d="M116 146L148 102L164 146L116 146M148 102L202 106L164 146M202 106L216 146M202 106L208 96" stroke={PRIMARY} strokeWidth="4.5" />
        <path d="M143 98H156" stroke={NAVY} strokeWidth="5" />
      </g>
      {/* rider */}
      <g {...limb}>
        <path d="M152 98L172 122L166 148" stroke={NAVY} strokeWidth="10" />
        <path d="M150 98L160 124L160 148" stroke={NAVY} strokeWidth="10" opacity="0.7" />
        <path d="M152 96L186 72" stroke={TEAL} strokeWidth="20" />
        <path d="M184 76L208 96" stroke={SKIN} strokeWidth="7" />
      </g>
      <Head x={196} y={58} tilt={22} />
    </svg>
  );
}

/* ------------------------------ Gentle stretching (beach) ------------------------------ */
export function StretchingArt({ uid, className }: ArtProps) {
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9eff0" />
          <stop offset="1" stopColor="#f6fbfb" />
        </linearGradient>
        <linearGradient id={`${uid}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={AQUA} />
          <stop offset="1" stopColor={TEAL} />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#${uid}-sky)`} />
      <circle cx="64" cy="56" r="30" fill="#fff" opacity="0.85" />
      <circle cx="64" cy="56" r="16" fill={AQUA} opacity="0.5" />
      <rect y="112" width="320" height="38" fill={`url(#${uid}-sea)`} opacity="0.9" />
      <path d="M0 126c40-8 80 6 120-2s100-8 200 4" fill="none" stroke="#fff" strokeWidth="2" opacity="0.5" />
      <path d="M0 150C80 140 160 156 320 146V200H0Z" fill="#e7f1ef" />
      <ellipse cx="156" cy="172" rx="48" ry="5" fill={NAVY} opacity="0.13" />
      {/* stretcher */}
      <g {...limb}>
        <path d="M152 114L134 142L124 168" stroke={NAVY} strokeWidth="10" />
        <path d="M152 114L172 142L184 168" stroke={NAVY} strokeWidth="10" />
        <path d="M152 114L146 72" stroke={TEAL} strokeWidth="23" />
        <path d="M150 78L158 98L152 112" stroke={SKIN} strokeWidth="7" />
        <path d="M144 76L132 46L108 30" stroke={SKIN} strokeWidth="7" />
      </g>
      <ellipse cx="122" cy="170" rx="9" ry="4" fill={PRIMARY} />
      <ellipse cx="188" cy="170" rx="9" ry="4" fill={PRIMARY} />
      <Head x={146} y={54} tilt={-14} />
    </svg>
  );
}

/* ------------------------------ Strength training (gym) ------------------------------ */
export function StrengthArt({ uid, className }: ArtProps) {
  const bell = (x: number, y: number) => (
    <g>
      <rect x={x - 17} y={y - 2.5} width="34" height="5" rx="2.5" fill={NAVY} />
      <rect x={x - 21} y={y - 11} width="8" height="22" rx="3" fill={PRIMARY} />
      <rect x={x + 13} y={y - 11} width="8" height="22" rx="3" fill={PRIMARY} />
    </g>
  );
  return (
    <svg {...svgProps} className={className}>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dbeaf0" />
          <stop offset="1" stopColor="#f3f8fa" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#${uid}-bg)`} />
      {/* gym backdrop: window + rack */}
      <rect x="22" y="26" width="84" height="92" rx="6" fill="#c7e0e8" />
      <path d="M64 26V118M22 72H106" stroke="#fff" strokeWidth="3" />
      <g opacity="0.55" fill={PRIMARY}>
        <rect x="236" y="70" width="60" height="5" rx="2.5" />
        <rect x="236" y="96" width="60" height="5" rx="2.5" />
        <rect x="236" y="122" width="60" height="5" rx="2.5" />
        <rect x="234" y="62" width="5" height="76" rx="2.5" />
        <rect x="293" y="62" width="5" height="76" rx="2.5" />
      </g>
      <rect y="168" width="320" height="32" fill="#c9dde3" />
      <ellipse cx="160" cy="170" rx="46" ry="5" fill={NAVY} opacity="0.14" />
      {/* lifter */}
      <g {...limb}>
        <path d="M160 114L146 142L142 168" stroke={NAVY} strokeWidth="11" />
        <path d="M160 114L174 142L178 168" stroke={NAVY} strokeWidth="11" />
        <path d="M160 68L160 114" stroke={AQUA} strokeWidth="25" />
        <path d="M148 76L128 94L130 66" stroke={SKIN} strokeWidth="7.5" />
        <path d="M172 76L192 94L190 66" stroke={SKIN} strokeWidth="7.5" />
      </g>
      {bell(130, 62)}
      {bell(190, 62)}
      <ellipse cx="140" cy="170" rx="10" ry="4" fill={PRIMARY} />
      <ellipse cx="180" cy="170" rx="10" ry="4" fill={PRIMARY} />
      <Head x={160} y={48} />
    </svg>
  );
}

export const EXERCISE_ART = {
  walking: WalkingArt,
  cycling: CyclingArt,
  stretching: StretchingArt,
  strength: StrengthArt,
} as const;
