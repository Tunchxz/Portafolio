import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
  const cvFile = "https://www.dropbox.com/scl/fi/knsu285nwkppqp7nz6yp6/cv.pdf?rlkey=beax4gyp7qtf1zncgj5gs9feo&st=x7ykqie3&dl=0"

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Estudiante de Computación & Desarrollador Web en Formación
            </h3>

            <p className="text-muted-foreground">
              Soy estudiante de tercer año de la carrera Ciencias de la Computación y Tecnologías de la Información.
              Me apasiona el desarrollo web moderno y disfruto creando interfaces funcionales, accesibles y
              visualmente agradables.
            </p>

            <p className="text-muted-foreground">
              A lo largo de este año he trabajado en diversos proyectos académicos donde he aplicado tecnologías
              como <strong>React, Svelte, FastAPI, Node.js, PostgreSQL, Docker</strong>, entre otras. Siempre
              estoy buscando aprender nuevas herramientas y metodologías que me permitan mejorar como desarrollador.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contáctame
              </a>

              <a
                href={cvFile}
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                  <p className="text-muted-foreground">
                    Construcción de aplicaciones web responsive usando tecnologías y frameworks modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                  <p className="text-muted-foreground">
                    Diseño de interfaces centradas en el usuario, aplicando principios
                    de usabilidad y accesibilidad con herramientas como Figma.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Colaboración en Proyectos</h4>
                  <p className="text-muted-foreground">
                    Participación en equipos multidisciplinarios usando herramientas
                    como Git, Docker, y Jira bajo metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
