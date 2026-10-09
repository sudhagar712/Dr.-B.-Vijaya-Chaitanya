/** Heartbeat trace with a bright pulse that sweeps along it (pure SVG + CSS, zero JS). */
const BEAT =
  "l60 0 l10 -9 l12 9 l34 0 l8 10 l12 -64 l14 84 l10 -30 l34 0 l16 -16 l18 16 l70 0";

export function EcgLine({ className = "", uid = "ecg" }: { className?: string; uid?: string }) {
  const d = `M0 70 ${BEAT} ${BEAT} ${BEAT} ${BEAT} ${BEAT.split(" ").slice(0, 8).join(" ")}`;
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1200 140"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8dd3ce" stopOpacity="0" />
          <stop offset="0.5" stopColor="#8dd3ce" stopOpacity="1" />
          <stop offset="1" stopColor="#8dd3ce" stopOpacity="0" />
        </linearGradient>
        <filter id={`${uid}-b`} x="-10%" y="-60%" width="120%" height="220%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <path d={d} fill="none" stroke="#8dd3ce" strokeOpacity="0.16" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          className="ecg-sweep"
          pathLength="1000"
          d={d}
          stroke="#8dd3ce"
          strokeWidth="5"
          opacity="0.65"
          filter={`url(#${uid}-b)`}
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="ecg-sweep"
          pathLength="1000"
          d={d}
          stroke="#e9fbf9"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
