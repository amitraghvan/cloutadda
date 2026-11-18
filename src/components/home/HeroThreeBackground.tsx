import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const width = currentMount.clientWidth || window.innerWidth;
    const height = currentMount.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    currentMount.appendChild(renderer.domElement);

    // Create subtle particles in deep red and warm orange
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#E50920"); // Clout Red
    const color2 = new THREE.Color("#FF5A1F"); // Warm Orange
    const color3 = new THREE.Color("#A90012"); // Deep Red

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 45;
      positions[idx + 1] = (Math.random() - 0.5) * 28;
      positions[idx + 2] = (Math.random() - 0.5) * 20;

      const mixedColor = Math.random() > 0.5 ? (Math.random() > 0.5 ? color1 : color2) : color3;
      colors[idx] = mixedColor.r;
      colors[idx + 1] = mixedColor.g;
      colors[idx + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle interactive mouse drift
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth damping
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      particles.rotation.y += 0.0008;
      particles.rotation.x = targetY * 0.15;
      particles.position.x = targetX * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth || window.innerWidth;
      const h = currentMount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-60 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
