import { ArrowRight, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión para Alquiler de Vehículos",
    description:
      "Aplicación web full-stack para la gestión operativa y análisis de datos de una empresa de alquiler de vehículos.",
    image: "/projects/renta_carros.png",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/Tunchxz/Proyecto-4-CC3088",
  },
  {
    id: 2,
    title: "Sistema de Reportería Interactiva",
    description:
      "Sistema de reportería con filtros avanzados y exportación CSV. Visualiza datos dinámicos organizados por criterios clave.",
    image: "/projects/reporteria.png",
    tags: ["Svelte", "Go", "PostgreSQL", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/Tunchxz/Proyecto-3-CC3088",
  },
  {
    id: 3,
    title: "Sistema de Gestión para Academia Musical",
    description:
      "Backend de plataforma académica para gestión de usuarios, pagos y reservas, con enfoque en seguridad, control de acceso y consistencia operativa.",
    image: "/projects/EMA.png",
    tags: ["Node.js", "Express", "PostgreSQL", "Bun", "Docker", "GitHub Actions"],
    demoUrl: "#",
    githubUrl: "https://github.com/lin231135/EMA-backend/tree/Sprint7",
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mis <span className="text-primary">Proyectos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí hay algunos de mis proyectos. Cada proyecto fue elaborado con dedicación,
          prestando atención al detalle, al rendimiento y a la experiencia del usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/*<a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>*/}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tunchxz"
          >
            Visita mi GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
