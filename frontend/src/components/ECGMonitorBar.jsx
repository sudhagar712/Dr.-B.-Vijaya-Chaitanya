import React from 'react';
import { Activity, ShieldCheck, Heart, Zap, Award } from 'lucide-react';

export default function ECGMonitorBar({ bpm = 72 }) {
  return (
    <div className="w-full bg-white dark:bg-[#0B1926] border-y border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-xl relative overflow-hidden py-3">
      {/* Subtle ECG grid overlay */}
      <div className="absolute inset-0 ecg-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
          {/* Telemetry 1: Real-time Rhythm */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#41A490]/10 border border-[#41A490]/25 flex items-center justify-center text-[#41A490]">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#123B5D]/70 dark:text-slate-400 uppercase tracking-widest font-semibold">
                CARDIAC RHYTHM
              </p>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#41A490] animate-ping" />
                <span className="text-xs font-mono font-bold text-[#125083] dark:text-white">NORMAL SINUS</span>
              </div>
            </div>
          </div>

          {/* Telemetry 2: Live BPM */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#EC242E]/10 border border-[#EC242E]/25 flex items-center justify-center text-[#EC242E]">
              <Heart className="w-5 h-5 animate-heartbeat text-[#EC242E]" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#123B5D]/70 dark:text-slate-400 uppercase tracking-widest font-semibold">
                RESTING RATE
              </p>
              <span className="text-xs font-mono font-bold text-[#125083] dark:text-[#41A490]">
                {bpm} BPM <span className="text-[10px] text-slate-500 font-normal">| 0.83s R-R</span>
              </span>
            </div>
          </div>

          {/* Telemetry 3: Procedural Experience */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#125083]/10 border border-[#125083]/25 flex items-center justify-center text-[#125083]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#123B5D]/70 dark:text-slate-400 uppercase tracking-widest font-semibold">
                EXPERIENCE
              </p>
              <span className="text-xs font-mono font-bold text-[#125083] dark:text-white">
                13+ YEARS • 50,000+ CASES
              </span>
            </div>
          </div>

          {/* Telemetry 4: Cath Lab Status */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#41A490]/10 border border-[#41A490]/25 flex items-center justify-center text-[#41A490]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#123B5D]/70 dark:text-slate-400 uppercase tracking-widest font-semibold">
                CATH LAB ACTIVE
              </p>
              <span className="text-xs font-mono font-bold text-[#125083] dark:text-white">
                MEDSTAR TADEPALLI (200-BED)
              </span>
            </div>
          </div>

          {/* Telemetry 5: Live ECG Stream SVG */}
          <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
            <div className="w-full max-w-[160px] h-8 relative flex items-center">
              <svg viewBox="0 0 150 40" className="w-full h-full stroke-[#EC242E] fill-none stroke-[2]">
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
