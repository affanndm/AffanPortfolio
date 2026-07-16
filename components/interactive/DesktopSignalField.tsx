const signalFieldRuntime = String.raw`
(() => {
  const root = document.getElementById("desktop-signal-field");
  if (!root || root.dataset.bound) return;
  root.dataset.bound = "true";

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
  const wideViewport = matchMedia("(min-width: 900px)");
  if (reduceMotion.matches || !finePointer.matches || !wideViewport.matches) return;

  let suspend = () => {};
  let resume = () => {};
  let dispose = () => {};
  const activate = () => {
    const canvas = document.createElement("canvas");
    root.append(canvas);
    const context = canvas.getContext("2d");
    if (!context) return;

    const nodes = [
      [0.16, 0.2, 3, 0.1], [0.76, 0.28, 3, 0.7], [0.5, 0.5, 4, 1.2],
      [0.28, 0.7, 2.4, 2.1], [0.68, 0.72, 2.4, 2.8], [0.38, 0.34, 2.2, 3.2],
      [0.62, 0.42, 2.2, 4.2], [0.84, 0.58, 2, 4.9], [0.12, 0.58, 2, 5.5]
    ];
    const edges = [[0,2],[1,2],[2,3],[2,4],[0,5],[1,6],[6,7],[5,8]];
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let pointer = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(9, 10, 9, 0.15)";
      context.fillRect(0, 0, width, height);
      const motion = Math.sin(time / 1200) * 1.5;
      const points = nodes.map(([x, y, radius, phase]) => {
        const baseX = x * width;
        const baseY = y * height;
        const dx = pointer.x - baseX;
        const dy = pointer.y - baseY;
        const distance = Math.hypot(dx, dy);
        const influence = pointer.active ? Math.max(0, 1 - distance / 180) : 0;
        return {
          radius,
          x: baseX + Math.cos(time / 1700 + phase) * motion + (dx / Math.max(distance, 1)) * influence * 10,
          y: baseY + Math.sin(time / 1500 + phase) * motion + (dy / Math.max(distance, 1)) * influence * 10,
          glow: influence
        };
      });

      context.lineWidth = 1;
      for (const [a, b] of edges) {
        const start = points[a];
        const end = points[b];
        const glow = Math.max(start.glow, end.glow);
        context.strokeStyle = glow > 0 ? "rgba(196,255,69," + (0.16 + glow * 0.34) + ")" : "rgba(242,240,232,0.16)";
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
      }
      for (const point of points) {
        context.fillStyle = point.glow > 0 ? "rgba(196,255,69,0.92)" : "rgba(242,240,232,0.72)";
        context.beginPath();
        context.arc(point.x, point.y, point.radius + point.glow * 1.8, 0, Math.PI * 2);
        context.fill();
      }
      if (visible && document.visibilityState === "visible" && !reduceMotion.matches) {
        frame = requestAnimationFrame(draw);
      }
    };

    const start = () => {
      cancelAnimationFrame(frame);
      resize();
      if (!reduceMotion.matches) frame = requestAnimationFrame(draw);
    };
    const stop = () => cancelAnimationFrame(frame);
    const move = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true };
    };
    const leave = () => { pointer = { x: -9999, y: -9999, active: false }; };
    const visibility = () => document.visibilityState === "visible" && visible ? start() : stop();
    const intersection = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry && entry.isIntersecting);
      visible ? start() : stop();
    });
    const resizeObserver = new ResizeObserver(start);

    intersection.observe(root);
    resizeObserver.observe(root);
    document.addEventListener("visibilitychange", visibility);
    canvas.addEventListener("pointermove", move, { passive: true });
    canvas.addEventListener("pointerleave", leave);
    reduceMotion.addEventListener("change", start);
    start();

    suspend = stop;
    resume = start;

    dispose = () => {
      stop();
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
      reduceMotion.removeEventListener("change", start);
    };
  };

  addEventListener("pointermove", activate, { passive: true, once: true });
  addEventListener("pagehide", (event) => event.persisted ? suspend() : dispose());
  addEventListener("pageshow", (event) => { if (event.persisted) resume(); });
})();`;

export function DesktopSignalField() {
  return (
    <>
      <div id="desktop-signal-field" className="signal-field" aria-hidden="true" />
      <script dangerouslySetInnerHTML={{ __html: signalFieldRuntime }} />
    </>
  );
}
