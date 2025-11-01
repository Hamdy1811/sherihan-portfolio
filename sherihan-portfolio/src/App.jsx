import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoHero from './components/VideoHero';
import CreativeVision from './components/CreativeVision';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <VideoHero />
      <CreativeVision />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
