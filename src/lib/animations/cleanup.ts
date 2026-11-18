import type { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

/**
 * Safely kills and cleans up an array or single GSAP ScrollTrigger
 */
export function cleanupScrollTriggers(triggers: (ScrollTrigger | null | undefined)[]) {
  triggers.forEach((trigger) => {
    if (trigger && typeof trigger.kill === "function") {
      trigger.kill();
    }
  });
}

/**
 * Recursively disposes Three.js geometries, materials, and textures
 */
export function disposeThreeScene(scene: THREE.Scene, renderer?: THREE.WebGLRenderer) {
  scene.traverse((object) => {
    if (!(object instanceof THREE.Mesh)) return;

    if (object.geometry) {
      object.geometry.dispose();
    }

    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach((mat) => disposeMaterial(mat));
      } else {
        disposeMaterial(object.material);
      }
    }
  });

  if (renderer) {
    renderer.dispose();
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  }
}

function disposeMaterial(material: THREE.Material) {
  material.dispose();
  // Dispose textures if attached
  for (const key of Object.keys(material)) {
    const value = (material as unknown as Record<string, unknown>)[key];
    if (value && typeof value === "object" && "isTexture" in value && value.isTexture) {
      (value as THREE.Texture).dispose();
    }
  }
}
