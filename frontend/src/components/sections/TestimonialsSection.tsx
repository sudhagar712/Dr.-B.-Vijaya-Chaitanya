import React from 'react';
import { Quote, Star, Heart, CheckCircle2, AlertCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      initials: 'R. K.',
      title: 'Attentive & Thorough Consultation',
      focus: 'Preventive Cardiology & Lipid Management',
      text: 'Dr. B. Vijaya Chaitanya took the time to meticulously review my lab reports and explained my cholesterol risk factors in terms I could clearly understand. I felt truly listened to throughout the entire consultation.',
      patientProfile: 'Patient • Preventive Cardiology Review',
      tag: '[Verified Testimonial Placeholder]',
    },
    {
      initials: 'S. N.',
      title: 'Clear Second Opinion & Guidance',
      focus: 'Coronary Artery Disease Evaluation',
      text: 'Seeking a second opinion regarding my angiography results was the best decision. Dr. Chaitanya provided an objective, compassionate breakdown of my options and gave our entire family peace of mind.',
      patientProfile: 'Patient • Second Opinion Consultation',
      tag: '[Verified Testimonial Placeholder]',
    },
    {
      initials: 'M. P.',
      title: 'Systematic Blood Pressure Management',
      focus: 'Hypertension Care & Lifestyle Optimization',
      text: 'After struggling with erratic blood pressure for months, Dr. Chaitanya restructured my medication timing and provided simple dietary recommendations that brought my readings into a stable, healthy range.',
      patientProfile: 'Patient • Hypertension Clinic',
      tag: '[Verified Testimonial Placeholder]',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-cardio-red text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-cardio-red" />
            <span>Patient Experiences</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            Reflections on Compassionate Care
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear from individuals who experienced attentive, evidence-driven cardiovascular guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50/80 rounded-3xl p-7 border border-slate-200/90 shadow-glass hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-cardio-red shadow-xs">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cardio-red">
                  {item.focus}
                </span>

                <h3 className="text-base font-bold font-display text-navy-950 mt-1 mb-3">
                  &ldquo;{item.title}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center font-display">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.patientProfile}</p>
                    <p className="text-[10px] text-slate-400 font-mono">{item.tag}</p>
                  </div>
                </div>

                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-100/70 border border-slate-200 max-w-2xl mx-auto flex items-start gap-2.5 text-xs text-slate-500">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            <strong>Placeholder Notice:</strong> Testimonials displayed above are formatted illustrative placeholders structured for future patient feedback. No exaggerated medical or curative claims are made, adhering to clinical communication standards.
          </p>
        </div>

      </div>
    </section>
  );
};
