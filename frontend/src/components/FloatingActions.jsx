import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello Dr. B. Vijaya Chaitanya, I would like to inquire about a cardiology consultation at Medstar Hospitals.'
  );
  const whatsappUrl = `https://wa.me/918662499999?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* 1. Back to Top Button (Smoothly appears on scroll) */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 shadow-xl hover:bg-cardio-crimson hover:text-white dark:hover:bg-cardio-crimson dark:hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
          
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-mono text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
            Back to Top
          </span>
        </button>
      )}

      {/* 2. WhatsApp Direct Connect Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300"
        title="Chat on WhatsApp"
        aria-label="Chat with Dr. B. Vijaya Chaitanya on WhatsApp"
      >
        {/* Subtle Radar Ping Wave */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Authentic WhatsApp SVG Icon */}
        <svg
          className="h-7 w-7 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.496 2 2 6.514 2 12.069c0 1.815.485 3.535 1.332 5.035L2 22l5.068-1.314A10.007 10.007 0 0 0 12.031 22C17.566 22 22 17.486 22 11.931 22 6.376 17.566 2 12.031 2zm0 18.258c-1.579 0-3.085-.436-4.385-1.205l-.314-.188-3.257.844.872-3.14-.206-.328a8.212 8.212 0 0 1-1.282-4.172c0-4.57 3.714-8.29 8.283-8.29 4.569 0 8.283 3.72 8.283 8.29 0 4.57-3.714 8.289-8.283 8.289zm4.542-6.192c-.248-.124-1.47-.726-1.698-.809-.228-.083-.394-.124-.56.124-.166.248-.642.809-.787.975-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.232-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.112.248-.29.372-.435.124-.145.166-.248.248-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.852-.871 2.076 0 1.225.892 2.408 1.016 2.574.124.166 1.756 2.682 4.254 3.761.595.257 1.06.41 1.423.525.598.19 1.142.163 1.572.099.48-.072 1.47-.601 1.678-1.182.207-.581.207-1.079.145-1.182-.062-.103-.228-.166-.477-.29z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-mono font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
