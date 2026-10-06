import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, Navigation, Building2, ShieldCheck, HeartPulse } from 'lucide-react';

export default function ContactSection({ onOpenAppointment }) {
  const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Medstar+Hospitals+Tadepalli+Vijayawada';

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#0B1926] ecg-grid">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] radial-glow-red pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4" data-aos="fade-up" data-aos-duration="800">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#125083] dark:text-white tracking-tight uppercase">
            Let's Start with the <br />
            <span className="text-gradient-crimson">Right Conversation</span>
          </h2>
          <p className="text-base sm:text-lg text-[#123B5D] dark:text-slate-300">
            Whether you are seeking evaluation for a cardiac condition, considering an interventional procedure or looking for another clinical perspective, the first step is understanding the problem clearly.
          </p>
        </div>

        {/* 2-Column Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Doctor & Hospital Contact Details */}
          <div
            className="lg:col-span-6 p-8 rounded-3xl bg-[#F5F8FA] dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md flex flex-col justify-between space-y-8"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="space-y-6">
              
              {/* Doctor Details Banner */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#41A490] font-bold">
                  Principal Practice
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#125083] dark:text-white uppercase">
                  Dr. B. Vijaya Chaitanya
                </h3>
                <p className="text-xs font-mono text-[#EC242E] font-bold uppercase tracking-wider">
                  Managing Director, Medstar Hospitals • Chief of Cardiovascular Sciences
                </p>
                <p className="text-xs text-[#123B5D] dark:text-slate-400 font-mono">
                  Interventional Cardiologist • FACC • FIC • TAVI Specialist
                </p>
              </div>

              {/* Location & Facility Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#125083] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#125083] dark:text-white text-sm font-heading block">
                      Medstar Hospitals (200-Bedded Facility)
                    </strong>
                    <p className="text-xs text-[#123B5D] dark:text-slate-300 font-mono mt-0.5">
                      Tadepalli, Vijayawada, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#123B5D] dark:text-slate-300 font-mono">
                  <Clock className="w-4 h-4 text-[#41A490] shrink-0" />
                  <span>Outpatient Consultations: Mon – Sat | 10:00 AM – 4:00 PM</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#123B5D] dark:text-slate-300 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#41A490] shrink-0" />
                  <span>24/7 Primary PCI STEMI Emergency Cath Lab Services</span>
                </div>
              </div>

              {/* Direct Telephone and Helpline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+918662499999"
                  className="p-4 rounded-2xl bg-[#EC242E]/5 border border-[#EC242E]/30 hover:bg-[#EC242E]/10 transition-colors block group shadow-sm"
                >
                  <span className="text-[10px] font-mono uppercase text-[#EC242E] font-bold block">
                    Medstar Emergency 24/7
                  </span>
                  <span className="text-base font-mono font-bold text-[#123B5D] dark:text-white group-hover:text-[#EC242E] transition-colors">
                    +91 866 249 9999
                  </span>
                </a>

                <a
                  href="mailto:consultation@medstarhospitals.com"
                  className="p-4 rounded-2xl bg-[#41A490]/5 border border-[#41A490]/30 hover:bg-[#41A490]/10 transition-colors block group shadow-sm"
                >
                  <span className="text-[10px] font-mono uppercase text-[#41A490] font-bold block">
                    Clinical Correspondence
                  </span>
                  <span className="text-xs font-mono font-bold text-[#123B5D] dark:text-white truncate block group-hover:text-[#41A490] transition-colors">
                    medstar.cardiology@medstar.in
                  </span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
              {/* 🔴 Accent Red CTA */}
              <button
                onClick={onOpenAppointment}
                className="btn btn-sm sm:btn-md bg-[#EC242E] hover:bg-[#D01B24] text-white border-none rounded-xl font-mono text-xs gap-2 shadow-md transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              {/* 🔵 Primary Navy Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm sm:btn-md border-2 border-[#125083] text-[#125083] dark:border-[#41A490] dark:text-[#41A490] hover:bg-[#125083] hover:text-white rounded-xl font-mono text-xs gap-2 transition-all hover:scale-105"
              >
                <Navigation className="w-4 h-4 text-[#41A490]" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map & Hospital Card */}
          <div
            className="lg:col-span-6 rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md flex flex-col justify-between"
            data-aos="fade-left"
            data-aos-duration="850"
          >
            {/* Embedded Google Map */}
            <div className="w-full h-80 sm:h-96 relative">
              <iframe
                title="Medstar Hospitals Tadepalli Location"
                src="https://maps.google.com/maps?q=Medstar%20Hospitals%20Tadepalli%20Vijayawada&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 z-10 bg-white/95 dark:bg-cardio-dark/95 px-3 py-1.5 rounded-xl border border-[#41A490]/40 text-[11px] font-mono text-[#125083] dark:text-[#41A490] shadow-sm backdrop-blur-md font-semibold">
                Tadepalli • Vijayawada Capital Region
              </div>
            </div>

            {/* Bottom Card Summary */}
            <div className="p-6 bg-[#F5F8FA] dark:bg-slate-900/90 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold text-[#125083] dark:text-white block">
                  Visiting for an Angiogram or Stenting Second Opinion?
                </span>
                <span className="text-[11px] font-mono text-[#123B5D] dark:text-slate-400">
                  Please bring prior coronary CD disc recordings & ECG tracings.
                </span>
              </div>
              <button
                onClick={onOpenAppointment}
                className="btn btn-xs bg-[#EC242E] hover:bg-[#D01B24] text-white font-mono font-bold shadow-sm"
              >
                Schedule Visit
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
