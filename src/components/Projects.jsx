import { academicProjects, featuredProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="section-padding bg-slate-950" id="projects">
      <div className="section-shell">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Business systems, deployed tools, and product prototypes.</h2>
        <p className="section-lead">
          Featured work is ordered by scope and evidence, with live deployments, source
          visibility, and in-progress prototypes labeled clearly.
        </p>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12">
          <p className="eyebrow">Academic & Training Projects</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {academicProjects.map((project) => (
              <ProjectCard compact key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
