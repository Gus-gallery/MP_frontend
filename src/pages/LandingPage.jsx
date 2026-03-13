import Header from '../components/Header'
import Hero from '../components/Hero'
import UnderHero from '../components/UnderHero'

const LandingPage = () => {
  return (
    <div>
    <header className="top-0 sticky z-10">
        <Header />
    </header>
    <Hero />
    <UnderHero />
    
    </div>
  )
}

export default LandingPage