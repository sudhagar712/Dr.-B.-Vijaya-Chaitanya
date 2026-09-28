import React from 'react';
import { Calendar, Phone, Mail, MapPin, Clock, Heart, Shield, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface AppointmentSectionProps {
  onOpenBooking: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle ECG Grid */}
      <div className="absolute inset-0 bg-ecg-grid-dark opacity-35 pointer-events-none" />

      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-cardio-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cardio-pulse text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 fill-cardio-pulse animate-heartbeat" />
            <span>Prioritize Your Cardiovascular Wellness</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
            Take the First Step Towards <br />
            <span className="text-gradient-cardio">Better Heart Health</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Whether scheduling a routine preventive check-up, managing high blood pressure, or seeking a definitive cardiology second opinion, early medical attention protects your heart.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-2xl bg-cardio-red hover:bg-cardio-crimson text-white text-sm sm:text-base font-semibold tracking-wide shadow-cardio-glow transition-all duration-300 flex items-center gap-2.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </MagneticButton>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-semibold tracking-wide backdrop-blur-md transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cardio-pulse" />
              <span>Contact Clinic</span>
            </a>
          </div>

          {/* 4 Clinical Information Cards (Clearly Structured Placeholders) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12 text-left">
            
            {/* Phone */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-cardio-pulse mb-3">
                <Phone className="w-4 h-4" />
              </div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Clinic Contact</p>
              <p className="text-sm font-bold text-white font-mono mt-0.5">
                [Phone Placeholder: +91 XX XXXX XXXX]
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Direct Appointments Desk</p>
            </div>

            {/* Email */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Official Email</p>
              <p className="text-sm font-bold text-white font-mono mt-0.5 truncate">
                [consult@drvijaya.placeholder]
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Patient Coordination</p>
            </div>

            {/* Clinic Address */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Clinic Suite</p>
              <p className="text-sm font-bold text-white mt-0.5">
                [Cardiology Suite, Health City, City - Placeholder]
              </p>
              <p className="text-[11px] text-slate-400 mt-1">In-Person Consultations</p>
            </div>

            {/* Consultation Timings */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Consultation Timings</p>
              <p className="text-sm font-bold text-white mt-0.5 font-mono">
                [Mon - Sat: 09:00 AM - 05:00 PM]
              </p>
              <p className="text-[11px] text-slate-400 mt-1">Sunday by Emergency Call</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
