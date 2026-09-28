import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consultation Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-navy-900 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-cardio-red" />
            <span>Consultation Suite & Contact</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight">
            Connect with Dr. B. Vijaya Chaitanya
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out to schedule an in-clinic consultation, request a cardiology second opinion, or seek appointment coordination.
          </p>
        </div>

        {/* Emergency Medical Alert Box */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-red-50/90 border border-red-200 flex items-start gap-3.5 text-xs text-red-900 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-cardio-red shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold uppercase tracking-wider text-cardio-crimson">
              Emergency Medical Notice
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you or someone around you is experiencing severe crushing chest pressure, pain radiating to the left arm, jaw or neck, sudden shortness of breath, or loss of consciousness, please call your local emergency medical service immediately (108 / 112) or proceed to the nearest hospital Emergency Department.
            </p>
          </div>
        </div>

        {/* Two-Column Grid: Contact Information & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Details & Google Maps Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-navy-950 mb-1">
                  Cardiology Practice Suite
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Dr. B. Vijaya Chaitanya, MD, DM (Cardiology)
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-cardio-red shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">Clinic Address</p>
                    <p className="text-slate-600 mt-0.5">
                      [Cardiology Suite, Health City, City - Editable Placeholder]
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Landmark: [Near City Hospital Hub / Center]</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-cardio-red shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">Appointments Desk</p>
                    <p className="text-slate-900 font-mono font-semibold mt-0.5">
                      [Phone Placeholder: +91 XX XXXX XXXX]
                    </p>
                    <p className="text-[11px] text-slate-400">Direct booking & inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-cardio-red shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">Email Coordination</p>
                    <p className="text-slate-900 font-mono font-semibold mt-0.5">
                      [consult@drvijayachaitanya.placeholder]
                    </p>
                    <p className="text-[11px] text-slate-400">Records & medical inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-cardio-red shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">Consultation Hours</p>
                    <p className="text-slate-700 font-mono mt-0.5">
                      Monday - Saturday: 09:00 AM - 05:00 PM
                    </p>
                    <p className="text-[11px] text-slate-400">Prior appointment recommended</p>
                  </div>
                </div>

              </div>

              {/* Direct Schedule Button */}
              <div className="pt-2 border-t border-slate-200">
                <MagneticButton
                  onClick={onOpenBooking}
                  className="w-full py-3.5 rounded-2xl bg-cardio-red hover:bg-cardio-crimson text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule In-Clinic Appointment</span>
                </MagneticButton>
              </div>

            </div>

            {/* Google Maps Interactive Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 p-6 shadow-glass relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <MapPin className="w-4 h-4 text-cardio-red" />
                  <span>Clinic Location Map</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">[Google Maps Placeholder]</span>
              </div>

              <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 border border-slate-300 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-ecg-grid pointer-events-none" />
                <div className="w-10 h-10 rounded-full bg-cardio-red text-white flex items-center justify-center mb-2 shadow-md animate-bounce">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="font-bold text-xs text-navy-950">Dr. B. Vijaya Chaitanya Cardiology Suite</p>
                <p className="text-[11px] text-slate-500 max-w-xs mt-0.5">
                  [Interactive Google Map Embed Area / Coordinates Placeholder]
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-glass">
            
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-2xl font-bold font-display text-navy-950">
                Send a Message or Consultation Query
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Have a question regarding clinical services, second opinions, or preparation? Submit your message below.
              </p>
            </div>

            {formSent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle className="w-9 h-9 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-navy-950 font-display">
                  Message Transmitted Successfully
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out. Our clinical desk coordination team will review your inquiry and get in touch via email or phone shortly.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm bg-white"
                    >
                      <option value="Consultation Inquiry">General Cardiology Consultation</option>
                      <option value="Second Opinion Request">Second Opinion on Angiography / Surgery</option>
                      <option value="Diagnostic Test Info">ECG / Echo Procedure Inquiries</option>
                      <option value="Billing & Insurance">Insurance & Consultation Fees</option>
                      <option value="Other">Other Administrative Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Clinical Questions
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly state your query or details regarding your consultation requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-cardio-red/30 focus:border-cardio-red text-sm resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Privacy protected • HIPAA / Clinical discretion assured
                  </span>

                  <button
                    type="submit"
                    className="px-7 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
