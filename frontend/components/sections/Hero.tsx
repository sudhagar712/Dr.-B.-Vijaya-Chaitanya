import Image from "next/image";
import { EXPERTISE, HERO_STATS, SITE } from "@/lib/site";
import { Heart } from "../art/Heart";
import { Heart3D } from "../Heart3D";
import { BuildingHeartIcon, HeartPulseIcon } from "../icons";
import { IntroVideo } from "../IntroVideo";
import { ButtonLink } from "../ui";

const LINES = ["Complex", "Hearts.", "Clearer", "Decisions."];

const SPECIALTIES = [
  { title: "Complex Coronary Angioplasty", tag: "Advanced PCI" },
  { title: "Primary PCI", tag: "24/7 Emergency" },
  { title: "Structural Heart Interventions", tag: "TAVI / TAVR" },
  { title: "Advanced Cardiac Imaging", tag: "IVUS · OCT" },
  { title: "Peripheral Vascular Interventions", tag: "Limb Salvage" },
  { title: "Pacemaker · ICD · CRT Implantation", tag: "Device Therapy" },
  { title: "Rotablation & Calcified Lesions", tag: "Atherectomy" },
  { title: "Bifurcation & CTO Interventions", tag: "Complex Cases" },
] as const;

/**
 * Layout notes
 * - Desktop is a real two-column grid inside the shared container, so the copy and the
 *   portrait can never overlap and always line up with the header + every other section.
 * - The headline is sized by BOTH width and height so it fits short laptop screens
 *   (1366×768, 1280×720) as well as 1440p / 4K monitors.
 * - Depth: arch, portrait, heart and glass badges all drift at different speeds with the pointer
 *   (data-pointer) and with scroll (data-parallax-hero) — see Motion.tsx.
 */
