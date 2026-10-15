"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const HEART_IMAGE = "/heart.png";
const BPM_OPTIONS = [60, 72, 98, 115];

export function HeartbeatExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const bpmRef = useRef(72);
  const playingRef = useRef(false);
  const inViewRef = useRef(false);
  const userPausedRef = useRef(false);

  const [bpm, setBpm] = useState(72);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(45);
  const audioRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextBeatRef = useRef(0);

  // Initialize WebGL Three.js inside the circular frame
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = visualRef.current;
    if (!canvas || !host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, -0.05, 7.8);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;

    scene.add(new THREE.AmbientLight(0xffffff, 1.9));
    const key = new THREE.DirectionalLight(0xffd2d0, 2.2);
    key.position.set(-3, 4, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0xff183b, 8, 15);
    rim.position.set(2, -1, 4);
    scene.add(rim);

    const heart = new THREE.Group();
    scene.add(heart);
    let heartMesh: THREE.Mesh | undefined;
    const texture = new THREE.TextureLoader().load(HEART_IMAGE, (loaded) => {
      loaded.colorSpace = THREE.SRGBColorSpace;
      const aspect = loaded.image.width / loaded.image.height;
      heartMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(3.95 * aspect, 3.95),
        new THREE.MeshBasicMaterial({
          map: loaded,
          transparent: true,
          side: THREE.DoubleSide,
          toneMapped: false,
        }),
      );
      heart.add(heartMesh);
    });

    // Dual-tone particles matching red and cyan vessels
    const particleGeometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const colorRed = new THREE.Color(0xff4056);
    const colorCyan = new THREE.Color(0x00d2ff);

    for (let i = 0; i < 360; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * 2.1;
      positions.push(Math.cos(angle) * radius, (Math.random() - 0.5) * 4.2, Math.sin(angle) * radius - 0.7);
      const isCyan = Math.random() > 0.65;
      const c = isCyan ? colorCyan : colorRed;
      colors.push(c.r, c.g, c.b);
    }

    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    const dust = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        size: 0.022,
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      }),
    );
    scene.add(dust);

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.position.z = window.innerWidth < 850 ? 8.2 : 7.8;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    let phase = 0;
    let previous = performance.now();
    let frame = 0;
    const beatShape = (time: number) => {
      const period = 60 / bpmRef.current;
      const x = (time % period) / period;
      const pulse = (center: number, width: number) => Math.exp(-Math.pow((x - center) / width, 2));
      return 1 + 0.055 * pulse(0.05, 0.035) + 0.105 * pulse(0.105, 0.045) + 0.038 * pulse(0.18, 0.065);
    };

    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      const dt = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      if (playingRef.current) phase += dt;
      const pulse = beatShape(phase);
      heart.scale.setScalar(pulse);
      heart.rotation.y = Math.sin(now * 0.00035) * 0.055;
      heart.rotation.z = Math.sin(now * 0.0005) * 0.012;
      dust.rotation.y += dt * 0.025;
      rim.intensity = playingRef.current ? 7 + Math.max(0, pulse - 1) * 32 : 3.8;
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      texture.dispose();
      heartMesh?.geometry.dispose();
      (heartMesh?.material as THREE.Material | undefined)?.dispose();
      particleGeometry.dispose();
      (dust.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  const ensureAudioContext = () => {
    if (!audioRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const context = new AudioCtx();
      const master = context.createGain();
      master.gain.value = volume / 100;
      master.connect(context.destination);
      audioRef.current = context;
      masterRef.current = master;
    }
    return audioRef.current;
  };

  const thump = (when: number, frequency: number, duration: number, gain: number, cutoff: number) => {
    const context = audioRef.current;
    const master = masterRef.current;
    if (!context || !master) return;
    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();
    const amplitude = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, when);
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(30, frequency * 0.48), when + duration);
    filter.type = "lowpass";
    filter.frequency.value = cutoff;
    amplitude.gain.setValueAtTime(0.0001, when);
    amplitude.gain.exponentialRampToValueAtTime(gain, when + 0.012);
    amplitude.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    oscillator.connect(filter).connect(amplitude).connect(master);
    oscillator.start(when);
    oscillator.stop(when + duration + 0.02);
  };

  const scheduleBeat = (time: number) => {
    thump(time, 78, 0.18, 0.8, 155);
    thump(time + 0.16, 58, 0.22, 0.48, 115);
  };

  const scheduleLoop = () => {
    const context = audioRef.current;
    if (!context || !playingRef.current) return;
    while (nextBeatRef.current < context.currentTime + 0.12) {
      scheduleBeat(nextBeatRef.current);
      nextBeatRef.current += 60 / bpmRef.current;
    }
    timerRef.current = setTimeout(scheduleLoop, 35);
  };

  const startHeartbeat = async () => {
    playingRef.current = true;
    setPlaying(true);

    try {
      const context = ensureAudioContext();
      if (context.state === "suspended") {
        await context.resume();
      }
      if (timerRef.current) clearTimeout(timerRef.current);
      nextBeatRef.current = context.currentTime + 0.05;
      scheduleLoop();
    } catch {
      // Browser autoplay restriction handling:
      // Listen to first user gesture (scroll, click, touch) to unlock audio
      const unlockAudio = async () => {
        window.removeEventListener("pointerdown", unlockAudio);
        window.removeEventListener("touchstart", unlockAudio);
        window.removeEventListener("scroll", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
        if (inViewRef.current && !userPausedRef.current) {
          try {
            const ctx = ensureAudioContext();
            if (ctx.state === "suspended") await ctx.resume();
            if (timerRef.current) clearTimeout(timerRef.current);
            nextBeatRef.current = ctx.currentTime + 0.05;
            scheduleLoop();
          } catch {}
        }
      };
      window.addEventListener("pointerdown", unlockAudio, { once: true });
      window.addEventListener("touchstart", unlockAudio, { once: true });
      window.addEventListener("scroll", unlockAudio, { once: true, passive: true });
      window.addEventListener("keydown", unlockAudio, { once: true });
    }
  };

  const pauseHeartbeat = () => {
    playingRef.current = false;
    setPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioRef.current && audioRef.current.state === "running") {
      audioRef.current.suspend().catch(() => {});
    }
  };

  // Auto-play when section enters viewport, auto-pause when section leaves viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          inViewRef.current = true;
          if (!userPausedRef.current) {
            startHeartbeat();
          }
        } else {
          inViewRef.current = false;
          pauseHeartbeat();
          // Reset manual pause flag so next time user scrolls into this section, it plays again
          userPausedRef.current = false;
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      pauseHeartbeat();
    };
  }, []);

  const togglePlayback = async () => {
    if (playingRef.current) {
      userPausedRef.current = true;
      pauseHeartbeat();
    } else {
      userPausedRef.current = false;
      await startHeartbeat();
    }
  };

  const setBpmValue = (value: number) => {
    bpmRef.current = value;
    setBpm(value);
    if (playingRef.current && audioRef.current) {
      if (timerRef.current) clearTimeout(timerRef.current);
      nextBeatRef.current = audioRef.current.currentTime + 0.04;
      scheduleLoop();
    }
  };

  const changeVolume = (value: number) => {
    setVolume(value);
    const context = audioRef.current;
    const master = masterRef.current;
    if (context && master) master.gain.setTargetAtTime(value / 100, context.currentTime, 0.04);
  };

  return (
    <section
      id="heartbeat-experience"
      ref={sectionRef}
      className={`pulse-app${playing ? " is-playing" : ""} bg-[#000000]`}
    >
      <div className="pulse-noise" />

      <main className="pulse-main">
        <section className="pulse-copy">
          <div className="pulse-eyebrow">A study in rhythm</div>
          <h1>
            Feel the<br />
            <span>life within.</span>
          </h1>
          <p className="pulse-sub">
            An anatomical heartbeat, brought to life. Choose a rhythm and listen to every beat.
          </p>
          <div className="pulse-label">SET HEART RATE · BPM</div>
          <div className="pulse-bpm-options" role="group" aria-label="Set beats per minute">
            {BPM_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={bpm === option ? "active" : ""}
                aria-pressed={bpm === option}
                onClick={() => setBpmValue(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </section>

        <section className="pulse-visual" aria-label="Animated anatomical heart">
          <div className="pulse-circle-container">
            {/* Outer telemetry orbit rings with cyan and crimson glow */}
            <div className="pulse-orbit-ring pulse-orbit-outer" />
            <div className="pulse-orbit-ring pulse-orbit-middle" />

            {/* Glowing circular halo behind the heart */}
            <div className="pulse-circle-halo" />

            {/* Main Circular Container with Glowing Border */}
            <div className="pulse-circle-frame" ref={visualRef}>
              <canvas ref={canvasRef} />
              {/* Inner subtle vignette to seamlessly blend edges */}
              <div className="pulse-circle-inner-shadow" />
            </div>
          </div>

          <div className="pulse-visual-label">CARDIAC CYCLE · {bpm} BPM</div>
        </section>
      </main>

      <footer className="pulse-footer">
        <div className="pulse-readout">
          <div>
            <div className="pulse-number">
              {bpm}<span> BPM</span>
            </div>
            <div className="pulse-caption">beats per minute</div>
          </div>
          <div className="pulse-wave" aria-hidden="true">
            {Array.from({ length: 31 }, (_, i) => (
              <i key={i} style={{ animationDelay: `${i * 0.019}s` }} />
            ))}
          </div>
        </div>
        <div className="pulse-controls">
          <label className="pulse-volume" aria-label="Volume">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
            </svg>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(event) => changeVolume(Number(event.target.value))}
            />
          </label>
          <span className="pulse-state">{playing ? "SOUND ON" : "SOUND OFF"}</span>
          <button
            className="pulse-play"
            type="button"
            onClick={togglePlayback}
            aria-label={playing ? "Pause heartbeat" : "Start heartbeat"}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 5h4v14H7zM15 5h4v14h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m8 5 12 7-12 7V5Z" />
              </svg>
            )}
          </button>
        </div>
      </footer>
      <style>{`
        .pulse-app {
          --red: #ff334e;
          min-height: 650px;
          height: auto;
          display: grid;
          grid-template-rows: 1fr 102px;
          padding: 40px 5.5vw 0;
          overflow: hidden;
          background: #000000;
          color: #f4f2f4;
          font-family: var(--font-poppins), 'Poppins', sans-serif !important;
          position: relative;
          isolation: isolate;
        }
        .pulse-app * {
          box-sizing: border-box;
          font-family: var(--font-poppins), 'Poppins', sans-serif !important;
        }
        .pulse-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .08;
          z-index: -1;
        }
        .pulse-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 0;
          border-top: 1px solid #ffffff18;
          padding: 20px 0;
        }
        .pulse-readout,
        .pulse-controls,
        .pulse-volume,
        .pulse-bpm-options {
          display: flex;
          align-items: center;
        }
        .pulse-main {
          display: grid;
          grid-template-columns: minmax(310px, .82fr) minmax(420px, 1.18fr);
          align-items: center;
          max-width: 1300px;
          width: 100%;
          margin: auto;
          padding: 24px 0;
        }
        .pulse-copy {
          padding: 0 0 18px 3vw;
          position: relative;
          z-index: 2;
        }
        .pulse-eyebrow,
        .pulse-label,
        .pulse-state,
        .pulse-visual-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: .16em;
        }
        .pulse-eyebrow {
          color: var(--secondary, #38bdf8);
          text-transform: uppercase;
          margin-bottom: 23px;
        }
        .pulse-eyebrow:before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: var(--red);
          vertical-align: middle;
          margin-right: 11px;
        }
        .pulse-copy h1 {
          font-size: clamp(44px, 6vw, 82px);
          line-height: .99;
          letter-spacing: -.03em;
          font-weight: 600;
          margin: 0 0 20px;
        }
        .pulse-copy h1 span {
          color: #77747d;
        }
        .pulse-sub {
          color: #99969f;
          line-height: 1.7;
          font-size: 14px;
          max-width: 340px;
          margin: 0 0 34px;
        }
        .pulse-label {
          color: #88858e;
          margin-bottom: 12px;
        }
        .pulse-bpm-options {
          gap: 8px;
        }
        .pulse-bpm-options button {
          width: 55px;
          height: 42px;
          border: 1px solid #ffffff24;
          border-radius: 9px;
          background: #ffffff08;
          color: #bbb8c0;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pulse-bpm-options button.active {
          background: var(--red);
          color: #fff;
          border-color: var(--red);
          box-shadow: 0 5px 20px #ff334e3b;
        }

        /* Circular Visual Frame with Glowing Border */
        .pulse-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 480px;
          padding: 20px 0;
        }
        .pulse-circle-container {
          position: relative;
          width: min(80vw, 440px);
          height: min(80vw, 440px);
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pulse-circle-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: radial-gradient(circle at center, #140508 0%, #060204 65%, #000000 100%);
          border: 3px solid rgba(255, 51, 78, 0.75);
          box-shadow: 
            0 0 30px rgba(255, 51, 78, 0.35),
            0 0 65px rgba(0, 210, 255, 0.2),
            inset 0 0 40px rgba(255, 30, 60, 0.28),
            inset 0 0 80px rgba(0, 0, 0, 0.85);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          z-index: 2;
        }
        .is-playing .pulse-circle-frame {
          border-color: rgba(255, 60, 85, 0.95);
          box-shadow: 
            0 0 40px rgba(255, 51, 78, 0.55),
            0 0 85px rgba(0, 210, 255, 0.32),
            inset 0 0 45px rgba(255, 30, 60, 0.35),
            inset 0 0 80px rgba(0, 0, 0, 0.85);
        }
        .pulse-circle-frame canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
        }
        .pulse-circle-inner-shadow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: inset 0 0 35px rgba(0, 0, 0, 0.9);
          z-index: 3;
        }
        .pulse-orbit-middle {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 210, 255, 0.32);
          pointer-events: none;
          z-index: 1;
        }
        .pulse-orbit-outer {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          border: 1px dashed rgba(255, 65, 85, 0.28);
          pointer-events: none;
          z-index: 1;
          animation: orbitRotate 60s linear infinite;
        }
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .pulse-circle-halo {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 40, 70, 0.28) 0%, rgba(0, 210, 255, 0.12) 45%, transparent 70%);
          filter: blur(20px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
          transition: opacity 0.5s ease;
        }
        .is-playing .pulse-circle-halo {
          opacity: 1;
          animation: haloPulse 1.4s ease-in-out infinite alternate;
        }
        @keyframes haloPulse {
          0% { transform: scale(0.96); opacity: 0.65; }
          100% { transform: scale(1.06); opacity: 1; }
        }
        .pulse-visual-label {
          margin-top: 24px;
          color: #8a8692;
          font-size: 11px;
          letter-spacing: .18em;
          font-weight: 600;
          text-align: center;
        }

        .pulse-readout {
          gap: 15px;
        }
        .pulse-number {
          font-size: 36px;
          letter-spacing: -.03em;
          font-weight: 600;
          line-height: 1;
        }
        .pulse-number span {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .13em;
          color: #88858e;
        }
        .pulse-caption {
          font-size: 11px;
          color: #a6a3ab;
          margin-top: 5px;
        }
        .pulse-wave {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 35px;
          margin-left: 12px;
        }
        .pulse-wave i {
          display: block;
          width: 2px;
          height: 5px;
          background: #ff4056;
          border-radius: 2px;
          opacity: .7;
        }
        .is-playing .pulse-wave i {
          animation: pulseWave .72s ease-in-out infinite alternate;
        }
        .pulse-wave i:nth-child(3n) { animation-delay: .12s; }
        .pulse-wave i:nth-child(3n + 1) { animation-delay: .25s; }
        .pulse-wave i:nth-child(4n) { animation-delay: .36s; }
        @keyframes pulseWave {
          to {
            height: 25px;
            opacity: 1;
          }
        }
        .pulse-controls {
          gap: 20px;
        }
        .pulse-volume {
          gap: 10px;
          color: #aaa7b0;
        }
        .pulse-volume svg {
          width: 16px;
          height: 16px;
        }
        .pulse-volume input {
          width: 92px;
          accent-color: var(--red);
          height: 3px;
        }
        .pulse-state {
          font-size: 9px;
          font-weight: 600;
          color: #68656f;
        }
        .pulse-play {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 0;
          background: #f6f3f5;
          color: #111;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: transform .2s;
        }
        .pulse-play:hover {
          transform: scale(1.06);
        }
        .pulse-play svg {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 850px) {
          .pulse-app {
            min-height: 720px;
            height: auto;
            padding: 30px 7vw 0;
            grid-template-rows: 1fr auto;
            gap: 20px;
          }
          .pulse-main {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            padding-top: 16px;
          }
          .pulse-copy {
            padding: 0;
            grid-row: 1;
          }
          .pulse-eyebrow { margin-bottom: 14px; }
          .pulse-copy h1 {
            font-size: clamp(38px, 9vw, 56px);
            margin-bottom: 12px;
          }
          .pulse-sub {
            font-size: 13px;
            margin-bottom: 22px;
          }
          .pulse-visual {
            grid-row: 2;
            min-height: 340px;
            margin-top: 10px;
          }
          .pulse-circle-container {
            width: min(78vw, 320px);
            height: min(78vw, 320px);
          }
          .pulse-state { display: none; }
          .pulse-wave { margin-left: 0; }
        }
        @media (max-width: 440px) {
          .pulse-app { padding: 24px 5vw 0; }
          .pulse-copy h1 { font-size: 38px; }
          .pulse-visual { min-height: 290px; }
          .pulse-circle-container {
            width: min(80vw, 270px);
            height: min(80vw, 270px);
          }
          .pulse-controls { gap: 12px; }
          .pulse-volume input { width: 60px; }
          .pulse-readout { gap: 8px; }
          .pulse-number { font-size: 28px; }
        }
      `}</style>
    </section>
  );
}

export default HeartbeatExperience;
