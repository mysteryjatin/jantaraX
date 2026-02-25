"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProductModalProps {
  project: {
    title: string;
    description: string;
    image: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const projectDetails = {
  "Corporate Web Portal": {
    features: [
      "User Authentication",
      "Content Management",
      "Internal Communication Tools",
      "Analytics Dashboard",
      "Role-based Access Control",
      "Document Management"
    ],
    techStack: ["Next.js", "React", "GraphQL", "PostgreSQL", "Prisma", "TypeScript"],
    duration: "6-8 months",
    team: "4 developers",
    pricing: "Starting from $25,000",
    challenges: [
      "Complex user permission system",
      "Real-time collaboration features",
      "Scalable architecture design"
    ],
    results: [
      "40% increase in internal efficiency",
      "50% reduction in communication overhead",
      "99.9% uptime achieved"
    ]
  },
  "E-commerce Platform": {
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Gateway Integration",
      "Order Management",
      "Inventory Tracking",
      "Customer Reviews"
    ],
    techStack: ["Next.js", "Stripe", "Sanity.io", "TypeScript", "Tailwind CSS", "Vercel"],
    duration: "4-6 months",
    team: "3 developers",
    pricing: "Starting from $15,000",
    challenges: [
      "Payment security implementation",
      "Inventory synchronization",
      "Mobile responsiveness"
    ],
    results: [
      "200% increase in online sales",
      "30% improvement in conversion rate",
      "Zero payment security incidents"
    ]
  },
  "Mobile Banking App": {
    features: [
      "Account Management",
      "Fund Transfers",
      "Bill Payments",
      "Interactive 3D Elements",
      "Biometric Authentication",
      "Transaction History"
    ],
    techStack: ["React Native", "Firebase", "Three.js", "GSAP", "Node.js", "MongoDB"],
    duration: "5-7 months",
    team: "5 developers",
    pricing: "Starting from $35,000",
    challenges: [
      "Banking security compliance",
      "3D animation performance",
      "Cross-platform consistency"
    ],
    results: [
      "60% increase in mobile transactions",
      "4.8/5 app store rating",
      "Zero security breaches"
    ]
  },
  "CRM Solutions": {
    features: [
      "Lead Management",
      "Sales Automation",
      "Customer Support",
      "Reporting & Analytics",
      "Email Integration",
      "Task Management"
    ],
    techStack: ["Node.js", "Express", "React", "MongoDB", "Socket.io", "JWT"],
    duration: "7-9 months",
    team: "6 developers",
    pricing: "Starting from $30,000",
    challenges: [
      "Complex data relationships",
      "Real-time updates",
      "Custom reporting engine"
    ],
    results: [
      "45% increase in sales productivity",
      "35% improvement in lead conversion",
      "90% user adoption rate"
    ]
  },
  "Inventory Management": {
    features: [
      "Stock Tracking",
      "Order Automation",
      "Supplier Management",
      "Barcode Scanning",
      "Low Stock Alerts",
      "Analytics Dashboard"
    ],
    techStack: ["Python", "Django", "React", "PostgreSQL", "Redis", "Celery"],
    duration: "4-6 months",
    team: "4 developers",
    pricing: "Starting from $20,000",
    challenges: [
      "Real-time inventory updates",
      "Barcode integration",
      "Multi-location support"
    ],
    results: [
      "50% reduction in stockouts",
      "30% improvement in order accuracy",
      "25% cost savings in inventory"
    ]
  },
  "Data Dashboards": {
    features: [
      "Real-time Data Visualization",
      "Customizable Widgets",
      "Data Filtering",
      "Export Options",
      "Interactive Charts",
      "Automated Reports"
    ],
    techStack: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Chart.js"],
    duration: "3-5 months",
    team: "3 developers",
    pricing: "Starting from $12,000",
    challenges: [
      "Large dataset performance",
      "Real-time data streaming",
      "Custom visualization requirements"
    ],
    results: [
      "80% faster data analysis",
      "60% reduction in reporting time",
      "95% user satisfaction rate"
    ]
  },
  "Ecommerce": {
    features: [
      "Single & Multi-Vendor Support",
      "Product Catalog Management",
      "Secure Payment Processing",
      "Vendor Dashboard & Analytics",
      "Commission Management System",
      "Order Tracking & Fulfillment",
      "Customer Reviews & Ratings",
      "Inventory Management",
      "Email Notifications",
      "Admin Control Panel"
    ],
    techStack: ["Next.js", "React", "Node.js", "Stripe", "PostgreSQL", "Prisma", "AWS", "Redis", "Socket.io"],
    duration: "2-12 months",
    team: "2-7 developers",
    pricing: "Starting from $15,000",
    challenges: [
      "Complex vendor management system",
      "Payment splitting and commission logic",
      "Scalable multi-vendor architecture",
      "Real-time inventory synchronization",
      "Secure payment processing"
    ],
    results: [
      "200% increase in online sales",
      "300% growth in vendor signups",
      "99.9% transaction success rate",
      "40% improvement in conversion rates",
      "Zero security incidents"
    ]
  },
  "Multi-Vendor Marketplace": {
    features: [
      "Vendor Dashboards",
      "Commission Management",
      "Product Moderation",
      "User Reviews",
      "Escrow System",
      "Dispute Resolution"
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe Connect", "Socket.io", "Redis"],
    duration: "8-12 months",
    team: "7 developers",
    pricing: "Starting from $50,000",
    challenges: [
      "Complex vendor management",
      "Payment splitting logic",
      "Scalable architecture"
    ],
    results: [
      "300% increase in vendor signups",
      "25% commission revenue growth",
      "99.5% transaction success rate"
    ]
  },
  "ERP Applications": {
    features: [
      "Financial Management",
      "Human Resources",
      "Supply Chain",
      "Project Management",
      "Inventory Control",
      "Reporting Suite"
    ],
    techStack: ["Java", "Spring Boot", "Angular", "Oracle DB", "Microservices", "Docker"],
    duration: "10-15 months",
    team: "8 developers",
    pricing: "Starting from $75,000",
    challenges: [
      "Complex business logic",
      "Integration with existing systems",
      "Data migration"
    ],
    results: [
      "50% improvement in operational efficiency",
      "30% reduction in manual processes",
      "100% data accuracy achieved"
    ]
  },
  "Real Estate Applications": {
    features: [
      "Property Listings",
      "Virtual Tours",
      "Agent Portals",
      "Client Matching",
      "Mortgage Calculator",
      "Document Management"
    ],
    techStack: ["Next.js", "Mapbox", "Three.js", "Firebase", "Stripe", "AWS"],
    duration: "6-9 months",
    team: "5 developers",
    pricing: "Starting from $28,000",
    challenges: [
      "3D virtual tour implementation",
      "Map integration",
      "Mobile optimization"
    ],
    results: [
      "200% increase in property views",
      "35% improvement in lead generation",
      "4.9/5 user rating"
    ]
  },
  "AI Chatbots": {
    features: [
      "Natural Language Processing",
      "Contextual Understanding",
      "Multi-channel Support",
      "Integration with CRM",
      "Analytics Dashboard",
      "Custom Training"
    ],
    techStack: ["Python", "TensorFlow", "Dialogflow", "React", "Node.js", "MongoDB"],
    duration: "3-5 months",
    team: "3 developers",
    pricing: "Starting from $15,000",
    challenges: [
      "Natural language understanding",
      "Context maintenance",
      "Integration complexity"
    ],
    results: [
      "70% reduction in support tickets",
      "85% customer satisfaction rate",
      "24/7 automated support"
    ]
  },
  "Gaming Applications": {
    features: [
      "Immersive Graphics",
      "Multiplayer Support",
      "In-app Purchases",
      "Leaderboards",
      "Social Features",
      "Cross-platform Play"
    ],
    techStack: ["Unity", "C#", "Photon Engine", "AWS", "Firebase", "PlayFab"],
    duration: "8-12 months",
    team: "6 developers",
    pricing: "Starting from $40,000",
    challenges: [
      "Performance optimization",
      "Multiplayer synchronization",
      "Monetization strategy"
    ],
    results: [
      "500,000+ downloads",
      "4.7/5 app store rating",
      "$100K+ monthly revenue"
    ]
  },
  "Blockchain Projects": {
    features: [
      "Smart Contracts",
      "Decentralized Identity",
      "Tokenization",
      "Secure Transactions",
      "NFT Marketplace",
      "DeFi Integration"
    ],
    techStack: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js", "IPFS"],
    duration: "6-10 months",
    team: "5 developers",
    pricing: "Starting from $45,000",
    challenges: [
      "Blockchain security",
      "Gas optimization",
      "User experience design"
    ],
    results: [
      "100% secure transactions",
      "50% gas cost reduction",
      "10,000+ active users"
    ]
  }
};

const ProductModal = ({ project, isOpen, onClose }: ProductModalProps) => {
  const details = projectDetails[project.title as keyof typeof projectDetails];

  if (!details) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <DialogHeader>
          <div className="flex items-start gap-6 mb-6">
            <div className="relative h-32 w-48 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-3xl text-gray-800 dark:text-white mb-2">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2">
                {details.techStack.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {details.techStack.length > 4 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                    +{details.techStack.length - 4} more
                  </span>
                )}
              </div>
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


          {/* Challenges & Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Key Challenges
              </h3>
              <ul className="space-y-2">
                {details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Achieved Results
              </h3>
              <ul className="space-y-2">
                {details.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <Button size="lg" className="flex-1">
            View Case Study
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
