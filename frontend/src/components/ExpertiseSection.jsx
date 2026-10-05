import React, { useState } from 'react';
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
  ArrowUpRight,
  CheckCircle2,
  X,
} from 'lucide-react';

export default function ExpertiseSection({ onOpenAppointment }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const categories = [
    { id: 'all', label: 'All Procedures' },
    { id: 'coronary', label: 'Coronary Interventions' },
    { id: 'structural', label: 'Structural Heart (TAVI)' },
    { id: 'devices', label: 'Cardiac Devices' },
    { id: 'peripheral', label: 'Peripheral Vascular' },
    { id: 'prevention', label: 'Imaging & Prevention' },
  ];

  const procedures = [
    // CORONARY
    {
      category: 'coronary',
      title: 'Coronary Angiography',
      volume: '26,000+ Cases',
      badge: 'Gold Standard Diagnostic',
      desc: 'A detailed evaluation of the coronary arteries to identify blockages and understand coronary anatomy.',
      clinicalDetails: 'High-definition fluoroscopy and digital subtraction angiography to map stenosis severity, bifurcation angles, and coronary collateral circulation.',
      icon: Activity,
      color: 'text-cardio-cyan',
      tagColor: 'border-cardio-cyan/30 bg-cardio-cyan/10 text-cardio-cyan',
    },
    {
      category: 'coronary',
      title: 'Coronary Angioplasty',
      volume: '12,000+ Cases',
      badge: 'Percutaneous Revascularization',
      desc: 'Catheter-based treatment of narrowed or blocked coronary arteries using micro-balloons and state-of-the-art drug-eluting stents (DES).',
      clinicalDetails: 'Minimally invasive arterial restoration via radial or femoral access, restoring physiological myocardial perfusion with minimal downtime.',
      icon: Zap,
      color: 'text-cardio-crimson',
      tagColor: 'border-cardio-crimson/30 bg-cardio-crimson/10 text-cardio-crimson',
    },
    {
      category: 'coronary',
      title: 'Primary PCI for Acute MI',
      volume: 'Emergency 24/7',
      badge: 'Golden Hour STEMI Salvage',
      desc: 'Emergency coronary intervention for patients experiencing acute myocardial infarction (heart attack).',
      clinicalDetails: 'Immediate door-to-balloon time protocol to re-open occluded coronary arteries, rescue ischemic myocardium, and dramatically lower mortality.',
      icon: Heart,
      color: 'text-cardio-ruby',
      tagColor: 'border-cardio-ruby/30 bg-cardio-ruby/10 text-cardio-ruby',
    },
    {
      category: 'coronary',
      title: 'Complex Coronary Interventions',
      volume: 'Specialized Expertise',
      badge: 'High-Risk Cases (CHIP)',
      desc: 'Specialised treatment for technically challenging coronary artery disease including calcified lesions and tortuous vessels.',
      clinicalDetails: 'Utilising rotational atherectomy (rotablation), intravascular lithotripsy (IVL), and specialized micro-catheters for previously deemed untreatable disease.',
      icon: Sliders,
      color: 'text-cardio-accent',
      tagColor: 'border-cardio-accent/30 bg-cardio-accent/10 text-cardio-accent',
    },
    {
      category: 'coronary',
      title: 'Left Main & Bifurcation Stenting',
      volume: 'Precision Anatomy',
      badge: 'Advanced Interventional Skill',
      desc: 'Interventions involving complex coronary anatomy that require careful planning and precise execution.',
      clinicalDetails: 'Provisional stenting, Culotte, DK-crush, and TAP techniques tailored to preserve side branch patency and ensure long-term vessel durability.',
      icon: Disc,
      color: 'text-amber-600',
      tagColor: 'border-amber-500/30 bg-amber-500/10 text-amber-700',
    },
    {
      category: 'coronary',
      title: 'IVUS & OCT Guided Procedures',
      volume: 'Intravascular Vision',
      badge: 'Sub-Millimeter Imaging',
      desc: 'Intravascular imaging techniques that provide detailed cross-sectional information about the coronary artery wall.',
      clinicalDetails: 'Optical Coherence Tomography (OCT) and Intravascular Ultrasound (IVUS) ensure stent apposition, accurate vessel sizing, and minimal edge dissection risk.',
      icon: Eye,
      color: 'text-cardio-cyan',
      tagColor: 'border-cardio-cyan/30 bg-cardio-cyan/10 text-cardio-cyan',
    },
    {
      category: 'coronary',
      title: 'FFR Assessment',
      volume: 'Physiological Guidance',
      badge: 'Fractional Flow Reserve',
      desc: 'Physiological assessment used to help determine the functional significance of intermediate coronary narrowing.',
      clinicalDetails: 'Pressure-wire sensor evaluation to determine whether an anatomical blockage creates actual blood flow restriction, avoiding unnecessary stenting.',
      icon: Activity,
      color: 'text-cardio-teal',
      tagColor: 'border-cardio-teal/30 bg-cardio-teal/10 text-cardio-teal',
    },

    // STRUCTURAL HEART
    {
      category: 'structural',
      title: 'TAVI / TAVR Fellowship Procedure',
      volume: 'Medanta & NY Trained',
      badge: 'Transcatheter Aortic Valve',
      desc: 'Dr. Vijaya Chaitanya has undergone specialised TAVI fellowship training at Medanta, Delhi, as part of his advanced cardiovascular training.',
      clinicalDetails: 'Surgical-grade aortic valve replacement performed via femoral catheterization without open-heart surgery, ideal for severe aortic stenosis.',
      icon: Sparkles,
      color: 'text-cardio-crimson',
      tagColor: 'border-cardio-crimson/30 bg-cardio-crimson/10 text-cardio-crimson',
    },
    {
      category: 'structural',
      title: 'Structural Heart Interventions',
      volume: 'Catheter-Based Valve & Defect Care',
      badge: 'Advanced Structural',
      desc: 'Catheter-based treatment approaches for selected structural heart conditions including ASD/VSD device closures.',
      clinicalDetails: 'Minimally invasive transcatheter closures and valvuloplasties restoring normal intracardiac pressures and circulation.',
      icon: Heart,
      color: 'text-cardio-accent',
      tagColor: 'border-cardio-accent/30 bg-cardio-accent/10 text-cardio-accent',
    },

    // CARDIAC DEVICES
    {
      category: 'devices',
      title: 'Pacemaker Implantation',
      volume: '300+ Implantations',
      badge: 'Bradycardia & Heart Block',
      desc: 'Cardiac pacing for patients who require support for certain heart rhythm disorders and sick sinus syndrome.',
      clinicalDetails: 'Single-chamber, dual-chamber, and physiological conduction bundle branch pacing ensuring physiological synchronization.',
      icon: Radio,
      color: 'text-cardio-teal',
      tagColor: 'border-cardio-teal/30 bg-cardio-teal/10 text-cardio-teal',
    },
    {
      category: 'devices',
      title: 'ICD & CRT Device Therapy',
      volume: '100+ Devices',
      badge: 'Sudden Death Prevention & HF',
      desc: 'Implantable cardiac device therapies for selected patients with specific rhythm and heart failure-related conditions.',
      clinicalDetails: 'Implantable Cardioverter-Defibrillators (ICD) and Cardiac Resynchronization Therapy (CRT-D / CRT-P) for ventricular dyssynchrony.',
      icon: Zap,
      color: 'text-amber-600',
      tagColor: 'border-amber-500/30 bg-amber-500/10 text-amber-700',
    },

    // PERIPHERAL VASCULAR
    {
      category: 'peripheral',
      title: 'Peripheral Vascular Interventions',
      volume: '11,000+ Procedures',
      badge: 'Lower Limb & Renal Revascularization',
      desc: 'Cardiovascular care extends beyond the coronary arteries with more than 11,000 documented peripheral vascular procedures.',
      clinicalDetails: 'Angioplasty and stenting for peripheral artery disease (PAD), critical limb ischemia salvage, carotid artery stenting, and renal artery interventions.',
      icon: ShieldCheck,
      color: 'text-cardio-cyan',
      tagColor: 'border-cardio-cyan/30 bg-cardio-cyan/10 text-cardio-cyan',
    },

    // IMAGING & PREVENTION
    {
      category: 'prevention',
      title: 'Advanced Cardiac Imaging',
      volume: 'Comprehensive Diagnostics',
      badge: 'Multimodality Imaging',
      desc: 'Using cardiovascular imaging to support precision diagnosis, hemodynamic assessment and intervention planning.',
      clinicalDetails: 'Transthoracic echocardiography, transesophageal echo (TEE), stress echocardiography, and coronary CT angiographic analysis.',
      icon: Eye,
      color: 'text-cardio-teal',
      tagColor: 'border-cardio-teal/30 bg-cardio-teal/10 text-cardio-teal',
    },
    {
      category: 'prevention',
      title: 'Preventive Cardiology',
      volume: 'Proactive Longevity',
      badge: 'Risk Stratification',
      desc: 'Identifying cardiovascular risk and working towards reducing the likelihood of future cardiac disease.',
      clinicalDetails: 'Lipidology management, coronary calcium scoring, metabolic syndrome reversal, hypertension optimization, and family history profiling.',
      icon: Heart,
      color: 'text-cardio-crimson',
      tagColor: 'border-cardio-crimson/30 bg-cardio-crimson/10 text-cardio-crimson',
    },
  ];

  const filteredProcedures = activeCategory === 'all'
    ? procedures
    : procedures.filter((p) => p.category === activeCategory);

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-white dark:bg-cardio-dark ecg-grid">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] radial-glow-red pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4" data-aos="fade-up" data-aos-duration="850">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-crimson/30 bg-cardio-crimson/5 text-xs font-mono font-bold text-cardio-crimson uppercase tracking-widest">
            Advanced Interventional Cardiology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            Clinical <span className="text-gradient-crimson">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-light italic">
            “Treating the heart requires understanding what lies beneath the image.”
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Dr. Vijaya Chaitanya's practice covers a broad range of interventional and cardiovascular procedures, executed with cutting-edge technology and clinical deliberation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                activeCategory === cat.id
                  ? 'bg-cardio-crimson text-white border-cardio-crimson shadow-md font-bold'
                  : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-400 hover:border-cardio-crimson/40 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Procedures Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProcedures.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.title}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-cardio-crimson/40 shadow-sm hover:shadow-md flex flex-col justify-between group cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedProcedure(item)}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 ${item.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${item.tagColor}`}>
                        {item.volume}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1 font-semibold">
                      {item.badge}
                    </span>

                    <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-cardio-crimson transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono text-cardio-crimson group-hover:text-cardio-ruby transition-colors">
                    <span className="flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cardio-teal" />
                      <span>Clinical Approach</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px] underline underline-offset-4 font-bold">
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Procedure Detail Modal */}
        <AnimatePresence>
          {selectedProcedure && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-xl p-8 rounded-3xl bg-white dark:bg-cardio-dark border border-slate-200 dark:border-cardio-cyan/40 shadow-2xl space-y-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProcedure(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${selectedProcedure.tagColor}`}>
                    {selectedProcedure.volume}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {selectedProcedure.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                    {selectedProcedure.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
                    {selectedProcedure.desc}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2">
                  <h4 className="text-xs font-mono text-cardio-crimson uppercase tracking-wider font-bold">
                    Interventional Protocol & Technique:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    {selectedProcedure.clinicalDetails}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setSelectedProcedure(null);
                      if (onOpenAppointment) onOpenAppointment();
                    }}
                    className="btn btn-sm bg-cardio-crimson text-white rounded-xl font-mono text-xs shadow-md hover:bg-cardio-ruby"
                  >
                    Consult Dr. Vijaya Chaitanya
                  </button>
                  <button
                    onClick={() => setSelectedProcedure(null)}
                    className="btn btn-sm btn-ghost text-slate-600 hover:text-slate-900 text-xs font-mono"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
