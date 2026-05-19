import { useState } from "react"

import Navbar from "./components/Navbar.jsx"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Architecture from "./sections/Architecture"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"


import es from "./content/es"
import en from "./content/en"

export default function App() {

  const [language, setLanguage] = useState("es")

  const content = language === "es" ? es : en

  return (
    <main className="min-h-screen bg-black text-white pt-20">

     <Navbar language={language} setLanguage={setLanguage} />
      <Hero content={content.hero} />
      <Projects content={content.projects} />
      <Architecture content={content.architecture} />
      <TechStack content={content.techStack} />      
      <Contact />
      <Footer />
    </main>
  )
}