import React, { useState, useEffect } from 'react';
import { ArrowUp, X, Heart, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  whatsappNumber?: string;
  defaultMessage?: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  whatsappNumber = '919876543210', // Placeholder phone number
  defaultMessage = 'Hello Dr. B. Vijaya Chaitanya Clinic, I would like to inquire about a cardiology consultation.',
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [hasDismissedBubble, setHasDismissedBubble] = useState(false);

  useEffect(() => {
    // Show chat bubble after a brief polite delay if not dismissed
    const timer = setTimeout(() => {
      if (!hasDismissedBubble) {
        setShowChatBubble(true);
      }
    }, 2800);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show back-to-top after scrolling 280px
      if (scrollY > 280) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasDismissedBubble]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleWhatsAppClick = () => {
    setShowChatBubble(false);
    const encodedMsg = encodeURIComponent(defaultMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const dismissBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowChatBubble(false);
    setHasDismissedBubble(true);
  };

  // SVG circular progress parameters
  const size = 46;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <aside 
      aria-label="Quick Actions"
      className="fixed bottom-20 md:bottom-8 right-4 sm:right-7 z-40 flex flex-col items-end gap-3 select-none pointer-events-none"
    >
      {/* WhatsApp Interactive Consultation Speech Bubble */}
      {showChatBubble && (
        <div 
          onClick={handleWhatsAppClick}
          className="pointer-events-auto cursor-pointer max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-200/90 text-slate-800 animate-bounce-subtle transition-all duration-300 hover:shadow-cardio-glow relative mb-1 group"
        >
          {/* Close button */}
          <button
            onClick={dismissBubble}
            className="absolute top-2.5 right-2.5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-start gap-3 pr-4">
            <div className="relative w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.761.884 2.796.885 3.183 0 5.769-2.587 5.769-5.766.001-3.182-2.585-5.772-5.769-5.772zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.122-.518-1.503-.623-2.458-2.138-2.533-2.238-.075-.101-.61-81-.61-1.547 0-.737.387-1.1.524-1.249.138-.149.3-.186.4-.186.1 0 .201.002.289.006.092.004.215-.035.335.253.125.299.426 1.04.463 1.115.038.075.063.162.013.262-.05.101-.075.163-.15.251-.075.088-.158.197-.225.264-.075.075-.153.157-.066.307.088.15 3.89 1.43 1.34 2.275.642.57 1.183.748 1.35.83.167.083.265.069.363-.044.098-.113.424-.492.538-.661.113-.169.226-.142.378-.085.152.057.962.454 1.127.536.165.082.276.124.316.193.04.07.04.405-.104.81z" />
              </svg>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-navy-950 font-display">Clinic Coordination Desk</span>
                <span className="text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">Online</span>
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Need quick appointment help or cardiology guidance? Chat directly on WhatsApp.
              </p>
              <div className="pt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-600 group-hover:text-emerald-700">
                <span>Start Conversation</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Little speech tail pointing down-right */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-200 rotate-45" />
        </div>
      )}

      {/* WhatsApp Quick Action Button */}
      <div className="relative group pointer-events-auto">
        {/* Pulse Ripple Effect behind WhatsApp */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping duration-1000 group-hover:opacity-60" />

        <button
          onClick={handleWhatsAppClick}
          aria-label="Chat with Dr. B. Vijaya Chaitanya Clinic on WhatsApp"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-108 active:scale-95 transition-all duration-300 border-2 border-white"
        >
          {/* Official WhatsApp Glyph */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm transition-transform group-hover:rotate-12 duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.761.884 2.796.885 3.183 0 5.769-2.587 5.769-5.766.001-3.182-2.585-5.772-5.769-5.772zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.122-.518-1.503-.623-2.458-2.138-2.533-2.238-.075-.101-.61-.81-.61-1.547 0-.737.387-1.1.524-1.249.138-.149.3-.186.4-.186.1 0 .201.002.289.006.092.004.215-.035.335.253.125.299.426 1.04.463 1.115.038.075.063.162.013.262-.05.101-.075.163-.15.251-.075.088-.158.197-.225.264-.075.075-.153.157-.066.307.088.15 1.054.603 2.211 1.08 1.43 1.34 2.275.642.57 1.183.748 1.35.83.167.083.265.069.363-.044.098-.113.424-.492.538-.661.113-.169.226-.142.378-.085.152.057.962.454 1.127.536.165.082.276.124.316.193.04.07.04.405-.104.81z" />
          </svg>

          {/* Active Status Badge */}
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full shadow-xs" />
        </button>

        {/* Hover Tooltip (Desktop) */}
        <div className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-navy-950/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-slate-700/60">
          <span>Chat on WhatsApp</span>
          <span className="text-[10px] text-emerald-400 block font-normal">Direct Clinic Inquiry</span>
        </div>
      </div>

      {/* Back to Top Button with Circular Scroll Progress Ring */}
      {showBackToTop && (
        <div className="relative group pointer-events-auto transition-all duration-300 transform translate-y-0 opacity-100">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="relative w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-navy-950 hover:bg-navy-900 hover:text-white hover:border-navy-900 shadow-premium hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-108 active:scale-95 group"
          >
            {/* SVG Circular Progress Meter */}
            <svg
              className="absolute inset-0 -rotate-90 pointer-events-none"
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
            >
              {/* Background Track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-slate-200"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Animated Progress Fill */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                className="stroke-cardio-red transition-all duration-150 ease-out"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Up Arrow Icon */}
            <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" />
          </button>

          {/* Hover Tooltip (Desktop) */}
          <div className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-navy-950/90 backdrop-blur-md text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-slate-700/60 font-mono">
            <span>Back to Top ({Math.round(scrollProgress)}%)</span>
          </div>
        </div>
      )}
    </aside>
  );
};
