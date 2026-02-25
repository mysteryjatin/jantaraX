"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import { Mail, Phone, Globe, Shield, Lock, Eye, Users, FileText } from "lucide-react";

const PrivacyPolicyPage = () => {
  const container = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(
    () => {
      if (!isClient) return;

      // Hero section animation
      gsap.from(".privacy-hero", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      // Content sections animation
      gsap.from(".privacy-section", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
      });
    },
    { scope: container, dependencies: [isClient] }
  );

  if (!isClient) {
    return (
      <PageLayout>
        <div className="relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-48"></div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div ref={container} className="relative z-10">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="privacy-hero">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                Effective Date: January 2025
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-primary">
                JantaraX Global IT Pvt. Ltd.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6 sm:space-y-8">
              
              {/* Introduction */}
              <div className="privacy-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  At <span className="font-semibold text-primary">JantaraX Global IT Pvt. Ltd.</span>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website, applications, and services.
                </p>
              </div>

              {/* Section 1: Information We Collect */}
              <div className="privacy-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    1. Information We Collect
                  </h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-start sm:items-center gap-2">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                      Personal Information
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      Name, email, phone number, company details (when you fill forms or contact us).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-start sm:items-center gap-2">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                      Technical Information
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      IP address, browser type, device information, and usage patterns.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-start sm:items-center gap-2">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                      Service Data
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                      Any files, data, or project-related information you share with us for providing solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="privacy-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    2. How We Use Your Information
                  </h2>
                </div>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">To respond to your inquiries and provide requested services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">To improve our website, services, and customer experience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">To send updates, offers, or service-related notifications (only if you opt in).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">For security, fraud prevention, and legal compliance.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Data Security */}
              <div className="privacy-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    3. Data Security
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  We use secure servers, encryption, and limited access protocols to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 4: Sharing of Information */}
              <div className="privacy-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    4. Sharing of Information
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  We do not sell or trade your personal data. We may share information with trusted partners and service providers who assist in delivering our solutions, under strict confidentiality.
                </p>
              </div>

              {/* Section 5: Your Rights */}
              <div className="privacy-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    5. Your Rights
                  </h2>
                </div>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">You can request access, correction, or deletion of your personal data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">You can unsubscribe from marketing emails anytime.</span>
                  </li>
                </ul>
              </div>

              {/* Section 6: Contact Us */}
              <div className="privacy-section bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 sm:p-8 mb-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    6. Contact Us
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                  If you have questions about this Privacy Policy, contact us at:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a 
                      href="mailto:hr@jantarax.com" 
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      hr@jantarax.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a 
                      href="tel:+918791008551" 
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      +91 87910 08551
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <Link 
                      href="/" 
                      className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      www.jantarax.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Quote */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 sm:p-8 md:p-12 border border-primary/20">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-full bg-primary/20">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                Thank You for Trusting Us
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                &ldquo;At JantaraX Global IT Pvt. Ltd., we believe that trust is the foundation of every successful partnership. 
                Your privacy and data security are not just our responsibility&mdash;they&apos;re our commitment to you. 
                We&apos;re grateful for the opportunity to serve you and look forward to building a long-lasting relationship 
                based on transparency, integrity, and excellence.&rdquo;
              </p>
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-primary/20">
                <p className="text-xs sm:text-sm text-primary font-medium">
                  — The JantaraX Global IT Team
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;
