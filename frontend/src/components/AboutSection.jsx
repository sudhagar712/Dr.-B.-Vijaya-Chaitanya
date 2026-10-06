import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Heart, CheckCircle2, ArrowRight, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const institutions = [
    { name: 'Medstar Hospitals', role: 'Managing Director & Chief of Cardiovascular Sciences', location: 'Vijayawada & Tadepalli', highlight: true },
    { name: 'Medanta - The Medicity', role: 'Fellowship in TAVI & Interventional Cardiology', location: 'Delhi NCR', highlight: false },
    { name: 'Mount Sinai', role: 'Advanced Cardiovascular Training Exposure', location: 'New York, USA', highlight: false },
    { name: 'Manipal Hospitals', role: 'Interventional Cardiology Practice', location: 'India', highlight: false },
    { name: 'Sri Jayadeva Institute', role: 'Cardiovascular Training Association', location: 'Bengaluru', highlight: false },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden ecg-grid">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full radial-glow-cyan pointer-events-none blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full radial-glow-red pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6  relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Full-View Doctor Executive Portrait */}
          <div className="lg:col-span-5 relative" data-aos="fade-right" data-aos-duration="900">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Ambient Glow Halo */}
              <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-tr from-[#125083]/25 via-[#41A490]/20 to-[#EC242E]/15 blur-xl pointer-events-none" />

              {/* Main Full-View Portrait Card */}
              <div className="relative rounded-[28px] overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-white/10 shadow-2xl">
                
                {/* Full-View Image Container */}
                <div className="relative h-[440px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden bg-slate-50 dark:bg-slate-800">
                  <img
                    src="/doctor_about.jpg"
                    alt="Dr. B. Vijaya Chaitanya - Interventional Cardiologist & Managing Director"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlay for bottom text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-white/15 text-[#125083] dark:text-sky-300 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
                      Medstar Hospitals MD
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-[#EC242E] text-white text-[10px] sm:text-xs font-mono font-bold tracking-wider shadow-md">
                      13+ Yrs Exp
                    </span>
                  </div>

                  {/* Bottom Doctor Details Overlay inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#41A490] uppercase tracking-wider">
                        MBBS, MD, DM, FACC, FIC
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                      Dr. B. Vijaya Chaitanya
                    </h3>

                    <p className="text-xs font-mono text-slate-300 font-medium">
                      Managing Director & Chief of Cardiovascular Sciences
                    </p>
                  </div>
                </div>

                {/* Bottom Accreditations Bar */}
                <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/10 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#125083]/10 dark:bg-[#125083]/30 text-[#125083] dark:text-sky-300 text-xs font-mono font-bold border border-[#125083]/20">
                      FACC (USA)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#41A490]/10 dark:bg-[#41A490]/25 text-[#41A490] text-xs font-mono font-bold border border-[#41A490]/30">
                      FIC Fellow
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F5F8FA] dark:bg-white/5 text-[#123B5D] dark:text-slate-300 text-xs font-mono font-semibold border border-slate-200 dark:border-white/10">
                      Medanta TAVI
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F5F8FA] dark:bg-white/5 text-[#123B5D] dark:text-slate-300 text-xs font-mono font-semibold border border-slate-200 dark:border-white/10">
                      Mount Sinai Trained
                    </span>
                  </div>

                 
                </div>

              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-[#125083]/10 border border-[#125083]/20 -z-10 blur-xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#41A490]/30 bg-[#41A490]/5 text-xs font-mono font-bold text-[#41A490] uppercase tracking-widest">
              Professional Profile
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#125083] dark:text-white tracking-tight uppercase">
              A Cardiologist. A Clinician. <br />
              <span className="text-gradient-crimson">A Healthcare Leader.</span>
            </h2>

            {/* Responsive Points with Visual Symbols */}
            <div className="space-y-4 pt-1">
              
             

             
              <div className="group p-4 sm:p-5 transition-all duration-300">
                <div className="flex flex-col items-start gap-3.5 sm:gap-4">

                  <div>
                     <p className="text-sm sm:text-base text-[#123B5D]/90 dark:text-slate-300 leading-relaxed">
                      <strong className="text-[#125083] dark:text-white font-semibold">Dr. B. Vijaya Chaitanya</strong> is an Interventional Cardiologist with over 13 years of experience in the diagnosis and treatment of complex cardiovascular disease.
                    </p>
                  </div>
                 
                  
                  <div className="flex-1 space-y-2.5">
                    
                    <p className="text-sm sm:text-base text-[#123B5D]/90 dark:text-slate-300 leading-relaxed">
                      His clinical practice encompasses coronary angiography, angioplasty, primary PCI, complex coronary interventions, structural heart interventions, cardiac imaging and peripheral vascular procedures.
                    </p>
                    
                   

                  </div>
                </div>
              </div>

              {/* Point 3: Professional Journey with Leading Institutions */}
              <div className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#41A490]/40 dark:hover:border-[#41A490]/40 transition-all duration-300">
                <div className="flex items-start gap-3.5 sm:gap-4">
                 
                  
                  <div className="flex-1 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                     
                      
                    </div>
                    <p className="text-sm sm:text-base text-[#123B5D]/90 dark:text-slate-300 leading-relaxed">
                      His professional journey includes experience with leading healthcare institutions including <strong className="text-[#125083] dark:text-white font-semibold">Manipal Hospitals</strong> and <strong className="text-[#125083] dark:text-white font-semibold">Medanta Medicity, Delhi NCR</strong>, along with his association with <strong className="text-[#125083] dark:text-white font-semibold">Jayadeva Institute of Cardiology, Bengaluru</strong>.
                    </p>

                    {/* Institution Points with Location Symbols */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/5 hover:border-[#125083]/30 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-[#125083] ring-4 ring-[#125083]/15 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#125083] dark:text-sky-300 truncate">Manipal Hospitals</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">India</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/5 hover:border-[#EC242E]/30 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-[#EC242E] ring-4 ring-[#EC242E]/15 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#125083] dark:text-sky-300 truncate">Medanta Medicity</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Delhi NCR</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/5 hover:border-[#41A490]/30 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-[#41A490] ring-4 ring-[#41A490]/15 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#125083] dark:text-sky-300 truncate">Jayadeva Institute</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Bengaluru</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Callout Banner */}
              <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-[#125083]/10 via-[#41A490]/10 to-[#EC242E]/10 border border-[#125083]/20 dark:border-white/10 flex items-center gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#EC242E] shadow-sm flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-[#EC242E]" />
                </div>
                <div className="text-xs sm:text-sm text-[#123B5D] dark:text-slate-200 font-medium">
                  <span className="font-bold text-[#EC242E] uppercase tracking-wider text-[11px] block">
                    Present Leadership
                  </span>
                  Today, he serves as <strong className="text-[#125083] dark:text-white font-semibold">Managing Director of Medstar Hospitals</strong> and Chief of Cardiovascular Sciences.
                </div>
              </div>

            </div>

          

           

          </div>

        </div>
      </div>
    </section>
  );
}
