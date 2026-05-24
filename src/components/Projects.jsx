import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    num: '01',
    type: 'Full Stack',
    title: 'SAFAR — Travel App',
    desc: 'A full-stack travel platform (सफर = journey) with secure authentication, MVC architecture, JWT & bcrypt, and MongoDB Atlas cloud database. Designed for community-driven trip planning across India.',
    stack: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'bcrypt', 'Postman'],
    link: 'https://github.com/ajayadav-7769/SAFAR',
    linkText: 'GitHub →',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    num: '02',
    type: 'Backend',
    title: 'User Authentication System',
    desc: 'Architected secure backend APIs for registration and login with JWT stateless auth, protected middleware routes, MongoDB storage, global error handling, and full Postman-tested endpoint coverage.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Middleware'],
    link: 'https://github.com/ajayadav-7769',
    linkText: 'GitHub →',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    num: '03',
    type: 'Data Analytics',
    title: 'OLA Platform Analytics',
    desc: 'Analyzed 103,024 bookings from OLA, uncovering ₹3.5Cr revenue insights, cancellation patterns by driver/customer side, fleet performance across vehicle categories, and payment ecosystem trends.',
    stack: ['Python', 'SQL', 'Power BI', 'Data Analysis', 'Business Intelligence'],
    link: 'https://lnkd.in/gCCX9g9x',
    linkText: 'View Presentation →',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    num: '04',
    type: 'Frontend',
    title: "DEV'S NOTES",
    desc: 'A static digital E-Book library and study resource hub designed for students — clean, fully responsive layout with structured HTML/CSS, optimized for accessing technical study material.',
    stack: ['HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
    link: 'https://github.com/ajayadav-7769',
    linkText: 'GitHub →',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

export default function Projects() {
  const head = useScrollReveal()
  return (
    <section id="projects" className="py-24 px-6 dark:bg-slate-950 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={head} className="reveal mb-14">
          <SectionTag>Projects</SectionTag>
          <h2 className="font-heading font-extrabold tracking-tight dark:text-white text-slate-900" style={{fontSize:'clamp(2rem,4vw,2.8rem)'}}>
            Things I've <span className="gradient-text dark:gradient-text gradient-text-light">built</span>
          </h2>
          <div className="w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const ref = useScrollReveal(i * 80)
            return (
              <div key={i} ref={ref}
                className="reveal group relative p-6 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900 bg-slate-50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400 dark:hover:border-indigo-500/50">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="text-xs font-mono dark:text-slate-500 text-slate-400 mb-2 tracking-wider">{p.num} — {p.type}</div>
                <h3 className="font-heading font-bold text-lg dark:text-white text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-500 font-light leading-relaxed mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map(s => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-medium">
                      {s}
                    </span>
                  ))}
                </div>

                <a href={p.link} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
                  {p.linkText}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
