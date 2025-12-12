import Hero from './components/Hero';
import WhyYouNeed from './components/WhyYouNeed';
import TheOffer from './components/TheOffer';
import Packages from './components/Packages';
import WhyItBeats from './components/WhyItBeats';
import WhoItsFor from './components/WhoItsFor';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <WhyYouNeed />
      <TheOffer />
      <Packages />
      <WhyItBeats />
      <WhoItsFor />
      <FinalCTA />
    </div>
  );
}

export default App;
