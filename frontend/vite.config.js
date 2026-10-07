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

  // Cath-Lab screen with interventional cardiologist pointing at coronary angiogram
  const complexCathlabSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/267d0e96-dfdb-444f-a812-418dc7f5c594/complex_case_cathlab_1791397668648.jpg';
  const complexCathlabDest = path.resolve(publicDir, 'complex_case_cathlab.jpg');
  if (fs.existsSync(complexCathlabSrc)) {
    fs.copyFileSync(complexCathlabSrc, complexCathlabDest);
    console.log('✅ Cath lab screen image synced to public/complex_case_cathlab.jpg');
  }

  // 3D Translucent Crystalline Anatomical Cardiac Heart with ECG
  const journeyHeartSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/e4171643-5b6d-4d45-b5fc-2f4a79e98d01/journey_cardiac_heart_1791398371668.jpg';
  const journeyHeartDest = path.resolve(publicDir, 'journey_heart.jpg');
  if (fs.existsSync(journeyHeartSrc)) {
    fs.copyFileSync(journeyHeartSrc, journeyHeartDest);
    console.log('✅ Journey 3D heart asset synced to public/journey_heart.jpg');
  }

  // Reference UI mockup uploaded by user for About section
  const aboutMockupSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/c66d6d5d-59f8-4786-a62a-d5f529ff96a7/.user_uploaded/media_1791398771512.png';
  const aboutMockupDest = path.resolve(publicDir, 'about_reference_mockup.png');
  if (fs.existsSync(aboutMockupSrc)) {
    fs.copyFileSync(aboutMockupSrc, aboutMockupDest);
    console.log('✅ About reference mockup synced to public/about_reference_mockup.png');
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
