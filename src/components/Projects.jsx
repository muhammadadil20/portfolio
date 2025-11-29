import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-black">
      <div className="section">
        <h3 className="heading text-2xl mb-8">Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="group card gradient-glow"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <h4 className="font-semibold text-lg relative z-10">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 relative z-10">{p.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4 text-xs text-gray-700 dark:text-gray-300 relative z-10">
                {p.tech.map((t, i) => (
                  <li
                    key={i}
                    className="relative px-2 py-1 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400/60 dark:hover:border-blue-400/40"
                    style={{ animationDelay: `${(idx * 10) + i * 25}ms` }}
                  >
                    <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-opacity" />
                    <span className="relative z-10">{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring relative z-10 mt-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors"
              >
                <span>View</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
