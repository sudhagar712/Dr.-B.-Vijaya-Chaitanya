/** Sunrise mountain road — backdrop for "The Journey". */
export function Landscape({ uid, className }: { uid: string; className?: string }) {
  const trees: [number, number, number][] = [
    [1290, 292, 18], [1318, 300, 14], [1262, 306, 12], [1350, 318, 16], [1408, 336, 20],
    [1452, 352, 16], [1086, 360, 11], [1052, 372, 13], [960, 408, 14], [930, 420, 10],
    [1510, 380, 18], [1560, 396, 14], [820, 456, 12], [790, 470, 16],
  ];
  return (
    <svg
      viewBox="0 0 1600 560"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e3f3f3" />
          <stop offset="0.42" stopColor="#cde8ee" />
          <stop offset="0.78" stopColor="#e9e6dc" />
          <stop offset="1" stopColor="#f3d3b4" />
        </linearGradient>
        <radialGradient id={`${uid}-sun`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff9e2" stopOpacity="1" />
          <stop offset="0.2" stopColor="#ffe9b5" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#ffd199" stopOpacity="0.3" />
          <stop offset="1" stopColor="#ffd199" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-far`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fb2c8" />
          <stop offset="1" stopColor="#d3e8ee" />
        </linearGradient>
        <linearGradient id={`${uid}-mid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5f8fab" />
          <stop offset="1" stopColor="#b5d3dc" />
        </linearGradient>
        <linearGradient id={`${uid}-hill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b7a86" />
          <stop offset="0.55" stopColor="#1f5568" />
          <stop offset="1" stopColor="#102f44" />
        </linearGradient>
        <linearGradient id={`${uid}-road`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ffd9a1" stopOpacity="0.1" />
          <stop offset="0.5" stopColor="#ffe9c0" />
          <stop offset="1" stopColor="#fff6dd" />
        </linearGradient>
        <filter id={`${uid}-b`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id={`${uid}-b2`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <rect width="1600" height="560" fill={`url(#${uid}-sky)`} />
      <circle cx="1196" cy="170" r="330" fill={`url(#${uid}-sun)`} />
      <g opacity="0.55" filter={`url(#${uid}-b2)`}>
        <ellipse cx="900" cy="150" rx="260" ry="22" fill="#f4fbfb" />
        <ellipse cx="400" cy="210" rx="320" ry="24" fill="#f4fbfb" />
      </g>

      {/* far ridges */}
      <path
        d="M0 330 140 280 260 318 430 236 560 300 740 214 920 292 1100 200 1260 270 1420 226 1600 292V560H0Z"
        fill={`url(#${uid}-far)`}
        opacity="0.75"
      />
      <path
        d="M0 380 170 320 330 366 520 290 700 350 880 276 1040 330 1210 262 1380 318 1600 270V560H0Z"
        fill={`url(#${uid}-mid)`}
        opacity="0.85"
      />
      <rect y="300" width="1600" height="130" fill="#e4f2f3" opacity="0.35" filter={`url(#${uid}-b2)`} />

      {/* main hill */}
      <path
        d="M520 560C700 470 860 440 1000 400C1090 374 1120 330 1150 290C1170 262 1186 244 1198 240C1240 252 1330 300 1420 338C1500 372 1560 396 1600 410V560Z"
        fill={`url(#${uid}-hill)`}
      />
      <path
        d="M1198 240C1240 252 1330 300 1420 338C1500 372 1560 396 1600 410V300C1500 280 1400 262 1198 240Z"
        fill="#ffd9a0"
        opacity="0.18"
      />

      {/* winding road */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M600 536C760 512 880 500 990 462C1080 432 1040 396 1130 380C1210 366 1290 346 1226 316C1180 296 1150 300 1190 266"
          stroke="#ffcf8a"
          strokeWidth="16"
          opacity="0.55"
          filter={`url(#${uid}-b)`}
        />
        <path
          d="M600 536C760 512 880 500 990 462C1080 432 1040 396 1130 380C1210 366 1290 346 1226 316C1180 296 1150 300 1190 266"
          stroke={`url(#${uid}-road)`}
          strokeWidth="6"
        />
        <path
          d="M1226 316C1290 332 1380 352 1480 380"
          stroke="#ffe6b8"
          strokeWidth="3"
          opacity="0.55"
        />
      </g>

      {/* trees */}
      <g fill="#1b4a4c" opacity="0.9">
        {trees.map(([x, y, r], i) => (
          <g key={i}>
            <ellipse cx={x} cy={y} rx={r} ry={r * 1.25} />
            <ellipse cx={x + r * 0.5} cy={y + r * 0.2} rx={r * 0.7} ry={r} fill="#2b6866" />
          </g>
        ))}
      </g>

      {/* tower + lamps */}
      <circle cx="1198" cy="232" r="36" fill="#fff0c4" opacity="0.8" filter={`url(#${uid}-b)`} />
      <path d="M1194 244 1196 214 1198 202 1200 214 1202 244Z" fill="#0f3348" />
      <circle cx="1198" cy="200" r="3.2" fill="#fff6d6" />
      <g fill="#fff2c8">
        <circle cx="1052" cy="394" r="5" opacity="0.9" />
        <circle cx="1052" cy="394" r="16" opacity="0.35" filter={`url(#${uid}-b)`} />
        <circle cx="1254" cy="332" r="3.4" opacity="0.9" />
      </g>
    </svg>
  );
}
