import { FiDatabase, FiLayers, FiPackage, FiRepeat, FiSmartphone } from 'react-icons/fi'

const values = [
  { icon: FiLayers, title: 'End-to-end ownership', text: 'I can take a feature from workflow definition and interface through API, data, and release preparation.' },
  { icon: FiRepeat, title: 'Backend and frontend', text: 'I work across Laravel or Node.js services and the React or Flutter clients that consume them.' },
  { icon: FiDatabase, title: 'Data-aware decisions', text: 'I design relational models, lifecycle states, validation rules, and role boundaries around real workflows.' },
  { icon: FiSmartphone, title: 'Web and mobile delivery', text: 'I connect responsive web experiences and Flutter applications to authenticated REST APIs.' },
  { icon: FiPackage, title: 'Practical deployment', text: 'I prepare Docker, Linux, Nginx, GitHub Actions, and static-hosting paths appropriate to the product.' },
]

function HireValue() {
  return (
    <section className="section-padding border-y border-slate-800 bg-slate-900/35" id="value">
      <div className="section-shell">
        <p className="eyebrow">How I contribute</p>
        <h2 className="section-title">Useful across the full feature lifecycle.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {values.map(({ icon: Icon, text, title }) => (
            <article className="surface-card rounded-lg p-5" key={title}>
              <Icon aria-hidden="true" className="text-orange-400" size={22} />
              <h3 className="mt-4 font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HireValue
