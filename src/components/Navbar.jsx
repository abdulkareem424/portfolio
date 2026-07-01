import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact']

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-slate-950/88 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a className="focus-ring rounded text-lg font-extrabold tracking-normal text-white" href="#home">
          Abdulkareem<span className="text-orange-500">.dev</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded text-sm font-semibold text-slate-300 transition hover:text-white"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          className="focus-ring hidden rounded-md bg-orange-500 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-orange-400 lg:inline-flex"
          href="#contact"
        >
          Hire Me
        </a>

        <button
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 text-slate-100 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                className="focus-ring rounded-md px-2 py-3 text-sm font-semibold text-slate-200"
                href={`#${item.toLowerCase()}`}
                key={item}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
            <a
              className="focus-ring mt-2 rounded-md bg-orange-500 px-4 py-3 text-center text-sm font-bold text-slate-950"
              href="#contact"
              onClick={closeMenu}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
