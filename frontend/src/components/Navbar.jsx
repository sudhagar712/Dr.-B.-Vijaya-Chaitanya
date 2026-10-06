import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sun, Moon, HeartPulse, ChevronRight, Activity, ShieldCheck, Stethoscope } from 'lucide-react';

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

  // Clean, focused navigation links
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Leadership', href: '#leadership' },
    { name: '3D Heart', href: '#cardiac-3d' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/60 dark:bg-[#08121C]/65 backdrop-blur-xl sm:backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/10 shadow-[0_8px_30px_rgba(18,80,131,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 sm:py-2.5'
            : 'bg-white/35 dark:bg-[#08121C]/35 backdrop-blur-md sm:backdrop-blur-xl border-b border-slate-200/30 dark:border-white/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Doctor Brand Identity with Sleek Avatar */}
            <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
             

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#125083] dark:text-white group-hover:text-[#41A490] transition-colors">
                    Dr. B. Vijaya Chaitanya
                  </span>
                </div>
               
              </div>
            </a>

            {/* Center: Frosted Glass Desktop Navigation Capsule */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/40 dark:bg-white/[0.04] backdrop-blur-xl px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-mono font-medium text-[#123B5D] dark:text-slate-200 hover:text-[#125083] dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Actions (Audio, Theme, Emergency Phone, Consultation CTA) */}
            <div className="hidden sm:flex items-center gap-2">
              
          

              {/* Light / Dark Mode Toggle */}
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="h-9 w-9 rounded-full flex items-center justify-center bg-white/40 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-[#123B5D] dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/15 backdrop-blur-md transition-all shadow-sm"
                  title="Toggle Light / Dark Mode"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </button>
              )}

              {/* Emergency Cath Lab Hotline */}
              <a
                href="tel:+918662499999"
                className="h-9 px-3.5 rounded-full border border-[#41A490]/40 bg-[#41A490]/10 hover:bg-[#41A490] hover:text-white text-[#41A490] backdrop-blur-md flex items-center gap-1.5 font-mono text-xs font-semibold transition-all shadow-sm"
                title="Emergency Cath Lab Hotline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Emergency</span>
              </a>

              {/* Consultation CTA */}
              <button
                onClick={onOpenAppointment}
                className="h-9 px-4 rounded-full bg-gradient-to-r from-[#EC242E] to-[#D01B24] hover:shadow-[0_4px_16px_rgba(236,36,46,0.35)] text-white flex items-center gap-1.5 font-mono text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consultation</span>
              </button>
            </div>

            {/* Mobile Header Quick Actions */}
            <div className="flex sm:hidden items-center gap-1.5">
              {onToggleAudio && (
                <button
                  onClick={onToggleAudio}
                  className={`p-2 rounded-full border backdrop-blur-md transition-colors ${
                    isAudioPlaying
                      ? 'bg-[#EC242E]/10 border-[#EC242E]/40 text-[#EC242E]'
                      : 'bg-white/40 dark:bg-white/5 border-slate-200/50 dark:border-white/10 text-slate-600 dark:text-slate-300'
                  }`}
                  aria-label="Toggle Heartbeat Sound"
                >
                  <HeartPulse className={`w-4 h-4 ${isAudioPlaying ? 'animate-pulse text-[#EC242E]' : ''}`} />
                </button>
              )}

              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="p-2 rounded-full bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-[#123B5D] dark:text-slate-300 backdrop-blur-md"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
                </button>
              )}

              <a
                href="tel:+918662499999"
                className="p-2 rounded-full bg-[#EC242E]/10 border border-[#EC242E]/25 text-[#EC242E] backdrop-blur-md"
                title="Call Emergency"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/50 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 text-[#125083] dark:text-white backdrop-blur-md focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#EC242E]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Frosted Glass Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/80 dark:bg-[#08121C]/85 backdrop-blur-2xl border-b border-slate-200/60 dark:border-white/10 shadow-2xl px-5 py-5 transition-all animate-in slide-in-from-top-3 max-h-[85vh] overflow-y-auto">
            {/* Mobile Profile Card */}
            <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/[0.04] backdrop-blur-md border border-slate-200/60 dark:border-white/10 mb-4 flex items-center gap-3.5 shadow-sm">
              <img
                src="/doctor.jpg"
                alt="Dr. B. Vijaya Chaitanya"
                className="h-12 w-12 rounded-xl object-cover object-top border-2 border-[#125083] shadow-md"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-extrabold text-sm text-[#125083] dark:text-white truncate">
                  Dr. B. Vijaya Chaitanya
                </h4>
                <p className="text-[11px] font-mono text-[#41A490] font-semibold truncate">
                  Interventional Cardiologist
                </p>
                <p className="text-[10px] font-mono text-[#123B5D] dark:text-slate-400 truncate">
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
                  className="flex items-center justify-between text-xs font-mono text-[#123B5D] dark:text-slate-200 hover:text-[#125083] dark:hover:text-[#41A490] py-2.5 px-3 rounded-xl hover:bg-white/70 dark:hover:bg-white/[0.08] transition-colors"
                >
                  <span className="font-medium">{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 mt-3 border-t border-slate-200/60 dark:border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-2.5 bg-gradient-to-r from-[#EC242E] to-[#D01B24] hover:bg-[#D01B24] text-white rounded-xl font-mono text-xs font-bold shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Consultation
              </button>
              
              <a
                href="tel:+918662499999"
                className="w-full py-2.5 border border-[#41A490]/40 bg-[#41A490]/10 text-[#41A490] rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2"
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
