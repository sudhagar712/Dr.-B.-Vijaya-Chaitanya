import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ShieldAlert, Cpu, HeartPulse, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ComplexCaseSection({ onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState(0);

  const complexScenarios = [
    {
      title: 'Left Main & Bifurcation Stenting',
      subtitle: 'Critical Anatomical Nexus',
      challenge: 'The Left Main artery supplies over 75% of left ventricular myocardium. Stenosis here is high-risk and traditionally required CABG open-heart surgery.',
      solution: 'Precision bifurcation techniques (DK-Crush, Culotte, or TAP) combined with mandatory high-definition IVUS / OCT imaging to ensure zero stent under-expansion and pristine ostial positioning.',
      stats: 'Proven long-term vessel patency and physiological restoration without open thoracic sternotomy.',
    },
    {
      title: 'Calcified & Tortuous Coronaries (CHIP)',
      subtitle: 'Complex Higher-Risk Indicated Patients',
      challenge: 'Severe circumferential vascular calcification prevents standard angioplasty balloons from crossing or fully expanding.',
      solution: 'State-of-the-art lesion preparation via Rotational Atherectomy (diamond-tipped rotablator drill) and Intravascular Lithotripsy (IVL sonic pressure waves) to fracture deep calcium before stenting.',
      stats: 'Transforms inoperable calcified blockages into cleanly revascularized arteries.',
    },
    {
      title: 'Primary PCI during Acute MI',
      subtitle: 'Emergency STEMI Salvage',
      challenge: 'Acute thrombotic occlusion causing ongoing myocardial necrosis where every minute lost equates to irreversible muscle death.',
      solution: 'Immediate 24/7 activation of the Medstar Cath Lab team with radial artery primary PCI, thrombus aspiration, and immediate restoration of TIMI-3 flow.',
      stats: 'Rapid Door-to-Balloon times, minimizing infarct size and cardiac arrest risk.',
    },
    {
      title: 'Structural Heart (TAVI/TAVR)',
      subtitle: 'Transcatheter Valve Replacement',
      challenge: 'Severe symptomatic aortic stenosis in elderly, frail, or high surgical risk patients who cannot tolerate open heart cardiopulmonary bypass.',
      solution: 'Per-cutaneous delivery of an expandable bioprosthetic aortic valve through a simple groin puncture under fluoroscopic guidance.',
      stats: 'Trained at Medanta Delhi & Mount Sinai NY; enabling next-day mobilization and rapid recovery.',
    },
  ];

  const expertItems = [
    'Complex Coronary Interventions',
    'Primary PCI for Acute Myocardial Infarction',
    'Left Main & Bifurcation Stenting',
    'IVUS / OCT Guided Procedures',
    'FFR Assessment',
    'Structural Heart Interventions',
    'Peripheral Vascular Interventions',
    'Pacemaker Implantation',
    'ICD & CRT Implantation',
    'Advanced Cardiac Imaging',
    'Preventive Cardiology',
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-cardio-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-red pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4" data-aos="fade-up" data-aos-duration="850">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-crimson/30 bg-cardio-crimson/5 text-xs font-mono font-bold text-cardio-crimson uppercase tracking-widest">
            Deliberate Strategy Under Pressure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            When the Case is <span className="text-gradient-crimson">Complex</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Some cardiovascular conditions require more than a standard approach. When anatomy is challenging or patient risk is high, deliberate interventional planning and advanced tooling make all the difference.
          </p>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Checklist of Clinical Expertise */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col justify-between" data-aos="fade-right" data-aos-duration="850">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cardio-cyan font-bold block mb-4">
                Clinical Expertise Highlights
              </span>
              <div className="space-y-3">
                {expertItems.map((item, idx) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="h-6 w-6 rounded-lg bg-cardio-crimson/10 border border-cardio-crimson/25 flex items-center justify-center text-cardio-crimson shrink-0 group-hover:bg-cardio-crimson group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10">
              <a
                href="#expertise"
                className="btn btn-sm w-full bg-gradient-to-r from-cardio-crimson to-cardio-ruby text-white border-none rounded-xl font-mono text-xs gap-2 shadow-md hover:from-cardio-ruby hover:to-cardio-crimson"
              >
                <span>View Complete Clinical Expertise</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Interactive Complex Clinical Scenarios Navigator */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6" data-aos="fade-left" data-aos-duration="850" data-aos-delay="100">
            
            {/* Scenario Tabs */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {complexScenarios.map((sc, idx) => (
                <button
                  key={sc.title}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono transition-all text-left border ${
                    activeTab === idx
                      ? 'bg-cardio-crimson text-white border-cardio-crimson shadow-md font-bold'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <span className="block truncate font-heading">{sc.title}</span>
                </button>
              ))}
            </div>

            {/* Scenario Detail Card */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-cardio-cyan/30 shadow-md flex-1 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-700 dark:text-cardio-gold font-bold tracking-widest uppercase">
                    {complexScenarios[activeTab].subtitle}
                  </span>
                  <div className="h-8 w-8 rounded-xl bg-cardio-crimson/10 border border-cardio-crimson/25 flex items-center justify-center text-cardio-crimson">
                    <HeartPulse className="w-4 h-4 animate-pulse" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                  {complexScenarios[activeTab].title}
                </h3>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-cardio-dark/80 border border-cardio-crimson/20 space-y-1">
                  <span className="text-[11px] font-mono text-cardio-crimson uppercase tracking-wider font-bold">
                    Clinical Challenge:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {complexScenarios[activeTab].challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-cardio-dark/80 border border-cardio-teal/20 space-y-1">
                  <span className="text-[11px] font-mono text-cardio-teal uppercase tracking-wider font-bold">
                    Interventional Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {complexScenarios[activeTab].solution}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                  {complexScenarios[activeTab].stats}
                </span>
                <button
                  onClick={onOpenAppointment}
                  className="btn btn-xs bg-cardio-crimson text-white font-mono font-bold hover:bg-cardio-ruby"
                >
                  Consult Case
                </button>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
