import { motion } from "framer-motion";
import { ExternalLink, Github, Container, Shield, Cloud, Code, Smartphone, BarChart, Bot, Gamepad2 } from "lucide-react";
import GlassButton from "./GlassButton";

export default function ProjectCard({ project, index }) {
  const cardVariants = {
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
  };

  return (
    <motion.div
      variants={cardVariants}
      className="project-card glassmorphism rounded-xl p-6 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
      data-testid={`card-project-${project.id}`}
    >
      <div className="card-glow" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="text-primary flex-shrink-0">
            {project.icon === "Container" && <Container className="w-6 h-6" />}
            {project.icon === "Shield" && <Shield className="w-6 h-6" />}
            {project.icon === "Cloud" && <Cloud className="w-6 h-6" />}
            {project.icon === "Code" && <Code className="w-6 h-6" />}
            {project.icon === "Smartphone" && <Smartphone className="w-6 h-6" />}
            {project.icon === "BarChart" && <BarChart className="w-6 h-6" />}
            {project.icon === "Bot" && <Bot className="w-6 h-6" />}
            {project.icon === "Gamepad2" && <Gamepad2 className="w-6 h-6" />}
          </div>
          <h3 
            className="text-xl font-semibold text-foreground"
            data-testid={`text-title-${project.id}`}
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p 
          className="text-muted-foreground mb-4 leading-relaxed"
          data-testid={`text-description-${project.id}`}
        >
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="tech-badge px-3 py-1 rounded-full text-xs font-medium"
              data-testid={`badge-tech-${project.id}-${techIndex}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.visitUrl && (
            <GlassButton
              href={project.visitUrl}
              external
              size="sm"
              icon={<ExternalLink className="w-4 h-4" />}
              data-testid={`button-visit-${project.id}`}
            >
              Visit
            </GlassButton>
          )}
          {project.codeUrl && (
            <GlassButton
              href={project.codeUrl}
              external
              size="sm"
              icon={<Github className="w-4 h-4" />}
              data-testid={`button-code-${project.id}`}
            >
              Code
            </GlassButton>
          )}
        </div>
      </div>
    </motion.div>
  );
}
