"use client";

import { useEffect } from "react";

type CarouselEvent = CustomEvent<{ index: number }>;

export function ProjectCarouselController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-project-carousel]");
    if (!root || root.dataset.enhanced === "true") return;

    const track = root.querySelector<HTMLElement>("[data-carousel-track]");
    const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-carousel-slide]"));
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-carousel-tab]"));
    const previous = root.querySelector<HTMLButtonElement>("[data-carousel-previous]");
    const next = root.querySelector<HTMLButtonElement>("[data-carousel-next]");
    const status = root.querySelector<HTMLElement>("[data-carousel-status]");

    if (!track || !previous || !next || !status || slides.length === 0) return;

    const desktopMode = matchMedia("(min-width: 1000px)");
    const motionMode = matchMedia("(min-width: 1000px) and (prefers-reduced-motion: no-preference)");
    const cleanup = new AbortController();
    let active = 0;
    let frame = 0;

    const update = (index: number, announce = false) => {
      active = Math.max(0, Math.min(slides.length - 1, index));
      root.dataset.active = String(active);

      slides.forEach((slide, slideIndex) => {
        const selected = slideIndex === active;
        slide.dataset.active = String(selected);
        if (desktopMode.matches) {
          slide.setAttribute("aria-hidden", String(!selected));
          slide.inert = !selected;
        } else {
          slide.removeAttribute("aria-hidden");
          slide.inert = false;
        }
      });

      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === active;
        tab.setAttribute("aria-pressed", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });

      previous.disabled = active === 0;
      next.disabled = active === slides.length - 1;
      status.textContent = `Project ${active + 1} of ${slides.length}: ${slides[active].dataset.title}`;
      if (announce) status.setAttribute("aria-live", "polite");
    };

    const request = (index: number, focusTab = false) => {
      const target = Math.max(0, Math.min(slides.length - 1, index));
      if (motionMode.matches) {
        update(target, true);
        dispatchEvent(new CustomEvent("affan:carousel-request", { detail: { index: target } }));
      } else if (desktopMode.matches) {
        update(target, true);
      } else {
        slides[target].scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "nearest",
          inline: "start",
        });
        update(target, true);
      }
      if (focusTab) tabs[target]?.focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => request(index), { signal: cleanup.signal });
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        if (event.key === "Home") request(0, true);
        else if (event.key === "End") request(slides.length - 1, true);
        else request(index + (event.key === "ArrowRight" ? 1 : -1), true);
      }, { signal: cleanup.signal });
    });

    previous.addEventListener("click", () => request(active - 1), { signal: cleanup.signal });
    next.addEventListener("click", () => request(active + 1), { signal: cleanup.signal });

    addEventListener("affan:carousel-update", ((event: CarouselEvent) => {
      update(event.detail.index);
    }) as EventListener, { signal: cleanup.signal });

    track.addEventListener("scroll", () => {
      if (motionMode.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const left = track.getBoundingClientRect().left;
        let closest = 0;
        let distance = Infinity;
        slides.forEach((slide, index) => {
          const current = Math.abs(slide.getBoundingClientRect().left - left);
          if (current < distance) {
            closest = index;
            distance = current;
          }
        });
        update(closest);
      });
    }, { passive: true, signal: cleanup.signal });

    const modeChanged = () => update(active);
    desktopMode.addEventListener("change", modeChanged, { signal: cleanup.signal });
    motionMode.addEventListener("change", modeChanged, { signal: cleanup.signal });

    root.dataset.enhanced = "true";
    update(0);

    return () => {
      cleanup.abort();
      cancelAnimationFrame(frame);
      delete root.dataset.enhanced;
    };
  }, []);

  return null;
}
