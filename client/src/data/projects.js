export const projects = [
  {
    id: 1,
    title: "Docify",
    description: "Auto-Dockerization CLI that automates containerization by detecting ports/databases, generating Dockerfiles, building images, and running containers. Reduced onboarding and deployment time by 80%.",
    icon: "Container",
    technologies: ["Go", "Docker", "MongoDB", "CLI"],
    visitUrl: "https://github.com/yash-gautam9953/docify",
    codeUrl: "https://github.com/yash-gautam9953/docify",
  },
  {
    "id": 4,
    "title": "GitEasy - CLI Tool",
    "description": "A simple and fast CLI tool that automates Git operations like init, add, commit, branch switch, remote setup, and push — all using one command.",
    "icon": "Code",
    "technologies": ["Go", "Git"],
    "visitUrl": "https://yash-gautam9953.github.io/GIT-AUTOMATION-TOOL/",
    "codeUrl": "https://github.com/yash-gautam9953/GIT-AUTOMATION-TOOL"
    
  },
  {
    id: 3,
    title: "PixelSqueeze",
    description: "A user-friendly web app for precise image compression, allowing users to define target file sizes (e.g., '50kb jpg') and get optimized images in seconds. Features multi-format support (JPG, PNG, ZIP).",
    icon: "Smartphone",
    technologies: ["Python", "Flask", "Pillow", "PyMuPDF", "HTML", "CSS", "JavaScript"],
    visitUrl: "https://pixelsqueeze-0bvm.onrender.com/",
    codeUrl: "https://github.com/yash-gautam9953/PixelSqueeze",
  },
  {
    id: 4,
    title: "simple-google-oauthentication",
    description: "Express middleware for plug-and-play OAuth 2.0 with JWT-based cookie sessions for secure authentication. Adopted by 10+ developers in production systems, simplified Google login integration by 60%.",
    icon: "Shield",
    technologies: ["Node.js", "Express", "OAuth 2.0", "JWT"],
    visitUrl: "https://www.npmjs.com/package/simple-google-oauthentication",
    codeUrl: "https://github.com/yash-gautam9953/simple-google-oauthentication",
  },

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