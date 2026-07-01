import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'

const stack = ['React', 'Flutter', 'Laravel', 'Node.js', 'SQL', 'Docker']

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950" id="home">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0),rgba(15,23,42,0.9)),linear-gradient(180deg,rgba(249,115,22,0.08),rgba(15,23,42,0)_46%)]" />
      <div className="section-shell relative grid min-h-[calc(84svh-64px)] items-center gap-10 py-14 lg:grid-cols-[1.18fr_0.82fr]">
        <div>
          <p className="eyebrow">Full-Stack & Mobile Developer</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Abdulkareem Alhallak
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build web, mobile, and backend systems using React, Flutter, Laravel,
            Node.js, and SQL databases.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Useful software, clear business logic, and reliable delivery for real
            business workflows.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 font-bold text-slate-950 transition hover:bg-orange-400"
              href="#projects"
            >
              View Projects <FiArrowRight />
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-3 font-bold text-white transition hover:border-orange-500 hover:text-orange-200"
              href="#contact"
            >
              Contact Me <FiMail />
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 px-5 py-3 font-bold text-white transition hover:border-slate-500"
              href="./cv.pdf"
            >
              Download CV <FiDownload />
            </a>
          </div>
        </div>

        <div className="surface-card hidden rounded-lg p-5 lg:block">
          <div className="rounded-md border border-slate-700/70 bg-slate-950/78 p-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-sm font-bold text-white">System Builder</p>
                <p className="mt-1 text-xs text-slate-400">Web, mobile, APIs, databases</p>
              </div>
              <span className="rounded-md bg-orange-500/12 px-3 py-1 text-xs font-bold text-orange-300">
                Available
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {stack.map((item) => (
                <div className="rounded-md border border-slate-800 bg-slate-900/70 px-4 py-3" key={item}>
                  <span className="text-sm font-bold text-slate-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-orange-500/25 bg-orange-500/10 p-4">
              <p className="text-sm font-semibold leading-7 text-orange-100">
                Practical systems for reservations, clinics, dashboards, APIs, and
                deployment-ready business tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
