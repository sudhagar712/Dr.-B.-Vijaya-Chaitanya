"use client";

import { useState, useRef } from "react";
import { EcgLine } from "../art/EcgLine";
import { Reveal } from "../Reveal";

export function Insights() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#eef4fa] to-[#cbe0f5] py-16 md:py-24 lg:py-32">
      {/* Background radial glow behind the video */}
      <div
        aria-hidden
        className="absolute -right-20 top-1/2 -z-10 h-150 w-150 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.8),transparent)] blur-3xl"
      />
      
      {/* Background ECG */}
      <EcgLine
        uid="insights-ecg"
        className="pointer-events-none absolute inset-x-0 bottom-1/4 -z-10 h-21 w-full opacity-50 mix-blend-overlay md:h-35"
      />

      <div className="container-x relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div className="flex max-w-xl flex-col items-start justify-center font-sans">
          <Reveal>
            <div className="mb-5 flex items-center gap-4">
              <span className="text-[12px] font-semibold tracking-[0.2em] text-[#0066cc] uppercase">
                Insights
              </span>
              <span className="h-0.5 w-12 bg-[#0066cc]" aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mb-5 font-serif text-[clamp(2.4rem,4.2vw,3.0rem)] font-medium leading-[1.15] text-[#051126]">
              The <span className="text-[#0066cc]">Cardiologist&apos;s</span> View
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mb-6 text-[clamp(1.1rem,1.8vw,1.4rem)] font-semibold text-[#1a2b49]">
              Straight answers to questions about the heart.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="space-y-4 text-[15px] font-medium leading-relaxed text-[#4b5c76] md:text-[16px]">
              <p>
                Medical information can be complicated.
                <br />
                Understanding it shouldn&apos;t be.
              </p>
              <p>
                The Insights section brings together practical perspectives on cardiovascular disease, procedures, prevention and advances in interventional cardiology.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right side Video */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-lg md:max-w-none">
          {/* Using a taller aspect ratio (4/5) so the video covers nicely without excessive zooming/cropping */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,102,204,0.3)] ring-1 ring-white/50 backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02]">
            {/* Soft glow behind video */}
            <div
              className="absolute -inset-4 z-0 rounded-[3rem] bg-gradient-to-tr from-[#0066cc]/40 to-[#cbe0f5]/20 blur-2xl opacity-70"
              aria-hidden
            />
            
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/drnmkhg5o/video/upload/v1791657181/vision_1_w6e2gu.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 h-full w-full object-cover rounded-[2rem]"
              aria-label="Insights video presentation"
            />

            {/* Custom Sound Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#051126]/70 text-white backdrop-blur-md transition-all hover:bg-[#051126] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                // Muted Icon (volume-x)
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                // Unmuted Icon (volume-2)
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
