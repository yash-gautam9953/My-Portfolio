import { useLocation } from "wouter";
import { motion } from "framer-motion";
import GlassButton from "@/components/GlassButton";
import { Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleViewProjects = () => {
    setLocation("/projects");
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <motion.div
        className="text-center z-10 px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name and Title */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">
            Yash Gautam
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full-Stack & DevSecOps Engineer
          </p>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <GlassButton
              href="https://github.com/yash-gautam9953"
              external
              icon={<Github className="w-5 h-5" />}
              data-testid="link-github"
            >
              GitHub
            </GlassButton>
          </motion.div>
          <motion.div variants={itemVariants}>
            <GlassButton
              href="https://www.linkedin.com/in/yash-gautam-75b523364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              external
              icon={<Linkedin className="w-5 h-5" />}
              data-testid="link-linkedin"
            >
              LinkedIn
            </GlassButton>
          </motion.div>
          <motion.div variants={itemVariants}>
            <GlassButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yashgautam9953@gmail.com"
              external
              icon={<Mail className="w-5 h-5" />}
              data-testid="link-gmail"
            >
              Email
            </GlassButton>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <GlassButton
            onClick={handleViewProjects}
            size="lg"
            icon={<Rocket className="w-6 h-6" />}
            data-testid="button-view-projects"
          >
            View Projects
          </GlassButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
