import { vesselTree, type VesselRoot } from "@/lib/vessels";

/** Glowing vessel network: soft blurred under-glow + crisp core strokes. */
export function Vessels({
  uid,
  seed,
  roots,
  core = "#ff8a5c",
  glow = "#ff4a1c",
  glowOpacity = 0.55,
  coreOpacity = 0.95,
  blur = 3,
  coreScale = 1,
}: {
  uid: string;
  seed: number;
  roots: VesselRoot[];
  core?: string;
  glow?: string;
  glowOpacity?: number;
  coreOpacity?: number;
  blur?: number;
  coreScale?: number;
}) {
  const groups = vesselTree(seed, roots);
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <filter id={`${uid}-vblur`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={blur} />
        </filter>
      </defs>
      <g filter={`url(#${uid}-vblur)`} stroke={glow} opacity={glowOpacity}>
        {groups.map((g) => (
          <path key={`g${g.w}`} d={g.d} strokeWidth={g.w * 2.4} />
        ))}
      </g>
      <g stroke={core} opacity={coreOpacity}>
        {groups.map((g) => (
          <path key={`c${g.w}`} d={g.d} strokeWidth={Math.max(0.35, g.w * coreScale)} />
        ))}
      </g>
    </g>
  );
}
