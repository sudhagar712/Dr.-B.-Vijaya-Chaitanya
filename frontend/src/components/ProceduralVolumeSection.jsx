import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  HeartPulse, 
  ShieldCheck, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Zap
} from 'lucide-react';
import CountUpNumber from './CountUpNumber';

/**
 * ProceduralStatCard: Individual card with independent viewport observation
 * - Triggers smooth count-up and progress meter whenever scrolled into view (up or down)
 * - Holds cleanly on the final number without infinite looping
 * - Resets on scroll-out so it re-triggers smoothly upon return
 */
function ProceduralStatCard({ item, idx }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.25 });
  const Icon = item.icon;

  return (
    <div
      ref={cardRef}
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay={idx * 150}
      className="group relative"
    >
      {/* Outer Card with Glassmorphism & Hover Depth */}
      <div className={`relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-3xl border-2 ${item.borderColor}  transition-all duration-300 hover:-translate-y-2 ${item.glowColor}`}>
        
        {/* Card Header: Icon + Category Badge */}
        <div>
         

          {/* Numeric Value - CountUp Driven by Card In-View */}
          <div className="space-y-1">
            <div className={`text-4xl sm:text-5xl lg:text-[54px] font-mono font-black tracking-tight leading-none ${item.textColor}`}>
              <CountUpNumber
                end={item.numericEnd}
                duration={2000}
                suffix={item.suffix}
                loop={false}
                triggerInView={isInView}
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white pt-2.5">
              {item.title}
            </h3>
          </div>

         

         
        </div>

       

      </div>
    </div>
  );
}

/**
 * ProceduralVolumeSection
 * Dedicated Full-View Procedural Volume Showcase
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
      barColor: 'bg-gradient-to-r from-sky-400 to-[#0284C7]',
      accentBg: 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/40',
      badgeBg: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-300/40 dark:border-sky-500/30',
      icon: Stethoscope,
      highlights: [
        'Transradial Access (>95% Radial-first)',
        'Digital Subtraction Angiography (DSA)',
        'Physiological Lesion Assessment (FFR/iFR)'
      ]
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
      barColor: 'bg-gradient-to-r from-rose-500 to-cardio-crimson',
      accentBg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/40',
      badgeBg: 'bg-cardio-crimson/10 text-cardio-crimson dark:text-rose-300 border-cardio-crimson/30',
      icon: Zap,
      highlights: [
        '24/7 Emergency STEMI Primary PCI',
        'IVUS & OCT High-Resolution Imaging',
        'Rotablation & Left Main Bifurcations'
      ]
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
      barColor: 'bg-gradient-to-r from-teal-400 to-[#0D9488]',
      accentBg: 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/40',
      badgeBg: 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-300/40 dark:border-teal-500/30',
      icon: ShieldCheck,
      highlights: [
        'Critical Limb Ischemia & Limb Salvage',
        'Carotid & Renal Artery Stenting',
        'Deep Venous Interventions & Thrombectomy'
      ]
    }
  ];

  return (
    <section
      id="procedural-volume"
      className="py-16 sm:py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 ecg-grid"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] rounded-full radial-glow-cyan pointer-events-none blur-3xl opacity-25" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full radial-glow-red pointer-events-none blur-3xl opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ========================================================================= */}
        {/* Section Header */}
        {/* ========================================================================= */}
        <div 
          className="text-center max-w-7xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4"
          data-aos="fade-up"
          data-aos-duration="750"
        >
        


        
        </div>

        {/* ========================================================================= */}
        {/* The 3 Core Full-View Stat Cards */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {primaryStats.map((item, idx) => (
            <ProceduralStatCard key={item.id} item={item} idx={idx} />
          ))}
        </div>

     

      </div>
    </section>
  );
}
