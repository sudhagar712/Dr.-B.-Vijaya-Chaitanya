"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { ArrowUp, WhatsAppIcon } from "./icons";

/**
 * Floating Action Buttons:
 * 1. WhatsApp direct chat button (always accessible)
 * 2. Back to Top button (smoothly appears once user scrolls past 350px)
 *
 * Positioned on bottom-right, dynamically elevated on mobile to avoid overlapping with MobileCta.
 */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
    SITE.whatsapp.message,
  )}`;

  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-2.5 sm:gap-3 lg:bottom-7 lg:right-7"
    >
      {/* Back to top button */}
      <a
        href="#home"
        onClick={(e) => {
          const homeEl = document.getElementById("home");
          if (homeEl) {
            e.preventDefault();
            homeEl.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", "#home");
          }
        }}
        aria-label="Back to top"
        title="Back to top"
        className={`group relative flex h-11 w-11 items-center justify-center rounded-full border border-line/80 bg-white/95 text-ink shadow-[0_8px_24px_-6px_rgba(16,42,67,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-secondary hover:text-secondary-deep hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
          showTop
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp
          width={18}
          height={18}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
        {/* Tooltip on desktop */}
        <span
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 lg:inline-block"
        >
          Back to top
        </span>
      </a>

      {/* WhatsApp chat button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. B. Vijaya Chaitanya on WhatsApp"
        title="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[0_14px_32px_-6px_rgba(37,211,102,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        {/* Gentle ambient pulsing aura */}
        <span
          className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25 duration-1000"
          aria-hidden
        />
        <WhatsAppIcon width={24} height={24} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />

        {/* Hover label for desktop */}
        <span
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink/90 px-3 py-1.5 text-[11.5px] font-medium tracking-wide text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 lg:flex lg:items-center lg:gap-1.5"
        >
          <span>Chat on WhatsApp</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
        </span>
      </a>
    </aside>
  );
}
