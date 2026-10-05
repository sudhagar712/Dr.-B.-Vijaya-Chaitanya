import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, RotateCcw, Zap, Sparkles, Layers, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Heart3D() {
  const containerRef = useRef(null);
  const [activeMode, setActiveMode] = useState('normal'); // 'normal' | 'stent' | 'wireframe'
  const [bpm, setBpm] = useState(72);
  const [isRotating, setIsRotating] = useState(true);

  // References to communicate between React state and Three.js animation loop
  const sceneState = useRef({
    bpm: 72,
    mode: 'normal',
    stentExpansion: 0,
    isStentAnimating: false,
    autoRotate: true,
  });

  useEffect(() => {
    sceneState.current.bpm = bpm;
  }, [bpm]);

  useEffect(() => {
    sceneState.current.mode = activeMode;
  }, [activeMode]);

  useEffect(() => {
    sceneState.current.autoRotate = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xff3355, 3.8);
    keyLight.position.set(6, 8, 6);
    scene.add(keyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x0284c7, 3.5);
    cyanRimLight.position.set(-6, -4, -4);
    scene.add(cyanRimLight);

    const backLight = new THREE.PointLight(0x2563eb, 2.5, 15);
    backLight.position.set(0, 4, -4);
    scene.add(backLight);

    // Subtle soft bottom light
    const bottomLight = new THREE.DirectionalLight(0xffffff, 1.2);
    bottomLight.position.set(0, -6, 2);
    scene.add(bottomLight);

    // --- MAIN HEART GROUP ---
    const heartGroup = new THREE.Group();
    scene.add(heartGroup);

    // 1. ANATOMICAL HEART MUSCLE (Myocardium: Ventricles & Atria)
    const heartShape = new THREE.Shape();
    const x0 = 0, y0 = 0;
    heartShape.moveTo(x0 + 0, y0 + 0.8);
    heartShape.bezierCurveTo(x0 + 0, y0 + 1.2, x0 - 0.7, y0 + 1.8, x0 - 1.4, y0 + 1.8);
    heartShape.bezierCurveTo(x0 - 2.2, y0 + 1.8, x0 - 2.2, y0 + 0.8, x0 - 2.2, y0 + 0.8);
    heartShape.bezierCurveTo(x0 - 2.2, y0 - 0.2, x0 - 1.5, y0 - 1.2, x0 + 0, y0 - 2.3);
    heartShape.bezierCurveTo(x0 + 1.5, y0 - 1.2, x0 + 2.2, y0 - 0.2, x0 + 2.2, y0 + 0.8);
    heartShape.bezierCurveTo(x0 + 2.2, y0 + 0.8, x0 + 2.2, y0 + 1.8, x0 + 1.4, y0 + 1.8);
    heartShape.bezierCurveTo(x0 + 0.7, y0 + 1.8, x0 + 0, y0 + 1.2, x0 + 0, y0 + 0.8);

    const extrudeSettings = {
      steps: 4,
      depth: 1.4,
      bevelEnabled: true,
      bevelThickness: 0.8,
      bevelSize: 0.7,
      bevelOffset: 0,
      bevelSegments: 16,
    };

    const heartGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    heartGeo.center();

    // Heart Surface Shader / Material - Vibrant Ruby on Light Background
    const heartMat = new THREE.MeshPhysicalMaterial({
      color: 0xd90429,
      emissive: 0x4a000d,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.12,
      clearcoat: 0.95,
      clearcoatRoughness: 0.1,
      transmission: 0.1,
      ior: 1.45,
    });

    const heartMesh = new THREE.Mesh(heartGeo, heartMat);
    heartMesh.scale.set(0.9, 0.9, 0.9);
    heartMesh.rotation.z = Math.PI;
    heartGroup.add(heartMesh);

    // 2. AORTIC ARCH (Ascending Aorta, Arch, and Branches)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.1, 0.5, 0),
      new THREE.Vector3(0.2, 1.8, 0.2),
      new THREE.Vector3(-0.4, 2.5, 0.1),
      new THREE.Vector3(-1.2, 2.1, -0.2),
      new THREE.Vector3(-1.4, 0.8, -0.4),
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 40, 0.42, 16, false);
    const aortaMat = new THREE.MeshPhysicalMaterial({
      color: 0xef233c,
      emissive: 0x6b0010,
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 0.1,
      clearcoat: 0.9,
    });
    const aortaMesh = new THREE.Mesh(aortaGeo, aortaMat);
    heartGroup.add(aortaMesh);

    // Aortic vessel branches
    const branchCurve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.1, 2.3, 0.1),
      new THREE.Vector3(-0.05, 3.1, 0.1),
    ]);
    const branchCurve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.5, 2.45, 0.05),
      new THREE.Vector3(-0.6, 3.15, 0.05),
    ]);
    const branchCurve3 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.9, 2.3, -0.1),
      new THREE.Vector3(-1.1, 3.0, -0.1),
    ]);

    [branchCurve1, branchCurve2, branchCurve3].forEach((c) => {
      const bGeo = new THREE.TubeGeometry(c, 10, 0.14, 10, false);
      const bMesh = new THREE.Mesh(bGeo, aortaMat);
      heartGroup.add(bMesh);
    });

    // 3. PULMONARY TRUNK & ARTERY (Sapphire Blue)
    const pulmCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.4, 0.3, 0.4),
      new THREE.Vector3(-0.6, 1.4, 0.3),
      new THREE.Vector3(0.5, 1.6, -0.3),
    ]);
    const pulmGeo = new THREE.TubeGeometry(pulmCurve, 30, 0.36, 16, false);
    const pulmMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x034b75,
      emissiveIntensity: 0.4,
      roughness: 0.25,
      metalness: 0.15,
      clearcoat: 0.85,
    });
    const pulmMesh = new THREE.Mesh(pulmGeo, pulmMat);
    heartGroup.add(pulmMesh);

    // 4. SUPERIOR VENA CAVA
    const svcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.2, 0.2, -0.2),
      new THREE.Vector3(1.3, 1.8, -0.1),
      new THREE.Vector3(1.2, 2.6, -0.1),
    ]);
    const svcGeo = new THREE.TubeGeometry(svcCurve, 20, 0.32, 14, false);
    const svcMesh = new THREE.Mesh(svcGeo, pulmMat);
    heartGroup.add(svcMesh);

    // 5. CORONARY ARTERIES (LAD - Left Anterior Descending, RCA, LCx)
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.3, 0.9, 0.85),
      new THREE.Vector3(-0.2, 0.3, 1.05),
      new THREE.Vector3(-0.05, -0.4, 1.12),
      new THREE.Vector3(0.15, -1.1, 0.95),
      new THREE.Vector3(0.1, -1.8, 0.65),
    ]);
    const ladGeo = new THREE.TubeGeometry(ladCurve, 40, 0.1, 12, false);
    const coronaryMat = new THREE.MeshStandardMaterial({
      color: 0xff0033,
      emissive: 0xcc0029,
      emissiveIntensity: 0.8,
      roughness: 0.3,
    });
    const ladMesh = new THREE.Mesh(ladGeo, coronaryMat);
    heartGroup.add(ladMesh);

    // Diagonal branch of LAD
    const diagCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, 0.1, 1.05),
      new THREE.Vector3(-0.7, -0.5, 0.85),
      new THREE.Vector3(-1.1, -1.2, 0.4),
    ]);
    const diagGeo = new THREE.TubeGeometry(diagCurve, 20, 0.065, 8, false);
    const diagMesh = new THREE.Mesh(diagGeo, coronaryMat);
    heartGroup.add(diagMesh);

    // Right Coronary Artery (RCA)
    const rcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.6, 0.7, 0.7),
      new THREE.Vector3(1.1, 0.0, 0.75),
      new THREE.Vector3(1.3, -0.8, 0.4),
      new THREE.Vector3(0.9, -1.6, 0.2),
    ]);
    const rcaGeo = new THREE.TubeGeometry(rcaCurve, 30, 0.08, 10, false);
    const rcaMesh = new THREE.Mesh(rcaGeo, coronaryMat);
    heartGroup.add(rcaMesh);

    // 6. INTERACTIVE 3D CORONARY STENT & BALLOON (Angioplasty Simulation)
    const stentLength = 0.65;
    const stentGeo = new THREE.CylinderGeometry(0.14, 0.14, stentLength, 24, 16, true);
    const stentMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x0284c7,
      emissiveIntensity: 0.9,
      metalness: 0.95,
      roughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const stentMesh = new THREE.Mesh(stentGeo, stentMat);
    stentMesh.position.set(-0.05, -0.4, 1.12);
    stentMesh.rotation.x = -0.3;
    stentMesh.rotation.z = -0.25;
    stentMesh.scale.set(0.6, 1, 0.6);
    heartGroup.add(stentMesh);

    // Plaque Atherosclerosis
    const plaqueGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const plaqueMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0xb45309,
      emissiveIntensity: 0.3,
      roughness: 0.8,
    });
    const plaqueMesh = new THREE.Mesh(plaqueGeo, plaqueMat);
    plaqueMesh.position.set(-0.05, -0.4, 1.12);
    heartGroup.add(plaqueMesh);

    // 7. CIRCULATING ERYTHROCYTE BLOOD PARTICLES
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 2.2;
      const py = (Math.random() - 0.5) * 4.0;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius * 0.8;

      particleSpeeds[i] = 0.02 + Math.random() * 0.03;

      const isArterial = Math.random() > 0.4;
      if (isArterial) {
        particleColors[i * 3] = 0.9;     // R
        particleColors[i * 3 + 1] = 0.1; // G
        particleColors[i * 3 + 2] = 0.2; // B
      } else {
        particleColors[i * 3] = 0.05;    // R
        particleColors[i * 3 + 1] = 0.5; // G
        particleColors[i * 3 + 2] = 0.9; // B
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.5, 'rgba(230,57,70,0.8)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      depthWrite: false,
    });
    const bloodParticles = new THREE.Points(particleGeo, particleMat);
    heartGroup.add(bloodParticles);

    // 8. GLOWING CONDUCTION RING
    const ringGeo = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.25,
    });
    const pulseRing = new THREE.Mesh(ringGeo, ringMat);
    pulseRing.rotation.x = Math.PI / 2.3;
    scene.add(pulseRing);

    // --- MOUSE INTERACTION & DRAG ORBIT ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let mouseParallax = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseParallax = { x, y };

      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      heartGroup.rotation.y += deltaX * 0.008;
      heartGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch support for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;
      heartGroup.rotation.y += deltaX * 0.008;
      heartGroup.rotation.x += deltaY * 0.008;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    domElement.addEventListener('touchstart', handleTouchStart);
    domElement.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- ANIMATION LOOP ---
    let clock = new THREE.Clock();
    let currentStentScale = 0.6;
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const currentBpm = sceneState.current.bpm;

      // Realistic Double-Beat Cardiac Cycle (Lub-Dub)
      const beatCycle = (elapsedTime * (currentBpm / 60)) % 1;
      let scaleOffset = 0;
      if (beatCycle < 0.15) {
        scaleOffset = Math.sin((beatCycle / 0.15) * Math.PI) * 0.08;
      } else if (beatCycle > 0.22 && beatCycle < 0.38) {
        scaleOffset = Math.sin(((beatCycle - 0.22) / 0.16) * Math.PI) * 0.04;
      }

      const totalScale = 0.95 + scaleOffset;
      heartMesh.scale.set(totalScale, totalScale, totalScale);

      if (sceneState.current.autoRotate && !isDragging) {
        heartGroup.rotation.y += 0.004;
      }

      camera.position.x += (mouseParallax.x * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseParallax.y * 1.2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0.2, 0);

      if (sceneState.current.mode === 'wireframe') {
        heartMat.wireframe = true;
        aortaMat.wireframe = true;
      } else {
        heartMat.wireframe = false;
        aortaMat.wireframe = false;
      }

      if (sceneState.current.mode === 'stent') {
        currentStentScale += (1.8 - currentStentScale) * 0.06;
        stentMesh.scale.set(currentStentScale, 1.2, currentStentScale);
        stentMat.emissiveIntensity = 1.4 + Math.sin(elapsedTime * 6) * 0.4;
        plaqueMesh.scale.set(0.25, 0.25, 0.25);
        plaqueMesh.material.opacity = 0.3;
      } else {
        currentStentScale += (0.6 - currentStentScale) * 0.05;
        stentMesh.scale.set(currentStentScale, 1.0, currentStentScale);
        stentMat.emissiveIntensity = 0.8;
        plaqueMesh.scale.set(1.0, 1.0, 1.0);
        plaqueMesh.material.opacity = 1.0;
      }

      const positions = bloodParticles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const speedBoost = sceneState.current.mode === 'stent' ? 2.2 : 1.0;
        positions[i * 3 + 1] -= particleSpeeds[i] * speedBoost;

        if (positions[i * 3 + 1] < -2.8) {
          positions[i * 3 + 1] = 2.6;
        }
      }
      bloodParticles.geometry.attributes.position.needsUpdate = true;

      pulseRing.scale.x = 1 + (scaleOffset * 2.2);
      pulseRing.scale.y = 1 + (scaleOffset * 2.2);
      pulseRing.rotation.z += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('touchstart', handleTouchStart);
      domElement.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px] rounded-3xl overflow-hidden bg-white/95 border border-slate-200 shadow-xl flex flex-col justify-between">
      {/* Top Clinical Telemetry & Control Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 p-4 border-b border-slate-100 bg-slate-50/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cardio-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cardio-crimson"></span>
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest text-slate-900 uppercase font-bold">
              3D Cardiac Vasculature Model
            </span>
            <p className="text-[10px] text-slate-500 font-mono">
              MEDSTAR CATH LAB INTERVENTIONAL SIMULATOR
            </p>
          </div>
        </div>

        {/* Action Toggle Buttons */}
        <div className="flex items-center gap-2">
          {/* Stent Simulation Trigger Button */}
          <button
            onClick={() => setActiveMode(activeMode === 'stent' ? 'normal' : 'stent')}
            className={`btn btn-xs sm:btn-sm gap-1.5 transition-all font-mono text-xs rounded-xl ${
              activeMode === 'stent'
                ? 'bg-cardio-crimson text-white font-bold shadow-md'
                : 'btn-outline border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            {activeMode === 'stent' ? 'Stent Deployed' : 'Deploy Stent (Angioplasty)'}
          </button>

          {/* Wireframe Hologram View */}
          <button
            onClick={() => setActiveMode(activeMode === 'wireframe' ? 'normal' : 'wireframe')}
            className={`btn btn-xs sm:btn-sm btn-ghost text-xs font-mono rounded-xl ${
              activeMode === 'wireframe' ? 'text-cardio-crimson font-bold bg-slate-100' : 'text-slate-600'
            }`}
            title="Toggle Hologram Wireframe"
          >
            <Layers className="w-3.5 h-3.5" />
            Hologram
          </button>

          {/* Auto-rotate Toggle */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`btn btn-xs sm:btn-sm btn-ghost text-xs rounded-xl ${
              isRotating ? 'text-cardio-teal' : 'text-slate-400'
            }`}
            title="Auto-Rotate"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* THREE.JS WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative"
      >
        {/* Subtle Watermark Hint */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden sm:block">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-white/90 px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cardio-crimson animate-pulse" />
            Click & Drag to rotate 3D heart • Hover to inspect coronary tree
          </div>
        </div>

        {/* Stent Simulation Alert Callout */}
        {activeMode === 'stent' && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 bg-cardio-crimson/10 border border-cardio-crimson/40 px-5 py-2.5 rounded-2xl backdrop-blur-md shadow-lg animate-pulse flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-cardio-crimson" />
            <div>
              <p className="text-xs font-mono font-bold text-cardio-crimson">
                CORONARY ANGIOPLASTY & STENT EXPANSION ACTIVE
              </p>
              <p className="text-[11px] text-slate-700">
                LAD plaque compressed • Cobalt-chromium scaffold deployed • Myocardial perfusion restored
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Telemetry Bar with BPM selector */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 p-3 px-5 border-t border-slate-100 bg-slate-50/90 backdrop-blur-md">
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-cardio-crimson font-bold">
            <Activity className="w-4 h-4 animate-bounce" />
            <span>HEART RATE:</span>
            <span className="text-cardio-crimson text-sm bg-cardio-crimson/10 px-2 py-0.5 rounded border border-cardio-crimson/20">
              {bpm} BPM
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-500">
            <span>RHYTHM:</span>
            <span className="text-cardio-teal font-semibold">SINUS NORMAL</span>
          </div>
        </div>

        {/* BPM Quick Switcher */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-mono text-slate-500 mr-1 hidden sm:inline">SET BPM:</span>
          {[60, 72, 90, 115].map((val) => (
            <button
              key={val}
              onClick={() => setBpm(val)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                bpm === val
                  ? 'bg-cardio-crimson text-white font-bold shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
