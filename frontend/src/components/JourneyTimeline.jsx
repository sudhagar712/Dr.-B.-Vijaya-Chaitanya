import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  Globe, 
  Building2, 
  HeartPulse, 
  Award, 
  BookOpen, 
  Trophy, 
  Users, 
  PlusCircle, 
  Heart,
  Quote,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function JourneyTimeline() {
  const [activeCard, setActiveCard] = useState(null);

  // 6 Trajectory Cards matching reference design 100%
  const trajectoryCards = [
    {
      id: '01',
      badge: 'CURRENT',
      badgeColor: 'bg-[#FDE8E9] text-[#E63946] border-[#FBC4C7] dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800',
      iconBg: 'bg-[#FDE8E9] text-[#E63946] ring-4 ring-[#FDE8E9]/60 dark:bg-rose-950/70 dark:text-rose-400 dark:ring-rose-900/40',
      icon: Building2,
      year: 'Present',
      isCurrent: true,
      role: 'Managing Director & Chief of Cardiovascular Sciences',
      institution: 'Medstar Hospitals, Vijayawada & Tadepalli',
      description: 'Spearheading clinical and interventional cardiology, 24/7 primary PCI cath lab services, and cardiovascular growth.',
      cardBorder: 'border-rose-100 hover:border-rose-300 dark:border-rose-900/40 dark:hover:border-rose-700/60',
      accentGlow: 'hover:shadow-rose-500/10'
    },
    {
      id: '02',
      badge: 'GLOBAL EXPOSURE',
      badgeColor: 'bg-[#EBF5FB] text-[#0284C7] border-[#BAE6FD] dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800',
      iconBg: 'bg-[#EBF5FB] text-[#0284C7] ring-4 ring-[#EBF5FB]/60 dark:bg-sky-950/70 dark:text-sky-400 dark:ring-sky-900/40',
      icon: Globe,
      year: '2016 – 2018',
      isCurrent: false,
      role: 'Advanced Training Exposure',
      institution: 'Mount Sinai Hospital, New York, USA',
      description: 'International interventional cardiology exposure with world-renowned cardiovascular faculty at Manhattan, NY.',
      cardBorder: 'border-sky-100 hover:border-sky-300 dark:border-sky-900/40 dark:hover:border-sky-700/60',
      accentGlow: 'hover:shadow-sky-500/10'
    },
    {
      id: '03',
      badge: 'FELLOWSHIP',
      badgeColor: 'bg-[#E6F7F2] text-[#0D9488] border-[#A7F3D0] dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800',
      iconBg: 'bg-[#E6F7F2] text-[#0D9488] ring-4 ring-[#E6F7F2]/60 dark:bg-teal-950/70 dark:text-teal-400 dark:ring-teal-900/40',
      icon: HeartPulse,
      year: '2014 – 2016',
      isCurrent: false,
      role: 'TAVI / TAVR Fellowship',
      institution: 'Medanta – The Medicity, Delhi NCR',
      description: 'Sub-specialised cardiac valve disease care with dedicated training under pioneer structural heart faculty.',
      cardBorder: 'border-teal-100 hover:border-teal-300 dark:border-teal-900/40 dark:hover:border-teal-700/60',
      accentGlow: 'hover:shadow-teal-500/10'
    },
    {
      id: '04',
      badge: 'SUPER-SPECIALITY',
      badgeColor: 'bg-[#FEF6E9] text-[#D97706] border-[#FDE68A] dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800',
      iconBg: 'bg-[#FEF6E9] text-[#D97706] ring-4 ring-[#FEF6E9]/60 dark:bg-amber-950/70 dark:text-amber-400 dark:ring-amber-900/40',
      icon: Award,
      year: '2011 – 2014',
      isCurrent: false,
      role: 'DM – Cardiology',
      institution: 'Sri Ramachandra Medical College, Chennai',
      description: 'Super-speciality doctoral training in cardiology, angioplasty, device therapy and advanced cardiac techniques.',
      cardBorder: 'border-amber-100 hover:border-amber-300 dark:border-amber-900/40 dark:hover:border-amber-700/60',
      accentGlow: 'hover:shadow-amber-500/10'
    },
    {
      id: '05',
      badge: 'POSTGRADUATE',
      badgeColor: 'bg-[#F4EFFE] text-[#7C3AED] border-[#DDD6FE] dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800',
      iconBg: 'bg-[#F4EFFE] text-[#7C3AED] ring-4 ring-[#F4EFFE]/60 dark:bg-purple-950/70 dark:text-purple-400 dark:ring-purple-900/40',
      icon: BookOpen,
      year: '2009 – 2011',
      isCurrent: false,
      role: 'MD – General Medicine',
      institution: 'Rajiv Gandhi University of Health Sciences, Karnataka',
      description: 'Post-graduate qualification in internal medicine focusing on multi-system pathophysiology, haemodynamics and critical care.',
      cardBorder: 'border-purple-100 hover:border-purple-300 dark:border-purple-900/40 dark:hover:border-purple-700/60',
      accentGlow: 'hover:shadow-purple-500/10'
    },
    {
      id: '06',
      badge: 'UNDERGRADUATE',
      badgeColor: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE] dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800',
      iconBg: 'bg-[#EFF6FF] text-[#2563EB] ring-4 ring-[#EFF6FF]/60 dark:bg-blue-950/70 dark:text-blue-400 dark:ring-blue-900/40',
      icon: GraduationCap,
      year: '2005 – 2009',
      isCurrent: false,
      role: 'MBBS',
      institution: 'Rajiv Gandhi University of Health Sciences, Karnataka',
      description: 'Graduated in Medicine and Surgery, laying a strong foundation in patient care, clinical practice and medical ethics.',
      cardBorder: 'border-blue-100 hover:border-blue-300 dark:border-blue-900/40 dark:hover:border-blue-700/60',
      accentGlow: 'hover:shadow-blue-500/10'
    },
  ];

  // 4 Bottom Pillar Highlights
  const pillars = [
    {
      icon: Trophy,
      title: 'Global Exposure',
      subtitle: 'TRAINED AT LEADING INTERNATIONAL CENTRES',
    },
    {
      icon: Users,
      title: 'World-class Training',
      subtitle: 'MENTORED BY RENOWNED FACULTY',
    },
    {
      icon: PlusCircle,
      title: 'Advanced Interventions',
      subtitle: 'COMPLEX & HIGH-RISK PROCEDURES',
    },
    {
      icon: Heart,
      title: 'Patient-centric Approach',
      subtitle: 'BETTER OUTCOMES, HEALTHIER TOMORROWS',
    },
  ];

  return (
    <section 
      id="journey" 
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F9FCFE] via-[#FFFFFF] to-[#F4F9FD] dark:from-[#08121C] dark:via-[#0B1A28] dark:to-[#08121C] transition-colors duration-300"
    >
      {/* 1. Curved Ambient Wave Backgrounds (Matching Reference) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft cyan-blue luminous wave arc at top right */}
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-gradient-to-br from-[#41A490]/15 via-[#0284C7]/12 to-transparent rounded-full blur-3xl opacity-70 dark:opacity-20" />
        
        {/* Soft flowing curve in background */}
        <svg 
          className="absolute top-8 right-0 w-full max-w-4xl h-[420px] opacity-25 dark:opacity-10 pointer-events-none -z-0"
          viewBox="0 0 1000 400" 
          fill="none"
        >
          <path 
            d="M 1000,100 C 700,80 500,240 200,180 C 100,160 0,220 0,220 L 0,400 L 1000,400 Z" 
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41A490" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient bottom wave curve */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#125083]/10 via-[#41A490]/10 to-transparent rounded-full blur-3xl opacity-60 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2. Top Header Area with Left Typography & Right 3D Heart Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          
          {/* Top Left: Editorial Header & Metadata Chips (7 cols) */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-up" data-aos-duration="850">
            
            {/* Eyebrow Label with Dash */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#125083] dark:bg-[#41A490] rounded-full inline-block" />
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#123B5D]/80 dark:text-sky-300 uppercase">
                Academic & Clinical Trajectory
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-serif leading-[1.12] text-[#123B5D] dark:text-white tracking-tight">
              The Journey <br className="hidden sm:inline" />
              <span className="font-normal">of a </span>
              <span className="italic font-serif font-bold text-[#0E6C84] dark:text-[#88C0E8]">
                Dedicated Cardiologist
              </span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans max-w-2xl leading-relaxed">
              A path built on continuous learning, global exposure and hands-on experience in interventional cardiology, with a commitment to better heart care for every patient.
            </p>

            {/* Metadata Badges Row (📍 Guntur, 🎓 Karnataka & Chennai, 🌐 USA) */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center gap-4 sm:gap-6 py-2 px-4 sm:px-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm">
                
                {/* 1. Born in Guntur */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center flex-shrink-0 text-[#E63946]">
                    <MapPin className="w-4 h-4 fill-[#E63946]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                      Born in Guntur
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      India
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block w-[1px] h-7 bg-slate-200 dark:bg-slate-800" />

                {/* 2. Educated across */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center flex-shrink-0 text-[#E63946]">
                    <GraduationCap className="w-4 h-4 text-[#E63946]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                      Educated across
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Karnataka & Chennai
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block w-[1px] h-7 bg-slate-200 dark:bg-slate-800" />

                {/* 3. Global Training */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center flex-shrink-0 text-[#E63946]">
                    <Globe className="w-4 h-4 text-[#E63946]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-tight">
                      Global Training
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      USA
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Top Right: 3D Holographic Heart + Floating Quote Badge (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="950">
            
            {/* Visual Container with Heart and Quote */}
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] h-[340px] sm:h-[390px] flex items-center justify-center">
              
              {/* Radial Cyan Glow Behind Heart */}
              <div className="absolute inset-0 bg-radial-gradient from-[#41A490]/25 via-[#0284C7]/15 to-transparent blur-3xl rounded-full pointer-events-none transform scale-95" />

              {/* High-Resolution Crystalline 3D Heart Illustration with Subtle Floating */}
              <motion.div 
                className="relative z-10 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] flex items-center justify-center"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img 
                  src="/journey_heart.jpg" 
                  alt="3D Crystalline Anatomical Heart with Coronary Arteries" 
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(2,132,199,0.32)] rounded-3xl"
                />

                {/* Animated Neon Electrocardiogram Pulse Line Overlay */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-20" 
                  viewBox="0 0 340 340" 
                  fill="none"
                >
                  <motion.path 
                    d="M 10 170 L 95 170 L 110 135 L 125 205 L 142 95 L 165 235 L 185 145 L 200 185 L 220 170 L 330 170"
                    stroke="#00F0FF" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_10px_#00F0FF]"
                    initial={{ pathLength: 0, opacity: 0.85 }}
                    animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </motion.div>

              {/* Floating Quote Badge (Optimized Mobile Framing) */}
              <motion.div 
                className="absolute left-1 sm:-left-3 bottom-2 sm:bottom-auto sm:top-8 z-30 max-w-[170px] sm:max-w-[215px] p-3 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-[0_12px_32px_rgba(18,59,93,0.12)] space-y-1.5 sm:space-y-2.5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-3xl sm:text-4xl font-serif text-[#123B5D] dark:text-sky-300 font-black leading-none select-none">
                  “
                </div>
                <p className="text-xs sm:text-[13px] font-sans font-bold text-[#123B5D] dark:text-white leading-snug">
                  Learning across borders for a healthier tomorrow
                </p>
                <div className="w-6 h-[2px] bg-[#125083] dark:bg-[#41A490] rounded-full" />
              </motion.div>

            </div>

          </div>

        </div>

        {/* 3. The 6 Trajectory Cards Grid (2 Rows × 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-18">
          {trajectoryCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay={idx * 60}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/90 border ${card.cardBorder} shadow-sm hover:shadow-xl ${card.accentGlow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                {/* Large Background Watermark Number (01, 02, 03, 04, 05, 06) */}
                <div className="absolute top-4 right-5 sm:right-6 font-serif text-4xl sm:text-5xl font-black text-slate-100 dark:text-slate-800/60 select-none pointer-events-none transition-colors group-hover:text-slate-200 dark:group-hover:text-slate-700/60">
                  {card.id}
                </div>

                <div>
                  {/* Top Row: Circular Icon on Left, Pill Tag + Year + Title on Right */}
                  <div className="flex items-start gap-4 mb-3.5">
                    {/* Circular Icon with Pastel Accent */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${card.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0 pr-6">
                      {/* Tag Badge */}
                      <div className="mb-1.5">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-sans font-bold tracking-wider uppercase border ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                      </div>

                      {/* Year / Timeframe */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg sm:text-xl font-bold font-sans text-[#123B5D] dark:text-white">
                          {card.year}
                        </span>
                        {card.isCurrent && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63946]"></span>
                          </span>
                        )}
                      </div>

                      {/* Role / Degree Headline */}
                      <h3 className="text-base sm:text-lg font-heading font-bold text-[#123B5D] dark:text-white group-hover:text-[#125083] dark:group-hover:text-sky-300 transition-colors leading-snug">
                        {card.role}
                      </h3>
                    </div>
                  </div>

                  {/* Institution with Building Icon (matching light blue icon in reference) */}
                  <div className="flex items-start gap-2 mb-3 text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-200">
                    <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0284C7] dark:text-sky-400" />
                    <span className="leading-snug">{card.institution}</span>
                  </div>

                  {/* Narrative Detail Paragraph */}
                  <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Bottom Card Border Accent Line */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Stage {card.id} of 06
                  </span>
                  <CheckCircle2 className={`w-3.5 h-3.5 transition-opacity ${card.isCurrent ? 'text-[#E63946] opacity-100' : 'text-slate-300 dark:text-slate-600 opacity-60 group-hover:opacity-100'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom Ribbon / Capsule Bar with 4 Key Pillars */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="850"
          className="rounded-3xl sm:rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none p-3.5 sm:p-4 px-5 sm:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
            {pillars.map((pillar, pIdx) => {
              const PIcon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className={`flex items-center gap-3.5 pt-4 sm:pt-0 ${pIdx > 0 ? 'sm:pl-6 lg:pl-8' : ''}`}
                >
                  {/* Circular Blue Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#EBF5FB] dark:bg-sky-950/60 text-[#0284C7] dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                    <PIcon className="w-5 h-5" />
                  </div>

                  {/* Title & Subtext */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-heading font-bold text-[#123B5D] dark:text-white leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] font-sans font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase mt-0.5">
                      {pillar.subtitle}
                    </p>
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
