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
import ContactForm from "@/components/shared/ContactForm";

const ExploreSolutionsPage = () => {
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
      gsap.from(".explore-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
      gsap.from(".contact-section", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const serviceFeatures = {
    "Web Development": [
      "Responsive Design",
      "Scalable Architecture",
      "SEO Optimization",
      "Custom CMS Integration",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ],
    "Mobile Development": [
      "Native iOS & Android Apps",
      "Cross-platform Solutions",
      "Push Notifications",
      "Offline Functionality",
      "App Store Optimization",
      "Real-time Synchronization"
    ],
    "AI Solutions": [
      "Custom AI Agents",
      "Natural Language Processing",
      "Machine Learning Models",
      "Predictive Analytics",
      "Automated Workflows",
      "Intelligent Chatbots"
    ],
    "Hosting": [
      "Cloud Infrastructure",
      "Auto-scaling",
      "99.9% Uptime Guarantee",
      "SSL Certificates",
      "CDN Integration",
      "24/7 Monitoring"
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
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center max-w-7xl">
            <div className="explore-hero">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                Explore Our Solutions
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover our comprehensive range of IT solutions designed to transform your business. 
                From web development to AI solutions, we have everything you need to succeed in the digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 leading-tight">
                Our Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
                Choose from our wide range of services tailored to meet your specific business needs.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* First 3 services in a row */}
              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 3).map((service) => (
                <Card key={service.title} className="service-card bg-background/30 backdrop-blur-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                        <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                      </div>
                      <div className="text-center sm:text-left">
                        <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {serviceFeatures[service.title as keyof typeof serviceFeatures]?.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                              <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button 
                        className="w-full group text-xs sm:text-sm py-2 sm:py-3"
                        onClick={() => handleLearnMore(service)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
              
              {/* Hosting and Maintenance centered */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
                {services.slice(3, 5).map((service) => (
                  <Card key={service.title} className="service-card bg-background/30 backdrop-blur-md hover:shadow-lg transition-shadow duration-300 w-full max-w-sm sm:max-w-md md:max-w-lg">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                          <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                        </div>
                        <div className="text-center sm:text-left">
                          <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-2">
                            Key Features:
                          </h4>
                          <ul className="space-y-1">
                            {serviceFeatures[service.title as keyof typeof serviceFeatures]?.slice(0, 3).map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          className="w-full group text-xs sm:text-sm py-2 sm:py-3"
                          onClick={() => handleLearnMore(service)}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 leading-tight">
                Why Choose 
                <span className="text-primary"> JantaraX Global IT Pvt. Ltd.</span>
                ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
                We combine cutting-edge technology with years of experience to deliver exceptional results.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4 sm:p-6 rounded-lg bg-background/30 backdrop-blur-md">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3">
                  Quality Assurance
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Every project undergoes rigorous testing to ensure the highest quality standards.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg bg-background/30 backdrop-blur-md">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3 sm:mb-4">
                  <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3">
                  Fast Delivery
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  We deliver projects on time without compromising on quality or functionality.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg bg-background/30 backdrop-blur-md">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3">
                  24/7 Support
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Round-the-clock support to ensure your systems run smoothly at all times.
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 rounded-lg bg-background/30 backdrop-blur-md">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3 sm:mb-4">
                  <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3">
                  Custom Solutions
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Tailored solutions designed specifically for your business requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 leading-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
                Fill out the form below to get a free consultation and let&apos;s build something amazing together.
              </p>
            </div>
            <ContactForm />
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

export default ExploreSolutionsPage;
