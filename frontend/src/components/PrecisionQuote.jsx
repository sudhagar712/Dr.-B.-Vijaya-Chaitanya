import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Eye, Scale, Compass, CheckCircle2 } from 'lucide-react';

export default function PrecisionQuote() {
  const pillars = [
    {
      icon: Stethoscope,
      title: 'Understanding the Patient',
      desc: 'Cardiology is never about numbers alone; clinical nuance starts with patient context, comorbidities and history.',
      color: 'text-cardio-crimson',
      bg: 'bg-cardio-crimson/10 border-cardio-crimson/25',
    },
    {
      icon: Eye,
      title: 'Reading the Anatomy',
      desc: 'Precise angiography and intravascular imaging (IVUS/OCT) to interpret complex coronary geometries.',
      color: 'text-cardio-cyan',
      bg: 'bg-cardio-cyan/10 border-cardio-cyan/25',
    },
    {
      icon: Scale,
      title: 'Weighing the Risks',
      desc: 'Evaluating physiology (FFR) and choosing the exact moment when intervention offers superior longevity.',
      color: 'text-amber-600',
      bg: 'bg-amber-500/10 border-amber-500/25',
    },
    {
      icon: Compass,
      title: 'Deliberate Execution',
      desc: 'Executing left main, bifurcation, primary PCI and structural procedures with deliberate interventional precision.',
      color: 'text-cardio-teal',
      bg: 'bg-cardio-teal/10 border-cardio-teal/25',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-cardio-dark">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] radial-glow-blue pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Quote Container */}
        <div className="max-w-6xl mx-auto text-center space-y-6" data-aos="fade-up" data-aos-duration="850">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-crimson/25 bg-cardio-crimson/5 text-xs font-mono font-bold text-cardio-crimson uppercase tracking-widest">
            Clinical Philosophy
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            When Experience Meets <span className="text-gradient-cyan">Precision</span>
          </h2>

          <div
            className="relative p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/90 dark:border-white/15 shadow-2xl group transition-all text-left"
            data-aos="zoom-in-up"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* 1. Real Cath-Lab Angiogram Operating Suite Background Image */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: "url('/cathlab_bg.jpg')",
              }}
            />

            {/* 2. Precision Dual-Tone Clinical Gradient Overlays for Maximum Contrast & Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/88 to-sky-950/60 dark:from-slate-950/95 dark:via-slate-950/88 dark:to-slate-950/70 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/80 via-transparent to-white/90 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950/90 pointer-events-none" />
            
            {/* 3. Subtle ECG Grid */}
            <div className="absolute inset-0 z-0 ecg-grid opacity-25 pointer-events-none" />

            {/* Top Status Bar: Live Cath Lab Telemetry Badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200/70 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                
              </div>
             
            </div>

            {/* Medical Quote Symbol */}
            <div className="text-6xl sm:text-7xl font-serif text-cardio-crimson/25 absolute top-12 left-6 select-none pointer-events-none">
              “
            </div>

            {/* Main Quote Text */}
            <p className="relative z-10 text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-slate-950 dark:text-white leading-relaxed pt-2">
              Cardiology is rarely about a single number on a scan. It is about understanding the patient, reading the anatomy, weighing the risks and choosing the right course of action.
            </p>

            {/* Explanatory Paragraph with Glassmorphic Card Backdrop */}
            <div className="relative z-10 mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal bg-white/60 dark:bg-slate-900/60 p-4 sm:p-5 rounded-2xl backdrop-blur-md border border-white/80 dark:border-white/10">
              Over the years, Dr. Vijaya Chaitanya has built extensive experience in both routine and complex cardiovascular interventions, including coronary angioplasty, primary PCI, left main and bifurcation stenting, structural heart procedures and cardiac device implantation. His approach combines clinical experience with contemporary interventional techniques to make every decision more deliberate.
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={80 * (idx + 1)}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1.5 duration-300"
              >
                <div>
                  
                  <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
             
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
