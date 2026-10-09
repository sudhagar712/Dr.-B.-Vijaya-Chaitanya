import Image from "next/image";
import { exercisePhoto } from "@/lib/exerciseImages";
import { EXERCISES, SITE, TIPS } from "@/lib/site";
import { EcgLine } from "../art/EcgLine";
import { EXERCISE_ART } from "../art/ExerciseArt";
import { Heart } from "../art/Heart";
import { ArrowRight, BowlIcon, LotusIcon, MoonIcon, WalkIcon } from "../icons";
import { Reveal } from "../Reveal";
import { ButtonLink } from "../ui";

const tipIcons = {
  diet: BowlIcon,
  sleep: MoonIcon,
  active: WalkIcon,
  stress: LotusIcon,
} as const;

export function HeartHealth() {
  return (
    <>
      {/* ---------------------------- exercises + guidance ---------------------------- */}
      <section
        id="heart-health"
        data-nav="heart-health"
        aria-labelledby="exercise-title"
        className="relative isolate overflow-hidden bg-offwhite py-16 md:py-20 lg:py-24"
      >
        <div
          aria-hidden
          className="absolute -right-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl"
        />

        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-[760px]">
              <p data-g="reveal" className="eyebrow">
                Recommended Exercises
              </p>
              <span data-g="reveal" className="rule mt-4" aria-hidden />
              <h2
                id="exercise-title"
                data-g="split"
                className="display mt-6 text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.15] text-ink"
              >
                Simple Steps. Stronger Hearts.
              </h2>
              <p data-g="reveal" className="mt-5 text-[14.5px] font-light leading-[1.9] text-slate">
                These exercises are commonly recommended for heart health. Your exercise plan
                should be personalised based on your medical condition and your doctor’s advice.
              </p>
            </div>
            <a
              data-g="reveal"
              href="#guidance"
              className="focus-ring group inline-flex w-fit items-center gap-2 text-[13px] font-medium text-primary transition-colors hover:text-secondary-deep"
            >
              Get your personalised plan
              <ArrowRight width={15} height={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {EXERCISES.map((ex, i) => {
              const Art = EXERCISE_ART[ex.id];
              const photo = exercisePhoto(ex.id);
              return (
                <Reveal as="li" key={ex.id} delay={i * 90}>
                  <article className="card group flex h-full flex-col overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-secondary/50 hover:shadow-[0_30px_60px_-34px_rgba(23,84,134,0.35)]">
                    <div className="relative aspect-[16/11] overflow-hidden bg-mist">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={`${ex.title} — a heart-healthy exercise`}
                          fill
                          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                      ) : (
                        <Art
                          uid={`ex-${ex.id}`}
                          className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                      )}
                      <span
                        aria-hidden
                        className="absolute left-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-medium tracking-[0.2em] text-secondary-deep backdrop-blur"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-[18px] font-normal tracking-[-0.01em] text-ink">{ex.title}</h3>
                      <p className="mt-2.5 flex-1 text-[13.5px] font-light leading-[1.8] text-slate">{ex.text}</p>
                      <a
                        href="#guidance"
                        aria-label={`Learn more about ${ex.title}`}
                        className="focus-ring mt-6 inline-flex w-fit items-center gap-2 text-[13px] font-medium text-primary transition-colors hover:text-secondary-deep"
                      >
                        Learn More
                        <ArrowRight
                          width={15}
                          height={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>

          {/* personalised guidance */}
          <div id="guidance" className="scroll-mt-28">
            <Reveal className="relative isolate mt-8 overflow-hidden rounded-[28px] bg-navy text-white shadow-[0_40px_80px_-46px_rgba(11,34,57,0.85)] lg:mt-10 lg:rounded-[36px]">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#081a2c_0%,#0b2239_45%,#17476e_100%)]"
              />
              <div
                aria-hidden
                className="absolute -left-10 top-1/2 -z-10 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,92,64,0.32),transparent)] blur-2xl"
              />
              <EcgLine
                uid="guidance-ecg"
                className="pointer-events-none absolute inset-x-0 bottom-3 -z-10 h-[70px] w-full opacity-45"
              />

              <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:gap-12 lg:px-14 lg:py-12">
                <div className="mx-auto h-[190px] lg:h-[220px]">
                  <Heart uid="guidance-heart" variant="dark" className="h-full w-auto" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="eyebrow !text-accent">Personalised Guidance</p>
                  <h3
                    data-g="split"
                    className="display mt-4 text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.22]"
                  >
                    Every Heart Is Different.
                    <br />
                    Your Exercise Plan Should Be, Too.
                  </h3>
                  <p className="mx-auto mt-4 max-w-[520px] text-[14px] font-light leading-[1.85] text-white/70 lg:mx-0">
                    Consult with {SITE.name} to understand which exercises are safe and suitable
                    for your heart health.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <ButtonLink href="#contact" variant="light">
                    Book a Consultation
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>

          <p className="mt-6 text-center text-[11.5px] font-light text-slate/80 lg:text-left">
            General information only — it does not replace medical advice. Always follow your
            cardiologist’s guidance before starting or changing an exercise routine.
          </p>
        </div>
      </section>

      {/* ---------------------------- lifestyle tips ---------------------------- */}
      <section
        id="lifestyle"
        data-nav="heart-health"
        aria-labelledby="tips-title"
        className="relative bg-white py-16 md:py-20 lg:py-24"
      >
        <div className="container-x">
          <div className="max-w-[640px]">
            <p data-g="reveal" className="eyebrow">
              Heart Health Tips
            </p>
            <span data-g="reveal" className="rule mt-4" aria-hidden />
            <h2
              id="tips-title"
              data-g="split"
              className="display mt-6 text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.15] text-ink"
            >
              More Than Exercise. A Healthier Lifestyle.
            </h2>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
            {TIPS.map((tip, i) => {
              const Icon = tipIcons[tip.id];
              return (
                <Reveal as="li" key={tip.id} delay={i * 80}>
                  <div className="card group flex h-full items-center gap-5 p-4 pr-5 transition-[border-color,box-shadow] duration-500 hover:border-secondary/50 hover:shadow-[0_26px_50px_-34px_rgba(23,84,134,0.35)]">
                    <span className="inline-flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-mist via-white to-mist text-secondary-deep ring-1 ring-inset ring-line transition-colors duration-500 group-hover:from-secondary group-hover:via-secondary group-hover:to-accent group-hover:text-white">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-medium tracking-[-0.005em] text-ink">{tip.title}</h3>
                      <p className="mt-1.5 text-[13px] font-light leading-[1.7] text-slate">{tip.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
