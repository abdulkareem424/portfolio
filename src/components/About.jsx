import { FiBriefcase, FiCpu, FiShield } from 'react-icons/fi'

const strengths = [
  {
    title: 'System Thinking',
    text: 'I design features as complete flows: input, processing, output, and failure cases.',
    icon: FiCpu,
  },
  {
    title: 'Business Focus',
    text: 'I build software around real user needs, not just code.',
    icon: FiBriefcase,
  },
  {
    title: 'Production Mindset',
    text: 'I care about deployment, security, maintainability, and real usage.',
    icon: FiShield,
  },
]

function About() {
  return (
    <section className="section-padding bg-slate-950" id="about">
      <div className="section-shell">
        <p className="eyebrow">About</p>
        <h2 className="section-title">Useful software, clear business logic, reliable delivery.</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-lead mt-0">
            <p>
              I&apos;m a software developer focused on building useful and reliable digital
              systems.
            </p>
            <p className="mt-5">
              My work includes mobile apps, web dashboards, backend APIs, database
              design, authentication systems, and deployment-ready projects.
            </p>
            <p className="mt-5">
              I care about clean code, clear business logic, database consistency, and
              simple user experiences.
            </p>
          </div>

          <div className="grid gap-4">
            {strengths.map(({ title, text, icon: Icon }) => (
              <article className="surface-card rounded-lg p-5" key={title}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-orange-500 text-slate-950">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-400">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
