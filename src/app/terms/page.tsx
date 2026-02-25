"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import { Mail, Phone, Globe, FileText, Shield, AlertTriangle, DollarSign, RefreshCw, Scale, Link as LinkIcon } from "lucide-react";

const TermsPage = () => {
  const container = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(
    () => {
      if (!isClient) return;

      // Hero section animation
      gsap.from(".terms-hero", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      // Content sections animation
      gsap.from(".terms-section", {
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
            <div className="terms-hero">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-full bg-primary/10">
                  <Scale className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                Terms & Conditions
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

        {/* Terms & Conditions Content */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6 sm:space-y-8">
              
              {/* Introduction */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  By accessing or using our website and services, you agree to the following Terms & Conditions:
                </p>
              </div>

              {/* Section 1: Use of Services */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    1. Use of Services
                  </h2>
                </div>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">You agree to use our website and services only for lawful purposes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">You must not misuse our services by spreading viruses, attempting unauthorized access, or disrupting systems.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2: Intellectual Property */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    2. Intellectual Property
                  </h2>
                </div>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">All content, logos, designs, and software provided by JantaraX Global IT are owned by us unless stated otherwise.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">You may not copy, reproduce, or distribute our materials without written permission.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Client Responsibilities */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    3. Client Responsibilities
                  </h2>
                </div>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">You are responsible for providing accurate information when engaging our services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">You agree not to share sensitive data unless required for the project.</span>
                  </li>
                </ul>
              </div>

              {/* Section 4: Payments & Refunds */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    4. Payments & Refunds
                  </h2>
                </div>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Payments for services must be made as per agreed terms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Refund policies, if applicable, will be clearly outlined in project agreements.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5: Limitation of Liability */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    5. Limitation of Liability
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  JantaraX Global IT is not liable for indirect damages, data loss, or interruptions caused by third-party services, hosting issues, or misuse of our solutions.
                </p>
              </div>

              {/* Section 6: Third-Party Links */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <LinkIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    6. Third-Party Links
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.
                </p>
              </div>

              {/* Section 7: Changes to Terms */}
              <div className="terms-section bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 mb-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    7. Changes to Terms
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  We may update these Terms & Conditions periodically. Continued use of our services means you accept the revised terms.
                </p>
              </div>

              {/* Section 8: Contact Us */}
              <div className="terms-section bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 sm:p-8 mb-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    8. Contact Us
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                  For questions regarding these Terms, contact us at:
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
                  <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                Thank You for Choosing Us
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                &ldquo;We appreciate your trust in JantaraX Global IT Pvt. Ltd. These terms and conditions are designed to 
                create a clear, fair, and transparent relationship between us. We&apos;re committed to delivering 
                exceptional IT solutions while maintaining the highest standards of professionalism and integrity. 
                Thank you for being part of our journey towards technological excellence.&rdquo;
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

export default TermsPage;
