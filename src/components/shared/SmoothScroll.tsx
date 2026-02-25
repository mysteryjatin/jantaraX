"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, [lenis]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <ReactLenis root>{children as any}</ReactLenis>;
};

export default SmoothScroll;
