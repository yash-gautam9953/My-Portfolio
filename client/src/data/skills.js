export const skillsData = [
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
];

/*
HOW TO ADD NEW SKILLS:

Option 1: Add to existing category
- Find the category object you want
- Add new skill to the skills array

Option 2: Create new category
- Add new object to skillsData array:
{
  category: "New Category Name",
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}

The skills will automatically display in a responsive grid layout.
*/