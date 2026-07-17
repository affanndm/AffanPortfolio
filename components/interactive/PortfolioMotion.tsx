"use client";

import { useEffect } from "react";

export function PortfolioMotion() {
  useEffect(() => {
    const desktop = matchMedia("(min-width: 1000px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");

    if (!desktop.matches || reduced.matches) return;
    if (document.querySelector("script[data-affan-motion]")) return;

    // Start the animation system only after React has hydrated the page. GSAP
    // inserts pin spacers and inline transforms, which must not race hydration.
    const script = document.createElement("script");
    script.type = "module";
    script.src = "/generated/portfolio-motion.js";
    script.dataset.affanMotion = "true";
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return null;
}
