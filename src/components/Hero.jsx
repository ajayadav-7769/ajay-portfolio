import { useEffect, useRef } from 'react'

const stats = [
  { val: '2+', label: 'Internships' },
  { val: '5+', label: 'Projects' },
  { val: '4+', label: 'Certifications' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], raf

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function mkP() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        a: Math.random() * 0.6 + 0.2
      }
    }
    for (let i = 0; i < 80; i++) particles.push(mkP())

    function draw() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.a * 0.7})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.13 * (1 - d / 110)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden dark:bg-slate-950 bg-slate-50">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border dark:border-slate-700 border-slate-300 dark:bg-slate-900/60 bg-white/60 backdrop-blur mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium dark:text-slate-400 text-slate-500 tracking-wide">Open to Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="font-heading font-extrabold leading-[1.05] tracking-tight mb-4" style={{fontSize:'clamp(2.8rem,6vw,5rem)'}}>
            <span className="dark:text-white text-slate-900">Ajay Kumar</span><br/>
            <span className="gradient-text dark:gradient-text gradient-text-light">Yadav</span>
          </h1>

          {/* Tagline */}
          <p className="dark:text-slate-400 text-slate-500 text-lg mb-8 max-w-md font-light leading-relaxed">
            <span className="dark:text-slate-200 text-slate-700 font-medium">MERN Stack Developer & Data Analyst</span> — building seamless web experiences and turning raw data into insight.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-sm border dark:border-slate-700 border-slate-300 dark:text-slate-200 text-slate-700 dark:hover:border-indigo-500 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all">
              Get In Touch
            </a>
            <a href="/cv/Ajay Kumar Resume FED.pdf" download="Ajay Kumar Resume FED.pdf"
              className="px-6 py-3 rounded-xl font-semibold text-sm border border-violet-500/50 text-violet-500 hover:bg-violet-500/10 transition-all">
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 flex-wrap">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-heading font-bold text-3xl dark:text-white text-slate-900">
                  {s.val}
                </div>
                <div className="text-xs uppercase tracking-widest dark:text-slate-500 text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Profile Card */}
        <div className="hidden md:block animate-float">
          <div className="w-64 rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900 bg-white shadow-2xl p-6">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-heading font-bold text-2xl text-white mx-auto mb-3 shadow-lg shadow-indigo-500/30">
              AK
            </div>
            <h3 className="font-heading font-bold text-center dark:text-white text-slate-900 text-sm mb-0.5">Ajay Kumar Yadav</h3>
            <p className="text-center text-xs dark:text-slate-500 text-slate-400 mb-4">Gorakhpur, Uttar Pradesh</p>

            {/* Pills */}
            <div className="flex flex-wrap gap-1.5 justify-center mb-4">
              {['React.js','Node.js','MongoDB','Python','SQL','Power BI'].map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full dark:bg-indigo-500/10 bg-indigo-50 dark:border-indigo-500/20 border-indigo-200 border dark:text-indigo-300 text-indigo-600 font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="border-t dark:border-slate-800 border-slate-100 pt-3 space-y-2">
              {[
                { icon: '📞', text: '+91 7355979473' },
                { icon: '✉️', text: 'ajayadav7376@gmail.com' },
                { icon: '🌐', text: 'github.com/ajayadav-7769' },
              ].map(r => (
                <div key={r.text} className="flex items-center gap-2 text-xs dark:text-slate-400 text-slate-500">
                  <span>{r.icon}</span>
                  <span className="truncate">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
