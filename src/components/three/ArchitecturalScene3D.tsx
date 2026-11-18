import { useEffect, useRef } from "react";
import * as THREE from "three";
import { disposeThreeScene } from "@/lib/animations/cleanup";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ArchitecturalScene3DProps {
  className?: string;
}

/**
 * Three.js Immersive Red Architectural Environment (Reference 02).
 * Renders floating architectural monolithic panels, luminous red edges,
 * and a dark reflective ground plane with smooth camera parallax.
 */
export function ArchitecturalScene3D({
  className = "absolute inset-0 pointer-events-none",
}: ArchitecturalScene3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || prefersReduced || typeof window === "undefined") return;

    let isVisible = true;
    let animId: number;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 26);
    camera.lookAt(0, 0, 0);

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

    // Floating architectural monoliths
    const group = new THREE.Group();
    scene.add(group);

    const boxGeo = new THREE.BoxGeometry(4.2, 13, 0.4);
    const boxMat = new THREE.MeshBasicMaterial({
      color: 0x080808,
      transparent: true,
      opacity: 0.88,
    });
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xe50920,
      transparent: true,
      opacity: 0.45,
    });

    const positions = [
      { x: -14, y: 1, z: -8, rotY: 0.2 },
      { x: -7, y: 2, z: -3, rotY: 0.1 },
      { x: 7, y: 1.5, z: -4, rotY: -0.15 },
      { x: 15, y: 0.5, z: -7, rotY: -0.25 },
    ];

    positions.forEach((pos) => {
      const mesh = new THREE.Mesh(boxGeo, boxMat);
      mesh.position.set(pos.x, pos.y, pos.z);
      mesh.rotation.y = pos.rotY;

      const edges = new THREE.EdgesGeometry(boxGeo);
      const line = new THREE.LineSegments(edges, edgeMat);
      mesh.add(line);

      group.add(mesh);
    });

    // Dark reflective grid plane
    const gridHelper = new THREE.GridHelper(60, 30, 0xe50920, 0x220508);
    gridHelper.position.y = -6;
    scene.add(gridHelper);

    // Mouse drift
    let mouseX = 0;
    let targetX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = !!entry?.isIntersecting;
    });
    observer.observe(mount);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      targetX += (mouseX - targetX) * 0.03;
      group.rotation.y = targetX * 0.08;

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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      disposeThreeScene(scene, renderer);
    };
  }, [prefersReduced]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
