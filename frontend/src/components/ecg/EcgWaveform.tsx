import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Activity, Heart, ShieldCheck, Zap } from 'lucide-react';
import { cardiacAudio } from '../../utils/sound';

interface EcgWaveformProps {
  initialBpm?: number;
  height?: number;
  showControls?: boolean;
  className?: string;
  theme?: 'dark' | 'light';
}

export const EcgWaveform: React.FC<EcgWaveformProps> = ({
  initialBpm = 72,
  height = 180,
  showControls = true,
  className = '',
  theme = 'dark',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bpm, setBpm] = useState<number>(initialBpm);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [heartbeatBeat, setHeartbeatBeat] = useState<boolean>(false);

  const bpmRef = useRef<number>(initialBpm);
  bpmRef.current = bpm;

  const isAudioActiveRef = useRef<boolean>(isAudioActive);
  isAudioActiveRef.current = isAudioActive;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    canvas.height = height;

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Waveform parameters
    let scanX = 0;
    const speed = 2.4; // Pixels per frame
    const points: number[] = new Array(Math.ceil(width)).fill(height / 2);

    let cycleProgress = 0; // 0 to 1
    let lastCycle = 0;

    /**
     * Mathematical model of a physiological P-Q-R-S-T wave complex
     */
    const getEcgDisplacement = (t: number): number => {
      // t goes from 0.0 to 1.0 per heartbeat cycle
      if (t < 0.12) {
        // Isoelectric baseline before P
        return 0;
      } else if (t < 0.22) {
        // P-wave (Atrial Depolarization)
        const pPhase = (t - 0.12) / 0.1;
        return Math.sin(pPhase * Math.PI) * -16;
      } else if (t < 0.32) {
        // PR Segment (AV Node Delay)
        return 0;
      } else if (t < 0.35) {
        // Q-wave (Septal Depolarization)
        const qPhase = (t - 0.32) / 0.03;
        return Math.sin(qPhase * Math.PI) * 12;
      } else if (t < 0.40) {
        // R-wave (Ventricular Depolarization Spike)
        const rPhase = (t - 0.35) / 0.05;
        return -Math.sin(rPhase * Math.PI) * 75; // Sharp peak upwards
      } else if (t < 0.44) {
        // S-wave
        const sPhase = (t - 0.4) / 0.04;
        return Math.sin(sPhase * Math.PI) * 24;
      } else if (t < 0.54) {
        // ST Segment (Plateau)
        return 0;
      } else if (t < 0.72) {
        // T-wave (Ventricular Repolarization)
        const tPhase = (t - 0.54) / 0.18;
        return Math.sin(tPhase * Math.PI) * -22;
      } else {
        // TP baseline
        return 0;
      }
    };

    let lastBeatTrigger = 0;

    const render = (time: number) => {
      animationId = requestAnimationFrame(render);

      const currentBpm = bpmRef.current;
      const cycleDurationMs = (60 / currentBpm) * 1000;

      // Cycle calculation
      cycleProgress = ((time % cycleDurationMs) / cycleDurationMs);

      // Trigger beat visual bounce on R-wave peak (around t = 0.37)
      if (cycleProgress >= 0.35 && cycleProgress < 0.42 && time - lastBeatTrigger > 300) {
        lastBeatTrigger = time;
        setHeartbeatBeat(true);
        setTimeout(() => setHeartbeatBeat(false), 140);
      }

      // Calculate baseline
      const midY = height / 2;
      const displacement = getEcgDisplacement(cycleProgress);
      const currentY = midY + displacement;

      // Update scan buffer
      for (let s = 0; s < Math.ceil(speed); s++) {
        const xIdx = Math.floor((scanX + s) % width);
        points[xIdx] = currentY;
      }

      scanX = (scanX + speed) % width;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Grid Background
      ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(148, 163, 184, 0.12)';
      ctx.lineWidth = 1;
      const gridSize = 20;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Draw Phosphor ECG Waveform
      const strokeColor = '#E63946'; // Crimson red
      const glowColor = 'rgba(230, 57, 70, 0.55)';

      // Draw past trail with soft fade
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = strokeColor;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 12;

      ctx.beginPath();
      let isFirst = true;

      // Draw two segments to handle sweep wrap-around seamlessly
      const eraseGap = 24; // Eraser gap right in front of scan head
      for (let x = 0; x < width; x++) {
        // Skip points right in front of scanX to create the classic radar sweep effect
        const distFromScan = (x - scanX + width) % width;
        if (distFromScan < eraseGap) {
          isFirst = true;
          continue;
        }

        const y = points[x] || midY;
        if (isFirst) {
          ctx.moveTo(x, y);
          isFirst = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.restore();

      // 3. Draw Scan Head Glow Leading Edge
      ctx.save();
      const headY = points[Math.floor(scanX)] || midY;

      // Glowing dot
      ctx.beginPath();
      ctx.arc(scanX, headY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#FF4D6D';
      ctx.shadowBlur = 15;
      ctx.fill();

      // Vertical scanner bar
      const grad = ctx.createLinearGradient(scanX, 0, scanX, height);
      grad.addColorStop(0, 'rgba(230, 57, 70, 0)');
      grad.addColorStop(0.5, 'rgba(230, 57, 70, 0.25)');
      grad.addColorStop(1, 'rgba(230, 57, 70, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(scanX - 2, 0, 4, height);
      ctx.restore();
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [bpm, height, theme]);

  // Audio Toggle
  const toggleAudio = () => {
    const nextState = !isAudioActive;
    setIsAudioActive(nextState);
    cardiacAudio.setMuted(!nextState, bpm);
  };

  const handleBpmChange = (newBpm: number) => {
    setBpm(newBpm);
    cardiacAudio.updateBpm(newBpm);
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border ${
        theme === 'dark'
          ? 'bg-navy-950 border-slate-800 text-white shadow-2xl'
          : 'bg-white border-slate-200 text-slate-900 shadow-premium'
      } ${className}`}
    >
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 border-b border-white/10 backdrop-blur-sm bg-black/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Heart
              className={`w-5 h-5 text-cardio-red transition-transform duration-100 ${
                heartbeatBeat ? 'scale-130 fill-cardio-red' : 'scale-100'
              }`}
            />
            <span className="font-mono text-2xl font-bold tracking-tight">{bpm}</span>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">BPM</span>
          </div>

          <div className="h-5 w-px bg-slate-700/60 hidden sm:block" />

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Normal Sinus Rhythm</span>
          </div>
        </div>

        {/* Telemetry Readouts */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="hidden md:flex items-center gap-1">
            <span className="text-slate-500">PR:</span>
            <span className="text-slate-200">158ms</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <span className="text-slate-500">QRS:</span>
            <span className="text-slate-200">88ms</span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            <span className="text-slate-500">QTc:</span>
            <span className="text-slate-200">412ms</span>
          </div>

          {/* Audio Synthesizer Heartbeat Toggle */}
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-sans transition-all ${
              isAudioActive
                ? 'bg-cardio-red/20 border-cardio-red text-cardio-pulse shadow-sm'
                : 'bg-slate-800/70 border-slate-700 text-slate-300 hover:text-white'
            }`}
            title={isAudioActive ? 'Mute Heartbeat Sound' : 'Play Physiological Heartbeat Sound (Web Audio)'}
          >
            {isAudioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isAudioActive ? 'Sound On' : 'Heartbeat Audio'}</span>
          </button>
        </div>
      </div>

      {/* Real-time Canvas */}
      <div className="relative w-full">
        <canvas ref={canvasRef} className="w-full block" />

        {/* Watermark / Lead indicator */}
        <div className="absolute bottom-3 left-5 pointer-events-none flex items-center gap-3 text-[11px] font-mono text-slate-500">
          <span>LEAD II (Standard Calibration: 25mm/s, 10mm/mV)</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline text-slate-400">Dr. B. Vijaya Chaitanya Cardiology Lab</span>
        </div>
      </div>

      {/* Bottom Interactive Presets */}
      {showControls && (
        <div className="flex flex-wrap items-center justify-between px-5 py-3 border-t border-white/10 bg-black/10 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium">Heart Rate Mode:</span>
            <div className="flex gap-1.5">
              {[
                { label: 'Resting (58)', val: 58 },
                { label: 'Normal (72)', val: 72 },
                { label: 'Cardio Active (102)', val: 102 },
              ].map((preset) => (
                <button
                  key={preset.val}
                  onClick={() => handleBpmChange(preset.val)}
                  className={`px-2.5 py-1 rounded-md transition-all font-mono ${
                    bpm === preset.val
                      ? 'bg-cardio-red text-white font-semibold'
                      : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <Zap className="w-3 h-3 text-amber-400" />
            <span>Real-time physiological algorithm with cardiac acoustic synthesis</span>
          </div>
        </div>
      )}
    </div>
  );
};
