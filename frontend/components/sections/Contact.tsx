import { MAPS_URL, SITE } from "@/lib/site";
import { ClockIcon, PhoneIcon, PinIcon } from "../icons";
import { Reveal } from "../Reveal";
import { ButtonLink } from "../ui";

const details = [
  {
    icon: PhoneIcon,
    label: "Call",
    value: <a href={`tel:${SITE.phone.tel}`}>{SITE.phone.display}</a>,
  },
  {
    icon: PinIcon,
    label: "Location",
    value: (
      <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
        {SITE.hospital}, {SITE.city}
      </a>
    ),
  },
  {
    icon: ClockIcon,
    label: "Timings",
    value: (
      <>
        {SITE.hours.days}
        <br />
        {SITE.hours.time}
      </>
    ),
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      data-nav="contact"
      aria-labelledby="contact-title"
      className="relative bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-[32px] border border-line bg-gradient-to-br from-mist via-white to-white px-6 py-12 sm:px-10 lg:rounded-[40px] lg:px-16 lg:py-16">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
            <div className="max-w-[520px]">
              <p className="eyebrow">Appointments</p>
              <span className="rule mt-4" aria-hidden />
              <h2
                id="contact-title"
                data-g="split"
                className="display mt-6 text-[clamp(1.9rem,3vw,2.8rem)] leading-[1.15] text-ink"
              >
                Book an Appointment
              </h2>
              <p className="mt-5 text-[14.5px] font-light leading-[1.9] text-slate">
                Consult with {SITE.name} for expert cardiac care.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`tel:${SITE.phone.tel}`} className="w-full sm:w-auto">
                  Book Appointment
                </ButtonLink>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic
                  className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-full border border-ink/20 bg-white px-7 text-[13px] font-medium tracking-wide text-ink transition-[background-color,border-color] duration-300 hover:border-ink/50 hover:bg-offwhite sm:w-auto"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <address className="not-italic lg:w-[400px]">
              <dl className="divide-y divide-line rounded-2xl border border-line bg-white/80 backdrop-blur">
                {details.map((d) => (
                  <div key={d.label} className="flex items-center gap-4 px-5 py-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-secondary-deep">
                      <d.icon width={20} height={20} />
                    </span>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-secondary-deep">
                        {d.label}
                      </dt>
                      <dd className="mt-1 text-[13.5px] font-light leading-snug text-ink [&_a:hover]:text-primary [&_a]:transition-colors">
                        {d.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </address>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
