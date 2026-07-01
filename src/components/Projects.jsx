import { academicProjects, featuredProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="section-padding bg-slate-950" id="projects">
      <div className="section-shell">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Projects explained by problem, solution, and system scope.</h2>
        <p className="section-lead">
          The strongest work is shown first, with academic and training projects separated
          clearly from business systems.
        </p>

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow">Academic & Training Projects</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
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
