import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, HeartPulse, Stethoscope, Award, CheckCircle2, ShieldCheck, MapPin, Building2, Sparkles } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

/**
 * 3 Procedural Stats Cards
 * - Centered numbers & subtitles
 * - Continuous loop animated count-up with 3s hold
 * - Identical heights & responsive typography
 */
function StatCardsGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full items-stretch">
      {/* Stat 1: 26,000+ Angiograms */}
      <div className="h-full min-h-[92px] sm:min-h-[110px] p-2 sm:p-3.5 rounded-2xl sm:rounded-[22px] bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm backdrop-blur-md flex flex-col justify-center items-center text-center transition-all hover:border-slate-400 hover:shadow-md">
        <span className="block text-[14px] xs:text-base sm:text-2xl lg:text-3xl font-mono font-black text-slate-950 dark:text-white tracking-tight leading-none text-center whitespace-nowrap">
          <CountUpNumber end={26000} duration={2000} loop={true} pauseDuration={3000} />
        </span>
        <span className="text-[10px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold mt-1.5 leading-tight text-center">
          Angiograms
        </span>
      </div>

      {/* Stat 2: 12,000+ Angioplasties */}
      <div className="h-full min-h-[92px] sm:min-h-[110px] p-2 sm:p-3.5 rounded-2xl sm:rounded-[22px] bg-white/95 dark:bg-slate-900/90 border border-rose-300 dark:border-rose-500/40 shadow-sm backdrop-blur-md flex flex-col justify-center items-center text-center transition-all hover:border-cardio-crimson hover:shadow-md">
        <span className="block text-[14px] xs:text-base sm:text-2xl lg:text-3xl font-mono font-black text-[#EF4444] dark:text-cardio-crimson tracking-tight leading-none text-center whitespace-nowrap">
          <CountUpNumber end={12000} duration={2000} loop={true} pauseDuration={3000} />
        </span>
        <span className="text-[10px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold mt-1.5 leading-tight text-center">
          Angioplasties
        </span>
      </div>

      {/* Stat 3: 11,000+ Peripheral Cases */}
      <div className="h-full min-h-[92px] sm:min-h-[110px] p-2 sm:p-3.5 rounded-2xl sm:rounded-[22px] bg-white/95 dark:bg-slate-900/90 border border-sky-300 dark:border-sky-500/40 shadow-sm backdrop-blur-md flex flex-col justify-center items-center text-center transition-all hover:border-sky-500 hover:shadow-md">
        <span className="block text-[14px] xs:text-base sm:text-2xl lg:text-3xl font-mono font-black text-[#0284C7] dark:text-cardio-cyan tracking-tight leading-none text-center whitespace-nowrap">
          <CountUpNumber end={11000} duration={2000} loop={true} pauseDuration={3000} />
        </span>
        <span className="text-[10px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold mt-1.5 leading-tight text-center">
          Peripheral <br className="block sm:hidden" />Cases
        </span>
      </div>
    </div>
  );
}

