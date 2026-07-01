import { skills } from '../data/skills'

function Skills() {
  return (
    <section className="section-padding border-y border-slate-800 bg-slate-900/35" id="skills">
      <div className="section-shell">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">A stack for complete business systems.</h2>
        <p className="section-lead">
          Frontend, mobile, backend, database, and deployment tools grouped by how they
          are used in real projects.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {skills.map((group) => (
            <article className="surface-card rounded-lg p-5" key={group.category}>
              <h3 className="text-lg font-extrabold text-white">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    className="rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm font-semibold text-slate-300"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
