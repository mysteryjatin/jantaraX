"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { services } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/shared/PageLayout";
import ServiceModal from "@/components/shared/ServiceModal";

const ServicesPage = () => {
  const container = useRef(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  useGSAP(
    () => {
      // Hero section animation
      gsap.from(".service-hero", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      // Service cards animation with enhanced effects
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotationY: 15,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate individual elements within cards
      gsap.from(".service-card h3", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      });

      gsap.from(".service-card p", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.4,
      });

      gsap.from(".service-card ul", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.6,
      });

      gsap.from(".service-card button", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.8,
      });

      // Add hover animations for each service card
      const cards = gsap.utils.toArray(".service-card");
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const iconElement = cardElement.querySelector('[class*="h-8"]');
        const titleElement = cardElement.querySelector('h3');
        const descriptionElement = cardElement.querySelector('p');
        const buttonElement = cardElement.querySelector('button');
        const featuresList = cardElement.querySelector('ul');

        // Hover enter animation
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -10,
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
            y: -3,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(descriptionElement, {
            y: -3,
            duration: 0.3,
            ease: "power2.out"
          });

          gsap.to(buttonElement, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            ease: "power2.out"
          });

          // Animate feature list items
          const featureItems = featuresList?.querySelectorAll('li');
          if (featureItems && featureItems.length > 0) {
            gsap.to(featureItems, {
              x: 5,
              duration: 0.3,
              ease: "power2.out",
              stagger: 0.05
            });
          }
        });

        // Hover leave animation
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

          gsap.to(buttonElement, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });

          // Reset feature list items
          const featureItems = featuresList?.querySelectorAll('li');
          if (featureItems && featureItems.length > 0) {
            gsap.to(featureItems, {
              x: 0,
              duration: 0.3,
              ease: "power2.out",
              stagger: 0.05
            });
          }
        });
      });
    },
    { scope: container }
  );

  const serviceFeatures = {
    "Web Development": [
      "Responsive Design for All Devices",
      "Modern Frameworks (React, Next.js, Vue.js)",
      "E-commerce Integration",
      "SEO Optimization",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ],
    "Mobile Development": [
      "Native iOS & Android Apps",
      "Cross-platform Solutions (React Native, Flutter)",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
      "Security & Data Protection"
    ],
    "AI Solutions": [
      "Intelligent Chatbots",
      "Machine Learning Models",
      "Natural Language Processing",
      "Predictive Analytics",
      "Process Automation",
      "Custom AI Agents"
    ],
    "Hosting": [
      "Cloud Infrastructure Setup",
      "24/7 Server Monitoring",
      "SSL Certificate Management",
      "Backup & Recovery Solutions",
      "CDN Implementation",
      "Scalability Planning"
    ],
    "Maintenance": [
      "Regular Security Updates",
      "Performance Monitoring",
      "Bug Fixes & Patches",
      "Database Optimization",
      "Code Reviews",
      "Technical Support"
    ]
  };

  return (
    <PageLayout>
      <div ref={container} className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
        <div className="container mx-auto text-center">
          <div className="service-hero">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-6xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              We offer comprehensive IT solutions tailored to your business needs. 
              From cutting-edge web development to intelligent AI solutions, 
              we&apos;re your technology partner for success.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="space-y-12">
            {/* First 4 services in 2x2 grid */}
            <div className="grid gap-12 lg:grid-cols-2">
                {services.slice(0, 4).map((service) => (
                <Card key={service.title} className="service-card bg-background/30 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-800 dark:text-white">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        What We Offer:
                      </h4>
                      <ul className="space-y-2">
                        {serviceFeatures[service.title as keyof typeof serviceFeatures]?.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="mt-6 group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg"
                        onClick={() => handleLearnMore(service)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Maintenance card centered */}
            {services.length > 4 && (() => {
              const maintenanceService = services[4];
              const MaintenanceIcon = maintenanceService.icon;
              return (
                <div className="flex justify-center">
                  <Card className="service-card bg-background/30 backdrop-blur-md max-w-2xl w-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <MaintenanceIcon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-800 dark:text-white">
                            {maintenanceService.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            {maintenanceService.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          What We Offer:
                        </h4>
                        <ul className="space-y-2">
                          {serviceFeatures[maintenanceService.title as keyof typeof serviceFeatures]?.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="mt-6 group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg"
                          onClick={() => handleLearnMore(maintenanceService)}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Let&apos;s discuss how our services can help you achieve your goals. 
            Get in touch for a free consultation.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" asChild>
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </div>
      </section>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </PageLayout>
  );
};

export default ServicesPage;
