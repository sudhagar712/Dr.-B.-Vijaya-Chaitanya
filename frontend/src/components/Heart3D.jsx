import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Activity, 
  RotateCcw, 
  Zap, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  HeartPulse, 
  Info, 
  Eye, 
  Maximize2,
  CheckCircle2
} from 'lucide-react';

export default function Heart3D() {
  const containerRef = useRef(null);
  const [activeMode, setActiveMode] = useState('engraving'); // 'engraving' (Image 2 style) | 'clinical' | 'stent' | 'wireframe'
  const [bpm, setBpm] = useState(72);
  const [isRotating, setIsRotating] = useState(true);
  const [selectedAnatomy, setSelectedAnatomy] = useState(null);
  const [showLabels, setShowLabels] = useState(true);

  // References between React state and Three.js animation loop
  const sceneState = useRef({
    bpm: 72,
    mode: 'engraving',
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
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 8.2);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // --- LIGHTING RIG ---
    // Warm key light
    const keyLight = new THREE.DirectionalLight(0xfff5eb, 2.8);
    keyLight.position.set(5, 7, 7);
    scene.add(keyLight);

    // Cool rim light for anatomical definition
    const coolRimLight = new THREE.DirectionalLight(0x7dd3fc, 2.2);
    coolRimLight.position.set(-6, 3, -5);
    scene.add(coolRimLight);

    // Warm bounce light from bottom
    const bounceLight = new THREE.DirectionalLight(0xfecdd3, 1.4);
    bounceLight.position.set(2, -6, 3);
    scene.add(bounceLight);

    // Soft ambient fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    // Top spotlight for vessel lumens
    const topSpot = new THREE.SpotLight(0xffffff, 2.0, 15, Math.PI / 4, 0.4);
    topSpot.position.set(0, 8, 3);
    scene.add(topSpot);

    // --- MAIN HEART CONTAINER GROUP ---
    const heartGroup = new THREE.Group();
    // Default slight anatomical tilt matching human cardiac axis
    heartGroup.rotation.z = 0.08;
    heartGroup.rotation.x = 0.06;
    heartGroup.position.y = -0.15;
    scene.add(heartGroup);

    // --- PROCEDURAL ANATOMICAL ENGRAVING TEXTURES (Reference 2 Style) ---
    // 1. Myocardium Muscle Canvas Texture (longitudinal fibers + copperplate hatching)
    const createMuscleEngravingTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');

      // Base anatomical muscle gradient (warm crimson to rich vermilion highlight)
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#be2624');   // Deep coronary muscle red
      grad.addColorStop(0.3, '#d84433'); // Cadmium red
      grad.addColorStop(0.6, '#e25946'); // Warm anterior highlight
      grad.addColorStop(0.85, '#c53128');
      grad.addColorStop(1, '#8f1a1c');   // Posterior sulcus shadow
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);

      // Fine anatomical longitudinal myofiber hatching lines (Image 2 style)
      ctx.lineWidth = 1.3;
      for (let y = 0; y < 1024; y += 4.5) {
        ctx.strokeStyle = (y % 9 === 0) ? 'rgba(55, 12, 14, 0.42)' : 'rgba(75, 18, 20, 0.28)';
        ctx.beginPath();
        ctx.moveTo(0, y);
        // Organic sinusoidal muscle fiber curvature
        for (let x = 0; x <= 1024; x += 40) {
          const dy = Math.sin((x / 1024) * Math.PI * 3.5 + y * 0.03) * 3.2;
          ctx.lineTo(x, y + dy);
        }
        ctx.stroke();
      }

      // Cross-hatching for 3D shadow depth (copperplate engraving technique)
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = 'rgba(40, 8, 10, 0.25)';
      for (let i = -1024; i < 2048; i += 12) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 400, 1024);
        ctx.stroke();
      }

      // Highlights for myocardial luster
      ctx.fillStyle = 'rgba(255, 190, 180, 0.07)';
      for (let i = 0; i < 18; i++) {
        const x = 300 + Math.random() * 380;
        const y = 350 + Math.random() * 300;
        const r = 20 + Math.random() * 50;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
      return texture;
    };

    // 2. Great Vessels Engraving Texture (Transverse cylindrical hatch lines)
    const createVesselEngravingTexture = (baseColor, shadowColor) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      // Base cylindrical color
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, 512, 512);

      // Transverse cylinder hatching (Image 2 style pen strokes)
      ctx.strokeStyle = shadowColor;
      ctx.lineWidth = 1.5;
      for (let y = 0; y < 512; y += 5) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(170, y + 4, 340, y + 4, 512, y);
        ctx.stroke();
      }

      // Longitudinal specular highlight strip
      const grad = ctx.createLinearGradient(0, 0, 512, 0);
      grad.addColorStop(0, 'rgba(0,0,0,0.15)');
      grad.addColorStop(0.35, 'rgba(255,255,255,0.22)');
      grad.addColorStop(0.65, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.25)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 4);
      return texture;
    };

    const muscleTexture = createMuscleEngravingTexture();
    const aortaTexture = createVesselEngravingTexture('#b5272a', 'rgba(45, 8, 10, 0.48)');
    const veinTexture = createVesselEngravingTexture('#416677', 'rgba(20, 36, 45, 0.52)');

    // --- MATERIALS (Dual-System: Vintage Engraving & Photoreal Clinical) ---
    // Materials list for dynamic mode switching
    const materialsList = [];

    // Ventricles Myocardium Material
    const ventriclesMat = new THREE.MeshPhysicalMaterial({
      map: muscleTexture,
      color: 0xdb4435,
      roughness: 0.38,
      metalness: 0.08,
      clearcoat: 0.45,
      clearcoatRoughness: 0.25,
      sheen: 0.5,
      sheenColor: 0xff8877,
      bumpMap: muscleTexture,
      bumpScale: 0.05,
    });
    materialsList.push(ventriclesMat);

    // Aorta & Arterial Material (Deep Crimson Red)
    const aortaMat = new THREE.MeshPhysicalMaterial({
      map: aortaTexture,
      color: 0xba2528,
      roughness: 0.32,
      metalness: 0.1,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      bumpMap: aortaTexture,
      bumpScale: 0.04,
    });
    materialsList.push(aortaMat);

    // Superior Vena Cava & Pulmonary Vein/Artery (Steel/Slate Blue)
    const veinMat = new THREE.MeshPhysicalMaterial({
      map: veinTexture,
      color: 0x3d6679,
      roughness: 0.35,
      metalness: 0.12,
      clearcoat: 0.55,
      clearcoatRoughness: 0.2,
      bumpMap: veinTexture,
      bumpScale: 0.04,
    });
    materialsList.push(veinMat);

    // Vessel Lumen Cap Material (Dark open hole interior with bevel rim)
    const lumenInteriorMat = new THREE.MeshBasicMaterial({
      color: 0x110808,
    });

    // Coronary Artery Vessel Material (Bright arterial red with glowing pulse)
    const coronaryArteryMat = new THREE.MeshStandardMaterial({
      color: 0x9b1b22,
      emissive: 0x4a0508,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.1,
    });
    materialsList.push(coronaryArteryMat);

    // Coronary Vein Material (Dark Slate-Blue)
    const coronaryVeinMat = new THREE.MeshStandardMaterial({
      color: 0x2e5264,
      emissive: 0x0f232e,
      emissiveIntensity: 0.2,
      roughness: 0.35,
    });
    materialsList.push(coronaryVeinMat);

    // Ink Silhouette Outline Material (Hand-drawn engraving edge)
    const inkOutlineMat = new THREE.MeshBasicMaterial({
      color: 0x1f110e,
      side: THREE.BackSide,
    });

    // Helper to add vintage ink outline to any geometry
    const addInkOutline = (geometry, scale = 1.028) => {
      const outlineMesh = new THREE.Mesh(geometry, inkOutlineMat);
      outlineMesh.scale.set(scale, scale, scale);
      return outlineMesh;
    };

    // Helper to add hollow lumen cylinder cap (Image 2 signature opening)
    const addLumenCap = (position, normal, radius, isVein = false) => {
      const capGroup = new THREE.Group();
      capGroup.position.copy(position);

      // Align cap to normal direction
      const defaultUp = new THREE.Vector3(0, 1, 0);
      const quat = new THREE.Quaternion().setFromUnitVectors(defaultUp, normal.clone().normalize());
      capGroup.quaternion.copy(quat);

      // Outer rim
      const rimGeo = new THREE.TorusGeometry(radius * 0.95, radius * 0.18, 12, 24);
      const rimMesh = new THREE.Mesh(rimGeo, isVein ? veinMat : aortaMat);
      capGroup.add(rimMesh);

      // Deep dark hollow interior disc
      const discGeo = new THREE.CircleGeometry(radius * 0.85, 24);
      const discMesh = new THREE.Mesh(discGeo, lumenInteriorMat);
      discMesh.rotation.x = -Math.PI / 2;
      discMesh.position.y = -0.02;
      capGroup.add(discMesh);

      return capGroup;
    };

    // =========================================================================
    // 1. ANATOMICAL VENTRICLES & MYOCARDIUM BODY (Conical, Asymmetric, Grooved)
    // =========================================================================
    const createAnatomicalVentricles = () => {
      const geom = new THREE.SphereGeometry(1.65, 64, 64);
      const pos = geom.attributes.position;
      const v = new THREE.Vector3();

      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);

        // Normalized height ny: 0 (bottom apex) to 1 (top atrioventricular base)
        const ny = (v.y + 1.65) / 3.3;

        // A. Conical taper towards apex
        const taper = Math.pow(ny, 0.7) * 1.1 + 0.12;
        v.x *= taper;
        v.z *= taper * 0.92;

        // B. Apex curvature & tilt (Left and anterior anatomical orientation)
        const apexPull = Math.pow(Math.max(0, 1 - ny), 1.7);
        v.x -= apexPull * 0.52;   // Tilted towards patient's left
        v.z += apexPull * 0.38;   // Pointing slightly forward
        v.y -= apexPull * 0.65;   // Elongated apex tip

        // C. Left Ventricle Muscular Bulge (Anatomical Left / Viewer's Right)
        if (v.x < 0) {
          const lvBulge = Math.sin(ny * Math.PI) * 0.42;
          v.x -= lvBulge;
          v.z += lvBulge * 0.28;
        }

        // D. Right Ventricle Anterior Bulge (Anatomical Right / Viewer's Left)
        if (v.x > 0 && v.z > 0) {
          const rvBulge = Math.sin(ny * Math.PI) * 0.32;
          v.z += rvBulge * 0.35;
        }

        // E. Anterior Interventricular Sulcus Groove (Where LAD artery descends)
        const sulcusX = -0.15 - (1 - ny) * 0.22;
        const distToSulcus = Math.abs(v.x - sulcusX);
        if (v.z > 0.15 && distToSulcus < 0.65 && ny > 0.15 && ny < 0.88) {
          const sulcusIndent = Math.cos((distToSulcus / 0.65) * Math.PI * 0.5) * 0.16 * Math.sin(ny * Math.PI);
          v.z -= sulcusIndent;
        }

        // F. Posterior Diaphragmatic Flattening
        if (v.z < 0) {
          v.z *= 0.82;
        }

        // G. Atrioventricular base junction
        if (ny > 0.85) {
          const baseFlatten = (ny - 0.85) / 0.15;
          v.y -= baseFlatten * 0.14;
        }

        pos.setXYZ(i, v.x, v.y, v.z);
      }

      geom.computeVertexNormals();

      const mesh = new THREE.Mesh(geom, ventriclesMat);
      mesh.add(addInkOutline(geom, 1.025));
      return mesh;
    };

    const ventriclesMesh = createAnatomicalVentricles();
    heartGroup.add(ventriclesMesh);

    // =========================================================================
    // 2. ATRIA & AURICLES (Muscular ear-like pouches on upper shoulders)
    // =========================================================================
    const createAuricle = (isLeft) => {
      const geo = new THREE.SphereGeometry(0.55, 32, 24);
      const pos = geo.attributes.position;
      const v = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        // Add muscular folds / crenellations
        const fold = Math.sin(v.y * 12 + v.x * 8) * 0.05;
        v.multiplyScalar(1 + fold);
        if (v.z > 0) v.z *= 1.25; // Forward lobe
        pos.setXYZ(i, v.x, v.y, v.z);
      }
      geo.computeVertexNormals();

      const mesh = new THREE.Mesh(geo, ventriclesMat);
      if (isLeft) {
        // Left Atrial Auricle (Auricula Sinistra) - prominent in Image 2 (top right)
        mesh.position.set(-1.25, 0.82, 0.45);
        mesh.rotation.set(0.3, -0.4, 0.5);
        mesh.scale.set(0.9, 1.15, 0.8);
      } else {
        // Right Atrial Auricle (Auricula Dextra) - wrapping aortic base
        mesh.position.set(0.95, 0.95, 0.55);
        mesh.rotation.set(0.2, 0.3, -0.4);
        mesh.scale.set(0.95, 1.1, 0.85);
      }
      mesh.add(addInkOutline(geo, 1.035));
      return mesh;
    };

    const leftAuricle = createAuricle(true);
    const rightAuricle = createAuricle(false);
    heartGroup.add(leftAuricle);
    heartGroup.add(rightAuricle);

    // =========================================================================
    // 3. ASCENDING AORTA, AORTIC ARCH & 3 BRACHIOCEPHALIC BRANCH VESSELS
    // =========================================================================
    // Main Aortic Arch Trunk
    const aortaCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.05, 0.5, 0.15),
      new THREE.Vector3(0.2, 1.35, 0.25),
      new THREE.Vector3(0.12, 2.25, 0.18),    // Arch apex
      new THREE.Vector3(-0.48, 2.32, 0.05),   // Sweeping left
      new THREE.Vector3(-1.15, 1.85, -0.32),  // Descending arch
      new THREE.Vector3(-1.35, 0.75, -0.55),  // Descending thoracic aorta
    ]);
    const aortaGeo = new THREE.TubeGeometry(aortaCurve, 48, 0.45, 20, false);
    const aortaMesh = new THREE.Mesh(aortaGeo, aortaMat);
    aortaMesh.add(addInkOutline(aortaGeo, 1.03));
    heartGroup.add(aortaMesh);

    // 3 Distinct Arch Branches (Exact match to Image 2 with hollow lumens):
    // Branch 1: Brachiocephalic Artery
    const b1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.32, 2.15, 0.22),
      new THREE.Vector3(0.42, 2.65, 0.24),
      new THREE.Vector3(0.52, 3.12, 0.22),
    ]);
    const b1Geo = new THREE.TubeGeometry(b1Curve, 16, 0.18, 16, false);
    const b1Mesh = new THREE.Mesh(b1Geo, aortaMat);
    b1Mesh.add(addInkOutline(b1Geo, 1.04));
    heartGroup.add(b1Mesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(0.52, 3.12, 0.22), new THREE.Vector3(0.1, 1, 0), 0.18));

    // Branch 2: Left Common Carotid Artery
    const b2Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.02, 2.32, 0.15),
      new THREE.Vector3(-0.04, 2.78, 0.16),
      new THREE.Vector3(-0.06, 3.22, 0.15),
    ]);
    const b2Geo = new THREE.TubeGeometry(b2Curve, 16, 0.15, 16, false);
    const b2Mesh = new THREE.Mesh(b2Geo, aortaMat);
    b2Mesh.add(addInkOutline(b2Geo, 1.04));
    heartGroup.add(b2Mesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(-0.06, 3.22, 0.15), new THREE.Vector3(0, 1, 0), 0.15));

    // Branch 3: Left Subclavian Artery
    const b3Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.38, 2.22, 0.05),
      new THREE.Vector3(-0.48, 2.72, 0.02),
      new THREE.Vector3(-0.58, 3.12, -0.05),
    ]);
    const b3Geo = new THREE.TubeGeometry(b3Curve, 16, 0.15, 16, false);
    const b3Mesh = new THREE.Mesh(b3Geo, aortaMat);
    b3Mesh.add(addInkOutline(b3Geo, 1.04));
    heartGroup.add(b3Mesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(-0.58, 3.12, -0.05), new THREE.Vector3(-0.15, 1, -0.1), 0.15));

    // =========================================================================
    // 4. SUPERIOR VENA CAVA (SVC) & BRANCH (Steel-Blue Systemic Vein)
    // =========================================================================
    const svcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.22, 0.35, -0.12),
      new THREE.Vector3(1.32, 1.45, 0.02),
      new THREE.Vector3(1.36, 2.45, 0.06),
      new THREE.Vector3(1.38, 2.95, 0.08),
    ]);
    const svcGeo = new THREE.TubeGeometry(svcCurve, 32, 0.33, 18, false);
    const svcMesh = new THREE.Mesh(svcGeo, veinMat);
    svcMesh.add(addInkOutline(svcGeo, 1.035));
    heartGroup.add(svcMesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(1.38, 2.95, 0.08), new THREE.Vector3(0.05, 1, 0.02), 0.33, true));

    // Right Brachiocephalic Vein Branch (Emerging sideways as seen in Image 2)
    const svcBranchCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.34, 1.85, 0.04),
      new THREE.Vector3(1.65, 2.05, 0.08),
      new THREE.Vector3(1.95, 2.15, 0.12),
    ]);
    const svcBranchGeo = new THREE.TubeGeometry(svcBranchCurve, 16, 0.22, 14, false);
    const svcBranchMesh = new THREE.Mesh(svcBranchGeo, veinMat);
    svcBranchMesh.add(addInkOutline(svcBranchGeo, 1.04));
    heartGroup.add(svcBranchMesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(1.95, 2.15, 0.12), new THREE.Vector3(0.9, 0.3, 0.1), 0.22, true));

    // =========================================================================
    // 5. PULMONARY TRUNK & PULMONARY ARTERIES (Crossing Anterior to Aorta)
    // =========================================================================
    const pulmTrunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.25, 0.55, 0.65),  // RV outflow tract
      new THREE.Vector3(-0.42, 1.18, 0.48),
      new THREE.Vector3(-0.62, 1.68, 0.18),  // Bifurcation under arch
    ]);
    const pulmTrunkGeo = new THREE.TubeGeometry(pulmTrunkCurve, 24, 0.36, 18, false);
    const pulmTrunkMesh = new THREE.Mesh(pulmTrunkGeo, veinMat);
    pulmTrunkMesh.add(addInkOutline(pulmTrunkGeo, 1.035));
    heartGroup.add(pulmTrunkMesh);

    // Left Pulmonary Artery (Extending right towards viewer with open lumen in Image 2)
    const pulmLeftCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.62, 1.68, 0.18),
      new THREE.Vector3(-1.15, 1.62, -0.05),
      new THREE.Vector3(-1.68, 1.48, -0.22),
    ]);
    const pulmLeftGeo = new THREE.TubeGeometry(pulmLeftCurve, 18, 0.25, 16, false);
    const pulmLeftMesh = new THREE.Mesh(pulmLeftGeo, veinMat);
    pulmLeftMesh.add(addInkOutline(pulmLeftGeo, 1.04));
    heartGroup.add(pulmLeftMesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(-1.68, 1.48, -0.22), new THREE.Vector3(-0.9, -0.2, -0.3), 0.25, true));

    // Right Pulmonary Artery (Passing under aortic arch)
    const pulmRightCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.62, 1.68, 0.18),
      new THREE.Vector3(0.12, 1.52, -0.15),
      new THREE.Vector3(0.85, 1.38, -0.35),
    ]);
    const pulmRightGeo = new THREE.TubeGeometry(pulmRightCurve, 18, 0.24, 16, false);
    const pulmRightMesh = new THREE.Mesh(pulmRightGeo, veinMat);
    pulmRightMesh.add(addInkOutline(pulmRightGeo, 1.04));
    heartGroup.add(pulmRightMesh);

    // =========================================================================
    // 6. PULMONARY VEINS (Twin Lateral Red Vessels with Open Lumens in Image 2)
    // =========================================================================
    const pv1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.42, 0.85, -0.42),
      new THREE.Vector3(-1.82, 0.82, -0.46),
      new THREE.Vector3(-2.15, 0.78, -0.52),
    ]);
    const pv1Geo = new THREE.TubeGeometry(pv1Curve, 12, 0.16, 14, false);
    const pv1Mesh = new THREE.Mesh(pv1Geo, aortaMat);
    pv1Mesh.add(addInkOutline(pv1Geo, 1.04));
    heartGroup.add(pv1Mesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(-2.15, 0.78, -0.52), new THREE.Vector3(-0.95, -0.1, -0.2), 0.16));

    const pv2Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.46, 0.45, -0.42),
      new THREE.Vector3(-1.86, 0.42, -0.46),
      new THREE.Vector3(-2.18, 0.38, -0.52),
    ]);
    const pv2Geo = new THREE.TubeGeometry(pv2Curve, 12, 0.15, 14, false);
    const pv2Mesh = new THREE.Mesh(pv2Geo, aortaMat);
    pv2Mesh.add(addInkOutline(pv2Geo, 1.04));
    heartGroup.add(pv2Mesh);
    heartGroup.add(addLumenCap(new THREE.Vector3(-2.18, 0.38, -0.52), new THREE.Vector3(-0.95, -0.1, -0.2), 0.15));

    // =========================================================================
    // 7. DETAILED CORONARY VASCULAR TREE (LAD, Diagonals, RCA & Sulcus Veins)
    // =========================================================================
    // Main Left Anterior Descending Artery (LAD - "Widowmaker")
    const ladCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.28, 0.82, 1.15),
      new THREE.Vector3(-0.22, 0.42, 1.32),
      new THREE.Vector3(-0.16, -0.15, 1.36),
      new THREE.Vector3(-0.12, -0.75, 1.22),
      new THREE.Vector3(-0.18, -1.35, 0.92),
      new THREE.Vector3(-0.28, -1.95, 0.48),
    ]);
    const ladGeo = new THREE.TubeGeometry(ladCurve, 48, 0.09, 12, false);
    const ladMesh = new THREE.Mesh(ladGeo, coronaryArteryMat);
    ladMesh.add(addInkOutline(ladGeo, 1.06));
    heartGroup.add(ladMesh);

    // Diagonal Branch 1 (D1 - Spreading across Left Ventricular Wall)
    const d1Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.21, 0.25, 1.34),
      new THREE.Vector3(-0.62, -0.15, 1.18),
      new THREE.Vector3(-1.05, -0.65, 0.88),
      new THREE.Vector3(-1.25, -1.05, 0.55),
    ]);
    const d1Geo = new THREE.TubeGeometry(d1Curve, 24, 0.065, 10, false);
    const d1Mesh = new THREE.Mesh(d1Geo, coronaryArteryMat);
    d1Mesh.add(addInkOutline(d1Geo, 1.08));
    heartGroup.add(d1Mesh);

    // Diagonal Branch 2 (D2 - Mid-Anterior Branch)
    const d2Curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.15, -0.35, 1.32),
      new THREE.Vector3(-0.55, -0.75, 1.08),
      new THREE.Vector3(-0.85, -1.25, 0.72),
    ]);
    const d2Geo = new THREE.TubeGeometry(d2Curve, 20, 0.055, 10, false);
    const d2Mesh = new THREE.Mesh(d2Geo, coronaryArteryMat);
    d2Mesh.add(addInkOutline(d2Geo, 1.08));
    heartGroup.add(d2Mesh);

    // Right Ventricular Acute Marginal Branches (Spreading to the Right in Image 2)
    const rvBranch1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.18, 0.18, 1.32),
      new THREE.Vector3(0.35, -0.05, 1.25),
      new THREE.Vector3(0.78, -0.45, 0.98),
      new THREE.Vector3(1.12, -0.92, 0.62),
    ]);
    const rv1Geo = new THREE.TubeGeometry(rvBranch1, 24, 0.065, 10, false);
    const rv1Mesh = new THREE.Mesh(rv1Geo, coronaryArteryMat);
    rv1Mesh.add(addInkOutline(rv1Geo, 1.08));
    heartGroup.add(rv1Mesh);

    const rvBranch2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.14, -0.55, 1.26),
      new THREE.Vector3(0.32, -0.78, 1.12),
      new THREE.Vector3(0.68, -1.18, 0.82),
    ]);
    const rv2Geo = new THREE.TubeGeometry(rvBranch2, 20, 0.055, 10, false);
    const rv2Mesh = new THREE.Mesh(rv2Geo, coronaryArteryMat);
    rv2Mesh.add(addInkOutline(rv2Geo, 1.08));
    heartGroup.add(rv2Mesh);

    // Great Cardiac Vein (Blue Tributary running alongside LAD in Image 2)
    const gcvCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.35, 0.62, 1.22),
      new THREE.Vector3(-0.28, 0.12, 1.34),
      new THREE.Vector3(-0.22, -0.45, 1.28),
      new THREE.Vector3(-0.25, -1.05, 1.02),
    ]);
    const gcvGeo = new THREE.TubeGeometry(gcvCurve, 24, 0.055, 10, false);
    const gcvMesh = new THREE.Mesh(gcvGeo, coronaryVeinMat);
    gcvMesh.add(addInkOutline(gcvGeo, 1.08));
    heartGroup.add(gcvMesh);

    // =========================================================================
    // 8. INTERVENTIONAL CARDIAC STENT & ATHEROMA (LAD Lesion Angioplasty)
    // =========================================================================
    const stentLength = 0.58;
    const stentGeo = new THREE.CylinderGeometry(0.12, 0.12, stentLength, 24, 16, true);
    const stentMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      metalness: 0.95,
      roughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.95,
    });
    const stentMesh = new THREE.Mesh(stentGeo, stentMat);
    // Positioned precisely in the mid LAD stenosis
    stentMesh.position.set(-0.15, -0.22, 1.36);
    stentMesh.rotation.x = -0.32;
    stentMesh.rotation.z = -0.18;
    stentMesh.scale.set(0.65, 1, 0.65);
    heartGroup.add(stentMesh);

    // Atheroma (Coronary Plaque Obstruction)
    const plaqueGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const plaqueMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0xb45309,
      emissiveIntensity: 0.35,
      roughness: 0.85,
      transparent: true,
      opacity: 1.0,
    });
    const plaqueMesh = new THREE.Mesh(plaqueGeo, plaqueMat);
    plaqueMesh.position.set(-0.15, -0.22, 1.36);
    plaqueMesh.scale.set(1.1, 0.8, 1.1);
    heartGroup.add(plaqueMesh);

    // =========================================================================
    // 9. CIRCULATING ERYTHROCYTE BLOOD PARTICLES
    // =========================================================================
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.4 + Math.random() * 2.3;
      const py = (Math.random() - 0.5) * 4.2;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius * 0.85;

      particleSpeeds[i] = 0.02 + Math.random() * 0.035;

      // 70% arterial red, 30% venous blue
      if (Math.random() > 0.3) {
        particleColors[i * 3] = 0.95;     // R
        particleColors[i * 3 + 1] = 0.18; // G
        particleColors[i * 3 + 2] = 0.15; // B
      } else {
        particleColors[i * 3] = 0.22;    // R
        particleColors[i * 3 + 1] = 0.52; // G
        particleColors[i * 3 + 2] = 0.82; // B
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    // Soft glowing particle canvas sprite
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    pGrad.addColorStop(0, 'rgba(255,255,255,1)');
    pGrad.addColorStop(0.4, 'rgba(235,50,40,0.85)');
    pGrad.addColorStop(1, 'rgba(0,0,0,0)');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      map: pTexture,
      transparent: true,
      depthWrite: false,
    });
    const bloodParticles = new THREE.Points(particleGeo, particleMat);
    heartGroup.add(bloodParticles);

    // Glowing Conduction Ring around Cardiac Base
    const ringGeo = new THREE.TorusGeometry(2.9, 0.022, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.25,
    });
    const pulseRing = new THREE.Mesh(ringGeo, ringMat);
    pulseRing.rotation.x = Math.PI / 2.25;
    scene.add(pulseRing);

    // --- MOUSE & TOUCH INTERACTION (Inertial Orbit & Drag) ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let mouseParallax = { x: 0, y: 0 };
    let targetRotation = { x: 0.06, y: 0 };

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

      targetRotation.y += deltaX * 0.009;
      targetRotation.x += deltaY * 0.009;
      targetRotation.x = Math.max(-0.6, Math.min(0.6, targetRotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch support for mobile devices
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
      targetRotation.y += deltaX * 0.009;
      targetRotation.x += deltaY * 0.009;
      targetRotation.x = Math.max(-0.6, Math.min(0.6, targetRotation.x));
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    domElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- ANIMATION LOOP (Double-Beat Systole / Diastole Cardiac Cycle) ---
    const clock = new THREE.Clock();
    let currentStentScale = 0.65;
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const currentBpm = sceneState.current.bpm;
      const currentMode = sceneState.current.mode;

      // Realistic Double-Beat Cardiac Cycle (Lub-Dub physiological waveform)
      const beatFreq = currentBpm / 60;
      const beatCycle = (elapsedTime * beatFreq) % 1;
      let ventricularContraction = 0;
      let atrialContraction = 0;

      // S1 (Lub): Ventricular Systole (Powerful squeeze and twist)
      if (beatCycle < 0.18) {
        ventricularContraction = Math.sin((beatCycle / 0.18) * Math.PI) * 0.09;
      }
      // S2 (Dub): Aortic/Pulmonary valve closure & secondary recoil
      else if (beatCycle > 0.24 && beatCycle < 0.38) {
        ventricularContraction = Math.sin(((beatCycle - 0.24) / 0.14) * Math.PI) * 0.045;
      }

      // Atrial Systole precedes Ventricles
      if (beatCycle > 0.82) {
        atrialContraction = Math.sin(((beatCycle - 0.82) / 0.18) * Math.PI) * 0.06;
      }

      // Dynamic ventricular scaling & torsion
      const totalVentricularScale = 1.0 - ventricularContraction;
      ventriclesMesh.scale.set(
        totalVentricularScale, 
        1.0 - ventricularContraction * 1.3, 
        totalVentricularScale
      );
      // Slight physiological wringing torsion of apex
      ventriclesMesh.rotation.y = ventricularContraction * 0.12;

      leftAuricle.scale.set(1.0 + atrialContraction, 1.0 + atrialContraction, 1.0 + atrialContraction);
      rightAuricle.scale.set(1.0 + atrialContraction, 1.0 + atrialContraction, 1.0 + atrialContraction);

      // Auto-rotation handling
      if (sceneState.current.autoRotate && !isDragging) {
        targetRotation.y += 0.004;
      }
      heartGroup.rotation.y += (targetRotation.y - heartGroup.rotation.y) * 0.08;
      heartGroup.rotation.x += (targetRotation.x - heartGroup.rotation.x) * 0.08;

      // Subtle parallax camera motion
      camera.position.x += (mouseParallax.x * 1.2 - camera.position.x) * 0.04;
      camera.position.y += (-mouseParallax.y * 0.9 + 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0.1, 0);

      // --- VISUAL MODES ADJUSTMENTS ---
      if (currentMode === 'wireframe') {
        materialsList.forEach((m) => { m.wireframe = true; });
        inkOutlineMat.visible = false;
      } else {
        materialsList.forEach((m) => { m.wireframe = false; });
        inkOutlineMat.visible = currentMode === 'engraving' || currentMode === 'stent';
      }

      // Material finish adjustments between Vintage Engraving vs Photoreal Clinical
      if (currentMode === 'engraving') {
        ventriclesMat.roughness = 0.45;
        ventriclesMat.clearcoat = 0.25;
        ventriclesMat.metalness = 0.05;
        ventriclesMat.bumpScale = 0.06;
        aortaMat.clearcoat = 0.3;
        veinMat.clearcoat = 0.3;
      } else if (currentMode === 'clinical') {
        ventriclesMat.roughness = 0.22;
        ventriclesMat.clearcoat = 0.85;
        ventriclesMat.metalness = 0.12;
        ventriclesMat.bumpScale = 0.03;
        aortaMat.clearcoat = 0.85;
        veinMat.clearcoat = 0.8;
      }

      // --- STENT DEPLOYMENT SIMULATION ---
      if (currentMode === 'stent') {
        currentStentScale += (1.75 - currentStentScale) * 0.07;
        stentMesh.scale.set(currentStentScale, 1.15, currentStentScale);
        stentMat.emissiveIntensity = 1.3 + Math.sin(elapsedTime * 6) * 0.4;
        plaqueMesh.scale.set(0.3, 0.3, 0.3);
        plaqueMesh.material.opacity = 0.35;
      } else {
        currentStentScale += (0.65 - currentStentScale) * 0.05;
        stentMesh.scale.set(currentStentScale, 1.0, currentStentScale);
        stentMat.emissiveIntensity = 0.7;
        plaqueMesh.scale.set(1.1, 0.8, 1.1);
        plaqueMesh.material.opacity = 1.0;
      }

      // --- CIRCULATING BLOOD PARTICLES MOVEMENT ---
      const positions = bloodParticles.geometry.attributes.position.array;
      const speedMultiplier = currentMode === 'stent' ? 2.4 : (currentBpm / 72);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] -= particleSpeeds[i] * speedMultiplier;
        if (positions[i * 3 + 1] < -2.9) {
          positions[i * 3 + 1] = 2.8;
        }
      }
      bloodParticles.geometry.attributes.position.needsUpdate = true;

      // Conduction ring pulse sync
      const ringScale = 1.0 + (ventricularContraction * 1.8);
      pulseRing.scale.set(ringScale, ringScale, ringScale);
      pulseRing.rotation.z += 0.004;

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

  // Anatomical hotspots definition
  const anatomyPins = [
    {
      id: 'aorta',
      name: 'Aortic Arch & Brachiocephalic Arteries',
      type: 'Oxygenated High-Pressure Arterial Trunk',
      desc: 'Ascends from the left ventricle, curving gracefully to distribute oxygen-rich blood to cerebral & systemic circulation. Site for TAVI/TAVR transcatheter valve deployment.',
      top: '18%',
      left: '46%',
    },
    {
      id: 'svc',
      name: 'Superior Vena Cava (SVC)',
      type: 'Deoxygenated Systemic Venous Return',
      desc: 'Large slate-blue venous trunk channeling deoxygenated blood from the upper body into the right atrium. Route for pacemaker/ICD lead implantation.',
      top: '26%',
      left: '68%',
    },
    {
      id: 'pulmonary',
      name: 'Pulmonary Trunk & Arteries',
      type: 'Deoxygenated Pulmonary Outflow',
      desc: 'Emerges from right ventricle, crosses anterior to ascending aorta and bifurcates towards the lungs for oxygenation.',
      top: '32%',
      left: '30%',
    },
    {
      id: 'lad',
      name: 'Left Anterior Descending Artery (LAD)',
      type: 'Coronary Arterial Vasculature ("Widowmaker")',
      desc: 'Travels down the anterior interventricular sulcus supplying 50% of left ventricular myocardium. Crucial primary target for PCI balloon angioplasty & drug-eluting stents.',
      top: '56%',
      left: '47%',
    },
    {
      id: 'ventricle',
      name: 'Left Ventricular Myocardium & Apex',
      type: 'Primary Systemic Muscular Pump',
      desc: 'Thick muscular chamber generating systolic blood pressure (120 mmHg) to pump oxygenated blood systemically through the aortic valve.',
      top: '74%',
      left: '42%',
    },
  ];

  return (
    <div className="relative w-full h-[550px] sm:h-[620px] lg:h-[680px] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900/90 dark:via-cardio-dark dark:to-slate-950 border border-slate-200/80 dark:border-white/10 shadow-2xl flex flex-col justify-between select-none">
      
      {/* TOP CLINICAL TELEMETRY & MODE SWITCHER BAR */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 border-b border-slate-200/70 dark:border-white/10 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md">
        
        {/* Title & Badge */}
        <div className="flex items-center gap-3">
          <div className="flex h-3.5 w-3.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cardio-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cardio-crimson shadow-sm"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono tracking-wider text-slate-900 dark:text-white uppercase font-bold">
                Anatomical 3D Vasculature Model
              </span>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cardio-crimson/10 text-cardio-crimson border border-cardio-crimson/20">
                Gray's Anatomy Etching
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              PHYSIOLOGICAL CARDIAC CYCLE & CORONARY ANGIOPLASTY
            </p>
          </div>
        </div>

        {/* Visual Styles & Controls Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {/* Reference Image 2 Style: Medical Engraving Toggle */}
          <button
            onClick={() => setActiveMode('engraving')}
            className={`btn btn-xs sm:btn-sm gap-1 transition-all font-mono text-[11px] rounded-xl ${
              activeMode === 'engraving'
                ? 'bg-amber-700/90 text-white font-bold shadow-md hover:bg-amber-800'
                : 'btn-ghost text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Vintage Medical Engraving (Exact Reference 2 Style)"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reference</span> Engraving
          </button>

          {/* Clinical Photoreal 3D */}
          <button
            onClick={() => setActiveMode('clinical')}
            className={`btn btn-xs sm:btn-sm gap-1 transition-all font-mono text-[11px] rounded-xl ${
              activeMode === 'clinical'
                ? 'bg-cardio-crimson text-white font-bold shadow-md'
                : 'btn-ghost text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Photorealistic 3D Tissue Mode"
          >
            <HeartPulse className="w-3.5 h-3.5" />
            Clinical 3D
          </button>

          {/* Stent Simulation Trigger Button */}
          <button
            onClick={() => setActiveMode(activeMode === 'stent' ? 'engraving' : 'stent')}
            className={`btn btn-xs sm:btn-sm gap-1.5 transition-all font-mono text-[11px] rounded-xl ${
              activeMode === 'stent'
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : 'btn-outline border-blue-500/40 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            {activeMode === 'stent' ? 'Stent Deployed' : 'Deploy Stent'}
          </button>

          {/* Toggle Labels */}
          <button
            onClick={() => setShowLabels(!showLabels)}
            className={`btn btn-xs sm:btn-sm btn-ghost text-[11px] font-mono rounded-xl ${
              showLabels ? 'text-cardio-teal font-semibold' : 'text-slate-400'
            }`}
            title="Toggle Anatomical Pins"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Pins</span>
          </button>

          {/* Auto-rotate Toggle */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`btn btn-xs sm:btn-sm btn-ghost text-xs rounded-xl ${
              isRotating ? 'text-cardio-teal' : 'text-slate-400'
            }`}
            title="Toggle Auto-Rotation"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* THREE.JS WEBGL CANVAS CONTAINER */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative overflow-hidden"
      >
        {/* Interactive Anatomical Pins / Hotspots */}
        {showLabels && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {anatomyPins.map((pin) => (
              <div
                key={pin.id}
                style={{ top: pin.top, left: pin.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              >
                <button
                  onClick={() => setSelectedAnatomy(selectedAnatomy?.id === pin.id ? null : pin)}
                  className={`group relative flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-200 ${
                    selectedAnatomy?.id === pin.id
                      ? 'bg-cardio-crimson text-white border-white scale-125 shadow-lg'
                      : 'bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-white/20 hover:scale-110 shadow-md backdrop-blur-sm'
                  }`}
                  title={pin.name}
                >
                  <span className="w-2 h-2 rounded-full bg-cardio-crimson animate-pulse" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Selected Anatomical Detail Card */}
        {selectedAnatomy && (
          <div className="absolute bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-2xl animate-fade-in">
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cardio-crimson" />
                <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                  {selectedAnatomy.name}
                </h4>
              </div>
              <button
                onClick={() => setSelectedAnatomy(null)}
                className="text-xs font-mono text-slate-400 hover:text-slate-600 dark:hover:text-white px-1.5 py-0.5 rounded"
              >
                ✕
              </button>
            </div>
            <p className="text-[11px] font-mono text-cardio-crimson font-semibold mb-1">
              {selectedAnatomy.type}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedAnatomy.desc}
            </p>
          </div>
        )}

        {/* Subtle Watermark Hint */}
        <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden sm:block">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cardio-crimson animate-pulse" />
            Drag 360° to inspect • Click pins for anatomical details
          </div>
        </div>

        {/* Stent Simulation Alert Callout */}
        {activeMode === 'stent' && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 w-[92%] sm:w-auto bg-blue-600/10 border border-blue-500/40 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 animate-spin" />
            <div>
              <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                CORONARY STENT ANGIOPLASTY ACTIVE (LAD)
              </p>
              <p className="text-[11px] text-slate-700 dark:text-slate-200">
                Scaffold expanded (3.5 mm) • Plaque compressed • FFR restored: 0.68 → 0.96 (TIMI 3 flow)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM TELEMETRY BAR WITH BPM & CARDIAC FREQUENCY */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 p-3 px-4 sm:px-5 border-t border-slate-200/70 dark:border-white/10 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md">
        
        {/* Heart Rate & Rhythm Telemetry */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-cardio-crimson font-bold">
            <Activity className="w-4 h-4 animate-bounce" />
            <span>HEART RATE:</span>
            <span className="text-cardio-crimson text-sm bg-cardio-crimson/10 px-2 py-0.5 rounded border border-cardio-crimson/20">
              {bpm} BPM
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span>RHYTHM:</span>
            <span className="text-cardio-teal font-semibold">
              {bpm > 100 ? 'SINUS TACHYCARDIA' : bpm < 65 ? 'SINUS BRADYCARDIA' : 'NORMAL SINUS RHYTHM'}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <span>PERFUSION:</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              {activeMode === 'stent' ? 'OPTIMAL (100%)' : 'NORMAL (98%)'}
            </span>
          </div>
        </div>

        {/* BPM Quick Frequency Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mr-1 hidden sm:inline">SET BPM:</span>
          {[60, 72, 90, 115].map((val) => (
            <button
              key={val}
              onClick={() => setBpm(val)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                bpm === val
                  ? 'bg-cardio-crimson text-white font-bold shadow-sm'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900'
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
