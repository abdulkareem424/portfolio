function Journey() {
  return (
    <section className="section-padding bg-slate-950" id="journey">
      <div className="section-shell">
        <p className="eyebrow">Journey</p>
        <h2 className="section-title">My Development Focus</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="surface-card rounded-lg p-6">
            <p className="text-sm font-black text-orange-300">2024 - 2026</p>
            <h3 className="mt-3 text-2xl font-black text-white">Built practical systems</h3>
            <p className="mt-4 leading-8 text-slate-400">
              Built multiple academic, business, and real-world software projects using
              React, Flutter, Laravel, Node.js, and SQL databases.
            </p>
          </article>

          <article className="surface-card rounded-lg p-6">
            <p className="text-sm font-black text-orange-300">Current Focus</p>
            <h3 className="mt-3 text-2xl font-black text-white">Mobile-first business products</h3>
            <p className="mt-4 leading-8 text-slate-400">
              Building mobile-first systems, backend APIs, dashboards, and business
              websites for local companies and startups.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Journey
