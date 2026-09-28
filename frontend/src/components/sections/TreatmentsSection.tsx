import React, { useState } from 'react';
import {
  Stethoscope,
  Activity,
  Radio,
  Gauge,
  Droplets,
  Heart,
  GitPullRequest,
  Clock,
  Calendar,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

interface TreatmentItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  description: string;
  duration: string;
  preparation: string;
  features: string[];
}

interface TreatmentsSectionProps {
  onOpenBooking: () => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('cardiac-consultation');
  const [clinicImgError, setClinicImgError] = useState(false);

  const treatments: TreatmentItem[] = [
    {
      id: 'cardiac-consultation',
      name: 'Cardiac Consultation',
      category: 'Diagnostic & Clinical',
      icon: Stethoscope,
      description:
        'A comprehensive 360-degree cardiovascular assessment covering past medical history, family cardiac lineage, physical examination, heart sound auscultation, and dedicated patient Q&A.',
      duration: '45 - 60 Mins',
      preparation: 'Bring all past medical records, ECG strips, medication lists, and blood test reports.',
      features: [
        'Detailed cardiac symptom review & history',
        'Physical cardiovascular exam & murmurs auscultation',
        'Direct discussion with Dr. B. Vijaya Chaitanya',
        'Personalized diagnostic & treatment roadmap',
      ],
    },
    {
      id: 'ecg-evaluation',
      name: 'ECG Evaluation',
      category: 'Diagnostic & Clinical',
      icon: Activity,
      description:
        'High-precision 12-lead Electrocardiogram (ECG) recording and immediate expert interpretation to identify conduction blocks, ischemic ST changes, arrhythmias, and ventricular hypertrophy.',
      duration: '15 - 20 Mins',
      preparation: 'Wear comfortable loose-fitting clothing. Avoid heavy caffeine immediately prior to the test.',
      features: [
        'Instant 12-lead digital rhythm acquisition',
        'ST-segment ischemia & infarction assessment',
        'Arrhythmia & conduction defect analysis',
        'Comparison with prior baseline tracings',
      ],
    },
    {
      id: 'echocardiography',
      name: 'Echocardiography',
      category: 'Advanced Imaging',
      icon: Radio,
      description:
        'Advanced 2D Doppler and Color Flow Transthoracic Echocardiogram visualizing real-time heart wall motion, chamber dimensions, valvular regurgitation/stenosis, and left ventricular ejection fraction (LVEF).',
      duration: '30 - 40 Mins',
      preparation: 'No fasting required. Comfortable two-piece clothing recommended.',
      features: [
        'Real-time myocardial contractility assessment',
        'Left & Right Ventricular Ejection Fraction (EF)',
        'Valvular hemodynamics & color Doppler flow',
        'Pericardial effusion & pulmonary pressure evaluation',
      ],
    },
    {
      id: 'hypertension-care',
      name: 'Hypertension Care',
      category: 'Chronic Care',
      icon: Gauge,
      description:
        'Dedicated arterial health management for patients with fluctuating, primary, or refractory high blood pressure. Focuses on target organ protection (heart, kidneys, eyes, cerebral vasculature).',
      duration: 'Ongoing Monitoring',
      preparation: 'Maintain a 7-day home blood pressure log before your appointment if feasible.',
      features: [
        'Ambulatory BP protocol review',
        'Target organ damage screening',
        'Combination pharmacological titration',
        'Dietary sodium & vascular stiffness optimization',
      ],
    },
    {
      id: 'cholesterol-management',
      name: 'Cholesterol Management',
      category: 'Preventive',
      icon: Droplets,
      description:
        'Targeted dyslipidemia intervention targeting LDL-C, Non-HDL, Apolipoprotein B, and Lipoprotein(a). Personalized medication regimens balancing statins, ezetimibe, or PCSK9 inhibitors.',
      duration: '30 Mins Consultation',
      preparation: 'Overnight 10-12 hour fasting required for fasting lipid panel blood draw.',
      features: [
        'Atherogenic particle count (ApoB & Lp(a))',
        'Personalized LDL reduction targets',
        'Statin intolerance management alternatives',
        'Long-term plaque stabilization strategy',
      ],
    },
    {
      id: 'preventive-heart-care',
      name: 'Preventive Heart Care',
      category: 'Preventive',
      icon: Heart,
      description:
        'Evidence-based primary prevention for asymptomatic individuals wanting to assess lifetime cardiovascular risk, coronary calcification risk, and formulate preventative lifestyle protection.',
      duration: '45 Mins',
      preparation: 'Complete health questionnaire covering family pedigree and lifestyle habits.',
      features: [
        'AHA / ESC Cardiovascular risk score stratification',
        'Coronary calcium score (CAC) recommendation',
        'Metabolic syndrome & insulin resistance check',
        'Structured cardiovascular exercise prescription',
      ],
    },
    {
      id: 'heart-disease-management',
      name: 'Heart Disease Management',
      category: 'Chronic Care',
      icon: GitPullRequest,
      description:
        'Comprehensive clinical coordination for coronary artery disease, prior myocardial infarction, post-angioplasty stent maintenance, and cardiomyopathy stabilization.',
      duration: 'Comprehensive Review',
      preparation: 'Bring stent implant cards, discharge summaries, and current medication blister packs.',
      features: [
        'Antiplatelet & anticoagulant therapy review',
        'Ischemia monitoring & exertion tolerance testing',
        'Secondary prevention risk factor management',
        'Cardiac rehabilitation pathway guidance',
      ],
    },
    {
      id: 'follow-up-care',
      name: 'Follow-up & Long-term Care',
      category: 'Chronic Care',
      icon: Clock,
      description:
        'Structured longitudinal surveillance ensuring treatment efficacy, monitoring laboratory safety parameters, adjusting drug dosages, and maintaining lifelong cardiovascular wellness.',
      duration: '20 - 30 Mins',
      preparation: 'Recent follow-up blood test reports and home vitals log.',
      features: [
        'Medication efficacy & tolerance surveillance',
        'Renal function & electrolyte safety monitoring',
        'Symptom trajectory & functional status check',
        'Ongoing access to clinical guidance',
      ],
    },
  ];

