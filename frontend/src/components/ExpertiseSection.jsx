import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Heart,
  Zap,
  ShieldCheck,
  Disc,
  Radio,
  Eye,
  Sliders,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Pause,
  Play,
  Stethoscope
} from 'lucide-react';

export default function ExpertiseSection({ onOpenAppointment }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Procedures' },
    { id: 'coronary', label: 'Coronary Interventions' },
    { id: 'structural', label: 'Structural Heart (TAVI)' },
    { id: 'devices', label: 'Cardiac Devices' },
    { id: 'peripheral', label: 'Peripheral Vascular' },
    { id: 'prevention', label: 'Imaging & Diagnostics' },
  ];

  const procedures = [
    // CORONARY
    {
      category: 'coronary',
      title: 'Coronary Angiography',
      volume: '26,000+ Cases',
      badge: 'Gold Standard Diagnostic',
      desc: 'High-definition digital subtraction angiography to evaluate coronary arteries, map blockages, and plan precision intervention.',
      clinicalDetails: 'Fluoroscopic imaging of the coronary tree with minimal radiopaque contrast to map stenosis severity, bifurcation angles, and coronary collateral circulation.',
      icon: Activity,
      image: '/procedures/cardio_angioplasty.jpg',
      categoryLabel: 'Coronary Diagnostics',
      accentColor: '#0284C7',
    },
    {
      category: 'coronary',
      title: 'Coronary Angioplasty (PTCA)',
      volume: '12,000+ Cases',
      badge: 'Percutaneous Stenting',
      desc: 'Catheter-based revascularization of occluded coronary arteries using micro-balloons and state-of-the-art drug-eluting stents (DES).',
      clinicalDetails: 'Minimally invasive arterial restoration via trans-radial or femoral access, restoring physiological myocardial perfusion with minimal hospital stay.',
      icon: Zap,
      image: '/procedures/cardio_angioplasty.jpg',
      categoryLabel: 'Artery Revascularization',
      accentColor: '#EC242E',
    },
    {
      category: 'coronary',
      title: 'Primary PCI for Acute MI',
      volume: 'Emergency 24/7',
      badge: 'Golden Hour STEMI Salvage',
      desc: 'Emergency primary percutaneous coronary intervention for patients presenting with acute myocardial infarction (heart attack).',
      clinicalDetails: 'Rapid door-to-balloon time protocol to immediately re-open acute thrombus-occluded arteries, rescue ischemic myocardium, and preserve cardiac function.',
      icon: Heart,
      image: '/procedures/cardio_primary_pci.jpg',
      categoryLabel: 'Emergency Cardiology',
      accentColor: '#EC242E',
    },
    {
      category: 'coronary',
      title: 'Complex Coronary Interventions',
      volume: 'Specialized Expertise',
      badge: 'High-Risk (CHIP)',
      desc: 'Specialised treatment for technically challenging coronary artery disease including heavily calcified lesions and chronic total occlusions.',
      clinicalDetails: 'Employing rotational atherectomy (rotablation), intravascular lithotripsy (IVL), and micro-catheters for complex anatomical calcification.',
      icon: Sliders,
      image: '/procedures/cardio_primary_pci.jpg',
      categoryLabel: 'Complex CHIP Stenting',
      accentColor: '#125083',
    },
    {
      category: 'coronary',
      title: 'Left Main & Bifurcation Stenting',
      volume: 'Precision Anatomy',
      badge: 'Advanced Bifurcation Skill',
      desc: 'Complex coronary interventions requiring meticulous double-stent techniques and anatomical hemodynamic preservation.',
      clinicalDetails: 'Provisional stenting, Culotte, DK-crush, and TAP techniques tailored to preserve side branch patency and ensure long-term vessel durability.',
      icon: Disc,
      image: '/procedures/cardio_angioplasty.jpg',
      categoryLabel: 'Bifurcation Stenting',
      accentColor: '#D97706',
    },
    {
      category: 'coronary',
      title: 'IVUS & OCT Guided Procedures',
      volume: 'Intravascular Vision',
      badge: 'Sub-Millimeter Imaging',
      desc: 'High-resolution intravascular ultrasound and optical coherence tomography providing sub-millimeter arterial lumen analysis.',
      clinicalDetails: 'Real-time cross-sectional imaging ensuring optimal stent expansion, precise vessel sizing, complete wall apposition, and edge dissection safety.',
      icon: Eye,
      image: '/procedures/cardio_ivus_oct.jpg',
      categoryLabel: 'Lumen Scan Imaging',
      accentColor: '#41A490',
    },
    {
      category: 'coronary',
      title: 'FFR Physiological Assessment',
      volume: 'Physiological Guidance',
      badge: 'Fractional Flow Reserve',
      desc: 'Sensor-wire hemodynamic pressure assessment to determine the functional ischemic significance of coronary narrowings.',
      clinicalDetails: 'Precision trans-stenotic pressure ratio measurement under hyperemic challenge, ensuring evidence-based decisions and avoiding unnecessary stents.',
      icon: Activity,
      image: '/procedures/cardio_ivus_oct.jpg',
      categoryLabel: 'Hemodynamic Assessment',
      accentColor: '#41A490',
    },

    // STRUCTURAL HEART
    {
      category: 'structural',
      title: 'TAVI / TAVR Valve Replacement',
      volume: 'Medanta & NY Trained',
      badge: 'Transcatheter Aortic Valve',
      desc: 'Minimally invasive transcatheter aortic valve implantation without open-heart surgery, replacing diseased calcified valves.',
      clinicalDetails: 'Catheter-guided delivery of expandable bioprosthetic aortic valves via femoral artery under fluoroscopy and transesophageal echo guidance.',
      icon: Sparkles,
      image: '/procedures/cardio_tavi.jpg',
      categoryLabel: 'Catheter Heart Valve',
      accentColor: '#EC242E',
    },
    {
      category: 'structural',
      title: 'Structural Heart Interventions',
      volume: 'Catheter Valve & Defect Care',
      badge: 'Advanced Structural Care',
      desc: 'Percutaneous structural interventions including ASD and VSD device closures, balloon mitral valvuloplasty, and paravalvular leak repair.',
      clinicalDetails: 'Minimally invasive transcatheter closures using specialized nitinol occluders restoring normal intracardiac pressures without sternotomy.',
      icon: Heart,
      image: '/procedures/cardio_tavi.jpg',
      categoryLabel: 'Cardiac Defect Closure',
      accentColor: '#125083',
    },

    // CARDIAC DEVICES
    {
      category: 'devices',
      title: 'Pacemaker Implantation',
      volume: '300+ Implantations',
      badge: 'Bradycardia & Heart Block',
      desc: 'Implantation of single-chamber, dual-chamber, and leadless cardiac pacemakers for symptomatic bradycardia and conduction blocks.',
      clinicalDetails: 'Permanent transvenous lead positioning with physiological conduction system pacing (His-bundle / Left Bundle Branch Area Pacing).',
      icon: Radio,
      image: '/procedures/cardio_pacemaker.jpg',
      categoryLabel: 'Electrical Cardiac Pacing',
      accentColor: '#41A490',
    },
    {
      category: 'devices',
      title: 'ICD & CRT Device Therapy',
      volume: '100+ Devices',
      badge: 'Heart Failure & Arrhythmia',
      desc: 'Advanced implantable cardioverter-defibrillators (ICD) and cardiac resynchronization therapy (CRT-D / CRT-P) for advanced heart failure.',
      clinicalDetails: 'Biventricular pacing synchronization restoring electromechanical coordination and providing life-saving sudden death protection.',
      icon: Zap,
      image: '/procedures/cardio_pacemaker.jpg',
      categoryLabel: 'Defibrillator & CRT',
      accentColor: '#D97706',
    },

    // PERIPHERAL VASCULAR
    {
      category: 'peripheral',
      title: 'Peripheral Vascular Interventions',
      volume: '11,000+ Procedures',
      badge: 'Limb & Renal Revascularization',
      desc: 'Comprehensive endovascular angioplasty and stenting for peripheral artery disease (PAD), critical limb ischemia, and renal arterial stenosis.',
      clinicalDetails: 'Complex revascularization utilizing drug-coated balloons, specialized peripheral stents, and atherectomy restoring peripheral limb perfusion.',
      icon: ShieldCheck,
      image: '/procedures/cardio_peripheral.jpg',
      categoryLabel: 'Vascular Angioplasty',
      accentColor: '#0284C7',
    },

    // IMAGING & DIAGNOSTICS
    {
      category: 'prevention',
      title: 'Advanced 3D Cardiac Imaging',
      volume: 'Comprehensive Diagnostics',
      badge: 'Multimodality Imaging',
      desc: 'Multimodality non-invasive cardiac evaluation including 3D color Doppler echocardiography, transesophageal echo (TEE), and stress testing.',
      clinicalDetails: 'Sub-millimeter quantification of chamber volumes, valve hemodynamics, ejection fraction, and myocardial strain imaging.',
      icon: Eye,
      image: '/procedures/cardio_imaging.jpg',
      categoryLabel: '3D Color Ultrasound',
      accentColor: '#41A490',
    },
    {
      category: 'prevention',
      title: 'Preventive Cardiology & Risk Profiling',
      volume: 'Proactive Longevity',
      badge: 'Cardiovascular Longevity',
      desc: 'Proactive cardiovascular risk assessment, coronary calcium evaluation, lipid management, and metabolic syndrome optimization.',
      clinicalDetails: 'Comprehensive risk stratification, advanced lipid subfraction testing, vascular stiffness analysis, and targeted preventative therapies.',
      icon: Heart,
      image: '/procedures/cardio_imaging.jpg',
      categoryLabel: 'Preventative Medicine',
      accentColor: '#EC242E',
    },
  ];

  // Filter procedures according to active tab
  const filteredProcedures = activeCategory === 'all'
    ? procedures
    : procedures.filter((p) => p.category === activeCategory);

  // Responsive listener to update visibleCards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Safe scroll to specific card index
  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards && cards[index]) {
      const targetLeft = cards[index].offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  // Max index allowed
  const maxIndex = Math.max(0, filteredProcedures.length - visibleCards);

  // Switch category and smoothly reset to first card
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Auto-slide effect (runs when multiple cards exceed visible threshold)
  useEffect(() => {
    if (isPaused) return;
    if (filteredProcedures.length <= visibleCards) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        scrollToCard(next);
        return next;
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, filteredProcedures.length, visibleCards, maxIndex]);

  // Sync index when user manually swipes/scrolls
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.children[0];
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, newIndex), maxIndex));
    }
  };

  const handleNext = () => {
    const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    scrollToCard(next);
  };

  const handlePrev = () => {
    const prev = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    scrollToCard(prev);
  };

  return (
    <section 
      id="expertise" 
      className="py-20 sm:py-28 relative overflow-hidden bg-[#FAFBFD] dark:bg-[#07131F] transition-colors duration-500"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] radial-glow-red pointer-events-none blur-3xl opacity-20" />
      <div className="absolute inset-0 ecg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4" data-aos="fade-up" data-aos-duration="750">
         
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#123B5D] dark:text-white tracking-tight uppercase">
            Clinical <span className="text-gradient-crimson">Expertise</span>
          </h2>

         

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive interventional cardiology, catheter-based structural heart therapies, and physiological diagnostics executed with state-of-the-art cath lab technology.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. CATEGORY FILTER TABS                                                   */}
        {/* ========================================================================= */}
        <div 
          className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10" 
          data-aos="fade-up" 
          data-aos-duration="700"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#EC242E] text-white border-[#EC242E] shadow-md'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:border-[#EC242E]/40 hover:text-[#123B5D] dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* 3. SAME LINE AUTO-SLIDING CAROUSEL (100% RELIABLE FOR ALL DEVICES)        */}
        {/* ========================================================================= */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-aos="fade-up"
          data-aos-duration="850"
        >
          {/* Controls Bar: Procedures count & Auto-Slide Navigators */}
          <div className="flex items-center justify-between gap-4 mb-4 px-1 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {filteredProcedures.length} {filteredProcedures.length === 1 ? 'Procedure' : 'Procedures'} Available
              </span>
            </div>

            {/* Carousel Navigation Buttons & Play/Pause (only shown when sliding is possible) */}
            {filteredProcedures.length > visibleCards && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer shadow-xs"
                  title={isPaused ? "Resume Auto-Slide" : "Pause Auto-Slide"}
                >
                  {isPaused ? <Play className="w-3 h-3 text-emerald-500" /> : <Pause className="w-3 h-3 text-amber-500" />}
                  <span>{isPaused ? 'Resume' : 'Auto-Slide'}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white shadow-xs hover:bg-[#125083] hover:text-white hover:border-[#125083] transition-all cursor-pointer"
                    aria-label="Previous Procedure"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white shadow-xs hover:bg-[#125083] hover:text-white hover:border-[#125083] transition-all cursor-pointer"
                    aria-label="Next Procedure"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Smooth Snap Carousel Track (All cards always rendered, no clipping) */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 px-1 select-none"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {filteredProcedures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title + idx}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* High-Impact Procedure Card with High-Contrast Typography & Image Banner */}
                  <div
                    onClick={() => setSelectedProcedure(item)}
                    className="h-full rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0E2235] border-2 border-slate-200/90 dark:border-white/10 hover:border-[#EC242E] dark:hover:border-sky-400 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                  >
                    {/* Top Procedure Photograph with Heavy Contrast Overlays */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.95]"
                      />

                      {/* Heavy Dark Gradient Overlay ensuring all text on image is 100% readable */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/60 pointer-events-none" />

                      {/* TOP BADGES: Solid High-Contrast Backgrounds */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                        {/* Case Volume Badge (Solid Deep Charcoal Black + White Text) */}
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase bg-slate-950/95 text-white border border-white/25 shadow-lg tracking-wider">
                          {item.volume}
                        </span>

                        {/* Clinical Technique Badge (Solid Medical Red + White Text) */}
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase bg-[#EC242E] text-white shadow-lg tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      {/* BOTTOM OF IMAGE: Category Tag & Icon */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-sky-300 dark:text-sky-200 drop-shadow-md uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EC242E]" />
                          <span>{item.categoryLabel}</span>
                        </span>

                        <div className="w-8 h-8 rounded-lg bg-white/95 dark:bg-slate-900/95 flex items-center justify-center text-[#125083] dark:text-sky-300 shadow-md">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* CARD BODY: High-Contrast Pure Light/Dark Mode Typography */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white dark:bg-[#0E2235]">
                      <div>
                        {/* Procedure Title (Big, bold, high contrast) */}
                        <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0D2644] dark:text-white group-hover:text-[#EC242E] dark:group-hover:text-sky-300 transition-colors">
                          {item.title}
                        </h3>

                        {/* Description (Dark Slate, fully readable font) */}
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2.5 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>

                      {/* Card Footer: Action Button */}
                      <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                        <span className="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-[#41A490]" />
                          <span>Protocol Ready</span>
                        </span>

                        <span className="inline-flex items-center gap-1 font-bold text-[#EC242E] group-hover:underline">
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Indicator Dots (Only if multiple pages exist) */}
          {filteredProcedures.length > visibleCards && (
            <div className="flex items-center justify-center gap-1.5 mt-6 pt-2">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToCard(dotIdx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-6 bg-[#EC242E]'
                      : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* 4. PROCEDURE DETAIL MODAL (High-Contrast & Full Details)                   */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {selectedProcedure && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden space-y-5"
              >
                {/* Modal Hero Image */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={selectedProcedure.image}
                    alt={selectedProcedure.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60 pointer-events-none" />

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProcedure(null)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors cursor-pointer z-10 shadow-md"
                    aria-label="Close procedure modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* High-Contrast Badges */}
                  <div className="absolute bottom-4 left-5 right-5 z-10 flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-white text-[#123B5D] shadow-md">
                      {selectedProcedure.volume}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EC242E] text-white shadow-md">
                      {selectedProcedure.badge}
                    </span>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 pt-0 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0D2644] dark:text-white">
                      {selectedProcedure.title}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed font-sans">
                      {selectedProcedure.desc}
                    </p>
                  </div>

                  {/* Interventional Protocol Breakdown */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-white/10 space-y-2">
                    <h4 className="text-xs font-mono text-[#EC242E] uppercase tracking-wider font-bold flex items-center gap-1.5">
                      <Activity className="w-4 h-4" />
                      <span>Interventional Protocol & Technique:</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
                      {selectedProcedure.clinicalDetails}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProcedure(null);
                        if (onOpenAppointment) onOpenAppointment();
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#EC242E] hover:bg-[#d81e28] text-white font-mono font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>Consult Dr. Vijaya Chaitanya</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedProcedure(null)}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
