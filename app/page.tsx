import Contact from "./components/dashboard/Contact"
import Hero from "./components/dashboard/Hero"
import Projects from "./components/dashboard/Projects"
import Skills from "./components/dashboard/Skills"
import Works from "./components/dashboard/Works"

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Works />
      <Contact />
    </>
  )
}