  const currentTreatment = treatments.find((t) => t.id === selectedTreatment) || treatments[0];

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-navy-900 text-xs font-semibold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-cardio-red" />
            <span>Clinical Treatments & Diagnostics</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            Comprehensive Cardiology Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From preliminary non-invasive diagnostics to lifelong cardiovascular disease management, every treatment is delivered with uncompromising clinical precision.
          </p>
        </div>

        {/* Clinic Suite Visual Showcase Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-navy-950 text-white relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cardio-red/20 border border-cardio-red/40 text-cardio-pulse text-xs font-semibold">
                <span>State-of-the-Art Cardiovascular Diagnostic Suite</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Modern Diagnostics in an Unhurried, Dignified Setting
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Diagnostic accuracy is the foundation of effective cardiology. Dr. B. Vijaya Chaitanya utilizes advanced non-invasive cardiac evaluation technologies, ensuring every heartbeat, waveform, and echocardiographic image is examined in detail.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Digital 12-Lead ECG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>2D Doppler Echo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Cardiometabolic Risk</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[300px]">
              {!clinicImgError ? (
                <img
                  src="/images/clinic-suite.jpg"
                  alt="Modern Cardiology Consultation and Diagnostic Suite"
                  className="w-full h-full object-cover"
                  onError={() => setClinicImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8 text-center text-slate-400 text-xs">
                  <span>[Diagnostic Consultation Suite Visual]</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-950/80 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Interactive Treatment Explorer: Horizontal Selector & Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Treatment Navigation Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            {treatments.map((treatment) => {
              const Icon = treatment.icon;
              const isSelected = selectedTreatment === treatment.id;
              return (
                <button
                  key={treatment.id}
                  onClick={() => setSelectedTreatment(treatment.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-navy-900 text-white border-navy-900 shadow-md translate-x-1'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-cardio-red text-white'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold font-display ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {treatment.name}
                      </p>
                      <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {treatment.category}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cardio-pulse translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Treatment Deep Dive */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-glass">
            
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-cardio-red flex items-center justify-center">
                  <currentTreatment.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-cardio-red font-mono">
                    {currentTreatment.category}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-navy-950">
                    {currentTreatment.name}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                {currentTreatment.duration}
              </span>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Clinical Scope & Description
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {currentTreatment.description}
                </p>
              </div>

              {/* Clinical Procedures Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  What This Service Entails
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentTreatment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-800"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patient Preparation Guidance */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
                <p className="font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 text-amber-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Patient Preparation Guidelines</span>
                </p>
                <p className="text-amber-800/90">{currentTreatment.preparation}</p>
              </div>
            </div>

            {/* Bottom Booking Trigger */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-700">Ready to consult with Dr. B. Vijaya Chaitanya?</p>
                <p className="text-[11px] text-slate-500">In-clinic appointments scheduled with dedicated consultation time.</p>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-cardio-red hover:bg-cardio-crimson text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
