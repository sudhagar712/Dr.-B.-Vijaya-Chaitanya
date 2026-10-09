/**
 * Rolling-digit number. The server HTML already shows the final value (each strip is parked on
 * its final digit and the real text is in an sr-only span for crawlers / screen readers);
 * Motion.tsx rewinds the strips to 0 and rolls them up when the stat scrolls into view.
 */
export function Odometer({ value, className = "" }: { value: string; className?: string }) {
  return (
    <span className={`inline-flex items-baseline tabular-nums ${className}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden data-odometer className="inline-flex items-baseline">
        {[...value].map((ch, i) => {
          if (!/\d/.test(ch)) {
            return (
              <span key={i} className={ch === "," ? "px-[0.02em]" : "pl-[0.04em] text-secondary"}>
                {ch}
              </span>
            );
          }
          const d = Number(ch);
          return (
            <span
              key={i}
              data-digit
              data-to={d}
              className="relative inline-block h-[1.12em] overflow-hidden align-baseline"
            >
              <span
                data-strip
                className="block will-change-transform"
                style={{ transform: `translateY(${-((10 + d) / 30) * 100}%)` }}
              >
                {Array.from({ length: 30 }, (_, k) => (
                  <span key={k} className="block h-[1.12em] leading-[1.12]">
                    {k % 10}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
