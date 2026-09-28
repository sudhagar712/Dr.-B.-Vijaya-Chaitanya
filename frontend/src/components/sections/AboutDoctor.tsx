import React, { useState } from 'react';
import { Award, BookOpen, HeartHandshake, Stethoscope, CheckCircle, ShieldCheck, UserCheck, Calendar } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle Cardiovascular Line Background Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cardioLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E63946" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#0077B6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 Q300,40 600,160 T1200,80 T1800,200"
            fill="none"
            stroke="url(#cardioLineGrad)"
            strokeWidth="2.5"
            strokeDasharray="8 6"
          />
          <path
            d="M-200,320 Q400,220 800,380 T1600,280"
            fill="none"
            stroke="url(#cardioLineGrad)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-cardio-red text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Cardiologist Profile</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            Committed to Better Heart Health
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Providing comprehensive, personalized cardiology care rooted in the latest clinical guidelines and genuine patient empathy.
          </p>
        </div>

        {/* Split Layout: Left Doctor Portrait / Right Bio & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Portrait + Clinical Accreditations Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Accent Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cardio-red/20 via-blue-500/10 to-transparent rounded-3xl blur-xl" />

              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200/90 shadow-2xl">
                {!imageError ? (
                  <img
                    src="/images/doctor-portrait.jpg"
                    alt="Dr. B. Vijaya Chaitanya - Cardiologist & Heart Care Specialist"
                    className="w-full h-auto object-cover object-top aspect-[3/4] hover:scale-103 transition-transform duration-700"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* High-end SVG Medical Illustration Fallback if local image path is not yet copied */
                  <div className="w-full aspect-[3/4] bg-gradient-to-b from-navy-900 to-navy-800 p-8 flex flex-col items-center justify-between text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-ecg-grid-dark" />
                    <div className="w-24 h-24 rounded-full bg-cardio-red/20 border-2 border-cardio-red/60 flex items-center justify-center my-auto">
                      <Stethoscope className="w-12 h-12 text-cardio-pulse" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-display text-2xl font-bold">Dr. B. Vijaya Chaitanya</h4>
                      <p className="text-xs text-slate-300 font-mono mt-1">Cardiologist & Heart Care Specialist</p>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">
                      [Clinical Portrait Placeholder]
                    </p>
                  </div>
                )}

                {/* Subtle Gradient Overlay on Bottom of Image */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent pointer-events-none" />

                {/* Identification Ribbon inside Photo */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <p className="text-lg font-bold font-display tracking-tight leading-snug">
                    Dr. B. Vijaya Chaitanya
                  </p>
                  <p className="text-xs text-slate-300 font-medium">
                    Consultant Cardiologist & Heart Specialist
                  </p>
                </div>
              </div>

              {/* Floating Clinical Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/90 flex items-center gap-3.5 z-20">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-cardio-red">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Cardiology Experience</p>
                  <p className="text-sm font-extrabold text-navy-950 font-display">
                    [Years of Practice Placeholder]
                  </p>
                  <p className="text-[11px] text-slate-500">Dedicated Cardiovascular Care</p>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-slate-200/80 flex items-center gap-2 z-20">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-slate-800">Patient-First Philosophy</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Qualifications, Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Biography */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-900">
                Comprehensive, Compassionate Cardiovascular Care
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dr. B. Vijaya Chaitanya is a dedicated cardiologist specializing in the diagnosis, medical management, and prevention of complex cardiovascular conditions. With a strong commitment to evidence-based medicine and clinical excellence, Dr. Chaitanya provides patients with personalized treatment strategies designed to optimize long-term heart health.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether diagnosing subtle arrhythmias, managing persistent hypertension, evaluating coronary artery disease, or guiding cardiac rehabilitation, every clinical decision is grounded in empathy, thorough investigation, and patient education.
              </p>
            </div>

            {/* Qualifications & Medical Training (Explicit Editable Placeholders) */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-cardio-red" />
                <span>Qualifications & Medical Credentials</span>
                <span className="ml-auto text-[10px] text-slate-400 font-mono">[Editable Placeholder]</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">[MD / Medical Degree Placeholder]</p>
                    <p className="text-slate-500">[Institution & University Placeholder]</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">[DM - Cardiology / Fellowship Placeholder]</p>
                    <p className="text-slate-500">[Specialized Cardiology Institute Placeholder]</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">[Cardiology Society Membership Placeholder]</p>
                    <p className="text-slate-500">[National / International Heart Association]</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">[Advanced Cardiac Care Training Placeholder]</p>
                    <p className="text-slate-500">[Non-Invasive / Interventional Clinical Fellowship]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient-Focused Philosophy Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cardio-lightRed/50 to-white border border-cardio-red/20 space-y-2">
              <div className="flex items-center gap-2 text-cardio-red font-bold text-xs uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Patient-Focused Philosophy</span>
              </div>
              <p className="text-slate-700 text-sm italic leading-relaxed">
                &ldquo;Every patient has a unique cardiovascular story. My approach combines rigorous clinical diagnostic precision with the time to listen, explain medical findings in simple terms, and design care plans that respect each patient&rsquo;s lifestyle and goals.&rdquo;
              </p>
              <p className="text-xs font-semibold text-navy-950 font-display pt-1">
                — Dr. B. Vijaya Chaitanya
              </p>
            </div>

            {/* Core Care Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { title: 'Listening', subtitle: 'Patient Concerns' },
                { title: 'Evaluation', subtitle: 'Evidence-Based' },
                { title: 'Prevention', subtitle: 'Proactive Health' },
                { title: 'Follow-Up', subtitle: 'Ongoing Support' },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs"
                >
                  <p className="text-xs font-bold text-navy-950">{pillar.title}</p>
                  <p className="text-[11px] text-slate-500">{pillar.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Book Appointment CTA */}
            <div className="pt-3 flex items-center gap-4">
              <MagneticButton
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold tracking-wide shadow-md transition-all flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule a Consultation</span>
              </MagneticButton>

              <a
                href="#treatments"
                className="text-xs font-semibold text-slate-600 hover:text-cardio-red transition-colors underline-offset-4 hover:underline"
              >
                View Diagnostic Services →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
