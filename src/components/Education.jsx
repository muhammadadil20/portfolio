import nitteLogo from '../assets/images/school-logos/Nitte-Trust-Logo.webp'
import maheshLogo from '../assets/images/school-logos/mahesh.png'
import noorulLogo from '../assets/images/school-logos/noorul.png'
const schools = [
  {
    school: 'NMAM Institute of Technology, Nitte',
    degree: 'Bachelor of Engineering',
    year: '2015 – 2019',
    details: 'Mechanical Engineering; CGPA: 8.63/10',
  },
  {
    school: 'Mahesh PU College, Mangalore',
    degree: '12th',
    year: '2013 – 2015',
    details: 'Science: 89.17%',
  },
  {
    school: 'Noorul Huda English Medium School, Mangalore',
    degree: 'SSLC (10th)',
    year: '2012 – 2013',
    details: '85.28%',
  },
]

export default function Education() {
  return (
    <section id="education" className="">
      <div className="section">
        <h3 className="heading text-2xl mb-8">Education</h3>
        <div className="space-y-6">
        {schools.map((s, i) => (
          <div
            key={s.school}
            className="group card gradient-glow"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <div className="flex items-center gap-3 relative z-10">
                  {/* Optional school logo for NMAM Institute of Technology, Nitte */}
                  {s.school.includes('NMAM Institute of Technology') && (
                    <img src={nitteLogo} alt="NMAM Institute of Technology Logo" className="h-8 w-8 rounded-sm shadow-sm transition-transform duration-300 group-hover:scale-105" />
                  )}
                  {s.school.includes('Mahesh PU College') && (
                    <img src={maheshLogo} alt="Mahesh PU College Logo" className="h-8 w-8 rounded-sm shadow-sm transition-transform duration-300 group-hover:scale-105" />
                  )}
                  {s.school.includes('Noorul Huda English Medium School') && (
                    <img
                      src="https://schools.org.in/assets/images/favicon.png"
                      onError={(e) => { e.currentTarget.src = noorulLogo }}
                      alt="Noorul Huda School Logo"
                      className="h-8 w-8 rounded-sm shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <h4 className="text-lg font-semibold relative z-10">{s.school}</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 relative z-10">{s.degree}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 relative z-10">{s.year}</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 relative z-10">{s.details}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
