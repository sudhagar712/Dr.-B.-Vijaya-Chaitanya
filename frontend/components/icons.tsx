import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M8 5.5v13a.8.8 0 0 0 1.2.7l10.4-6.5a.8.8 0 0 0 0-1.4L9.2 4.8A.8.8 0 0 0 8 5.5Z" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.3 20 4 13.7 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 1 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* ---------- Feature icons (About) ---------- */
export const HeartPulseIcon = (p: IconProps) => (
  <svg {...base} width={26} height={26} strokeWidth={1.3} {...p}>
    <path d="M12 20.5S3.5 15 3.5 8.9A4.6 4.6 0 0 1 12 6.6a4.6 4.6 0 0 1 8.5 2.3C20.5 15 12 20.5 12 20.5Z" />
    <path d="M6.5 12h3l1.4-2.6 2.2 5 1.4-2.4h3" />
  </svg>
);

export const HeartHandIcon = (p: IconProps) => (
  <svg {...base} width={26} height={26} strokeWidth={1.3} {...p}>
    <path d="M12 14.2S7.2 11 7.2 7.6A2.7 2.7 0 0 1 12 6.2a2.7 2.7 0 0 1 4.8 1.4C16.8 11 12 14.2 12 14.2Z" />
    <path d="M3 15.5h2.6l3.1 1.2h3.4c.9 0 1.5.9.9 1.6l-.4.4M3 19.5h3.2l5.3 1.5 6.2-2.3a1.5 1.5 0 0 0 .2-2.7 1.6 1.6 0 0 0-1.7 0L13 17" />
  </svg>
);

export const BuildingHeartIcon = (p: IconProps) => (
  <svg {...base} width={26} height={26} strokeWidth={1.3} {...p}>
    <path d="M4 20.5V9.5L10 6l6 3.5v11M2.5 20.5h19M10 11v4M8 13h4" />
    <path d="M19.5 11.5s-2.5-1.6-2.5-3.2a1.4 1.4 0 0 1 2.5-.7 1.4 1.4 0 0 1 2.5.7c0 1.6-2.5 3.2-2.5 3.2Z" />
  </svg>
);

/* ---------- Award icons ---------- */
export const ShieldIcon = (p: IconProps) => (
  <svg {...base} width={22} height={22} strokeWidth={1.3} {...p}>
    <path d="M12 3 5 5.6v5.7c0 4.2 2.7 7.6 7 9.7 4.3-2.1 7-5.5 7-9.7V5.6L12 3Z" />
    <path d="M9 11.5h6M12 8.5v6" />
  </svg>
);

export const ShieldCrossIcon = (p: IconProps) => (
  <svg {...base} width={22} height={22} strokeWidth={1.3} {...p}>
    <path d="M12 3 5 5.6v5.7c0 4.2 2.7 7.6 7 9.7 4.3-2.1 7-5.5 7-9.7V5.6L12 3Z" />
    <path d="M10 9.5c0-1 .9-1.6 2-1.6s2 .6 2 1.6M10 14.5c0 1 .9 1.6 2 1.6s2-.6 2-1.6M9.5 12h5" />
  </svg>
);

export const ShieldHeartIcon = (p: IconProps) => (
  <svg {...base} width={22} height={22} strokeWidth={1.3} {...p}>
    <path d="M12 3 5 5.6v5.7c0 4.2 2.7 7.6 7 9.7 4.3-2.1 7-5.5 7-9.7V5.6L12 3Z" />
    <path d="M12 15.2s-3-1.9-3-3.9a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2-3 3.9-3 3.9Z" />
  </svg>
);

export const ShieldStarIcon = (p: IconProps) => (
  <svg {...base} width={22} height={22} strokeWidth={1.3} {...p}>
    <path d="M12 3 5 5.6v5.7c0 4.2 2.7 7.6 7 9.7 4.3-2.1 7-5.5 7-9.7V5.6L12 3Z" />
    <path d="m12 8.6 1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3 1-2.1Z" />
  </svg>
);

/* ---------- Brand icons (filled) ---------- */
export const LinkedInIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M6.9 8.9H4V20h2.9V8.9ZM5.5 4A1.7 1.7 0 1 0 5.5 7.4 1.7 1.7 0 0 0 5.5 4ZM20 13.6c0-3-1.6-4.9-4.1-4.9-1.4 0-2.3.7-2.7 1.4V8.9h-2.9V20h2.9v-5.9c0-1.5.8-2.5 2-2.5 1.2 0 1.8.9 1.8 2.5V20H20v-6.4Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r=".6" fill="currentColor" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
  </svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M21.2 8.2a2.4 2.4 0 0 0-1.7-1.7C18 6.1 12 6.1 12 6.1s-6 0-7.5.4A2.4 2.4 0 0 0 2.8 8.2C2.4 9.7 2.4 12 2.4 12s0 2.3.4 3.8a2.4 2.4 0 0 0 1.7 1.7c1.5.4 7.5.4 7.5.4s6 0 7.5-.4a2.4 2.4 0 0 0 1.7-1.7c.4-1.5.4-3.8.4-3.8s0-2.3-.4-3.8ZM10.2 14.6V9.4l4.5 2.6-4.5 2.6Z" />
  </svg>
);

/* ---------- Expertise icons ---------- */
export const ValveIcon = (p: IconProps) => (
  <svg {...base} width={26} height={26} strokeWidth={1.3} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 12V3.8M12 12l7.1 4.1M12 12l-7.1 4.1" />
    <circle cx="12" cy="12" r="1.6" />
  </svg>
);

