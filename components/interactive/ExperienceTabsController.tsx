"use client";

import { useEffect } from "react";

export function ExperienceTabsController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-experience-tabs]");
    if (!root || root.dataset.enhanced === "true") return;

    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-experience-tab]"));
    const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-experience-panel]"));
    const cleanup = new AbortController();

    const select = (index: number, moveFocus = false) => {
      const nextIndex = (index + tabs.length) % tabs.length;
      const id = tabs[nextIndex]?.dataset.experienceTab;
      if (!id) return;

      root.dataset.active = id;
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === nextIndex;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      panels.forEach((panel) => {
        panel.dataset.active = String(panel.dataset.experiencePanel === id);
      });

      if (moveFocus) tabs[nextIndex].focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(index), { signal: cleanup.signal });
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        if (event.key === "Home") select(0, true);
        else if (event.key === "End") select(tabs.length - 1, true);
        else select(index + (event.key === "ArrowRight" ? 1 : -1), true);
      }, { signal: cleanup.signal });
    });

    root.dataset.enhanced = "true";
    select(0);

    return () => cleanup.abort();
  }, []);

  return null;
}
