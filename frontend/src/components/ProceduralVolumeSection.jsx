import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  HeartPulse, 
  ShieldCheck, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Zap,
  Activity
} from 'lucide-react';
import CountUpNumber from './CountUpNumber';

/**
 * ProceduralStatCard: Individual card with independent viewport observation
 * - Triggers smooth count-up whenever scrolled into view
 * - Holds cleanly on the final number without infinite looping
 */
function ProceduralStatCard({ item, idx }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.25 });

  return (
    <div
      ref={cardRef}
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay={idx * 80}
      className="group relative h-full"
    >
      {/* Outer Card with Glassmorphism & Hover Depth */}
      <div className={`relative h-full flex flex-col justify-between p-5 sm:p-6 lg:p-4.5 xl:p-6 rounded-2xl lg:rounded-3xl bg-white dark:bg-slate-900/90 border-2 ${item.borderColor} transition-all duration-300 hover:-translate-y-1.5 ${item.glowColor} shadow-sm backdrop-blur-sm`}>
        <div className="flex flex-col h-full justify-between">
          {/* Numeric Value - CountUp Driven by Card In-View */}
          <div className="space-y-1">
            <div className={`text-3xl sm:text-4xl lg:text-[34px] xl:text-4xl font-mono font-black tracking-tight leading-none ${item.textColor}`}>
              <CountUpNumber
                end={item.numericEnd}
                duration={2000}
                suffix={item.suffix}
                loop={false}
                triggerInView={isInView}
              />
            </div>

            <h3 className="text-base sm:text-lg lg:text-[15px] xl:text-[17px] font-heading font-extrabold text-slate-900 dark:text-white pt-2 leading-snug">
              {item.title}
            </h3>

            {item.category && (
              <p className="text-[10px] xl:text-[11px] font-mono font-bold uppercase tracking-wider text-[#41A490] pt-1 block leading-normal">
                {item.category}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProceduralVolumeSection
 * Dedicated Full-View Procedural Volume Showcase with all 5 Benchmarks in a Single Desktop Line
 */
export default function ProceduralVolumeSection({ onOpenAppointment }) {
  const primaryStats = [
    {
      id: 'angiograms',
      numericEnd: 26000,
      suffix: '+',
      title: 'Coronary Angiograms',
      category: 'Diagnostic Benchmark',
      description: 'High-volume diagnostic assessment across complex coronary anatomy, multi-vessel CAD, and coronary physiology.',
      textColor: 'text-[#0284C7] dark:text-sky-400',
      borderColor: 'border-sky-200 dark:border-sky-500/30 hover:border-sky-500',
      glowColor: 'group-hover:shadow-[0_20px_50px_rgba(2,132,199,0.18)]',
      icon: Stethoscope,
    },
    {
      id: 'angioplasties',
      numericEnd: 12000,
      suffix: '+',
      title: 'Coronary Angioplasties',
      category: 'Interventional Mastery',
      description: 'Extensive experience in primary PCI for acute myocardial infarction, calcified anatomy, and complex left main stenting.',
      textColor: 'text-[#EF4444] dark:text-cardio-crimson',
      borderColor: 'border-rose-200 dark:border-rose-500/30 hover:border-cardio-crimson',
      glowColor: 'group-hover:shadow-[0_20px_50px_rgba(230,57,70,0.2)]',
      icon: Zap,
    },
    {
      id: 'peripheral',
      numericEnd: 11000,
      suffix: '+',
      title: 'Peripheral Interventions',
      category: 'Endovascular Care',
      description: 'Comprehensive peripheral vascular interventions treating limb ischemia, carotid and renal vessel pathologies.',
      textColor: 'text-[#0D9488] dark:text-emerald-400',
      borderColor: 'border-teal-200 dark:border-teal-500/30 hover:border-teal-500',
      glowColor: 'group-hover:shadow-[0_20px_50px_rgba(13,148,136,0.18)]',
      icon: ShieldCheck,
    },
    {
      id: 'pacemakers',
      numericEnd: 300,
      suffix: '+',
      title: 'Pacemaker Implantations',
      category: 'RHYTHM & PACING SUPPORT',
      description: 'Single-chamber, dual-chamber, and physiological conduction system pacing for high-degree heart block and sick sinus.',
      textColor: 'text-[#D97706] dark:text-amber-400',
      borderColor: 'border-amber-200 dark:border-amber-500/30 hover:border-amber-500',
      glowColor: 'group-hover:shadow-[0_20px_50px_rgba(217,119,6,0.18)]',
      icon: Activity,
    },
    {
      id: 'icd-crt',
      numericEnd: 100,
      suffix: '+',
      title: 'ICD & CRT Device Therapy',
      category: 'HEART FAILURE & ARRHYTHMIA',
      description: 'Implantable cardioverter-defibrillators (ICD) and cardiac resynchronization therapy (CRT) for sudden death prevention.',
      textColor: 'text-[#4F46E5] dark:text-indigo-400',
      borderColor: 'border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-500',
      glowColor: 'group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.18)]',
      icon: ShieldCheck,
    }
  ];

  return (
    <section
      id="procedural-volume"
      className="relative overflow-hidden py-10 sm:py-16 bg-white dark:bg-slate-950 ecg-grid"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] rounded-full radial-glow-cyan pointer-events-none blur-3xl opacity-25" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full radial-glow-red pointer-events-none blur-3xl opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* All 5 Procedural Benchmark Stat Cards in a Single Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-5 items-stretch">
          {primaryStats.map((item, idx) => (
            <ProceduralStatCard key={item.id} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
