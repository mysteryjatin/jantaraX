"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  GraduationCap,
  Database,
  Shield,
  Cloud,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We architect and build robust, scalable software solutions tailored to your unique business requirements — from ERP systems to SaaS platforms.",
    features: ["Enterprise Applications", "SaaS Platforms", "API Development", "Legacy Modernization"],
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary-light",
    glowColor: "rgba(0, 112, 243, 0.15)",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We craft stunning, high-performance websites and web apps using modern frameworks — React, Next.js, and more — optimized for speed and SEO.",
    features: ["React / Next.js", "E-Commerce", "CMS Integration", "Performance Optimization"],
    color: "gold",
    gradient: "from-gold/20 to-gold/5",
    borderColor: "border-gold/20",
    iconBg: "bg-gold/10",
    iconColor: "text-gold-light",
    glowColor: "rgba(201, 168, 76, 0.15)",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "From iOS to Android and cross-platform apps, we create intuitive mobile experiences that engage users and drive business growth.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
    color: "primary",
    gradient: "from-primary-light/20 to-primary-light/5",
    borderColor: "border-primary-light/20",
    iconBg: "bg-primary-light/10",
    iconColor: "text-primary-light",
    glowColor: "rgba(0, 163, 255, 0.15)",
  },
  {
    icon: Shield,
    title: "IT Consulting & Services",
    description:
      "Strategic IT consultation to help businesses navigate digital transformation, optimize infrastructure, and achieve technology goals.",
    features: ["Digital Transformation", "IT Strategy", "System Architecture", "Tech Audits"],
    color: "silver",
    gradient: "from-silver/10 to-silver/5",
    borderColor: "border-silver/20",
    iconBg: "bg-silver/10",
    iconColor: "text-silver-light",
    glowColor: "rgba(168, 178, 193, 0.1)",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Leverage the power of cloud with AWS, Azure, and GCP deployments. Scalable, secure, and cost-effective cloud infrastructure solutions.",
    features: ["AWS / Azure / GCP", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"],
    color: "primary",
    gradient: "from-primary/15 to-transparent",
    borderColor: "border-primary/20",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    glowColor: "rgba(0, 112, 243, 0.12)",
  },
  {
    icon: Database,
    title: "Database & Backend",
    description:
      "Powerful backend systems and database architectures designed for reliability, speed, and scale. SQL, NoSQL, and everything in between.",
    features: ["PostgreSQL / MongoDB", "Node.js / Python", "Microservices", "Data Engineering"],
    color: "gold",
    gradient: "from-gold/15 to-transparent",
    borderColor: "border-gold/20",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    glowColor: "rgba(201, 168, 76, 0.12)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-section-alt" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-6">
            <Cpu size={14} />
            What We Do
          </div>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end technology solutions built by experts, designed for the future, 
            delivered on time.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`relative group p-7 rounded-2xl glass-light border ${service.borderColor} overflow-hidden cursor-pointer`}
              style={{
                background: `linear-gradient(135deg, ${service.glowColor} 0%, transparent 60%), rgba(15, 22, 40, 0.6)`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${service.glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 shimmer"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${service.glowColor} 50%, transparent 100%)`,
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s linear infinite",
                  }}
                />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.iconBg} border ${service.borderColor} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className={service.iconColor} size={24} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-silver/60 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f, fi) => (
                    <span
                      key={fi}
                      className={`text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-silver/70`}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className={`flex items-center gap-1 text-sm font-medium ${service.iconColor} opacity-70 group-hover:opacity-100 transition-all duration-300`}>
                  Learn more
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-silver/50 mb-6">Ready to bring your idea to life?</p>
          <Link href="#contact" className="btn-primary inline-flex gap-2">
            Start a Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
