"use client";
import Link from "next/link";
import { Menu, Home, Briefcase, Package, Phone, Github, Linkedin, Mail, ArrowRight, Sparkles, MessageCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ThemeToggle } from "@/components/shared/ThemeToggle";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleGetStartedClick = () => {
    // Button click handler
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      
      // Check if we're in the browser environment
      if (typeof window !== 'undefined') {
        // Check if we're on the main page
        if (window.location.pathname === '/') {
          // We're on the main page, scroll to the element
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            return;
          }
        } else {
          // We're on a different page, navigate to main page with hash
          window.location.href = href;
          return;
        }
      }
    }
  };

  // Icons mapping for navigation links
  const navIcons = {
    Home: Home,
    Services: Briefcase,
    Products: Package,
    Internship: GraduationCap,
    Feedback: MessageCircle,
    Contact: Phone,
  };


  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  // Handle hash navigation when component mounts
  useEffect(() => {
    // Only run on client side and when mounted
    if (typeof window === 'undefined' || !isMounted) return;

    const handleHashNavigation = () => {
      if (window.location.hash) {
        const elementId = window.location.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          // Small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Handle initial hash
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, [isMounted]);

  useGSAP(() => {
    // Animate navbar on mount
    const tl = gsap.timeline();
    
    tl.from(".navbar-logo", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(".navbar-nav", {
      opacity: 0,
      y: -10,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.4")
    .from(".navbar-actions", {
      opacity: 0,
      x: 20,
      duration: 0.6,
      ease: "power3.out",
    }, "-=0.4");

    // Ensure buttons are clickable after animation
    gsap.set(".navbar-actions button", { pointerEvents: "auto" });

    return () => {
      tl.kill();
    };
  }, { dependencies: [] });

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/20 border-b border-border/20" 
          : "bg-transparent border-b border-border/10"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Link href="/" className="navbar-logo flex-shrink-0 group flex items-center gap-2 sm:gap-3">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/assets/logo.png"
              alt="JantaraX Global IT Logo"
              width={180}
              height={60}
              className="w-auto h-6 sm:h-8 md:h-10 lg:h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    JantaraX Global IT Pvt. Ltd.
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                  Your Vision, Our Code
                </span>
              </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="navbar-nav hidden items-center gap-1 lg:gap-2 xl:gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }
              }}
              className="group relative text-sm lg:text-base text-muted-foreground transition-all duration-300 hover:text-foreground px-3 py-2 rounded-lg hover:bg-accent/50 overflow-hidden"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        
        {/* Desktop Actions */}
        <div className="navbar-actions hidden items-center gap-2 lg:gap-3 md:flex">
          <ThemeToggle />
          <Button 
            size="sm" 
            className="group relative text-xs lg:text-sm px-4 lg:px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 overflow-hidden z-50 pointer-events-auto"
            asChild
          >
            <Link href="/contact" className="relative z-10 pointer-events-auto" onClick={handleGetStartedClick}>
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 sm:gap-3 md:hidden" suppressHydrationWarning>
          <ThemeToggle />
          {isMounted && (
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-10 w-10 group relative hover:bg-primary/10 transition-all duration-300 hover:scale-110 border-primary/20 hover:border-primary/40"
              >
                <Menu className="h-5 w-5 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full max-w-sm bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-l border-primary/20 [&>div]:bg-transparent"
              style={{ backgroundColor: 'transparent' }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-50" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating-bg-1" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl floating-bg-2" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl floating-bg-1" />
              
              <SheetHeader className="relative z-10 pb-6 border-b border-primary/10">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Link 
                  href="/" 
                  className="flex items-center gap-3 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="relative overflow-hidden rounded-xl p-1 bg-gradient-to-br from-primary/20 to-primary/5">
                    <Image
                      src="/assets/logo.png"
                      alt="JantaraX Global IT Pvt. Ltd. Logo"
                      width={180}
                      height={60}
                      className="w-auto h-8 sm:h-10 transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        JantaraX Global IT Pvt. Ltd.
                      </span>
                      <Sparkles className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:animate-pulse" />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                      Your Vision, Our Code
                    </span>
                  </div>
                </Link>
              </SheetHeader>
              
              <nav className="relative z-10 flex flex-col gap-3 mt-8">
                {navLinks.map((link, index) => {
                  const IconComponent = navIcons[link.label as keyof typeof navIcons];
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('/#')) {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="group relative flex items-center gap-4 text-base font-medium text-muted-foreground transition-all duration-300 hover:text-foreground py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent overflow-hidden border border-transparent hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 mobile-nav-item glow-on-hover"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="relative z-10 flex-1">{link.label}</span>
                      <ArrowRight className="h-4 w-4 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  );
                })}
                
                {/* Special Features Section */}
                <div className="pt-6 border-t border-primary/10">
                  <div className="space-y-4">
                    {/* Get Started Button */}
                    <Button 
                      className="w-full group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105 overflow-hidden border-0" 
                      size="lg"
                      asChild
                    >
                      <Link 
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Get Started
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    </Button>
                    
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 pt-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                        asChild
                      >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                        asChild
                      >
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                        asChild
                      >
                        <a href="mailto:hr@jantarax.com">
                          <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
                        </a>
                      </Button>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="text-center pt-2">
                      <p className="text-xs text-muted-foreground">
                        Ready to bring your vision to life?
                      </p>
                      <p className="text-xs text-primary/80 font-medium">
                        Let&apos;s build something amazing together
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
