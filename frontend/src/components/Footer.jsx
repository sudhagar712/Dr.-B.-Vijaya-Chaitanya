import React from 'react';
import { HeartPulse, ArrowUp, ShieldCheck, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Insights', href: '#insights' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-900 dark:bg-cardio-dark text-slate-300 border-t border-slate-800 dark:border-cardio-cyan/20 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] radial-glow-red pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 items-start" data-aos="fade-up" data-aos-duration="800">
          
          {/* Col 1: Identity & Credentials */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-cardio-crimson/20 border border-cardio-crimson/50 flex items-center justify-center text-cardio-crimson">
                <HeartPulse className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white block">
                  DR. B. VIJAYA CHAITANYA
                </span>
                <span className="text-[11px] font-mono text-cardio-cyan uppercase tracking-wider block font-semibold">
                  Interventional Cardiologist
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
              Managing Director, Medstar Hospitals <br />
              Chief of Cardiovascular Sciences <br />
              Tadepalli, Vijayawada, Andhra Pradesh
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cardio-teal" />
              <span>FACC (USA) • FIC • TAVI Fellow (Medanta)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cardio-cyan font-bold">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Emergency Notice & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cardio-crimson font-bold">
              Emergency Cath Lab
            </h4>
            <div className="p-4 rounded-2xl bg-cardio-crimson/10 border border-cardio-crimson/30">
              <span className="text-[11px] font-mono text-slate-300 block mb-1">
                24/7 Primary PCI Response
              </span>
              <a
                href="tel:+918662499999"
                className="text-sm font-mono font-bold text-cardio-crimson hover:underline block"
              >
                +91 866 249 9999
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-sm w-full btn-outline border-white/15 text-slate-300 hover:bg-white/10 hover:text-white rounded-xl font-mono text-xs gap-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © {new Date().getFullYear()} Dr. B. Vijaya Chaitanya. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-400 text-center sm:text-right max-w-md">
            Medical Disclaimer: Content provided is for informational purposes and does not substitute professional cardiovascular clinical advice or diagnosis.
          </p>
        </div>

      </div>
    </footer>
  );
}
