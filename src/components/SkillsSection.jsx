import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaLinux
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiVite,
  SiFastapi,
  SiPostgresql,
  SiJira,
  SiVitest,
  SiStorybook,
  SiGithubactions,
  SiPostman
} from "react-icons/si"
import { BiLogoVisualStudio } from "react-icons/bi"

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: FaHtml5 },
  { name: "JavaScript", category: "frontend", icon: FaJs },
  { name: "React", category: "frontend", icon: FaReact },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
  { name: "Vite", category: "frontend", icon: SiVite },
  { name: "Vitest", category: "frontend", icon: SiVitest },
  { name: "StoryBook", category: "frontend", icon: SiStorybook },
  { name: "Figma", category: "frontend", icon: FaFigma },
  // Backend
  { name: "Node.js", category: "backend", icon: FaNodeJs },
  { name: "FastAPI", category: "backend", icon: SiFastapi },
  { name: "PostgreSQL", category: "backend", icon: SiPostgresql },
  { name: "Postman", category: "backend", icon: SiPostman },
  // DevOps
  { name: "Linux", category: "devops", icon: FaLinux },
  { name: "Git/GitHub", category: "devops", icon: FaGitAlt },
  { name: "GitHub Actions", category: "devops", icon: SiGithubactions },
  { name: "Docker & Compose", category: "devops", icon: FaDocker },
  // Herramientas
  { name: "VS Code", category: "tools", icon: BiLogoVisualStudio },
  { name: "Jira", category: "tools", icon: SiJira },
]

const categories = ["todas", "frontend", "backend", "devops", "tools"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("todas")

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "todas" || skill.category === activeCategory
  )

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "frontend"
                ? "Frontend"
                : category === "backend"
                  ? "Backend"
                  : category === "devops"
                    ? "DevOps"
                    : category === "tools"
                      ? "Herramientas"
                      : "Todas"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const IconComponent = skill.icon
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-center"
              >
                <div className="flex items-center gap-3">
                  <IconComponent className="text-2xl text-primary" />
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
