import React from 'react';
import { GraduationCap, Award, Stethoscope, Briefcase, HeartPulse, Sparkles, Building2, MapPin } from 'lucide-react';

interface TimelineMilestone {
  stage: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
}

export const TimelineSection: React.FC = () => {
  const milestones: TimelineMilestone[] = [
    {
      stage: '01. Medical Education',
      title: 'Undergraduate Medical Degree (MBBS)',
      institution: '[Medical College / University - Editable Placeholder]',
      location: '[City / State Placeholder]',
      period: '[Graduation Year Placeholder]',
      description:
        'Completed comprehensive foundational medical education with distinction in internal medicine, physiology, and pathology, laying the groundwork for specialized cardiovascular training.',
      icon: GraduationCap,
      highlights: ['Academic Excellence in Internal Medicine', 'Comprehensive Clinical Rotations', 'Undergraduate Research in Hemodynamics'],
    },
    {
      stage: '02. Clinical Training',
      title: 'Postgraduate Residency (MD - General Medicine)',
      institution: '[Teaching Hospital / Medical Institute - Editable Placeholder]',
      location: '[City / State Placeholder]',
      period: '[Residency Period Placeholder]',
      description:
        'Rigorous multi-year residency managing acute medical intensive care, critical care emergencies, complex multi-organ pathologies, and intensive inpatient cardiology care.',
      icon: Award,
      highlights: ['Medical Intensive Care Unit (MICU) Management', 'Bedside Hemodynamic Monitoring', 'Acute Coronary Syndrome Resuscitation'],
    },
    {
      stage: '03. Specialized Fellowship',
      title: 'Super-Specialty Cardiology (DM / DNB / Fellowship)',
      institution: '[Apex Cardiology Institute / Heart Center - Editable Placeholder]',
      location: '[City / State Placeholder]',
      period: '[Fellowship Period Placeholder]',
      description:
        'Advanced sub-specialty training in clinical cardiology, invasive catheterization lab protocols, complex echocardiography, and evidence-based heart failure regimens.',
      icon: Stethoscope,
      highlights: ['Diagnostic Coronary Angiography', '2D Doppler & Strain Echocardiography', 'Cardiac Electrophysiology Foundations'],
    },
    {
      stage: '04. Professional Experience',
      title: 'Specialized Clinical & Interventional Practice',
      institution: '[Major Tertiary Care Hospital - Editable Placeholder]',
      location: '[City / State Placeholder]',
      period: '[Experience Period Placeholder]',
      description:
        'Extensive tertiary hospital clinical experience supervising non-invasive cardiology laboratories, inpatient coronary care units, and conducting specialized outpatient clinics.',
      icon: Briefcase,
      highlights: ['Coronary Care Unit (CCU) Supervision', 'Comprehensive Cardiac Risk Assessments', 'Interdisciplinary Surgical Clearance'],
    },
    {
      stage: '05. Current Practice',
      title: 'Consultant Cardiologist & Heart Specialist',
      institution: '[Cardiology Suite / Medical Center - Editable Placeholder]',
      location: '[City / State Placeholder]',
      period: 'Present Day',
      description:
        'Currently dedicated to providing personalized, patient-first cardiology consultations, advanced preventive screening, and comprehensive cardiovascular disease management.',
      icon: HeartPulse,
      highlights: ['Personalized Outpatient Consultations', 'Preventive Cardiology Program', 'Long-Term Cardiac Wellness Monitoring'],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-cardio-red text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Milestones</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            Professional Journey & Training
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A continuous trajectory of rigorous clinical education, super-specialty cardiology training, and dedicated patient care.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Central Glowing Vertical Track (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cardio-red via-blue-500 to-slate-200 rounded-full" />

          {/* Left Vertical Track (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-cardio-red via-blue-500 to-slate-200 rounded-full" />

          <div className="space-y-12 sm:space-y-16">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border-2 border-cardio-red shadow-cardio-glow flex items-center justify-center z-10 text-cardio-red">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Spacer for Alternate Desktop Layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Milestone Card Content */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div
                      className={`p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-glass hover:shadow-premium transition-all duration-300 ${
                        isEven ? 'md:text-left' : 'md:text-left'
                      }`}
                    >
                      {/* Stage & Period Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cardio-red">
                          {item.stage}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200 text-xs font-mono font-semibold">
                          {item.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-display text-navy-950 mb-1">
                        {item.title}
                      </h3>

                      {/* Institution / Place */}
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{item.institution}</span>
                        <span>•</span>
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights Badges */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/60">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Notice on Placeholder Details */}
        <div className="mt-16 text-center text-xs text-slate-400 font-mono">
          [Note: All medical training institutions, dates, and hospital positions are structured as customizable placeholders for Dr. B. Vijaya Chaitanya.]
        </div>

      </div>
    </section>
  );
};
