# cloutadda

# CLOUT ADDA® — Official Creative Agency Website
> **YOUR EXPERIENCE ELEVATED.**

Clout Adda is a culture-driven brand influence and experiences agency connecting brands with modern audiences through:
- **Social Media Marketing**
- **PR & Meme Marketing**
- **Influencer Marketing (500+ Verified Creators, 5,000+ Creator Pool)**
- **Social Events Marketing (Stadium Activations & Campus Conclaves)**
- **Branded Podcasting**

---

## 🛠️ Technology Stack & Architecture

- **Framework**: TanStack Start / Vite / Nitro SSR
- **Animation Architecture**:
  - **GSAP 3** (`gsap`, `@gsap/react`, `ScrollTrigger`): Timelines, staggered text reveals, scroll-driven storytelling
  - **Three.js (WebGL)**: Ambient particle environments (`AtmosphericScene`), 3D monolithic structures (`ArchitecturalScene3D`)
  - **Framer Motion**: Spring micro-interactions & magnetic CTA controls
  - **Performance**: Direct GPU transforms, 60–120fps hardware acceleration, full `prefers-reduced-motion` compliance
- **Styling**: Tailwind CSS, custom Instrument Serif & Manrope typography, deep obsidian & signature red palette

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm / bun

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

### Quality & Typechecks
```bash
npx tsc --noEmit     # TypeScript typecheck
npm run lint         # ESLint check
npm run format       # Prettier code formatting
```

---

## 📁 Project Structure

```text
cloutaddawebapp/
├── src/
│   ├── components/
│   │   ├── animation/      # GSAP ScrollTrigger, counters, reveals, magnetic buttons
│   │   ├── home/           # Hero, Manifesto, Numbers, Architectural 3D, Meme Wall, Selected Work
│   │   ├── layout/         # Navbar, Footer, PageHeader, Logo
│   │   ├── services/       # Interactive selectors, format tools, concept calculators
│   │   ├── shared/         # Lightbox modal, common UI
│   │   └── three/          # Three.js WebGL scenes (AtmosphericScene, ArchitecturalScene3D)
│   ├── data/               # Company data, services matrix, portfolio case studies
│   ├── hooks/              # useReducedMotion, useGSAPAnimation
│   ├── lib/animations/     # Central GSAP registration, tokens, easing curves, cleanup
│   └── routes/             # TanStack Start file-based routing
├── scripts/                # Automated route & Chrome DevTools Protocol (CDP) test runners
└── test-evidence/          # Real browser automation verification screenshots
```

---

## 📄 License & Attribution
© CLOUT ADDA®. All rights reserved.
