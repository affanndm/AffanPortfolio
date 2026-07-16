"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const SignalField = lazy(() =>
  import("./SignalField").then((module) => ({ default: module.SignalField })),
);

export function DesktopSignalField() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const wideViewport = window.matchMedia("(min-width: 900px)");
    if (reduceMotion.matches || !finePointer.matches || !wideViewport.matches) return;

    const load = () => setEnabled(true);
    window.addEventListener("pointermove", load, { passive: true, once: true });
    return () => window.removeEventListener("pointermove", load);
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <SignalField />
    </Suspense>
  );
}
