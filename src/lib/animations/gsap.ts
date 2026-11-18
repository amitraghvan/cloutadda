import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Ensure plugins are registered only once on client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // Configure smooth ScrollTrigger defaults
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
    ignoreMobileResize: true,
  });

  // Global default easing
  gsap.defaults({
    ease: "power3.out",
    duration: 0.9,
  });
}

export { gsap, ScrollTrigger, useGSAP };
export default gsap;
