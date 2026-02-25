"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { projects } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";
import Image from "next/image";
import PageLayout from "@/components/shared/PageLayout";
import ProductModal from "@/components/shared/ProductModal";

const ProductsPage = () => {
  const container = useRef(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useGSAP(
    () => {
      // Hero section animation
      gsap.from(".product-hero", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      // Product cards animation with enhanced effects
      gsap.from(".product-card", {
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
        stagger: 0.15,
      });

      // Animate individual elements within product cards
      gsap.from(".product-card h3", {
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

      gsap.from(".product-card p", {
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

      gsap.from(".product-card ul", {
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

      gsap.from(".product-card button", {
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

      // Ensure buttons are visible after animation
      gsap.set(".product-card button", { opacity: 1 });

      // Add hover animations for each product card
      const cards = gsap.utils.toArray(".product-card");
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const imageElement = cardElement.querySelector('img');
        const titleElement = cardElement.querySelector('h3');
        const descriptionElement = cardElement.querySelector('p');
        const buttonElement = cardElement.querySelector('button');
        const techTags = cardElement.querySelectorAll('[class*="bg-primary/10"]');

        // Hover enter animation
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -12,
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(imageElement, {
            scale: 1.05,
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

          // Animate tech tags
          gsap.to(techTags, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05
          });

          // Animate feature list items
          const featureItems = cardElement.querySelectorAll('li');
          gsap.to(featureItems, {
            x: 5,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05
          });
        });

        // Hover leave animation
        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(imageElement, {
            scale: 1,
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

          // Reset tech tags
          gsap.to(techTags, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05
          });

          // Reset feature list items
          const featureItems = cardElement.querySelectorAll('li');
          gsap.to(featureItems, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05
          });
        });
      });
    },
    { scope: container }
  );

  const projectDetails = {
    "Corporate Web Portal": {
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      features: ["User Management", "Document Sharing", "Real-time Chat", "Analytics Dashboard"],
      duration: "3-4 months",
      team: "5 developers"
    },
    "E-commerce Platform": {
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      features: ["Payment Processing", "Inventory Management", "Order Tracking", "Admin Panel"],
      duration: "4-6 months",
      team: "6 developers"
    },
    "Mobile Banking App": {
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      features: ["Biometric Authentication", "Real-time Transactions", "Bill Payments", "Investment Tracking"],
      duration: "5-7 months",
      team: "7 developers"
    },
    "CRM Solutions": {
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      features: ["Lead Management", "Sales Pipeline", "Email Integration", "Reporting"],
      duration: "2-3 months",
      team: "4 developers"
    },
    "Inventory Management": {
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Redis"],
      features: ["Stock Tracking", "Automated Reordering", "Barcode Scanning", "Analytics"],
      duration: "3-4 months",
      team: "4 developers"
    },
    "Data Dashboards": {
      technologies: ["React", "D3.js", "Python", "MongoDB"],
      features: ["Real-time Data", "Interactive Charts", "Custom Reports", "API Integration"],
      duration: "2-3 months",
      team: "3 developers"
    },
    "Ecommerce": {
      technologies: ["Next.js", "Shopify", "Stripe", "PostgreSQL", "Node.js", "React"],
      features: ["Single & Multi-Vendor Support", "Product Catalog", "Payment Gateway", "Order Management", "Vendor Dashboard", "Commission System"],
      duration: "2-8 months",
      team: "2-7 developers"
    },
    "Multi-Vendor Marketplace": {
      technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
      features: ["Vendor Registration", "Commission Management", "Escrow System", "Dispute Resolution"],
      duration: "6-8 months",
      team: "8 developers"
    },
    "ERP Applications": {
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      features: ["Accounting Module", "HR Management", "Inventory Control", "Financial Reporting"],
      duration: "8-12 months",
      team: "10 developers"
    },
    "Real Estate Applications": {
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      features: ["Property Listings", "Virtual Tours", "Lead Management", "Document Management"],
      duration: "4-6 months",
      team: "5 developers"
    },
    "AI Chatbots": {
      technologies: ["Python", "TensorFlow", "OpenAI API", "Node.js"],
      features: ["Natural Language Processing", "Intent Recognition", "Multi-language Support", "Analytics"],
      duration: "2-3 months",
      team: "3 developers"
    },
    "Gaming Applications": {
      technologies: ["Unity", "C#", "Photon", "AWS"],
      features: ["Multiplayer Support", "Real-time Physics", "In-app Purchases", "Leaderboards"],
      duration: "6-12 months",
      team: "6 developers"
    },
    "Blockchain Projects": {
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
      features: ["Smart Contracts", "DeFi Integration", "NFT Marketplace", "Wallet Integration"],
      duration: "4-8 months",
      team: "5 developers"
    }
  };

  return (
    <PageLayout>
      <div ref={container} className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center max-w-7xl">
            <div className="product-hero">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                Our Products
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Explore our comprehensive portfolio of innovative solutions. 
                From enterprise applications to cutting-edge AI solutions, 
                we deliver technology that drives business success.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const details = projectDetails[project.title as keyof typeof projectDetails];
              return (
                <Card key={project.title} className="product-card bg-background/30 backdrop-blur-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-40 sm:h-48 md:h-56 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-white mb-2 sm:mb-3">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    {details && (
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {details.technologies.slice(0, 4).map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                            {details.technologies.length > 4 && (
                              <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                                +{details.technologies.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white mb-2">
                            Key Features:
                          </h4>
                          <ul className="space-y-1">
                            {details.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                          <span>Duration: {details.duration}</span>
                          <span>Team: {details.team}</span>
                        </div>
                        
                        <Button 
                          className="w-full group text-xs sm:text-sm py-2 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg"
                          onClick={() => handleViewDetails(project)}
                        >
                          View Details
                          <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
            Ready to Build Your Next Project?
          </h2>
          <p className="mt-4 sm:mt-6 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Let&apos;s discuss your project requirements and create something amazing together. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg" asChild>
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
      </div>

      {/* Product Modal */}
      {selectedProject && (
        <ProductModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </PageLayout>
  );
};

export default ProductsPage;
