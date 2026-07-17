import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const motionWindow = window as Window & { __affanMotionReady?: boolean };

if (!motionWindow.__affanMotionReady) {
  motionWindow.__affanMotionReady = true;

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

  const laneRows = gsap.utils.toArray<HTMLElement>("[data-lane-row]");
  const floatText = document.querySelector<HTMLElement>("[data-scroll-float]");

  if (floatText) {
    gsap.fromTo(
      floatText.querySelectorAll<HTMLElement>("[data-float-char]"),
      { opacity: 0.42, yPercent: 90, scaleY: 1.35, transformOrigin: "50% 0%" },
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
    .fromTo(
      laneRows,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.09 },
    )
    .fromTo(
      ".fn-hero-meta, .fn-lane-instruction, .fn-lane-index, .fn-lane-mode, .fn-lane-scanner, .fn-hero-bottom",
      { opacity: 0 },
      { opacity: 1, duration: 0.7, stagger: 0.04 },
      "<0.28",
    );

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

  gsap.to(".fn-sequence-field", {
    xPercent: -18,
    ease: "none",
    scrollTrigger: { trigger: ".fn-grna", start: "top bottom", end: "bottom top", scrub: 1 },
  });
  gsap.fromTo(
    ".fn-grna-flow li",
    { yPercent: 28, clipPath: "inset(100% 0 0 0)" },
    {
      yPercent: 0,
      clipPath: "inset(0% 0 0 0)",
      stagger: 0.08,
      ease: "power4.out",
      scrollTrigger: { trigger: ".fn-grna-stage", start: "top 72%", toggleActions: "play none none reverse" },
    },
  );
  gsap.to(".fn-lab-marquee span", {
    xPercent: -26,
    ease: "none",
    scrollTrigger: { trigger: ".fn-lab", start: "top bottom", end: "bottom top", scrub: 1 },
  });
  gsap.fromTo(
    ".fn-about-mark span:first-of-type",
    { xPercent: -22 },
    { xPercent: 8, ease: "none", scrollTrigger: { trigger: ".fn-about-mark", start: "top bottom", end: "bottom top", scrub: 1 } },
  );
  gsap.fromTo(
    ".fn-about-mark span:last-of-type",
    { xPercent: 22 },
    { xPercent: -8, ease: "none", scrollTrigger: { trigger: ".fn-about-mark", start: "top bottom", end: "bottom top", scrub: 1 } },
  );
  gsap.fromTo(
    ".fn-contact-signature",
    { xPercent: 7 },
    { xPercent: -3, ease: "none", scrollTrigger: { trigger: ".fn-contact", start: "top bottom", end: "bottom bottom", scrub: 1 } },
  );

  addEventListener(
    "pagehide",
    () => {
      drawerState.disconnect();
      gsap.ticker.remove(tickLenis);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      motionWindow.__affanMotionReady = false;
    },
    { once: true },
  );
}
