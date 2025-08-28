import { ProjectCard } from "../components/ProjectCard"

const projects = [
  { title: "Sistema Vue", description: "Meu primeiro sistema completo em Vue.", link: "#" },
  { title: "Landing Page", description: "Página de apresentação para cliente.", link: "#" },
  { title: "E-commerce", description: "Loja interna com integração de pagamento.", link: "#" },
]

export function Projects() {
  return (
    <section className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}
