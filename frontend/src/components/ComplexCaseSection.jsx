import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, X, PhoneCall } from 'lucide-react';

// =========================================================================
// Bespoke Clinical Icons crafted to 100% replicate the reference image
// =========================================================================
const CustomIcons = {
  // 1. Complex Coronary Interventions: Heart outline with ECG pulse inside
  CoronaryHeart: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#eb4d4b">
      <path
        d="M18 28.5C18 28.5 6 21 6 12.8C6 8.5 9.2 5.5 13.2 5.5C15.6 5.5 17.1 6.6 18 7.8C18.9 6.6 20.4 5.5 22.8 5.5C26.8 5.5 30 8.5 30 12.8C30 21 18 28.5 18 28.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.5H14.5L16.2 10.5L19.8 18.5L21.5 14.5H26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // 2. Primary PCI: Angled diamond-mesh coronary stent cylinder
  CoronaryStent: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#2563eb">
      <g transform="rotate(-35 18 18)">
        <rect x="8" y="11" width="20" height="14" rx="2" strokeWidth="1.2" strokeDasharray="1 3" opacity="0.35" />
        <path d="M8 11L12.5 18L8 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 11L17.5 18L13 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 11L22.5 18L18 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 11L27.5 18L23 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 11L8.5 18L13 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 11L13.5 18L18 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 11L18.5 18L23 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 11L23.5 18L28 25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  ),

  // 3. Left Main & Bifurcation: Branching artery tree
  Bifurcation: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#0d9488">
      <path
        d="M18 30V19C18 16 13.5 13.5 9 11"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 19C18 16 22.5 13.5 27 11"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 12L8 8" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M25 12L28 8" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13.5 15L11 18" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22.5 15L25 18" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="18" cy="30" r="1.5" fill="#0d9488" />
      <circle cx="8" cy="8" r="1.5" fill="#0d9488" />
      <circle cx="28" cy="8" r="1.5" fill="#0d9488" />
    </svg>
  ),

  // 4. Structural Heart: Heart with aortic valve replacement prosthesis
  StructuralHeart: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#7c3aed">
      <path
        d="M18 29C18 29 7 22 7 13.5C7 9.5 10 6.5 13.8 6.5C15.8 6.5 17.2 7.5 18 8.8C18.8 7.5 20.2 6.5 22.2 6.5C26 6.5 29 9.5 29 13.5C29 22 18 29 18 29Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="15" r="5" strokeWidth="2" />
      <path d="M18 15V10M18 15L14 17.5M18 15L22 17.5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 5. IVUS / OCT: Diagnostic monitor with intravascular waveform
  IvusOct: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#d97706">
      <rect x="6" y="7" width="24" height="18" rx="3" strokeWidth="2" />
      <path d="M10 16L13.5 13.5L16.5 19L20 10.5L23.5 17L26 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 28H22M18 25V28" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 6. Device Therapy: Implantable Pacemaker / ICD generator
  PacemakerDevice: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#0891b2">
      <rect x="9" y="11" width="18" height="17" rx="5" strokeWidth="2" />
      <path d="M13 11V8C13 7.4 13.4 7 14 7H22C22.6 7 23 7.4 23 8V11" strokeWidth="2" />
      <path d="M18 7V4.5C18 4 18.5 3.5 19 3.5H21C22.5 3.5 23.5 4.5 23.5 6V11" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="14" cy="19.5" r="1.5" fill="#0891b2" />
      <path d="M17 19.5H23" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 7. Peripheral Vascular: Peripheral vascular arborization
  PeripheralVascular: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#3b82f6">
      <path d="M18 5V13" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M18 13C16 17 12.5 20 11 27M11 27L8.5 31M11 27L13.5 31" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 13C20 17 23.5 20 25 27M25 27L22.5 31M25 27L27.5 31" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="5" r="1.8" fill="#3b82f6" />
    </svg>
  ),

  // 8. Advanced Cardiac Imaging: Concentric acoustic beam waves
  CardiacImaging: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#e11d48">
      <circle cx="18" cy="18" r="3.2" fill="#e11d48" />
      <path d="M12.5 12.5C9.5 15.5 9.5 20.5 12.5 23.5" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M23.5 12.5C26.5 15.5 26.5 20.5 23.5 23.5" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 8C3 13 3 23 8 28" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M28 8C33 13 33 23 28 28" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
    </svg>
  ),

  // 9. Preventive Cardiology: Shield with heart inside
  PreventiveShield: () => (
    <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" stroke="#059669">
      <path
        d="M18 4.5L7.5 9V17C7.5 23.5 12 29 18 31.5C24 29 28.5 23.5 28.5 17V9L18 4.5Z"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22.5C18 22.5 13.5 19 13.5 16C13.5 14.2 14.6 13.2 16 13.2C16.8 13.2 17.5 13.6 18 14.2C18.5 13.6 19.2 13.2 20 13.2C21.4 13.2 22.5 14.2 22.5 16C22.5 19 18 22.5 18 22.5Z"
        fill="#059669"
      />
    </svg>
  ),
};

