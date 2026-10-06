import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, HeartPulse, Stethoscope, Award, CheckCircle2, ShieldCheck, MapPin, Building2, Sparkles } from 'lucide-react';

export default function Hero({ onOpenAppointment }) {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen pt-20 overflow-hidden flex items-center bg-slate-50 dark:bg-[#07131F]">
      {/* 1. Flagship Medstar Hospitals Architecture Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Crisp Architectural Image (High-definition optical presence) */}
        <div
          className="absolute inset-0 bg-cover bg-[position:center_top] sm:bg-[position:center_center] lg:bg-[position:75%_center] bg-no-repeat transition-transform duration-1000 ease-out transform scale-100"
          style={{
            backgroundImage: "url('/medstar_building.jpg')",
          }}
        />

        {/* Layer A: Ambient Clinical Blue & Teal Duotone Tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#125083]/20 via-transparent to-[#41A490]/15 pointer-events-none" />

        {/* Layer B: Balanced Directional Readability Overlay (Image is clearly visible with rich detail) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/50 via-50% to-white/15 dark:from-[#07131F]/80 dark:via-[#07131F]/55 dark:via-50% dark:to-[#07131F]/20 pointer-events-none" />

        {/* Layer C: Top & Bottom Seamless Edge Blenders */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 dark:from-[#07131F]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none" />

        {/* Layer D: Subtle ECG Grid & Ambient Radial Accents */}
        <div className="absolute inset-0 ecg-grid opacity-20 dark:opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#41A490]/10 dark:bg-[#41A490]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/10 w-[450px] h-[450px] rounded-full bg-[#125083]/10 dark:bg-[#125083]/20 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ========================================================================= */}
        {/* MOBILE VIEW: Premium Medical Portfolio Layout (Cover Banner + Centered Avatar) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden w-full space-y-5">
          
          {/* 1. Portfolio Header Card with Cover Image Banner & Centered Avatar */}
          <div
            className="relative rounded-3xl overflow-hidden bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-white/10 shadow-xl backdrop-blur-md"
            data-aos="fade-down"
            data-aos-duration="850"
          >
            {/* Cover Image Banner */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-slate-900">
              <img
                src="/medstar_building.jpg"
                alt="Medstar Hospitals Flagship Campus"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#125083]/40 to-transparent" />
              
           
              {/* Top Right Medstar Tag */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2.5 py-1 rounded-full bg-[#125083] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                  Medstar Hospitals
                </span>
              </div>
            </div>

            {/* Centered Doctor Profile Avatar */}
            <div className="relative -mt-16 sm:-mt-20 flex flex-col items-center px-4 pb-5 pt-0">
              <div className="relative group">
                {/* Luminous Glow Halo */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#125083] via-[#41A490] to-[#EC242E] blur-md opacity-70" />
                
                {/* Profile Portrait */}
                <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/doctor.jpg"
                    alt="Dr. B. Vijaya Chaitanya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Verified Medical Shield Check Badge (🟢 Secondary Teal) */}
                <div className="absolute bottom-1 right-1 bg-[#41A490] text-white rounded-full p-1.5 border-2 border-white dark:border-slate-900 shadow-md flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Doctor Details & Credentials */}
              <div className="text-center mt-3 space-y-1">
               

                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#125083] dark:text-white tracking-tight uppercase">
                  Dr. B. Vijaya <span className="text-gradient-crimson">Chaitanya</span>
                </h1>

               

                <p className="text-[11px] font-mono text-[#123B5D] dark:text-slate-300 font-semibold max-w-sm mx-auto">
                  Managing Director, Medstar Hospitals • Chief of Cardiovascular Sciences
                </p>
              </div>

              {/* Experience & Fellowship Quick Tags */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-white/10 w-full text-[10px] sm:text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded-xl bg-[#F5F8FA] dark:bg-white/5 text-[#123B5D] dark:text-slate-300 font-bold border border-slate-200 dark:border-white/10">
                  13+ Yrs Exp
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-[#41A490]/10 text-[#125083] dark:text-[#41A490] font-bold border border-[#41A490]/30">
                  Mount Sinai Trained
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-[#EC242E]/10 text-[#EC242E] font-bold border border-[#EC242E]/30">
                  Medanta TAVI
                </span>
              </div>
            </div>
          </div>

          {/* 2. Doctor Narrative Summary */}
          <div
            className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm backdrop-blur-md text-xs sm:text-sm text-[#123B5D] dark:text-slate-300 leading-relaxed font-normal"
            data-aos="fade-up"
            data-aos-duration="750"
          >
           With <strong className="text-[#EC242E]">13 years of experience</strong> in cardiovascular medicine, Dr. B. Vijaya Chaitanya specialises in interventional cardiology, complex coronary interventions, primary PCI, structural heart interventions, advanced cardiac imaging and peripheral vascular interventions.
          </div>

          {/* 3. Mobile CTA Consultation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" data-aos="fade-up" data-aos-duration="800">
            {/* 🔴 Accent Red CTA */}
            <button
              onClick={onOpenAppointment}
              className="btn btn-sm bg-[#EC242E] hover:bg-[#D01B24] text-white border-none rounded-xl shadow-md font-mono text-xs gap-2 py-3 h-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Clinical Consultation</span>
            </button>
            {/* 🔵 Primary Navy Button */}
            <a
              href="#about"
              className="btn btn-sm bg-white dark:bg-slate-900 text-[#125083] dark:text-[#41A490] border-2 border-[#125083] dark:border-[#41A490] rounded-xl font-mono text-xs gap-2 py-3 h-auto shadow-sm"
            >
              <span>Explore Profile</span>
              <ArrowRight className="w-4 h-4 text-[#41A490]" />
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: High-Impact 2-Column Layout */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Narrative & Stats */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6" data-aos="fade-right" data-aos-duration="900">
            
            {/* Main Title & Slogan */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight uppercase text-[#125083] dark:text-white leading-[1.08]">
                Dr. B. Vijaya <br />
                <span className="text-gradient-crimson drop-shadow-sm">
                  Chaitanya
                </span>
              </h1>
              
              <div className="pt-1.5 space-y-1">
              
                <p className="text-xs sm:text-sm font-mono text-[#123B5D] dark:text-slate-300 uppercase tracking-widest font-bold flex items-center gap-2">
                  <span className="text-[#125083] dark:text-sky-300">Managing Director, Medstar Hospitals</span>
                  <span className="text-[#41A490]">•</span>
                  <span>Chief of Cardiovascular Sciences</span>
                </p>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#123B5D] dark:text-slate-200 leading-relaxed max-w-2xl font-normal bg-white/85 dark:bg-slate-900/75 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-sm">
              With <strong className="text-[#EC242E] font-bold">13+ years of clinical excellence</strong> in interventional cardiology, Dr. B. Vijaya Chaitanya specialises in high-risk complex coronary interventions, 24/7 primary PCI, structural heart interventions, and precision vascular care at Medstar Hospitals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              {/* 🔴 Accent Red CTA */}
              <button
                onClick={onOpenAppointment}
                className="btn btn-sm sm:btn-lg bg-[#EC242E] hover:bg-[#D01B24] text-white border-none rounded-xl sm:rounded-2xl shadow-lg font-mono text-xs sm:text-sm gap-2 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book A Consultation</span>
              </button>

              {/* 🔵 Primary Navy / Secondary Teal Button */}
              <a
                href="#about"
                className="btn btn-sm sm:btn-lg bg-white hover:bg-[#F5F8FA] dark:bg-slate-900 text-[#125083] dark:text-[#41A490] border-2 border-[#125083] dark:border-[#41A490] rounded-xl sm:rounded-2xl font-mono text-xs sm:text-sm gap-2 shadow-sm transition-all hover:scale-105"
              >
                <HeartPulse className="w-4 h-4 text-[#41A490]" />
                <span>View More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Clinical Highlights Strip */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F5F8FA] dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-[#123B5D] dark:text-slate-300 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#41A490]" />
                <span>Mount Sinai Hospital Trained</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F5F8FA] dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-[#123B5D] dark:text-slate-300 shadow-sm">
                <Award className="w-4 h-4 text-[#41A490]" />
                <span>Medanta TAVI Fellow</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EC242E]/10 border border-[#EC242E]/25 text-xs font-mono font-semibold text-[#EC242E] shadow-sm">
                <HeartPulse className="w-4 h-4 text-[#EC242E] animate-pulse" />
                <span>24/7 Primary PCI & Cath Lab</span>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Doctor Portrait Card */}
          <div
            className="lg:col-span-5 relative"
            data-aos="fade-left"
            data-aos-duration="950"
            data-aos-delay="150"
          >
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Navy & Teal Glow Halo */}
              <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-tr from-[#125083]/30 via-[#41A490]/25 to-[#EC242E]/20 blur-xl pointer-events-none" />

              {/* Main Portrait Card */}
              <div className="relative rounded-[28px] overflow-hidden bg-white dark:bg-slate-900 border-2 border-white/80 dark:border-white/15 shadow-2xl">
                
                {/* Doctor Image Container */}
                <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
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
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5 sm:space-y-2">
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
