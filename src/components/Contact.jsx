import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi'

const email = 'alhallakabdulkareem@gmail.com'
const whatsapp = '963983233965'
const whatsappText =
  'Hello Abdulkareem, I saw your portfolio and I want to discuss a project.'

const contactLinks = [
  {
    label: 'Email',
    href: `mailto:${email}`,
    icon: FiMail,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappText)}`,
    icon: FiMessageCircle,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abdulkareem-alhallak-46a09b298/',
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/abdulkareem424',
    icon: FiGithub,
  },
]

function Contact() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatus({ type: 'idle', message: '' })

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message right now.')
      }

      event.currentTarget.reset()
      setStatus({
        type: 'success',
        message: 'Message sent. I will reply as soon as possible.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message,
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section-padding border-y border-slate-800 bg-slate-900/35" id="contact">
      <div className="section-shell">
        <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s build something useful.</h2>
            <p className="section-lead">
              Have a project, job opportunity, or collaboration in mind? Send me a
              message and let&apos;s discuss how I can help.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  className="focus-ring surface-card flex items-center gap-3 rounded-lg px-4 py-4 font-bold text-slate-100 transition hover:border-orange-500"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  target={href.startsWith('http') ? '_blank' : undefined}
                >
                  <Icon className="text-orange-400" /> {label}
                </a>
              ))}
            </div>
          </div>

          <form className="surface-card grid gap-4 rounded-lg p-5" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-200">Name</span>
              <input
                className="focus-ring rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100"
                name="name"
                placeholder="Your name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-200">Email</span>
              <input
                className="focus-ring rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-200">Message</span>
              <textarea
                className="focus-ring min-h-36 resize-y rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100"
                name="message"
                placeholder="Tell me about your project, role, or idea."
                required
              />
            </label>
            {status.message && (
              <p
                className={`rounded-md border px-4 py-3 text-sm font-bold ${
                  status.type === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                    : 'border-red-500/30 bg-red-500/10 text-red-200'
                }`}
              >
                {status.message}
              </p>
            )}
            <button
              className="focus-ring rounded-md bg-orange-500 px-5 py-3 font-black text-slate-950 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-65"
              disabled={isSending}
              type="submit"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
