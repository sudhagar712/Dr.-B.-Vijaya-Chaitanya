import React, { useState } from 'react';
import {
  ShieldCheck,
  Stethoscope,
  HeartCrack,
  Activity,
  GitBranch,
  Gauge,
  Flame,
  Apple,
  ChevronRight,
  Sparkles,
  X,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  indicators: string[];
  diagnosticFocus: string;
  badge: string;
}

interface ExpertiseSectionProps {
  onOpenBooking: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onOpenBooking }) => {
  const [selectedExpertise, setSelectedExpertise] = useState<ExpertiseItem | null>(null);

  const specialties: ExpertiseItem[] = [
    {
      id: 'preventive',
      title: 'Preventive Cardiology',
      subtitle: 'Early Detection & Risk Modification',
      icon: ShieldCheck,
      description:
        'Proactive cardiovascular risk assessment focusing on advanced lipid profiling, atherosclerosis screening, and personalized cardiovascular risk score calculations before cardiac symptoms manifest.',
      indicators: ['Family history of premature heart disease', 'Elevated LDL / ApoB cholesterol', 'High Lipoprotein(a)', 'Metabolic syndrome'],
      diagnosticFocus: 'Advanced Lipid Panel, Coronary Calcium Scoring (CAC), Carotid Intima-Media Thickness',
      badge: 'Proactive Care',
    },
    {
      id: 'interventional',
      title: 'Interventional Cardiology',
      subtitle: 'Coronary Evaluation & Stenting Guidance',
      icon: Stethoscope,
      description:
        'Expert clinical assessment for patients requiring or recovering from coronary angiography, percutaneous coronary intervention (PCI/stents), and complex structural cardiac evaluations.',
      indicators: ['Angina (chest tightness on exertion)', 'Abnormal treadmill test (TMT)', 'Positive myocardial perfusion scan', 'Post-stent follow-up'],
      diagnosticFocus: 'Coronary Angiography Review, Fractional Flow Reserve (FFR), Optical Coherence Tomography (OCT)',
      badge: 'Precision Procedures',
    },
    {
      id: 'heart-failure',
      title: 'Heart Failure Management',
      subtitle: 'Guideline-Directed Medical Therapy',
      icon: HeartCrack,
      description:
        'Comprehensive clinical management of Heart Failure with reduced (HFrEF) or preserved (HFpEF) ejection fraction, utilizing modern quadruple therapy to restore quality of life and reduce hospitalizations.',
      indicators: ['Shortness of breath lying flat (orthopnea)', 'Swelling in ankles / lower limbs', 'Unexplained fatigue on exertion', 'Elevated BNP / NT-proBNP'],
      diagnosticFocus: '2D Doppler Echocardiography, Strain Imaging, Hemodynamic Optimization, GDMT Titration',
      badge: 'Advanced Protocol',
    },
    {
      id: 'hypertension',
      title: 'Hypertension Management',
      subtitle: 'Vascular & Arterial Pressure Control',
      icon: Gauge,
      description:
        'Specialized evaluation of essential, resistant, and secondary hypertension. In-depth investigation into renovascular, endocrine, and lifestyle etiologies with tailored multi-mechanism pharmacological protocols.',
      indicators: ['Blood pressure consistently > 130/80 mmHg', 'Resistant to 2+ anti-hypertensive drugs', 'Hypertension in young adults', 'Morning headaches / dizziness'],
      diagnosticFocus: '24-Hour Ambulatory Blood Pressure Monitoring (ABPM), Renal Doppler, Secondary Endocrine Screening',
      badge: 'Vascular Health',
    },
    {
      id: 'cad',
      title: 'Coronary Artery Disease',
      subtitle: 'Atherosclerosis & Plaque Stabilization',
      icon: GitBranch,
      description:
        'Dedicated care for stable ischemic heart disease, microvascular angina, and chronic coronary syndromes. Emphasizing plaque stabilization, ischemic burden mitigation, and cardiac rehabilitation.',
      indicators: ['Exertional chest discomfort or radiating arm pain', 'Shortness of breath with minimal exertion', 'Known coronary artery stenosis', 'Post-CABG surgery follow-up'],
      diagnosticFocus: 'Stress Echocardiography, CT Coronary Angiogram (CTCA), Nuclear Perfusion Imaging',
      badge: 'Ischemic Health',
    },
    {
      id: 'risk-assessment',
      title: 'Cardiac Risk Assessment',
      subtitle: 'Comprehensive Pre-Operative & Health Stratification',
      icon: Activity,
      description:
        'Thorough cardiovascular risk stratification for individuals planning intensive exercise regimens, corporate executives, or patients scheduled for non-cardiac major surgical interventions.',
      indicators: ['Pre-operative cardiovascular clearance', 'Master health check-up abnormal findings', 'Starting vigorous athletic training over age 40', 'Multiple metabolic risk factors'],
      diagnosticFocus: 'Resting 12-Lead ECG, Transthoracic Echocardiogram, Functional Capacity Assessment (METs)',
      badge: 'Stratification',
    },
    {
      id: 'arrhythmia',
      title: 'Arrhythmia Management',
      subtitle: 'Palpitation, Syncope & Rhythm Evaluation',
      icon: Flame,
      description:
        'Accurate diagnostic investigation of cardiac rhythm irregularities including Atrial Fibrillation (AFib), premature ventricular contractions (PVCs), bradycardia, tachycardia, and transient loss of consciousness (syncope).',
      indicators: ['Fluttering or racing sensation in chest', 'Skipped beats or sudden pauses', 'Unexplained episodes of fainting or near-fainting', 'Pulse irregularities'],
      diagnosticFocus: 'Holter 24/48-Hour Monitoring, Extended Patch Telemetry, Event Recorders, Electrolyte Analysis',
      badge: 'Rhythm Analysis',
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Heart Health',
      subtitle: 'Cardiometabolic Nutrition & Exercise Prescriptions',
      icon: Apple,
      description:
        'Evidence-backed integration of cardioprotective Mediterranean nutrition, structured aerobic / resistance exercise prescriptions, restorative sleep hygiene, and stress-reduction cardiometabolic protocols.',
      indicators: ['Elevated HbA1c / Prediabetes', 'Sedentary desk lifestyle', 'High chronic work stress / elevated resting heart rate', 'Weight management support'],
      diagnosticFocus: 'Cardiorespiratory Fitness (VO2 max estimation), Body Composition Analysis, Heart Rate Variability (HRV)',
      badge: 'Holistic Care',
    },
  ];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-cardio-red text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cardiovascular Domains</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            Specialized Cardiovascular Expertise
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Targeted clinical domains spanning preventive diagnostics, acute coronary management, rhythm evaluations, and long-term cardiometabolic wellness.
          </p>
        </div>

        {/* 8 Expertise Cards Grid with 3D Tilt & Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedExpertise(item)}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200/90 shadow-glass hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 hover:border-cardio-red/40"
              >
                {/* Glow border gradient effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cardio-red/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Top Badge & Minimal Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-navy-900 group-hover:bg-red-50 group-hover:text-cardio-red group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-red-100/60 group-hover:text-cardio-red transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-cardio-red transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5 mb-3 font-sans">
                    {item.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-cardio-red transition-colors">
                  <span>Clinical Details</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-cardio-red group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Prompt Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display">
              Uncertain which consultation aligns with your symptoms?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our clinical desk will evaluate your requirements and schedule the appropriate diagnostic workup.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-cardio-red hover:bg-cardio-crimson text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Request Clinical Appointment</span>
          </button>
        </div>

      </div>

      {/* Expertise Detail Modal */}
      {selectedExpertise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-md">
          <div
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8 bg-gradient-to-r from-navy-900 to-navy-800 text-white relative">
              <button
                onClick={() => setSelectedExpertise(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-cardio-pulse text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selectedExpertise.badge}</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white">{selectedExpertise.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">{selectedExpertise.subtitle}</p>
            </div>

            <div className="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Clinical Overview</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{selectedExpertise.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Common Clinical Indications</h4>
                <div className="space-y-1.5">
                  {selectedExpertise.indicators.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-1">Diagnostic Modalities Utilized</h4>
                <p className="text-xs text-slate-600">{selectedExpertise.diagnosticFocus}</p>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedExpertise(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedExpertise(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-cardio-red hover:bg-cardio-crimson text-white text-xs font-semibold shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation for this Specialty</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
