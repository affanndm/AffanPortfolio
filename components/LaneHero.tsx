"use client";

import { ArrowDown } from "lucide-react";
import { useRef, useState } from "react";

export function LaneHero() {
  const stageRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  const moveScanner = (event: React.PointerEvent<HTMLElement>) => {
    const stage = stageRef.current;
    if (!stage || event.pointerType === "touch") return;

    const bounds = stage.getBoundingClientRect();
    const left = ((event.clientX - bounds.left) / bounds.width) * 100;
    const top = ((event.clientY - bounds.top) / bounds.height) * 100;
    stage.style.setProperty("--lane-x", (left / 100 - 0.5).toFixed(3));
    stage.style.setProperty("--scanner-left", `${left.toFixed(2)}%`);
    stage.style.setProperty("--scanner-top", `${top.toFixed(2)}%`);
  };

  return (
    <section
      ref={stageRef}
      className={`fn-hero fn-lane-hero ${revealed ? "is-lane-revealed" : ""}`}
      aria-labelledby="hero-title"
      data-hero
      onPointerMove={moveScanner}
    >
      <div className="fn-hero-meta fn-meta-left">
        <strong>AFFAN NADEEM</strong>
        <span>PORTFOLIO / 2026</span>
      </div>
      <nav className="fn-local-nav" aria-label="Homepage navigation">
        <a href="#all-work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="fn-hero-meta fn-meta-right">
        <strong>TORONTO / CANADA</strong>
        <span>STUDENT / DEVELOPER</span>
      </div>

      <button
        className="fn-lane-instruction"
        type="button"
        onClick={() => setRevealed((current) => !current)}
        aria-pressed={revealed}
      >
        {revealed ? "Return to name" : "Move to read / tap to reveal"}
      </button>

      <div className="fn-lane-stack fn-lane-name" aria-hidden="true">
        <span data-lane-row>AFFAN NADEEM</span>
        <span data-lane-row>AFFAN NADEEM</span>
        <span data-lane-row>AFFAN NADEEM</span>
        <span data-lane-row>AFFAN NADEEM</span>
      </div>
      <div className="fn-lane-stack fn-lane-reveal" aria-hidden="true">
        <span>STUDENT / TORONTO</span>
        <span>DEVELOPER / BUILDER</span>
        <span>COMPETITOR / ALGORITHMS</span>
        <span>BIOLOGY / LIFE OFF-SCREEN</span>
      </div>

      <h1 id="hero-title" className="sr-only">Affan Nadeem</h1>
      <p className="sr-only">
        Student in Toronto. Developer and builder. Competitor interested in algorithms. Computational-biology enthusiast with a life outside software.
      </p>

      <div className="fn-lane-scanner" aria-hidden="true"><span /></div>
      <div className="fn-lane-index fn-lane-index-left">ALGORITHMS / 03</div>
      <div className="fn-lane-index fn-lane-index-right">BIOLOGY / 05</div>
      <div className="fn-lane-mode" aria-hidden="true">IDENTITY<br />IN MOTION<br />01 / 06</div>

      <div className="fn-hero-bottom">
        <span>STUDENT / DEVELOPER / COMPETITOR / BUILDER</span>
        <a href="#all-work">ENTER THE WORK <ArrowDown size={14} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
