import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutDoctor } from './components/sections/AboutDoctor';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { CardiologyVisualSection } from './components/sections/CardiologyVisualSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { PatientCareSection } from './components/sections/PatientCareSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { AppointmentSection } from './components/sections/AppointmentSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { AppointmentModal } from './components/modals/AppointmentModal';
import { CursorGlow } from './components/common/CursorGlow';
import { FloatingActions } from './components/common/FloatingActions';
import { Calendar, Phone } from 'lucide-react';
import Lenis from 'lenis';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState('Cardiac Consultation');

  // Initialize Lenis smooth scroll
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch {
      // Graceful fallback to native scroll
    }

    return () => {
      lenis?.destroy();
    };
  }, []);

  const handleOpenBooking = (treatment?: string) => {
    if (treatment && typeof treatment === 'string') {
      setSelectedTreatmentForBooking(treatment);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFCFF] text-slate-800 flex flex-col font-sans selection:bg-cardio-red selection:text-white">
      {/* Subtle Desktop Interactive Cursor Glow */}
      <CursorGlow />

      {/* Main Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Body Sections */}
      <main className="flex-1">
        {/* Hero Section with 3D Heart */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* About Dr. B. Vijaya Chaitanya */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* 8 Specialized Clinical Domains */}
        <ExpertiseSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8 Treatments & Diagnostic Suite Showcase */}
        <TreatmentsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Cardiology Rhythm Lab & ECG Monitor */}
        <CardiologyVisualSection />

        {/* Doctor Journey & Professional Timeline */}
        <TimelineSection />

        {/* Patient Care Principles */}
        <PatientCareSection onOpenBooking={() => handleOpenBooking()} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Appointment CTA Banner */}
        <AppointmentSection onOpenBooking={() => handleOpenBooking()} />

        {/* Contact, Map, Clinic Location & Inquiry */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment Scheduler Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultTreatment={selectedTreatmentForBooking}
      />

      {/* Floating Actions: WhatsApp Quick Chat & Back to Top with Scroll Progress */}
      <FloatingActions />

      {/* Mobile Sticky Quick Booking Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl flex items-center gap-3">
        <a
          href="tel:+910000000000"
          className="flex-1 py-3 rounded-2xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200"
        >
          <Phone className="w-4 h-4 text-cardio-red" />
          <span>Call Clinic</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-2 py-3 px-4 rounded-2xl bg-cardio-red text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-cardio-red/25"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
};

export default App;
