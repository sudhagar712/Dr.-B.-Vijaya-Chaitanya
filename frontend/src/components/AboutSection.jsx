import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, Shield, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenAppointment }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F4F9FC] via-white to-[#F0F6FA] dark:from-[#07131F] dark:via-[#0A1826] dark:to-[#07131F] text-[#123B5D] dark:text-slate-100 transition-colors duration-300"
    >
      {/* Background Ambient Glows & Telemetry Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#125083]/5 dark:bg-[#125083]/15 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full bg-[#41A490]/5 dark:bg-[#41A490]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] rounded-full bg-[#EC242E]/5 dark:bg-[#EC242E]/10 blur-3xl" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#125083 1px, transparent 1px), radial-gradient(#125083 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            backgroundPosition: '0 0, 18px 18px',
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Main 12-Column Panoramic Layout (Replicating Reference Design 100%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Visual Showcase (Doctor + 3D Heart + Wave)   */}
          {/* ========================================================= */}
          <div
            className="lg:col-span-5 relative"
            data-aos="fade-right"
            data-aos-duration="950"
          >
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              
              {/* Clinical Card Wrapper */}
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-white dark:bg-[#0B1A28] border border-slate-200/80 dark:border-white/10 shadow-[0_20px_50px_-15px_rgba(18,80,131,0.12)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
                
                {/* Visual Canvas Height - Optimized for Mobile & Desktop */}
                <div className="relative h-[390px] sm:h-[480px] lg:h-[560px] xl:h-[600px] w-full overflow-hidden bg-white dark:bg-[#0B1A28]">
                  
                  {/* Doctor Full Portrait - Full Edge-to-Edge Cover */}
                  <img
                    src="/doctor_about.jpg"
                    alt="Dr. B. Vijaya Chaitanya - Managing Director & Interventional Cardiologist"
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Layer 4: Background ECG Pulse Line crossing the midground */}
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-[1] pointer-events-none opacity-40 dark:opacity-30">
                    <svg
                      viewBox="0 0 500 80"
                      className="w-full h-16 stroke-[#93C5FD] dark:stroke-[#38BDF8] fill-none"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M 0 40 L 100 40 L 115 32 L 125 48 L 135 40 L 155 40 L 168 12 L 180 68 L 192 24 L 204 46 L 212 40 L 230 40 L 245 30 L 260 40 L 500 40" />
                    </svg>
                  </div>

                  {/* Layer 5: Elegant Sweeping Wave Swoop (Bottom Left Overlay) */}
                  <div className="absolute bottom-0 left-0 right-0 z-[4] pointer-events-none">
                    <svg
                      viewBox="0 0 500 160"
                      preserveAspectRatio="none"
                      className="w-full h-32 sm:h-36 lg:h-40"
                    >
                      <defs>
                        <linearGradient id="waveGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                          <stop offset="45%" stopColor="#EBF4F9" stopOpacity="0.94" />
                          <stop offset="100%" stopColor="#D9ECF7" stopOpacity="0.85" />
                        </linearGradient>
                        <linearGradient id="waveGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0B1A28" stopOpacity="0.98" />
                          <stop offset="45%" stopColor="#0E2235" stopOpacity="0.94" />
                          <stop offset="100%" stopColor="#123B5D" stopOpacity="0.85" />
                        </linearGradient>
                      </defs>

                      {/* Back Wave */}
                      <path
                        d="M 0 90 Q 120 40, 260 85 T 500 60 L 500 160 L 0 160 Z"
                        fill="rgba(147, 197, 253, 0.25)"
                      />
                      {/* Main Smooth Wave */}
                      <path
                        d="M 0 70 Q 140 15, 290 80 T 500 50 L 500 160 L 0 160 Z"
                        className="fill-[url(#waveGradLight)] dark:fill-[url(#waveGradDark)]"
                      />
                    </svg>
                  </div>

                  {/* Layer 6: Script Signature Calligraphy ("Better Hearts Healthier Lives") */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-[5] select-none pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="font-script text-2xl sm:text-3xl lg:text-[34px] leading-[0.92] text-[#4A7F9D] dark:text-[#7EC0DE] -rotate-[14deg] filter drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] dark:drop-shadow-none font-semibold"
                    >
                      <span className="block tracking-wide">Better</span>
                      <span className="block tracking-wide pl-2.5">Hearts</span>
                      <span className="block tracking-wide pl-5">Healthier</span>
                      <span className="block tracking-wide pl-7">Lives</span>
                    </motion.div>
                  </div>

                </div>

              </div>

              {/* Decorative Accent Glow Blob behind card */}
              <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-[#125083]/10 dark:bg-[#125083]/20 blur-2xl -z-10 pointer-events-none" />
            </div>
          </div>


          {/* ========================================================= */}
          {/* RIGHT COLUMN: Main Narrative & Clinical Profile           */}
          {/* ========================================================= */}
          <div
            className="lg:col-span-7 space-y-6 xl:space-y-7 lg:pl-4 xl:pl-8"
            data-aos="fade-up"
            data-aos-duration="950"
            data-aos-delay="100"
          >
            {/* Top Subtitle Bar: "—— ABOUT THE PHYSICIAN" */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[2.5px] rounded-full bg-[#0C5D75] dark:bg-[#38BDF8]" />
              <span className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#0C5D75] dark:text-[#38BDF8] uppercase">
                ABOUT THE PHYSICIAN
              </span>
            </div>

            {/* Giant Editorial Headline */}
            <div className="space-y-3">
              <h2 className="font-serif text-3xl leading-[1.2] sm:text-4xl lg:text-[42px] xl:text-[48px] text-[#0C2340] dark:text-white font-bold ">
               A Cardiologist. A Clinician.<br />
              
              </h2>
              <h2 className="font-serif text-3xl leading-[1.2] sm:text-4xl lg:text-[42px] xl:text-[48px] text-[#0C2340] dark:text-white font-bold ">
                  A Healthcare Leader
              </h2>

              {/* Coral Accent Horizontal Line */}
              <div className="w-10 h-[2.5px] rounded-full bg-[#EC242E]" />
            </div>

            {/* Narrative Body Description */}
            <p className="font-sans text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-2xl font-normal">
              <strong className="text-[#0C2340] dark:text-white font-semibold">
                Dr. B. Vijaya Chaitanya
              </strong>{' '}
              is an Interventional Cardiologist with over 13 years of experience in the diagnosis and treatment of complex cardiovascular disease. His clinical practice encompasses coronary angiography, angioplasty, primary PCI, complex coronary interventions, structural heart interventions, cardiac imaging and peripheral vascular procedures.
            </p>

            {/* Doctor Name & Designation Signature Block */}
            <div className="pt-2 space-y-1.5 border-t border-slate-200/80 dark:border-white/10">
              <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#0C2340] dark:text-white tracking-tight">
                Dr. B. Vijaya Chaitanya
              </h3>
              
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-xs sm:text-[13px] tracking-[0.18em] text-[#0C5D75] dark:text-[#38BDF8] uppercase">
                  MD, DM, FACC, FIC
                </span>
              </div>

              <p className="font-sans font-medium text-[10px] sm:text-[11px] tracking-[0.22em] text-slate-400 dark:text-slate-400 uppercase leading-snug">
                MANAGING DIRECTOR & CHIEF OF CARDIOVASCULAR SCIENCES
              </p>
            </div>

            {/* Action Buttons: "Explore Clinical Expertise →" & "View Professional Journey →" */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              
              {/* Primary Pill Button */}
              <button
                type="button"
                onClick={() => scrollToSection('expertise')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0C5D75] hover:bg-[#08485B] text-white font-sans text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(12,93,117,0.25)] hover:shadow-[0_6px_22px_rgba(12,93,117,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Explore Clinical Expertise</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary Clean Text Link */}
              <button
                type="button"
                onClick={() => scrollToSection('journey')}
                className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-[#0C5D75] dark:text-[#38BDF8] hover:text-[#08485B] dark:hover:text-white transition-colors duration-200 group cursor-pointer"
              >
                <span className="underline underline-offset-4 decoration-[#0C5D75]/40 dark:decoration-[#38BDF8]/40 group-hover:decoration-[#0C5D75] dark:group-hover:decoration-white">
                  View Professional Journey
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
