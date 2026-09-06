const statusStyles = {
  Academic: 'border-indigo-400/30 bg-indigo-400/10 text-indigo-200',
  'In Development': 'border-amber-400/30 bg-amber-400/10 text-amber-200',
  Live: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  MVP: 'border-orange-400/30 bg-orange-400/10 text-orange-200',
  'Private Source': 'border-slate-500/40 bg-slate-500/10 text-slate-300',
  Production: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  Prototype: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
  'Repository Pending': 'border-violet-400/30 bg-violet-400/10 text-violet-200',
}

function ProjectStatus({ statuses = [] }) {
  return (
    <div aria-label="Project maturity" className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <span
          className={`rounded-md border px-3 py-1 text-xs font-bold ${statusStyles[status] || statusStyles.Prototype}`}
          key={status}
        >
          {status}
        </span>
      ))}
    </div>
  )
}

export default ProjectStatus
