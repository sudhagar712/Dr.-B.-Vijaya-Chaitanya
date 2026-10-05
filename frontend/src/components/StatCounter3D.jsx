import React, { useRef, useState } from 'react';
import { Activity, ShieldCheck, Zap, Sparkles, Award } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

function TiltCard3D({ title, numericEnd, subtitle, description, icon: Icon, colorClass, borderGlow, badge, aosDelay = 100 }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className="perspective-1000 w-full"
      style={{ perspective: '1000px' }}
      data-aos="fade-up"
      data-aos-duration="850"
      data-aos-delay={aosDelay}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className={`relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 ${borderGlow} overflow-hidden group shadow-md hover:shadow-xl h-full flex flex-col justify-between`}
      >
        {/* Dynamic mouse glare overlay */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(circle 220px at ${glare.x}% ${glare.y}%, rgba(2,132,199,${glare.opacity}), transparent 80%)`,
          }}
        />

        {/* Content with 3D Depth */}
        <div style={{ transform: 'translateZ(30px)' }} className="space-y-4">
          <div className="flex items-center justify-between">
            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${colorClass} bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm`}>
              <Icon className="w-7 h-7" />
            </div>
            {badge && (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-300 font-bold">
                {badge}
              </span>
            )}
          </div>

          <div>
            <div className={`text-4xl sm:text-5xl font-mono font-black tracking-tight ${colorClass}`}>
              <CountUpNumber end={numericEnd} duration={2200} />
            </div>
            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white mt-1">
              {title}
            </h3>
            <p className="text-xs font-mono text-cardio-cyan uppercase tracking-wider mt-1 font-semibold">
              {subtitle}
            </p>
          </div>
        </div>

        <div style={{ transform: 'translateZ(20px)' }} className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StatCounter3D() {
  const stats = [
    {
      title: 'Coronary Angiograms',
      numericEnd: 26000,
      subtitle: 'Diagnostic Precision',
      description: 'Years of evaluating coronary anatomy across a wide range of cardiovascular conditions and complexities.',
      icon: Activity,
      colorClass: 'text-cardio-cyan',
      borderGlow: 'hover:border-cardio-cyan/50',
      badge: 'High Volume',
      aosDelay: 100,
    },
    {
      title: 'Coronary Angioplasties',
      numericEnd: 12000,
      subtitle: 'Interventional Mastery',
      description: 'Extensive experience in percutaneous coronary intervention (PCI), primary PCI for acute MI, and left main stenting.',
      icon: Zap,
      colorClass: 'text-cardio-crimson',
      borderGlow: 'hover:border-cardio-crimson/50',
      badge: 'Primary PCI',
      aosDelay: 200,
    },
    {
      title: 'Peripheral Interventions',
      numericEnd: 11000,
      subtitle: 'Vascular Care Beyond Heart',
      description: 'Significant procedural expertise treating complex vascular disease, limb ischemia, and renal vessel disease.',
      icon: ShieldCheck,
      colorClass: 'text-cardio-teal',
      borderGlow: 'hover:border-cardio-teal/50',
      badge: 'Comprehensive',
      aosDelay: 300,
    },
    {
      title: 'Pacemaker Implantations',
      numericEnd: 300,
      subtitle: 'Rhythm & Pacing Support',
      description: 'Single-chamber, dual-chamber, and physiological conduction system pacing for high-degree heart block and sick sinus.',
      icon: Award,
      colorClass: 'text-amber-600',
      borderGlow: 'hover:border-amber-500/50',
      badge: 'Cardiac Rhythm',
      aosDelay: 150,
    },
    {
      title: 'ICD & CRT Device Therapy',
      numericEnd: 100,
      subtitle: 'Heart Failure & Arrhythmia',
      description: 'Implantable cardioverter-defibrillators and cardiac resynchronization therapy for sudden death prevention.',
      icon: Sparkles,
      colorClass: 'text-indigo-600',
      borderGlow: 'hover:border-indigo-500/50',
      badge: 'Device Specialist',
      aosDelay: 250,
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-24 relative overflow-hidden ecg-grid bg-white dark:bg-slate-950">
      {/* Background Radiance */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full radial-glow-red pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-cyan/30 bg-cardio-cyan/5 text-xs font-mono font-bold text-cardio-cyan uppercase tracking-widest">
            Documented Procedural Volume
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            A Career Measured in <span className="text-gradient-crimson">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Documented procedural experience from professional profile.
          </p>
          <p className="text-xs sm:text-sm font-mono text-cardio-crimson tracking-wider uppercase font-bold">
            “Numbers describe volume. Experience describes what you do with it.”
          </p>
        </div>

        {/* 3D Tilt Cards Grid with CountUp on Viewport */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {stats.slice(0, 3).map((item) => (
            <TiltCard3D key={item.title} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {stats.slice(3).map((item) => (
            <TiltCard3D key={item.title} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}
