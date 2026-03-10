"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, ShieldCheck, FileText, Users, Target, Globe2 } from "lucide-react";

const AboutPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-hero", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-section", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.18,
      });
    },
    { scope: container }
  );

  return (
    <PageLayout>
      <div ref={container} className="relative z-10">
        {/* Hero */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center about-hero">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">About JantaraX Global IT Pvt. Ltd.</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-3">
              Registered, Trusted &amp; Future-Ready IT Partner
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-primary font-semibold mb-3">
              “Engineering intelligent systems for an exponential future.”
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We are a legally registered Indian private limited company building modern digital solutions in web,
              mobile, AI and cloud—backed by strong compliance, clear documentation, and a passion for innovation.
            </p>
          </div>
        </section>

        {/* Company & Registration Details */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
            <Card className="about-section border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/15">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                      Legal Identity
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      Incorporated under the Companies Act, 2013
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-semibold">Company Name:</span>{" "}
                    JantaraX Global IT Private Limited
                  </li>
                  <li>
                    <span className="font-semibold">Incorporation Date:</span>{" "}
                    11 February 2026
                  </li>
                  <li>
                    <span className="font-semibold">Corporate Identity Number (CIN):</span>{" "}
                    <span className="font-mono">U62099UP2026PTC43910</span>
                  </li>
                  <li>
                    <span className="font-semibold">Permanent Account Number (PAN):</span>{" "}
                    <span className="font-mono">AAHCJ2698H</span>
                  </li>
                  <li>
                    <span className="font-semibold">Tax Deduction &amp; Collection Account Number (TAN):</span>{" "}
                    <span className="font-mono">LKNJ08951F</span>
                  </li>
                  <li>
                    <span className="font-semibold">GSTIN:</span>{" "}
                    <span className="font-mono">09AAHCJ2698H1Z2</span>
                  </li>
                </ul>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                  These details are as per the Certificate of Incorporation and Memorandum of Association
                  issued by the Ministry of Corporate Affairs, Government of India.
                </p>
              </CardContent>
            </Card>

            <Card className="about-section border border-gray-200 dark:border-gray-700 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                    Registered Office
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  As per the records of the Registrar of Companies, our registered office address is:
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-semibold">JantaraX Global IT Private Limited</span>
                  <br />
                  Suresh Yadav, Vill Gali, Moh. Dhehriya, Islamnagar,
                  <br />
                  Islamnagar, Bilsi, Budaun &mdash; 243723, Uttar Pradesh, India
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  This address appears on the official Certificate of Incorporation issued by the Ministry of
                  Corporate Affairs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Name & Brand Meaning */}
        <section className="py-4 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <Card className="about-section border border-gray-200 dark:border-gray-700 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                    The Meaning Behind “JantaraX”
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  The name <span className="font-semibold text-primary">JantaraX</span> is inspired by the concept of{" "}
                  <span className="font-semibold">“Jantar / Yantra”</span>, a Sanskrit-origin word that represents
                  machines, mechanisms, and intelligent systems. The letter{" "}
                  <span className="font-semibold">“X”</span> stands for exponential innovation, the unknown future, and
                  limitless digital possibilities.
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Together, <span className="font-semibold text-primary">JantaraX</span> signifies{" "}
                  <span className="font-semibold">
                    intelligent digital systems powered by exponential innovation
                  </span>{" "}
                  —capturing our vision to build next-generation technology solutions for businesses across the globe.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Do & Our Approach */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
            <Card className="about-section border border-gray-200 dark:border-gray-700 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                    What We Build
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  We design and develop web applications, mobile apps, AI-powered solutions, and reliable hosting
                  environments tailored to businesses of all sizes. From idea-to-MVP to large-scale production systems,
                  we focus on tangible outcomes and long-term partnerships.
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Custom web platforms and dashboards</li>
                  <li>Cross-platform mobile applications</li>
                  <li>AI chatbots and automation workflows</li>
                  <li>Cloud hosting, monitoring and maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="about-section border border-gray-200 dark:border-gray-700 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                    Our Philosophy
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Every project is treated as a partnership. We combine engineering discipline with clear communication,
                  transparent documentation, and a commitment to ship maintainable, scalable solutions that reflect your
                  brand and business goals.
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Transparent processes and clear documentation</li>
                  <li>Design and development teams working together</li>
                  <li>Secure, compliant and performance-focused builds</li>
                  <li>Long-term support and improvement mindset</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* People & Culture */}
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="about-section border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6 sm:p-8 space-y-3 text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 rounded-full bg-primary/15">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  People Behind the Code
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  JantaraX is built by engineers, designers and strategists who care about the craft of software and the
                  success of the people who use it. We value curiosity, ownership, and a learner&apos;s mindset in
                  everything we do—from client projects to our own internal tools and internship programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutPage;

