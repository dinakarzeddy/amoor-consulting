import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Locations from './components/Locations'
import Trust from './components/Trust'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Locations />
      <Trust />
      <CTA />
    </main>
  )
}