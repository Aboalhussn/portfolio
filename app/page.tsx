'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  MapPin,
  Menu,
  Moon,
  Palette,
  Send,
  Sun,
  X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'TripGate',
    category: 'SaaS · UI/UX · Development',
    status: 'Currently Designing & Developing',
    description: 'A SaaS platform for travel and tourism companies in Iraq, bringing trips, bookings, customers, staff, and daily operations into one clear workspace.',
    role: 'Product Design · UI/UX · Frontend Development',
    type: 'SaaS Platform',
    tone: 'project-blue',
    visual: 'tripgate',
  },
  {
    number: '02',
    name: 'Koma',
    category: 'Mobile App · UI/UX Design',
    status: 'Design Completed',
    description: 'A modern dropshipping marketplace concept for Iraqi merchants, focused on simplifying product discovery and purchasing.',
    role: 'UI/UX Designer',
    type: 'User Flows · Wireframes · UI · Prototyping',
    tone: 'project-lime',
    visual: 'koma',
  },
  {
    number: '03',
    name: 'Tarhal',
    category: 'Travel Platform · UI/UX Design',
    status: 'Design Completed',
    description: 'A travel-focused digital experience that makes discovering and planning trips simpler through a clean, intuitive interface.',
    role: 'UI/UX Designer',
    type: 'UX · UI · Prototyping',
    tone: 'project-sand',
    visual: 'tarhal',
  },
  {
    number: '04',
    name: 'ClassGate',
    category: 'Web Application · Graduation Project',
    status: 'Completed',
    description: 'A student attendance management system for attendance tracking, classroom management, student records, and reporting.',
    role: 'UI/UX · Development',
    type: 'Academic Web Application',
    tone: 'project-violet',
    visual: 'classgate',
  },
]

const skills = {
  Design: ['UI/UX Design', 'Figma', 'Wireframing', 'Prototyping', 'User Flows', 'Responsive Design'],
  Development: ['HTML', 'CSS', 'JavaScript', 'React', 'C#', 'ASP.NET Core'],
  Tools: ['Figma', 'Git / GitHub', 'Framer', 'VS Code'],
}

