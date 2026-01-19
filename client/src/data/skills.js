export const skillsData = [
  {
    category: "DevOps & Cloud",
    skills: ["Linux", "Git&GitHub", "Docker", "GitLab CI/CD", "AWS", "Azure", "Terraform"]
  },
  {
    category: "Languages",
    skills: ["Java", "Python", "Golang(Go)", "Bash"]
  },
  {
    category: "Security",
    skills: ["OAuth 2.0", "JWT", "AuthN/AuthZ", "IAM"]
  },
  {
    category: "Frameworks",
    skills: ["Node.js", "Express",]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "Redis","PostgreSQL"]
  },
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