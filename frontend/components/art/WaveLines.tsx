/** Fine flowing line-work that decorates the corners of light & dark sections. */
export function WaveLines({
  className = "",
  stroke = "#cdbfa9",
  count = 26,
  flipX = false,
  flipY = false,
  uid = "wave",
}: {
  className?: string;
  stroke?: string;
  count?: number;
  flipX?: boolean;
  flipY?: boolean;
  uid?: string;
}) {
  const lines = Array.from({ length: count }, (_, i) => {
    const o = i * 2.1;
    return `M0 ${196 - o * 0.6} C 150 ${130 + o}, 330 ${210 - o * 1.1}, 600 ${70 + o * 1.5}`;
  });
  return (
    <svg
      viewBox="0 0 600 240"
      preserveAspectRatio="none"
      aria-hidden
      focusable="false"
      className={className}
      style={{ transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})` }}
    >
      <defs>
        {/* fade the strands out toward the inner edge so there is no hard cut */}
        <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id={`${uid}-mask`}>
          <rect width="600" height="240" fill={`url(#${uid}-fade)`} />
        </mask>
      </defs>
      <g fill="none" stroke={stroke} strokeWidth="0.7" mask={`url(#${uid}-mask)`}>
        {lines.map((d, i) => (
          <path key={i} d={d} opacity={0.25 + (i / count) * 0.65} />
        ))}
      </g>
    </svg>
  );
}
