"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Services = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Title animation
      gsap.from(".service-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });
      
      // Description animation
      gsap.from(".service-p", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
      
      // Cards animation with stagger
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 85%",
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotationY: 15,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      // Add hover animations for each card
      const cards = gsap.utils.toArray(".service-card");
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const iconElement = cardElement.querySelector('[class*="h-6"]');
        const titleElement = cardElement.querySelector('h3');
        const descriptionElement = cardElement.querySelector('p');

        // Hover enter
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(iconElement, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(titleElement, {
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(descriptionElement, {
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        // Hover leave
        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(iconElement, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(titleElement, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(descriptionElement, {
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
    <section ref={container} className="py-12 sm:py-16 md:py-20 mt-[100vh] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="service-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
          Our Services
        </h2>
        <p className="service-p mt-4 sm:mt-6 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          We offer a comprehensive suite of IT services to help your business
          thrive in the digital age.
        </p>
        <div className="mt-8 sm:mt-12">
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <Card key={service.title} className="service-card text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardTitle className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-white mb-2 sm:mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          {services.length > 4 && (() => {
            const maintenanceService = services[4];
            const MaintenanceIcon = maintenanceService.icon;
            return (
              <div className="mt-6 sm:mt-8 flex justify-center">
                <Card
                  key={maintenanceService.title}
                  className="service-card text-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10">
                      <MaintenanceIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardTitle className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-white mb-2 sm:mb-3">
                      {maintenanceService.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {maintenanceService.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default Services;
