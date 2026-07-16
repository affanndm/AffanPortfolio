"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function PortfolioMotionDesktop() {
  useGSAP(() => {
    const lenis = new Lenis({
      anchors: { offset: 0 },
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      prevent: (node) => Boolean(node.closest("[data-lenis-prevent]")),
    });
    const updateScrollTrigger = () => ScrollTrigger.update();
    const tickLenis = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(tickLenis);
    gsap.ticker.lagSmoothing(0);

    const syncDrawerState = () => {
      if (document.documentElement.dataset.drawerOpen === "true") lenis.stop();
      else lenis.start();
    };
    const drawerState = new MutationObserver(syncDrawerState);
    drawerState.observe(document.documentElement, { attributes: true, attributeFilter: ["data-drawer-open"] });
    syncDrawerState();

    const nameSplits = gsap.utils.toArray<HTMLElement>("[data-name-line]").map(
      (line) => new SplitText(line, { type: "chars", charsClass: "fn-name-char" }),
    );
    const nameCharacters = nameSplits.flatMap((split) => split.chars);
    const floatText = document.querySelector<HTMLElement>("[data-scroll-float]");

    if (floatText) {
      gsap.fromTo(
        floatText.querySelectorAll<HTMLElement>("[data-float-char]"),
        { opacity: 0.18, yPercent: 90, scaleY: 1.35, transformOrigin: "50% 0%" },
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          stagger: 0.012,
          ease: "power3.out",
          scrollTrigger: { trigger: floatText, start: "top 88%", end: "center 58%", scrub: 0.7 },
        },
      );
    }

    const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
    intro
      .fromTo(".fn-year span", { yPercent: 118 }, { yPercent: 0, duration: 1.15, stagger: 0.07 })
      .fromTo(
        nameCharacters,
        { yPercent: 120, rotate: 5, opacity: 0 },
        { yPercent: 0, rotate: 0, opacity: 1, duration: 1.05, stagger: 0.045 },
        "<0.12",
      )
      .fromTo(
        "[data-artifact]",
        { scale: 0.35, rotate: -28, opacity: 0, filter: "blur(16px)" },
        { scale: 1, rotate: -8, opacity: 1, filter: "blur(0px)", duration: 1.3 },
        "<0.08",
      )
      .fromTo(
        ".fn-hero-meta, .fn-hero-index, .fn-hero-bottom, .fn-corners",
        { opacity: 0 },
        { opacity: 1, duration: 0.7, stagger: 0.04 },
        "<0.32",
      );

    const artifact = document.querySelector<HTMLElement>("[data-artifact]");
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    if (!artifact || !hero) {
      return () => {
        drawerState.disconnect();
        gsap.ticker.remove(tickLenis);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.destroy();
        nameSplits.forEach((split) => split.revert());
      };
    }

    const rotateX = gsap.quickTo(artifact, "rotationX", { duration: 0.8, ease: "power3.out" });
    const rotateY = gsap.quickTo(artifact, "rotationY", { duration: 0.8, ease: "power3.out" });
    const moveX = gsap.quickTo(artifact, "x", { duration: 0.9, ease: "power3.out" });
    const moveY = gsap.quickTo(artifact, "y", { duration: 0.9, ease: "power3.out" });
    const follow = (event: PointerEvent) => {
      const x = event.clientX / innerWidth - 0.5;
      const y = event.clientY / innerHeight - 0.5;
      rotateX(y * -15);
      rotateY(x * 20);
      moveX(x * 24);
      moveY(y * 18);
    };
    hero.addEventListener("pointermove", follow);

    gsap.to(".fn-name-affan", {
      xPercent: -28,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
    });
    gsap.to(".fn-name-nadeem", {
      xPercent: 28,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
    });
    gsap.to(artifact, {
      yPercent: 45,
      rotate: 18,
      scale: 0.72,
      opacity: 0,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 },
    });

    const portal = document.querySelector<HTMLElement>("[data-project-portal]");
    if (portal) {
      gsap.fromTo(
        portal,
        { scale: 0.26, rotate: 8, clipPath: "inset(10% 12% 10% 12%)" },
        {
          scale: 1,
          rotate: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: { trigger: ".fn-vantage-transition", start: "top top", end: "bottom bottom", scrub: 1.1 },
        },
      );
      gsap.fromTo(
        ".fn-vantage-heading",
        { opacity: 1, y: 0 },
        {
          opacity: 0.12,
          y: -80,
          ease: "none",
          scrollTrigger: { trigger: ".fn-vantage-transition", start: "top top", end: "45% top", scrub: true },
        },
      );
      gsap.fromTo(
        ".fn-vantage-meta",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: { trigger: ".fn-vantage-transition", start: "55% top", toggleActions: "play none none reverse" },
        },
      );
    }

    return () => {
      hero.removeEventListener("pointermove", follow);
      drawerState.disconnect();
      gsap.ticker.remove(tickLenis);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      nameSplits.forEach((split) => split.revert());
    };
  }, []);

  return null;
}
