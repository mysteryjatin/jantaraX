"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@jantarax.com",
    link: "mailto:hello@jantarax.com",
    color: "text-primary-light",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "India",
    link: "#",
    color: "text-silver",
    bg: "bg-silver/10",
    border: "border-silver/20",
  },
];

const services = [
  "Software Development",
  "Web Development",
  "Mobile App",
  "IT Consulting",
  "Cloud Solutions",
  "Internship Program",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    type: "client",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,112,243,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary-light text-sm font-medium mb-6">
            <Mail size={14} />
            Get In Touch
          </div>
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s <span className="text-gradient">Build Together</span>
          </h2>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to join our internship? 
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 p-5 rounded-2xl glass-light border ${info.border} group transition-all duration-300 hover:border-opacity-70`}
              >
                <div className={`w-12 h-12 rounded-2xl ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                  <info.icon className={info.color} size={20} />
                </div>
                <div>
                  <p className="text-silver/40 text-xs mb-1">{info.label}</p>
                  <p className={`font-semibold ${info.color}`}>{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl glass-light border border-dark-border"
            >
              <p className="text-silver/50 text-sm mb-4 font-medium">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { icon: Github, href: "#", color: "hover:text-white" },
                ].map((s, si) => (
                  <a
                    key={si}
                    href={s.href}
                    className={`w-10 h-10 rounded-xl glass border border-dark-border flex items-center justify-center text-silver/40 ${s.color} transition-all duration-200 hover:border-white/20 hover:scale-110`}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Internship CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-dark-card border border-gold/20"
            >
              <p className="text-gold font-semibold text-sm mb-2">Internship Applications</p>
              <p className="text-silver/50 text-xs leading-relaxed">
                Are you a student looking for a paid internship? Select &quot;Internship Program&quot; in the 
                form and tell us about yourself!
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl glass border border-dark-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-400/20 border-2 border-green-400/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-400" size={36} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-silver/60 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-primary-light hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Type toggle */}
                  <div className="flex gap-2 mb-6">
                    {[
                      { value: "client", label: "I need IT services" },
                      { value: "intern", label: "I want to intern" },
                    ].map((t) => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setForm({ ...form, type: t.value })}
                        className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                          form.type === t.value
                            ? "bg-primary text-white shadow-glow-blue"
                            : "bg-white/5 text-silver/60 border border-dark-border hover:border-primary/30"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-silver/50 mb-2 font-medium">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-silver/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-silver/50 mb-2 font-medium">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-silver/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-silver/50 mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-silver/30 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-silver/50 mb-2 font-medium">
                        {form.type === "intern" ? "Program Interest" : "Service Needed"}
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-dark">Select...</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-dark">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-silver/50 mb-2 font-medium">
                      {form.type === "intern" ? "Tell us about yourself *" : "Project Details *"}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={
                        form.type === "intern"
                          ? "Share your background, skills, year of study, and why you want to intern with us..."
                          : "Describe your project, goals, timeline, and any specific requirements..."
                      }
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-silver/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {form.type === "intern" ? "Submit Application" : "Send Message"}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
