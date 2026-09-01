function Journey() {
  return (
    <section className="section-padding bg-slate-950" id="journey">
      <div className="section-shell">
        <p className="eyebrow">Journey</p>
        <h2 className="section-title">Experience built through end-to-end ownership.</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="surface-card rounded-lg p-6">
            <p className="text-sm font-black text-orange-300">2023</p>
            <h3 className="mt-3 text-2xl font-black text-white">Flutter Developer</h3>
            <p className="mt-4 leading-8 text-slate-400">
              Worked at Al Hadara on Flutter application development, REST API
              integration, debugging, and mobile delivery.
            </p>
          </article>

          <article className="surface-card rounded-lg p-6">
            <p className="text-sm font-black text-orange-300">2023 - Present</p>
            <h3 className="mt-3 text-2xl font-black text-white">Full-Stack Projects</h3>
            <p className="mt-4 leading-8 text-slate-400">
              Delivering business systems across requirements, schemas, REST APIs,
              authentication, frontend integration, testing, Docker, and deployment.
            </p>
          </article>

          <article className="surface-card rounded-lg p-6">
            <p className="text-sm font-black text-orange-300">Current Direction</p>
            <h3 className="mt-3 text-2xl font-black text-white">Full-Stack Product Teams</h3>
            <p className="mt-4 leading-8 text-slate-400">
              Focused on Full-Stack Developer roles where I can contribute to React
              interfaces, Laravel or Node.js backends, data consistency, and delivery.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Journey
