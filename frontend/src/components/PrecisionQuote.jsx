import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeartPulse, ShieldCheck, Target } from 'lucide-react';

export default function PrecisionQuote() {
  const pillars = [
    {
      step: '01',
      icon: Users,
      title: 'Understanding the Patient',
      desc: 'Cardiology is never about numbers alone; clinical nuance starts with patient context, comorbidities and history.',
      badgeBg: 'bg-sky-100/90 dark:bg-sky-950/70',
      badgeBorder: 'border-sky-200/90 dark:border-sky-800/60',
      iconColor: 'text-sky-600 dark:text-sky-400',
      numColor: 'text-sky-200 dark:text-sky-800/80',
      barColor: 'bg-sky-500',
      dotColor: 'bg-sky-500',
    },
    {
      step: '02',
      icon: HeartPulse,
      title: 'Reading the Anatomy',
      desc: 'Precise angiography and intravascular imaging (IVUS/OCT) to interpret complex coronary geometries.',
      badgeBg: 'bg-teal-100/90 dark:bg-teal-950/70',
      badgeBorder: 'border-teal-200/90 dark:border-teal-800/60',
      iconColor: 'text-teal-600 dark:text-teal-400',
      numColor: 'text-teal-200 dark:text-teal-800/80',
      barColor: 'bg-teal-500',
      dotColor: 'bg-teal-500',
    },
    {
      step: '03',
      icon: ShieldCheck,
      title: 'Weighing the Risks',
      desc: 'Evaluating physiology (FFR) and choosing the exact moment when intervention offers superior longevity.',
      badgeBg: 'bg-amber-100/90 dark:bg-amber-950/70',
      badgeBorder: 'border-amber-200/90 dark:border-amber-800/60',
      iconColor: 'text-amber-600 dark:text-amber-400',
      numColor: 'text-amber-200 dark:text-amber-800/80',
      barColor: 'bg-amber-500',
      dotColor: 'bg-amber-500',
    },
    {
      step: '04',
      icon: Target,
      title: 'Deliberate Execution',
      desc: 'Executing left main, bifurcation, primary PCI and structural procedures with deliberate interventional precision.',
      badgeBg: 'bg-purple-100/90 dark:bg-purple-950/70',
      badgeBorder: 'border-purple-200/90 dark:border-purple-800/60',
      iconColor: 'text-purple-600 dark:text-purple-400',
      numColor: 'text-purple-200 dark:text-purple-800/80',
      barColor: 'bg-purple-500',
      dotColor: 'bg-purple-500',
    },
  ];

  return (
    <section 
      id="clinical-approach"
      className="py-20 sm:py-28 lg:py-32 relative overflow-hidden bg-white dark:bg-[#0B1926] transition-colors duration-500"
    >
      {/* ========================================================
          1. ELEGANT MEDICAL WAVE BACKGROUND (100% Faithful Replica)
          ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft Radial Ambient Glows */}
        <div className="absolute -top-32 left-1/4 w-[650px] h-[450px] bg-sky-100/50 dark:bg-sky-900/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[400px] bg-teal-100/40 dark:bg-teal-900/15 rounded-full blur-[120px]" />

        {/* Top-Left Wave Curves (Curving dynamically from the top-left) */}
        <svg
          className="absolute -top-16 -left-12 w-[650px] h-[450px] opacity-45 dark:opacity-20 pointer-events-none"
          viewBox="0 0 650 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[0, 16, 32, 48, 64, 80, 96, 112, 128].map((offset, i) => (
            <path
              key={i}
              d={`M -40 ${50 + offset} C 140 ${20 + offset * 1.05}, 260 ${190 + offset * 0.95}, 460 ${110 + offset * 1.02} C 540 ${70 + offset * 0.9}, 600 ${130 + offset * 0.8}, 680 ${170 + offset * 0.7}`}
              stroke="url(#waveTopGradient)"
              strokeWidth={1.2}
              strokeOpacity={0.55 - i * 0.045}
            />
          ))}
        </svg>

        {/* Bottom Full-Width Cardiovascular Ribbon Contours */}
        <svg
          className="absolute -bottom-10 left-0 w-full h-[280px] sm:h-[340px] opacity-50 dark:opacity-25 pointer-events-none"
          viewBox="0 0 1440 340"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveBottomGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="25%" stopColor="#0ea5e9" stopOpacity="0.7" />
              <stop offset="65%" stopColor="#14b8a6" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132].map((offset, i) => (
            <path
              key={i}
              d={`M 0 ${210 + offset * 0.75} C 320 ${290 + offset * 0.85}, 650 ${110 + offset * 0.6}, 980 ${210 + offset * 0.7} C 1180 ${260 + offset * 0.6}, 1320 ${180 + offset * 0.5}, 1440 ${160 + offset * 0.4}`}
              stroke="url(#waveBottomGradient)"
              strokeWidth={1.15}
              strokeOpacity={0.65 - i * 0.042}
            />
          ))}
        </svg>
      </div>

      {/* ========================================================
          2. MAIN CONTENT CONTAINER
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ----------------------------------------------------
            TOP SECTION: Eyebrow + Headline + Divider + Description + 01 Watermark
            ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-16 sm:mb-20 lg:mb-28">
          
          {/* Left Column (Span 6): Eyebrow, Editorial Headline & Left Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            {/* Eyebrow Label with Accent Line */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sky-500 rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-sky-600 dark:text-sky-400 uppercase font-sans">
                CLINICAL APPROACH
              </span>
            </div>

            {/* Editorial Luxury Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-bold text-slate-900 dark:text-white font-serif leading-[1.12] tracking-tight">
              When Experience <br className="hidden sm:inline" />
              Meets{' '}
              <span className="italic font-serif font-bold text-[#0891b2] dark:text-[#2dd4bf]">
                Precision
              </span>
            </h2>

            {/* Subtitle / Summary Paragraph */}
            <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-normal pt-1 max-w-xl">
              Cardiology is rarely about a single number on a scan. It is about understanding the patient, reading the anatomy, weighing the risks and choosing the right course of action.
            </p>
          </motion.div>

          {/* Center Vertical Divider with Horizontal Notch Tick (Span 1 on lg) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full">
            <div className="relative h-32 w-[1.5px] bg-sky-200/90 dark:bg-sky-800/50">
              {/* Horizontal tick mark pointing to the left as in reference image */}
              <span className="absolute top-1/2 -left-3.5 w-3.5 h-[2px] bg-sky-500 rounded-full" />
            </div>
          </div>

          {/* Right Column (Span 5): Explanatory Text + 01 OUR APPROACH Watermark */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-start sm:items-center justify-between gap-6 lg:gap-8"
          >
            {/* Bio Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans flex-1 max-w-md">
              Over the years, Dr. Vijaya Chaitanya has built extensive experience in both routine and complex cardiovascular interventions. His approach combines clinical expertise with contemporary interventional techniques to make every decision more deliberate and patient-focused.
            </p>

            {/* Giant Watermark 01 & OUR APPROACH */}
            <div className="flex flex-col items-center justify-center shrink-0 self-center sm:self-auto pl-2">
              <span className="text-8xl sm:text-9xl font-extralight tracking-tighter text-sky-200/70 dark:text-sky-500/25 leading-none select-none font-sans">
                01
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-sky-400 dark:text-sky-500 uppercase mt-0.5 select-none text-center">
                OUR APPROACH
              </span>
            </div>
          </motion.div>

        </div>

        {/* ----------------------------------------------------
            BOTTOM SECTION: The 4 Connected Process Stepper Pillars
            ---------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Row: Circular Icon Badge + Big Step Number + Connecting Line */}
                  <div className="flex items-center gap-3 sm:gap-4 relative">
                    
                    {/* Circle Icon Badge */}
                    <div 
                      className={`w-13 h-13 sm:w-14 sm:h-14 w-12 h-12 rounded-full ${item.badgeBg} ${item.badgeBorder} border flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconColor} transition-transform duration-300 group-hover:rotate-6`} />
                    </div>

                    {/* Big Step Number */}
                    <span className={`text-4xl sm:text-5xl font-light tracking-tight ${item.numColor} select-none leading-none font-sans`}>
                      {item.step}
                    </span>

                    {/* Desktop Connecting Line with Terminal Dot (items 0, 1, 2) */}
                    {idx < 3 && (
                      <div className="hidden lg:flex items-center flex-1 ml-3 mr-1 relative">
                        <div className="w-full h-[1.5px] bg-slate-200 dark:bg-slate-700/80 relative">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.25 + idx * 0.15 }}
                            className="origin-left h-full w-full bg-gradient-to-r from-sky-400/80 to-sky-300/60 dark:from-sky-500/80 dark:to-sky-400/60"
                          />
                          <span 
                            className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${item.dotColor} ring-4 ring-white dark:ring-[#0B1926] shadow-sm`} 
                          />
                        </div>
                      </div>
                    )}

                    {/* Tablet Connecting Line (between 0->1 and 2->3 in 2-column layout) */}
                    {(idx === 0 || idx === 2) && (
                      <div className="hidden md:flex lg:hidden items-center flex-1 ml-3 mr-1 relative">
                        <div className="w-full h-[1.5px] bg-slate-200 dark:bg-slate-700/80 relative">
                          <div className="h-full w-full bg-gradient-to-r from-sky-400/80 to-sky-300/60 dark:from-sky-500/80 dark:to-sky-400/60" />
                          <span 
                            className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${item.dotColor} ring-4 ring-white dark:ring-[#0B1926] shadow-sm`} 
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-bold font-serif text-slate-900 dark:text-white mt-5 tracking-tight group-hover:text-sky-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Short Accent Horizontal Rule */}
                  <div className={`w-9 h-[2.5px] rounded-full ${item.barColor} my-3 sm:my-3.5 transition-all duration-300 group-hover:w-16`} />

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
