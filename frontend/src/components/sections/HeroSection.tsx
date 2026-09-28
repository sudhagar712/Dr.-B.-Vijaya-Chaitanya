import React, { useEffect, useRef } from 'react';
import { Calendar, ChevronRight, Activity, Shield, Award, Sparkles, HeartPulse, CheckCircle2 } from 'lucide-react';
import { Heart3DCanvas } from '../canvas/Heart3DCanvas';
import { MagneticButton } from '../common/MagneticButton';
import gsap from 'gsap';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const visualGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
      .from('.hero-title-line', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
      }, '-=0.4')
      .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-desc', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-cta-group', {
        y: 25,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-highlights', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
      }, '-=0.5')
      .from('.hero-visual-container', {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      }, '-=1.0')
      .from('.hero-floating-card', {
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
      }, '-=0.7');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToExpertise = () => {
    const el = document.getElementById('expertise');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden bg-ecg-grid"
    >
      {/* Subtle Radial Glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cardio-red/5 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-medical-blue/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Doctor Identity & Mission */}
          <div ref={textGroupRef} className="lg:col-span-6 xl:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Top Credential Chip */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cardio-red opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cardio-red" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                Cardiology & Heart Care Specialist
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                Evidence-Based Cardiovascular Practice
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-display tracking-tight text-navy-950 leading-[1.12]">
                <span className="hero-title-line block">Dr. B. Vijaya</span>
                <span className="hero-title-line block text-gradient-cardio">Chaitanya</span>
              </h1>
              
              <div className="hero-subtitle flex items-center gap-3 pt-1">
                <div className="h-0.5 w-10 bg-cardio-red rounded-full hidden sm:block" />
                <p className="text-lg sm:text-xl font-semibold text-slate-700 tracking-tight">
                  Cardiologist & Heart Care Specialist
                </p>
              </div>
            </div>

            {/* Supporting Mission Statement */}
            <p className="hero-desc text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Dedicated to providing compassionate, evidence-based cardiovascular care with a patient-first approach.
            </p>

            {/* Clinical Highlights Chips */}
            <div className="hero-highlights grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-lg pt-1">
              {[
                { title: 'Preventive Cardiology', desc: 'Early risk detection & lipid care' },
                { title: 'Interventional Care', desc: 'Angiography & stenting guidance' },
                { title: 'Heart Failure Care', desc: 'Guideline-directed management' },
                { title: 'Hypertension Clinic', desc: 'Vascular & arterial health' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/70 border border-slate-200/80 shadow-xs backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-cardio-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cardio-red via-cardio-crimson to-cardio-red hover:from-cardio-crimson hover:to-cardio-darkRed text-white text-sm font-semibold tracking-wide shadow-cardio-glow transition-all duration-300 flex items-center gap-2.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </MagneticButton>

              <button
                onClick={scrollToExpertise}
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-navy-900 text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore Expertise</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Micro Credential Trust Badge */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Ethical Medical Practice</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cardio-red" />
                <span>Specialized Heart Care</span>
              </div>
              <div className="flex items-center gap-1.5 hidden sm:flex">
                <HeartPulse className="w-4 h-4 text-blue-600" />
                <span>Comprehensive Diagnostics</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Human Heart Visual & Medical Telemetry HUD */}
          <div ref={visualGroupRef} className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Glassmorphism Backdrop Canvas Container */}
            <div className="hero-visual-container relative w-full aspect-square max-w-[540px] rounded-3xl bg-gradient-to-b from-white/95 to-slate-50/80 border border-slate-200/90 shadow-2xl backdrop-blur-xl overflow-hidden p-2 flex items-center justify-center">
              
              {/* Background ECG Trace in Hero Visual */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-ecg-grid" />

              {/* Three.js Interactive 3D Heart */}
              <Heart3DCanvas className="w-full h-full" bpm={72} />

              {/* Floating Top Left Telemetry Card */}
              <div className="hero-floating-card absolute top-4 left-4 p-3 rounded-2xl bg-white/90 border border-slate-200/90 shadow-glass backdrop-blur-md pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-red-50 text-cardio-red">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Cardiac Output</p>
                    <p className="text-xs font-bold text-slate-900 font-mono">5.2 L / min</p>
                  </div>
                </div>
              </div>

              {/* Floating Top Right Telemetry Card */}
              <div className="hero-floating-card absolute top-4 right-4 p-3 rounded-2xl bg-white/90 border border-slate-200/90 shadow-glass backdrop-blur-md pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Oxygen Saturation</p>
                    <p className="text-xs font-bold text-slate-900 font-mono">SpO2: 99%</p>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Center Micro Instruction */}
              <div className="absolute bottom-20 sm:bottom-18 left-1/2 -translate-x-1/2 pointer-events-none text-center">
                <span className="text-[11px] text-slate-400 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200/60 shadow-xs">
                  Interact & Drag 3D Heart • Real-time Cardiac Cycle
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
