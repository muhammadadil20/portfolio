function formatExperienceSince(startDate) {
  const now = new Date()
  let years = now.getFullYear() - startDate.getFullYear()
  let months = now.getMonth() - startDate.getMonth()
  let days = now.getDate() - startDate.getDate()
  if (days < 0) months -= 1
  if (months < 0) { years -= 1; months += 12 }
  if (years > 0) {
    return months > 0 ? `${years} yrs ${months} mos` : `${years} yrs`
  }
  return `${months} mos`
}

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-16">
      <h3 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h3>

      <div className="grid md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
        <div className="md:col-span-2 space-y-4 leading-relaxed">
          <p>
            I design and build robust, scalable Java backends with Spring Boot and REST APIs. My focus is clean architecture, strong database design, and performance tuning that keeps systems reliable under load.
          </p>
          <p>
            I’m also growing across the stack with React and Tailwind, aiming to deliver end‑to‑end features that look great and run fast.
          </p>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500" /> Strong foundation in Java, Spring Boot, and microservices</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" /> Experience designing, building, and deploying enterprise apps for performance and scale</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> REST API development and database management (PostgreSQL/MySQL)</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" /> CI/CD integration and reliable release workflows</li>
            <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" /> Recognized for problem‑solving, collaboration, and on‑time delivery</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Java','Spring Boot','Microservices','REST APIs','SQL','PostgreSQL','MySQL','Cloud','CI/CD','Docker','Git','React','Tailwind CSS'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 text-gray-700 dark:text-gray-300">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs removed as requested */}
        </div>

        <aside className="space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Quick Facts</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm marker:text-blue-600 dark:marker:text-blue-400">
            <li>{formatExperienceSince(new Date(2019, 9, 1))} overall experience (since Oct 2019)</li>
            <li>{formatExperienceSince(new Date(2022, 1, 1))} IT experience (since Feb 2022)</li>
            <li>Based in India</li>
            <li>Open to backend or full‑stack roles</li>
            <li>Enjoys clean code and good docs</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
