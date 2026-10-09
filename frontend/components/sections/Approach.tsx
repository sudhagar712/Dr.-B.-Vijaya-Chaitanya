import { Heart } from "../art/Heart";
import { EcgLine } from "../art/EcgLine";
import { Heart3D } from "../Heart3D";
import { ArrowRight } from "../icons";
import { Reveal } from "../Reveal";

export function Approach() {
  return (
    <section
      id="approach"
      data-nav="about"
      aria-labelledby="approach-title"
      className="relative bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
        {/* real-time 3D beating heart */}
        <Reveal className="relative isolate aspect-[4/4.2] overflow-hidden rounded-[28px] bg-navy shadow-[0_40px_70px_-40px_rgba(11,34,57,0.7)] sm:aspect-[5/4] lg:aspect-[6/5] lg:rounded-[36px]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_48%,#1d4a72_0%,#0f2b47_55%,#081a2c_100%)]"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,64,0.28),transparent)] blur-2xl"
          />
          <EcgLine
            uid="approach-ecg"
            className="pointer-events-none absolute inset-x-0 bottom-[9%] h-[70px] w-full opacity-60"
          />

          <Heart3D interactive className="absolute inset-0">
            {/* fallback (also shown while the 3D model builds) */}
            <div className="absolute inset-y-[6%] left-1/2 -translate-x-1/2">
              <Heart uid="approach-heart" variant="dark" className="h-full w-auto" />
            </div>
          </Heart3D>

          <p
            className="pointer-events-none absolute bottom-5 left-6 flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.28em] text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Live 3D · Drag to rotate
          </p>
        </Reveal>

        {/* copy */}
        <div className="lg:max-w-[460px]">
          <p data-g="reveal" className="eyebrow">
            A Thoughtful Approach
          </p>
          <span data-g="reveal" className="rule mt-4" aria-hidden />
          <h2
            id="approach-title"
            data-g="split"
            className="display mt-6 text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.15] text-ink"
          >
            It’s about the patient, not just the numbers.
          </h2>
          <p data-g="reveal" className="mt-6 text-[14.5px] font-light leading-[1.9] text-slate">
            Understanding the patient, reading the anatomy, weighing the risks and choosing the
            right course of action — that’s what guides every decision.
          </p>
          <a
            data-g="reveal"
            href="#about"
            className="focus-ring group mt-8 inline-flex items-center gap-4 text-[13px] font-medium text-ink"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/60 text-secondary-deep transition-[background-color,color,border-color] group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
              <ArrowRight width={16} height={16} />
            </span>
            Explore His Approach
          </a>
        </div>
      </div>
    </section>
  );
}
