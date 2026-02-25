"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Zap } from "lucide-react";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const values = [
  {
    icon: Target,
    title: "Mission",
    text: "To deliver innovative technology solutions that empower businesses and create meaningful career opportunities for the next generation of IT professionals.",
    color: "text-primary-light",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To be India's most trusted and impactful IT company — known for quality, integrity, and creating pathways for fresh talent to shine globally.",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
  },
  {
    icon: Zap,
    title: "Innovation",
    text: "We constantly explore emerging technologies to build future-ready solutions — staying ahead of the curve so our clients can lead in their industries.",
    color: "text-silver-light",
    bg: "bg-silver/10",
    border: "border-silver/20",
  },
];

const highlights = [
  "ISO-aligned quality processes",
  "Agile development methodology",
  "Expert in-house design team",
  "24/7 client support",
  "NDA-protected engagements",
  "Transparent project tracking",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary-light text-sm font-medium mb-6">
                <CheckCircle2 size={14} />
                Who We Are
              </div>
              <h2 className="section-title text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Building the Future,{" "}
                <span className="text-gradient">One Line at a Time</span>
              </h2>
              <p className="text-silver/60 leading-relaxed mb-6">
                JantaraX Global IT Private Limited is a forward-thinking technology company 
                founded on the belief that great software changes lives. We combine deep technical 
                expertise with creative thinking to deliver solutions that matter.
              </p>
              <p className="text-silver/60 leading-relaxed mb-8">
                From startups to enterprises, we&apos;ve partnered with organizations across industries 
                to transform their digital presence. What sets us apart is our commitment to both 
                delivering excellence and nurturing the next generation of tech talent through our 
                industry-leading internship programs.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-silver/70"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <CheckCircle2 size={10} className="text-primary" />
                    </span>
                    {h}
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div ref={ref} className="grid grid-cols-3 gap-6">
                {[
                  { end: 50, suffix: "+", label: "Projects" },
                  { end: 30, suffix: "+", label: "Clients" },
                  { end: 100, suffix: "+", label: "Interns" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl glass-light border border-dark-border">
                    <div className="text-3xl font-bold font-display text-gradient-blue">
                      <CountUp end={stat.end} />
                      {stat.suffix}
                    </div>
                    <div className="text-silver/50 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Logo display */}
              <div className="relative rounded-3xl overflow-hidden glass border border-dark-border p-8 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5" />
                <div className="relative z-10 flex items-center justify-center py-8">
                  <div className="relative w-64 h-32">
                    <Image
                      src="/logo-full.png"
                      alt="JantaraX Global IT Private Limited"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-primary/10 animate-spin-slow" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full border border-gold/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />
              </div>

              {/* Mission/Vision/Innovation cards */}
              <div className="space-y-4">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ x: 6 }}
                    className={`flex gap-4 p-5 rounded-2xl glass-light border ${v.border} group cursor-pointer`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${v.bg} border ${v.border} flex items-center justify-center`}>
                      <v.icon className={v.color} size={18} />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-sm ${v.color} mb-1`}>{v.title}</h4>
                      <p className="text-silver/60 text-xs leading-relaxed">{v.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
