import React from 'react';
import { Activity, ShieldCheck, Heart, Zap, Award } from 'lucide-react';

export default function ECGMonitorBar({ bpm = 72 }) {
  return (
    <div className="w-full bg-white/95 dark:bg-slate-950/90 border-y border-slate-200 dark:border-cardio-cyan/20 shadow-sm backdrop-blur-xl relative overflow-hidden py-3">
      {/* Subtle ECG grid overlay */}
      <div className="absolute inset-0 ecg-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
          {/* Telemetry 1: Real-time Rhythm */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-cardio-crimson/10 border border-cardio-crimson/25 flex items-center justify-center text-cardio-crimson">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                CARDIAC RHYTHM
              </p>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cardio-teal animate-ping" />
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">NORMAL SINUS</span>
              </div>
            </div>
          </div>

          {/* Telemetry 2: Live BPM */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-cardio-cyan/10 border border-cardio-cyan/25 flex items-center justify-center text-cardio-cyan">
              <Heart className="w-5 h-5 animate-heartbeat text-cardio-crimson" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                RESTING RATE
              </p>
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-cardio-cyan">
                {bpm} BPM <span className="text-[10px] text-slate-500 font-normal">| 0.83s R-R</span>
              </span>
            </div>
          </div>

          {/* Telemetry 3: Procedural Experience */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                EXPERIENCE
              </p>
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-gradient-gold">
                13+ YEARS • 50,000+ CASES
              </span>
            </div>
          </div>

          {/* Telemetry 4: Cath Lab Status */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-cardio-teal/10 border border-cardio-teal/25 flex items-center justify-center text-cardio-teal">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                CATH LAB ACTIVE
              </p>
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                MEDSTAR TADEPALLI (200-BED)
              </span>
            </div>
          </div>

          {/* Telemetry 5: Live ECG Stream SVG */}
          <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
            <div className="w-full max-w-[160px] h-8 relative flex items-center">
              <svg viewBox="0 0 150 40" className="w-full h-full stroke-cardio-crimson fill-none stroke-[2]">
                <path
                  d="M0 20 L25 20 L30 14 L35 20 L40 20 L44 26 L50 4 L56 36 L60 20 L66 20 L72 12 L78 20 L150 20"
                  className="animate-ecg-path"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
