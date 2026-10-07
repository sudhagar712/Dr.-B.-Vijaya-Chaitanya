import React from 'react';
import { 
  Building2, 
  ShieldPlus, 
  ArrowRight, 
  HeartPulse, 
  Users, 
  Heart 
} from 'lucide-react';

export default function LeadershipSection({ onOpenAppointment }) {
  const leadershipPillars = [
    {
      icon: HeartPulse,
      iconBg: 'bg-[#E0F7FA] text-[#00ACC1] dark:bg-cyan-950/60 dark:text-cyan-400',
      title: 'Clinical Capability & 24/7 STEMI Cath Lab',
      desc: 'Institutionalizing immediate door-to-balloon protocols and fully equipped cath labs to save lives during acute coronary emergencies.',
    },
    {
      icon: Users,
      iconBg: 'bg-[#E1F5FE] text-[#0288D1] dark:bg-sky-950/60 dark:text-sky-400',
      title: 'Building Clinical Teams',
      desc: 'Fostering interdisciplinary collaboration across interventionalists, cardiac surgeons, intensivists, and specialized nursing personnel.',
    },
    {
      icon: Building2,
      iconBg: 'bg-[#EDE7F6] text-[#7E57C2] dark:bg-purple-950/60 dark:text-purple-400',
      title: '200-Bedded Tadepalli Facility',
      desc: 'Expanding hospital infrastructure in Tadepalli, Vijayawada, to offer tertiary and quaternary cardiovascular care to Andhra Pradesh.',
    },
    {
      icon: Heart,
      iconBg: 'bg-[#FFEBEE] text-[#E53935] dark:bg-rose-950/60 dark:text-rose-400',
      title: 'Patient Access & Regional Healthcare',
      desc: 'Bringing world class cardiology expertise closer to the communities of Vijayawada, Tadepalli, Guntur, and surrounding regions.',
    },
  ];

  return (
    <section 
      id="leadership" 
      className="relative py-16 sm:py-24 overflow-hidden bg-[#F5F9FD] dark:bg-[#07131F] transition-colors duration-500"
    >
      {/* ========================================================================= */}
      {/* BACKGROUND GRAPHIC: Soft Medical Sky-Blue Flowing Waves                   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Organic Cyan & Sky Blue Wave Curves */}
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#BAE6FD]/40 via-[#E0F2FE]/30 to-transparent blur-3xl dark:from-sky-950/30 dark:via-[#0c2438]/20" />
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#E0F2FE]/50 via-[#EBF5FB]/30 to-transparent blur-3xl dark:from-sky-950/20" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-[#E0F7FA]/30 via-transparent to-transparent blur-3xl dark:from-cyan-950/20" />

        {/* Subtle SVG Medical Flowing Curves */}
        <svg 
          className="absolute top-0 right-0 w-full h-[550px] opacity-40 dark:opacity-10 text-[#BAE6FD]"
          viewBox="0 0 1440 550" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M800 0C950 120 1150 140 1440 60V0H800Z" 
            fill="currentColor" 
          />
          <path 
            d="M600 0C780 180 1020 220 1440 150V0H600Z" 
            fill="currentColor" 
            fillOpacity="0.5" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16 sm:space-y-24">
        
        {/* ========================================================================= */}
        {/* ROW 1: INSTITUTIONAL LEADERSHIP & DOCTOR EXECUTIVE COMPOSITION            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Narrative & Mission (cols 1-6) */}
          <div className="lg:col-span-6 space-y-5" data-aos="fade-right" data-aos-duration="850">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#123B5D] dark:text-sky-300 uppercase">
              <span className="w-5 h-0.5 bg-[#123B5D] dark:bg-sky-400 inline-block" />
              <span>INSTITUTIONAL LEADERSHIP & VISION</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold font-heading text-[#123B5D] dark:text-white tracking-tight leading-[1.15]">
              Building Healthcare <br />
              Beyond the <span className="italic font-serif font-medium text-[#0284C7] dark:text-sky-400">Cath Lab</span>
            </h2>

            {/* Italic Quote */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 italic font-serif leading-relaxed">
              “Treating patients was the beginning. Building better healthcare became the larger responsibility.”
            </p>

            {/* Body Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              As Managing Director of Medstar Hospitals, Dr. Vijaya Chaitanya is involved in the larger task of developing a healthcare organisation around clinical capability, specialised services and patient access.
            </p>

            {/* Quote Callout Box with Red Left Accent Bar */}
            <div className="border-l-2 border-[#EC242E] pl-4 py-1">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic font-sans flex items-start gap-1">
                <span className="text-[#EC242E] font-serif text-xl font-bold leading-none select-none">“</span>
                <span>Build an environment where expertise, technology and coordinated care come together for better cardiovascular outcomes.”</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-full bg-[#EC242E] hover:bg-[#d81e28] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Book Consultation at Medstar</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-white/20 bg-white/90 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs transition-all"
              >
                <span>Visit Medstar Tadepalli</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Center & Right Column: Doctor Portrait + Floating Stats Badges (cols 7-12) */}
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row items-center justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="850">
            
            {/* Doctor Composition Container with Blurred Hospital Corridor Backdrop */}
            <div className="relative w-full max-w-lg lg:max-w-none flex items-end justify-center lg:justify-center">
              
              {/* Blurred Corridor Background Panel */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-35 dark:opacity-20 pointer-events-none -z-10">
                <img
                  src="/hospital_corridor_blur.jpg"
                  alt="Medstar Hospital Environment"
                  className="w-full h-full object-cover object-center filter blur-[1px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F9FD] dark:from-[#07131F] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F9FD] dark:from-[#07131F] via-transparent to-[#F5F9FD]/60 dark:to-[#07131F]/60" />
              </div>

              {/* Doctor Real Photo Portrait */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[440px]">
                <img
                  src="/doctor_about.jpg"
                  alt="Dr. B. Vijaya Chaitanya - Managing Director & Cardiologist"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                {/* Smooth bottom feather gradient */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F5F9FD] dark:from-[#07131F] to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Badges (Right side of doctor) */}
              <div className="absolute right-0 sm:-right-4 lg:-right-2 top-2 sm:top-6 z-20 space-y-3.5 sm:space-y-4">
                
                {/* Badge 1: 200+ Beds */}
                <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/80 dark:border-white/10 shadow-lg w-52 sm:w-56 space-y-1.5 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-[#00ACC1] dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0284C7] dark:text-sky-400 leading-none">
                      200+
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-white block">
                      BEDS MULTI-SPECIALTY FACILITY
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block leading-tight mt-0.5">
                      Tadepalli, Vijayawada
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block leading-tight">
                      Comprehensive Cardiovascular Care
                    </span>
                  </div>
                </div>

                {/* Badge 2: 24/7 Primary PCI Cath Lab */}
                <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/80 dark:border-white/10 shadow-lg w-52 sm:w-56 space-y-1.5 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/50 text-[#EC242E] flex items-center justify-center shrink-0">
                      <ShieldPlus className="w-4 h-4" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#EC242E] leading-none">
                      24/7
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-white block">
                      PRIMARY PCI CATH LAB UNIT
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block leading-tight mt-0.5">
                      Immediate STEMI Emergency
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block leading-tight">
                      Interventions & Resuscitation
                    </span>
                  </div>
                </div>

                {/* Subtle Ambient ECG Wave graphic behind badges */}
                <div className="hidden sm:block absolute -right-6 top-1/2 w-40 h-20 -z-10 opacity-30 pointer-events-none">
                  <svg viewBox="0 0 160 80" fill="none" className="w-full h-full text-[#0284C7] stroke-current stroke-2">
                    <path d="M0 40H40L50 15L60 65L70 25L80 50L90 40H160" />
                  </svg>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: ADVANCING CARDIOVASCULAR CARE ACROSS COMMUNITIES & 4 PILLARS       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-6 sm:pt-10">
          
          {/* Left Column: Heading, Description, Learn More Button & Hospital Image */}
          <div className="lg:col-span-6 space-y-5" data-aos="fade-up" data-aos-duration="850">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#0284C7] dark:text-sky-400 uppercase">
              <span className="w-5 h-0.5 bg-[#0284C7] inline-block" />
              <span>OUR FOCUS</span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#123B5D] dark:text-white tracking-tight leading-snug">
              Advancing Cardiovascular Care <br />
              <span className="text-[#0284C7] dark:text-sky-400">Across Communities</span>
            </h3>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Medstar Hospitals began its journey in Vijayawada and has expanded its presence with its 200-bedded Tadepalli facility. The growth represents an opportunity to bring specialised medical expertise and advanced healthcare services closer to the communities of Vijayawada, Tadepalli and the surrounding region.
            </p>

            {/* Learn More Button */}
            <div className="pt-1">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 dark:border-white/20 bg-white/90 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
              >
                <span>Learn More About Medstar</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Hospital Building Facade Photograph */}
            <div className="pt-3">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/90 dark:border-white/10 group">
                <img
                  src="/medstar_hospital_front.jpg"
                  alt="Medstar Hospitals - 200-Bedded Facility in Tadepalli, Vijayawada"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Bottom Hospital Tag */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono font-semibold">
                  <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    Medstar Hospitals • Tadepalli & Vijayawada
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Connected Leadership Pillars Stack */}
          <div className="lg:col-span-6 relative pl-2 sm:pl-4" data-aos="fade-up" data-aos-duration="850" data-aos-delay="100">
            
            {/* Vertical Connecting Guide Line */}
            <div className="absolute left-[29px] sm:left-[37px] top-6 bottom-8 w-0.5 bg-slate-200 dark:bg-white/10 -z-0" />

            {/* 4 Pillars List */}
            <div className="space-y-6 sm:space-y-7 relative z-10">
              {leadershipPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 sm:gap-5 group">
                    
                    {/* Circle Node Badge */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${pillar.iconBg} flex items-center justify-center shrink-0 shadow-sm border-2 border-white dark:border-slate-900 transition-transform group-hover:scale-110`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Pillar Title & Description */}
                    <div className="space-y-1 min-w-0 pt-0.5">
                      <h4 className="text-base sm:text-lg font-heading font-bold text-[#123B5D] dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-sky-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
