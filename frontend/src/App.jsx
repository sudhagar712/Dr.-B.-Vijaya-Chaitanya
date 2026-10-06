import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ECGMonitorBar from './components/ECGMonitorBar';
import Hero from './components/Hero';
import ProceduralVolumeSection from './components/ProceduralVolumeSection';
import InteractiveHeartSection from './components/InteractiveHeartSection';
import PrecisionQuote from './components/PrecisionQuote';
import AboutSection from './components/AboutSection';
import JourneyTimeline from './components/JourneyTimeline';
import ComplexCaseSection from './components/ComplexCaseSection';
import ExpertiseSection from './components/ExpertiseSection';
import LeadershipSection from './components/LeadershipSection';
import CredentialsSection from './components/CredentialsSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';
import AppointmentModal from './components/AppointmentModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isDark, setIsDark] = useState(false); // DEFAULT: LIGHT MODE
  const [bpm, setBpm] = useState(72);
  const audioContextRef = useRef(null);
  const audioTimerRef = useRef(null);

  // Apply light/dark class and data-theme to HTML root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  // Initialize AOS with smooth continuous transition effects
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: false,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 50,
    });
    if (!isLoading) {
      setTimeout(() => {
        AOS.refresh();
      }, 300);
    }
  }, [isLoading]);

  // Web Audio API Heartbeat Synthesizer (Realistic "Lub-Dub" sound)
  const playHeartSound = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // First sound: "Lub"
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(75, now);
      osc1.frequency.exponentialRampToValueAtTime(35, now + 0.12);
      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.13);

      // Second sound: "Dub"
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(95, now + 0.18);
      osc2.frequency.exponentialRampToValueAtTime(45, now + 0.28);
      gain2.gain.setValueAtTime(0.28, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.18);
      osc2.stop(now + 0.29);
    } catch (err) {
      console.warn('Audio issue:', err);
    }
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      if (audioTimerRef.current) clearInterval(audioTimerRef.current);
      setIsAudioPlaying(false);
    } else {
      setIsAudioPlaying(true);
      playHeartSound();
      const intervalMs = (60 / bpm) * 1000;
      audioTimerRef.current = setInterval(() => {
        playHeartSound();
      }, intervalMs);
    }
  };

  useEffect(() => {
    if (isAudioPlaying) {
      if (audioTimerRef.current) clearInterval(audioTimerRef.current);
      const intervalMs = (60 / bpm) * 1000;
      audioTimerRef.current = setInterval(() => {
        playHeartSound();
      }, intervalMs);
    }
    return () => {
      if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    };
  }, [bpm, isAudioPlaying]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-cardio-dark text-slate-900 dark:text-slate-100 selection:bg-cardio-crimson selection:text-white font-sans transition-colors duration-300">
      {/* Custom Trailing Crosshair Cursor */}
      <CustomCursor />

      {/* Cinematic Cardiac Boot Sequence Loader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Luxury Navigation Bar with clean UX & mobile profile badge */}
      <Navbar
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onToggleAudio={toggleAudio}
        isAudioPlaying={isAudioPlaying}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with Doctor Executive Portrait on the Right */}
        <Hero onOpenAppointment={() => setIsAppointmentOpen(true)} />

        {/* 2. Full-View Procedural Volume & Interventional Milestones */}
        <ProceduralVolumeSection onOpenAppointment={() => setIsAppointmentOpen(true)} />

        {/* 6. About Dr. B. Vijaya Chaitanya */}
        <AboutSection />

        
        {/* 7. Career & Fellowship Trajectory */}
        <JourneyTimeline />

         {/* 11. Degrees, Fellowships & Medical Associations */}
        <CredentialsSection />

       

        {/* 4. Clinical Philosophy */}
        <PrecisionQuote />

       

      


        {/* 8. Complex Decision Matrix */}
        <ComplexCaseSection onOpenAppointment={() => setIsAppointmentOpen(true)} />

        {/* 9. Advanced Clinical Expertise with Filter Tabs & Modal */}
        <ExpertiseSection onOpenAppointment={() => setIsAppointmentOpen(true)} />

        {/* 10. Healthcare Leadership at Medstar Tadepalli */}
        <LeadershipSection onOpenAppointment={() => setIsAppointmentOpen(true)} />

       





 {/* 3. Dedicated 3D Cardiac Vasculature & Stent Simulator Section */}
        <InteractiveHeartSection onOpenAppointment={() => setIsAppointmentOpen(true)} />





        {/* 12. The Cardiologist's View - 7 Clinical Insights */}
        <InsightsSection onOpenAppointment={() => setIsAppointmentOpen(true)} />

      

        {/* 14. Contact, Medstar Location & Directions */}
        <ContactSection onOpenAppointment={() => setIsAppointmentOpen(true)} />
      </main>

      {/* Comprehensive Medical Footer */}
      <Footer />

      {/* Interactive Appointment Consultation Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
      {/* Floating Bottom-Right WhatsApp and Back-To-Top Actions */}
      <FloatingActions />
    </div>
  );
}
