import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Cloud, Smartphone, BarChart, Bot, Gamepad2 } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [, setLocation] = useLocation();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      icon: <Code className="w-6 h-6" />,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      visitUrl: "https://example.com",
      codeUrl: "https://github.com/example/ecommerce",
    },
    {
      id: 2,
      title: "DevOps Pipeline",
      description: "Automated CI/CD pipeline with Docker, Kubernetes, and monitoring solutions.",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS"],
      visitUrl: "https://example.com",
      codeUrl: "https://github.com/example/devops",
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application with real-time features and offline capabilities.",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
      visitUrl: "https://example.com",
      codeUrl: "https://github.com/example/mobile",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization.",
      icon: <BarChart className="w-6 h-6" />,
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      visitUrl: "https://example.com",
      codeUrl: "https://github.com/example/analytics",
    },
    {
      id: 5,
      title: "AI Chatbot",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      icon: <Bot className="w-6 h-6" />,
      technologies: ["Python", "TensorFlow", "FastAPI", "OpenAI"],
      visitUrl: "https://example.com",
      codeUrl: "https://github.com/example/chatbot",
    },
    {
      id: 6,
      title: "Gaming Platform",
      description: "Multiplayer gaming platform with real-time gameplay and social features.",
      icon: <Gamepad2 className="w-6 h-6" />,
      technologies: ["Unity", "WebGL", "WebRTC", "Redis"],
      visitUrl: "https://example.com",
      codeUrl: "https://github.com/example/gaming",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 glassmorphism border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <GlassButton
            onClick={handleGoHome}
            variant="ghost"
            icon={<ArrowLeft className="w-4 h-4" />}
            data-testid="button-home"
          >
            Home
          </GlassButton>
          <h2 className="text-xl font-semibold gradient-text">Portfolio</h2>
        </div>
      </nav>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
