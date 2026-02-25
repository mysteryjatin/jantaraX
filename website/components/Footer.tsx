"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  ArrowRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Careers", href: "#internship" },
    { label: "Blog", href: "#" },
  ],
  Services: [
    { label: "Software Development", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "IT Consulting", href: "#services" },
    { label: "Cloud Solutions", href: "#services" },
  ],
  Programs: [
    { label: "Internship Programs", href: "#internship" },
    { label: "Full Stack Track", href: "#internship" },
    { label: "UI/UX Design Track", href: "#internship" },
    { label: "Business Dev Track", href: "#internship" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-surface border-t border-dark-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 circuit-bg opacity-10" />

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 group mb-6">
              <div className="relative w-10 h-10">
                <Image src="/logo-icon.png" alt="JantaraX" fill className="object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Jantara<span className="text-gradient-blue">X</span>
                </span>
                <p className="text-[10px] text-silver/50 tracking-wider uppercase -mt-0.5">
                  Global IT Private Limited
                </p>
              </div>
            </Link>

            <p className="text-silver/50 text-sm leading-relaxed mb-6 max-w-xs">
              Building the future with cutting-edge technology solutions. 
              Your trusted partner for software, web, mobile, and IT excellence.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <a href="mailto:hello@jantarax.com" className="flex items-center gap-3 text-sm text-silver/50 hover:text-primary-light transition-colors group">
                <Mail size={14} className="text-primary/50 group-hover:text-primary transition-colors" />
                hello@jantarax.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-silver/50 hover:text-gold transition-colors group">
                <Phone size={14} className="text-gold/50 group-hover:text-gold transition-colors" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-3 text-sm text-silver/50">
                <MapPin size={14} className="text-silver/30" />
                India
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-light border border-dark-border flex items-center justify-center text-silver/40 hover:text-white hover:border-primary/30 transition-all duration-200 hover:scale-110"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-silver/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter strip */}
      <div className="relative z-10 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-white text-sm">Stay updated with JantaraX</p>
              <p className="text-silver/40 text-xs mt-0.5">Get the latest news, project highlights, and internship openings.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 bg-white/5 border border-dark-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-silver/30 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="btn-primary py-2.5 px-5 text-sm gap-1.5 flex-shrink-0">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-silver/40 text-xs">
            © {new Date().getFullYear()} JantaraX Global IT Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-silver/40 text-xs">
            Made with <Heart size={12} className="text-red-400 mx-1 fill-current" /> in India
          </div>
          <div className="flex gap-4 text-xs text-silver/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
