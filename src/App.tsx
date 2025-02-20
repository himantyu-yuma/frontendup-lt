import { AboutSection } from "./components/model/about-section"
import { CareerSection } from "./components/model/career-section"
import { HeroSection } from "./components/model/hero-section"
import { Header } from "./components/ui"

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <CareerSection />
    </>
  )
}

export default App
