"use client";

import { type ReactNode } from "react";
import { SmoothScrollProvider } from "@/components/animation/SmoothScrollProvider";
import { ScrollProgress } from "@/components/animation/ScrollProgress";
import { PageTransition } from "@/components/animation/PageTransition";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function AppClientShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
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
