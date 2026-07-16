"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortfolioMotionDesktop() {
  useGSAP(() => {
    const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
    intro
      .fromTo(
        "[data-hero-line]",
        { yPercent: 112, clipPath: "inset(0 0 100% 0)" },
        { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 1.15, stagger: 0.09 },
      )
      .fromTo(
        ".signal-sculpture",
        { scale: 0.55, rotate: -18, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 1.4 },
        "<0.12",
      )
      .fromTo(
        ".hero-bottom, .hero-kicker, .hero-coordinate",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.06 },
        "<0.35",
      );

    const sculpture = document.querySelector<HTMLElement>(".signal-sculpture");
    const hero = document.querySelector<HTMLElement>(".hero-section");
    if (sculpture && hero) {
      const rotateX = gsap.quickTo(sculpture, "rotationX", { duration: 0.7, ease: "power3.out" });
      const rotateY = gsap.quickTo(sculpture, "rotationY", { duration: 0.7, ease: "power3.out" });
      const moveX = gsap.quickTo(sculpture, "x", { duration: 0.9, ease: "power3.out" });
      const moveY = gsap.quickTo(sculpture, "y", { duration: 0.9, ease: "power3.out" });
      const pointer = (event: PointerEvent) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        rotateX(y * -13);
        rotateY(x * 18);
        moveX(x * 26);
        moveY(y * 18);
      };
      hero.addEventListener("pointermove", pointer);

      gsap.to(sculpture, {
        yPercent: 42,
        rotate: 34,
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".hero-name", {
        yPercent: 24,
        opacity: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => hero.removeEventListener("pointermove", pointer);
    }
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".work-layout",
      start: "top top+=104",
      end: "bottom bottom-=90",
      pin: ".work-manifesto",
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    const projectCards = gsap.utils.toArray<HTMLElement>("[data-project-card]");
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { scale: 0.88, y: 90 },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 96%",
            end: "top 28%",
            scrub: 1,
          },
        },
      );
      if (index < projectCards.length - 1) {
        gsap.to(card, {
          scale: 0.94,
          ease: "none",
          scrollTrigger: {
            trigger: projectCards[index + 1],
            start: "top 88%",
            end: "top 18%",
            scrub: 1,
          },
        });
      }
    });

    gsap.to(".lab-marquee span", {
      xPercent: -28,
      ease: "none",
      scrollTrigger: {
        trigger: ".lab-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    const words = gsap.utils.toArray<HTMLElement>("[data-reveal-word]");
    if (words.length) {
      gsap.fromTo(
        words,
        { color: "#8f8d87", filter: "blur(1.5px)" },
        {
          color: "#f7f4ed",
          filter: "blur(0px)",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 78%",
            end: "bottom 38%",
            scrub: true,
          },
        },
      );
    }

    gsap.fromTo(
      ".portrait-ring-one",
      { rotate: -35 },
      {
        rotate: 140,
        ease: "none",
        scrollTrigger: { trigger: ".about-portrait", start: "top bottom", end: "bottom top", scrub: 1 },
      },
    );
    gsap.fromTo(
      ".portrait-ring-two",
      { rotate: 28 },
      {
        rotate: -120,
        ease: "none",
        scrollTrigger: { trigger: ".about-portrait", start: "top bottom", end: "bottom top", scrub: 1 },
      },
    );
    gsap.fromTo(
      ".contact-signature",
      { xPercent: 8 },
      {
        xPercent: -4,
        ease: "none",
        scrollTrigger: { trigger: ".contact-section", start: "top bottom", end: "bottom bottom", scrub: 1 },
      },
    );
  }, []);

  return null;
}
