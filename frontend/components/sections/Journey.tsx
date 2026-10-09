import { JOURNEY } from "@/lib/site";
import { Landscape } from "../art/Landscape";
import { BuildingHeartIcon, CapIcon, MedalIcon } from "../icons";

const icons = { role: BuildingHeartIcon, fellowship: MedalIcon, degree: CapIcon } as const;
import { Reveal } from "../Reveal";

export function Journey() {
  return (
    <section
      id="journey"
      data-nav="journey"
      aria-labelledby="journey-title"
      className="relative bg-offwhite py-16 md:py-20 lg:py-28"
    >
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        {/* ---- intro + visual (stays in view while the timeline scrolls) ---- */}
        <div className="lg:sticky lg:top-[112px] lg:self-start">
          <p data-g="reveal" className="eyebrow">
            The Journey
          </p>
          <span data-g="reveal" className="rule mt-4" aria-hidden />
          <h2
            id="journey-title"
            data-g="split"
            className="display mt-6 max-w-[520px] text-[clamp(1.8rem,2.8vw,2.6rem)] leading-[1.2] text-ink"
          >
            A path shaped by learning, experience and a commitment to better care.
          </h2>

          <Reveal className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-[28px] shadow-[0_40px_70px_-44px_rgba(16,42,67,0.6)] md:block">
            <div data-g="parallax" data-speed="0.05" className="absolute inset-0">
              <Landscape uid="journey" className="h-full w-full" />
            </div>
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/55 to-transparent"
            />
            <p className="absolute bottom-5 left-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white/90">
              Learning · Experience · Care
            </p>
          </Reveal>
        </div>

        {/* ---- timeline ---- */}
        <ol className="relative">
          <span aria-hidden className="absolute bottom-3 left-[11px] top-3 w-px bg-line" />
          <span
            aria-hidden
            data-timeline-line
            className="absolute bottom-3 left-[11px] top-3 w-[2px] -translate-x-px rounded-full bg-secondary"
          />

          {JOURNEY.map((j, i) => {
            const Icon = icons[j.kind];
            const current = i === 0;
            return (
              <Reveal as="li" key={j.label} delay={i * 60} className="relative pb-10 pl-14 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute left-0 top-[18px] flex h-[23px] w-[23px] items-center justify-center rounded-full border bg-white shadow-[0_0_0_6px_#f5f8fa] ${
                    current ? "border-secondary" : "border-secondary/40"
                  }`}
                >
                  <span
                    className={`rounded-full bg-secondary ${current ? "anim-glow h-[11px] w-[11px]" : "h-[9px] w-[9px]"}`}
                  />
                </span>

                <p className="text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-none tracking-[-0.035em] text-ink">
                  {j.label}
                </p>

                <div className="card mt-4 flex items-start gap-4 p-5 sm:p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-secondary-deep">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-medium leading-snug text-ink">{j.title}</h3>
                    {j.details.map((d) => (
                      <p key={d} className="mt-1.5 text-[13.5px] font-light leading-relaxed text-slate">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
