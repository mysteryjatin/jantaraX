"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Code2, Globe, Cpu, ChevronDown } from "lucide-react";

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.1,
}));

const TECH_WORDS = ["Innovate", "Build", "Scale", "Transform", "Deliver"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const word = TECH_WORDS[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < word.length) {
      timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 120);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 70);
    } else if (!isDeleting && displayText.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TECH_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // Circuit canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const lines: { x: number; y: number; dx: number; dy: number; length: number; progress: number; speed: number }[] = [];
    
    for (let i = 0; i < 30; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() > 0.5 ? 1 : -1),
        dy: 0,
        length: Math.random() * 150 + 50,
        progress: 0,
        speed: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach((line) => {
        line.progress += line.speed;
        if (line.progress > line.length + 50) {
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.dx = Math.random() > 0.5 ? 1 : -1;
          line.dy = 0;
          line.length = Math.random() * 150 + 50;
          line.progress = 0;
          line.speed = Math.random() * 1.5 + 0.5;
          if (Math.random() > 0.5) {
            [line.dx, line.dy] = [line.dy, line.dx === 0 ? (Math.random() > 0.5 ? 1 : -1) : 0];
          }
        }

        const alpha = Math.min(1, (line.length - Math.abs(line.progress - line.length)) / 40) * 0.4;
        ctx.strokeStyle = `rgba(0, 112, 243, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0, 112, 243, 0.6)";
        
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.dx * Math.min(line.progress, line.length), line.y + line.dy * Math.min(line.progress, line.length));
        ctx.stroke();

        // Dot at head
        if (line.progress < line.length) {
          ctx.fillStyle = `rgba(0, 163, 255, ${alpha * 1.5})`;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(
            line.x + line.dx * line.progress,
            line.y + line.dy * line.progress,
            2, 0, Math.PI * 2
          );
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* Circuit canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

      {/* Grid pattern */}
      <div className="absolute inset-0 circuit-bg opacity-30" />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.id % 5 === 0 ? "#C9A84C" : "#0070F3",
            boxShadow: `0 0 ${p.size * 4}px ${p.id % 5 === 0 ? "#C9A84C" : "#0070F3"}`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Floating tech icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-12 hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl glass border border-primary/20"
      >
        <Code2 className="text-primary" size={22} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-12 hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl glass border border-gold/20"
      >
        <Globe className="text-gold" size={22} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-20 hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl glass border border-primary/20"
      >
        <Cpu className="text-primary-light" size={22} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary-light text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          India&apos;s Emerging IT Powerhouse
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
        >
          We{" "}
          <span className="text-gradient-blue inline-block min-w-[300px] text-left">
            {displayText}
            <span className="animate-pulse text-primary-light">|</span>
          </span>
          <br />
          <span className="text-white">With Technology</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-silver/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          JantaraX Global IT Private Limited delivers cutting-edge software, web & mobile solutions,
          IT consulting, and world-class internship programs that launch careers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#services" className="btn-primary gap-2 group">
            Explore Our Services
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="#internship" className="btn-outline gap-2 group">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/20 border border-gold/30 group-hover:bg-gold/30 transition-colors">
              <Play size={10} fill="currentColor" className="text-gold ml-0.5" />
            </span>
            Join Internship
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "100+", label: "Interns Trained" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient-blue font-display">{stat.value}</div>
              <div className="text-silver/50 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
