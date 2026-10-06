import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Automatically ensure assets are synced into the public directory
try {
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Doctor portrait (Real Cath-Lab Profile Photo uploaded by user)
  const doctorSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/7807b1d3-978a-41ce-8ff7-e2fbd7b8a479/.user_uploaded/media_1791309557453.jpg';
  const doctorDest = path.resolve(publicDir, 'doctor.jpg');
  if (fs.existsSync(doctorSrc)) {
    fs.copyFileSync(doctorSrc, doctorDest);
    console.log('✅ Real doctor photo synced to public/doctor.jpg');
  }

  // Doctor consultation portrait in white coat uploaded by user for About section
  const aboutDoctorSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/7807b1d3-978a-41ce-8ff7-e2fbd7b8a479/.user_uploaded/media_1791311697274.jpg';
  const aboutDoctorDest = path.resolve(publicDir, 'doctor_about.jpg');
  if (fs.existsSync(aboutDoctorSrc)) {
    fs.copyFileSync(aboutDoctorSrc, aboutDoctorDest);
    console.log('✅ Real doctor About photo synced to public/doctor_about.jpg');
  }

  // Real Medstar Hospitals building photo uploaded by user
  const medstarSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/7807b1d3-978a-41ce-8ff7-e2fbd7b8a479/.user_uploaded/media_1791310849749.jpg';
  const medstarDest = path.resolve(publicDir, 'medstar_building.jpg');
  if (fs.existsSync(medstarSrc)) {
    fs.copyFileSync(medstarSrc, medstarDest);
    fs.copyFileSync(medstarSrc, path.resolve(publicDir, 'hospital_bg.jpg'));
    console.log('✅ Real Medstar building photo synced to public/medstar_building.jpg');
  } else {
    // Fallback hospital building
    const hospitalSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/264af6eb-a6ba-4eef-acdd-ea23988d7542/hospital_building_blue_1791221397112.jpg';
    const hospitalDest = path.resolve(publicDir, 'hospital_bg.jpg');
    if (fs.existsSync(hospitalSrc)) {
      fs.copyFileSync(hospitalSrc, hospitalDest);
    }
  }

  // Interventional Cardiology Cath-Lab Precision background
  const cathlabSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/264af6eb-a6ba-4eef-acdd-ea23988d7542/cathlab_precision_bg_1791225198275.jpg';
  const cathlabDest = path.resolve(publicDir, 'cathlab_bg.jpg');
  if (fs.existsSync(cathlabSrc)) {
    fs.copyFileSync(cathlabSrc, cathlabDest);
  }
} catch (e) {
  console.log('Asset copy notice:', e.message);
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