export const ImagingIcon = (p: IconProps) => (
  <svg {...base} width={26} height={26} strokeWidth={1.3} {...p}>
    <rect x="3" y="4" width="18" height="12.5" rx="2.2" />
    <path d="M6.5 10.5h2.2l1.5-3.2 2.4 6 1.6-2.8h3.3M9 20.5h6M12 16.5v4" />
  </svg>
);

export const VesselIcon = (p: IconProps) => (
  <svg {...base} width={26} height={26} strokeWidth={1.3} {...p}>
    <path d="M12 3v7M12 10c0 3.5-4.5 4.5-4.5 9v2M12 10c0 3.5 4.5 4.5 4.5 9v2M12 14.5c1.5 1 3.5 1 5 0M7.2 15.5c-1.4-.2-2.6-.8-3.2-1.8" />
  </svg>
);

export const CapIcon = (p: IconProps) => (
  <svg {...base} width={22} height={22} strokeWidth={1.4} {...p}>
    <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
    <path d="M6.5 11.8v4.2c0 1.2 2.5 2.6 5.5 2.6s5.5-1.4 5.5-2.6v-4.2M21.5 9.5v5" />
  </svg>
);

export const MedalIcon = (p: IconProps) => (
  <svg {...base} width={22} height={22} strokeWidth={1.4} {...p}>
    <circle cx="12" cy="14.5" r="5" />
    <path d="m9 3 3 5.5L15 3M12 12.2l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 14.3l2-.3.9-1.8Z" />
  </svg>
);

/* ---------- Lifestyle icons ---------- */
export const BowlIcon = (p: IconProps) => (
  <svg {...base} width={30} height={30} strokeWidth={1.3} {...p}>
    <path d="M3.5 12.5h17c0 4.4-3.8 7.5-8.5 7.5s-8.5-3.1-8.5-7.5Z" />
    <path d="M8.5 12.5c-.2-2.8 1.4-5 4.2-5.6.3 2.8-1.3 5-4.2 5.6ZM13.5 12.5c0-2.3 1.2-4 3.6-4.6.2 2.3-1 4-3.6 4.6Z" />
    <path d="M9 22h6" />
  </svg>
);

export const MoonIcon = (p: IconProps) => (
  <svg {...base} width={30} height={30} strokeWidth={1.3} {...p}>
    <path d="M20 14.2A8.4 8.4 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
    <path d="M17 3.5v3M15.5 5h3M20.5 8.5v2M19.5 9.5h2" />
  </svg>
);

export const WalkIcon = (p: IconProps) => (
  <svg {...base} width={30} height={30} strokeWidth={1.3} {...p}>
    <circle cx="13.2" cy="4.6" r="1.9" />
    <path d="M13 7.6 11.2 12.8l3.2 2.6V21M11.2 12.8 8 14.6M13.6 9.6l3.2 2.4 2.2-1" />
  </svg>
);

export const LotusIcon = (p: IconProps) => (
  <svg {...base} width={30} height={30} strokeWidth={1.3} {...p}>
    <path d="M12 18.5c-3.2-1-5.2-3.6-5.2-7.2 2.6 0 4.5 1.2 5.2 3.1.7-1.9 2.6-3.1 5.2-3.1 0 3.6-2 6.2-5.2 7.2Z" />
    <path d="M12 14.4c-1.7-1.3-2.5-3.1-2.1-5.7 1.4.8 2.1 2.4 2.1 4 0-1.6.7-3.2 2.1-4 .4 2.6-.4 4.4-2.1 5.7ZM3.5 19.5c2.6.8 5.3 1.1 8.5 1.1s5.9-.3 8.5-1.1" />
  </svg>
);

export const ArrowUp = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" viewBox="0 0 24 24" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.66 20.16 9.3 19.8 8.1 19.09L7.81 18.92L4.69 19.74L5.52 16.7L5.33 16.39C4.54 15.14 4.12 13.55 4.12 11.91C4.12 7.37 7.82 3.67 12.05 3.67ZM8.83 7.36C8.63 7.36 8.44 7.37 8.28 7.64C8.11 7.9 7.45 8.52 7.45 9.8C7.45 11.08 8.38 12.31 8.51 12.48C8.64 12.65 10.34 15.28 12.95 16.4C15.12 17.33 15.56 17.15 16.03 17.11C16.5 17.07 17.54 16.5 17.76 15.89C17.98 15.28 17.98 14.76 17.91 14.65C17.84 14.54 17.65 14.48 17.36 14.33C17.07 14.18 15.65 13.48 15.39 13.38C15.13 13.28 14.94 13.23 14.75 13.52C14.56 13.81 14.01 14.48 13.84 14.67C13.68 14.86 13.51 14.88 13.22 14.74C12.93 14.6 12 14.3 10.9 13.32C10.04 12.56 9.47 11.62 9.3 11.33C9.13 11.04 9.28 10.88 9.43 10.74C9.56 10.61 9.72 10.4 9.87 10.23C10.02 10.06 10.07 9.94 10.17 9.74C10.27 9.54 10.22 9.37 10.15 9.23C10.08 9.09 9.54 7.77 9.31 7.22C9.09 6.69 8.87 6.76 8.71 6.75L8.83 7.36Z" />
  </svg>
);
