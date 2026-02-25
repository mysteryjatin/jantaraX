"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageLayout from "@/components/shared/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";

// ── Config ────────────────────────────────────────────────────────────────────
const TRACKS = [
  "Web Development",
  "App Development",
  "Data Analyst",
  "Digital Marketing",
  "UI / UX Designer",
];

// ── Role-specific tech stacks ─────────────────────────────────────────────────
const TECH_STACKS: Record<string, string[]> = {
  "Web Development": [
    "HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Tailwind CSS", "Git", "REST APIs", "MongoDB", "PostgreSQL", "Firebase",
  ],
  "App Development": [
    "React Native", "Flutter", "JavaScript", "TypeScript", "Expo",
    "Firebase", "Redux", "Android", "iOS", "Git", "REST APIs", "SQLite",
  ],
  "Data Analyst": [
    "Python", "SQL", "Pandas", "NumPy", "Excel",
    "Power BI", "Tableau", "Matplotlib", "Seaborn", "Jupyter", "Google Sheets", "Snowflake",
  ],
  "Digital Marketing": [
    "SEO", "Google Ads", "Meta Ads", "Google Analytics", "Canva",
    "Mailchimp", "Content Writing", "Social Media Marketing", "Semrush", "WordPress", "HubSpot", "Copywriting",
  ],
  "UI / UX Designer": [
    "Figma", "Adobe XD", "Sketch", "FigJam", "Miro",
    "Zeplin", "Wireframing", "Prototyping", "User Research", "Design Systems", "Usability Testing", "InVision",
  ],
};