export function Hero() {
  return (
    <>
      <section
        id="home"
        data-nav="home"
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden bg-white pt-(--header-h) lg:flex lg:h-[clamp(640px,100svh,920px)] lg:items-stretch lg:pt-0"
      >
        {/* soft clinical backdrop */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(75%_85%_at_74%_42%,#eaf6f5_0%,#ffffff_68%)]" />
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#175486_0.9px,transparent_0.9px)] bg-size-[26px_26px] mask-[radial-gradient(48%_62%_at_76%_42%,#000,transparent)]" />
          <div className="absolute -left-32 top-[8%] h-105 w-105 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white to-transparent" />
        </div>

        <div className="container-x flex flex-col lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-stretch lg:gap-6">
          {/* ---------- Visual: portrait + heart (first on mobile, right column on desktop) ---------- */}
          <div className="relative order-first -mx-5 h-85 sm:mx-0 sm:h-110 lg:order-last lg:h-auto lg:min-h-0">
            <div
              aria-hidden
              data-pointer="-8"
              className="absolute inset-x-[10%] bottom-0 top-[6%] rounded-t-[999px] bg-linear-to-b from-[#d3ece9] via-mist to-white sm:inset-x-[16%] lg:inset-x-[8%] xl:inset-x-[12%]"
            />

            {/* 3D heart with glow + orbit ring */}
            <div className="anim-float absolute right-[2%] top-[4%] h-[72%] sm:right-[10%] lg:right-[-2%] lg:top-[10%] lg:h-[50%] 2xl:right-[2%]">
              <div data-hero="heart" data-parallax-hero="-16" className="aspect-4/5 h-full">
                <div data-pointer="16" className="relative h-full w-full">
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,106,84,0.22),transparent)] blur-xl"
                  />
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 animate-[spin_46s_linear_infinite] rounded-full border border-dashed border-secondary/30"
                  />
                  <Heart3D className="relative h-full w-full">
                    <div className="absolute inset-0 flex justify-center">
                      <Heart uid="hero-heart" variant="light" className="h-full w-auto" />
                    </div>
                  </Heart3D>
                </div>
              </div>
            </div>

            <div
              data-hero="portrait"
              data-parallax-hero="6"
              className="absolute inset-x-0 bottom-0 top-0 sm:inset-x-[8%] lg:inset-x-0 lg:top-[3%]"
            >
              <div data-pointer="10" className="absolute inset-0">
                <Image
                  src="/images/dr-chaitanya-hero.webp"
                  alt="Dr. B. Vijaya Chaitanya, interventional cardiologist and Managing Director of Medstar Hospitals, Vijayawada"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(16,42,67,0.18)] mask-[linear-gradient(to_right,transparent_0%,#000_6%,#000_94%,transparent_100%)]"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-white via-white/70 to-transparent lg:hidden" />

            {/* floating glass badges (desktop) */}
            <div className="absolute left-0 top-[22%] hidden lg:block xl:left-[1%]" data-pointer="22">
              <div className="anim-float-slow">
                <div
                  data-hero="badge"
                  className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/75 py-3 pl-3 pr-5 shadow-[0_26px_50px_-26px_rgba(16,42,67,0.5)] backdrop-blur-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-secondary-deep">
                    <HeartPulseIcon width={22} height={22} />
                  </span>
                  <div>
                    <p className="font-serif text-[22px] font-light leading-none tracking-[-0.02em] text-ink">
                      26,000+
                    </p>
                    <p className="mt-1 text-[11px] font-light text-slate">Coronary angiograms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[17%] right-0 hidden lg:block xl:right-[1%]" data-pointer="26">
              <div className="anim-float-slow [animation-delay:-3s]">
                <div
                  data-hero="badge"
                  className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 py-3 pl-3 pr-5 shadow-[0_26px_50px_-26px_rgba(16,42,67,0.5)] backdrop-blur-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-accent">
                    <BuildingHeartIcon width={22} height={22} />
                  </span>
                  <div>
                    <p className="text-[13px] font-medium leading-none text-ink">{SITE.hospital}</p>
                    <p className="mt-1.5 text-[11px] font-light text-slate">Managing Director · {SITE.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Copy ---------- */}
          <div className="relative z-10 flex flex-col justify-center pb-6 pt-4 lg:py-[calc(var(--header-h)+1.5rem)]">
            <div>
              <p data-hero="eyebrow" className="eyebrow">
                Interventional Cardiologist
              </p>
              <h1
                id="hero-title"
                className="display mt-4 text-[clamp(2.4rem,min(4.7vw,7.6vh),5.75rem)] leading-[1.05] text-ink lg:mt-5"
              >
                <span className="sr-only">
                  Dr. B. Vijaya Chaitanya, interventional cardiologist in Vijayawada:{" "}
                </span>
              
              </h1>

              <div data-hero="meta" className="mt-6 lg:mt-[clamp(1.25rem,3.2vh,2rem)]">
                <p className="text-[44px] font-medium tracking-[-0.005em] text-ink">{SITE.name}</p>
                <ul className="mt-2 space-y-1 text-[20px] font-light leading-relaxed text-slate">
                  {SITE.titles.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-col items-start gap-5 lg:mt-[clamp(1.25rem,3.4vh,2.25rem)]">
                <div data-hero="cta">
                  <IntroVideo embedUrl={SITE.introVideoEmbedUrl} />
                </div>
                <div data-hero="cta" className="w-full max-w-[320px] sm:w-67">
                  <ButtonLink href="#contact" className="w-full">
                    Book Appointment
                  </ButtonLink>
                </div>
              </div>

              <a
                href="#approach"
                data-hero="cta"
                className="focus-ring mt-8 hidden w-fit items-center gap-3 text-[12px] font-light text-slate lg:inline-flex [@media(max-height:820px)]:lg:hidden"
              >
                <span className="relative flex h-9 w-3.75 justify-center rounded-full border border-secondary/60">
                  <span className="anim-scroll-dot mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary" />
                </span>
                Scroll
              </a>
            </div>

            {/* mobile / tablet: quick stats strip */}
            <dl
              data-hero="cta"
              className="relative z-20 mt-9 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-white py-5 text-center shadow-[0_18px_40px_-26px_rgba(16,42,67,0.35)] lg:hidden"
            >
              {HERO_STATS.map((s) => (
                <div key={s.label} className="px-2">
                  <dd className="font-serif text-[18px] font-light leading-none text-ink sm:text-2xl">
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-[10.5px] font-light leading-tight text-slate">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* specialties band */}
      <div
        aria-label="Clinical specialties and expertise"
        className="relative overflow-hidden border-t border-secondary/25 border-b border-navy-2 bg-gradient-to-r from-[#07192a] via-[#0b2239] to-[#07192a] py-4 shadow-[0_4px_24px_-8px_rgba(11,34,57,0.5)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        {/* Ambient aqua glow in center */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(64,159,157,0.16),transparent)]"
        />

        <div className="marquee flex w-max items-center gap-5 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-5">
              {SPECIALTIES.map((item) => (
                <div
                  key={`${dup}-${item.title}`}
                  className="group/pill inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 sm:px-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-accent/60 hover:bg-white/[0.12] hover:shadow-[0_0_22px_-4px_rgba(141,211,206,0.4)] cursor-default"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-[12.5px] font-medium tracking-tight text-white/95 sm:text-[13px]">
                    {item.title}
                  </span>
                  <span className="rounded-full border border-accent/25 bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent shadow-[0_0_10px_-3px_rgba(141,211,206,0.3)]">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
