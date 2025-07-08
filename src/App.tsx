import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import WhyEdHub from './components/WhyEdHub';
import CTASection from './components/CTASection';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'contact' | 'courses'>('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'courses':
        return <Courses />;
      case 'home':
      default:
        return (
          <>
            <Hero 
              onGetInTouch={() => setCurrentView('contact')} 
              onExploreSolutions={() => setCurrentView('courses')} 
            />
            <ProblemSolution />
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