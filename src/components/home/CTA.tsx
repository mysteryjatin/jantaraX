"use client";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const CTA = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cta-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".cta-btn", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="cta-title text-3xl font-bold text-gray-800 dark:text-white">
          Ready to Transform Your Business?
        </h2>
        <Button size="lg" className="cta-btn mt-8" asChild>
          <a href="/contact">Get Started</a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
