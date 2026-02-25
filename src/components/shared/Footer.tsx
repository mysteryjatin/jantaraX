import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  Clock,
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  Wrench
} from "lucide-react";
import Image from "next/image";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", icon: Code },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Cloud Hosting", icon: Cloud },
    { name: "Maintenance", icon: Wrench }
  ];

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/nr_it_solution07?igsh=aXdrYW9hZmpodHZ1&utm_source=qr", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/share/15nPzvMsPd/?mibextid=wwXIfr", icon: Facebook },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/nr-it-solution-pvt-ltd/", icon: Linkedin }
  ];

  return (
    <footer className="bg-transparent border-t border-gray-200/30 dark:border-gray-700/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-start gap-3 mb-6">
              <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                <Image
                  src="/assets/logo.PNG"
                  alt="JantaraX Global IT Pvt. Ltd. Logo"
                  width={180}
                  height={60}
                  className="w-auto h-10 sm:h-12 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                    JantaraX Global IT Pvt. Ltd.
                  </span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-primary/70 transition-colors duration-300">
                  Your Vision, Our Code
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Transforming businesses through innovative technology solutions. 
              We deliver excellence in web development, mobile applications, 
              and digital services.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group p-2 rounded-lg bg-transparent border border-gray-200/30 dark:border-gray-700/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
              Our Services
            </h3>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service.name} className="flex items-center gap-3 group">
                  <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                  scroll={true}
                >
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Email</p>
                  <a 
                    href="mailto:hr@jantarax.com" 
                    className="text-sm text-gray-800 dark:text-white hover:text-primary transition-colors duration-300"
                  >
                    hr@jantarax.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Phone</p>
                  <a 
                    href="tel:+918791008551" 
                    className="text-sm text-gray-800 dark:text-white hover:text-primary transition-colors duration-300"
                  >
                    +91 87910 08551
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Business Hours</p>
                  <p className="text-sm text-gray-800 dark:text-white">
                    Mon - Fri: 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200/30 dark:border-gray-700/30 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} 
                <span className="mx-1">JantaraX Global IT Pvt. Ltd.</span>
              All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/admin/feedback" 
                className="text-gray-500 dark:text-gray-500 hover:text-primary transition-colors duration-300 text-xs opacity-60"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
