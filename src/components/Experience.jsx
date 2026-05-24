import { useScrollReveal } from '../hooks/useScrollReveal'

const jobs = [
  {
    role: 'MERN Stack Intern',
    company: 'AppWorks Technologies Pvt. Ltd.',
    location: 'Lucknow',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Contributed to end-to-end development of a full-stack web application using MongoDB, Express.js, React.js, and Node.js.',
      'Implemented MongoDB schemas with Mongoose to model application data for user profiles and authentication flows.',
      'Built and tested RESTful APIs, integrated JWT-based authentication and protected route middleware.',
    ],
    badge: '🏢',
  },
  {
    role: 'Web Developer Intern',
    company: 'Oasis Infobyte',
    location: 'Remote',
    period: 'Nov 2024 – Dec 2024',
    points: [
      'Built responsive web pages using HTML5 and CSS3, ensuring cross-browser compatibility and mobile-first design.',
      'Leveraged Tailwind CSS to create highly customized, responsive UI components including forms, buttons, and navigation.',
    ],
    badge: '💻',
  },
]

function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

export default function Experience() {
  const head = useScrollReveal()
  return (
    <section id="experience" className="py-24 px-6 dark:bg-slate-900 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div ref={head} className="reveal mb-12">
          <SectionTag>Experience</SectionTag>
          <h2 className="font-heading font-extrabold tracking-tight dark:text-white text-slate-900" style={{fontSize:'clamp(2rem,4vw,2.8rem)'}}>
            Where I've <span className="gradient-text dark:gradient-text gradient-text-light">worked</span>
          </h2>
          <div className="w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </div>

        <div className="relative pl-8 border-l-2 dark:border-slate-800 border-slate-200 space-y-8">
          {jobs.map((job, i) => {
            const ref = useScrollReveal(i * 120)
            return (
              <div key={i} ref={ref} className="reveal relative">
                {/* Dot */}
                <div className="absolute -left-[2.6rem] top-5 w-4 h-4 rounded-full bg-indigo-500 border-4 dark:border-slate-900 border-slate-50 shadow-lg shadow-indigo-500/40" />

                <div className="p-6 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-800/50 bg-white shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300 hover:shadow-md group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="font-heading font-bold dark:text-white text-slate-900 text-lg">{job.role}</div>
                      <div className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mt-0.5">
                        {job.company} · {job.location}
                      </div>
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full dark:bg-slate-700 bg-slate-100 dark:text-slate-300 text-slate-500 border dark:border-slate-600 border-slate-200">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm dark:text-slate-400 text-slate-500 font-light">
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
