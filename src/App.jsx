import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Matters from './components/Matters'
import Receives from './components/Receives'
import DuringTour from './components/DuringTour'
import KeyStakeholders from './components/KeyStakeholders'
import EngagementMatters from './components/EngagementMatters'
import HowToJoin from './components/HowToJoin'
import Faq from './components/Faq'
import FooterCta from './components/FooterCta'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Matters />
      <Receives />
      <DuringTour />
      <KeyStakeholders />
      <EngagementMatters />
      <HowToJoin />
      <Faq />
      <FooterCta />
    </div>
  )
}

export default App
