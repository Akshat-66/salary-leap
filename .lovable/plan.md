

# Skill Gap → Salary Impact Calculator
## Premium SaaS Demo Web App

A fully interactive, frontend-only demo showcasing a career growth calculator with modern, polished UI similar to Scaler/Stripe/Notion.

---

## 🎯 What We'll Build

### Screen 1: Landing Page
- "Scaler Demo" logo with gradient branding
- Bold headline: "Calculate Your Salary Growth Potential"
- Compelling subtext about ₹5–15L salary potential
- Animated "Start Free Analysis →" CTA button
- Trust badges and social proof elements
- Gradient hero section with subtle animations

### Screen 2: Multi-Step Input Wizard
**4-step flow with animated progress bar:**

1. **Current Role** — Dropdown (Software Engineer, Backend Developer, Frontend Developer, Data Analyst, DevOps Engineer)
2. **Experience** — Interactive slider (0-10 years) with live label updates
3. **Current Salary** — ₹ input field with validation styling
4. **Target Role** — Dropdown (Senior Engineer, Cloud Engineer, Data Scientist, Tech Lead, Solutions Architect)

Each step animates smoothly with slide/fade transitions.

### Screen 3: Loading Simulation
- Elegant spinner animation
- Dynamic checklist with staggered animations:
  - ✔ Comparing salary benchmarks
  - ✔ Identifying skill gaps
  - → Calculating ROI
- Auto-advances after ~2.5 seconds

### Screen 4: Results Preview + Email Gate
- Personalized results based on role mapping
- "You're 3 skills away from your target role" message
- Locked skill cards with glassmorphism effect:
  - 🔒 Skill 1 — ₹4–6L impact
  - 🔒 Skill 2 — ₹3–5L impact
  - 🔒 Skill 3 — ₹2–4L impact
- Total potential: ₹9–15L highlight
- Email input with validation
- Simulated submission → success transition

### Screen 5: Full Report View
- Unlocked roadmap card with priority skill details:
  - Skill name (e.g., Cloud Computing AWS)
  - Current level → Target level
  - Learning time estimate
  - Salary impact range
- Action buttons: "Book Free Career Call" & "View Courses"
- Demo mode modal on button clicks

---

## ✨ UI/UX Features

**Visual Design:**
- Gradient hero sections with soft color transitions
- Glassmorphism cards with backdrop blur
- Soft shadows and rounded corners
- Modern typography (Inter/system fonts)
- Smooth hover effects with scale/glow

**Interactions:**
- Progress indicator bar showing current step
- Micro-animations on all interactive elements
- Button loading states
- Form validation with visual feedback
- Slide/fade transitions between screens

**Responsive:**
- Mobile-first responsive layout
- Touch-friendly inputs
- Adaptive spacing and typography

---

## 🧠 Simulated Logic

**Role-to-Skills Mapping:**
- Software Engineer → Cloud, System Design, DSA
- Backend Developer → Microservices, Databases, API Design
- Frontend Developer → React Advanced, TypeScript, Performance
- Data Analyst → SQL, Python, Data Visualization
- DevOps Engineer → Kubernetes, CI/CD, Infrastructure as Code

Results will feel intelligent with deterministic fake data based on user selections.

---

## 📁 Architecture

- **Pages**: Landing, Wizard, Loading, Preview, Report
- **Components**: ProgressBar, StepIndicator, RoleSelector, ExperienceSlider, SalaryInput, SkillCard, EmailGate, DemoModal
- **State**: React useState/useReducer for form data and navigation
- **Animations**: Tailwind + CSS transitions

