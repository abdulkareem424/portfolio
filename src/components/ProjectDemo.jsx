import { FiArrowLeft, FiCheck, FiExternalLink, FiGithub } from 'react-icons/fi'
import { academicProjects, featuredProjects } from '../data/projects'

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

function PhoneFrame({ children }) {
  return (
    <div className="mx-auto w-full max-w-72 rounded-[2rem] border-[6px] border-slate-800 bg-slate-950 p-2 shadow-2xl">
      <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-slate-700" />
      <div className="min-h-96 overflow-hidden rounded-[1.35rem] bg-white text-slate-900">{children}</div>
    </div>
  )
}

function TabeleyPreview() {
  return (
    <PhoneFrame>
      <div className="bg-orange-500 px-5 pb-7 pt-6 text-white">
        <p className="text-xs font-bold uppercase tracking-widest">Tabeley</p>
        <h3 className="mt-4 text-2xl font-black">Find your table</h3>
        <p className="mt-1 text-sm text-orange-50">Restaurants and offers near you</p>
      </div>
      <div className="-mt-3 grid gap-3 px-4 pb-5">
        {['Café Terrace', 'Damascus Kitchen', 'Evening Lounge'].map((name, index) => (
          <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm" key={name}>
            <div className="flex items-center justify-between">
              <div><p className="font-black">{name}</p><p className="text-xs text-slate-500">Available today · {index + 2} offers</p></div>
              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-black text-orange-600">{4.7 + index / 10} ★</span>
            </div>
          </div>
        ))}
      </div>
    </PhoneFrame>
  )
}

function ClinicPreview() {
  const rows = [['09:00', 'Maya Ahmad', 'Checked in'], ['10:30', 'Omar Saleh', 'Waiting'], ['12:00', 'Lina Ali', 'Confirmed']]
  return (
    <div className="overflow-hidden rounded-2xl border border-sky-300/20 bg-slate-900 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4"><b>Physio Center</b><span className="rounded-full bg-sky-400/15 px-3 py-1 text-xs text-sky-300">LAN Connected</span></div>
      <div className="grid gap-4 p-5 md:grid-cols-[150px_1fr]">
        <div className="hidden rounded-xl bg-slate-950 p-4 text-sm text-slate-400 md:grid md:content-start md:gap-4"><b className="text-white">Dashboard</b><span>Patients</span><span>Appointments</span><span>Billing</span><span>Reports</span></div>
        <div><div className="mb-4 grid grid-cols-3 gap-3">{[['12','Today'],['4','Waiting'],['8','Completed']].map(([n,l])=><div className="rounded-xl bg-sky-400/10 p-3" key={l}><b className="text-xl text-sky-300">{n}</b><p className="text-xs text-slate-400">{l}</p></div>)}</div><div className="overflow-hidden rounded-xl border border-slate-700">{rows.map(row=><div className="grid grid-cols-[60px_1fr_auto] gap-3 border-b border-slate-800 p-3 text-sm last:border-0" key={row[0]}><span className="text-sky-300">{row[0]}</span><b>{row[1]}</b><span className="text-xs text-slate-400">{row[2]}</span></div>)}</div></div>
      </div>
    </div>
  )
}

function AlcPreview() {
  return <div className="relative min-h-[430px] overflow-hidden rounded-2xl bg-[#751f2e] p-7 text-white shadow-2xl"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[35px] border-white/10" /><p className="text-xs font-bold tracking-[.35em] text-rose-200">ALC ARCHITECTURE INSTITUTE</p><div className="mt-20 max-w-xl"><p className="font-serif text-5xl font-bold leading-tight">Design<br />Is Art.</p><p className="mt-5 max-w-md text-rose-100">Orientation registration, Telegram confirmation and QR attendance in one focused experience.</p><div className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-[#751f2e]">Register for the session</div></div><div className="absolute bottom-7 right-7 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur"><b>QR Ticket</b><div className="mt-2 grid h-16 w-16 grid-cols-4 gap-1 bg-white p-2">{Array.from({length:16},(_,i)=><i className={i%3===0?'bg-[#751f2e]':'bg-slate-900'} key={i} />)}</div></div></div>
}

function StorePreview() {
  return <div className="overflow-hidden rounded-2xl bg-[#f7f4ed] text-slate-900 shadow-2xl"><div className="flex items-center justify-between border-b border-emerald-900/10 px-6 py-5"><b className="text-2xl text-emerald-900">ACADIA</b><span className="text-sm">Shop · Collections · Cart (2)</span></div><div className="grid gap-6 p-6 md:grid-cols-2"><div className="grid content-center"><p className="text-xs font-bold tracking-[.2em] text-emerald-700">NEW COLLECTION</p><h3 className="mt-3 text-4xl font-black">Everyday products,<br />better selected.</h3><p className="mt-4 text-slate-600">A clean storefront backed by practical inventory and product management.</p><button className="mt-6 w-fit rounded-full bg-emerald-900 px-5 py-3 text-sm font-bold text-white">Explore products</button></div><div className="grid grid-cols-2 gap-3">{['01','02','03','04'].map((n,i)=><div className="grid min-h-36 place-items-center rounded-2xl bg-emerald-900/10" key={n}><span className="text-4xl font-black text-emerald-900/25">{n}</span><small>Product {i+1}</small></div>)}</div></div></div>
}

