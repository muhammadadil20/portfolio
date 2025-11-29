import { useEffect, useState } from 'react'

const links = [
{ id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
    return 'dark'
  })

  useEffect(() => {
    const ids = ['home', ...links.map(l => l.id)]
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.6 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  const toggleMenu = () => setOpen(o => !o)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 h-16">
        <a href="#home" className="font-logo text-2xl sm:text-3xl text-gray-900 dark:text-gray-100 leading-none select-none">muhammadadil20</a>
        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-6 text-base sm:text-lg items-center">
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={
                  active === l.id
                    ? 'inline-block px-3 py-1 rounded-md font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70'
                    : 'inline-block px-3 py-1 rounded-md font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 transition-colors duration-200'
                }
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 relative z-10 transition-transform duration-500 group-hover:rotate-12">
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-14.5a1 1 0 0 1-1-1V1.75a1 1 0 1 1 2 0V2.5a1 1 0 0 1-1 1Zm0 17.5a1 1 0 0 1-1-1v-.75a1 1 0 1 1 2 0v.75a1 1 0 0 1-1 1ZM4.5 13a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.75a1 1 0 1 1 0 2H4.5Zm14.25 0a1 1 0 1 1 0-2h.75a1 1 0 1 1 0 2h-.75ZM6.05 7.11A1 1 0 0 1 5.34 5.7l.53-.53a1 1 0 1 1 1.41 1.41l-.53.53a1 1 0 0 1-.7.29Zm11.59 11.59a1 1 0 0 1-.7-.29l-.53-.53a1 1 0 1 1 1.41-1.41l.53.53a1 1 0 0 1-.71 1.7ZM7.28 18.7a1 1 0 0 1-.7-.29l-.53-.53a1 1 0 1 1 1.41-1.41l.53.53a1 1 0 0 1-.71 1.7Zm9.89-11.59a1 1 0 0 1-.7-.29l-.53-.53a1 1 0 1 1 1.41-1.41l.53.53a1 1 0 0 1-.71 1.7Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 relative z-10 transition-transform duration-500 group-hover:rotate-12">
                  <path d="M11.75 2.012a.75.75 0 0 1 .862-.967 10 10 0 0 1 7.948 8.945.75.75 0 0 1-.53.797 8.5 8.5 0 0 0-5.97 5.97.75.75 0 0 1-.797.53A10 10 0 0 1 10.783 2.874a.75.75 0 0 1 .967-.862Zm-.401 3.143a8.5 8.5 0 0 0 6.503 11.292 7 7 0 1 1-6.503-11.292Z" />
                </svg>
              )}
            </button>
          </li>
        </ul>
        {/* Mobile controls */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 relative z-10 transition-transform duration-500 group-hover:rotate-12">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-14.5a1 1 0 0 1-1-1V1.75a1 1 0 1 1 2 0V2.5a1 1 0 0 1-1 1Zm0 17.5a1 1 0 0 1-1-1v-.75a1 1 0 1 1 2 0v.75a1 1 0 0 1-1 1ZM4.5 13a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.75a1 1 0 1 1 0 2H4.5Zm14.25 0a1 1 0 1 1 0-2h.75a1 1 0 1 1 0 2h-.75ZM6.05 7.11A1 1 0 0 1 5.34 5.7l.53-.53a1 1 0 1 1 1.41 1.41l-.53.53a1 1 0 0 1-.7.29Zm11.59 11.59a1 1 0 0 1-.7-.29l-.53-.53a1 1 0 1 1 1.41-1.41l.53.53a1 1 0 0 1-.71 1.7ZM7.28 18.7a1 1 0 0 1-.7-.29l-.53-.53a1 1 0 1 1 1.41-1.41l.53.53a1 1 0 0 1-.71 1.7Zm9.89-11.59a1 1 0 0 1-.7-.29l-.53-.53a1 1 0 1 1 1.41-1.41l.53.53a1 1 0 0 1-.71 1.7Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 relative z-10 transition-transform duration-500 group-hover:rotate-12">
                <path d="M11.75 2.012a.75.75 0 0 1 .862-.967 10 10 0 0 1 7.948 8.945.75.75 0 0 1-.53.797 8.5 8.5 0 0 0-5.97 5.97.75.75 0 0 1-.797.53A10 10 0 0 1 10.783 2.874a.75.75 0 0 1 .967-.862Zm-.401 3.143a8.5 8.5 0 0 0 6.503 11.292 7 7 0 1 1-6.503-11.292Z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu panel */}
      <div
        className={`sm:hidden ${open ? 'block' : 'hidden'} border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/95 backdrop-blur`}
      >
        <ul className="px-4 py-3 space-y-2">
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={closeMenu}
                className={
                  active === l.id
                    ? 'block px-3 py-2 rounded-md font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 shadow-sm'
                    : 'block px-3 py-2 rounded-md font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors duration-200'
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
