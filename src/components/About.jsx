import { useScrollReveal } from '../hooks/useScrollReveal'

const cards = [
  { icon: '⚡', title: 'Frontend Dev', desc: 'React, Tailwind, responsive design & pixel-perfect UIs' },
  { icon: '🛠', title: 'Backend & APIs', desc: 'Node.js, Express, REST APIs, JWT Auth & Mongoose' },
  { icon: '📊', title: 'Data Analytics', desc: 'Power BI, SQL, Python — turning data into decisions' },
  { icon: '🤖', title: 'AI / ML', desc: 'B.Tech in AI & ML — building intelligent systems' },
]

function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

export default function About() {
  const left = useScrollReveal()
  const right = useScrollReveal(100)

  return (
    <section id="about" className="py-24 px-6 dark:bg-slate-900 bg-slate-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div ref={left} className="reveal-left">
          <SectionTag>About Me</SectionTag>
          <h2 className="font-heading font-extrabold leading-tight tracking-tight mb-4 dark:text-white text-slate-900" style={{fontSize:'clamp(2rem,4vw,2.8rem)'}}>
            The person <span className="gradient-text dark:gradient-text gradient-text-light">behind the code</span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 mb-6" />
          <div className="space-y-4 dark:text-slate-400 text-slate-500 font-light leading-relaxed">
            <p>I'm a final-year <span className="dark:text-slate-200 text-slate-700 font-medium">B.Tech student in AI & Machine Learning</span> at ITM Gorakhpur (Class of 2026), passionate about building products at the intersection of great UI and smart data.</p>
            <p>From engineering secure backend APIs to analyzing <span className="dark:text-slate-200 text-slate-700 font-medium">103,000+ ride bookings</span> for an OLA platform analytics project, I love working full-stack and finding stories in data.</p>
            <p>As a <span className="dark:text-slate-200 text-slate-700 font-medium">Kho-Kho team captain</span> (AKTU Zonal Runner-Up) and <span className="dark:text-slate-200 text-slate-700 font-medium">NEC IIT Bombay Core Member</span>, I bring leadership and energy to everything I do.</p>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="mailto:ajayadav7376@gmail.com"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20">
              Say Hello 👋
            </a>
            <a href="https://www.linkedin.com/in/ajayadav7769/" target="_blank" rel="noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold border dark:border-slate-700 border-slate-200 dark:text-slate-300 text-slate-600 hover:border-indigo-400 hover:text-indigo-500 transition-all">
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right */}
        <div ref={right} className="reveal-right grid grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <div key={i}
              className="p-5 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-800/50 bg-white shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-3">{c.icon}</div>
              <h4 className="font-heading font-bold text-sm dark:text-slate-100 text-slate-800 mb-1">{c.title}</h4>
              <p className="text-xs dark:text-slate-400 text-slate-500 font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
