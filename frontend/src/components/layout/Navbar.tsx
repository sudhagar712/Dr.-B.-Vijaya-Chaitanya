import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Calendar, Stethoscope, ChevronRight } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for scroll spy
      const sections = ['home', 'about', 'expertise', 'treatments', 'rhythm-lab', 'experience', 'patient-care', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Treatments', href: '#treatments', id: 'treatments' },
    { label: 'Rhythm Lab', href: '#rhythm-lab', id: 'rhythm-lab' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Patient Care', href: '#patient-care', id: 'patient-care' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Emergency Advisory Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cardio-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cardio-red"></span>
            </span>
            <span className="text-slate-400">Cardiovascular Consultations & Clinical Practice</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium">In-Clinic & Second Opinions Available</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>Emergency 24/7 Helpline:</span>
              <span className="text-cardio-pulse font-mono font-semibold">[Emergency Line: 108 / 112]</span>
            </div>
            <span className="text-slate-700">|</span>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Clinic Timings: Mon - Sat
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-premium'
            : 'bg-white/95 backdrop-blur-md py-4 sm:py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3 select-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center shadow-md group-hover:shadow-cardio-glow transition-all duration-300">
              <Heart className="w-5 h-5 text-cardio-red group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-navy-900 group-hover:text-cardio-red transition-colors">
                Dr. B. Vijaya Chaitanya
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Cardiologist & Heart Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-50/80 p-1 rounded-full border border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <MagneticButton
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cardio-red to-cardio-crimson hover:from-cardio-crimson hover:to-cardio-darkRed text-white text-xs font-semibold tracking-wide shadow-md shadow-cardio-red/25 hover:shadow-cardio-glow transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-full bg-cardio-red text-white text-xs font-medium sm:hidden flex items-center gap-1.5 shadow-sm"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden bg-navy-950/70 backdrop-blur-md pt-20  pb-8 flex flex-col justify-between">
          <div className="bg-white p-6 shadow-2xl border border-slate-100 space-y-2">
           

            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-cardio-red/10 text-cardio-red'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>
              ))}
            </div>

           
          </div>
        </div>
      )}
    </>
  );
};
