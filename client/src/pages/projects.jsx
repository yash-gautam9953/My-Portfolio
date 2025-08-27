import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Cloud, Smartphone, BarChart, Bot, Gamepad2, Container, Shield, Package } from "lucide-react";
import GlassButton from "@/components/GlassButton";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [, setLocation] = useLocation();

  const projects = [
    {
      id: 1,
      title: "Docify",
      description: "Auto-Dockerization CLI that automates containerization by detecting ports/databases, generating Dockerfiles, building images, and running containers. Reduced onboarding and deployment time by 80%.",
      icon: <Container className="w-6 h-6" />,
      technologies: ["Go", "Docker", "MongoDB", "CLI"],
      visitUrl: null,
      codeUrl: "https://github.com/yashgautam/docify",
    },
    {
      id: 2,
      title: "simple-google-oauthentication",
      description: "Express middleware for plug-and-play OAuth 2.0 with JWT-based cookie sessions for secure authentication. Adopted by 10+ developers in production systems, simplified Google login integration by 60%.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "OAuth 2.0", "JWT"],
      visitUrl: "https://www.npmjs.com/package/simple-google-oauthentication",
      codeUrl: "https://github.com/yashgautam/simple-google-oauthentication",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Automation",
      description: "Infrastructure as Code solutions using Terraform for automated cloud deployment and management across AWS, Azure, and GCP platforms.",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["Terraform", "AWS", "Azure", "GCP", "Kubernetes"],
      visitUrl: null,
      codeUrl: "https://github.com/yashgautam",
    },
    {
      id: 4,
      title: "CI/CD Pipeline Solutions",
      description: "Automated continuous integration and deployment pipelines with GitLab CI/CD, enhancing developer efficiency and deployment reliability.",
      icon: <Code className="w-6 h-6" />,
      technologies: ["GitLab CI/CD", "Docker", "Kubernetes", "Automation"],
      visitUrl: null,
      codeUrl: "https://github.com/yashgautam",
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

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              category: "Languages",
              skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "Go", "Dart"]
            },
            {
              category: "Frameworks",
              skills: ["Node.js", "Express", "Next.js", "FlutterFlow", "TailwindCSS"]
            },
            {
              category: "DevOps & Cloud",
              skills: ["Docker", "Kubernetes", "Terraform", "GitLab CI/CD", "AWS", "Azure", "GCP"]
            },
            {
              category: "Databases",
              skills: ["MySQL", "MongoDB", "Firebase Firestore"]
            },
            {
              category: "Security",
              skills: ["OAuth 2.0", "JWT", "SPIFFE/SPIRE", "AuthN/AuthZ", "Cloud Security"]
            },
            {
              category: "AI/ML",
              skills: ["Machine Learning", "Deep Learning", "Data Science"]
            }
          ].map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                  },
                },
              }}
              className="glassmorphism rounded-xl p-6"
              data-testid={`skills-category-${index}`}
            >
              <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-category-${index}`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="tech-badge px-3 py-1 rounded-full text-xs font-medium"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
