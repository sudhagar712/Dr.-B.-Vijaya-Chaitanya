import React from 'react';
import { Ear, Search, HeartPulse, RefreshCw, Shield, Heart, CheckCircle2, Calendar } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface PatientCareSectionProps {
  onOpenBooking: () => void;
}

export const PatientCareSection: React.FC<PatientCareSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Listening to Patients',
      subtitle: 'Understanding Beyond Symptoms',
      desc: 'We begin by giving you undivided time to describe your sensations, lifestyle stresses, family history, and personal concerns without feeling rushed.',
      icon: Ear,
      color: 'text-cardio-red',
      bg: 'bg-red-50 border-red-100',
    },
    {
      num: '02',
      title: 'Detailed Evaluation',
      subtitle: 'Diagnostic Investigation',
      desc: 'Utilizing non-invasive diagnostic tools including 12-lead ECG, 2D Doppler echocardiography, and targeted biomarkers to identify root causes with precision.',
      icon: Search,
      color: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-100',
    },
    {
      num: '03',
      title: 'Personalized Treatment Planning',
      subtitle: 'Shared Decision-Making',
      desc: 'Explaining options in transparent, understandable language. We collaboratively design a medical and lifestyle regimen customized to your body.',
      icon: HeartPulse,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-100',
    },
    {
      num: '04',
      title: 'Continuous Follow-up',
      subtitle: 'Longitudinal Support',
      desc: 'Heart wellness is an ongoing journey. We provide regular blood pressure reviews, drug safety monitoring, and dosage optimizations.',
      icon: RefreshCw,
      color: 'text-purple-600',
      bg: 'bg-purple-50 border-purple-100',
    },
    {
      num: '05',
      title: 'Preventive Care',
      subtitle: 'Protecting the Future',
      desc: 'Empowering you with cardioprotective dietary habits, safe aerobic fitness guidelines, and stress mitigation protocols to prevent future cardiac events.',
      icon: Shield,
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-100',
    },
  ];

  return (
    <section id="patient-care" className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden">
      {/* Subtle Glowing Heart Graphic in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-cardio-red text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-cardio-red animate-heartbeat" />
            <span>Patient-First Philosophy</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            Your Heart Deserves Personalized Care
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We believe that extraordinary cardiovascular outcomes are achieved when clinical precision meets genuine human connection and attentiveness.
          </p>
        </div>

        {/* The 5 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-6 border border-slate-200/90 shadow-glass hover:shadow-premium transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-slate-200 group-hover:text-cardio-red/40 transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${step.bg} border flex items-center justify-center ${step.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold font-display text-navy-950 mb-1 group-hover:text-cardio-red transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warm Patient Promise Highlight Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-premium flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cardio-lightRed border border-cardio-red/20 flex items-center justify-center text-cardio-red shrink-0 shadow-xs">
              <Heart className="w-7 h-7 fill-cardio-red animate-heartbeat" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-bold font-display text-navy-950">
                A Reassuring, Dignified Clinical Environment
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visiting a cardiologist can sometimes feel overwhelming. Dr. B. Vijaya Chaitanya and the entire clinical coordination staff strive to provide a calm, welcoming, and reassuring atmosphere where your questions are answered clearly.
              </p>
            </div>
          </div>

          <MagneticButton
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-2xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Dr. Chaitanya</span>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
