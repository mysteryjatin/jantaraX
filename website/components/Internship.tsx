"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Code2,
  BookOpen,
  Lightbulb,
  Calendar,
  IndianRupee,
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    icon: Code2,
    title: "Full Stack Development",
    duration: "3 / 6 Months",
    stipend: "Paid",
    level: "Beginner - Intermediate",
    description: "Master React, Node.js, databases, and deployment. Build real production-grade projects from day one.",
    skills: ["React / Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    color: "primary",
    badge: "Most Popular",
  },
  {
    icon: Lightbulb,
    title: "UI/UX Design",
    duration: "2 / 4 Months",
    stipend: "Paid",
    level: "Beginner",
    description: "Learn Figma, design systems, user research, and prototyping while working on real client projects.",
    skills: ["Figma", "Design Systems", "Wireframing", "Prototyping", "User Research"],
    color: "gold",
    badge: "Creative Track",
  },
  {
    icon: Briefcase,
    title: "Business Development & IT Sales",
    duration: "2 / 3 Months",
    stipend: "Paid + Commission",
    level: "Beginner",
    description: "Learn B2B sales, lead generation, proposal writing, and client management in the IT sector.",
    skills: ["Lead Generation", "CRM Tools", "Proposal Writing", "Client Management", "Market Research"],
    color: "silver",
    badge: "Non-Tech Track",
  },
];

const benefits = [
  { icon: Trophy, text: "Industry-recognized certificate" },
  { icon: Users, text: "Work on real client projects" },
  { icon: Star, text: "Mentorship from senior engineers" },
  { icon: IndianRupee, text: "Monthly paid stipend" },
  { icon: Briefcase, text: "PPO (Pre-Placement Offer) opportunity" },
  { icon: BookOpen, text: "Structured learning curriculum" },
  { icon: Calendar, text: "Flexible timing options" },
  { icon: CheckCircle2, text: "LinkedIn recommendation letter" },
];

export default function Internship() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="internship" className="relative py-32 overflow-hidden">
      {/* Animated gradient bg */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201, 168, 76, 0.06) 0%, transparent 60%)",
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Floating decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gold/5 hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-primary/5 hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-6">
            <GraduationCap size={14} />
            For Freshers & Final Year Students
          </div>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Launch Your{" "}
            <span className="text-gradient-gold">Career</span>{" "}
            With Us
          </h2>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Our paid internship programs are designed to bridge the gap between 
            academic learning and industry excellence. Real projects. Real mentors. Real growth.
          </p>
        </motion.div>

        {/* Programs */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative group p-7 rounded-2xl overflow-hidden cursor-pointer ${
                prog.color === "gold"
                  ? "bg-gradient-to-b from-gold/10 to-dark-card border border-gold/20"
                  : prog.color === "primary"
                  ? "bg-gradient-to-b from-primary/10 to-dark-card border border-primary/20"
                  : "bg-gradient-to-b from-silver/5 to-dark-card border border-silver/20"
              }`}
            >
              {/* Badge */}
              {prog.badge && (
                <div className={`absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-semibold ${
                  prog.color === "gold"
                    ? "bg-gold/20 text-gold border border-gold/30"
                    : prog.color === "primary"
                    ? "bg-primary/20 text-primary-light border border-primary/30"
                    : "bg-silver/10 text-silver border border-silver/20"
                }`}>
                  {prog.badge}
                </div>
              )}

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: prog.color === "gold"
                    ? "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)"
                    : prog.color === "primary"
                    ? "radial-gradient(ellipse at 50% 0%, rgba(0,112,243,0.1) 0%, transparent 70%)"
                    : "radial-gradient(ellipse at 50% 0%, rgba(168,178,193,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 ${
                prog.color === "gold" ? "bg-gold/20 border border-gold/30" :
                prog.color === "primary" ? "bg-primary/20 border border-primary/30" :
                "bg-silver/10 border border-silver/20"
              }`}>
                <prog.icon className={
                  prog.color === "gold" ? "text-gold" :
                  prog.color === "primary" ? "text-primary-light" :
                  "text-silver"
                } size={22} />
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3">{prog.title}</h3>
              <p className="text-silver/60 text-sm leading-relaxed mb-5">{prog.description}</p>

              {/* Meta */}
              <div className="flex gap-4 mb-5">
                <div className="text-xs text-silver/50">
                  <span className="block text-silver/30 mb-0.5">Duration</span>
                  {prog.duration}
                </div>
                <div className="text-xs text-silver/50">
                  <span className="block text-silver/30 mb-0.5">Stipend</span>
                  <span className={prog.color === "gold" ? "text-gold" : "text-primary-light"}>{prog.stipend}</span>
                </div>
                <div className="text-xs text-silver/50">
                  <span className="block text-silver/30 mb-0.5">Level</span>
                  {prog.level}
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {prog.skills.map((s, si) => (
                  <span key={si} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-silver/60">
                    {s}
                  </span>
                ))}
              </div>

              <Link
                href="#contact"
                className={`flex items-center gap-2 text-sm font-semibold ${
                  prog.color === "gold" ? "text-gold" :
                  prog.color === "primary" ? "text-primary-light" :
                  "text-silver"
                } group-hover:opacity-100 opacity-70 transition-opacity`}
              >
                Apply Now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-12 glass border border-dark-border"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-gold/5" />
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Why Intern at <span className="text-gradient-gold">JantaraX?</span>
              </h3>
              <p className="text-silver/50 text-sm">Everything you need to jumpstart your career</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl glass-light border border-white/5 hover:border-primary/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <b.icon className="text-primary-light" size={18} />
                  </div>
                  <span className="text-xs text-silver/60 leading-tight">{b.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="#contact" className="btn-primary inline-flex gap-2">
                <GraduationCap size={18} />
                Apply for Internship
              </Link>
              <p className="text-silver/40 text-xs mt-4">Open for freshers & final year students • No experience required</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
