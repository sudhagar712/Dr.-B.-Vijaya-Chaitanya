import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, ShieldPlus, Sparkles, ArrowRight, ExternalLink, HeartHandshake, CheckCircle } from 'lucide-react';

export default function LeadershipSection({ onOpenAppointment }) {
  const leadershipPillars = [
    {
      icon: ShieldPlus,
      title: 'Clinical Capability & 24/7 STEMI Cath Lab',
      desc: 'Institutionalizing immediate door-to-balloon protocols and fully equipped cath labs to save lives during acute coronary emergencies.',
    },
    {
      icon: Users,
      title: 'Building Clinical Teams',
      desc: 'Fostering interdisciplinary collaboration across interventionalists, cardiac surgeons, intensivists, and specialized nursing personnel.',
    },
    {
      icon: Building2,
      title: '200-Bedded Tadepalli Facility',
      desc: 'Expanding hospital infrastructure in Tadepalli, Vijayawada, to offer tertiary and quaternary cardiovascular care to Andhra Pradesh.',
    },
    {
      icon: HeartHandshake,
      title: 'Patient Access & Regional Healthcare',
      desc: 'Bringing world-class cardiology expertise closer to the communities of Vijayawada, Tadepalli, Guntur, and surrounding regions.',
    },
  ];

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 ecg-grid">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] radial-glow-red pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 space-y-4" data-aos="fade-up" data-aos-duration="850">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-teal/30 bg-cardio-teal/10 text-xs font-mono font-bold text-cardio-teal uppercase tracking-widest">
            Institutional Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            Building Healthcare <br />
            <span className="text-gradient-cyan">Beyond the Cath Lab</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium">
            “Treating patients was the beginning. Building better healthcare became the larger responsibility.”
          </p>
        </div>

        {/* Highlight Card: Medstar Hospitals Transformation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-cardio-dark border border-slate-200 dark:border-white/10 shadow-lg mb-12 relative overflow-hidden" data-aos="zoom-in-up" data-aos-duration="900" data-aos-delay="100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-cardio-crimson bg-cardio-crimson/10 border border-cardio-crimson/30 uppercase">
                  Managing Director, Medstar Hospitals
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-cardio-cyan bg-cardio-cyan/10 border border-cardio-cyan/30 uppercase">
                  Chief of Cardiovascular Sciences
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
                Medstar Hospitals, Tadepalli & Vijayawada
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  As Managing Director of Medstar Hospitals, Dr. Vijaya Chaitanya is involved in the larger task of developing a healthcare organisation around clinical capability, specialised services and patient access.
                </p>
                <p>
                  His role as Chief of Cardiovascular Sciences keeps that leadership connected to daily bedside and cath lab clinical practice. The objective is simple:
                </p>
                <blockquote className="p-4 rounded-2xl bg-slate-50 dark:bg-cardio-dark/80 border-l-4 border-cardio-crimson text-slate-900 dark:text-white font-medium italic">
                  “Build an environment where expertise, technology and coordinated care come together for better cardiovascular outcomes.”
                </blockquote>
                <p>
                  Medstar Hospitals began its journey in Vijayawada and has expanded its presence with its <strong className="text-slate-950 dark:text-white">200-bedded Tadepalli facility</strong>. For Dr. Vijaya Chaitanya, the growth of Medstar represents an opportunity to bring specialised medical expertise and advanced healthcare services closer to the communities of Vijayawada, Tadepalli, and the surrounding region.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenAppointment}
                  className="btn btn-sm sm:btn-md bg-cardio-crimson text-white rounded-xl font-mono text-xs gap-2 shadow-md hover:bg-cardio-ruby"
                >
                  <span>Book Consultation at Medstar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  className="btn btn-sm sm:btn-md btn-outline border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:bg-slate-100 rounded-xl font-mono text-xs gap-2"
                >
                  <span>Visit Medstar Tadepalli</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Hospital Key Numbers & Badge */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-cardio-cyan/30 text-center space-y-2">
                <Building2 className="w-8 h-8 text-cardio-cyan mx-auto animate-pulse" />
                <span className="block text-4xl font-mono font-extrabold text-slate-900 dark:text-white">200+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-cardio-cyan block font-bold">
                  Beds Multi-Specialty Facility
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Tadepalli, Vijayawada • Comprehensive Cardiovascular Care
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-cardio-crimson/30 text-center space-y-2">
                <ShieldPlus className="w-8 h-8 text-cardio-crimson mx-auto animate-heartbeat" />
                <span className="block text-3xl font-mono font-extrabold text-cardio-crimson">24/7</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 block font-bold">
                  Primary PCI Cath Lab Unit
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Immediate STEMI Emergency Interventions & Resuscitation
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipPillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-cardio-teal/10 border border-cardio-teal/25 flex items-center justify-center text-cardio-teal mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-cardio-teal font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Institutional Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
