"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Controls scroll smoothness (lower value = smoother/slower)
        duration: 1.2, // Scroll duration
        smoothWheel: true, // Enables smooth wheel scrolling
      }}
    >
      {children}
    </ReactLenis>
  );
}