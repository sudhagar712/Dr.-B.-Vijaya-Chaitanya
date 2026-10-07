import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Zap, Activity, ShieldCheck, Sparkles, Layers, ArrowRight } from 'lucide-react';
import Heart3D from './Heart3D';

export default function InteractiveHeartSection({ onOpenAppointment }) {
  const highlights = [
    {
      title: 'Coronary Vasculature',
      desc: 'Visualize the Left Anterior Descending (LAD) "Widowmaker", Circumflex (LCx), and Right Coronary Artery (RCA).',
      icon: Activity,
      color: 'text-[#41A490]',
      bg: 'bg-[#41A490]/10 border-[#41A490]/25',
    },
    {
      title: 'Stent & Angioplasty Simulator',
      desc: 'Click "Deploy Stent" inside the model to watch catheter balloon expansion, plaque compression, and immediate blood flow restoration.',
      icon: Zap,
      color: 'text-[#125083]',
      bg: 'bg-[#125083]/10 border-[#125083]/25',
    },
    {
      title: 'Physiological Cardiac Cycle',
      desc: 'Experience mathematical double-beat systole and diastole rhythm (Lub-Dub) with interactive BPM frequency controls.',
      icon: HeartPulse,
      color: 'text-[#EC242E]',
      bg: 'bg-[#EC242E]/10 border-[#EC242E]/25',
    },
    {
      title: 'Structural Heart & TAVI',
      desc: 'Inspect the aortic arch and aortic valve where transcatheter aortic valve implantation (TAVI/TAVR) procedures are executed.',
      icon: Sparkles,
      color: 'text-[#41A490]',
      bg: 'bg-[#41A490]/10 border-[#41A490]/25',
    },
  ];

  return (
    <section id="cardiac-3d" className="py-20 sm:py-28 relative overflow-hidden bg-[#F5F8FA] dark:bg-[#08121C] ecg-grid">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] radial-glow-red pointer-events-none blur-3xl opacity-20" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4" data-aos="fade-up" data-aos-duration="850">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#125083] dark:text-white tracking-tight uppercase">
            3D Cardiac Vasculature & <br className="hidden sm:block" />
            <span className="text-gradient-crimson">Interventional Simulator</span>
          </h2>
          <p className="text-sm sm:text-base text-[#123B5D] dark:text-slate-300">
            Cardiology requires understanding what lies beneath the surface. Interact with this clinical 3D simulation to explore coronary artery branches, test stent deployment, and observe real-time hemodynamic perfusion.
          </p>
        </div>

        {/* The 3D Heart Simulator */}
        <div className="max-w-5xl mx-auto mb-12" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="100">
          <Heart3D />
        </div>

        {/* 4 Feature Explanations Below the 3D Model */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={100 * (idx + 1)}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`h-11 w-11 rounded-2xl flex items-center justify-center mb-4 border ${item.bg} ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-heading font-bold text-[#125083] dark:text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#123B5D] dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Clinical Discussion (🔴 Accent Red) */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenAppointment}
            className="btn btn-md bg-[#EC242E] hover:bg-[#D01B24] text-white border-none rounded-xl font-mono text-xs sm:text-sm gap-2 shadow-md hover:scale-105 transition-all max-w-full h-auto py-3 px-4 whitespace-normal text-center"
          >
            <Zap className="w-4 h-4 text-white shrink-0" />
            <span>Consult Dr. Vijaya Chaitanya for Angioplasty / TAVI</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
