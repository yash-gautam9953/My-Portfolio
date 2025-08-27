export const projects = [
  {
    id: 1,
    title: "Docify",
    description: "Auto-Dockerization CLI that automates containerization by detecting ports/databases, generating Dockerfiles, building images, and running containers. Reduced onboarding and deployment time by 80%.",
    icon: "Container",
    technologies: ["Go", "Docker", "MongoDB", "CLI"],
    visitUrl: null,
    codeUrl: "https://github.com/yash-gautam9953/docify",
  },
  {
    id: 2,
    title: "simple-google-oauthentication",
    description: "Express middleware for plug-and-play OAuth 2.0 with JWT-based cookie sessions for secure authentication. Adopted by 10+ developers in production systems, simplified Google login integration by 60%.",
    icon: "Shield",
    technologies: ["Node.js", "Express", "OAuth 2.0", "JWT"],
    visitUrl: "https://www.npmjs.com/package/simple-google-oauthentication",
    codeUrl: "https://github.com/yash-gautam9953/simple-google-oauthentication",
  },
  // {
  //   id: 3,
  //   title: "Cloud Infrastructure Automation",
  //   description: "Infrastructure as Code solutions using Terraform for automated cloud deployment and management across AWS, Azure, and GCP platforms.",
  //   icon: "Cloud",
  //   technologies: ["Terraform", "AWS", "Azure", "GCP", "Kubernetes"],
  //   visitUrl: null,
  //   codeUrl: "https://github.com/yashgautam",
  // },
  // {
  //   id: 4,
  //   title: "CI/CD Pipeline Solutions",
  //   description: "Automated continuous integration and deployment pipelines with GitLab CI/CD, enhancing developer efficiency and deployment reliability.",
  //   icon: "Code",
  //   technologies: ["GitLab CI/CD", "Docker", "Kubernetes", "Automation"],
  //   visitUrl: null,
  //   codeUrl: "https://github.com/yashgautam",
  // },
];

/*
HOW TO ADD NEW PROJECTS:

1. Add new project object to the projects array above
2. Use unique ID number (next in sequence)
3. Available icons: "Container", "Shield", "Cloud", "Code", "Smartphone", "BarChart", "Bot", "Gamepad2"
4. Set visitUrl to null if no live demo available
5. Always provide codeUrl for GitHub repository

Example:
{
  id: 5,
  title: "My New Project",
  description: "Brief description of what this project does and its impact.",
  icon: "Code",
  technologies: ["React", "TypeScript", "Node.js"],
  visitUrl: "https://myproject.com", // or null
  codeUrl: "https://github.com/yashgautam/myproject",
},
*/