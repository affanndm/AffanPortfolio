"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortfolioMotionDesktop() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".work-layout",
      start: "top top+=112",
      end: "bottom bottom-=80",
      pin: ".work-manifesto",
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    const words = gsap.utils.toArray<HTMLElement>("[data-reveal-word]");
    if (words.length) {
      gsap.fromTo(
        words,
        { opacity: 0.42 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 78%",
            end: "bottom 42%",
            scrub: true,
          },
        },
      );
    }
  }, []);

  return null;
}
