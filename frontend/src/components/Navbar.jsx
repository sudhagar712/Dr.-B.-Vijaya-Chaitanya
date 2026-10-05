import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sun, Moon, HeartPulse, ChevronRight, Activity, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenAppointment, onToggleAudio, isAudioPlaying, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean, focused navigation links (no overcrowding)
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: '3D Heart', href: '#cardiac-3d' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm py-2.5 sm:py-3'
            : 'bg-white/80 dark:bg-cardio-dark/80 backdrop-blur-md border-b border-slate-100 dark:border-white/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Doctor Brand Identity with Profile Thumbnail */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/doctor.jpg"
                  alt="Dr. B. Vijaya Chaitanya"
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover object-top border-2 border-cardio-crimson shadow-sm group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-cardio-crimson transition-colors">
                    Dr. B. Vijaya Chaitanya
                  </span>
                 
                </div>
               
              </div>
            </a>

            {/* Center: Clean & Minimal Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-50 dark:bg-slate-900/60 px-3 py-1 rounded-full border border-slate-200/80 dark:border-white/10 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 hover:text-cardio-crimson dark:hover:text-white hover:bg-white dark:hover:bg-cardio-crimson/20 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Actions (Theme, Audio, Emergency Phone, Appointment CTA) */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Light / Dark Mode Toggle */}
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="h-9 w-9 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Toggle Light / Dark Mode"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
                </button>
              )}

              {/* Heartbeat Sound Toggle */}
              {onToggleAudio && (
                <button
                  onClick={onToggleAudio}
                  className={`h-9 px-3 rounded-full flex items-center gap-1.5 font-mono text-xs transition-all ${
                    isAudioPlaying
                      ? 'bg-cardio-teal/15 text-cardio-teal border border-cardio-teal/30 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10'
                  }`}
                  title="Toggle Heartbeat Monitor Audio"
                >
                  <Activity className={`w-3.5 h-3.5 ${isAudioPlaying ? 'animate-bounce text-cardio-teal' : ''}`} />
                  <span className="hidden xl:inline">{isAudioPlaying ? 'Audio ON' : 'Pulse'}</span>
                </button>
              )}

              {/* Emergency Quick Call */}
              <a
                href="tel:+918662499999"
                className="h-9 px-3.5 rounded-full border border-cardio-crimson/30 text-cardio-crimson hover:bg-cardio-crimson hover:text-white flex items-center gap-1.5 font-mono text-xs transition-colors"
                title="Emergency Cath Lab Hotline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Emergency</span>
              </a>

              {/* Book Appointment CTA */}
              <button
                onClick={onOpenAppointment}
                className="h-9 px-4 rounded-full bg-cardio-crimson hover:bg-cardio-ruby text-white flex items-center gap-1.5 font-mono text-xs font-semibold shadow-md hover:scale-105 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consultation</span>
              </button>
            </div>

            {/* Mobile Header Quick Actions */}
            <div className="flex sm:hidden items-center gap-1.5">
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="p-2 text-slate-600 dark:text-slate-300"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
                </button>
              )}

              <a
                href="tel:+918662499999"
                className="p-2 text-cardio-crimson"
                title="Call Medstar Emergency"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 dark:text-slate-200 focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-cardio-crimson" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer with Doctor Profile Summary */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-slate-950/98 border-b border-slate-200 dark:border-white/10 shadow-2xl px-5 py-5 transition-all animate-in slide-in-from-top-3 max-h-[85vh] overflow-y-auto">
            {/* Mobile Profile Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 mb-4 flex items-center gap-3.5">
              <img
                src="/doctor.jpg"
                alt="Dr. B. Vijaya Chaitanya"
                className="h-14 w-14 rounded-2xl object-cover object-top border-2 border-cardio-crimson shadow-md"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white truncate">
                  Dr. B. Vijaya Chaitanya
                </h4>
                <p className="text-[11px] font-mono text-cardio-crimson font-semibold truncate">
                  Interventional Cardiologist
                </p>
                <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
                  Managing Director, Medstar Hospitals
                </p>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-cardio-crimson dark:hover:text-cardio-cyan py-2.5 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <span className="font-medium">{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 mt-2 border-t border-slate-100 dark:border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="btn btn-sm w-full bg-cardio-crimson text-white border-none rounded-xl font-mono text-xs shadow-md"
              >
                <Calendar className="w-4 h-4" /> Book Consultation
              </button>
              
              <a
                href="tel:+918662499999"
                className="btn btn-sm w-full btn-outline border-cardio-crimson/30 text-cardio-crimson rounded-xl font-mono text-xs"
              >
                <Phone className="w-4 h-4" /> Emergency: +91 866 249 9999
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
