import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
