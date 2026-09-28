import React, { useState } from 'react';
import { Heart, ArrowUp, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cardio-red to-cardio-crimson flex items-center justify-center text-white shadow-cardio-glow">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white tracking-tight">
                  Dr. B. Vijaya Chaitanya
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-cardio-pulse font-mono">
                  Cardiology & Heart Care
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated to compassionate, evidence-based cardiovascular medicine. Providing personalized heart health consultations, advanced non-invasive diagnostics, and ongoing clinical management.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>In-Clinic & Diagnostic Practice • [City, State Placeholder]</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Doctor</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Expertise & Specialties</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">Treatments & Diagnostics</a>
              </li>
              <li>
                <a href="#rhythm-lab" className="hover:text-white transition-colors">ECG Rhythm Lab</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience & Timeline</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Clinic</a>
              </li>
            </ul>
          </div>

          {/* Clinical Disclaimers & Emergency Notice */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Emergency & Clinical Protocol
            </h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-400 space-y-2">
              <p className="text-cardio-pulse font-semibold">
                Cardiac Emergency Protocol:
              </p>
              <p className="leading-relaxed">
                If you experience sudden severe chest pain, shortness of breath, radiating pressure, or loss of consciousness, immediately call <strong>108 / 112</strong> or proceed to the nearest hospital Emergency Room.
              </p>
            </div>

            <div className="pt-1">
              <button
                onClick={() => setPrivacyModalOpen(true)}
                className="text-xs text-slate-400 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Patient Data Privacy & Consultation Policy
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Dr. B. Vijaya Chaitanya. All rights reserved. Cardiology & Heart Care Specialist.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ethical Medical Disclaimer Footer Note */}
        <div className="mt-8 pt-4 border-t border-navy-900/60 text-[11px] text-slate-500 leading-relaxed text-center max-w-4xl mx-auto">
          <strong>Medical Disclaimer:</strong> The information provided on this portfolio website is intended solely for educational, informational, and appointment-coordination purposes. It is not intended to replace professional medical advice, clinical diagnosis, or individualized treatment plans. Always seek the advice of your physician or qualified cardiovascular specialist regarding any medical condition.
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md">
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 border border-slate-200 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-navy-900 font-bold font-display text-lg">
                <ShieldCheck className="w-5 h-5 text-cardio-red" />
                <span>Patient Privacy & Medical Discretion</span>
              </div>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>1. Confidentiality:</strong> All medical inquiries, appointment requests, and health information submitted through this website are treated with strict clinical confidentiality.
              </p>
              <p>
                <strong>2. Data Usage:</strong> Contact information provided in consultation request forms is used solely by Dr. B. Vijaya Chaitanya&rsquo;s clinical coordination staff to confirm appointment schedules and provide pre-visit guidelines.
              </p>
              <p>
                <strong>3. Non-Diagnostic Digital Inquiries:</strong> Transmitting medical queries via web forms does not establish a formal physician-patient relationship until an official in-person or verified telemedicine clinical evaluation has been completed.
              </p>
              <p>
                <strong>4. Security:</strong> We adhere to recognized standards for protecting personal health information in accordance with applicable healthcare regulatory guidelines.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition-colors"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
