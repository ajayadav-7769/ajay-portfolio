import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ── EDIT CERTIFICATES HERE ──────────────────────────────────────────────────
// image: paste a direct image URL (e.g. from imgbb, cloudinary, or raw GitHub)
// link:  paste the certificate verification URL
const certs = [
  {
    title: 'SQL — Beginner to Advanced for Data Professionals',
    issuer: 'Codebasics',
    detail: '11h 39min · 1.5M record real dataset',
    date: 'Jan 2026',
    image: '', // e.g. 'https://i.ibb.co/xxx/sql-cert.jpg'
    link: '',  // e.g. 'https://codebasics.io/certificate/CB-50-641973'
  },
  {
    title: 'Data Engineering Basics for Data Analysts',
    issuer: 'Codebasics',
    detail: 'ETL pipelines · AWS S3, Glue, Athena, Redshift',
    date: 'Jan 2026',
    image: '',
    link: '',
  },
  {
    title: 'Power BI Micro Course',
    issuer: 'Skill Course',
    detail: 'Data visualization & business intelligence dashboards',
    date: 'Dec 2025',
    image: '',
    link: '',
  },
  {
    title: 'O-Level (Computer Applications)',
    issuer: 'NIELIT',
    detail: 'National Institute of Electronics & Information Technology',
    date: 'Jan 2026',
    image: '',
    link: '',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function PlaceholderImg() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 dark:text-slate-600 text-slate-300">
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21,15 16,10 5,21"/>
      </svg>
      <p className="text-xs">Add certificate image</p>
    </div>
  )
}

function CertCard({ cert, delay }) {
  const ref = useScrollReveal(delay)
  const [imgErr, setImgErr] = useState(false)

  return (
    <div ref={ref}
      className="reveal flex flex-col rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900 bg-white overflow-hidden group hover:-translate-y-2 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">

      {/* Image area */}
      <div className="relative w-full aspect-video dark:bg-slate-800 bg-slate-100 border-b dark:border-slate-800 border-slate-200 overflow-hidden">
        {cert.image && !imgErr ? (
          <img
            src={cert.image}
            alt={cert.title}
            onError={() => setImgErr(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <PlaceholderImg />
        )}
        {/* Date badge */}
        <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full dark:bg-slate-950/80 bg-white/80 backdrop-blur dark:text-indigo-300 text-indigo-600 border dark:border-slate-700 border-slate-200">
          {cert.date}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-heading font-bold text-sm dark:text-white text-slate-900 leading-snug mb-1">
          {cert.title}
        </h4>
        <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mb-1">{cert.issuer}</p>
        <p className="text-xs dark:text-slate-400 text-slate-500 font-light mb-4 flex-1">{cert.detail}</p>

        {cert.link ? (
          <a href={cert.link} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 dark:text-indigo-400 border border-indigo-400/40 dark:border-indigo-500/30 px-3 py-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors w-fit">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            View Certificate
          </a>
        ) : (
          <span className="text-xs dark:text-slate-600 text-slate-300 italic">Add link in Certifications.jsx</span>
        )}
      </div>
    </div>
  )
}

function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  )
}

export default function Certifications() {
  const head = useScrollReveal()
  return (
    <section id="certifications" className="py-24 px-6 dark:bg-slate-900 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div ref={head} className="reveal mb-14">
          <SectionTag>Certifications</SectionTag>
          <h2 className="font-heading font-extrabold tracking-tight dark:text-white text-slate-900" style={{fontSize:'clamp(2rem,4vw,2.8rem)'}}>
            Always <span className="gradient-text dark:gradient-text gradient-text-light">learning</span>
          </h2>
          <div className="w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          <p className="mt-3 text-sm dark:text-slate-500 text-slate-400 font-light">
            Add your certificate images & links inside <code className="dark:bg-slate-800 bg-slate-200 px-1 rounded text-indigo-500 text-xs">src/components/Certifications.jsx</code>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
