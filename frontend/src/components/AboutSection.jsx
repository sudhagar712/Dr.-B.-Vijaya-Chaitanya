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
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-cardio-dark">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full radial-glow-cyan pointer-events-none blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full radial-glow-red pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Doctor Executive Portrait Card */}
          <div className="lg:col-span-5 relative" data-aos="fade-right" data-aos-duration="900">
            <div className="relative mx-auto max-w-md">
              
              {/* Doctor Visual Card */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cardio-crimson/30 via-cardio-cyan/20 to-transparent shadow-xl">
                <div className="relative rounded-[22px] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 sm:p-8 space-y-6">
                  
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/doctor.jpg"
                        alt="Dr. B. Vijaya Chaitanya"
                        className="h-14 w-14 rounded-2xl object-cover object-top border-2 border-cardio-crimson shadow-md"
                      />
                      <div>
                        <span className="text-[10px] font-mono text-cardio-crimson font-bold uppercase tracking-wider block">
                          Verified Specialist
                        </span>
                        <span className="text-xs font-heading font-extrabold text-slate-900 dark:text-white">
                          Medstar Hospitals MD
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-cardio-cyan bg-cardio-cyan/10 border border-cardio-cyan/20 uppercase">
                      13+ Years
                    </span>
                  </div>

                  {/* Doctor Profile Banner */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                      Curriculum Vitae • Summary
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white uppercase">
                      Dr. B. Vijaya Chaitanya
                    </h3>
                    <p className="text-xs font-mono text-cardio-crimson font-bold">
                      MBBS, MD (Gen Med), DM (Cardiology), FACC, FIC
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cardio-teal shrink-0 mt-0.5" />
                      <span>Fellow of the American College of Cardiology (<strong className="text-slate-950 dark:text-white">FACC</strong>)</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cardio-teal shrink-0 mt-0.5" />
                      <span>Fellowship in Interventional Cardiology (<strong className="text-slate-950 dark:text-white">FIC</strong>)</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cardio-teal shrink-0 mt-0.5" />
                      <span>TAVI / TAVR Specialised Fellowship from <strong className="text-slate-950 dark:text-white">Medanta Delhi</strong></span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cardio-teal shrink-0 mt-0.5" />
                      <span>Advanced training exposure at <strong className="text-slate-950 dark:text-white">Mount Sinai, New York</strong></span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cardio-teal shrink-0 mt-0.5" />
                      <span>Managing Director & Chief of Cardiovascular Sciences, <strong className="text-slate-950 dark:text-white">Medstar Hospitals</strong></span>
                    </div>
                  </div>

                  {/* Bottom Verification Seal */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-cardio-dark border border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-cardio-teal" />
                      <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold">Registered Medical Authority</span>
                    </div>
                    <span className="text-[10px] font-mono text-cardio-cyan uppercase font-bold">Verified</span>
                  </div>

                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-cardio-crimson/10 border border-cardio-crimson/20 -z-10 blur-xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-cyan/30 bg-cardio-cyan/5 text-xs font-mono font-bold text-cardio-cyan uppercase tracking-widest">
              Professional Profile
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
              A Cardiologist. A Clinician. <br />
              <span className="text-gradient-crimson">A Healthcare Leader.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                <strong className="text-slate-950 dark:text-white">Dr. B. Vijaya Chaitanya</strong> is an Interventional Cardiologist with over 13 years of experience in the diagnosis and treatment of complex cardiovascular disease.
              </p>
              <p>
                His clinical practice encompasses coronary angiography, angioplasty, primary PCI, complex coronary interventions, structural heart interventions, cardiac imaging and peripheral vascular procedures.
              </p>
              <p>
                His professional journey includes experience with leading healthcare institutions including <strong className="text-slate-950 dark:text-white">Manipal Hospitals</strong> and <strong className="text-slate-950 dark:text-white">Medanta Medicity, Delhi NCR</strong>, along with his association with <strong className="text-slate-950 dark:text-white">Jayadeva Institute of Cardiology, Bengaluru</strong>.
              </p>
              <p className="text-cardio-crimson font-semibold">
                Today, he serves as Managing Director of Medstar Hospitals and Chief of Cardiovascular Sciences.
              </p>
            </div>

            {/* Institutional Association Grid */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
                Institutional Milestones & Associations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {institutions.map((item) => (
                  <div
                    key={item.name}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      item.highlight
                        ? 'bg-cardio-crimson/5 border-cardio-crimson/30 shadow-sm'
                        : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-white/10 hover:border-cardio-cyan/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-mono text-cardio-cyan font-semibold">
                        {item.location}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-mono">
                      {item.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Jump CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#journey"
                className="btn btn-sm sm:btn-md bg-cardio-crimson text-white rounded-xl font-mono text-xs gap-2 shadow-md hover:bg-cardio-ruby"
              >
                <span>Discover His Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#expertise"
                className="btn btn-sm sm:btn-md btn-outline border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 rounded-xl font-mono text-xs gap-2"
              >
                <span>View Clinical Expertise</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
