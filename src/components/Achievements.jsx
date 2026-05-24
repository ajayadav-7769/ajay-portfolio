import { useScrollReveal } from '../hooks/useScrollReveal'

const achievements = [
  {
    badge: '🏅',
    title: 'NEC 2025 — Advanced Track (Rank 124)',
    desc: 'National Entrepreneurship Challenge by E-Cell, IIT Bombay — a 6-month nationwide competition to develop entrepreneurship across colleges.',
    tag: 'IIT Bombay',
    color: 'indigo',
  },
  {
    badge: '🏆',
    title: 'AKTU Zonal Sports Meet — Runner Up',
    desc: 'Led college Kho-Kho team as Captain, securing Runner-Up in Gorakhpur Zone across 14 AKTU-affiliated colleges.',
    tag: 'Team Captain',
    color: 'violet',
  },
  {
    badge: '🚀',
    title: 'NEC Core Member — Startup Spark',
    desc: 'Core member of the ITM Startup Spark Team, working to ignite entrepreneurial culture and create impact across campus.',
    tag: 'Leadership',
    color: 'emerald',
  },
]

const tagColor = {
  indigo: 'dark:bg-indigo-500/10 bg-indigo-50 dark:text-indigo-300 text-indigo-700 border dark:border-indigo-500/20 border-indigo-200',
  violet: 'dark:bg-violet-500/10 bg-violet-50 dark:text-violet-300 text-violet-700 border dark:border-violet-500/20 border-violet-200',
  emerald: 'dark:bg-emerald-500/10 bg-emerald-50 dark:text-emerald-300 text-emerald-700 border dark:border-emerald-500/20 border-emerald-200',
}

function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

export default function Achievements() {
  const head = useScrollReveal()
  return (
    <section id="achievements" className="py-24 px-6 dark:bg-slate-950 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={head} className="reveal mb-14">
          <SectionTag>Achievements</SectionTag>
          <h2 className="font-heading font-extrabold tracking-tight dark:text-white text-slate-900" style={{fontSize:'clamp(2rem,4vw,2.8rem)'}}>
            Beyond <span className="gradient-text dark:gradient-text gradient-text-light">the screen</span>
          </h2>
          <div className="w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const ref = useScrollReveal(i * 100)
            return (
              <div key={i} ref={ref}
                className="reveal p-6 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900 bg-slate-50 hover:-translate-y-2 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">
                <div className="text-4xl mb-4">{a.badge}</div>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColor[a.color]} mb-3 inline-block`}>
                  {a.tag}
                </span>
                <h3 className="font-heading font-bold dark:text-white text-slate-900 text-sm leading-snug mb-2">{a.title}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-500 font-light leading-relaxed">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
