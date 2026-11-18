"use client";

import { type ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/animation/SmoothScrollProvider";
import { ScrollProgress } from "@/components/animation/ScrollProgress";
import { CursorFollower } from "@/components/animation/CursorFollower";
import { AnimationDiagnostics } from "@/components/animation/AnimationDiagnostics";
import { PageTransition } from "@/components/animation/PageTransition";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function AppClientShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <CursorFollower />
      <AnimationDiagnostics />
      <Navbar />
      <PageTransition>
        <main id="main-content" className="relative z-10 min-h-screen">
          {children}
        </main>
      </PageTransition>
      <Footer />
      <div className="noise-overlay" aria-hidden="true" />
    </SmoothScrollProvider>
  );
}
