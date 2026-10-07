import React from 'react';
import { ArrowRight, Calendar, HeartPulse, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenAppointment }) {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen pt-24 pb-14 sm:pt-28 sm:pb-20 overflow-hidden flex items-center bg-[#EBF4FA] dark:bg-[#07131F]"
    >
      {/* 1. Flagship Medstar Hospitals Architecture with Light Blue Medical Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Architectural Image: Optimized mobile presence & clinical perspective */}
        <div
          className="absolute inset-0 bg-cover bg-[position:center_15%] sm:bg-[position:center_center] lg:bg-[position:80%_center] bg-no-repeat opacity-[0.52] sm:opacity-[0.28] dark:opacity-[0.32] sm:dark:opacity-[0.16] transition-all duration-700"
          style={{
            backgroundImage: "url('/medstar_building.jpg')",
          }}
        />

        {/* Layer 1: Responsive Light Blue Readability Overlay (Mobile: translucent vertical wash so building is visible; Desktop: directional fade) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EBF4FA]/70 via-[#EBF4FA]/40 to-[#EBF4FA]/85 sm:bg-gradient-to-r sm:from-[#EBF4FA] sm:via-[#EBF4FA]/90 sm:to-[#DCECF8]/65 dark:from-[#07131F]/75 dark:via-[#07131F]/45 dark:to-[#07131F]/85 sm:dark:from-[#07131F] sm:dark:via-[#07131F]/92 sm:dark:to-[#0B2540]/55 pointer-events-none" />

        {/* Layer 2: Ambient Clinical Blue & Teal Duotone Tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#125083]/10 via-transparent to-[#41A490]/10 dark:from-[#125083]/20 dark:to-[#41A490]/15 pointer-events-none" />

        {/* Layer 3: Top & Bottom Seamless Edge Blenders */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#EBF4FA]/90 dark:from-[#07131F] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 via-[#EBF4FA]/40 dark:via-slate-950/40 to-transparent" />

        {/* Layer 4: ECG Grid & Luminous Ambient Orbs */}
        <div className="absolute inset-0 ecg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#41A490]/15 dark:bg-[#41A490]/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/10 w-[450px] h-[450px] rounded-full bg-[#125083]/15 dark:bg-[#125083]/20 blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ========================================================================= */}
        {/* MOBILE VIEW: Clean, Flowing Medical Portfolio (NO boxy card-in-card clutter) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden w-full space-y-5 text-center">
          
          {/* Centered Doctor Profile Executive Portrait */}
          <div className="relative inline-block mx-auto pt-2" data-aos="fade-down" data-aos-duration="750">
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#125083] via-[#41A490] to-[#EC242E] blur-lg opacity-40" />
            <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl mx-auto bg-slate-100 dark:bg-slate-800">
              <img
                src="/doctor.jpg"
                alt="Dr. B. Vijaya Chaitanya"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#41A490] text-white rounded-full p-2 border-2 border-white dark:border-slate-800 shadow-lg">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Doctor Details & Credentials */}
          <div className="space-y-1.5" data-aos="fade-up" data-aos-duration="750">
            <span className="inline-block px-3 py-1 rounded-full bg-white/85 dark:bg-white/10 text-[#125083] dark:text-sky-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-[#125083]/15 dark:border-white/15 shadow-sm">
              Medstar Hospitals • Tadepalli & Vijayawada
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#125083] dark:text-white uppercase tracking-tight">
              Dr. B. Vijaya <span className="text-gradient-crimson">Chaitanya</span>
            </h1>
            <p className="text-xs font-mono text-[#41A490] font-bold">
              Senior Interventional Cardiologist • MD, DM, FACC, FIC
            </p>
          </div>

          {/* Value Proposition with subtle frosted glass readability */}
          <p 
            className="text-xs sm:text-sm text-[#123B5D] dark:text-slate-100 leading-relaxed max-w-md mx-auto font-normal px-3 py-2 rounded-2xl bg-white/75 dark:bg-slate-900/60 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-sm"
            data-aos="fade-up" 
            data-aos-duration="800"
          >
            Specialising in complex coronary interventions, 24/7 emergency primary PCI, and structural heart care (TAVI).
          </p>

          {/* Mobile CTA Consultation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1" data-aos="fade-up" data-aos-duration="850">
            <button
              onClick={onOpenAppointment}
              className="btn btn-sm bg-[#EC242E] hover:bg-[#D01B24] text-white border-none rounded-xl shadow-md font-mono text-xs gap-2 py-3 h-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Clinical Consultation</span>
            </button>
            <a
              href="#about"
              className="btn btn-sm bg-white dark:bg-slate-900 text-[#125083] dark:text-[#41A490] border-2 border-[#125083] dark:border-[#41A490] rounded-xl font-mono text-xs gap-2 py-3 h-auto shadow-sm"
            >
              <span>Explore Profile</span>
              <ArrowRight className="w-4 h-4 text-[#41A490]" />
            </a>
          </div>

          {/* Clean Mobile Stats Strip with Frosted Glass Elevation */}
          <div 
            className="p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-sm grid grid-cols-3 divide-x divide-slate-200/60 dark:divide-white/10 text-center"
            data-aos="fade-up" 
            data-aos-duration="900"
          >
            <div className="px-1.5 py-1">
              <div className="text-sm sm:text-base font-heading font-black text-[#125083] dark:text-white leading-tight">13+ Yrs</div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">Experience</div>
            </div>
            <div className="px-1.5 py-1">
              <div className="text-xs sm:text-sm font-heading font-extrabold text-[#41A490] leading-tight whitespace-nowrap">Mount Sinai</div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">USA Trained</div>
            </div>
            <div className="px-1.5 py-1">
              <div className="text-sm sm:text-base font-heading font-black text-[#EC242E] leading-tight flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC242E] animate-pulse" />
                <span>24/7 PCI</span>
              </div>
              <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">STEMI Lab</div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: High-Impact 2-Column Layout (Clean typography, NO boxy cards) */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clear Typographic & UX Hierarchy */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right" data-aos-duration="900">
            {/* Prestige Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 dark:bg-white/10 border border-[#125083]/15 dark:border-white/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#41A490] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#125083] dark:text-sky-300">
                Medstar Hospitals • Chief of Cardiovascular Sciences
              </span>
            </div>

            {/* Main Title & Slogan */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-[#125083] dark:text-white leading-[1.08]">
                Dr. B. Vijaya <br />
                <span className="text-gradient-crimson drop-shadow-sm">
                  Chaitanya
                </span>
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#41A490] font-bold uppercase tracking-wider">
                Senior Interventional Cardiologist • MD, DM, FACC, FIC
              </p>
            </div>

            {/* Concise Value Proposition (Clean typography, NO card wrapper!) */}
            <p className="text-base sm:text-lg text-[#123B5D]/85 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              Specialising in <strong className="text-slate-900 dark:text-white font-bold">complex coronary interventions</strong>, 24/7 emergency primary PCI, and structural heart procedures (TAVI).
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              {/* 🔴 Accent Red CTA */}
              <button
                onClick={onOpenAppointment}
                className="btn btn-sm sm:btn-lg bg-[#EC242E] hover:bg-[#D01B24] text-white border-none rounded-xl sm:rounded-2xl shadow-lg shadow-red-500/25 font-mono text-xs sm:text-sm gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinical Consultation</span>
              </button>

              {/* 🔵 Secondary Profile Button */}
              <a
                href="#about"
                className="btn btn-sm sm:btn-lg bg-white dark:bg-slate-900 text-[#125083] dark:text-[#41A490] border-2 border-[#125083] dark:border-[#41A490] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl sm:rounded-2xl font-mono text-xs sm:text-sm gap-2 shadow-sm transition-all hover:scale-105"
              >
                <HeartPulse className="w-4 h-4 text-[#41A490]" />
                <span>Explore Profile</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Executive Trust Metrics Bar - Sleek, Compact & Responsive */}
            <div className="pt-2 max-w-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70 dark:divide-white/10 overflow-hidden">
                
                {/* 1. Experience */}
                <div className="px-3.5 py-2.5 flex flex-col justify-center">
                  <div className="text-base sm:text-lg font-heading font-black text-[#125083] dark:text-white leading-tight">
                    13+ <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">Yrs</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider pt-0.5">
                    Experience
                  </div>
                </div>

                {/* 2. Angiograms */}
                <div className="px-3.5 py-2.5 flex flex-col justify-center">
                  <div className="text-base sm:text-lg font-heading font-black text-[#125083] dark:text-white leading-tight">
                    26K+
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider pt-0.5">
                    Angiograms
                  </div>
                </div>

                {/* 3. Mount Sinai */}
                <div className="px-3.5 py-2.5 flex flex-col justify-center">
                  <div className="text-sm sm:text-[15px] font-heading font-extrabold text-[#41A490] leading-tight whitespace-nowrap">
                    Mount Sinai
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider pt-0.5">
                    USA Trained
                  </div>
                </div>

                {/* 4. 24/7 PCI */}
                <div className="px-3.5 py-2.5 flex flex-col justify-center">
                  <div className="text-base sm:text-lg font-heading font-black text-[#EC242E] leading-tight flex items-center gap-1.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EC242E] animate-pulse" />
                    <span>24/7 PCI</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider pt-0.5">
                    STEMI Lab
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Executive Doctor Portrait */}
          <div
            className="lg:col-span-5 relative"
            data-aos="fade-left"
            data-aos-duration="950"
            data-aos-delay="150"
          >
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2.5 rounded-[32px] bg-gradient-to-tr from-[#125083]/20 via-[#41A490]/15 to-[#EC242E]/10 blur-xl pointer-events-none" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-white/10 shadow-2xl">
                
                {/* Doctor Image Container */}
                <div className="relative h-[430px] sm:h-[490px] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/doctor.jpg"
                    alt="Dr. B. Vijaya Chaitanya - Interventional Cardiologist & Managing Director"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay for photo contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Right: Hospital Badge (🔵 Primary Navy) */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[#125083] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                      Medstar Hospitals
                    </span>
                  </div>

                  {/* Bottom Doctor Details Overlay inside photo */}
                  <div className="absolute bottom-4 left-5 right-5 z-10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#41A490] uppercase tracking-wider">
                        MBBS, MD, DM, FACC, FIC
                      </span>
                      <span className="text-[10px] font-mono text-slate-300 font-semibold">
                        13+ Yrs Exp
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                      Dr. B. Vijaya Chaitanya
                    </h3>
                    <p className="text-[11px] font-mono text-slate-300">
                      Managing Director & Chief of Cardiovascular Sciences
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
