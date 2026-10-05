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

  // Doctor portrait
  const doctorSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/264af6eb-a6ba-4eef-acdd-ea23988d7542/dr_vijaya_chaitanya_1791220705277.jpg';
  const doctorDest = path.resolve(publicDir, 'doctor.jpg');
  if (fs.existsSync(doctorSrc)) {
    fs.copyFileSync(doctorSrc, doctorDest);
  }

  // Blue Medstar Hospital building background
  const hospitalSrc = 'C:/Users/Asus/.gemini/antigravity-ide/brain/264af6eb-a6ba-4eef-acdd-ea23988d7542/hospital_building_blue_1791221397112.jpg';
  const hospitalDest = path.resolve(publicDir, 'hospital_bg.jpg');
  if (fs.existsSync(hospitalSrc)) {
    fs.copyFileSync(hospitalSrc, hospitalDest);
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