export default function Hero({ onOpenAppointment }) {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-32 lg:pb-20 overflow-hidden flex items-center">
      {/* 1. Attractive Blue Medstar Hospital Building Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/hospital_bg.jpg')",
        }}
      />

      {/* 2. Sophisticated Multi-Layer Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/85 to-sky-900/30 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-900/60 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/80 via-transparent to-white dark:from-slate-950/80 dark:via-transparent dark:to-cardio-dark pointer-events-none" />

      {/* Radial Blue Accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 z-0 ecg-grid opacity-30 pointer-events-none" />

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
            <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-slate-900">
              <img
                src="/hospital_bg.jpg"
                alt="Medstar Hospitals Cover"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              
              {/* Top Left Live Status */}
              <div className="absolute top-3 left-3 z-10">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-white/20 backdrop-blur-md shadow">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    Live Cath Lab & OPD
                  </span>
                </div>
              </div>

              {/* Top Right Medstar Tag */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2.5 py-1 rounded-full bg-cardio-crimson text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                  Medstar Hospitals
                </span>
              </div>
            </div>

            {/* Centered Doctor Profile Avatar */}
            <div className="relative -mt-16 sm:-mt-20 flex flex-col items-center px-4 pb-5 pt-0">
              <div className="relative group">
                {/* Luminous Glow Halo */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-500 via-cardio-crimson to-sky-400 blur-md opacity-80" />
                
                {/* Profile Portrait */}
                <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-100 dark:bg-slate-800">
                  <img
                    src="/doctor.jpg"
                    alt="Dr. B. Vijaya Chaitanya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Verified Medical Shield Check Badge */}
                <div className="absolute bottom-1 right-1 bg-sky-500 text-white rounded-full p-1.5 border-2 border-white dark:border-slate-900 shadow-md flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Doctor Details & Credentials */}
              <div className="text-center mt-3 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cardio-crimson/10 border border-cardio-crimson/25 text-cardio-crimson text-[10px] font-mono font-bold uppercase tracking-wider">
                  <Award className="w-3 h-3" />
                  <span>FACC (USA) • FIC • TAVI Fellow</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-950 dark:text-white tracking-tight uppercase">
                  Dr. B. Vijaya <span className="text-gradient-crimson">Chaitanya</span>
                </h1>

                <p className="text-sm font-heading font-extrabold text-sky-700 dark:text-cardio-cyan">
                  Complex Hearts. Clearer Decisions.
                </p>

                <p className="text-[11px] font-mono text-slate-600 dark:text-slate-300 font-semibold max-w-sm mx-auto">
                  Managing Director, Medstar Hospitals • Chief of Cardiovascular Sciences
                </p>
              </div>

              {/* Experience & Fellowship Quick Tags */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-white/10 w-full text-[10px] sm:text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-white/10">
                  13+ Yrs Exp
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 font-bold border border-sky-200 dark:border-sky-800/40">
                  Mount Sinai Trained
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800/40">
                  Medanta TAVI
                </span>
              </div>
            </div>
          </div>

          {/* 2. Doctor Narrative Summary */}
          <div
            className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm backdrop-blur-md text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            With over <strong className="text-cardio-crimson">13 years of experience</strong> in cardiovascular medicine, Dr. B. Vijaya Chaitanya specialises in interventional cardiology, complex coronary interventions, primary PCI, structural heart interventions, advanced cardiac imaging and peripheral vascular interventions.
          </div>

          {/* 3. Mobile CTA Consultation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" data-aos="fade-up" data-aos-duration="800">
            <button
              onClick={onOpenAppointment}
              className="btn btn-sm bg-gradient-to-r from-cardio-crimson to-cardio-ruby hover:from-cardio-ruby hover:to-cardio-crimson text-white border-none rounded-xl shadow-md font-mono text-xs gap-2 py-3 h-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Clinical Consultation</span>
            </button>
            <a
              href="#cardiac-3d"
              className="btn btn-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-cardio-cyan border border-slate-300 dark:border-cardio-cyan/40 rounded-xl font-mono text-xs gap-2 py-3 h-auto shadow-sm"
            >
              <HeartPulse className="w-4 h-4 text-cardio-crimson" />
              <span>View 3D Vasculature</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4. Quick Metrics Grid - 3 Continuous Loop Cards */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="850"
            className="pt-2"
          >
            <StatCardsGrid />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: High-Impact 2-Column Layout */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Narrative & Stats */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6" data-aos="fade-right" data-aos-duration="900">
            
            {/* Top Medical Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cardio-crimson/25 bg-white/90 dark:bg-cardio-dark/80 backdrop-blur-md shadow-sm">
              <HeartPulse className="w-4 h-4 text-cardio-crimson animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-cardio-crimson uppercase">
                Interventional Cardiology & Healthcare Leadership
              </span>
            </div>

            {/* Main Title & Slogan */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight uppercase text-slate-950 dark:text-white leading-[1.08]">
                Dr. B. Vijaya <br />
                <span className="text-gradient-crimson drop-shadow-sm">
                  Chaitanya
                </span>
              </h1>
              
              <div className="pt-1.5">
                <p className="text-lg sm:text-2xl font-heading font-extrabold text-sky-700 dark:text-cardio-cyan tracking-wide">
                  Complex Hearts. Clearer Decisions.
                </p>
                <p className="text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 mt-1 uppercase tracking-widest font-bold flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-600 dark:text-cardio-cyan shrink-0" />
                  <span>Managing Director, Medstar Hospitals • Chief of Cardiovascular Sciences</span>
                </p>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-800 dark:text-slate-200 leading-relaxed max-w-2xl font-normal bg-white/60 dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-2xl border border-white/80 dark:border-white/10 backdrop-blur-sm">
              With over <span className="font-bold text-cardio-crimson">13 years of experience</span> in cardiovascular medicine, Dr. B. Vijaya Chaitanya specialises in interventional cardiology, with expertise spanning complex coronary interventions, primary PCI, structural heart interventions, advanced cardiac imaging and peripheral vascular interventions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenAppointment}
                className="btn btn-sm sm:btn-lg bg-gradient-to-r from-cardio-crimson to-cardio-ruby hover:from-cardio-ruby hover:to-cardio-crimson text-white border-none rounded-xl sm:rounded-2xl shadow-lg font-mono text-xs sm:text-sm gap-2 transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Clinical Consultation</span>
              </button>

              <a
                href="#cardiac-3d"
                className="btn btn-sm sm:btn-lg bg-white/90 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-900 dark:text-cardio-cyan border border-slate-300 dark:border-cardio-cyan/40 rounded-xl sm:rounded-2xl font-mono text-xs sm:text-sm gap-2 shadow-md backdrop-blur-sm"
              >
                <HeartPulse className="w-4 h-4 text-cardio-crimson" />
                <span>View 3D Cardiac Vasculature</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metrics Grid - Flawless Desktop Alignment with Animated Counters */}
            <div
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay="200"
              className="pt-4 border-t border-slate-200/80 dark:border-white/10"
            >
              <StatCardsGrid />
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
              
              {/* Outer Blue & Crimson Glow Halo */}
              <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-tr from-sky-500/30 via-cardio-crimson/20 to-sky-400/30 blur-xl pointer-events-none" />

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

                  {/* Top Status Badge: Live Cath Lab / OPD Available */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/15 shadow-md backdrop-blur-md">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200">
                        OPD & Cath Lab On-Call
                      </span>
                    </div>
                  </div>

                  {/* Top Right: Hospital Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-cardio-crimson text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                      Medstar Hospitals
                    </span>
                  </div>

                  {/* Bottom Doctor Details Overlay inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                        MBBS, MD, DM, FACC, FIC
                      </span>
                      <span className="text-[10px] font-mono text-slate-300 font-semibold">
                        13+ Yrs Exp
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                      Dr. B. Vijaya Chaitanya
                    </h3>

                    <p className="text-xs font-mono text-slate-300 leading-snug">
                      Interventional Cardiologist • Managing Director, Medstar Hospitals (200-Bedded Facility, Tadepalli)
                    </p>
                  </div>
                </div>

                {/* Bottom Card Strip: Location & Fast Consultation */}
                <div className="p-3.5 sm:p-4 bg-slate-50/90 dark:bg-slate-950/90 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">
                    <MapPin className="w-4 h-4 text-cardio-crimson shrink-0" />
                    <span>Tadepalli, Vijayawada, AP</span>
                  </div>

                  <button
                    onClick={onOpenAppointment}
                    className="btn btn-xs bg-cardio-crimson hover:bg-cardio-ruby text-white font-mono text-[11px] font-bold rounded-lg shadow-sm"
                  >
                    Consult Now
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
