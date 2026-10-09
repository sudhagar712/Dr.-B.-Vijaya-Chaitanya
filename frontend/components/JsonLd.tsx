import { DESCRIPTION, SITE } from "@/lib/site";

/**
 * Structured data (schema.org) so search engines understand the entity:
 * a Physician affiliated with a Hospital, plus the WebSite itself.
 */
export function JsonLd() {
  const id = (hash: string) => `${SITE.url}/#${hash}`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": id("website"),
      url: SITE.url,
      name: SITE.name,
      description: DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": id("physician") },
    },
    {
      "@type": "Hospital",
      "@id": id("hospital"),
      name: SITE.hospital,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
    },
    {
      "@type": "Physician",
      "@id": id("physician"),
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/og-image.jpg`,
      description: DESCRIPTION,
      medicalSpecialty: "Cardiovascular",
      telephone: SITE.phone.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.hospital,
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
      areaServed: { "@type": "City", name: SITE.city },
      hospitalAffiliation: { "@id": id("hospital") },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      availableService: [
        "Complex Coronary Interventions",
        "Structural Heart Interventions",
        "Advanced Cardiac Imaging",
        "Peripheral Vascular Interventions",
        "Pacemaker, ICD and CRT Implantation",
      ].map((name) => ({ "@type": "MedicalProcedure", name })),
    },
  ];

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
