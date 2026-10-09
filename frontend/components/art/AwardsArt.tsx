/** Golden laurel wreath + glass trophies on a cool studio wall — "Awards & Recognitions". */
function Laurel({ uid, cx, cy, r }: { uid: string; cx: number; cy: number; r: number }) {
  const n = 15;
  const leaves = Array.from({ length: n }, (_, i) => {
    const t = i / (n - 1);
    // sweep from the bottom (~95°) up the side to the top (~-62°)
    const a = ((95 - t * 160) * Math.PI) / 180;
    const x = cx - Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    const tangent = (a * 180) / Math.PI;
    const size = 0.8 + Math.sin(t * Math.PI) * 0.45;
    return { x, y, rot: -tangent + 90 - 18, size };
  });
  const render = (mirror: boolean) =>
    leaves.map((l, i) => (
      <g
        key={`${mirror ? "r" : "l"}${i}`}
        transform={`translate(${mirror ? cx * 2 - l.x : l.x} ${l.y}) rotate(${mirror ? -l.rot : l.rot}) scale(${l.size})`}
      >
        <path
          d="M0 0C10-12 11-32 0-52C-11-32-10-12 0 0Z"
          fill={`url(#${uid}-leaf)`}
          stroke="#fff1bd"
          strokeOpacity="0.5"
          strokeWidth="0.8"
        />
        <path d="M0-4V-44" stroke="#fff4cc" strokeOpacity="0.5" strokeWidth="0.8" />
      </g>
    ));
  return (
    <g>
      <path
        d={`M${cx - r * 0.97} ${cy + r * 0.42}C${cx - r * 1.1} ${cy - r * 0.4} ${cx - r * 0.7} ${cy - r * 0.96} ${cx - r * 0.12} ${cy - r * 1.02}`}
        fill="none"
        stroke="#e8c26e"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d={`M${cx + r * 0.97} ${cy + r * 0.42}C${cx + r * 1.1} ${cy - r * 0.4} ${cx + r * 0.7} ${cy - r * 0.96} ${cx + r * 0.12} ${cy - r * 1.02}`}
        fill="none"
        stroke="#e8c26e"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {render(false)}
      {render(true)}
    </g>
  );
}

export function AwardsArt({ uid, className }: { uid: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 560"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id={`${uid}-wall`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef8f8" />
          <stop offset="0.45" stopColor="#a9cfd6" />
          <stop offset="0.8" stopColor="#1d4b6b" />
          <stop offset="1" stopColor="#0b2239" />
        </linearGradient>
        <linearGradient id={`${uid}-leaf`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff0b8" />
          <stop offset="0.5" stopColor="#e0b255" />
          <stop offset="1" stopColor="#9a6a24" />
        </linearGradient>
        <radialGradient id={`${uid}-halo`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff6dc" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#f7dca0" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f7dca0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="0.5" stopColor="#dff0f2" stopOpacity="0.25" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={`${uid}-dark`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#24557a" />
          <stop offset="1" stopColor="#081a2c" />
        </linearGradient>
        <linearGradient id={`${uid}-floor`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.55" />
        </linearGradient>
        <filter id={`${uid}-b2`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <rect width="1000" height="560" fill={`url(#${uid}-wall)`} />

      {/* soft architectural panels on the right */}
      <g opacity="0.55">
        <rect x="770" width="90" height="560" fill="#1a4668" />
        <rect x="860" width="70" height="560" fill="#12344f" />
        <rect x="930" width="70" height="560" fill="#0c2539" />
        <path d="M770 0V560M860 0V560M930 0V560" stroke="#000" strokeOpacity="0.35" strokeWidth="2" />
      </g>

      {/* bokeh */}
      <g filter={`url(#${uid}-b2)`}>
        <circle cx="140" cy="120" r="9" fill="#ffffff" opacity="0.8" />
        <circle cx="880" cy="170" r="8" fill="#8dd3ce" opacity="0.8" />
        <circle cx="940" cy="300" r="6" fill="#ffffff" opacity="0.6" />
        <circle cx="260" cy="60" r="6" fill="#ffffff" opacity="0.7" />
      </g>

      {/* wreath */}
      <g>
        <circle cx="580" cy="250" r="220" fill={`url(#${uid}-halo)`} />
        <Laurel uid={uid} cx={580} cy={256} r={150} />
        <g fill="none" stroke="#f0cd7c" strokeWidth="2.2" strokeLinecap="round">
          <path d="M580 306C560 280 556 248 580 224C604 248 600 280 580 306Z" />
          <path d="M580 306C538 296 522 260 534 234C556 242 570 272 580 306Z" opacity="0.8" />
          <path d="M580 306C622 296 638 260 626 234C604 242 590 272 580 306Z" opacity="0.8" />
        </g>
      </g>

      {/* left glass trophy */}
      <g transform="translate(-10 0)">
        <path d="M268 470 280 310 350 286 362 470Z" fill={`url(#${uid}-glass)`} stroke="#fff" strokeOpacity="0.8" strokeWidth="1.6" />
        <path d="M280 310 350 286 362 470 330 470 322 330Z" fill="#fff" opacity="0.2" />
        <circle cx="315" cy="378" r="16" fill="none" stroke="#fff" strokeOpacity="0.8" strokeWidth="1.4" />
        <rect x="262" y="470" width="106" height="12" fill="#ffffff" opacity="0.8" />
      </g>

      {/* right dark trophy */}
      <g transform="translate(96 0)">
        <path d="M708 478 716 362 764 336 790 362 800 478Z" fill={`url(#${uid}-dark)`} stroke="#e7c27a" strokeOpacity="0.85" strokeWidth="1.6" />
        <path d="M740 346 764 336 790 362 750 366Z" fill="#e7c27a" opacity="0.35" />
        <circle cx="752" cy="412" r="13" fill="none" stroke="#e7c27a" strokeOpacity="0.85" strokeWidth="1.4" />
        <rect x="700" y="478" width="108" height="12" fill="#0b2239" />
      </g>

      {/* counter */}
      <rect y="482" width="1000" height="78" fill="#f2f9f9" opacity="0.55" />
      <rect y="482" width="1000" height="78" fill={`url(#${uid}-floor)`} />
      <rect y="482" width="1000" height="2" fill="#fff" opacity="0.8" />
    </svg>
  );
}
