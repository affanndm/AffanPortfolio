"use client";

import { useEffect, useRef } from "react";
import "./signal-field.css";

type Node = {
  x: number;
  y: number;
  r: number;
  label?: string;
  phase: number;
};

const nodes: Node[] = [
  { x: 0.16, y: 0.2, r: 3, label: "VANTAGE", phase: 0.1 },
  { x: 0.76, y: 0.28, r: 3, label: "gRNAlytics", phase: 0.7 },
  { x: 0.5, y: 0.5, r: 4, label: "SYSTEMS", phase: 1.2 },
  { x: 0.28, y: 0.7, r: 2.4, label: "PYTHON", phase: 2.1 },
  { x: 0.68, y: 0.72, r: 2.4, label: "TYPESCRIPT", phase: 2.8 },
  { x: 0.38, y: 0.34, r: 2.2, phase: 3.2 },
  { x: 0.62, y: 0.42, r: 2.2, phase: 4.2 },
  { x: 0.84, y: 0.58, r: 2, phase: 4.9 },
  { x: 0.12, y: 0.58, r: 2, phase: 5.5 },
];

const edges = [
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
  [0, 5],
  [1, 6],
  [6, 7],
  [5, 8],
];

export function SignalField({ labelled = false }: { labelled?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let pointer = { x: -9999, y: -9999, active: false };
    const context = canvas.getContext("2d");
    if (!context) return;

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, finePointer.matches ? 1.5 : 1);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(9, 10, 9, 0.15)";
      context.fillRect(0, 0, width, height);

      const motion = reduceMotion.matches ? 0 : Math.sin(time / 1200) * 1.5;
      const points = nodes.map((node) => {
        const baseX = node.x * width;
        const baseY = node.y * height;
        const driftX = Math.cos(time / 1700 + node.phase) * motion;
        const driftY = Math.sin(time / 1500 + node.phase) * motion;
        const dx = pointer.x - baseX;
        const dy = pointer.y - baseY;
        const distance = Math.hypot(dx, dy);
        const influence = pointer.active && finePointer.matches ? Math.max(0, 1 - distance / 180) : 0;
        return {
          ...node,
          px: baseX + driftX + (dx / Math.max(distance, 1)) * influence * 10,
          py: baseY + driftY + (dy / Math.max(distance, 1)) * influence * 10,
          glow: influence,
        };
      });

      context.lineWidth = 1;
      for (const [a, b] of edges) {
        const start = points[a];
        const end = points[b];
        const glow = Math.max(start.glow, end.glow);
        context.strokeStyle = glow > 0 ? `rgba(196, 255, 69, ${0.16 + glow * 0.34})` : "rgba(242, 240, 232, 0.16)";
        context.beginPath();
        context.moveTo(start.px, start.py);
        context.lineTo(end.px, end.py);
        context.stroke();
      }

      for (const point of points) {
        context.fillStyle = point.glow > 0 ? "rgba(196, 255, 69, 0.92)" : "rgba(242, 240, 232, 0.72)";
        context.beginPath();
        context.arc(point.px, point.py, point.r + point.glow * 1.8, 0, Math.PI * 2);
        context.fill();
      }

      if (labelled) {
        context.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
        context.textBaseline = "top";
        for (const point of points) {
          if (!point.label) continue;
          context.fillStyle = "rgba(242, 240, 232, 0.72)";
          context.fillText(point.label.toUpperCase(), point.px + 9, point.py + 6);
        }
      }

      if (!reduceMotion.matches && visible && document.visibilityState === "visible") {
        frame = window.requestAnimationFrame(draw);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      resize();
      frame = window.requestAnimationFrame(draw);
    };

    const stop = () => window.cancelAnimationFrame(frame);
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true };
    };
    const onPointerLeave = () => {
      pointer = { x: -9999, y: -9999, active: false };
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible" && visible) start();
      else stop();
    };

    const intersection = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      if (visible) start();
      else stop();
    });
    const resizeObserver = new ResizeObserver(start);
    intersection.observe(wrapper);
    resizeObserver.observe(wrapper);
    document.addEventListener("visibilitychange", onVisibility);
    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    reduceMotion.addEventListener("change", start);
    finePointer.addEventListener("change", start);
    start();

    return () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      reduceMotion.removeEventListener("change", start);
      finePointer.removeEventListener("change", start);
    };
  }, [labelled]);

  return (
    <div ref={wrapperRef} className="signal-field" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
