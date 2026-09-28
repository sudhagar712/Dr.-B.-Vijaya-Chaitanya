# Dr. B. Vijaya Chaitanya | Cardiologist & Heart Care Specialist Portfolio

A luxury, high-end medical brand portfolio website for **Dr. B. Vijaya Chaitanya**, Consultant Cardiologist & Heart Specialist.

Built with **React**, **TypeScript**, **Tailwind CSS**, **Three.js**, **GSAP & ScrollTrigger**, **Framer Motion**, and **Lenis Smooth Scroll**.

---

## 🌟 Key Features

1. **Interactive 3D Cardiovascular Canvas (Three.js)**:
   - Procedural human heart geometry with ventricles, ascending aorta arch, and pulmonary trunk.
   - Dual-beat physiological heartbeat contraction (*lub-dub* systole/diastole cycle).
   - Coronary artery branching paths with glowing neon arterial tracks.
   - Circulating blood cell micro-particle stream (arterial red & venous blue).
   - Interactive mouse tilt, scroll-based rotation, and camera views (Tissue Anatomy, Cyan Hologram, 3D Mesh).
   - Real-time cardiac telemetry readout (BPM, cardiac output, oxygen saturation, sinus rhythm).

2. **Real-time ECG Rhythm Lab (HTML5 Canvas + Web Audio API)**:
   - Medically accurate P-Q-R-S-T wave complex sweep line with phosphor persistence trail.
   - Interactive heart rate presets: Resting (58 BPM), Normal (72 BPM), Active (102 BPM).
   - Built-in physiological cardiac acoustic sound generator (synthesized *lub-dub* heartbeat audio using the browser's Web Audio API — zero external sound files required).
   - Live lead readout (PR interval, QRS duration, QTc interval).

3. **Curated Clinical Sections**:
   - **Hero Section**: Staggered GSAP entrance, dynamic cards, mission statement, magnetic CTAs.
   - **About Doctor**: Split layout with portrait, clinical background, patient-first philosophy, and clear editable credential placeholders.
   - **8 Specialized Expertise Domains**: Preventive Cardiology, Interventional Cardiology, Heart Failure, Hypertension, CAD, Risk Assessment, Arrhythmia, and Lifestyle Cardiology with 3D tilt cards and clinical detail modals.
   - **8 Treatments & Diagnostics**: Cardiac consultation, ECG, Echocardiography, and chronic care with diagnostic suite showcase.
   - **Doctor's Journey Timeline**: Animated vertical timeline covering medical school, residency, super-specialty fellowship, and current practice.
   - **Patient Care Principles**: 5-step clinical approach with warm visual reassurance.
   - **Testimonials**: Structured illustrative placeholders adhering to medical ethics standards.
   - **Interactive Appointment Scheduler Modal**: Multi-field validation, preferred time slots, condition flags, and confirmation card with reference ID.
   - **Consultation Suite & Contact**: Clinic details, interactive inquiry form, emergency medical protocol notice, and Google Maps placeholder.
   - **Patient FAQs**: Comprehensive cardiology questions and answers with accordion interaction.

4. **SEO & Medical Standards Compliance**:
   - Descriptive title and meta tags.
   - Schema.org `Physician` and `MedicalProcedure` JSON-LD structured data.
   - Clear editable placeholders for unverified details (degrees, hospitals, years, numbers) to avoid medical misrepresentation.
   - Emergency helpline banners (108 / 112) and clinical disclaimer.

---

## 🚀 Getting Started

### 1. Install Dependencies
Open a terminal in the `frontend` directory:
```bash
cd frontend
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The website will launch at `http://localhost:3000` (or `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```

---

## 🖼️ Included Assets & Images

High-resolution photorealistic medical assets have been generated for Dr. B. Vijaya Chaitanya:
- **Doctor Portrait**: Saved in the IDE artifacts directory and configured with graceful fallbacks.
  To copy the image directly to your public folder on Windows PowerShell:
  ```powershell
  New-Item -ItemType Directory -Force -Path "public\images"
  Copy-Item "C:\Users\Asus\.gemini\antigravity-ide\brain\b76ac204-4da0-40c4-93a8-896b207fd7de\doctor_portrait_*.jpg" "public\images\doctor-portrait.jpg"
  Copy-Item "C:\Users\Asus\.gemini\antigravity-ide\brain\b76ac204-4da0-40c4-93a8-896b207fd7de\cardiology_clinic_*.jpg" "public\images\clinic-suite.jpg"
  ```

---

## ✏️ Customization (Placeholders)

All doctor-specific credentials and clinic information are cleanly organized and marked with `[Editable Placeholder]` tags across:
- `src/components/sections/AboutDoctor.tsx` — Medical degrees, fellowships, and memberships.
- `src/components/sections/TimelineSection.tsx` — Institutions, graduation years, and hospital postings.
- `src/components/sections/ContactSection.tsx` & `AppointmentSection.tsx` — Clinic address, phone numbers, email, and consultation hours.
- `src/components/sections/TestimonialsSection.tsx` — Verified patient reviews.