export default function ComplexCaseSection({ onOpenAppointment }) {
  const [selectedExpertise, setSelectedExpertise] = useState(null);

  // The 9 clinical expertise domains matching the reference image 100%
  const expertiseList = [
    {
      id: 1,
      title: 'Complex Coronary Interventions',
      line1: 'Complex',
      line2: 'Coronary Interventions',
      icon: CustomIcons.CoronaryHeart,
      bgClass: 'bg-[#fff1f2] border-[#ffe4e6]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(235,77,75,0.35)]',
      desc: 'High-risk revascularization for multi-vessel disease, chronic total occlusions (CTO), and anatomically challenging tortuous coronary anatomy.',
      evidence: 'Proven 98%+ procedural success using advanced microcatheters & specialized wires.',
    },
    {
      id: 2,
      title: 'Primary PCI for Acute Myocardial Infarction',
      line1: 'Primary PCI for',
      line2: 'Acute Myocardial Infarction',
      icon: CustomIcons.CoronaryStent,
      bgClass: 'bg-[#edf5ff] border-[#d5e5fe]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(37,99,235,0.35)]',
      desc: 'Immediate emergency door-to-balloon salvage for acute STEMI heart attacks with rapid radial access and aspiration thrombectomy.',
      evidence: 'Rapid 24/7 activation protocol at Medstar Hospitals saving critical cardiac muscle.',
    },
    {
      id: 3,
      title: 'Left Main & Bifurcation Stenting',
      line1: 'Left Main &',
      line2: 'Bifurcation Stenting',
      icon: CustomIcons.Bifurcation,
      bgClass: 'bg-[#e6faf5] border-[#c3f4e6]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(13,148,136,0.35)]',
      desc: 'Deliberate bifurcation techniques (DK-Crush, Culotte, TAP) with mandatory intravascular imaging for unmatched ostial accuracy.',
      evidence: 'Safely restores the anatomical heart nexus supplying over 75% of left myocardial perfusion.',
    },
    {
      id: 4,
      title: 'Structural Heart Interventions (TAVI / TAVR)',
      line1: 'Structural Heart',
      line2: 'Interventions',
      line3: '(TAVI / TAVR)',
      icon: CustomIcons.StructuralHeart,
      bgClass: 'bg-[#f3effe] border-[#e3d7fc]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(124,58,237,0.35)]',
      desc: 'Transcatheter Aortic Valve Implantation replacing dysfunctional valves percutaneously without sternotomy open-heart surgery.',
      evidence: 'Fellowship-trained at Medanta Delhi & Mount Sinai New York.',
    },
    {
      id: 5,
      title: 'IVUS / OCT Guided Procedures',
      line1: 'IVUS / OCT',
      line2: 'Guided Procedures',
      icon: CustomIcons.IvusOct,
      bgClass: 'bg-[#fff5e6] border-[#fde5c4]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(217,119,6,0.35)]',
      desc: 'High-definition intravascular ultrasound & optical coherence tomography ensuring 100% stent expansion and zero edge dissection.',
      evidence: 'Eliminates blind stenting; achieves surgical-grade arterial precision.',
    },
    {
      id: 6,
      title: 'Device Therapy (ICD / CRT)',
      line1: 'Device Therapy',
      line2: '(ICD / CRT)',
      icon: CustomIcons.PacemakerDevice,
      bgClass: 'bg-[#e8f7f9] border-[#c6eff3]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(8,145,178,0.35)]',
      desc: 'Cardiac Resynchronization Therapy & Implantable Cardioverter Defibrillators to treat severe heart failure and fatal arrhythmias.',
      evidence: 'Physiological conduction system pacing (CSP & LBBaP) for natural ventricular synchrony.',
    },
    {
      id: 7,
      title: 'Peripheral Vascular Interventions',
      line1: 'Peripheral Vascular',
      line2: 'Interventions',
      icon: CustomIcons.PeripheralVascular,
      bgClass: 'bg-[#eef4ff] border-[#d8e6fd]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(59,130,246,0.35)]',
      desc: 'Endovascular angioplasty and stenting for peripheral arterial disease (PAD), renal artery stenosis, and limb ischemia salvage.',
      evidence: 'Prevents amputations and restores distal circulation with minimal downtime.',
    },
    {
      id: 8,
      title: 'Advanced Cardiac Imaging',
      line1: 'Advanced',
      line2: 'Cardiac Imaging',
      icon: CustomIcons.CardiacImaging,
      bgClass: 'bg-[#feeff1] border-[#fddce1]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(225,29,72,0.35)]',
      desc: 'Comprehensive multi-modality 3D Echocardiography, Strain Imaging, and hemodynamic invasive catheter analysis.',
      evidence: 'Precise diagnostic foundation before embarking on any interventional strategy.',
    },
    {
      id: 9,
      title: 'Preventive Cardiology',
      line1: 'Preventive',
      line2: 'Cardiology',
      icon: CustomIcons.PreventiveShield,
      bgClass: 'bg-[#eaf9f2] border-[#c7f4de]',
      glowClass: 'group-hover:shadow-[0_0_22px_rgba(5,150,105,0.35)]',
      desc: 'Comprehensive cardiovascular risk stratification, plaque stabilization, dyslipidemia management, and long-term cardiac wellness.',
      evidence: 'Targeted proactive protection ensuring lifelong cardiac longevity.',
    },
  ];

  return (
    <section
      id="complex-cases"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#07131e] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-500"
    >
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-sky-100/40 dark:bg-sky-950/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-rose-50/50 dark:bg-rose-950/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ============================================================== */}
        {/* 1. TOP HERO SECTION: Text on Left + Cath Lab Angio on Right   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-5 xl:col-span-6 space-y-6" data-aos="fade-up" data-aos-duration="750">
            {/* Top red dash + Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#eb4d4b]" />
              <span className="text-[11px] sm:text-[12px] font-bold font-sans tracking-[0.22em] text-[#64748b] dark:text-slate-400 uppercase">
                DELIBERATE STRATEGY UNDER PRESSURE
              </span>
            </div>

            {/* Main Heading: Exact 2-line structure from reference image */}
            <h2 className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-[#0d1e36] dark:text-white font-serif tracking-tight font-bold">
              When the Case is <br />
              <span className="italic font-serif font-normal text-[#eb4d4b] tracking-normal">
                Complex
              </span>
            </h2>

            {/* Paragraph description */}
            <p className="text-[#5b677a] dark:text-slate-300 text-[15px] sm:text-[16px] leading-relaxed max-w-lg font-sans">
              Some cardiovascular conditions require more than a standard approach. When anatomy is
              challenging or patient risk is high, deliberate interventional planning and advanced tooling
              make all the difference.
            </p>

            {/* CTA action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:+918666777888"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 font-sans text-xs sm:text-sm font-semibold transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#eb4d4b]" />
                <span>Cath-Lab Emergency 24/7</span>
              </a>
            </div>
          </div>

          {/* Right Column: Masked Angiography Monitor Visual */}
          <div
            className="lg:col-span-7 xl:col-span-6 relative flex items-center justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-duration="850"
          >
            {/* Decorative Crosshair indicator as in reference image */}
            <div className="absolute -left-2 sm:left-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center pointer-events-none z-20">
              <span className="text-sky-300 dark:text-sky-600 text-3xl font-light select-none font-mono">
                +
              </span>
            </div>

            {/* Swooping curved arc line with locator dot */}
            <svg
              className="absolute -top-8 -left-12 w-[140%] h-[120%] pointer-events-none hidden sm:block z-10"
              viewBox="0 0 600 400"
              fill="none"
            >
              <path
                d="M 60 220 C 120 180, 200 60, 380 40"
                stroke="#c7e2fd"
                strokeWidth="1.5"
                opacity="0.8"
              />
              {/* Coral locator point on the curve */}
              <circle cx="160" cy="140" r="4" fill="#eb4d4b" />
              <circle cx="160" cy="140" r="8" stroke="#eb4d4b" strokeWidth="1" opacity="0.3" />
            </svg>

            {/* Image Canvas with Organic Curved Mask */}
            <div className="relative w-full max-w-[620px] aspect-[16/10] overflow-hidden rounded-3xl sm:rounded-[38px] shadow-2xl border border-slate-200/90 dark:border-white/10 group">
              
              {/* Cath-Lab Screen image */}
              <img
                src="/complex_case_cathlab.jpg"
                alt="Interventional Cardiologist pointing at Coronary Angiogram Monitor"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle clinical gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-950/20 via-transparent to-slate-950/30 pointer-events-none" />

              {/* Floating Glassmorphic Pill Badge: PRECISION PLANNING BETTER OUTCOMES */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-xl border border-white/80 dark:border-white/10"
              >
                <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#5b677a] dark:text-slate-300 uppercase leading-[1.6]">
                  <div>PRECISION</div>
                  <div>PLANNING</div>
                  <div>BETTER</div>
                  <div>OUTCOMES</div>
                </div>
                {/* Coral horizontal underline bar */}
                <div className="w-5 h-[2.5px] bg-[#eb4d4b] rounded-full mt-2.5" />
              </motion.div>

            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 2. MIDDLE SECTION: Areas of Expertise in Complex Cases (9 Icons) */}
        {/* ============================================================== */}
        <div className="mb-14 sm:mb-18" data-aos="fade-up" data-aos-duration="750">
          
          {/* Eyebrow Label with Cyan Accent Dash */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <span className="w-8 h-[2px] bg-sky-400" />
            <h3 className="text-[11px] sm:text-[12px] font-bold font-sans tracking-[0.22em] text-[#64748b] dark:text-slate-400 uppercase">
              AREAS OF EXPERTISE IN COMPLEX CASES
            </h3>
          </div>

          {/* 9-Column Icon Badges with Clean Vertical Separators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-2 lg:gap-0 lg:divide-x lg:divide-slate-200/80 dark:lg:divide-white/10">
            {expertiseList.map((item, index) => {
              const IconComp = item.icon;
              const isSelected = selectedExpertise?.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedExpertise(isSelected ? null : item)}
                  className={`group flex flex-col items-center text-center p-3 sm:p-3.5 lg:px-2 xl:px-3 rounded-2xl lg:rounded-none transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50/80 dark:bg-sky-950/40 ring-1 ring-sky-300 dark:ring-sky-700'
                      : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 40}
                >
                  {/* Circle Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 shadow-sm ${item.bgClass} ${item.glowClass} group-hover:scale-110 group-hover:-translate-y-1.5`}
                  >
                    <IconComp />
                  </div>

                  {/* Label (2-3 lines clean centered typography) */}
                  <div className="mt-3.5 space-y-0.5 min-h-[44px] flex flex-col justify-start">
                    <span className="block text-[11px] sm:text-[12px] font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-[#125083] dark:group-hover:text-sky-300 transition-colors">
                      {item.line1}
                    </span>
                    <span className="block text-[11px] sm:text-[12px] font-bold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-[#125083] dark:group-hover:text-sky-300 transition-colors">
                      {item.line2}
                    </span>
                    {item.line3 && (
                      <span className="block text-[10px] font-bold text-slate-500 dark:text-slate-400 leading-snug">
                        {item.line3}
                      </span>
                    )}
                  </div>

                  {/* Subtle micro click indicator */}
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#125083] dark:text-sky-400 font-mono font-medium flex items-center gap-0.5">
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Drawer for Selected Expertise (when clicked) */}
          <AnimatePresence>
            {selectedExpertise && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sky-50/90 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900 border border-sky-200 dark:border-sky-800/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#125083] dark:text-sky-400">
                        Clinical Protocol:
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-serif">
                        {selectedExpertise.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {selectedExpertise.desc}
                    </p>
                    <div className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {selectedExpertise.evidence}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <button
                      onClick={onOpenAppointment}
                      className="px-4 py-2 rounded-xl bg-[#125083] hover:bg-[#0e3b60] text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      Consult Doctor
                    </button>
                    <button
                      onClick={() => setSelectedExpertise(null)}
                      className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
                      aria-label="Close details"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* ============================================================== */}
        {/* 3. BOTTOM SECTION: A Focused Approach Quote Card             */}
        {/* ============================================================== */}
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          className="relative rounded-2xl sm:rounded-3xl bg-[#f8fafc] dark:bg-[#0b1b2b] border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            
            {/* Left: Giant stylized quote mark + Vertical line */}
            <div className="hidden sm:flex shrink-0 items-center gap-5">
              <span className="text-sky-300 dark:text-sky-400 font-serif text-6xl sm:text-7xl lg:text-8xl leading-none select-none -mb-3">
                &ldquo;
              </span>
              <div className="w-[1px] h-14 bg-sky-200/70 dark:bg-sky-800/40" />
            </div>

            {/* Middle: Eyebrow + Quote Text */}
            <div className="flex-1 space-y-1.5 max-w-3xl">
              <span className="text-[11px] sm:text-[12px] font-bold font-sans tracking-[0.22em] text-[#0284c7] dark:text-sky-400 uppercase block">
                A FOCUSED APPROACH
              </span>
              <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg lg:text-[19px] leading-relaxed font-serif">
                Every complex case is unique. With careful assessment, advanced imaging and precise
                intervention, we aim for safer procedures and better long-term outcomes.
              </p>
            </div>

            {/* Right: Vertical separator + Line + Stacked Tagline */}
            <div className="flex items-center gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10 w-full md:w-auto md:pl-8">
              <span className="w-8 h-[2px] bg-sky-400 shrink-0" />
              <div className="text-[10px] sm:text-[11px] font-bold font-sans tracking-[0.22em] text-slate-500 dark:text-slate-400 uppercase leading-[1.6]">
                <div>COMPLEX CASES</div>
                <div>CONFIDENT CARE</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
