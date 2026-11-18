import { useEffect, useRef } from "react";
import * as THREE from "three";
import { disposeThreeScene } from "@/lib/animations/cleanup";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AtmosphericSceneProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
}

/**
 * Three.js Atmospheric Brand Environment.
 * Features floating red particles, translucent ambient geometric forms,
 * visibility-based pausing, and complete WebGL resource disposal.
 */
export function AtmosphericScene({
  className = "absolute inset-0 pointer-events-none",
  particleCount = 100,
  interactive = true,
}: AtmosphericSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || prefersReduced || typeof window === "undefined") return;

    let isVisible = true;
    let animId: number;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 22;

    // WebGL Renderer with graceful fallback
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    // Particles: Clout Red, Orange & Deep Crimson
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color("#E50920"); // Red
    const c2 = new THREE.Color("#FF5A1F"); // Orange
    const c3 = new THREE.Color("#A90012"); // Deep Red

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 44;
      positions[idx + 1] = (Math.random() - 0.5) * 26;
      positions[idx + 2] = (Math.random() - 0.5) * 20;

      const chosen = Math.random() > 0.4 ? (Math.random() > 0.5 ? c1 : c2) : c3;
      colors[idx] = chosen.r;
      colors[idx + 1] = chosen.g;
      colors[idx + 2] = chosen.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle floating geometric shard (translucent octahedron)
    const shardGeo = new THREE.OctahedronGeometry(1.4, 0);
    const shardMat = new THREE.MeshBasicMaterial({
      color: 0xe50920,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const shard = new THREE.Mesh(shardGeo, shardMat);
    shard.position.set(9, 3, -4);
    scene.add(shard);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // Visibility observer to pause off-screen rendering
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = !!entry?.isIntersecting;
    });
    observer.observe(mount);

    // Animation render loop
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      particles.rotation.y += 0.0008;
      particles.rotation.x = targetY * 0.1;
      particles.position.x = targetX * 0.5;

      shard.rotation.x += 0.004;
      shard.rotation.y += 0.006;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
      disposeThreeScene(scene, renderer);
    };
  }, [particleCount, interactive, prefersReduced]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
