import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const motionWindow = window as Window & { __affanMotionReady?: boolean };

if (!motionWindow.__affanMotionReady) {
  motionWindow.__affanMotionReady = true;

  const lenis = new Lenis({
    anchors: { offset: 0 },
    duration: 1.12,
    easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
    smoothWheel: true,
    wheelMultiplier: 0.92,
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
      { y: 10, filter: "blur(5px)" },
      { y: 0, filter: "blur(0px)", duration: 0.7, stagger: 0.04 },
      "<0.28",
    );

  const carousel = document.querySelector<HTMLElement>("[data-project-carousel]");
  const carouselSticky = carousel?.querySelector<HTMLElement>("[data-carousel-sticky]");
  const carouselSlides = carousel ? gsap.utils.toArray<HTMLElement>("[data-carousel-slide]", carousel) : [];
  let carouselTrigger: ScrollTrigger | undefined;
  let activeCarouselIndex = -1;
  let pendingCarouselIndex: number | null = null;

  const animateCarouselSlide = (index: number) => {
    if (index === activeCarouselIndex || !carouselSlides[index]) return;
    activeCarouselIndex = index;
    const slide = carouselSlides[index];
    const motion = slide.dataset.motion;
    dispatchEvent(new CustomEvent("affan:carousel-update", { detail: { index } }));

    const copyTargets = slide.querySelectorAll<HTMLElement>(".fn-carousel-number, .fn-carousel-title-block, .fn-carousel-copy dl, .fn-carousel-actions");
    gsap.killTweensOf(copyTargets);
    gsap.fromTo(copyTargets, { y: 28, filter: "blur(6px)" }, { y: 0, filter: "blur(0px)", duration: 0.72, stagger: 0.055, ease: "expo.out", overwrite: true });

    if (motion === "vantage") {
      gsap.fromTo(slide.querySelector("img"), { scale: 1.18, filter: "blur(9px) saturate(.7)" }, { scale: 1.04, filter: "blur(0px) saturate(.88)", duration: 1.15, ease: "expo.out", overwrite: true });
      gsap.fromTo(slide.querySelectorAll(".fn-vantage-slice"), { scale: 0.82, opacity: 0, rotate: (itemIndex) => itemIndex ? 7 : -7 }, { scale: 1, opacity: 1, rotate: (itemIndex) => itemIndex ? 2 : -2, duration: 0.95, stagger: 0.08, ease: "power4.out", overwrite: true });
    } else if (motion === "grnalytics") {
      gsap.fromTo(slide.querySelectorAll(".fn-grna-strand span"), { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.58, stagger: 0.025, ease: "power4.out", overwrite: true });
      gsap.fromTo(slide.querySelectorAll(".fn-grna-route i"), { scaleX: 0 }, { scaleX: 1, duration: 0.78, stagger: 0.09, ease: "expo.out", overwrite: true });
    } else if (motion === "portfolio") {
      gsap.fromTo(slide.querySelectorAll(".fn-carousel-art-portfolio > span"), { xPercent: (itemIndex) => itemIndex % 2 ? 24 : -24, opacity: 0.28 }, { xPercent: (itemIndex) => [ -4, 8, -7, 3 ][itemIndex], opacity: 1, duration: 0.9, stagger: 0.065, ease: "expo.out", overwrite: true });
      gsap.fromTo(slide.querySelector(".fn-portfolio-reticle"), { scale: 0.25, rotate: -45, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 0.85, ease: "power4.out", overwrite: true });
    } else if (motion === "solutions") {
      gsap.fromTo(slide.querySelectorAll(".fn-solution-nodes i"), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.54, stagger: 0.07, ease: "power4.out", overwrite: true });
      gsap.fromTo(slide.querySelector("pre"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.95, ease: "expo.inOut", overwrite: true });
    } else if (motion === "editorial") {
      const pages = slide.querySelectorAll<HTMLElement>(".fn-editorial-page");
      gsap.fromTo(pages, { yPercent: (itemIndex) => [28, -25, 45][itemIndex], rotate: (itemIndex) => [-15, 18, -8][itemIndex], opacity: 0 }, { yPercent: 0, rotate: (itemIndex) => [-6, 7, -1][itemIndex], opacity: 1, duration: 0.9, stagger: 0.1, ease: "power4.out", overwrite: true });
    } else if (motion === "archive") {
      gsap.fromTo(slide.querySelector(".fn-archive-window"), { clipPath: "inset(48% 48% 48% 48%)", rotate: 4 }, { clipPath: "inset(0% 0% 0% 0%)", rotate: 0, duration: 1.05, ease: "expo.inOut", overwrite: true });
      gsap.fromTo(slide.querySelector(".fn-carousel-art-archive > strong"), { xPercent: -32, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.8, ease: "expo.out", overwrite: true });
    }
  };

  const updateCarousel = (progress: number) => {
    const position = progress * Math.max(1, carouselSlides.length - 1);
    const nextIndex = Math.round(position);
    carouselSlides.forEach((slide, index) => {
      const distance = index - position;
      const visibility = Math.max(0, 1 - Math.abs(distance) * 1.35);
      gsap.set(slide, {
        opacity: visibility,
        xPercent: distance * 14,
        scale: 1 - Math.min(Math.abs(distance), 1) * 0.055,
        rotate: distance * 1.2,
        zIndex: carouselSlides.length - Math.round(Math.abs(distance)),
      });
    });
    animateCarouselSlide(nextIndex);
  };

  const requestCarouselSlide = (event: Event) => {
    if (!(event instanceof CustomEvent)) return;
    const index = Math.max(0, Math.min(carouselSlides.length - 1, Number(event.detail?.index) || 0));
    if (!carouselTrigger) {
      pendingCarouselIndex = index;
      return;
    }
    const progress = index / Math.max(1, carouselSlides.length - 1);
    const destination = carouselTrigger.start + (carouselTrigger.end - carouselTrigger.start) * progress;
    lenis.scrollTo(destination, {
      immediate: true,
      lock: false,
      force: true,
    });
  };

  if (carousel && carouselSticky && carouselSlides.length > 1) {
    addEventListener("affan:carousel-request", requestCarouselSlide);
    const requestedInitialIndex = Math.max(
      0,
      Math.min(carouselSlides.length - 1, pendingCarouselIndex ?? (Number(carousel.dataset.active) || 0)),
    );
    carouselTrigger = ScrollTrigger.create({
      trigger: carousel,
      start: "top top",
      end: () => `+=${innerHeight * (carouselSlides.length - 1) * 0.92}`,
      pin: carouselSticky,
      scrub: 0.78,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      snap: {
        snapTo: 1 / (carouselSlides.length - 1),
        directional: true,
        delay: 0.08,
        duration: { min: 0.22, max: 0.72 },
        ease: "power4.inOut",
      },
      onUpdate: (self) => updateCarousel(self.progress),
    });
    const resolvedInitialIndex = Math.max(
      0,
      Math.min(
        carouselSlides.length - 1,
        pendingCarouselIndex ?? (Number(carousel.dataset.active) || requestedInitialIndex),
      ),
    );
    updateCarousel(resolvedInitialIndex / (carouselSlides.length - 1));
    if (resolvedInitialIndex > 0) {
      requestAnimationFrame(() => {
        requestCarouselSlide(new CustomEvent("affan:carousel-request", {
          detail: { index: resolvedInitialIndex },
        }));
      });
    }
  }
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
      removeEventListener("affan:carousel-request", requestCarouselSlide);
      carouselTrigger?.kill();
      gsap.ticker.remove(tickLenis);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      motionWindow.__affanMotionReady = false;
    },
    { once: true },
  );
}
