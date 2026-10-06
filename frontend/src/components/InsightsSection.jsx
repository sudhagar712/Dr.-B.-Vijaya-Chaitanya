import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Heart, AlertTriangle, HelpCircle, Activity, Sparkles, Shield, ArrowRight, X, UserCheck } from 'lucide-react';

export default function InsightsSection({ onOpenAppointment }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 1,
      title: 'When Is Chest Pain a Medical Emergency?',
      subtitle: 'Understanding the warning signs that should never be ignored.',
      readTime: '3 min read',
      tag: 'Critical Emergency',
      icon: AlertTriangle,
      color: 'text-cardio-crimson',
      tagColor: 'border-cardio-crimson/30 bg-cardio-crimson/10 text-cardio-crimson',
      summary: 'Chest pain that radiates to the left arm, jaw, neck, or back—especially when accompanied by diaphoresis (cold sweating), shortness of breath, or nausea—is a medical emergency until proven otherwise.',
      content: `Chest discomfort is the quintessential cardiac symptom, yet many patients delay seeking care because they mistake it for indigestion, gastric reflux, or muscular strain.

Warning signs of acute cardiac ischemia:
• Heavy, squeezing, crushing, or burning pressure in the center or left of the chest.
• Radiation of pain to the left arm, shoulder, jaw, neck, or upper back.
• Shortness of breath, even without severe pain.
• Sudden cold sweating, dizziness, lightheadedness, or sudden unexplained fatigue.

Crucial Action: If you experience these symptoms, do not drive yourself. Immediately call for emergency assistance or reach the nearest hospital equipped with a 24/7 Primary PCI Cath Lab like Medstar Hospitals. Every minute of delay causes irreversible damage to heart muscle.`,
    },
    {
      id: 2,
      title: 'Does Every Heart Blockage Need an Angioplasty?',
      subtitle: 'Why the presence of a blockage is only one part of the clinical decision.',
      readTime: '4 min read',
      tag: 'Clinical Decision',
      icon: HelpCircle,
      color: 'text-cardio-cyan',
      tagColor: 'border-cardio-cyan/30 bg-cardio-cyan/10 text-cardio-cyan',
      summary: 'Not every anatomical blockage requires a stent. Clinical decision-making evaluates ischemia symptoms, fractional flow reserve (FFR), lesion stability, and medical therapy optimization.',
      content: `When a coronary angiogram reveals a 60% or 70% narrowing, the immediate question from patients and families is: "Doctor, do I need a stent?"

The answer is nuanced:
1. Physiology over Anatomy: Modern cardiology relies on Fractional Flow Reserve (FFR) or Instantaneous Wave-Free Ratio (iFR). A pressure wire measures whether the blockage actually restricts physiological oxygen delivery to the heart muscle. If FFR is > 0.80, optimal medical therapy is often as effective as stenting.
2. Stability vs. Instability: A stable 70% calcified plaque with minimal symptoms may be safely managed with medications, whereas a vulnerable, soft 50% plaque causing acute coronary syndrome requires immediate intervention.
3. Left Main and Multivessel Considerations: Critical locations (such as the Left Main coronary artery) have lower thresholds for intervention due to the extensive myocardial territory at jeopardy.`,
    },
    {
      id: 3,
      title: 'What Happens During an Angioplasty?',
      subtitle: 'A simple explanation of one of the most commonly performed cardiac interventions.',
      readTime: '4 min read',
      tag: 'Procedure Guide',
      icon: Activity,
      color: 'text-cardio-teal',
      tagColor: 'border-cardio-teal/30 bg-cardio-teal/10 text-cardio-teal',
      summary: 'Angioplasty is a minimally invasive percutaneous procedure where a catheter is navigated from the wrist radial artery to restore arterial blood flow using an expandable stent.',
      content: `Coronary angioplasty (Percutaneous Coronary Intervention or PCI) is performed without general anesthesia or surgical incisions.

Step-by-step overview:
1. Access: Usually via the radial artery in the right wrist under local anesthesia.
2. Navigation: A guiding catheter is advanced under real-time X-ray fluoroscopy to the entrance of the coronary arteries.
3. Crossing: A hair-thin guide wire navigates across the narrowed portion of the artery.
4. Balloon Pre-dilation: A deflated micro-balloon is gently inflated to compress plaque against the arterial wall.
5. Stent Deployment: A drug-eluting cobalt-chromium stent is positioned and expanded. The stent scaffold remains permanently to keep the artery patent, releasing medication over months to prevent restenosis.
6. Recovery: Most patients undergoing elective radial angioplasty can sit up within hours and return home the following day.`,
    },
    {
      id: 4,
      title: 'Why Does Time Matter During a Heart Attack?',
      subtitle: 'Understanding the importance of rapid diagnosis and treatment during acute myocardial infarction.',
      readTime: '3 min read',
      tag: 'Golden Hour',
      icon: Clock,
      color: 'text-cardio-crimson',
      tagColor: 'border-cardio-crimson/30 bg-cardio-crimson/10 text-cardio-crimson',
      summary: '“Time is Muscle.” During an acute myocardial infarction (STEMI), heart muscle cells begin to die within 20 minutes of blood cessation. Rapid reperfusion preserves cardiac longevity.',
      content: `In acute cardiology, there is a famous maxim: Time is Muscle.

When a coronary artery becomes completely occluded by a rupture-induced blood clot (thrombus):
• 0–20 Minutes: The myocardium enters reversible ischemia.
• 20–60 Minutes: Irreversible myocardial necrosis begins at the subendocardium.
• Within 2 to 3 Hours: Substantial irreversible scarring occurs if the vessel remains shut.
• Within 6 Hours: Near transmural death of affected muscle.

The "Golden Hour": Reopening the blocked artery within the first 60 to 90 minutes ("door-to-balloon time") can abort the heart attack entirely, preserving normal ejection fraction and preventing chronic heart failure.`,
    },
    {
      id: 5,
      title: 'What Is TAVI and Who May Need It?',
      subtitle: 'Understanding transcatheter approaches to selected valve conditions.',
      readTime: '4 min read',
      tag: 'Structural Heart',
      icon: Sparkles,
      color: 'text-amber-600',
      tagColor: 'border-amber-500/30 bg-amber-500/10 text-amber-700',
      summary: 'Transcatheter Aortic Valve Implantation (TAVI / TAVR) replaces a calcified, stenotic aortic valve through a femoral catheter without sternotomy or heart-lung bypass.',
      content: `Severe Aortic Stenosis (AS) is a progressive condition where the heart's main exit valve becomes calcified and stiff, unable to open fully. Left untreated, severe symptomatic AS has a prognosis worse than many cancers.

Historically, surgical aortic valve replacement (SAVR) required cracking the chest open. Today, TAVI offers a revolutionary alternative:
• Catheter Delivery: The new biological valve is crimped onto a delivery catheter, guided through the femoral artery in the groin.
• Self-Expanding or Balloon-Expandable: The new valve is deployed directly inside the diseased native valve, pushing the old leaflets aside.
• Immediate Function: Blood flow is instantly normalized. Patients usually walk within 24 hours and have minimal surgical trauma.`,
    },
    {
      id: 6,
      title: 'What Makes a Coronary Intervention Complex?',
      subtitle: 'Why some blockages require specialised techniques and advanced planning.',
      readTime: '4 min read',
      tag: 'Complex PCI',
      icon: Shield,
      color: 'text-cardio-accent',
      tagColor: 'border-cardio-accent/30 bg-cardio-accent/10 text-cardio-accent',
      summary: 'Complex PCI involves heavy calcification, chronic total occlusions (CTO), bifurcation lesions, left main disease, or severe ventricular dysfunction requiring micro-axial hemodynamic support.',
      content: `While standard angioplasty has become routine, complex coronary interventions (CHIP) require dedicated interventional fellowships and specialized toolsets.

Factors contributing to complexity:
1. Heavy Calcium: Vessel walls can resemble porcelain or bone. Standard balloons rupture without cracking the calcium. We deploy Rotational Atherectomy or Intravascular Shockwave Lithotripsy (IVL).
2. Bifurcations: Blockages located right at a junction where two major arteries split require dual-wire techniques and dedicated stent geometries to avoid pinching the branch vessel.
3. Chronic Total Occlusions (CTO): Arteries blocked 100% for months or years require retrograde collateral dissection and re-entry techniques.
4. Impaired Left Ventricular Function: In patients with EF < 30%, temporary hemodynamic support devices maintain blood pressure while interventions are executed.`,
    },
    {
      id: 7,
      title: 'How Can Heart Disease Be Prevented?',
      subtitle: 'The role of risk assessment, lifestyle and preventive cardiology.',
      readTime: '3 min read',
      tag: 'Prevention & Wellness',
      icon: Heart,
      color: 'text-cardio-teal',
      tagColor: 'border-cardio-teal/30 bg-cardio-teal/10 text-cardio-teal',
      summary: 'Over 80% of premature cardiovascular events are preventable. Aggressive management of blood pressure, ApoB lipids, metabolic health, and smoking cessation saves lives.',
      content: `Interventional cardiology rescues hearts during crises, but preventive cardiology ensures you never need an emergency cath lab.

The Pillars of Cardiac Prevention:
1. Know Your Numbers: Fasting lipid panel (specifically non-HDL cholesterol and ApoB), HbA1c (blood sugar), and resting blood pressure (< 120/80 mmHg).
2. Coronary Calcium Scan (CAC): A rapid, low-dose non-invasive CT scan that detects subclinical plaque before symptoms ever appear.
3. Nutritional Architecture: Emphasize unrefined whole foods, Mediterranean dietary patterns, leafy vegetables, high fiber, and lean proteins while eliminating trans fats and excess refined sugars.
4. Aerobic & Resistance Exercise: 150 minutes of moderate aerobic activity weekly coupled with resistance training enhances endothelial nitric oxide production.
5. Tobacco Abstinence: Smoking and chewing tobacco cause acute endothelial dysfunction and promote thrombogenesis.`,
    },
  ];

  return (
    <section id="insights" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 ecg-grid">
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] radial-glow-red pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-aos="fade-up" data-aos-duration="850">
         
         
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight uppercase">
            Clinical <span className="text-gradient-cyan">Insights</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-light italic">
            “Straight answers to questions about the heart. Medical information can be complicated. Understanding it shouldn't be.”
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Practical perspectives on cardiovascular disease, procedures, prevention and advances in interventional cardiology.
          </p>
        </div>

        {/* 7 Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={(idx % 3) * 100}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-cardio-crimson/50 shadow-sm hover:shadow-md flex flex-col justify-between group cursor-pointer transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${topic.tagColor}`}>
                      {topic.tag}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Clock className="w-3 h-3" />
                      {topic.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-slate-900 dark:text-white group-hover:text-cardio-crimson transition-colors mb-2">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {topic.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono text-cardio-crimson group-hover:text-cardio-ruby transition-colors">
                  <span className="flex items-center gap-1 font-semibold">
                    <BookOpen className="w-3.5 h-3.5" />
                    Read Clinical View
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Topic Reader Modal */}
        <AnimatePresence>
          {selectedTopic && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 rounded-3xl bg-white dark:bg-cardio-dark border border-slate-200 dark:border-cardio-cyan/40 shadow-2xl space-y-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${selectedTopic.tagColor}`}>
                    {selectedTopic.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {selectedTopic.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                    {selectedTopic.title}
                  </h3>
                  <p className="text-sm font-mono text-cardio-crimson mt-1 font-semibold">
                    {selectedTopic.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-cardio-crimson/10 border border-slate-200 dark:border-cardio-crimson/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic font-mono">
                  “{selectedTopic.summary}”
                </div>

                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
                  {selectedTopic.content}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-cardio-teal" />
                    <span className="text-xs font-mono text-slate-500">
                      Author: Dr. B. Vijaya Chaitanya
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedTopic(null);
                      if (onOpenAppointment) onOpenAppointment();
                    }}
                    className="btn btn-sm bg-cardio-crimson text-white rounded-xl font-mono text-xs shadow-md hover:bg-cardio-ruby"
                  >
                    Consult Doctor Regarding This
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
