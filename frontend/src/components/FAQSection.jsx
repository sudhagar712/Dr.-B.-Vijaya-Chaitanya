import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'Who is Dr. B. Vijaya Chaitanya?',
      a: 'Dr. B. Vijaya Chaitanya is an Interventional Cardiologist, Managing Director of Medstar Hospitals and Chief of Cardiovascular Sciences. He is also a Fellow of the American College of Cardiology (FACC) and holds a Fellowship in Interventional Cardiology (FIC).',
      category: 'Profile',
    },
    {
      q: 'Where does Dr. Vijaya Chaitanya practise?',
      a: 'He is associated with Medstar Hospitals, primarily based at the premier 200-bedded facility in Tadepalli, Vijayawada, Andhra Pradesh, serving patients across the state and the Amaravati capital region.',
      category: 'Location',
    },
    {
      q: "What is Dr. Vijaya Chaitanya's speciality?",
      a: 'His primary speciality is Interventional Cardiology, with advanced expertise in coronary interventions, complex coronary disease, structural heart interventions (TAVI/TAVR), peripheral vascular interventions and cardiac device implantation (Pacemakers, ICD & CRT).',
      category: 'Speciality',
    },
    {
      q: 'How experienced is Dr. Vijaya Chaitanya?',
      a: 'He has over 13 years of experience in cardiovascular medicine. His documented procedural experience includes more than 26,000 coronary angiograms, 12,000 coronary angioplasties, 11,000 peripheral interventions, 300+ pacemaker implantations, and 100+ ICD & CRT device implantations.',
      category: 'Experience',
    },
    {
      q: 'What procedures does Dr. Vijaya Chaitanya perform?',
      a: 'His listed clinical expertise includes coronary angiography, coronary angioplasty, primary PCI for acute MI, complex coronary interventions, left main and bifurcation stenting, IVUS/OCT-guided intravascular imaging, FFR assessment, pacemaker implantation, ICD and CRT implantation, peripheral vascular interventions, and structural heart procedures.',
      category: 'Procedures',
    },
    {
      q: 'Does Dr. Vijaya Chaitanya have TAVI training?',
      a: 'Yes. His professional profile lists a specialized Fellowship in TAVI (Transcatheter Aortic Valve Implantation) from Medanta – The Medicity, Delhi NCR, along with advanced exposure at Mount Sinai Hospital, New York, USA.',
      category: 'TAVI / Structural',
    },
    {
      q: "What are Dr. Vijaya Chaitanya's qualifications?",
      a: 'He holds an MBBS (2005) and MD in General Medicine (2009) from Rajiv Gandhi University, Karnataka, followed by a DM in Cardiology (2013) from Sri Ramachandra Medical College, Chennai. He is also a Fellow of the American College of Cardiology (FACC), holds an FIC credential, and has undertaken fellowship training in TAVI.',
      category: 'Qualifications',
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white dark:bg-cardio-dark">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] radial-glow-blue pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cardio-cyan/30 bg-cardio-cyan/5 text-xs font-mono font-bold text-cardio-cyan uppercase tracking-widest">
            Common Patient & Colleague Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Clear, transparent answers about Dr. Vijaya Chaitanya's practice, experience, and clinical services.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="relative mb-8" data-aos="fade-up" data-aos-duration="750" data-aos-delay="100">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., TAVI, Medstar, Angioplasty, Experience)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cardio-crimson font-mono text-xs sm:text-sm shadow-sm transition-colors"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 group focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                      isOpen
                        ? 'bg-cardio-crimson text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10'
                    }`}>
                      Q{idx + 1}
                    </div>
                    <span className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-cardio-crimson transition-colors">
                      {faq.q}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-cardio-crimson' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-white/5"
                    >
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-cardio-dark/60 border border-slate-100 dark:border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-500 font-mono text-xs">
              No matching questions found for "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
