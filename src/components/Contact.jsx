import { useScrollReveal } from '../hooks/useScrollReveal'

function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ajayadav7769/',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ajayadav-7769',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact" className="py-24 px-6 dark:bg-slate-900 bg-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={ref} className="reveal">
          <SectionTag>Contact</SectionTag>
          <h2 className="font-heading font-extrabold tracking-tight dark:text-white text-slate-900 mb-4" style={{fontSize:'clamp(2.2rem,5vw,3.5rem)'}}>
            Let's build something <span className="gradient-text dark:gradient-text gradient-text-light">together</span>
          </h2>
          <p className="dark:text-slate-400 text-slate-500 font-light mb-10 text-lg">
            Open to Frontend Developer & AI/ML roles. Drop me a message!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:ajayadav7376@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
              </svg>
              Send Email
            </a>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border dark:border-slate-700 border-slate-200 dark:text-slate-300 text-slate-600 dark:hover:border-indigo-500 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all">
                {s.icon} {s.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm dark:text-slate-500 text-slate-400">
            <span>📍 Gorakhpur, Uttar Pradesh</span>
            <a href="tel:+917355979473" className="hover:text-indigo-500 transition-colors">📞 +91 7355979473</a>
            <a href="mailto:ajayadav7376@gmail.com" className="hover:text-indigo-500 transition-colors">✉️ ajayadav7376@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}
