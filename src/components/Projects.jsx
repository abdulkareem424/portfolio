import { useState } from 'react'
import { academicProjects, featuredProjects } from '../data/projects'
import ProjectCard from './ProjectCard'

const filters = ['All', 'Full Stack', 'Backend', 'Frontend', 'Flutter', 'React', 'Laravel', 'Academic']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const matchesFilter = (project) => activeFilter === 'All' || project.filters?.includes(activeFilter)
  const visibleFeatured = featuredProjects.filter(matchesFilter)
  const visibleAcademic = academicProjects.filter(matchesFilter)

  return (
    <section className="section-padding bg-slate-950" id="projects">
      <div className="section-shell">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Business systems, deployed tools, and product prototypes.</h2>
        <p className="section-lead">
          Featured work is ordered by scope and evidence, with live deployments, source
          visibility, and in-progress prototypes labeled clearly.
        </p>

        <div aria-label="Filter projects by technology or type" className="mt-7 flex flex-wrap gap-2" role="group">
          {filters.map((filter) => (
            <button
              aria-pressed={activeFilter === filter}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-bold transition ${
                activeFilter === filter
                  ? 'border-orange-400 bg-orange-500 text-slate-950'
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-orange-500'
              }`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        {visibleFeatured.length > 0 && <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {visibleFeatured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>}

        {visibleAcademic.length > 0 && <div className="mt-12">
          <p className="eyebrow">Academic & Training Projects</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {visibleAcademic.map((project) => (
              <ProjectCard compact key={project.title} project={project} />
            ))}
          </div>
        </div>}
      </div>
    </section>
  )
}

export default Projects
