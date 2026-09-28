import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, Heart, AlertCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment = 'Cardiac Consultation',
}) => {
  const [formData, setFormData] = useState({
    consultationType: defaultTreatment,
    preferredDate: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    patientName: '',
    phone: '',
    email: '',
    age: '',
    hasPriorCardiacHistory: false,
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CARDIO-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSubmitted(true);

    // Trigger celebratory confetti if installed
    import('canvas-confetti').then((confetti) => {
      confetti.default({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E63946', '#0077B6', '#06D6A0', '#0B132B'],
      });
    }).catch(() => {});
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 text-cardio-pulse text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-4 h-4 fill-cardio-pulse animate-heartbeat" />
            <span>Cardiovascular Clinical Desk</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Schedule a Consultation
          </h2>
          <p className="text-slate-300 text-sm mt-1">
            Personalized, unhurried cardiology evaluation with Dr. B. Vijaya Chaitanya.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-9 h-9 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Consultation Request Received
              </h3>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.patientName || 'Patient'}</span>. Your appointment request has been logged with our medical secretary.
              </p>

              <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm mx-auto text-left text-sm space-y-2 font-mono">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Reference ID:</span>
                  <span className="font-bold text-cardio-red">{referenceId}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Consultation:</span>
                  <span className="text-slate-800">{formData.consultationType}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Preferred Slot:</span>
                  <span className="text-slate-800">{formData.timeSlot}</span>
                </div>
              </div>

              <div className="mt-6 p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-blue-800 max-w-md mx-auto flex items-start gap-2.5 text-left">
                <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Clinical Desk Verification:</strong> Our clinical coordination team will phone you at <strong>{formData.phone || '[Your Phone]'}</strong> within 2 hours to confirm the exact consultation time and provide pre-visit guidelines.
                </span>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-navy-900 text-white font-medium hover:bg-navy-800 transition-colors text-sm shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Consultation Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Consultation Focus / Reason
                </label>
                <select
                  value={formData.consultationType}
                  onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm bg-white"
                >
                  <option value="Cardiac Consultation">General Cardiac Consultation</option>
                  <option value="Second Opinion - Interventional">Second Opinion (Angiography / Stenting / Bypass)</option>
                  <option value="Preventive Heart Screening">Preventive Heart & Lipid Risk Assessment</option>
                  <option value="Hypertension & Blood Pressure">Hypertension & Resistant Blood Pressure Review</option>
                  <option value="Heart Failure Management">Heart Failure Evaluation & Management</option>
                  <option value="Arrhythmia & Palpitations">Arrhythmia, Palpitations & ECG Review</option>
                  <option value="Post-Procedure Follow-up">Post-Procedure Follow-up Consultation</option>
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cardio-red" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cardio-red" />
                    <span>Preferred Window</span>
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm bg-white"
                  >
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                    <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Patient Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cardio-red" />
                    <span>Patient Full Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cardio-red" />
                    <span>Contact Phone</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cardio-red" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient Age
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="120"
                    placeholder="e.g. 52"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm"
                  />
                </div>
              </div>

              {/* Prior Cardiac History Checkbox */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <input
                  type="checkbox"
                  id="priorHistory"
                  checked={formData.hasPriorCardiacHistory}
                  onChange={(e) => setFormData({ ...formData, hasPriorCardiacHistory: e.target.checked })}
                  className="w-4 h-4 rounded text-cardio-red focus:ring-cardio-red border-slate-300"
                />
                <label htmlFor="priorHistory" className="text-xs text-slate-700 font-medium cursor-pointer">
                  Patient has prior history of heart condition, angioplasty, stent, or bypass surgery
                </label>
              </div>

              {/* Notes / Symptoms */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cardio-red" />
                  <span>Brief Symptoms or Questions (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Experiencing mild shortness of breath on climbing stairs, seeking routine annual check-up..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-cardio-red text-white hover:bg-cardio-crimson font-medium text-sm shadow-md shadow-cardio-red/20 transition-all flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Request Appointment</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
