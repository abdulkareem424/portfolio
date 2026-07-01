import { FiCheckCircle } from 'react-icons/fi'
import { services } from '../data/services'

function Services() {
  return (
    <section className="section-padding border-y border-slate-800 bg-slate-900/35" id="services">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="section-title">Services I Can Provide</h2>
            <p className="section-lead">
              I help businesses turn ideas into working digital products, from simple
              websites to complete systems with dashboards, APIs, databases, and
              deployment setup.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                className="surface-card flex items-center gap-3 rounded-lg px-4 py-4"
                key={service}
              >
                <FiCheckCircle className="shrink-0 text-orange-400" size={19} />
                <span className="font-bold text-slate-100">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
