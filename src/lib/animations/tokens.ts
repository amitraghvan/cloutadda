export const MOTION_TOKENS = {
  duration: {
    instant: 0.15,
    fast: 0.35,
    normal: 0.65,
    deliberate: 0.95,
    cinematic: 1.4,
  },
  delay: {
    none: 0,
    quick: 0.08,
    staggerStep: 0.1,
    medium: 0.25,
    heroSubtle: 0.35,
  },
  stagger: {
    fast: 0.05,
    normal: 0.09,
    generous: 0.14,
  },
  revealDistance: {
    sm: 16,
    md: 32,
    lg: 56,
  },
  scrollTrigger: {
    startStandard: "top 85%",
    startLate: "top 75%",
    startEarly: "top 95%",
    toggleActions: "play none none reverse",
  },
  parallax: {
    desktopIntensity: 0.15,
    tabletIntensity: 0.08,
    mobileIntensity: 0.03,
  },
} as const;
