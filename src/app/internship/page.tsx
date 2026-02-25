"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Smartphone,
  BarChart2,
  Megaphone,
  Palette,
  GraduationCap,
  BadgeCheck,
  Users,
  Trophy,
  Star,
  BookOpen,
  IndianRupee,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronRight,
  Layers,
  Cpu,
  Globe,
  BarChart,
  Paintbrush,
} from "lucide-react";

// ── Tracks ────────────────────────────────────────────────────────────────────
const tracks = [
  {
    id: "web-dev",
    icon: Code2,
    category: "Full-Stack",
    title: "Web Development",
    tagline: "Product Engineering",
    bullets: [
      "Build responsive apps with React & Next.js",
      "Work across frontend, backend & REST APIs",
      "Deploy production apps on Vercel / AWS",
    ],
  },
  {
    id: "app-dev",
    icon: Smartphone,
    category: "Mobile",
    title: "App Development",
    tagline: "Cross-Platform Engineering",
    bullets: [
      "Build cross-platform apps with React Native",
      "Integrate device features — GPS, camera, push",
      "Publish apps to Play Store & App Store",
    ],
  },
  {
    id: "data-analyst",
    icon: BarChart2,
    category: "Data & Analytics",
    title: "Data Analyst",
    tagline: "Data Engineering & BI",
    bullets: [
      "Work with Python, SQL & BI dashboards",
      "Build metrics & reports for real clients",
      "Design ETL pipelines and data platforms",
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    category: "Marketing",
    title: "Digital Marketing",
    tagline: "Growth & Campaigns",
    bullets: [
      "Plan and execute SEO & paid ad campaigns",
      "Manage social media and content strategy",
      "Measure and optimise campaign ROI",
    ],
  },
  {
    id: "ui-ux",
    icon: Palette,
    category: "Design",
    title: "UI / UX Designer",
    tagline: "Product Design",
    bullets: [
      "Design hi-fi prototypes in Figma",
      "Conduct user research & usability testing",
      "Build and maintain design systems",
    ],
  },
];

// ── Open positions ────────────────────────────────────────────────────────────
const positions = [
  { role: "Web Development",      category: "Full-Stack",        duration: "8–12 weeks", mode: "Remote / Hybrid" },
  { role: "App Development",      category: "Mobile",            duration: "8–12 weeks", mode: "Remote" },
  { role: "Data Analyst",         category: "Data & Analytics",  duration: "6–10 weeks", mode: "Remote / Hybrid" },
  { role: "Digital Marketing",    category: "Marketing",         duration: "6–10 weeks", mode: "Remote / On-site" },
  { role: "UI / UX Designer",     category: "Design",            duration: "6–10 weeks", mode: "Remote" },
];

// ── Benefits ──────────────────────────────────────────────────────────────────
const benefits = [
  { icon: Globe,     title: "Real Client Projects",      desc: "Work on live projects for actual clients — not dummy tasks." },
  { icon: Users,     title: "Mentorship from Experts",   desc: "Guided by engineers, marketers and designers with industry experience." },
  { icon: BadgeCheck,title: "Certificate & Experience Letter", desc: "Receive a recognised certificate and detailed experience letter on completion." },
  { icon: Trophy,    title: "Portfolio Ready",           desc: "Walk away with 3+ projects to show employers with confidence." },
  { icon: Star,      title: "Skill-First Learning",      desc: "Structured curriculum designed to make you job-ready fast." },
  { icon: IndianRupee, title: "Affordable Registration", desc: "One-time ₹999 fee — invest in real experience that's worth far more." },
];

// ── Growth path ───────────────────────────────────────────────────────────────
const growthPath = [
  { stage: "Intern",           period: "0–3 months",  desc: "Foundations, mentorship, real project exposure" },
  { stage: "Junior",           period: "3–6 months",  desc: "Own tasks, contribute to production features" },
  { stage: "Mid-level",        period: "6–12 months", desc: "Own modules, ship confidently with less oversight" },
  { stage: "Senior",           period: "1–2 years",   desc: "Lead projects, mentor juniors, drive decisions" },
];

// ── Hiring steps ──────────────────────────────────────────────────────────────
const hiringSteps = [
  { num: 1, title: "Apply",         desc: "Fill the form, select your role and share your profile links." },
  { num: 2, title: "Screening",     desc: "We review your application and respond within 24–48 hours." },
  { num: 3, title: "Registration",  desc: "Pay the ₹999 fee via UPI to confirm and lock your seat." },
  { num: 4, title: "Onboarding",    desc: "Receive your welcome kit, schedule and start building on Day 1." },
];

// ── Tech stacks ───────────────────────────────────────────────────────────────
const techCategories = [
  { label: "Web & App",    icon: Code2,    items: ["React", "Next.js", "TypeScript", "React Native", "Flutter"] },
  { label: "Backend",      icon: Cpu,      items: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Firebase"] },
  { label: "Data",         icon: BarChart, items: ["Python", "Pandas", "SQL", "Power BI", "Tableau"] },
  { label: "Design",       icon: Paintbrush, items: ["Figma", "FigJam", "Adobe XD", "Miro", "Zeplin"] },
  { label: "Marketing",    icon: Megaphone, items: ["Google Ads", "Meta Ads", "SEO", "Google Analytics", "Canva"] },
];

// ── Category colour map ───────────────────────────────────────────────────────
const catColor: Record<string, string> = {
  "Full-Stack":       "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  "Mobile":           "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  "Data & Analytics": "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  "Marketing":        "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  "Design":           "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400",
};

// ─────────────────────────────────────────────────────────────────────────────
export default function InternshipPage() {
  const container = useRef(null);
  const [remoteOnly, setRemoteOnly] = useState(false);

  useGSAP(
    () => {
      gsap.from([".hero-badge", ".hero-title", ".hero-sub", ".hero-actions", ".hero-stats"], {
        autoAlpha: 0, y: 40, duration: 0.7, stagger: 0.13, ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".anim-card").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          autoAlpha: 0, y: 36, duration: 0.55, ease: "power3.out",
        });
      });
    },
    { scope: container }
  );

  const filtered = remoteOnly
    ? positions.filter((p) => p.mode.toLowerCase().includes("remote"))
    : positions;

  return (
    <PageLayout>
      <div ref={container} className="relative z-10 min-h-screen">

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6" style={{ visibility: "visible" }}>
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Certificate Internship Program · ₹999</span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight" style={{ visibility: "visible" }}>
              Build Your Career
              <br />
              <span className="text-primary">at JantaraX</span>
            </h1>

            <p className="hero-sub mt-5 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed" style={{ visibility: "visible" }}>
              Join a growing tech company building real products. Work on live projects, get mentored
              by industry professionals, and earn a certificate that matters.
            </p>

            <div className="hero-actions mt-6 flex flex-col sm:flex-row gap-3 justify-center" style={{ visibility: "visible" }}>
              <Button size="lg" className="group px-8" asChild>
                <a href="#positions" className="flex items-center gap-2">
                  Explore Internships
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="#tracks">View Tracks</a>
              </Button>
            </div>

            {/* Stats strip */}
            <div className="hero-stats mt-12 flex flex-wrap justify-center gap-8" style={{ visibility: "visible" }}>
              {[
                { v: "5",        l: "Internship Tracks" },
                { v: "6–12 wks", l: "Program Duration" },
                { v: "Certificate", l: "On Completion" },
                { v: "₹999",     l: "Registration Fee" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl font-extrabold text-primary">{s.v}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why JantaraX ────────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Why Work With JantaraX
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                A place where you ship real work, grow with mentors, and build your career from day one.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="anim-card flex gap-4 p-5 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-background/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  style={{ visibility: "visible" }}
                >
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white text-sm mb-1">{b.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Career Tracks ────────────────────────────────────────────────── */}
        <section id="tracks" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Choose a Track That Fits Your Ambition
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Whether you love code, data, design or marketing — find your track and grow fast.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tracks.map((t) => (
                <Card
                  key={t.id}
                  className="anim-card bg-background/60 backdrop-blur-sm border-gray-200/60 dark:border-gray-700/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  style={{ visibility: "visible" }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 h-11 w-11 flex items-center justify-center rounded-xl bg-primary/10">
                        <t.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColor[t.category]}`}>
                          {t.category}
                        </span>
                        <h3 className="font-bold text-gray-800 dark:text-white text-base mt-1">{t.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t.tagline}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {t.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Button size="sm" variant="outline" className="mt-4 w-full group text-xs" asChild>
                      <Link
                        href={`/internship/apply?role=${encodeURIComponent(t.title)}`}
                        className="flex items-center justify-center gap-1.5"
                      >
                        Apply Now
                        <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Growth Path ──────────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                See Your Growth Path Clearly
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                From intern to senior engineer — we invest in your long-term growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-0 items-stretch">
              {growthPath.map((g, i) => (
                <div key={g.stage} className="flex flex-col sm:flex-row items-stretch flex-1">
                  <Card
                    className="anim-card flex-1 bg-background/60 backdrop-blur-sm border-gray-200/60 dark:border-gray-700/60"
                    style={{ visibility: "visible" }}
                  >
                    <CardContent className="p-5 flex flex-col gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-extrabold">
                        {i + 1}
                      </div>
                      <p className="font-extrabold text-gray-800 dark:text-white text-base">{g.stage}</p>
                      <p className="text-xs font-semibold text-primary">{g.period}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{g.desc}</p>
                    </CardContent>
                  </Card>
                  {i < growthPath.length - 1 && (
                    <div className="flex items-center justify-center py-2 sm:py-0 sm:px-1">
                      <ArrowRight className="h-4 w-4 text-primary/40 rotate-90 sm:rotate-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open Positions ───────────────────────────────────────────────── */}
        <section id="positions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Open Positions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Explore current internship openings across all tracks.
              </p>
            </div>

            {/* Filter bar */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-700 dark:text-gray-200">{filtered.length}</span> internship openings
              </p>
              <button
                onClick={() => setRemoteOnly((v) => !v)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-200 ${
                  remoteOnly
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-primary/50"
                }`}
              >
                <MapPin className="h-3.5 w-3.5" />
                Remote only
              </button>
            </div>

            <div className="space-y-3">
              {filtered.map((p) => (
                <div
                  key={p.role}
                  className="anim-card flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-background/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  style={{ visibility: "visible" }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">{p.role}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catColor[p.category]}`}>
                          {p.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3" /> {p.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <MapPin className="h-3 w-3" /> {p.mode}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 sm:flex-shrink-0">
                    <Button size="sm" variant="outline" className="text-xs" asChild>
                      <a href="#tracks">Job Description</a>
                    </Button>
                    <Button size="sm" className="text-xs group" asChild>
                      <Link
                        href={`/internship/apply?role=${encodeURIComponent(p.role)}`}
                        className="flex items-center gap-1.5"
                      >
                        Apply Now
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hiring Process ───────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                How We Hire at JantaraX
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Transparent, simple, and designed to understand how you think.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {hiringSteps.map((s) => (
                <div
                  key={s.num}
                  className="anim-card flex gap-4 p-5 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-background/60 backdrop-blur-sm"
                  style={{ visibility: "visible" }}
                >
                  <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-extrabold">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white text-sm mb-1">{s.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ───────────────────────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Work With a Modern Stack
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Get hands-on with tools that top companies use in production.
              </p>
            </div>
            <div className="space-y-5">
              {techCategories.map((cat) => (
                <div key={cat.label} className="anim-card flex flex-col sm:flex-row gap-3 sm:items-center" style={{ visibility: "visible" }}>
                  <div className="flex items-center gap-2 sm:w-36 flex-shrink-0">
                    <cat.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      {cat.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-background/60 text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="container mx-auto max-w-2xl">
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-primary/10">
              <CardContent className="p-8 sm:p-10">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white mb-3">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Build impactful projects with a real tech team. Enroll with a one-time{" "}
                  <span className="font-semibold text-primary">₹999 registration fee</span> and get your
                  certificate on completion.
                </p>
                <Button size="lg" className="group px-10" asChild>
                  <Link href="/internship/apply" className="flex items-center gap-2">
                    Apply for Internship
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
