const toneClasses = {
  amber: 'from-amber-500/25 to-orange-500/10 text-amber-200',
  emerald: 'from-emerald-500/25 to-teal-500/10 text-emerald-200',
  orange: 'from-orange-500/30 to-red-500/10 text-orange-200',
  rose: 'from-rose-500/25 to-pink-500/10 text-rose-200',
  sky: 'from-sky-500/25 to-cyan-500/10 text-sky-200',
  violet: 'from-violet-500/25 to-fuchsia-500/10 text-violet-200',
}

function ProjectPreview({ project }) {
  const tone = toneClasses[project.tone] || toneClasses.orange
  const featureLabels = project.features.slice(0, 4)
  const imageSrc = project.image?.startsWith('/')
    ? `${import.meta.env.BASE_URL}${project.image.slice(1)}`
    : project.image

  return (
    <div className={`overflow-hidden rounded-md border border-slate-700 bg-gradient-to-br ${tone}`}>
      <div className="border-b border-white/10 bg-slate-950/58 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="grid min-h-56 gap-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-current/80">
            {project.type}
          </p>
          <div className="mt-3 flex items-center gap-3">
            {imageSrc && (
              <img
                alt={`${project.title} visual asset`}
                className="h-14 w-14 rounded-md border border-white/15 bg-white object-contain p-2"
                src={imageSrc}
              />
            )}
            <h3 className="text-xl font-black leading-tight text-white">{project.title}</h3>
          </div>
        </div>
        <div className="grid gap-2 self-end">
          {featureLabels.map((feature, index) => (
            <div
              className="h-9 rounded-md border border-white/10 bg-slate-950/55 px-3 py-2 text-xs font-bold text-slate-100"
              key={feature}
              style={{ width: `${92 - index * 8}%` }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview
