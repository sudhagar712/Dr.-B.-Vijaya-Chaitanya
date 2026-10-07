import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  HeartPulse, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  Stethoscope, 
  Sparkles, 
  Building2, 
  User, 
  Award, 
  MapPin,
  Clock
} from 'lucide-react';

export default function Navbar({ onOpenAppointment, onToggleAudio, isAudioPlaying, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile offcanvas is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean, focused navigation links with icons for offcanvas
  const navLinks = [
    { name: 'About', href: '#about', icon: User, desc: 'Background & Qualifications' },
    { name: 'Journey', href: '#journey', icon: Award, desc: 'Fellowships & Training' },
    { name: 'Expertise', href: '#expertise', icon: HeartPulse, desc: 'PCI, TAVI & Coronary Care' },
    { name: 'Leadership', href: '#leadership', icon: Building2, desc: 'Managing Director, Medstar' },
    { name: '3D Heart', href: '#cardiac-3d', icon: Activity, desc: 'Interactive Vasculature' },
    { name: 'Insights', href: '#insights', icon: Sparkles, desc: 'Clinical Decision Case Studies' },
    { name: 'Contact', href: '#contact', icon: MapPin, desc: 'Medstar Hospital Locations' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#07131F]/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-white/10 shadow-[0_8px_30px_rgba(18,80,131,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 sm:py-2.5'
            : 'bg-white/90 dark:bg-[#07131F]/90 backdrop-blur-md border-b border-slate-200/70 dark:border-white/5 py-3 sm:py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Doctor Brand Identity with Professional Avatar */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group select-none">
              

              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#125083] dark:text-white group-hover:text-[#41A490] transition-colors leading-tight">
                  Dr. B. Vijaya Chaitanya
                </span>

              </div>
            </a>

            {/* Center: Desktop Navigation Capsule (High contrast & clean hover in light mode) */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-slate-100/90 dark:bg-white/[0.06] backdrop-blur-xl px-2 py-1 rounded-full border border-slate-200/80 dark:border-white/10 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1 text-xs font-mono font-semibold text-[#123B5D] dark:text-slate-200 hover:text-[#125083] dark:hover:text-white hover:bg-white dark:hover:bg-white/15 rounded-full transition-all duration-200 shadow-none hover:shadow-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Actions (Theme Toggle, Emergency Hotline, Consultation CTA) */}
            <div className="hidden sm:flex items-center gap-2">
              
              {/* Light / Dark Mode Toggle */}
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="h-9 w-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/10 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-white/20 transition-all shadow-sm"
                  title="Toggle Light / Dark Mode"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </button>
              )}




              {/* Consultation CTA Button */}
              <button
                onClick={onOpenAppointment}
                className="h-9 px-4 rounded-full bg-[#EC242E] hover:bg-[#D01B24] hover:shadow-[0_4px_16px_rgba(236,36,46,0.35)] text-white flex items-center gap-1.5 font-mono text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consultation</span>
              </button>
            </div>

            {/* Mobile Header Quick Actions */}
            <div className="flex lg:hidden items-center gap-1.5">
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </button>
              )}

              <a
                href="tel:+918662499999"
                className="p-2 rounded-xl bg-[#41A490]/10 border border-[#41A490]/30 text-[#0D9488] dark:text-[#41A490]"
                title="Call 24/7 Emergency Cath Lab"
                aria-label="Call Emergency"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Mobile Menu Trigger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-[#125083] text-white shadow-sm hover:bg-[#0D3B66] focus:outline-none transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE OFFCANVAS DRAWER (Slide-over UX with Backdrop Overlay) */}
      {/* ========================================================================= */}
      
      {/* 1. Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Slide-over Offcanvas Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[310px] max-w-[85vw] bg-white dark:bg-[#07131F] z-50 shadow-2xl flex flex-col justify-between border-l border-slate-200 dark:border-white/10 transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Top Section */}
        <div className="flex flex-col h-full overflow-hidden">
          
          {/* Drawer Header */}
          <div className="p-4 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#41A490] animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#125083] dark:text-sky-300">
                Medstar Hospitals
              </span>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-[#EC242E] transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Doctor Executive Summary Banner */}
          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src="/doctor.jpg"
                  alt="Dr. B. Vijaya Chaitanya"
                  className="h-12 w-12 rounded-2xl object-cover object-top border-2 border-[#125083] shadow-md"
                />
                <ShieldCheck className="absolute -bottom-1 -right-1 w-4 h-4 text-[#41A490] bg-white dark:bg-slate-900 rounded-full" />
              </div>
              <div className="min-w-0">
                <h4 className="font-heading font-extrabold text-sm text-[#125083] dark:text-white truncate">
                  Dr. B. Vijaya Chaitanya
                </h4>
                <p className="text-[10px] font-mono text-[#41A490] font-bold truncate">
                  MD, DM, FACC, FIC (Cardiology)
                </p>
                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
                  Managing Director, Medstar
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links List (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
            <p className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Navigation Menu
            </p>
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:text-[#125083] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-1.5 rounded-lg bg-[#125083]/10 dark:bg-white/10 text-[#125083] dark:text-[#41A490] group-hover:bg-[#125083] group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-heading font-bold text-xs block leading-tight">
                        {link.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate block">
                        {link.desc}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#125083] dark:group-hover:text-[#41A490] transition-all" />
                </a>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 border-t border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/40 space-y-2.5">
            {/* Consultation Booking Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 bg-[#EC242E] hover:bg-[#D01B24] text-white rounded-xl font-mono text-xs font-bold shadow-md shadow-red-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>

            {/* 24/7 Cath Lab Hotline */}
            <a
              href="tel:+918662499999"
              className="w-full py-2.5 border border-[#41A490]/40 bg-[#41A490]/10 text-[#0D9488] dark:text-[#41A490] hover:bg-[#41A490] hover:text-white rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency: +91 866 249 9999</span>
            </a>

            {/* Subtle Sound & Theme Bar */}
            <div className="flex items-center justify-between pt-1 px-1 text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#41A490]" /> 24/7 STEMI Cath Lab
              </span>
              {onToggleAudio && (
                <button
                  onClick={onToggleAudio}
                  className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-[#EC242E]"
                >
                  <HeartPulse className={`w-3.5 h-3.5 ${isAudioPlaying ? 'text-[#EC242E] animate-pulse' : ''}`} />
                  <span>{isAudioPlaying ? 'Heart Sound' : 'Muted'}</span>
                </button>
              )}
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}
