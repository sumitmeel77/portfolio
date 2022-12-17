import Navbar from "../src/components/Navbar"
import { useEffect, useRef, useState } from "react"
import Footer from "../src/components/Footer"
import Hero from "../src/components/home/Hero"
import Works from "../src/components/home/Works"
import Skills from "../src/components/home/Skills"
import Experiences from "../src/components/home/Experiences"
import Awards from "../src/components/home/Awards"
import Education from "../src/components/home/Education"
import Contact from "../src/components/home/Contact"
import Certificates from "../src/components/home/Certificates"


function App() {
  const heroRef = useRef(null)
  const skillRef = useRef(null)
  const workRef = useRef(null)
  const experienceRef = useRef(null)
  const awardRef = useRef(null)
  const certificateRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  const [scrollY, setScrollY] = useState(0)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const maxHeight = document.documentElement.clientHeight
    setScrollY(Math.round((Math.floor(window.scrollY) / maxHeight) * 100))
  }
  return (
   <>
    <div className={`${darkMode && "dark"} h-full w-full `}>
      <div className="h-full w-full bg-white dark:bg-opacity-90 dark:bg-background text-black dark:text-white">
        <section ref={heroRef}>
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>
        <div className="relative">
          <Navbar
            opacity={scrollY}
            heroRef={heroRef}
            skillRef={skillRef}
            workRef={workRef}
            experienceRef={experienceRef}
            awardRef={awardRef}
            certificateRef={certificateRef}
            educationRef={educationRef}
            contactRef={contactRef}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <section ref={skillRef} className="h-full w-full">
            <Skills />
          </section>
          <section ref={workRef} className="h-full w-full">
            <Works />
          </section>
          <section ref={experienceRef} className="h-full w-full">
            <Experiences />
          </section>
          <section ref={educationRef} className="h-full w-full">
            <Education />
          </section>
          <section ref={awardRef} className="h-full w-full">
            <Awards awardRef={awardRef} />
          </section>
          <section ref={certificateRef} className="h-full w-full">
            <Certificates />
          </section>
          <section ref={contactRef} className="h-full w-full">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
