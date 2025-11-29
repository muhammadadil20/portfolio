import heroImg from '../assets/images/pic.png'
import cvFile from '../assets/images/cv.pdf'
import { useState, useEffect } from 'react'

const TITLES = ['Backend Developer', 'Aspiring Full‑Stack Java Developer']

export default function Hero() {
  return (
    <section id="home" className="max-w-5xl mx-auto px-4 min-h-screen pt-16 flex flex-col md:flex-row items-center justify-center py-12 gap-10 relative">
      <div className="flex flex-col justify-center gap-2 order-2 md:order-1">
        <p className="text-sm text-gray-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold mt-2">Mohammed Adil</h1>
        <div className="mt-2">
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-200 font-medium relative">
            <AnimatedTitles />
          </h2>
        </div>
        <p className="mt-6 max-w-2xl text-gray-600 dark:text-gray-300">
          Driven backend engineer focused on Java and Spring Boot—curious, adaptable, and dedicated to shipping resilient APIs and sound data models. I learn quickly, refine performance, and turn complex problems into simple, maintainable solutions with a collaborative growth mindset.
        </p>
        <div className="mt-8 flex gap-3 flex-wrap">
          <a href="#projects" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">View Projects</a>
          <a href="#contact" className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Contact Me</a>
          <a href={cvFile} download className="px-5 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-900/30">Download CV</a>
        </div>
      </div>
      <div className="order-1 md:order-2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-md relative">
        <a
          href="https://github.com/muhammadadil20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile via avatar"
          className="block w-full h-full group"
        >
          <img src={heroImg} alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <span className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-black/70 text-white dark:bg-white/70 dark:text-black backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.35 .73-4.05-1.62-4.05-1.62-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76 .08-.75 .08-.75 1.22 .09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01 .11-.79 .42-1.32 .76-1.62 -2.67-.3 -5.47-1.34 -5.47-5.96 0 -1.32 .47 -2.4 1.25 -3.25 -.13-.31 -.54-1.55 .12-3.22 0 0 1.02-.33 3.34 1.24 a11.6 11.6 0 0 1 6.08 0 c2.32 -1.57 3.34 -1.24 3.34 -1.24 .66 1.67 .25 2.91 .12 3.22 .78 .85 1.25 1.93 1.25 3.25 0 4.63 -2.8 5.66 -5.48 5.96 .43 .37 .81 1.1 .81 2.22 v3.29 c0 .33 .22 .7 .83 .58 A12 12 0 0 0 12 .5Z"/>
            </svg>
            View my GitHub profile
          </span>
        </a>
      </div>
        {/* Floating GitHub Button with soft pulse near avatar */}
        {/* Removed floating GitHub button per user request */}
    </section>
  )
}

function AnimatedTitles() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pause | deleting
  const gradients = [
    'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400',
    'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400'
  ]

  useEffect(() => {
    const full = TITLES[index]
    let timeout

    if (phase === 'typing') {
      if (text.length < full.length) {
        timeout = setTimeout(() => {
          setText(full.slice(0, text.length + 1))
        }, 120)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 0)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 1200)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(full.slice(0, text.length - 1))
        }, 60)
      } else {
        timeout = setTimeout(() => {
          setIndex(i => (i + 1) % TITLES.length)
          setPhase('typing')
        }, 0)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, phase, index])

  return (
    <span className="inline-flex items-center">
      <span className={`font-semibold tracking-wide bg-clip-text text-transparent transition-colors duration-300 ${gradients[index]}`}>{text}</span>
      <span className={`typing-caret ml-1 ${index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'}`} aria-hidden="true">|</span>
    </span>
  )
}