function PricesPreview() {
  return <div dir="rtl" className="overflow-hidden rounded-2xl bg-[#fffaf0] text-slate-900 shadow-2xl"><div className="bg-amber-500 p-6"><p className="text-sm font-bold">أسعار اليوم</p><h3 className="mt-2 text-3xl font-black">محل الحلاق</h3><p className="mt-2 text-sm">آخر تحديث لسعر الصرف: اليوم</p></div><div className="p-5"><div className="mb-4 rounded-xl border border-amber-200 bg-white px-4 py-3 text-slate-400">ابحث عن مادة...</div>{[['طحين عبر الشرق','22 $'],['رز كريمي 16 كيلو','23 $'],['زيت نخيل','42.5 $'],['رز سيلا','18.5 $']].map(([name,price])=><div className="flex items-center justify-between border-b border-amber-100 py-4" key={name}><b>{name}</b><span className="rounded-lg bg-amber-100 px-3 py-2 font-black text-amber-700">{price}</span></div>)}</div></div>
}

function ImageEditorPreview() {
  return <div className="overflow-hidden rounded-2xl border border-violet-300/20 bg-[#292538] shadow-2xl"><div className="flex gap-4 border-b border-white/10 p-3 text-xs text-slate-300"><b className="text-white">Image Editor</b><span>File</span><span>Edit</span><span>Filters</span></div><div className="grid min-h-96 grid-cols-[62px_1fr_90px]"><div className="grid content-start gap-4 border-r border-white/10 p-4 text-center text-xl"><span>↖</span><span>✂</span><span>□</span><span>T</span><span>◐</span></div><div className="grid place-items-center bg-[linear-gradient(45deg,#39344b_25%,transparent_25%),linear-gradient(-45deg,#39344b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#39344b_75%),linear-gradient(-45deg,transparent_75%,#39344b_75%)] bg-[length:24px_24px]"><div className="grid h-56 w-4/5 place-items-center rounded bg-gradient-to-br from-violet-400 via-fuchsia-400 to-orange-300 text-5xl font-black text-white">EDIT</div></div><div className="border-l border-white/10 p-3 text-xs text-slate-400"><b className="text-white">Layers</b><div className="mt-4 rounded bg-white/10 p-2">Text</div><div className="mt-2 rounded bg-violet-400/20 p-2">Image</div></div></div></div>
}

function ApiPreview({ server = false }) {
  const lines = server ? ['GET /index.html  200 OK','POST /upload  201 Created','Content-Type: multipart/form-data','File saved successfully'] : ['POST /api/auth/login  200','GET /api/patients  200','POST /api/sessions  201','GET /api/reports/daily  200']
  return <div className="overflow-hidden rounded-2xl bg-[#10141c] font-mono shadow-2xl"><div className="border-b border-white/10 px-5 py-3 text-xs text-slate-500">{server ? 'python-http-server — terminal' : 'physio-api — requests'}</div><div className="grid gap-4 p-6">{lines.map((line,i)=><div className="flex gap-3 text-sm" key={line}><span className={i%2?'text-amber-400':'text-emerald-400'}>{i%2?'›':'✓'}</span><span className="text-slate-200">{line}</span></div>)}<div className="mt-3 h-px bg-white/10" /><p className="text-xs text-slate-500">Server running · authenticated · response time 42ms</p></div></div>
}

function DataPreview() {
  return <div className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl"><div className="border-b px-5 py-3 text-sm"><b>Data Mining Notebook</b> <span className="ml-3 text-slate-400">Python 3</span></div><div className="grid gap-5 p-5 md:grid-cols-2"><div><code className="text-xs text-orange-700">model = KMeans(n_clusters=4)</code><div className="mt-5 flex h-56 items-end gap-2 border-b border-l p-3">{[45,72,34,88,59,95,64,79].map((h,i)=><i className="flex-1 rounded-t bg-orange-400" key={i} style={{height:`${h}%`}} />)}</div></div><div className="relative min-h-64 rounded-xl bg-slate-50">{Array.from({length:26},(_,i)=><i className={`absolute h-3 w-3 rounded-full ${['bg-orange-500','bg-sky-500','bg-violet-500','bg-emerald-500'][i%4]}`} key={i} style={{left:`${10+(i*29)%80}%`,top:`${10+(i*41)%78}%`}} />)}<span className="absolute bottom-3 left-4 text-xs text-slate-400">Customer clusters</span></div></div></div>
}

