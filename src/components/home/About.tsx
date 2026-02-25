"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Image animation with enhanced effects
      gsap.from(".about-img", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        opacity: 0,
        x: -60,
        scale: 0.9,
        rotationY: 15,
        duration: 0.8,
        ease: "power3.out",
      });

      // Content animation with stagger
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        opacity: 0,
        x: 60,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate individual elements within content
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.4,
      });

      gsap.from(".about-stats", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.6,
      });

      // Add hover animations for stats
      const statElements = gsap.utils.toArray(".about-stats");
      statElements.forEach((stat) => {
        const statElement = stat as HTMLElement;
        const numberElement = statElement.querySelector('[class*="text-2xl"]');
        const labelElement = statElement.querySelector('[class*="text-xs"]');

        statElement.addEventListener('mouseenter', () => {
          gsap.to(statElement, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(numberElement, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(labelElement, {
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        statElement.addEventListener('mouseleave', () => {
          gsap.to(statElement, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(numberElement, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(labelElement, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    },
    { scope: container }
  );
  return (
    <section id="about" ref={container} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 grid-cols-1 lg:grid-cols-2">
          <div className="about-img relative h-64 sm:h-80 md:h-96 lg:h-[500px] order-1 lg:order-1">
            <Image
              src="/assets/about.jpg"
              alt="About Us"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="about-content flex flex-col justify-center order-2 lg:order-2 px-0 sm:px-4 lg:px-8">
            <h2 className="about-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-4 sm:mb-6">
              About Us
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="about-text text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-primary">JantaraX Global IT Pvt. Ltd.</span>
                is more than just an IT service provider—we are innovators, problem-solvers, and digital enablers. We specialize in mobile development, intelligent AI solutions, application design, hosting, and maintenance, ensuring businesses stay ahead in a competitive landscape.
              </p>
              <p className="about-text text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With our focus on creativity and cutting-edge technology, we bring your ideas to life and transform them into powerful digital experiences. Our team combines technical expertise with creative vision to deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="about-stats text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="about-stats text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">48hrs</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Response Time</div>
              </div>
              <div className="about-stats text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
              <div className="about-stats text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
