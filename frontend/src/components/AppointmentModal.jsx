import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Clock, User, HeartPulse, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    condition: 'Second Opinion on Angioplasty / Stenting',
    preferredDate: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e63946', '#0284c7', '#0d9488', '#d97706'],
      });
    } catch (err) {
      // ignore
    }

    const text = `*New Clinical Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Condition:* ${formData.condition}%0A*Date:* ${formData.preferredDate || 'Earliest Available'}%0A*Notes:* ${formData.notes || 'None'}`;
    const whatsappUrl = `https://wa.me/918662499999?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white dark:bg-cardio-dark border border-slate-200 dark:border-cardio-cyan/40 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-2xl bg-cardio-crimson/10 border border-cardio-crimson/30 flex items-center justify-center text-cardio-crimson">
                <HeartPulse className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-cardio-cyan font-bold">
                  Clinical Consultation
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                  Book an Appointment
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono mb-6">
              Dr. B. Vijaya Chaitanya • Medstar Hospitals, Tadepalli & Vijayawada
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter patient name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cardio-crimson text-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold mb-1">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cardio-crimson text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cardio-crimson text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Cardiology Clinical Specialty / Concern *
                </label>
                <select
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-cardio-crimson text-xs font-mono"
                >
                  <option value="Second Opinion on Angioplasty / Stenting">
                    Second Opinion on Angioplasty / Stenting
                  </option>
                  <option value="Evaluation for TAVI / Structural Heart">
                    Evaluation for TAVI / Structural Heart
                  </option>
                  <option value="Coronary Angiogram / Angioplasty">
                    Coronary Angiogram / Angioplasty
                  </option>
                  <option value="Pacemaker / ICD / CRT Device Consultation">
                    Pacemaker / ICD / CRT Device Consultation
                  </option>
                  <option value="Peripheral Vascular Intervention">
                    Peripheral Vascular Intervention
                  </option>
                  <option value="Preventive Cardiac Checkup & Chest Pain">
                    Preventive Cardiac Checkup & Chest Pain
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Brief Medical Notes / Symptoms
                </label>
                <textarea
                  rows="2"
                  placeholder="Mention any existing reports, prior stents, or specific symptoms..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cardio-crimson text-xs font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn btn-sm sm:btn-md w-full bg-gradient-to-r from-cardio-crimson to-cardio-ruby text-white border-none rounded-xl font-mono text-xs gap-2 shadow-md hover:from-cardio-ruby hover:to-cardio-crimson"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Confirm via WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-500 font-mono">
                  For immediate cardiac emergencies, call Medstar 24/7:{' '}
                  <a href="tel:+918662499999" className="text-cardio-crimson font-bold underline">
                    +91 866 249 9999
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="h-16 w-16 rounded-full bg-cardio-teal/15 border-2 border-cardio-teal flex items-center justify-center text-cardio-teal mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
              Appointment Request Received
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              Thank you, <strong className="text-slate-950 dark:text-white">{formData.name}</strong>. Your clinical consultation inquiry has been logged with the executive desk of Dr. B. Vijaya Chaitanya at Medstar Hospitals.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-cardio-crimson font-semibold">
              Redirecting you to WhatsApp to connect directly with the coordinator...
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="btn btn-sm btn-ghost text-slate-600 hover:text-slate-950 text-xs font-mono"
            >
              Close Window
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