function GenevaPreview() {
  const logo = `${import.meta.env.BASE_URL}images/geneva-university.png`

  return (
    <div className="overflow-hidden rounded-2xl border border-indigo-300/20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3 text-xs text-slate-400">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2">University portal</span>
      </div>
      <div className="grid min-h-96 items-center gap-7 p-7 sm:grid-cols-[160px_1fr]">
        <img
          alt="Geneva International University logo"
          className="mx-auto w-40 rounded-2xl bg-white p-4 shadow-xl"
          src={logo}
        />
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-indigo-300">
            Front-end project
          </p>
          <h3 className="mt-3 text-3xl font-black text-white">Learn from anywhere</h3>
          <p className="mt-3 leading-7 text-indigo-100/80">
            Courses, admissions, faculty, university news, and account flows in one responsive multi-page experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-indigo-100">
            {['Courses', 'Admissions', 'News', 'Admin prototype'].map((label) => (
              <span className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-2" key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function WiscPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-300/20 bg-slate-900 p-6 shadow-2xl">
      <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-300">
        Assessment workflow
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          ['1', 'Select participant'],
          ['2', 'Run a timed subtest'],
          ['3', 'Capture answers'],
          ['4', 'Store the session'],
        ].map(([number, label]) => (
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4" key={number}>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-400/15 font-black text-emerald-300">
              {number}
            </span>
            <b className="text-sm text-slate-200">{label}</b>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-emerald-300/15 bg-emerald-400/[.06] p-4 text-sm text-emerald-100">
        Flutter interface · JSON question assets · SQLite session records
      </div>
    </div>
  )
}

function ProjectVisual({ slug }) {
  if (slug === 'tabeley') return <TabeleyPreview />
  if (slug === 'physio-center') return <ClinicPreview />
  if (slug === 'alc-orientation') return <AlcPreview />
  if (slug === 'acadia-store') return <StorePreview />
  if (slug === 'alhallak-prices') return <PricesPreview />
  if (slug === 'geneva-university') return <GenevaPreview />
  if (slug === 'wisc-assessment') return <WiscPreview />
  if (slug === 'image-editor') return <ImageEditorPreview />
  if (slug === 'physio-api') return <ApiPreview />
  if (slug === 'http-server') return <ApiPreview server />
  return <DataPreview />
}

function ProjectDemo({ slug }) {
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <div className="grid min-h-screen place-items-center bg-slate-950 text-white"><a href="./#projects">Project not found — return to portfolio</a></div>
  const theme = themes[project.tone] || themes.orange

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100" style={{ '--demo-accent': theme.accent, '--demo-soft': theme.soft }}>
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="section-shell flex min-h-18 items-center justify-between gap-4 py-4">
          <a className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white" href="./#projects"><FiArrowLeft /> Portfolio</a>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-400">Project case study</span>
        </div>
      </header>

      <main>
        <section className="section-padding overflow-hidden border-b border-white/10" style={{ background: `radial-gradient(circle at 85% 10%, ${theme.soft}, transparent 35%)` }}>
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="eyebrow" style={{ color: theme.accent }}>{project.type}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{project.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.externalDemo && <a className="focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-black text-slate-950" href={project.externalDemo} rel="noreferrer" style={{ background: theme.accent }} target="_blank"><FiExternalLink /> Live Demo</a>}
                {project.github && <a className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-bold hover:border-slate-500" href={project.github} rel="noreferrer" target="_blank"><FiGithub /> {project.githubVisibility === 'private' ? 'Private GitHub' : 'GitHub'}</a>}
              </div>
            </div>
            <div>
              <ProjectVisual slug={slug} />
              <p className="mt-3 text-center text-xs text-slate-500">
                Project overview illustration — not presented as a product screenshot.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_.9fr]">
            <div className="grid gap-5">
              <article className="surface-card rounded-2xl p-6"><p className="text-sm font-black" style={{ color: theme.accent }}>THE PROBLEM</p><p className="mt-3 leading-8 text-slate-300">{project.problem || 'The project turns a focused technical exercise into a usable, testable workflow with clear inputs and outputs.'}</p></article>
              <article className="surface-card rounded-2xl p-6"><p className="text-sm font-black" style={{ color: theme.accent }}>THE SOLUTION</p><p className="mt-3 leading-8 text-slate-300">{project.solution || project.description}</p></article>
            </div>
            <div>
              <h2 className="text-2xl font-black">What it does</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {project.features.map((feature) => <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4" key={feature}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full" style={{ background: theme.soft, color: theme.accent }}><FiCheck /></span><span className="text-sm font-bold text-slate-200">{feature}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <div className="section-shell"><p className="text-sm font-black text-white">Built with</p><div className="mt-4 flex flex-wrap gap-2">{project.tech.map((item)=><span className="rounded-lg border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-bold text-slate-300" key={item}>{item}</span>)}</div></div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDemo
