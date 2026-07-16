"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const PortfolioMotionDesktop = lazy(() =>
  import("@/components/interactive/PortfolioMotionDesktop").then((module) => ({
    default: module.PortfolioMotionDesktop,
  })),
);

export function PortfolioMotion() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const wideViewport = window.matchMedia("(min-width: 1000px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(wideViewport.matches && !reducedMotion.matches);

    update();
    wideViewport.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      wideViewport.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <PortfolioMotionDesktop />
    </Suspense>
  );
}
