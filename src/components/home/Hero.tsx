"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, Suspense, useCallback } from "react";
import Scene from "./Scene";

const Hero = () => {
  const container = useRef(null);

  const setupScrollTrigger = useCallback(() => {
    if (!container.current) return;

    const scrollTrigger = gsap.to(".hero-content", {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        id: "hero-scroll-trigger", // Add unique ID
      },
    });

    return () => {
      scrollTrigger.scrollTrigger?.kill();
    };
  }, []);

  useGSAP(
    setupScrollTrigger,
    { 
      scope: container,
      dependencies: [] // Empty dependencies to prevent re-creation
    }
  );

  return (
    <section
      ref={container}
      className="fixed top-0 left-0 w-screen h-screen"
    >
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />}>
          <Scene key="hero-scene" />
        </Suspense>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="hero-content w-full max-w-7xl mx-auto">
          <div className="rounded-xl bg-background/30 p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
              Empowering Businesses with
              <br className="hidden sm:block" />
              <span className="block sm:inline"> </span>
              <span className="text-primary">Innovative IT Solutions</span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-200 leading-relaxed">
              <span className="font-semibold text-primary">JantaraX Global IT Pvt. Ltd.</span>
              delivers seamless mobile apps, intelligent AI solutions, secure hosting, and 24/7 maintenance—so your business runs smarter, faster, and stronger.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base" asChild>
                <a href="/explore-solutions">Explore Solutions</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
