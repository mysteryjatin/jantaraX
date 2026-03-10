"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PageLayout from "@/components/shared/PageLayout";
import { AlertTriangle, Info, Link as LinkIcon, Shield, FileText, Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

const DisclaimerPage = () => {
  const container = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGSAP(
    () => {
      if (!isClient) return;

      gsap.from(".disclaimer-hero", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".disclaimer-section", {
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
              <div className="h-8 bg-gray-300 rounded w-64 mb-4" />
              <div className="h-4 bg-gray-300 rounded w-48" />
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
            <div className="disclaimer-hero">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 rounded-full bg-primary/10">
                  <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                Website Disclaimer
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                Effective Date: January 2025
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-primary">
                JantaraX Global IT Pvt. Ltd. &middot; GSTIN: 09AAHCJ2698H1Z2
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-6 sm:space-y-8">
              
              {/* Intro */}
              <div className="disclaimer-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  This website is owned and operated by{" "}
                  <span className="font-semibold text-primary">JantaraX Global IT Pvt. Ltd.</span>, a company registered
                  in India with GST registration number{" "}
                  <span className="font-semibold text-primary">09AAHCJ2698H1Z2</span>. The information provided on this
                  website is for general informational and promotional purposes only.
                </p>
              </div>

              {/* No Professional Advice */}
              <div className="disclaimer-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Info className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    1. No Professional Advice
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Content on this website, including case studies, blog posts, service descriptions, and internship
                  details, does not constitute legal, financial, or professional advice. Decisions based on information
                  from this website are made at your own discretion and risk. Please consult a qualified professional
                  before making business or career decisions.
                </p>
              </div>

              {/* Accuracy of Information */}
              <div className="disclaimer-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    2. Accuracy &amp; Updates
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  While we strive to keep all information accurate and up to date,{" "}
                  <span className="font-semibold">JantaraX Global IT Pvt. Ltd.</span> makes no warranties or
                  representations regarding the completeness, reliability, or accuracy of any content. Features,
                  pricing, internship details, and service offerings may change without prior notice.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="disclaimer-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    3. Third-Party Links &amp; Tools
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Our website may contain links to third-party websites, tools, or services (such as payment gateways,
                  analytics platforms, or social networks). These are provided for convenience only. We do not endorse,
                  control, or take responsibility for the content, policies, or practices of any third-party sites.
                  Accessing them is at your own risk.
                </p>
              </div>

              {/* Liability */}
              <div className="disclaimer-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    4. Limitation of Liability
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  JantaraX Global IT Pvt. Ltd. will not be liable for any direct, indirect, incidental, consequential, or
                  special damages arising from the use of, or inability to use, this website or our services, including
                  but not limited to loss of data, revenue, or business opportunities.
                </p>
              </div>

              {/* Changes */}
              <div className="disclaimer-section bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Info className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                    5. Changes to This Disclaimer
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  We may update this Disclaimer from time to time to reflect changes in our services, policies, or
                  applicable laws. Continued use of our website after updates are published will constitute your
                  acceptance of the revised Disclaimer.
                </p>
              </div>

              {/* Contact */}
              <div className="disclaimer-section bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 sm:p-8 mb-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    6. Contact Details
                  </h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
                  For questions related to this Disclaimer or our company information, you can reach us at:
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
      </div>
    </PageLayout>
  );
};

export default DisclaimerPage;

