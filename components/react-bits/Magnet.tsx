"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

type MagnetProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padding?: number;
  strength?: number;
  wrapperClassName?: string;
  innerClassName?: string;
};

// Adapted from React Bits Magnet for this portfolio's pointer and motion rules.
export function Magnet({
  children,
  padding = 72,
  strength = 4.5,
  wrapperClassName = "",
  innerClassName = "",
  ...props
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const move = (event: PointerEvent) => {
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const inside =
        Math.abs(centerX - event.clientX) < rect.width / 2 + padding &&
        Math.abs(centerY - event.clientY) < rect.height / 2 + padding;
      setActive(inside);
      setPosition(
        inside
          ? { x: (event.clientX - centerX) / strength, y: (event.clientY - centerY) / strength }
          : { x: 0, y: 0 },
      );
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [padding, strength]);

  return (
    <div ref={ref} className={wrapperClassName} {...props}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: active ? "transform 240ms cubic-bezier(0.16, 1, 0.3, 1)" : "transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
