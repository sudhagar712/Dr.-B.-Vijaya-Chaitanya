import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, Eye, Zap, RefreshCw } from 'lucide-react';

interface Heart3DCanvasProps {
  bpm?: number;
  interactive?: boolean;
  className?: string;
  onBpmChange?: (bpm: number) => void;
}

export const Heart3DCanvas: React.FC<Heart3DCanvasProps> = ({
  bpm: initialBpm = 72,
  interactive = true,
  className = '',
  onBpmChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bpm, setBpm] = useState<number>(initialBpm);
  const [viewMode, setViewMode] = useState<'solid' | 'hologram' | 'wireframe'>('solid');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [activeChamber, setActiveChamber] = useState<string>('Left Ventricle (Apex)');

  // Keep a ref to pass bpm to the animation loop
  const bpmRef = useRef<number>(initialBpm);
  bpmRef.current = bpm;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 6.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const primaryLight = new THREE.DirectionalLight(0xffffff, 1.4);
    primaryLight.position.set(5, 8, 6);
    scene.add(primaryLight);

    const redRimLight = new THREE.DirectionalLight(0xe63946, 2.2);
    redRimLight.position.set(-6, -2, -4);
    scene.add(redRimLight);

    const blueRimLight = new THREE.DirectionalLight(0x0077b6, 1.8);
    blueRimLight.position.set(4, -5, -3);
    scene.add(blueRimLight);

    // --- Heart Master Group ---
    const heartGroup = new THREE.Group();
    scene.add(heartGroup);

    // --- Procedural Heart Anatomy Construction ---
    // 1. Myocardium / Ventricle Geometry
    // We create an organic anatomical silhouette by deforming a sphere
    const ventricleGeo = new THREE.SphereGeometry(1.4, 48, 48);
    const posAttr = ventricleGeo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i);

      // Taper the bottom towards an apex (pointing slightly left and forward)
      if (vertex.y < 0) {
        const factor = 1 + vertex.y * 0.45;
        vertex.x *= Math.max(factor, 0.18);
        vertex.z *= Math.max(factor, 0.22);
        // Curve apex slightly to left
        vertex.x -= Math.pow(Math.abs(vertex.y), 1.6) * 0.18;
      } else {
        // Flatten superior base where great vessels attach
        vertex.y *= 0.85;
        vertex.x *= 1.08;
      }
      // Anterior fullness
      if (vertex.z > 0) {
        vertex.z *= 1.12;
      }

      posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    ventricleGeo.computeVertexNormals();

    // Premium cardiac materials
    const solidMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xba1a2b, // Deep rich cardiac red
      roughness: 0.28,
      metalness: 0.12,
      clearcoat: 0.85,
      clearcoatRoughness: 0.2,
      transmission: 0.35, // Translucent flesh/tissue glow
      thickness: 1.2,
      ior: 1.4,
    });

    const hologramMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00b4d8,
      roughness: 0.1,
      metalness: 0.8,
      wireframe: false,
      transmission: 0.8,
      opacity: 0.65,
      transparent: true,
      emissive: 0x003554,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xe63946,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    const ventricleMesh = new THREE.Mesh(ventricleGeo, solidMaterial);
    heartGroup.add(ventricleMesh);

    // 2. Aortic Arch (Great Vessel)
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, 0.8, 0.1),
      new THREE.Vector3(-0.1, 1.4, 0.15),
      new THREE.Vector3(0.25, 1.85, 0.0),
      new THREE.Vector3(0.65, 1.7, -0.3),
      new THREE.Vector3(0.7, 0.8, -0.4),
      new THREE.Vector3(0.65, -0.6, -0.45),
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 32, 0.32, 16, false);
    const aortaMat = new THREE.MeshStandardMaterial({
      color: 0xd90429,
      roughness: 0.3,
      metalness: 0.15,
      bumpScale: 0.05,
    });
    const aortaMesh = new THREE.Mesh(aortaGeo, aortaMat);
    heartGroup.add(aortaMesh);

    // 3. Brachiocephalic & Carotid Arterial Branches (3 ascending arches)
    const branchCurve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.1, 1.75, 0.08),
      new THREE.Vector3(0.08, 2.25, 0.12),
    ]);
    const branchCurve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.32, 1.8, -0.02),
      new THREE.Vector3(0.35, 2.3, 0.0),
    ]);
    const branchCurve3 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.52, 1.72, -0.15),
      new THREE.Vector3(0.6, 2.2, -0.15),
    ]);

    [branchCurve1, branchCurve2, branchCurve3].forEach((curve) => {
      const geo = new THREE.TubeGeometry(curve, 12, 0.09, 12, false);
      const mesh = new THREE.Mesh(geo, aortaMat);
      heartGroup.add(mesh);
    });

    // 4. Pulmonary Artery Trunk (Cranial branch under aorta)
    const pulmonaryCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.2, 0.7, 0.35),
      new THREE.Vector3(0.05, 1.25, 0.3),
      new THREE.Vector3(-0.35, 1.45, 0.1),
      new THREE.Vector3(-0.8, 1.35, -0.15),
    ]);
    const pulmonaryGeo = new THREE.TubeGeometry(pulmonaryCurve, 24, 0.28, 16, false);
    const pulmonaryMat = new THREE.MeshStandardMaterial({
      color: 0x0077b6, // Venous/pulmonary deep blue
      roughness: 0.35,
      metalness: 0.2,
    });
    const pulmonaryMesh = new THREE.Mesh(pulmonaryGeo, pulmonaryMat);
    heartGroup.add(pulmonaryMesh);

    // 5. Superior Vena Cava (Right superior vessel)
    const svcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.75, 1.8, -0.3),
      new THREE.Vector3(-0.72, 0.7, -0.2),
    ]);
    const svcGeo = new THREE.TubeGeometry(svcCurve, 16, 0.26, 14, false);
    const svcMesh = new THREE.Mesh(svcGeo, pulmonaryMat);
    heartGroup.add(svcMesh);

    // 6. Coronary Artery Network (Glowing arterial vessels over the heart surface)
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.05, 0.95, 1.15),
      new THREE.Vector3(-0.25, 0.5, 1.26),
      new THREE.Vector3(-0.35, 0.0, 1.22),
      new THREE.Vector3(-0.45, -0.5, 0.98),
      new THREE.Vector3(-0.48, -0.9, 0.65),
      new THREE.Vector3(-0.35, -1.25, 0.3),
    ]);
    const ladGeo = new THREE.TubeGeometry(ladCurve, 36, 0.045, 8, false);
    const ladMat = new THREE.MeshBasicMaterial({
      color: 0xff4d6d, // Neon crimson glowing artery
    });
    const ladMesh = new THREE.Mesh(ladGeo, ladMat);
    heartGroup.add(ladMesh);

    // Right Coronary Artery branch
    const rcaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.3, 0.85, 1.05),
      new THREE.Vector3(0.65, 0.45, 1.0),
      new THREE.Vector3(0.85, 0.0, 0.75),
      new THREE.Vector3(0.75, -0.4, 0.4),
      new THREE.Vector3(0.45, -0.75, 0.2),
    ]);
    const rcaGeo = new THREE.TubeGeometry(rcaCurve, 32, 0.038, 8, false);
    const rcaMat = new THREE.MeshBasicMaterial({
      color: 0xff3b5c,
    });
    const rcaMesh = new THREE.Mesh(rcaGeo, rcaMat);
    heartGroup.add(rcaMesh);

    // 7. Circulating Blood Cells (Dynamic Particle Flow)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleT = new Float32Array(particleCount);
    const particleSpeed = new Float32Array(particleCount);
    const particleTrack = new Int8Array(particleCount); // 0 = LAD, 1 = Aorta, 2 = Pulmonary

    const colorArterial = new THREE.Color(0xff4d6d);
    const colorVenous = new THREE.Color(0x00b4d8);

    for (let i = 0; i < particleCount; i++) {
      particleT[i] = Math.random();
      particleSpeed[i] = 0.003 + Math.random() * 0.005;
      particleTrack[i] = Math.floor(Math.random() * 3);

      const color = particleTrack[i] === 2 ? colorVenous : colorArterial;
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    heartGroup.add(particles);

    // 8. Holographic Concentric Medical Target Rings (Apple / Medical Tech Aesthetic)
    const ringGeo1 = new THREE.RingGeometry(2.3, 2.33, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x94a3b8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2;
    scene.add(ringMesh1);

    const ringGeo2 = new THREE.RingGeometry(2.8, 2.82, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xe63946,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.12,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = Math.PI / 2.3;
    scene.add(ringMesh2);

    // Initial heart pose
    heartGroup.rotation.y = -0.35;
    heartGroup.rotation.x = 0.1;
    heartGroup.position.set(0, -0.2, 0);

    // Mouse Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.45;
      mouse.targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll-linked rotation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / Math.max(docHeight, 1);
      heartGroup.rotation.y = -0.35 + scrollFraction * Math.PI * 1.5;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle view mode change
    const updateMaterials = (mode: 'solid' | 'hologram' | 'wireframe') => {
      if (mode === 'solid') {
        ventricleMesh.material = solidMaterial;
      } else if (mode === 'hologram') {
        ventricleMesh.material = hologramMaterial;
      } else {
        ventricleMesh.material = wireframeMaterial;
      }
    };

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Physiological Heartbeat Pulse (Lub-Dub rhythm calculation)
      const currentBpm = bpmRef.current;
      const frequency = (currentBpm / 60) * Math.PI * 2;
      const phase = (elapsedTime * frequency) % (Math.PI * 2);

      // S1 (Systole contraction) + S2 (Diastole bounce)
      const s1 = Math.pow(Math.max(0, Math.sin(phase)), 18) * 0.11;
      const s2 = Math.pow(Math.max(0, Math.sin(phase - 0.42)), 18) * 0.06;
      const beatScale = 1 + s1 + s2;

      heartGroup.scale.set(beatScale, beatScale * 0.98, beatScale);

      // Subtle base rotation
      if (isRotating) {
        heartGroup.rotation.y += 0.0035;
      }

      // Add mouse tilt
      heartGroup.rotation.x = 0.1 + mouse.y * 0.5;
      heartGroup.position.x = mouse.x * 0.4;

      // Rotate subtle rings
      ringMesh1.rotation.z += 0.0015;
      ringMesh2.rotation.z -= 0.001;

      // Update Blood Cell Particles Flow
      const pos = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        particleT[i] = (particleT[i] + particleSpeed[i] * (currentBpm / 72)) % 1;
        const t = particleT[i];

        let p: THREE.Vector3;
        if (particleTrack[i] === 0) {
          p = ladCurve.getPoint(t);
        } else if (particleTrack[i] === 1) {
          p = aortaCurve.getPoint(t);
        } else {
          p = pulmonaryCurve.getPoint(t);
        }

        pos[i * 3] = p.x + (Math.sin(i + elapsedTime * 2) * 0.02);
        pos[i * 3 + 1] = p.y + (Math.cos(i + elapsedTime * 2) * 0.02);
        pos[i * 3 + 2] = p.z;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Store update helper in DOM element for mode toggling
    (container as unknown as { _updateMaterials: typeof updateMaterials })._updateMaterials = updateMaterials;

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ventricleGeo.dispose();
      aortaGeo.dispose();
      ladGeo.dispose();
      rcaGeo.dispose();
      pulmonaryGeo.dispose();
      svcGeo.dispose();
      particleGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
    };
  }, [isRotating]);

  // Handle Mode Change
  const handleModeChange = (mode: 'solid' | 'hologram' | 'wireframe') => {
    setViewMode(mode);
    const container = containerRef.current as unknown as { _updateMaterials?: (m: string) => void };
    if (container && container._updateMaterials) {
      container._updateMaterials(mode);
    }
  };

  const handleBpmUpdate = (newBpm: number) => {
    setBpm(newBpm);
    if (onBpmChange) onBpmChange(newBpm);
  };

  return (
    <div className={`relative w-full h-full min-h-[480px] flex items-center justify-center select-none ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Medical Telemetry Overlay */}
      {interactive && (
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          {/* Real-time Telemetry Badge */}
          <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-glass rounded-2xl px-4 py-2.5 flex items-center gap-4 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cardio-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cardio-red"></span>
              </span>
              <span className="font-semibold text-slate-900 font-mono text-sm tracking-tight">{bpm} BPM</span>
            </div>

            <div className="h-4 w-px bg-slate-200" />

            <div className="flex items-center gap-1.5 text-slate-500">
              <Activity className="w-3.5 h-3.5 text-cardio-red" />
              <span>Sinus Rhythm</span>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-1 text-slate-500">
              <span>Apex:</span>
              <span className="text-slate-800 font-semibold">{activeChamber}</span>
            </div>
          </div>

          {/* Interactive Controls Pill */}
          <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/60 shadow-glass rounded-2xl p-1.5 flex items-center gap-1 text-xs text-slate-200">
            {/* View Mode Toggle */}
            <button
              onClick={() => handleModeChange('solid')}
              className={`px-2.5 py-1.5 rounded-xl transition-all font-medium ${
                viewMode === 'solid' ? 'bg-cardio-red text-white shadow-sm' : 'hover:bg-slate-800 text-slate-300'
              }`}
              title="Clinical Anatomical Tissue View"
            >
              Anatomy
            </button>
            <button
              onClick={() => handleModeChange('hologram')}
              className={`px-2.5 py-1.5 rounded-xl transition-all font-medium ${
                viewMode === 'hologram' ? 'bg-cardio-red text-white shadow-sm' : 'hover:bg-slate-800 text-slate-300'
              }`}
              title="Cyan Medical Holographic View"
            >
              Holo
            </button>
            <button
              onClick={() => handleModeChange('wireframe')}
              className={`px-2.5 py-1.5 rounded-xl transition-all font-medium ${
                viewMode === 'wireframe' ? 'bg-cardio-red text-white shadow-sm' : 'hover:bg-slate-800 text-slate-300'
              }`}
              title="3D Structural Wireframe"
            >
              Mesh
            </button>

            <div className="h-4 w-px bg-slate-700 mx-1" />

            {/* Rotation Pause/Play */}
            <button
              onClick={() => setIsRotating(!isRotating)}
              className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-300 transition-colors"
              title={isRotating ? 'Pause Rotation' : 'Resume Rotation'}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin-slow text-teal-400' : 'text-slate-400'}`} />
            </button>

            {/* Quick BPM Presets */}
            <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1">
              <button
                onClick={() => handleBpmUpdate(58)}
                className={`px-2 py-1 rounded-lg text-[11px] transition-colors ${
                  bpm === 58 ? 'bg-slate-700 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                58 (Rest)
              </button>
              <button
                onClick={() => handleBpmUpdate(72)}
                className={`px-2 py-1 rounded-lg text-[11px] transition-colors ${
                  bpm === 72 ? 'bg-slate-700 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                72 (Norm)
              </button>
              <button
                onClick={() => handleBpmUpdate(96)}
                className={`px-2 py-1 rounded-lg text-[11px] transition-colors ${
                  bpm === 96 ? 'bg-slate-700 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                96 (Active)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Anatomical Pins / Highlights */}
      <div className="absolute top-12 left-6 pointer-events-none hidden md:block">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm text-xs text-slate-600">
          <span className="w-2 h-2 rounded-full bg-cardio-red animate-pulse" />
          <span>Aortic Arch & Coronary Arteries</span>
        </div>
      </div>

      <div className="absolute top-1/2 right-6 pointer-events-none hidden md:block">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm text-xs text-slate-600">
          <span className="w-2 h-2 rounded-full bg-medical-blue animate-pulse" />
          <span>Left Ventricular Myocardium</span>
        </div>
      </div>
    </div>
  );
};
