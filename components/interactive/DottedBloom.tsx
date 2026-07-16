"use client";

import { useEffect, useRef } from "react";
import "./signal-field.css";

export function DottedBloom() {
  const bloomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bloom = bloomRef.current;
    if (!bloom) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduceMotion.matches || !finePointer.matches) return;

    let frame = 0;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;

    const update = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      bloom.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(update);
    };

    const onPointerMove = (event: PointerEvent) => {
      const parent = bloom.parentElement?.getBoundingClientRect();
      if (!parent) return;
      targetX = event.clientX - parent.left;
      targetY = event.clientY - parent.top;
    };

    const parent = bloom.parentElement;
    parent?.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = window.requestAnimationFrame(update);
    return () => {
      window.cancelAnimationFrame(frame);
      parent?.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className="dotted-bloom" aria-hidden="true">
      <div ref={bloomRef} className="bloom-light" />
    </div>
  );
}
