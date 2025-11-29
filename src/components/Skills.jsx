import {
  SiJavascript, SiSpring, SiHibernate, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql, SiDocker, SiKubernetes, SiSwagger, SiGithubactions, SiJenkins, SiGooglecloud, SiAmazonaws, SiMicrosoftazure, SiPostman, SiApachemaven
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { FaDatabase } from 'react-icons/fa'
import { TbApi, TbBrandRedux, TbCloud, TbShieldLock, TbKey, TbLock } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'

// Logo image imports (placeholders). Replace these SVGs with real brand logos if desired.
import javaLogo from '../assets/images/skill-logos/java.svg'
import javascriptLogo from '../assets/images/skill-logos/javascript.svg'
import springbootLogo from '../assets/images/skill-logos/springboot.svg'
import hibernateLogo from '../assets/images/skill-logos/hibernate.svg'
import reactLogo from '../assets/images/skill-logos/react.svg'
import html5Logo from '../assets/images/skill-logos/html5.svg'
import css3Logo from '../assets/images/skill-logos/css3.svg'
import tailwindLogo from '../assets/images/skill-logos/tailwindcss.svg'
import bootstrapLogo from '../assets/images/skill-logos/bootstrap.svg'
import postgresqlLogo from '../assets/images/skill-logos/postgresql.svg'
import mysqlLogo from '../assets/images/skill-logos/mysql.svg'
import dockerLogo from '../assets/images/skill-logos/docker.svg'
import kubernetesLogo from '../assets/images/skill-logos/kubernetes.svg'
import awsLogo from '../assets/images/skill-logos/aws.svg'
import azureLogo from '../assets/images/skill-logos/azure.svg'
import gcpLogo from '../assets/images/skill-logos/gcp.svg'
import githubactionsLogo from '../assets/images/skill-logos/githubactions.svg'
import jenkinsLogo from '../assets/images/skill-logos/jenkins.svg'
import mavenLogo from '../assets/images/skill-logos/maven.svg'
import postmanLogo from '../assets/images/skill-logos/postman.svg'
import swaggerLogo from '../assets/images/skill-logos/swagger.svg'
import intellijLogo from '../assets/images/skill-logos/intellij.svg'
import vscodeLogo from '../assets/images/skill-logos/vscode.svg'
import sqlLogo from '../assets/images/skill-logos/sql.svg'

const groups = [
  { title: 'Languages', items: [
    { label: 'Java (8–17)', icon: DiJava },
    { label: 'JavaScript (ES6+)', icon: SiJavascript },
    { label: 'SQL', icon: FaDatabase }
  ]},
  { title: 'Backend', items: [
    { label: 'Spring Boot', icon: SiSpring },
    { label: 'Spring Security', icon: TbShieldLock },
    { label: 'Spring Data JPA', icon: SiSpring },
    { label: 'Hibernate', icon: SiHibernate },
    { label: 'REST APIs', icon: TbApi },
    { label: 'Kafka Streams', icon: TbCloud },
    { label: 'Microservices', icon: TbCloud },
    { label: 'API Gateway', icon: TbApi },
    { label: 'JWT', icon: TbKey },
    { label: 'OAuth2', icon: TbLock }
  ]},
  { title: 'Frontend', items: [
    { label: 'React.js', icon: SiReact },
    { label: 'React Native', icon: SiReact },
    { label: 'HTML5', icon: SiHtml5 },
    { label: 'CSS3', icon: SiCss3 },
    { label: 'TailwindCSS', icon: SiTailwindcss },
    { label: 'Bootstrap', icon: SiBootstrap },
    { label: 'Redux Toolkit', icon: TbBrandRedux }
  ]},
  { title: 'Databases', items: [
    { label: 'PostgreSQL', icon: SiPostgresql },
    { label: 'MySQL', icon: SiMysql }
  ]},
  { title: 'Cloud', items: [
    { label: 'Azure', icon: SiMicrosoftazure },
    { label: 'GCP', icon: SiGooglecloud },
    { label: 'AWS', icon: SiAmazonaws }
  ]},
  { title: 'DevOps & Tools', items: [
    { label: 'GitHub Actions', icon: SiGithubactions },
    { label: 'Jenkins', icon: SiJenkins },
    { label: 'Docker', icon: SiDocker },
    { label: 'Kubernetes (EKS)', icon: SiKubernetes },
    { label: 'Maven', icon: SiApachemaven },
    { label: 'Postman', icon: SiPostman },
    { label: 'Swagger', icon: SiSwagger },
    { label: 'IntelliJ', icon: VscCode },
    { label: 'VS Code', icon: VscCode }
  ]},
]

export default function Skills() {
  const iconColor = {
    Languages: 'text-yellow-600 dark:text-yellow-400',
    Backend: 'text-purple-600 dark:text-purple-400',
    Frontend: 'text-pink-600 dark:text-pink-400',
    Databases: 'text-green-600 dark:text-green-400',
    Cloud: 'text-sky-600 dark:text-sky-400',
    'DevOps & Tools': 'text-orange-600 dark:text-orange-400'
  }
  const logoMap = {
    java: javaLogo,
    javascript: javascriptLogo,
    springboot: springbootLogo,
    springsecurity: springbootLogo,
    springdatajpa: springbootLogo,
    hibernate: hibernateLogo,
    reactjs: reactLogo,
    reactnative: reactLogo,
    react: reactLogo,
    html5: html5Logo,
    css3: css3Logo,
    tailwindcss: tailwindLogo,
    bootstrap: bootstrapLogo,
    postgresql: postgresqlLogo,
    mysql: mysqlLogo,
    docker: dockerLogo,
    kuberneteseks: kubernetesLogo,
    kubernetes: kubernetesLogo,
    aws: awsLogo,
    azure: azureLogo,
    gcp: gcpLogo,
    githubactions: githubactionsLogo,
    jenkins: jenkinsLogo,
    maven: mavenLogo,
    postman: postmanLogo,
    swagger: swaggerLogo,
    intellij: intellijLogo,
    vscode: vscodeLogo,
    sql: sqlLogo
  }
  const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '')
  return (
    <section id="skills" className="bg-gray-50 dark:bg-black">
      <div className="section">
        <h3 className="heading text-2xl mb-8">Skills</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <div
              key={g.title}
              className="group card gradient-glow"
              style={{ animationDelay: `${gi * 60}ms` }}
            >
              <h4 className="font-semibold text-xl">{g.title}</h4>
              <ul className="flex flex-wrap gap-2 mt-4 text-sm text-gray-700 dark:text-gray-300">
                {g.items.map(({ label, icon: Icon }, si) => {
                  const norm = normalize(label)
                  const logoSrc = logoMap[norm]
                  return (
                    <li
                      key={label}
                      className="relative flex items-center gap-1 px-2 py-1 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-md shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-400/60 dark:hover:border-blue-400/40 group/item"
                      style={{ animationDelay: `${(gi * 8) + si * 25}ms` }}
                    >
                      <span className="absolute inset-0 rounded-md opacity-0 group-hover/item:opacity-100 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-opacity" />
                      {logoSrc ? (
                        <img
                          src={logoSrc}
                          alt={label}
                          className="h-5 w-5 object-contain relative z-10 transition-transform duration-300 group-hover/item:scale-110"
                          loading="lazy"
                        />
                      ) : (
                        Icon && (
                          <Icon
                            className={`relative z-10 text-base ${iconColor[g.title]} drop-shadow-sm transition-transform duration-300 group-hover/item:scale-110`}
                          />
                        )
                      )}
                      <span className="relative z-10">{label}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
