// Luxury agency motion curves
export const GSAP_EASING = {
  // Ultra smooth deceleration for hero and headlines
  editorial: "power3.out",
  // Dramatic snap for image masks and cards
  dramatic: "expo.out",
  // Gentle natural deceleration for scroll reveals
  natural: "power2.out",
  // Fluid entrance for subtle UI elements
  fluid: "cubic-bezier(0.16, 1, 0.3, 1)",
  // Smooth symmetrical curve for transitions
  smooth: "power2.inOut",
} as const;

// Framer Motion spring and transition definitions
export const MOTION_TRANSITIONS = {
  // Ultra smooth spring for magnetic buttons & cursor
  springSubtle: {
    type: "spring",
    stiffness: 220,
    damping: 24,
    mass: 0.8,
  },
  // Snappier spring for interactive pills and badges
  springInteractive: {
    type: "spring",
    stiffness: 350,
    damping: 25,
  },
  // Smooth cubic bezier for modal and overlay entrances
  cubicEase: {
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1],
  },
  // Fast fade for micro-interactions
  fadeFast: {
    duration: 0.2,
    ease: "easeOut",
  },
} as const;
