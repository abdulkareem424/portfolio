import { FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi'

function Footer() {
  const email = 'alhallakabdulkareem@gmail.com'
  const whatsapp = '963983233965'
  const linkedin = 'https://www.linkedin.com/in/abdulkareem-alhallak-46a09b298/'
  const github = 'https://github.com/abdulkareem424'

  return (
    <footer className="bg-slate-950 py-9">
      <div className="section-shell flex flex-col gap-5 border-t border-slate-800 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-white">Abdulkareem Alhallak</p>
          <p className="mt-1 text-sm font-semibold text-slate-400">Full-Stack & Mobile Developer</p>
          <p className="mt-3 text-sm text-slate-500">© 2026 Abdulkareem Alhallak. All rights reserved.</p>
        </div>

        <div className="flex gap-3">
          <a aria-label="GitHub" className="focus-ring rounded-md border border-slate-800 p-3 text-slate-300 transition hover:border-orange-500 hover:text-orange-300" href={github} rel="noreferrer" target="_blank">
            <FiGithub />
          </a>
          <a aria-label="LinkedIn" className="focus-ring rounded-md border border-slate-800 p-3 text-slate-300 transition hover:border-orange-500 hover:text-orange-300" href={linkedin} rel="noreferrer" target="_blank">
            <FiLinkedin />
          </a>
          <a aria-label="Email" className="focus-ring rounded-md border border-slate-800 p-3 text-slate-300 transition hover:border-orange-500 hover:text-orange-300" href={`mailto:${email}`}>
            <FiMail />
          </a>
          <a aria-label="WhatsApp" className="focus-ring rounded-md border border-slate-800 p-3 text-slate-300 transition hover:border-orange-500 hover:text-orange-300" href={`https://wa.me/${whatsapp}`} rel="noreferrer" target="_blank">
            <FiMessageCircle />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
