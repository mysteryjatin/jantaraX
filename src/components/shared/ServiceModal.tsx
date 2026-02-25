"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

interface ServiceModalProps {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  isOpen: boolean;
  onClose: () => void;
}

const serviceDetails = {
  "Web Development": {
    features: [
      "Responsive Design",
      "Scalable Architecture", 
      "SEO Optimization",
      "Custom CMS Integration",
      "Performance Optimization",
      "Cross-browser Compatibility"
    ],
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    process: [
      "Initial Consultation & Planning",
      "UI/UX Design & Prototyping", 
      "Development & Testing",
      "Deployment & Launch",
      "Ongoing Support & Maintenance"
    ],
    timeline: "4-8 weeks",
    team: "2-4 developers",
    pricing: "Starting from $5,000"
  },
  "Mobile Development": {
    features: [
      "Native iOS & Android Apps",
      "Cross-platform Solutions",
      "Push Notifications",
      "Offline Functionality",
      "App Store Optimization",
      "Real-time Synchronization"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    process: [
      "Requirements Analysis",
      "Design & Prototyping",
      "Development & Testing",
      "App Store Submission",
      "Post-launch Support"
    ],
    timeline: "6-12 weeks",
    team: "3-5 developers",
    pricing: "Starting from $8,000"
  },
  "AI Solutions": {
    features: [
      "Custom AI Agents",
      "Natural Language Processing",
      "Machine Learning Models",
      "Predictive Analytics",
      "Automated Workflows",
      "Intelligent Chatbots"
    ],
    techStack: ["Python", "TensorFlow", "OpenAI API", "LangChain", "Pinecone", "FastAPI"],
    process: [
      "AI Strategy Planning",
      "Data Analysis & Preparation",
      "Model Development & Training",
      "Integration & Testing",
      "Deployment & Monitoring"
    ],
    timeline: "8-16 weeks",
    team: "4-6 developers",
    pricing: "Starting from $12,000"
  },
  "Hosting": {
    features: [
      "Cloud Infrastructure",
      "Auto-scaling",
      "99.9% Uptime Guarantee",
      "SSL Certificates",
      "CDN Integration",
      "24/7 Monitoring"
    ],
    techStack: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Nginx"],
    process: [
      "Infrastructure Assessment",
      "Server Configuration",
      "Security Setup",
      "Migration & Testing",
      "Ongoing Management"
    ],
    timeline: "1-2 weeks",
    team: "2-3 developers",
    pricing: "Starting from $200/month"
  },
  "Maintenance": {
    features: [
      "Regular Security Updates",
      "Performance Monitoring",
      "Bug Fixes & Patches",
      "Database Optimization",
      "Code Reviews",
      "Technical Support"
    ],
    techStack: ["Various", "Monitoring Tools", "CI/CD", "Security Scanners", "Performance Tools"],
    process: [
      "System Health Check",
      "Issue Identification",
      "Fix Implementation",
      "Testing & Validation",
      "Documentation Update"
    ],
    timeline: "Ongoing",
    team: "2-3 developers",
    pricing: "Starting from $500/month"
  }
};

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const details = serviceDetails[service.title as keyof typeof serviceDetails];

  if (!details) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <service.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-3xl text-gray-800 dark:text-white">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                {service.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 pb-4">
          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Process
            </h3>
            <div className="space-y-3">
              {details.process.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="flex gap-4 pt-6">
          <Button size="lg" className="flex-1" asChild>
            <a href="/contact">Get Started</a>
          </Button>
          <Button variant="outline" size="lg" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
