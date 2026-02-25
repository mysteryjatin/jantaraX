import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import Internship from "@/components/home/Internship";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <Navbar key="navbar" />
      <Hero key="hero" />
      <div className="relative z-10">
        <Services key="services" />
        <Projects key="projects" />
        <About key="about" />
        <Internship key="internship" />
        <Feedback key="feedback" />
        <CTA key="cta" />
        <Footer key="footer" />
      </div>
    </main>
  );
}
