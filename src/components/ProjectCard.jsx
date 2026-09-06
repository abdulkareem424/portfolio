import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectPreview from './ProjectPreview'
import ProjectStatus from './ProjectStatus'

function ProjectCard({ project, compact = false }) {
  const actions = [
    project.github && {
      href: project.github,
      icon: FiGithub,
      label: project.githubVisibility === 'private' ? 'Private GitHub' : 'GitHub',
      external: true,
    },
    project.externalDemo && {
      href: project.externalDemo,
      icon: FiExternalLink,
      label: project.externalDemoLabel || 'Live Demo',
      external: true,
    },
    project.demo && {
      href: project.demo,
      icon: FiExternalLink,
      label: 'Project Details',
      external: false,
    },
  ].filter(Boolean)

  return (
    <article aria-labelledby={`${project.slug}-title`} className="surface-card grid overflow-hidden rounded-lg">
      <ProjectPreview project={project} />
      <div className="grid gap-5 p-5">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-black leading-tight text-white" id={`${project.slug}-title`}>{project.title}</h3>
            <ProjectStatus statuses={project.statuses} />
          </div>
          <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
        </div>

        {!compact && (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-extrabold text-white">Problem</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{project.problem}</p>
            </div>
            <div>
              <p className="text-sm font-extrabold text-white">Solution</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{project.solution}</p>
            </div>
          </div>
        )}

        <div>
          <p className="text-sm font-extrabold text-white">Tech Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span className="rounded-md bg-slate-950 px-3 py-1.5 text-xs font-bold text-slate-300" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-extrabold text-white">Main Features</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-400 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li className="flex gap-2" key={feature}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {actions.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {actions.map(({ href, icon: Icon, label, external }) => (
              <a
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-bold text-slate-100 transition hover:border-orange-500"
                aria-label={`${label} for ${project.title}${external ? ' (opens in new tab)' : ''}`}
                href={href}
                key={`${label}-${href}`}
                rel={external ? 'noopener noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <Icon /> {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
