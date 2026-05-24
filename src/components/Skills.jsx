import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  { label: 'Frontend', emoji: '⚡', color: 'indigo', skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Backend', emoji: '🛠', color: 'violet', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Mongoose'] },
  { label: 'Databases', emoji: '🗄', color: 'cyan', skills: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'SQL'] },
  { label: 'Data & Analytics', emoji: '📊', color: 'emerald', skills: ['Power BI', 'Python', 'SQL Analytics', 'AWS Glue', 'AWS Redshift'] },
  { label: 'Tools', emoji: '🔧', color: 'orange', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'WordPress'] },
  { label: 'Soft Skills', emoji: '🤝', color: 'rose', skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Adaptability'] },
]

const colorMap = {
  indigo: 'dark:bg-indigo-500/10 bg-indigo-50 dark:border-indigo-500/20 border-indigo-200 dark:text-indigo-300 text-indigo-700',
  violet: 'dark:bg-violet-500/10 bg-violet-50 dark:border-violet-500/20 border-violet-200 dark:text-violet-300 text-violet-700',
  cyan: 'dark:bg-cyan-500/10 bg-cyan-50 dark:border-cyan-500/20 border-cyan-200 dark:text-cyan-300 text-cyan-700',
  emerald: 'dark:bg-emerald-500/10 bg-emerald-50 dark:border-emerald-500/20 border-emerald-200 dark:text-emerald-300 text-emerald-700',
  orange: 'dark:bg-orange-500/10 bg-orange-50 dark:border-orange-500/20 border-orange-200 dark:text-orange-300 text-orange-700',
  rose: 'dark:bg-rose-500/10 bg-rose-50 dark:border-rose-500/20 border-rose-200 dark:text-rose-300 text-rose-700',
}

function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

export default function Skills() {
  const head = useScrollReveal()
  return (
    <section id="skills" className="py-24 px-6 dark:bg-slate-950 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={head} className="reveal text-center mb-14">
          <SectionTag>Tech Stack</SectionTag>
          <h2 className="font-heading font-extrabold tracking-tight dark:text-white text-slate-900" style={{fontSize:'clamp(2rem,4vw,2.8rem)'}}>
            Tools I <span className="gradient-text dark:gradient-text gradient-text-light">work with</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => {
            const ref = useScrollReveal(i * 60)
            return (
              <div key={g.label} ref={ref}
                className="reveal p-6 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900 bg-slate-50 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5">
                <h3 className="font-heading font-bold text-sm dark:text-slate-200 text-slate-700 mb-4 flex items-center gap-2">
                  <span>{g.emoji}</span> {g.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map(s => (
                    <span key={s} className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-colors ${colorMap[g.color]}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
