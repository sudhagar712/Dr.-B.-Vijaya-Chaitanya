import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Sparkles,
  ChevronRight,
  Bookmark,
  FileText
} from 'lucide-react';

export default function CredentialsSection() {
  const keyHighlights = [
    { label: 'Super-Specialty', val: 'DM Cardiology', sub: 'Sri Ramachandra, Chennai', icon: GraduationCap, color: 'text-[#125083] dark:text-sky-400', bg: 'bg-[#125083]/10 dark:bg-[#125083]/20' },
    { label: 'American Fellowship', val: 'FACC (USA)', sub: 'American College of Cardiology', icon: Globe, color: 'text-[#41A490]', bg: 'bg-[#41A490]/10 dark:bg-[#41A490]/20' },
    { label: 'Structural Heart', val: 'TAVI / TAVR', sub: 'Medanta Medicity Trained', icon: ShieldCheck, color: 'text-[#EC242E]', bg: 'bg-[#EC242E]/10 dark:bg-[#EC242E]/20' },
    { label: 'Global Immersion', val: 'Mount Sinai NY', sub: 'Manhattan, New York USA', icon: Award, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10 dark:bg-amber-500/20' },
  ];

  const education = [
    {
      code: 'DM',
      degree: 'DM – Cardiology',
      institution: 'Sri Ramachandra Medical College, Chennai',
      year: '2013',
      type: 'Super-Specialty Doctorate',
      badge: 'Super-Specialty',
    },
    {
      code: 'FACC',
      degree: 'Fellow of the American College of Cardiology',
      institution: 'American College of Cardiology, Washington DC, USA',
      year: 'Honour',
      type: 'International Cardiology Fellowship',
      badge: 'Global Fellow',
    },
    {
      code: 'TAVI',
      degree: 'Fellowship in TAVI / TAVR',
      institution: 'Medanta – The Medicity, Delhi NCR',
      year: 'Fellow',
      type: 'Catheter Aortic Valve Specialist',
      badge: 'Structural Heart',
    },
    {
      code: 'NY',
      degree: 'Advanced Training Exposure',
      institution: 'Mount Sinai Hospital, New York, USA',
      year: 'Global',
      type: 'International Clinical Immersion',
      badge: 'Mount Sinai NY',
    },
    {
      code: 'FIC',
      degree: 'Fellowship in Interventional Cardiology',
      institution: 'Apex Interventional Cardiology Association',
      year: 'Fellow',
      type: 'Interventional Sub-Specialty',
      badge: 'Interventional',
    },
    {
      code: 'MD',
      degree: 'MD – General Medicine',
      institution: 'Rajiv Gandhi University of Health Sciences, Karnataka',
      year: '2009',
      type: 'Postgraduate Medical Degree',
      badge: 'Postgraduate',
    },
    {
      code: 'MBBS',
      degree: 'MBBS',
      institution: 'Rajiv Gandhi University of Health Sciences, Karnataka',
      year: '2005',
      type: 'Basic Medical Degree',
      badge: 'Medical Graduate',
    },
  ];

  const associations = [
    {
      name: 'American College of Cardiology',
      abbr: 'ACC / FACC',
      icon: Globe,
      standing: 'Fellow (USA)',
      region: 'International',
      highlight: true,
      badgeColor: 'bg-[#125083]/10 text-[#125083] dark:bg-sky-400/15 dark:text-sky-300 border-[#125083]/20',
    },
    {
      name: 'Society for Cardiovascular Angiography & Interventions',
      abbr: 'SCAI',
      icon: Award,
      standing: 'Active Member',
      region: 'International',
      highlight: true,
      badgeColor: 'bg-[#EC242E]/10 text-[#EC242E] border-[#EC242E]/25',
    },
    {
      name: 'Cardiological Society of India',
      abbr: 'CSI',
      icon: ShieldCheck,
      standing: 'Life Member',
      region: 'National',
      highlight: false,
      badgeColor: 'bg-[#41A490]/10 text-[#41A490] border-[#41A490]/25',
    },
    {
      name: 'Indian College of Cardiology',
      abbr: 'ICC',
      icon: FileText,
      standing: 'Member',
      region: 'National',
      highlight: false,
      badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25',
    },
    {
      name: 'Indian Medical Association',
      abbr: 'IMA',
      icon: Bookmark,
      standing: 'Life Member',
      region: 'National',
      highlight: false,
      badgeColor: 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10',
    },
    {
      name: 'Bezawada Medical Association',
      abbr: 'BMA',
      icon: CheckCircle2,
      standing: 'Active Member',
      region: 'Regional',
      highlight: false,
      badgeColor: 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10',
    },
  ];

  return (
    <section id="credentials" className="py-20 sm:py-24 relative overflow-hidden bg-white dark:bg-slate-950 ecg-grid">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[600px] h-[600px] radial-glow-red pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase tracking-widest">
            Recognitions & Accreditations
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#125083] dark:text-white tracking-tight uppercase">
            Credentials & <span className="text-gradient-gold">Associations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Rigorous academic foundation coupled with premier global fellowships and active memberships in leading international cardiovascular societies.
          </p>
        </div>

        {/* 1. Top Executive Credential Strip (Replaces standalone redundant boxes) */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="750"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-md"
        >
          {keyHighlights.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all shadow-sm"
              >
                <div className={`w-10 h-10 rounded-xl ${pill.bg} flex items-center justify-center ${pill.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold truncate">
                    {pill.label}
                  </span>
                  <h4 className="text-sm font-heading font-extrabold text-[#125083] dark:text-white truncate">
                    {pill.val}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate block">
                    {pill.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Main Executive Split Ledger (Clean Registry Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Academic Degrees & Medical Specializations Ledger */}
          <div 
            className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 p-5 sm:p-7 shadow-sm backdrop-blur-sm"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#125083]/10 dark:bg-[#125083]/25 text-[#125083] dark:text-sky-300 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#125083] dark:text-white">
                    Academic Qualifications & Degrees
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Verified clinical training record
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#41A490]/10 text-[#41A490] text-[11px] font-mono font-bold">
                7 Credentials
              </span>
            </div>

            {/* Structured Medical Ledger Rows */}
            <div className="divide-y divide-slate-100 dark:divide-white/5 pt-1">
              {education.map((item) => (
                <div
                  key={item.degree + item.year}
                  className="py-3.5 sm:py-4 px-2 -mx-2 rounded-xl hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    {/* Degree Acronym Badge */}
                    <div className="w-12 h-11 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col items-center justify-center shrink-0 group-hover:border-[#125083]/30 transition-colors">
                      <span className="text-xs font-mono font-black text-[#125083] dark:text-sky-300">
                        {item.code}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 font-bold">
                        {item.year}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm sm:text-base font-heading font-bold text-[#123B5D] dark:text-white group-hover:text-[#125083] dark:group-hover:text-sky-300 transition-colors">
                          {item.degree}
                        </h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-1 flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{item.institution}</span>
                      </p>
                    </div>
                  </div>

                  {/* Verification Checkmark */}
                  <div className="flex items-center justify-between sm:justify-end gap-2 pl-15 sm:pl-0 shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#41A490] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Medical Associations & Apex Fellowships */}
          <div 
            className="lg:col-span-5 space-y-6"
            data-aos="fade-left"
            data-aos-duration="850"
          >
            {/* Top Apex Highlight: American College of Cardiology Fellow Banner */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#125083]/10 via-[#41A490]/10 to-transparent border-2 border-[#125083]/30 dark:border-sky-400/20 relative overflow-hidden shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#125083] dark:text-sky-300 shadow-sm shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#125083] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  Global Fellowship
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <h4 className="text-lg font-heading font-extrabold text-[#125083] dark:text-white">
                  Fellow of the American College of Cardiology (FACC)
                </h4>
                <p className="text-xs font-mono text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  Awarded to cardiovascular physicians who demonstrate outstanding credentials, achievements, and community leadership in the global cardiac sciences.
                </p>
              </div>
            </div>

            {/* Medical Societies List Container */}
            <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/10 p-5 sm:p-6 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EC242E]/10 dark:bg-[#EC242E]/20 text-[#EC242E] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#125083] dark:text-white">
                      Professional Medical Societies
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      National & International Affiliations
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#EC242E]/10 text-[#EC242E] text-[11px] font-mono font-bold">
                  Active
                </span>
              </div>

              {/* Clean Society Rows */}
              <div className="divide-y divide-slate-100 dark:divide-white/5 pt-2">
                {associations.map((assoc) => {
                  const Icon = assoc.icon;
                  return (
                    <div
                      key={assoc.name}
                      className="py-3.5 px-2 -mx-2 rounded-xl hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-[#125083] dark:text-sky-300 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${assoc.badgeColor}`}>
                              {assoc.abbr}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                              {assoc.region}
                            </span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-heading font-bold text-[#123B5D] dark:text-white group-hover:text-[#125083] dark:group-hover:text-sky-300 transition-colors mt-0.5 truncate">
                            {assoc.name}
                          </h4>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-300 block">
                          {assoc.standing}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
