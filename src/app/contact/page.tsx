"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import PageLayout from "@/components/shared/PageLayout";
import ContactForm from "@/components/shared/ContactForm";

const ContactPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <PageLayout>
      <div ref={container} className="relative z-10">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <div className="contact-hero">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-6xl">
                Get in Touch
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
                Our team is here to answer your questions and provide expert guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </PageLayout>
  );
};

export default ContactPage;
