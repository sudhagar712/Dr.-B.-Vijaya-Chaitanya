/**
 * Deterministic branching "vessel tree" generator used by the SVG artwork.
 * Same seed → same output on server and client, so there is no hydration drift.
 */

export type VesselRoot = {
  x: number;
  y: number;
  /** radians; 0 = right, π/2 = down (SVG coordinates) */
  angle: number;
  len: number;
  width: number;
  depth: number;
  /** branching angle in radians */
  spread?: number;
  /** random wobble applied to each segment, radians */
  bend?: number;
  /** length multiplier per generation */
  taper?: number;
};

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

/** Returns path data grouped by stroke width (fewer DOM nodes). */
export function vesselTree(seed: number, roots: VesselRoot[]): { w: number; d: string }[] {
  const rand = mulberry32(seed);
  const buckets = new Map<number, string>();

  const push = (w: number, d: string) => {
    const key = Math.round(w * 10) / 10;
    buckets.set(key, (buckets.get(key) ?? "") + d);
  };

  const grow = (
    x: number,
    y: number,
    angle: number,
    len: number,
    width: number,
    depth: number,
    spread: number,
    bend: number,
    taper: number,
  ) => {
    const a1 = angle + (rand() - 0.5) * bend;
    const x1 = x + Math.cos(a1) * len;
    const y1 = y + Math.sin(a1) * len;
    const side = (rand() - 0.5) * len * 0.55;
    const mx = (x + x1) / 2 + Math.cos(angle + Math.PI / 2) * side;
    const my = (y + y1) / 2 + Math.sin(angle + Math.PI / 2) * side;
    push(width, `M${r1(x)} ${r1(y)}Q${r1(mx)} ${r1(my)} ${r1(x1)} ${r1(y1)}`);
    if (depth <= 0 || width < 0.18) return;

    const roll = rand();
    const kids = roll > 0.82 ? 3 : roll > 0.16 ? 2 : 1;
    for (let i = 0; i < kids; i++) {
      const dir = kids === 1 ? (rand() - 0.5) * 0.5 : (i / (kids - 1) - 0.5) * 2;
      const off = dir * spread * (0.65 + rand() * 0.55);
      grow(
        x1,
        y1,
        a1 + off,
        len * (taper - 0.06 + rand() * 0.14),
        width * 0.74,
        depth - 1,
        spread,
        bend,
        taper,
      );
    }
  };

  for (const r of roots) {
    grow(r.x, r.y, r.angle, r.len, r.width, r.depth, r.spread ?? 0.62, r.bend ?? 0.5, r.taper ?? 0.8);
  }

  return [...buckets.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([w, d]) => ({ w, d }));
}
