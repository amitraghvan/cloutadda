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

- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Animation Architecture**:
  - **GSAP 3** (`gsap`, `@gsap/react`, `ScrollTrigger`): Timelines, staggered text reveals, scroll-driven storytelling
  - **Three.js (WebGL)**: Ambient particle environments (`AtmosphericScene`), 3D monolithic structures (`ArchitecturalScene3D`)
  - **Framer Motion**: Spring micro-interactions & magnetic CTA controls
  - **Lenis**: Hardware-accelerated smooth scrolling integrated with ScrollTrigger
  - **Performance**: Direct GPU transforms, 60–120fps hardware acceleration, full `prefers-reduced-motion` compliance
- **Styling**: Tailwind CSS v4, custom Instrument Serif & Manrope typography, deep obsidian & signature red palette
- **SEO & Metadata**: Dynamic sitemap (`sitemap.ts`), robots directives (`robots.ts`), JSON-LD Organization schema, OpenGraph & Twitter tags

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20.0.0
- npm >= 10.0.0

### Installation
```bash
npm ci
```

### Development
```bash
npm run dev
```

### Production Build & Start
```bash
npm run build
npm run start
```

### Quality & Typechecks
```bash
npm run typecheck    # TypeScript typecheck (tsc --noEmit)
npm run lint         # Next.js ESLint check
```

---

## 📁 Project Structure

```text
cloutaddawebapp/
├── public/                 # Static brand assets, favicon, manifest
├── scripts/                # Automated route & Chrome DevTools test runners
├── src/
│   ├── app/                # Next.js 15 App Router (All 15 routes + layouts)
│   │   ├── about/          # /about
│   │   ├── contact/        # /contact
│   │   ├── services/       # /services + 5 practice sub-routes
│   │   ├── work/           # /work + 5 case studies
│   │   ├── globals.css     # Tailwind v4 theme & CSS tokens
│   │   ├── layout.tsx      # Root server layout with SEO & metadata
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   └── sitemap.ts      # Dynamic sitemap.xml
│   ├── components/
│   │   ├── animation/      # GSAP ScrollTrigger, counters, reveals, magnetic buttons
│   │   ├── contact/        # ContactFormClient
│   │   ├── home/           # Hero, Manifesto, Numbers, Architectural 3D, Meme Wall, Selected Work
│   │   ├── layout/         # AppClientShell, Navbar, Footer, PageHeader, Logo
│   │   ├── services/       # Interactive selectors, format tools, concept calculators
│   │   ├── shared/         # Lightbox modal
│   │   ├── three/          # Three.js WebGL scenes (AtmosphericScene, ArchitecturalScene3D)
│   │   └── work/           # WorkArchiveClient + 5 Case Study view components
│   ├── data/               # Company data, services matrix, portfolio case studies
│   ├── hooks/              # useReducedMotion
│   └── lib/
│       ├── animations/     # Central GSAP registration, tokens, easing curves, cleanup
│       └── utils.ts        # Tailwind class merge helper
└── test-evidence/          # Browser automation verification screenshots
```

---

## 📄 License & Attribution
© CLOUT ADDA®. All rights reserved.
