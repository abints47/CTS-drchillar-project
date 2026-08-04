"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: ReactNode;
}

// Inner component to handle scroll reset on route change
function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Force Lenis to scroll to top instantly without smooth delay
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Controls scroll smoothness
        duration: 1.2, // Scroll duration
        smoothWheel: true, // Enables smooth wheel scrolling
      }}
    >
      <ScrollToTopOnNavigate />
      {children}
    </ReactLenis>
  );
}