import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Compass, MapPin, Building, Globe, CheckCircle2 } from 'lucide-react';

export default function JourneyTimeline() {
  const steps = [
    {
      year: 'Present',
      degree: 'Managing Director & Chief of Cardiovascular Sciences',
      institution: 'Medstar Hospitals, Vijayawada & Tadepalli (200-Bed Facility)',
      detail: 'Spearheading clinical interventional cardiology, 24/7 primary PCI STEMI networks, and institutional growth.',
      icon: Building,
      badge: 'Executive Leadership',
      current: true,
    },
    {
      year: 'Global',
      degree: 'Advanced Training Exposure',
      institution: 'Mount Sinai Hospital, New York, USA',
      detail: 'International interventional cardiology exposure with world-renowned cardiovascular faculty in Manhattan, NY.',
      icon: Globe,
      badge: 'Global Fellow',
    },
    {
      year: 'Advanced',
      degree: 'TAVI / TAVR Fellowship',
      institution: 'Medanta – The Medicity, Delhi NCR',
      detail: 'Sub-specialized catheter-based aortic valve replacement training under pioneer structural heart faculty.',
      icon: Compass,
      badge: 'Structural Heart',
    },
    {
      year: '2013',
      degree: 'DM – Cardiology',
      institution: 'Sri Ramachandra Medical College, Chennai',
      detail: 'Super-specialty doctorate in cardiovascular medicine, rigorous clinical training in coronary angiography, structural heart, and hemodynamics.',
      icon: Award,
      badge: 'Super-Specialty',
    },
    {
      year: '2009',
      degree: 'MD – General Medicine',
      institution: 'Rajiv Gandhi University of Health Sciences, Karnataka',
      detail: 'Post-graduate specialization in internal medicine, focusing on multisystem pathophysiology, hemodynamics, and critical care.',
      icon: Building,
      badge: 'Postgraduate',
    },
    {
      year: '2005',
      degree: 'MBBS',
      institution: 'Rajiv Gandhi University of Health Sciences, Karnataka',
      detail: 'Graduated in Medicine and Surgery, laying a robust foundational base in clinical diagnostics and patient care.',
      icon: GraduationCap,
      badge: 'Medical Graduate',
    },
  ];

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 ecg-grid">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] radial-glow-red pointer-events-none blur-3xl opacity-20" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-aos="fade-up" data-aos-duration="850">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-cyan/30 bg-cardio-cyan/5 text-xs font-mono font-bold text-cardio-cyan uppercase tracking-widest">
            Academic & Clinical Trajectory
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            The <span className="text-gradient-cyan">Journey</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium">
            <MapPin className="w-4 h-4 text-cardio-crimson" />
            <span>Born in Guntur • Educated across Karnataka & Chennai • Global Training</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            He subsequently pursued specialised training in interventional cardiology, including a TAVI fellowship at Medanta, Delhi, and advanced exposure at Mount Sinai, New York. He is also a Fellow of the American College of Cardiology (FACC) and holds a Fellowship in Interventional Cardiology (FIC).
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Spine */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cardio-cyan via-cardio-crimson to-cardio-teal opacity-70" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;
              return (
                <div
                  key={step.year + step.degree}
                  data-aos={isEven ? "fade-left" : "fade-right"}
                  data-aos-duration="850"
                  data-aos-delay={idx * 60}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-2xl border-2 transition-transform duration-300 group-hover:scale-110 ${
                    step.current
                      ? 'border-[#EC242E] bg-[#EC242E] text-white shadow-lg shadow-[#EC242E]/30 ring-4 ring-[#EC242E]/20'
                      : 'border-cardio-crimson bg-white dark:bg-cardio-dark text-cardio-crimson shadow-md'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} w-full`}>
                    <div className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border ${
                      step.current
                        ? 'border-[#EC242E]/40 dark:border-[#EC242E]/50 shadow-md ring-1 ring-[#EC242E]/20'
                        : 'border-slate-200 dark:border-white/10 shadow-sm'
                    } hover:shadow-md transition-all duration-300 group`}>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xl sm:text-2xl font-mono font-black text-cardio-crimson tracking-wider flex items-center gap-2">
                          {step.year}
                          {step.current && (
                            <span className="inline-block w-2 h-2 rounded-full bg-[#EC242E] animate-ping" />
                          )}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-bold uppercase ${
                          step.current
                            ? 'text-white bg-[#EC242E] border border-[#EC242E]'
                            : 'text-cardio-cyan bg-cardio-cyan/10 border border-cardio-cyan/25'
                        }`}>
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-cardio-crimson transition-colors">
                        {step.degree}
                      </h3>

                      <p className="text-xs font-mono text-amber-700 dark:text-cardio-gold font-semibold mt-1">
                        {step.institution}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
