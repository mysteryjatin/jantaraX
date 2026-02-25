"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Smartphone,
  BarChart2,
  Megaphone,
  Palette,
  IndianRupee,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const internshipTracks = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build real-world websites and web applications using modern frameworks like React and Next.js.",
    skills: ["HTML / CSS / JS", "React & Next.js", "REST APIs"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Develop cross-platform mobile apps for Android and iOS using React Native and modern tooling.",
    skills: ["React Native", "Flutter basics", "App Deployment"],
  },
  {
    icon: BarChart2,
    title: "Data Analyst",
    description:
      "Work with real datasets, build dashboards, and extract insights that drive business decisions.",
    skills: ["Python / Excel", "SQL & Databases", "Data Visualization"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Plan and execute campaigns across social media, SEO, and paid ads to grow brand presence.",
    skills: ["SEO & SEM", "Social Media", "Content Strategy"],
  },
  {
    icon: Palette,
    title: "UI / UX Designer",
    description:
      "Design intuitive user interfaces and experiences using Figma and modern design principles.",
    skills: ["Figma", "Wireframing", "User Research"],
  },
];

const highlights = [
  "Certificate of completion",
  "Real project experience",
  "Mentorship from industry experts",
  "Portfolio-ready projects",
];

const Internship = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Only animate the header — safe from pin interference
      gsap.from([".intern-badge", ".intern-title", ".intern-subtitle"], {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Hover lift effect on cards (no initial-state hiding)
      const cards = gsap.utils.toArray(".intern-card");
      cards.forEach((card) => {
        const el = card as HTMLElement;
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="internship"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="intern-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Certificate Internship Program</span>
            <IndianRupee className="h-4 w-4 text-primary" />
          </div>

          <h2 className="intern-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Launch Your Career With Us
          </h2>
          <p className="intern-subtitle mt-4 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hands-on internships for final-year students &amp; recent graduates. Gain real industry
            experience, build your portfolio, and earn a{" "}
            <span className="font-semibold text-primary">recognised certificate</span> to kickstart
            your professional journey.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-6">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {internshipTracks.map((track, index) => (
            <Card
              key={track.title}
              className="intern-card group relative overflow-hidden border border-gray-200/60 dark:border-gray-700/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <CardContent className="relative z-10 p-5 sm:p-6 md:p-8">
                {/* Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <track.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Certificate
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {track.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {track.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {track.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:border-primary/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Eligibility Card — spans full width */}
          <Card className="intern-card sm:col-span-2 lg:col-span-3 border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-1">
                    Who Can Apply?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Open to{" "}
                    <span className="font-semibold text-primary">final-year students</span> (last
                    semester / year of any graduate or postgraduate programme) and{" "}
                    <span className="font-semibold text-primary">
                      recently passed-out graduates
                    </span>{" "}
                    (within 1 year of completion) from any stream with a passion for technology
                    and design.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
            Interested? Reach out to us and take the first step towards your career.
          </p>
          <Button size="lg" className="group px-8 py-4 text-sm sm:text-base" asChild>
            <Link href="/internship/apply" className="flex items-center gap-2">
              Apply for Internship
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Internship;