// ── Role-specific questions ───────────────────────────────────────────────────
const ROLE_QUESTIONS: Record<string, [string, string]> = {
  "Web Development": [
    "Describe a web project you've built. What technologies did you use and what challenges did you solve?",
    "Why do you want to specialise in web development and what do you hope to learn?",
  ],
  "App Development": [
    "Have you built or contributed to a mobile app? Describe it briefly.",
    "What excites you most about mobile app development?",
  ],
  "Data Analyst": [
    "Describe a time you worked with data to find insights. What tools did you use?",
    "How do you approach understanding and cleaning a new dataset?",
  ],
  "Digital Marketing": [
    "Describe a digital marketing campaign you've run or admired. What made it effective?",
    "Which digital channel do you think is most impactful today and why?",
  ],
  "UI / UX Designer": [
    "Walk us through a design project from research to final prototype.",
    "How do you balance user needs with business requirements in your designs?",
  ],
};

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  degree: string;
  track: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  techStack: string[];
  question1: string;
  question2: string;
  coverLetter: string;
  agreeToFee: boolean;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "", email: "", phone: "", location: "", degree: "",
  track: "", resumeUrl: "", githubUrl: "", linkedinUrl: "",
  techStack: [], question1: "", question2: "", coverLetter: "",
  agreeToFee: false,
};

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, error, children, className = "", hint }: {
  label: string; error?: string; children: React.ReactNode;
  className?: string; hint?: string;
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</Label>
      {children}
      {hint && !error && <p className="text-xs text-gray-400 dark:text-gray-500">{hint}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

// ── Tech Stack pill picker ────────────────────────────────────────────────────
function TechStackPicker({ options, selected, onChange, max = 10 }: {
  options: string[]; selected: string[]; onChange: (v: string[]) => void; max?: number;
}) {
  const toggle = (item: string) => {
    if (selected.includes(item)) {
      onChange(selected.filter((s) => s !== item));
    } else if (selected.length < max) {
      onChange([...selected, item]);
    }
  };
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {options.map((item) => {
          const active = selected.includes(item);
          return (
            <button
              key={item}
              type="button"
              onClick={() => toggle(item)}
              className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-150 ${
                active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary/50"
              }`}
            >
              {item}
              {active && <X className="h-3 w-3" />}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-gray-400">{selected.length}/{max} selected</p>
    </div>
  );
}

// ── Inner form ────────────────────────────────────────────────────────────────
function ApplyForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ ...INITIAL });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Pre-fill role from URL ?role=...
  useEffect(() => {
    const role = searchParams.get("role");
    if (role && TRACKS.includes(role)) {
      setForm((prev) => ({ ...prev, track: role }));
    }
  }, [searchParams]);

  const set = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim())      e.name      = "Full name is required";
    if (!form.email.trim())     e.email     = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim())     e.phone     = "Contact number is required";
    if (!form.location.trim())  e.location  = "Location is required";
    if (!form.degree.trim())    e.degree    = "Education details are required";
    if (!form.track)            e.track     = "Please select a role";
    if (!form.resumeUrl.trim()) e.resumeUrl = "Resume URL is required";
    if (!form.question1.trim()) e.question1 = "Please answer this question";
    if (!form.question2.trim()) e.question2 = "Please answer this question";
    if (!form.agreeToFee)       e.agreeToFee = "You must agree to the registration charge to proceed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/internship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong");
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const roleQuestions = form.track ? ROLE_QUESTIONS[form.track] : null;
  const techOptions   = form.track ? TECH_STACKS[form.track]    : [];

  return (
    <PageLayout>
      <div className="relative z-10 min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">

          {/* ── Success screen ───────────────────────────────────────────── */}
          {submitted ? (
            <div className="text-center py-6">
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3">
                Application Submitted! 🎉
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-2">
                Thank you, <span className="font-semibold text-primary">{form.name}</span>! Your
                application has been received.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
                A confirmation email was sent to{" "}
                <span className="font-semibold text-gray-700 dark:text-gray-200">{form.email}</span>.
                Our team will review your application and get back to you within{" "}
                <span className="font-semibold">24–48 hours</span>.
              </p>

              <Card className="max-w-md mx-auto mb-8 border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent text-left">
                <CardContent className="p-5 sm:p-6 space-y-3">
                  <h3 className="font-bold text-gray-800 dark:text-white text-center mb-4">
                    What Happens Next?
                  </h3>
                  {[
                    "Our team reviews your application (1–2 business days)",
                    "You receive an onboarding email with schedule & materials",
                    "Attend orientation to meet your mentor & team",
                    "Work on real projects and earn your certificate!",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="max-w-md mx-auto mb-8">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-sm">
                    Application Reference
                  </h3>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm text-left">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium text-gray-800 dark:text-white">{form.name}</span>
                    <span className="text-gray-500">Role</span>
                    <span className="font-semibold text-primary">{form.track}</span>
                    <span className="text-gray-500">Email</span>
                    <span className="text-gray-700 dark:text-gray-300">{form.email}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

          ) : (

          /* ── Application form ─────────────────────────────────────────── */
          <>
            {/* Page header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Certificate Internship Program</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Internship Application
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Fill in your details below and we&apos;ll get back to you within 24–48 hours.
              </p>
            </div>

            <Card className="shadow-md">
              <CardContent className="p-5 sm:p-8 space-y-7">

                {/* Role */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Select Your Role</h2>
                  <Field label="Role *" error={errors.track}>
                    <Select value={form.track} onValueChange={(v) => {
                      set("track", v);
                      set("techStack", []);
                      set("question1", "");
                      set("question2", "");
                    }}>
                      <SelectTrigger className={errors.track ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        {TRACKS.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <hr className="border-gray-100 dark:border-gray-800" />

                {/* Personal info */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name *" error={errors.name}>
                      <Input placeholder="Ravi Kumar" value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        className={errors.name ? "border-red-500" : ""} />
                    </Field>
                    <Field label="Email Address *" error={errors.email}>
                      <Input type="email" placeholder="ravi@email.com" value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={errors.email ? "border-red-500" : ""} />
                    </Field>
                    <Field label="Contact Number *" error={errors.phone}
                      hint="Include country code e.g. +91 98765 43210">
                      <Input type="tel" placeholder="+91 98765 43210" value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        className={errors.phone ? "border-red-500" : ""} />
                    </Field>
                    <Field label="Location *" error={errors.location}
                      hint="City, Country e.g. Mumbai, India">
                      <Input placeholder="Mumbai, India" value={form.location}
                        onChange={(e) => set("location", e.target.value)}
                        className={errors.location ? "border-red-500" : ""} />
                    </Field>
                    <Field label="Education Degree & Graduation Year *" error={errors.degree}
                      className="sm:col-span-2"
                      hint="e.g. B.Tech Computer Science, 2025">
                      <Input placeholder="B.Tech Computer Science, 2025" value={form.degree}
                        onChange={(e) => set("degree", e.target.value)}
                        className={errors.degree ? "border-red-500" : ""} />
                    </Field>
                  </div>
                </div>

                <hr className="border-gray-100 dark:border-gray-800" />

                {/* Profile links */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Profile Links</h2>
                  <div className="space-y-4">
                    <Field label="Resume URL *" error={errors.resumeUrl}
                      hint="Google Drive, Notion, or any public link to your resume">
                      <Input placeholder="https://drive.google.com/..." value={form.resumeUrl}
                        onChange={(e) => set("resumeUrl", e.target.value)}
                        className={errors.resumeUrl ? "border-red-500" : ""} />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="GitHub Portfolio URL">
                        <Input placeholder="https://github.com/username" value={form.githubUrl}
                          onChange={(e) => set("githubUrl", e.target.value)} />
                      </Field>
                      <Field label="LinkedIn Profile URL">
                        <Input placeholder="https://linkedin.com/in/username" value={form.linkedinUrl}
                          onChange={(e) => set("linkedinUrl", e.target.value)} />
                      </Field>
                    </div>
                  </div>
                </div>

                {/* Tech Stack — only when track selected */}
                {form.track && techOptions.length > 0 && (
                  <>
                    <hr className="border-gray-100 dark:border-gray-800" />
                    <div>
                      <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-1">Tech Stack</h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                        Pick up to 10 technologies you know or are learning.
                      </p>
                      <TechStackPicker
                        options={techOptions}
                        selected={form.techStack}
                        onChange={(v) => set("techStack", v)}
                      />
                    </div>
                  </>
                )}

                {/* Role questions — only when track selected */}
                {form.track && roleQuestions && (
                  <>
                    <hr className="border-gray-100 dark:border-gray-800" />
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold text-gray-800 dark:text-white">Role Questions</h2>
                      <Field label={roleQuestions[0]} error={errors.question1}>
                        <Textarea placeholder="Your answer..." rows={4} value={form.question1}
                          onChange={(e) => set("question1", e.target.value)}
                          className={errors.question1 ? "border-red-500" : ""} />
                      </Field>
                      <Field label={roleQuestions[1]} error={errors.question2}>
                        <Textarea placeholder="Your answer..." rows={4} value={form.question2}
                          onChange={(e) => set("question2", e.target.value)}
                          className={errors.question2 ? "border-red-500" : ""} />
                      </Field>
                    </div>
                  </>
                )}

                {/* Cover letter */}
                <hr className="border-gray-100 dark:border-gray-800" />
                <Field label="Cover Letter / Note (optional)">
                  <Textarea
                    placeholder="Anything else you'd like us to know — your motivation, goals, or past experience..."
                    rows={4}
                    value={form.coverLetter}
                    onChange={(e) => set("coverLetter", e.target.value)}
                  />
                </Field>

                {/* Registration fee */}
                <hr className="border-gray-100 dark:border-gray-800" />
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    Internship Registration Fees *
                  </h2>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    As part of our commitment to ensuring a dedicated and deserving cohort, we require
                    a nominal Registration Charge of{" "}
                    <span className="font-bold text-primary">₹999 + GST</span>{" "}
                    (or <span className="font-bold text-primary">$15 USD</span>).
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => set("agreeToFee", !form.agreeToFee)}
                      className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded border-2 flex items-center justify-center transition-all ${
                        form.agreeToFee
                          ? "bg-primary border-primary"
                          : "border-gray-300 dark:border-gray-600 group-hover:border-primary/50"
                      }`}
                    >
                      {form.agreeToFee && <Check className="h-3 w-3 text-primary-foreground" />}
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Yes, I agree to proceed with the registration charge.
                    </span>
                  </label>
                  {errors.agreeToFee && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.agreeToFee}</p>
                  )}
                </div>

                {submitError && (
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                    {submitError}
                  </div>
                )}

                <Button size="lg" className="w-full group" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

              </CardContent>
            </Card>
          </>
          )}

        </div>
      </div>
    </PageLayout>
  );
}

// ── Export with Suspense (required for useSearchParams) ───────────────────────
export default function InternshipApplyPage() {
  return (
    <Suspense fallback={null}>
      <ApplyForm />
    </Suspense>
  );
}