export default function Page() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('abo-theme')
    const initial = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(initial)
    document.documentElement.classList.toggle('dark', initial)
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('abo-theme', next ? 'dark' : 'light')
  }

  return (
    <main>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`} aria-label="Main navigation">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="Aboalhassan home"><span className="brand-mark">AA<span>.</span></span></a>
        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {['Work', 'About', 'Experience', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun /> : <Moon />}</button>
          <a className="nav-cta" href="#contact">Let&apos;s Talk <ArrowUpRight /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal">Computer Engineer <span>/</span> UI/UX Designer <span>/</span> Developer</div>
          <h1 className="display reveal delay-1"><span className="hero-greeting">Hi, I&apos;m <em>Aboalhassan.</em></span><br /><AnimatedStatement /></h1>
          <p className="hero-intro reveal delay-2">I design and build digital products that turn real-world problems into simple, useful experiences.</p>
          <div className="hero-buttons reveal delay-3"><a href="#work" className="button button-dark">View my work <ArrowDown /></a><a href="#contact" className="text-link">Let&apos;s talk <ArrowUpRight /></a></div>
          <div className="location reveal delay-4"><MapPin /> Baghdad, Iraq <span className="status-dot" /> Available for select projects</div>
        </div>
        <div className="hero-visual reveal delay-2">
          <div className="portrait-wrap"><div className="portrait-photo"><img src="/aboalhassan.jpg" alt="Aboalhassan Ali" /></div><div className="portrait-note note-one">Designer + Developer</div><div className="portrait-note note-two">Based in Baghdad <MapPin /></div><div className="portrait-index">01 <span>—</span> 04</div></div>
        </div>
        <div className="hero-side-label">Scroll to explore <ArrowDown /></div>
      </section>

      <div className="marquee" aria-label="Design develop create solve repeat"><div className="marquee-track">DESIGN <span>✳</span> DEVELOP <span>✳</span> CREATE <span>✳</span> SOLVE <span>✳</span> REPEAT <span>✳</span> DESIGN <span>✳</span> DEVELOP <span>✳</span> CREATE <span>✳</span> SOLVE <span>✳</span> REPEAT <span>✳</span></div></div>

      <section className="work section-pad" id="work">
        <div className="section-heading reveal"><div><p className="eyebrow">01 — Selected work</p><h2 className="title">Built with<br /><em>intention.</em></h2></div><p className="section-description">A selection of products and digital experiences I&apos;ve designed and built. Scroll to explore the thinking behind each one.</p></div>
        <ProjectsScene />
      </section>

      <section className="about section-pad" id="about"><div className="about-visual reveal"><div className="about-photo"><img src="/Aboalhussnali.jpeg" alt="Aboalhassan Ali" /></div><div className="about-caption">Curious by nature.<br />Precise by craft.</div></div><div className="about-copy reveal"><p className="eyebrow">02 — A little about me</p><h2 className="title">I design.<br />I build.<br /><em>I solve problems.</em></h2><p style ={{marginTop: '2.6rem'}}>I&apos;m a Computer Engineering graduate from the University of Technology with a strong interest in UI/UX design and web development.</p><p>I enjoy turning ideas and real-world problems into simple, functional digital products — from designing user flows and interfaces to building the actual product.</p><a className="text-link" href="#contact">More about me <ArrowUpRight /></a></div></section>

      <section className="experience section-pad" id="experience"><div className="section-heading reveal"><div><p className="eyebrow">03 — Experience</p><h2 className="title">Where I&apos;m<br /><em>learning.</em></h2></div><p className="section-description">Early in my career, deeply invested in the details that make technology useful for people.</p></div><div className="experience-row reveal"><div className="experience-year">2026 — Present</div><div className="experience-main"><div className="company-mark">SW<span>ITCH</span></div><h3>Integration Trainee</h3><p>Currently training within the Integration Department at SWITCH, gaining practical experience in technology, integrations, and digital payment services.</p></div><div className="experience-company">SWITCH<br /><span>Iraqi Electronic Gate for Financial Services</span></div></div></section>

      <section className="skills section-pad"><div className="skills-intro reveal"><p className="eyebrow">04 — Toolkit</p><h2 className="title">A toolkit for<br /><em>making things real.</em></h2></div><div className="skills-grid">{Object.entries(skills).map(([name, items]) => <div className="skill-group reveal" key={name}><div className="skill-icon">{name === 'Design' ? <Palette /> : name === 'Development' ? <Code2 /> : <Layers3 />}</div><h3>{name}</h3><ul>{items.map((item) => <li key={item}><Check />{item}</li>)}</ul></div>)}</div></section>

      <section className="credentials section-pad"><div className="credentials-heading reveal"><p className="eyebrow">05 — The foundation</p><h2 className="title">Always<br /><em>curious.</em></h2></div><div className="credential-list"><div className="credential reveal"><span>2022 — 2026</span><div><h3>University of Technology</h3><p>Bachelor of Information Engineering<br />College of Computer Engineering</p></div><span className="credential-type">Education</span></div><div className="credential reveal"><span>2025</span><div><h3>CS50x</h3><p>Introduction to Computer Science<br />Harvard University</p></div><span className="credential-type">Certificate</span></div><div className="credential reveal"><span>Achievement</span><div><h3>2nd Place</h3><p>CS50 Final Project Competition</p></div><span className="credential-type">Recognition</span></div></div></section>

      <section className="process section-pad"><div className="process-heading reveal"><p className="eyebrow">06 — How I work</p><h2 className="title">From question<br />to <em>craft.</em></h2></div><div className="process-grid">{[['01', 'Understand', 'Understand the problem and the people behind it.'], ['02', 'Explore', 'Research, user flows and information architecture.'], ['03', 'Design', 'Wireframes → UI → Prototype.'], ['04', 'Build', 'Turn the design into a real product.'], ['05', 'Improve', 'Test, refine and iterate.']].map(([num, title, text]) => <div className="process-step reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="contact section-pad" id="contact"><div className="contact-top reveal"><p className="eyebrow">07 — Start a conversation</p><Send /></div><h2 className="contact-title reveal">Have a project<br />in <em>mind?</em></h2><div className="contact-bottom reveal"><div><p>Let&apos;s build something useful.</p><a className="contact-email" href="mailto:aboalhussnali@gmail.com">aboalhussnali@gmail.com <ArrowUpRight /></a></div><div className="contact-links"><a href="https://wa.me/9647713111325">WhatsApp</a><a href="https://instagram.com/mr_habzbz">Instagram</a><a href="https://t.me/mr_habzbz">Telegram</a></div></div></section>

      <footer><div className="footer-brand">AA<span>.</span></div><p>Computer Engineer · UI/UX Designer · Developer</p><p>Baghdad, Iraq · © 2026</p></footer>
    </main>
  )
}

function AnimatedStatement() {
  const prefersReducedMotion = useReducedMotion()
  const words = ['DESIGN', 'BUILD', 'CREATE']
  const randomCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'
  const [wordIndex, setWordIndex] = useState(0)
  const [display, setDisplay] = useState(words[0])

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(words[wordIndex])
      return
    }

    let frame = 0
    const target = words[wordIndex]
    const maxLength = Math.max(words[(wordIndex + words.length - 1) % words.length].length, target.length)
    const startedAt = performance.now()
    const duration = 700

    const scramble = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const resolvedCount = Math.floor(progress * maxLength)
      setDisplay(Array.from({ length: maxLength }, (_, index) => {
        if (index < resolvedCount) return target[index] ?? ''
        return randomCharacters[Math.floor(Math.random() * randomCharacters.length)]
      }).join(''))
      if (progress < 1) frame = requestAnimationFrame(scramble)
    }

    frame = requestAnimationFrame(scramble)
    return () => cancelAnimationFrame(frame)
  }, [wordIndex, prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = window.setTimeout(() => setWordIndex((current) => (current + 1) % words.length), 2500)
    return () => window.clearTimeout(timer)
  }, [wordIndex, prefersReducedMotion])

  const word = prefersReducedMotion ? words[wordIndex] : display
  return (
    <span className="animated-statement" aria-label={`I ${words[wordIndex].toLowerCase()}.`}>
      <span>I&nbsp;</span>
      <span className="word-stage" aria-hidden="true"><span className="hero-word">{word}</span></span>
    
    </span>
  )
}

const NODES = [
  { x: 170, y: 120 },
  { x: 470, y: 300 },
  { x: 180, y: 490 },
  { x: 460, y: 670 },
]

function wavePath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy)
  const nx = -dy / len
  const ny = dx / len
  const amp = 46
  const p1 = { x: a.x + dx / 3, y: a.y + dy / 3 }
  const p2 = { x: a.x + (2 * dx) / 3, y: a.y + (2 * dy) / 3 }
  const c = { x: a.x + dx / 6 + nx * amp, y: a.y + dy / 6 + ny * amp }
  return `M ${a.x} ${a.y} Q ${c.x.toFixed(1)} ${c.y.toFixed(1)} ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} T ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} T ${b.x} ${b.y}`
}

function ProjectsScene() {
  const trackRef = useRef<HTMLDivElement>(null)
  const segRefs = useRef<(SVGPathElement | null)[]>([])
  const [state, setState] = useState({ p: 0, hx: NODES[0].x, hy: NODES[0].y })
  const count = projects.length
  const segments = NODES.slice(0, -1).map((n, i) => wavePath(n, NODES[i + 1]))

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const track = trackRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const total = Math.max(rect.height - window.innerHeight, 1)
      const t = Math.min(Math.max(-rect.top / total, 0), 1)
      const p = t * (count - 1)
      const seg = Math.min(Math.floor(p), count - 2)
      const local = p - seg
      const path = segRefs.current[seg]
      let hx = NODES[seg].x
      let hy = NODES[seg].y
      if (path) {
        const pt = path.getPointAtLength(path.getTotalLength() * local)
        hx = pt.x
        hy = pt.y
      }
      setState((prev) => (Math.abs(prev.p - p) < 0.0005 ? prev : { p, hx, hy }))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (frame) cancelAnimationFrame(frame) }
  }, [count])

  const active = Math.min(count - 1, Math.floor(state.p + 0.03))

  return (
    <div className="scene-track" ref={trackRef} style={{ height: `${count * 100}vh` }}>
      <div className="scene-stage">
        <div className="scene-visual">
          <svg viewBox="0 0 640 780" role="img" aria-label="Project path: scroll to move from one project to the next">
            <defs>
              <radialGradient id="nodeHalo">
                <stop offset="0%" stopColor="#4f7bff" stopOpacity=".55" />
                <stop offset="55%" stopColor="#315ff5" stopOpacity=".18" />
                <stop offset="100%" stopColor="#315ff5" stopOpacity="0" />
              </radialGradient>
            </defs>
            {segments.map((d, i) => <path key={`g${i}`} d={d} className="trail-ghost" />)}
            {segments.map((d, i) => {
              const t = Math.min(Math.max(state.p - i, 0), 1)
              return <path key={`l${i}`} ref={(el) => { segRefs.current[i] = el }} d={d} pathLength={1} className="trail-lit" strokeDasharray="1" strokeDashoffset={1 - t} />
            })}
            <circle cx={state.hx} cy={state.hy} r="5" className="trail-head" />
            {NODES.map((n, i) => {
              const reached = state.p >= i - 0.03
              const w = projects[i].name.length * 13 + 44
              return (
                <g key={projects[i].name} transform={`translate(${n.x} ${n.y})`} className={`node ${reached ? 'node-on' : ''} ${i === active ? 'node-current' : ''}`} style={{ ['--d' as string]: `${i * 0.7}s` }}>
                  <circle r="96" fill="url(#nodeHalo)" className="node-halo" />
                  <circle r="44" className="node-ripple" />
                  <rect x={-w / 2} y="-21" width={w} height="42" rx="21" className="node-pill" />
                  <text textAnchor="middle" dominantBaseline="central" className="node-label">{projects[i].name}</text>
                </g>
              )
            })}
          </svg>
          <div className="scene-count" aria-hidden="true"><b>0{active + 1}</b> / 0{count}</div>
        </div>

        <div className="scene-info">
          {projects.map((project, index) => (
            <article className={`scene-card ${index === active ? 'is-active' : ''}`} key={project.name} aria-hidden={index !== active}>
              <div className="project-kicker"><span>{project.number}</span><span>{project.category}</span></div>
              <h3>{project.name}</h3>
              <span className="project-status">{project.status}</span>
              <p>{project.description}</p>
              <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Type / Focus</dt><dd>{project.type}</dd></div></dl>
              <a className="circle-link" href="#contact" aria-label={`Ask about ${project.name}`} tabIndex={index === active ? 0 : -1}><ArrowUpRight /></a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'koma') return <div className="phones koma-phones"><div className="phone phone-back"><div className="phone-screen shot-screen"><img src="/koma-app.jpg" alt="Koma app – products" style={{objectPosition:'bottom'}} /></div></div><div className="phone"><div className="phone-screen shot-screen"><img src="/koma-app.jpg" alt="Koma app – home screen" /></div></div></div>
  if (type === 'tarhal') return <div className="travel-screen"><div className="travel-top"><b>tarhal</b><span>Explore</span></div><div className="travel-image">DISCOVER<br /><strong>somewhere<br />beautiful</strong></div><div className="travel-chips"><span>Baghdad</span><span>Erbil</span><span>Basra</span></div></div>
  if (type === 'classgate') return <div className="dashboard"><div className="dash-sidebar"><b>class<br />gate.</b><span>Overview</span><span>Students</span><span>Reports</span></div><div className="dash-main"><div className="dash-head"><span>Good morning, Aboalhassan</span><b>Overview</b></div><div className="dash-stats"><span>Attendance <b>92.8%</b></span><span>Students <b>248</b></span><span>Classes <b>12</b></span></div><div className="dash-chart"><span>Weekly attendance</span><div className="chart-lines"><i /><i /><i /><i /><i /></div></div></div></div>
  return <div className="tripgate-ui"><div className="trip-sidebar"><b>tripgate<span>.</span></b><span>Overview</span><span>Bookings</span><span>Customers</span><span>Operations</span></div><div className="trip-main"><div className="trip-head"><b>Good morning, Aboalhassan</b><span>+ Create trip</span></div><div className="trip-cards"><div><small>Total bookings</small><b>1,284</b><i>+12.8%</i></div><div><small>Active trips</small><b>36</b><i>+4.2%</i></div><div><small>Revenue</small><b>$84.2k</b><i>+8.4%</i></div></div><div className="trip-chart"><small>Bookings overview <span>Last 30 days</span></small><div className="chart-wave" /></div></div></div>
}

