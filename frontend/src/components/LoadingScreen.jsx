import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        // Smooth medical calibration progress
        return Math.min(prev + Math.floor(Math.random() * 8) + 6, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-cardio-dark ecg-grid overflow-hidden select-none"
        >
          {/* Ambient center radial glow */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-cardio-crimson/10 blur-[100px] pointer-events-none animate-pulse-glow" />

          {/* Central Beating Heart Container with Expanding Ultrasonic Rings */}
          <div className="relative flex items-center justify-center">
            
            {/* Concentric Ultrasound Echo Waves */}
            <motion.div
              animate={{
                scale: [1, 2.2],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeOut',
              }}
              className="absolute h-36 w-36 rounded-full border border-cardio-crimson/40 pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1, 2.8],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 0.35,
              }}
              className="absolute h-36 w-36 rounded-full border border-cardio-cyan/30 pointer-events-none"
            />

            {/* Main Physiological Beating Heart SVG */}
            <motion.div
              animate={{
                scale: [1, 1.18, 1.02, 1.24, 1], // Double-beat systole-diastole rhythm (Lub-Dub)
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 flex items-center justify-center filter drop-shadow-[0_10px_25px_rgba(230,57,70,0.35)]"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-28 h-28 sm:w-36 sm:h-36 fill-current text-cardio-crimson"
              >
                <defs>
                  {/* Brand Medical Gradient */}
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC242E" />
                    <stop offset="50%" stopColor="#D01B24" />
                    <stop offset="100%" stopColor="#125083" />
                  </linearGradient>
                  
                  {/* Subtle Arterial Sheen */}
                  <radialGradient id="heartGlow" cx="35%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Anatomical Heart Path */}
                <path
                  d="M50 88 C20 68, 5 50, 5 30 C5 14, 18 5, 34 5 C42 5, 47 10, 50 16 C53 10, 58 5, 66 5 C82 5, 95 14, 95 30 C95 50, 80 68, 50 88 Z"
                  fill="url(#heartGradient)"
                />
                
                {/* Highlights */}
                <path
                  d="M50 88 C20 68, 5 50, 5 30 C5 14, 18 5, 34 5 C42 5, 47 10, 50 16 C53 10, 58 5, 66 5 C82 5, 95 14, 95 30 C95 50, 80 68, 50 88 Z"
                  fill="url(#heartGlow)"
                />

                {/* Animated ECG Pulse Line across the Heart */}
                <path
                  d="M18 36 L34 36 L39 31 L44 42 L48 24 L52 46 L56 36 L82 36"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-sm opacity-90"
                />
              </svg>
            </motion.div>
          </div>

          {/* Minimalist Progress Indicator */}
          <div className="mt-8 flex flex-col items-center space-y-2 relative z-10">
            {/* Elegant Minimal Counter */}
            <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-[#123B5D] dark:text-slate-200">
              {progress}<span className="text-xs text-[#EC242E]">%</span>
            </span>

            {/* Sleek Minimal Loading Line */}
            <div className="w-24 sm:w-28 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#125083] via-[#41A490] to-[#EC242E] rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
