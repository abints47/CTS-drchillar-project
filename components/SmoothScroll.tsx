"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: ReactNode;
}

function ScrollHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  // 1. Reset scroll and force resize on route changes
  useEffect(() => {
    if (lenis) {
      // Re-enable scroll in case it was locked on previous route
      lenis.start();
      lenis.scrollTo(0, { immediate: true });
      
      // Give DOM time to mount layout, then recalculate scroll dimensions
      const timer = setTimeout(() => {
        lenis.resize();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  // 2. Automatically sync Lenis when DOM updates or images load
  useEffect(() => {
    if (!lenis) return;

    // Recalculate heights when elements animate or dynamically change height
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        autoResize: true, // Ensures Lenis listens to window resize events
      }}
    >
      <ScrollHandler />
      {children}
    </ReactLenis>
  );
} 