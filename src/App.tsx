import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import CoreFeatures from './components/CoreFeatures';
import WhyEdHub from './components/WhyEdHub';
import CTASection from './components/CTASection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'contact'>('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero 
              onGetInTouch={() => setCurrentView('contact')} 
              onExploreSolutions={() => setCurrentView('about')} 
            />
            <ProblemSolution />
            <CoreFeatures />
            <WhyEdHub />
            <CTASection onScheduleDemo={() => setCurrentView('contact')} onLearnMore={() => setCurrentView('about')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main>
        {renderCurrentView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;