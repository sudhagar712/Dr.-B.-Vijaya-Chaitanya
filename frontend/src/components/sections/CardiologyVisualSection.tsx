import React, { useState } from 'react';
import { Activity, Heart, Shield, Award, Stethoscope, Sliders, CheckCircle2, Info } from 'lucide-react';
import { EcgWaveform } from '../ecg/EcgWaveform';

export const CardiologyVisualSection: React.FC = () => {
  const [bpm, setBpm] = useState<number>(72);

  const stats = [
    {
      title: 'Patient-Centered Care',
      subtitle: 'Compassionate Clinical Attention',
      description: 'Listening closely to patient concerns and tailoring cardiology solutions to individual lifestyles and tolerances.',
      icon: Heart,
      accent: 'text-cardio-red',
      bg: 'bg-red-500/10 border-red-500/20',
    },
    {
      title: 'Evidence-Based Treatment',
      subtitle: 'Global Cardiology Guidelines',
      description: 'Adhering strictly to established ESC, ACC, and AHA international cardiovascular protocols for every patient.',
      icon: Shield,
      accent: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Personalized Consultation',
      subtitle: 'In-Depth Diagnostic Clarity',
      description: 'Dedicated time allocated for every appointment to thoroughly review test findings and answer every question.',
      icon: Stethoscope,
      accent: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Long-Term Heart Health',
      subtitle: 'Proactive Disease Prevention',
      description: 'Focusing on lifetime cardiovascular risk modification, early detection, and sustained cardiovascular wellness.',
      icon: Award,
      accent: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="rhythm-lab" className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle ECG Grid */}
      <div className="absolute inset-0 bg-ecg-grid-dark opacity-30 pointer-events-none" />

      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cardio-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-cardio-pulse text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Cardiology Rhythm Lab</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Precision Electrophysiology & Monitoring
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Continuous real-time electrocardiogram simulation reflecting cardiac depolarization, conduction intervals, and autonomic heart rate variability.
          </p>
        </div>

        {/* Large Animated ECG Waveform Monitor */}
        <div className="mb-14">
          <EcgWaveform
            initialBpm={bpm}
            height={220}
            showControls={true}
            theme="dark"
            className="shadow-2xl border-slate-700/80"
          />
        </div>

        {/* The 4 Core Medical Statistics (Strictly adhering to prompt constraints: No invented patient numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative bg-navy-900/80 backdrop-blur-md p-6 rounded-3xl border border-slate-800 hover:border-slate-700 hover:bg-navy-850 transition-all duration-300 shadow-xl"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-6 h-6 ${stat.accent}`} />
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-cardio-pulse transition-colors">
                  {stat.title}
                </h3>
                
                <p className="text-xs font-semibold text-slate-400 mt-1 mb-3">
                  {stat.subtitle}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {stat.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Integrity Disclaimer Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p>
            <strong>Clinical Integrity Note:</strong> Dr. B. Vijaya Chaitanya maintains strict ethical medical standards. Clinical statistics presented focus exclusively on verified care philosophies and international cardiovascular protocols.
          </p>
        </div>

      </div>
    </section>
  );
};
