import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Globe, CheckCircle, ShieldCheck, Bookmark, FileText } from 'lucide-react';

export default function CredentialsSection() {
  const education = [
    {
      degree: 'MBBS',
      institution: 'Rajiv Gandhi University, Karnataka',
      year: '2005',
      type: 'Basic Medical Degree',
    },
    {
      degree: 'MD – General Medicine',
      institution: 'Rajiv Gandhi University, Karnataka',
      year: '2009',
      type: 'Postgraduate Medical Degree',
    },
    {
      degree: 'DM – Cardiology',
      institution: 'Sri Ramachandra Medical College, Chennai',
      year: '2013',
      type: 'Super-Specialty Doctorate',
    },
    {
      degree: 'FACC',
      institution: 'Fellow of the American College of Cardiology',
      year: 'Honour',
      type: 'International Cardiology Fellowship',
    },
    {
      degree: 'FIC',
      institution: 'Fellowship in Interventional Cardiology',
      year: 'Credential',
      type: 'Interventional Sub-Specialty',
    },
    {
      degree: 'Fellowship in TAVI',
      institution: 'Medanta – The Medicity, Delhi NCR',
      year: 'Fellowship',
      type: 'Catheter Aortic Valve Specialist',
    },
    {
      degree: 'Advanced Training Exposure',
      institution: 'Mount Sinai Hospital, New York, USA',
      year: 'Global',
      type: 'International Clinical Immersion',
    },
  ];

  const associations = [
    { name: 'American College of Cardiology', abbr: 'ACC / FACC', icon: Globe, highlight: true },
    { name: 'Society for Cardiovascular Angiography & Interventions', abbr: 'SCAI', icon: Award, highlight: true },
    { name: 'Cardiological Society of India', abbr: 'CSI', icon: ShieldCheck, highlight: false },
    { name: 'Indian College of Cardiology', abbr: 'ICC', icon: FileText, highlight: false },
    { name: 'Indian Medical Association', abbr: 'IMA', icon: Bookmark, highlight: false },
    { name: 'Bezawada Medical Association', abbr: 'BMA', icon: CheckCircle, highlight: false },
  ];

  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-white dark:bg-cardio-dark ecg-grid">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[600px] h-[600px] radial-glow-red pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-mono font-bold text-amber-700 dark:text-cardio-gold uppercase tracking-widest">
            Recognitions & Accreditations
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            Credentials & <span className="text-gradient-gold">Associations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Rigorous academic foundation coupled with premier global fellowships and active memberships in leading international cardiovascular societies.
          </p>
        </div>

        {/* Part 1: Education & Advanced Training Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6" data-aos="fade-up" data-aos-duration="700">
            <GraduationCap className="w-5 h-5 text-cardio-crimson" />
            <h3 className="text-lg font-heading font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              Education & Advanced Training
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((item, idx) => (
              <div
                key={item.degree + item.year}
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay={(idx % 3) * 100}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-amber-500/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase text-amber-700 bg-amber-500/10 border border-amber-500/25">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                    {item.degree}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 font-mono">
                    {item.institution}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs font-mono text-cardio-teal font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Professional Associations */}
        <div>
          <div className="flex items-center gap-3 mb-6" data-aos="fade-up" data-aos-duration="700">
            <Award className="w-5 h-5 text-cardio-crimson" />
            <h3 className="text-lg font-heading font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              Professional Medical Associations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {associations.map((assoc, idx) => {
              const Icon = assoc.icon;
              return (
                <div
                  key={assoc.name}
                  data-aos="fade-up"
                  data-aos-duration="750"
                  data-aos-delay={(idx % 3) * 100}
                  className={`p-6 rounded-3xl transition-all border ${
                    assoc.highlight
                      ? 'bg-cardio-crimson/5 border-cardio-crimson/30 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/10 hover:border-cardio-cyan/40 shadow-sm'
                  } flex items-center gap-4`}
                >
                  <div className="h-12 w-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-cardio-crimson shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-cardio-gold block">
                      {assoc.abbr}
                    </span>
                    <h4 className="text-sm font-heading font-bold text-slate-900 dark:text-white mt-0.5">
                      {assoc.name}
                    </h4>
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
