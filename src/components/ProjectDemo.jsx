import { FiArrowDown, FiArrowLeft, FiCheck, FiExternalLink, FiGithub } from 'react-icons/fi'
import { caseStudies } from '../data/caseStudies'
import { academicProjects, featuredProjects } from '../data/projects'
import ProjectGallery from './ProjectGallery'
import ProjectStatus from './ProjectStatus'

const projects = [...featuredProjects, ...academicProjects]

const themes = {
  amber: { accent: '#f59e0b', soft: 'rgba(245,158,11,.16)' },
  emerald: { accent: '#10b981', soft: 'rgba(16,185,129,.16)' },
  indigo: { accent: '#818cf8', soft: 'rgba(129,140,248,.16)' },
  orange: { accent: '#f97316', soft: 'rgba(249,115,22,.16)' },
  rose: { accent: '#f43f5e', soft: 'rgba(244,63,94,.16)' },
  sky: { accent: '#38bdf8', soft: 'rgba(56,189,248,.16)' },
  violet: { accent: '#a78bfa', soft: 'rgba(167,139,250,.16)' },
}

function DetailList({ items, title }) {
  return (
    <section className="surface-card rounded-2xl p-6">
      <h2 className="text-xl font-black text-white">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-7 text-slate-300" key={item}>
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--demo-accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ArchitectureFlow({ items }) {
  return (
    <section aria-labelledby="architecture-title" className="section-padding border-y border-white/10 bg-slate-900/35">
      <div className="section-shell">
        <p className="eyebrow">Technical architecture</p>
        <h2 className="mt-3 text-3xl font-black text-white" id="architecture-title">How the verified pieces connect</h2>
        <div className="mt-7 grid gap-3">
          {items.map((item, index) => (
            <div key={item.label}>
              <article className="grid gap-2 rounded-xl border border-white/10 bg-slate-950/75 p-5 sm:grid-cols-[190px_1fr] sm:items-center">
                <h3 className="font-black text-white">{item.label}</h3>
                <p className="text-sm leading-7 text-slate-400">{item.detail}</p>
              </article>
              {index < items.length - 1 && (
                <div aria-hidden="true" className="grid h-9 place-items-center text-[var(--demo-accent)]">
                  <FiArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectDemo({ slug }) {
  const project = projects.find((item) => item.slug === slug)
  if (!project) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-950 text-white">
        <a className="focus-ring rounded-md" href="./#projects">Project not found — return to portfolio</a>
      </div>
    )
  }

  const caseStudy = caseStudies[slug]
  const theme = themes[project.tone] || themes.orange
  const limitations = caseStudy?.limitations || [
    'The source repository is not published, so this summary cannot be independently verified from GitHub yet.',
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100" style={{ '--demo-accent': theme.accent, '--demo-soft': theme.soft }}>
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="section-shell flex min-h-18 items-center justify-between gap-4 py-4">
          <a className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-bold text-slate-300 hover:text-white" href="./#projects">
            <FiArrowLeft aria-hidden="true" /> Portfolio
          </a>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-400">
            {caseStudy ? 'Verified case study' : 'Project summary'}
          </span>
        </div>
      </header>

      <main>
        <section className="section-padding overflow-hidden border-b border-white/10" style={{ background: `radial-gradient(circle at 85% 10%, ${theme.soft}, transparent 35%)` }}>
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <p className="eyebrow" style={{ color: theme.accent }}>{project.type}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>
              <div className="mt-6"><ProjectStatus statuses={project.statuses} /></div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.externalDemo && (
                  <a aria-label={`Open ${project.externalDemoLabel || 'live demo'} for ${project.title} in a new tab`} className="focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-black text-slate-950" href={project.externalDemo} rel="noopener noreferrer" style={{ background: theme.accent }} target="_blank">
                    <FiExternalLink aria-hidden="true" /> {project.externalDemoLabel || 'Live Demo'}
                  </a>
                )}
                {project.github && (
                  <a aria-label={`Open ${project.githubVisibility === 'private' ? 'private ' : ''}GitHub repository for ${project.title} in a new tab`} className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-bold hover:border-slate-500" href={project.github} rel="noopener noreferrer" target="_blank">
                    <FiGithub aria-hidden="true" /> {project.githubVisibility === 'private' ? 'Private GitHub' : 'GitHub'}
                  </a>
                )}
              </div>
            </div>

            <aside className="surface-card rounded-2xl p-6" aria-label="Case study role">
              <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--demo-accent)]">My role</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {caseStudy?.role || 'Role details are not documented in the published repository evidence.'}
              </p>
            </aside>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-shell grid gap-5 lg:grid-cols-2">
            <article className="surface-card rounded-2xl p-6">
              <p className="text-sm font-black text-[var(--demo-accent)]">THE PROBLEM</p>
              <p className="mt-3 leading-8 text-slate-300">{project.problem || 'The project addresses a focused technical workflow with defined inputs and outputs.'}</p>
            </article>
            <article className="surface-card rounded-2xl p-6">
              <p className="text-sm font-black text-[var(--demo-accent)]">THE SOLUTION</p>
              <p className="mt-3 leading-8 text-slate-300">{project.solution || project.description}</p>
            </article>
          </div>
        </section>

        {caseStudy?.architecture && <ArchitectureFlow items={caseStudy.architecture} />}

        <section className="section-padding">
          <div className="section-shell grid gap-5 lg:grid-cols-2">
            <DetailList items={caseStudy?.contribution || project.features} title="What I Built" />
            <DetailList items={caseStudy?.workflows || project.features} title="Main Workflows" />
            {caseStudy?.decisions && <DetailList items={caseStudy.decisions} title="Engineering Decisions" />}
            {caseStudy?.challenges && <DetailList items={caseStudy.challenges} title="Engineering Challenges" />}
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/35 py-14">
          <div className="section-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-black text-white">Tech Stack</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span className="rounded-lg border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-bold text-slate-300" key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Key Features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4" key={feature}>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--demo-soft)] text-[var(--demo-accent)]"><FiCheck aria-hidden="true" /></span>
                    <span className="text-sm font-bold text-slate-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {caseStudy && (
          <section className="section-padding">
            <div className="section-shell">
              <ProjectGallery images={caseStudy.gallery} projectTitle={project.title} />
            </div>
          </section>
        )}

        <section className="border-t border-white/10 py-14">
          <div className="section-shell">
            <p className="eyebrow">Current limitations</p>
            <h2 className="mt-3 text-2xl font-black text-white">What is not complete or public yet</h2>
            <ul className="mt-6 grid gap-3 lg:grid-cols-2">
              {limitations.map((item) => (
                <li className="rounded-xl border border-amber-400/20 bg-amber-400/[.05] p-4 text-sm leading-7 text-slate-300" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDemo
