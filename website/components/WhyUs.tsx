"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  HeadphonesIcon,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "We move fast without compromising quality. Agile methodology ensures your project ships on time, every time.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data and IP are safe with us. NDA-backed engagements, secure codebases, and best-in-class security practices.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "We respect deadlines like business assets. Our project management system ensures 95%+ on-time delivery rate.",
    color: "text-primary-light",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "You get a dedicated team that knows your project inside out — not a rotating pool of strangers.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: Award,
    title: "Proven Quality",
    description: "Rigorous QA testing, code reviews, and continuous integration pipelines ensure every release is production-ready.",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "We&apos;re always available. Post-launch support, maintenance, and rapid response to any critical issues.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
  {
    icon: Sparkles,
    title: "Innovative Approach",
    description: "We bring fresh perspectives and cutting-edge technologies to every project, not just recycled templates.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our architecture is built for growth. Start small, scale to millions — our code handles the journey.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Flutter",
  "React Native", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker",
  "Kubernetes", "GraphQL", "Figma", "TailwindCSS",
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-section-alt" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/20 to-transparent" />
      <div className="absolute inset-0 circuit-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-silver/20 bg-silver/5 text-silver text-sm font-medium mb-6">
            <Award size={14} />
            Why Choose Us
          </div>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            The{" "}
            <span className="text-gradient">JantaraX</span>{" "}
            Difference
          </h2>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto">
            We don&apos;t just write code — we build partnerships, deliver excellence, 
            and grow together with our clients.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group p-6 rounded-2xl glass-light border ${r.border} hover:border-opacity-50 transition-all duration-300 cursor-pointer`}
            >
              <div className={`w-11 h-11 rounded-xl ${r.bg} border ${r.border} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <r.icon className={r.color} size={20} />
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{r.title}</h3>
              <p className="text-silver/50 text-xs leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-silver/40 text-sm font-medium uppercase tracking-widest mb-8">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-xl glass-light border border-white/8 text-silver/60 text-sm font-medium hover:border-primary/30 hover:text-white transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24"
        >
          <h3 className="section-title text-2xl sm:text-3xl font-bold text-center text-white mb-12">
            Our <span className="text-gradient-blue">Process</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            
            {[
              { step: "01", title: "Discovery", desc: "Requirements gathering & analysis" },
              { step: "02", title: "Design", desc: "UI/UX wireframes & prototypes" },
              { step: "03", title: "Develop", desc: "Agile sprints with daily updates" },
              { step: "04", title: "Test", desc: "QA, security & performance testing" },
              { step: "05", title: "Deploy", desc: "Launch, monitor & maintain" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl glass border border-primary/20 flex items-center justify-center mb-4 relative z-10">
                  <span className="font-display font-bold text-primary-light text-lg">{p.step}</span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4>
                <p className="text-silver/50 text-xs">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
