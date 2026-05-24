import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

function SunIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const { dark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'dark:bg-slate-950/90 bg-white/90 backdrop-blur-lg border-b dark:border-slate-800 border-slate-200 shadow-sm' : 'bg-transparent'}`}>
        <a href="#hero" className="font-heading font-bold text-xl dark:text-white text-slate-900 tracking-tight">
          Ajay<span className="text-indigo-500">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm font-medium tracking-wide dark:text-slate-400 text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border dark:bg-slate-800 bg-slate-100 dark:border-slate-700 border-slate-200 dark:text-slate-300 text-slate-600 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all">
            {dark ? <SunIcon /> : <MoonIcon />}
            <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
          </button>
          <a href="mailto:ajayadav7376@gmail.com"
            className="hidden md:inline-flex px-4 py-1.5 rounded-lg text-sm font-semibold bg-indigo-500 hover:bg-indigo-600 text-white transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20">
            Hire Me
          </a>
          <button onClick={() => setMenuOpen(v => !v)} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
            <span className={`block w-5 h-0.5 dark:bg-slate-300 bg-slate-700 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <span className={`block w-5 h-0.5 dark:bg-slate-300 bg-slate-700 rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-0.5 dark:bg-slate-300 bg-slate-700 rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-40 dark:bg-slate-950/97 bg-white/97 backdrop-blur-sm flex flex-col items-center justify-center gap-8" onClick={() => setMenuOpen(false)}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-heading font-semibold text-2xl dark:text-slate-100 text-slate-800 hover:text-indigo-500 transition-colors">{l}</a>
          ))}
          <a href="mailto:ajayadav7376@gmail.com" className="mt-2 px-8 py-3 rounded-xl bg-indigo-500 text-white font-semibold text-lg">Hire Me</a>
        </div>
      )}
    </>
  )
}
