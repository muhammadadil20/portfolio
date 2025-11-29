const roles = [
  {
    company: 'Infosys Limited',
    title: 'Technology Analyst',
    location: 'Mangalore, India',
    period: 'Feb 2022 – Present',
    projects: [
      {
        name: 'Pharmacy Credential Platform',
        bullets: [
          'Developed a Java Spring Boot application that centralized license and certification information for employees.',
          'Implemented a scalable microservices architecture that processes multiple file sources through Azure Cron jobs.',
          'Aggregated license data to build detailed employee profiles and generated analytical reports for tracking progress.',
          'Optimized performance to generate over 100K+ employee profiles within 5 minutes, integrating data from 10+ sources.',
          'Collaborated with QA teams to ensure data accuracy and smooth delivery to business stakeholders.',
        ],
      },
      {
        name: 'ROCM Foundation – PCF to Azure Cloud Migration',
        designation: 'Senior System Engineer',
        bullets: [
          'Containerized existing applications by creating configuration files including Dockerfile, deployment.yaml, service.yaml, ingress.yaml, secrets.yaml, configmap.yaml, and autoscaler files.',
          'Designed and maintained Jenkins CI/CD pipelines for automated application deployment.',
          'Monitored and managed containerized applications within Kubernetes clusters using kubectl commands.',
          'Performed post-deployment testing and API validation through Swagger and Postman tools.',
        ],
      },
    ],
  },
  {
    company: 'Delta Industries',
    title: 'Sales & Marketing',
    location: 'Mangalore, India',
    period: 'Oct 2019 – Feb 2022',
    projects: [
      {
        name: 'Business Development & Bidding',
        bullets: [
          'Coordinated business development initiatives to enhance client engagement and partnerships.',
          'Collaborated with bidding and sales teams to develop and submit competitive proposals aligned with client requirements and company goals.',
          'Contributed to bid strategy development including pricing models, solution design, and win themes.',
          'Supported sales efforts with technical and commercial input during client meetings, presentations, and negotiations.',
          'Helped win 6 major bids, contributing to a 15–20% revenue increase through strong alignment between bidding and sales efforts.',
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="">
      <div className="section">
        <h3 className="heading text-2xl mb-8">Experience</h3>
        <div className="space-y-6">
        {roles.map((r) => (
          <article
            key={r.title}
            className="card gradient-glow p-6"
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="min-w-[220px]">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {r.company}
                  <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-blue-700 dark:text-blue-300">{r.title}</span>
                </h4>
                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700">
                    {r.location}
                  </span>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-1 ring-blue-200/60 dark:ring-blue-800/60 text-xs">
                {r.period}
              </span>
            </div>
            <div className="mt-5 space-y-6">
              {r.projects.map((p) => (
                <div key={p.name} className="group">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:bg-violet-500 transition-colors" />
                    <h5 className="font-semibold text-sm text-gray-900 dark:text-gray-100">{p.name}</h5>
                    {p.designation && (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 ring-1 ring-violet-200/60 dark:ring-violet-800/60 text-xs">
                        {p.designation}
                      </span>
                    )}
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}
